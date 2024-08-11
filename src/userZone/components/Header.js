
/** @format */

import React from "react";
import Dropdown from "./Dropdown";
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate=useNavigate();
  const handleLogout=()=>{
    navigate('/login');
  }
  return (
    <div className="col-sm-12">
      <div className="d-flex flex-row-reverse">
        <div className="p-2">
          <button className="btn btn-danger border-1 shadow-none px-3 py-1 rounded-4" onClick={handleLogout}>Logout</button>
        </div>
        <div className="p-2">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}
