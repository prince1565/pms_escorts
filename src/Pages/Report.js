import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonData from './data.json'; // Import the data.json file

const Report = () => {
  const [data, setData] = useState([]); // Displayed data
  const [originalData, setOriginalData] = useState([]); // Original unfiltered data
  const [columns, setColumns] = useState([]);
  const [filters, setFilters] = useState({}); // Track filter values for each column

  const role = "Admin"; // Example role, replace with actual role from your auth logic

  useEffect(() => {
    setColumns(jsonData.columns);
    setData(jsonData.data);
    setOriginalData(jsonData.data);

    // Initialize filters state for filterable columns
    const initialFilters = jsonData.columns.reduce((acc, column) => {
      if (column.filterable) {
        acc[column.id] = ''; // Only set up filters for columns marked as filterable
      }
      return acc;
    }, {});
    setFilters(initialFilters);
  }, []);

  const downloadPdf = () => {
    const doc = new jsPDF('l', 'pt', 'a4');
    const tableColumn = columns.map(col => col.Header);
    const tableRows = data.map(row => columns.map(col => row[col.id]));

    doc.setFontSize(16);
    doc.text('Report', 40, 30);

    const columnWidths = columns.map(col => {
      const maxHeaderWidth = doc.getTextWidth(col.Header);
      const maxDataWidth = Math.max(...data.map(row => doc.getTextWidth(String(row[col.id]))));
      return Math.max(maxHeaderWidth, maxDataWidth) + 10;
    });

    const totalWidth = columnWidths.reduce((sum, width) => sum + width, 0);
    const pageWidth = doc.internal.pageSize.width - 40;
    const scale = pageWidth / totalWidth;
    const adjustedColumnWidths = columnWidths.map(width => width * scale);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 50,
      margin: { horizontal: 10 },
      styles: {
        cellPadding: 5,
        fontSize: 8,
        overflow: 'linebreak',
        halign: 'center',
        valign: 'middle'
      },
      columnStyles: columns.reduce((styles, col, index) => {
        styles[col.id] = { cellWidth: adjustedColumnWidths[index] };
        return styles;
      }, {}),
      pageBreak: 'auto',
      didDrawPage: (data) => {
        doc.text(`Page ${data.pageNumber}`, doc.internal.pageSize.width - 60, doc.internal.pageSize.height - 30);
      }
    });

    doc.save('report.pdf');
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(dataBlob, 'report.xlsx');
  };

  const handleFilterChange = (e, columnId) => {
    const value = e.target.value;
    const updatedFilters = { ...filters, [columnId]: value };
    setFilters(updatedFilters);

    const filteredData = originalData.filter(row => {
      return Object.keys(updatedFilters).every(key => {
        if (!updatedFilters[key]) return true;
        return String(row[key]).toLowerCase().includes(updatedFilters[key].toLowerCase());
      });
    });

    setData(filteredData);
  };

  const clearAllFilters = () => {
    const clearedFilters = Object.keys(filters).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    setFilters(clearedFilters);
    setData(originalData); // Reset data to original unfiltered data
  };

  return (
    <div className="container mt-4">
      {role !== '' && role !== "User" && (
        <div className='d-grid gap-2 d-md-flex justify-content-md-end mb-3'>
          <button className="btn btn-primary me-2" onClick={downloadPdf}>Download PDF</button>
          <button className="btn btn-success me-2" onClick={downloadExcel}>Download Excel</button>
          
        </div>
      )}

      {/* Render filterable fields */}
      <div className="row mb-3">
        {columns.map(column => (
          column.filterable && (
            <div key={column.id} className="col-md-3">
              <label>{column.Header}</label>
              <select
                className="form-select"
                value={filters[column.id]}
                onChange={(e) => handleFilterChange(e, column.id)}
              >
                <option value="">All</option>
                {[...new Set(originalData.map(row => row[column.id]))].map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
          )
        ))}
        <div className="col-md-3 mt-4"><button className="btn btn-warning mt-2" onClick={clearAllFilters}>Clear All Filters</button></div>
      </div>

      <div className="scrollbar-wrapper">
        <div className="table-wrapper">
          <table className="table table-striped">
            <thead>
              <tr>
                {columns.map(column => (
                  <th key={column.id}>{column.Header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  {columns.map(column => (
                    <td key={column.id}>{row[column.id]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
