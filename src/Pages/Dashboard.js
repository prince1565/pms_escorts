/** @format */

// components/Dashboard.js
import React from "react";
import DonutChart from "../components/Chart";
import ProjectTimeChart from "../components/ProjectTimeChart";
import MyTask from "../components/MyTask";
import DirectChat from "../components/DirectChat";
import FilterProject from "../components/FilterProject";
import CalendarComponent from "../components/CalendarComponent";

const Dashboard = () => {
  // project list
  const projects = ["Project A", "Project B", "Project C","Project D", "Project E", "Project F","Project G", "Project H", "Project I","Project j", "Project K", "Project L"];
  const estimatedTimes = [30, 45, 20,30,50,80,60,70,90,30,40,50];
  const actualTimes = [25, 50, 15,18,46,67,34,65,87,24,34,45];

  return (
    <div className="col-sm-12 mx-auto ">
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-80">
              <div class="small-box bg-info">
                <div class="inner">
                  <h3>20</h3>
                  <p>All Project</p>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-file-shield"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-80">
              <div class="small-box bg-gradient-success">
                <div class="inner">
                  <h3>50</h3>
                  <p>Total Open Task</p>
                </div>
                <div class="icon">
                  <i class="fa-regular fa-folder-open"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-80">
              <div class="small-box bg-gradient-warning">
                <div class="inner">
                  <h3>18</h3>
                  <p>Inprogress Project</p>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-bars-progress"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-5 ms-5">
            <MyTask/>
          </div>
          <div className="col-md-5 ms-5 ps-2">
            <DirectChat/>
          </div>
        </div>

        <div className="row mt-5 ">
          <div className="col-md-4">
            <DonutChart />
          </div>
          <div className="col-md-8">
            <ProjectTimeChart
              projects={projects}
              estimatedTimes={estimatedTimes}
              actualTimes={actualTimes}
            />
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-md-12 mx-auto   py-4">
            <FilterProject/>
          </div>
          
        </div>
        <div className="row mt-5">
          <div className="col-md-12  mx-auto py-4">
            <CalendarComponent/>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
