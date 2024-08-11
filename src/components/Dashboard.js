// components/Dashboard.js
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <div className='col-sm-10 mx-auto'>
      
      <div class="container mt-4">
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body text-center">
          <h5 class="card-title">Total Uploads</h5>
          <p class="card-text display-4">25</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body text-center">
          <h5 class="card-title">Pdfs</h5>
          <p class="card-text display-4">18</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body text-center">
          <h5 class="card-title">Image</h5>
          <p class="card-text display-4">2</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body text-center">
          <h5 class="card-title">Audio</h5>
          <p class="card-text display-4">3</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body text-center">
          <h5 class="card-title">Video</h5>
          <p class="card-text display-4">2</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Dashboard;
