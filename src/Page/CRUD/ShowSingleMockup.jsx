import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PieChartComponent, LineChartComponent, BarChartComponent } from "./Graph.jsx";
import NavigationBar from "../../component/NavigationBar/NavigationBar.jsx";
import './Graph.css';

export default function ShowSingleMockup(){
    return(
    <div className="graph-container">
      <NavigationBar />
      <div className="graph-page-text-header">
        <h1>Motor Name</h1>
        <h1>Motor ID</h1>
      </div>
      <div className="dashboard">
        <div className="dashboard-row">
          <div style={{width: "45%" , height: "200px",backgroundColor:"red"}}>Hello</div>
          <div style={{width: "45%" , height: "200px",backgroundColor:"red"}}>Hello</div>
        </div>
        <div className="dashboard-row">
          <div style={{width: "45%" , height: "200px",backgroundColor:"red"}}>Hello</div>
          <div style={{width: "45%" , height: "200px",backgroundColor:"red"}}>Hello</div>
        </div>
      </div>
      <div className="table-text-header">
        <h1>Data Log</h1>
      </div>
      <table className="monitor-table">
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Vibration</th>
            <th>Voltage</th>
            <th>Current</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
            <tr >
              <td>25</td>
              <td>30</td>
              <td>200</td>
              <td>300</td>
              <td>2024-04-03</td>
            </tr>
            <tr >
              <td>25</td>
              <td>30</td>
              <td>200</td>
              <td>300</td>
              <td>2024-04-03</td>
            </tr>
            <tr >
              <td>25</td>
              <td>30</td>
              <td>200</td>
              <td>300</td>
              <td>2024-04-03</td>
            </tr>
            <tr >
              <td>25</td>
              <td>30</td>
              <td>200</td>
              <td>300</td>
              <td>2024-04-03</td>
            </tr>
        </tbody>
      </table>
      
        
    </div>
    );
};