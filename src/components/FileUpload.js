/** @format */

// components/FileUpload.js
import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const FileUpload = () => {

const handleSubmit = (e)=>{
  e.preventDefault();
}

  return (
    <div className="col-sm-10 mx-auto">
      
      <h1 className="mt-5" style={{ textAlign: "center" }}>
        File Upload
      </h1>
      <form onSubmit={handleSubmit}>
      <div className="col-sm-5 mx-auto mt-5">
        <table>
          <tr>
            <th>
              <label>File type: </label>
            </th>
            <td>
              <select class="form-select  shadow-none" aria-label="Default select example">
                <option selected>Select File Type</option>
                <option value="Pdf">Pdf</option>
                <option value="Image">Image</option>
                <option value="Docs">Docs</option>
                <option value="Video">Video</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>
              <label className="mt-4">File Upload:</label>
            </th>
            <td>
              <div class="mb-3 mt-5 ">
                <input class="form-control shadow-none" type="file" id="formFile" />
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </td>
          </tr>
        </table>
      </div>
      </form>
    </div>
  );
};

export default FileUpload;
