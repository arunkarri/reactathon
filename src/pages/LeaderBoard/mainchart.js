import React, { Component } from 'react';
import Chart from './chart';
import '../LeaderBoard/charts.css';
import FaTrophy from 'react-icons/lib/fa/trophy';
import ReportTables from './ReportTables';
import HackLeader from './HackLeader';

class MainChart extends Component {
constructor(){
    super();
 };
 

componentDidMount() {
    
  
};
render(){
    return (
       
        <div>
        
        <div className="card mychart" >
        <div className="header">
        
        <h4 className="title">Leader Board &nbsp;&nbsp;<FaTrophy size={30} color={'gold'} /></h4>
              <h6 className="title">Report by Submission</h6>
                <Chart/>
                <hr/>
                <h6 className="title">Top 5 Hackers</h6>
                <ReportTables/>
                <hr/>
                <h6 className="title">Hackathons by Popularity</h6>
                <HackLeader/>
        </div>
        
        </div>
        </div>
    );
}
}



export default MainChart;