// components/FileHistory.js
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const FileHistory = () => {
  return (
    <div className="col-sm-10 mx-auto">
      <table class="table" >
  <thead>
    <tr>
      <th scope="col">SI No.</th>
      <th scope="col">File Name</th>
      <th scope="col">File Type</th>
      <th scope="col">Uploaded Date</th>
      <th scope="col">Uploaded by</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Escorts engine</td>
      <td>Pdf</td>
      <td>28/07/2024</td>
      <td>Animesh Kumar</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Farmtrac</td>
      <td>Image</td>
      <td>06/08/2024</td>
      <td>Prince Kumar</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Escorts engine</td>
      <td>Pdf</td>
      <td>28/07/2024</td>
      <td>Anil Kumar</td>
    </tr>
    
    
  </tbody>
</table>
    </div>
  );
};

export default FileHistory;
