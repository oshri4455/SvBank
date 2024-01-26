import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function PageBankai(props) {
  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th className="table-header">Full Name</th>
            <th className="table-header">ID</th>
            <th className="table-header">Details</th>
          </tr>
        </thead>
        <tbody>
          {props.userName.map((val, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">{val.fullName}</td>
              <td className="table-cell">{val.id}</td>
              <td className='td'><Link to={`/userDeatils/${val.fullName}`}><button id='show'></button></Link></td>
          
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}