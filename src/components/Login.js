
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import escortslogo from '../images/brand/escorts.png';
import kubotalogo from '../images/brand/Kubota-Logo.png'
import bot from '../images/botlogo.png';
import '../App.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 no-gutters">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-teal text-white">
         <div className="col-sm-12 d-flex flex-row-reverse">
          <img
            src={escortslogo}
            alt="Kubota Logo"
            className="mb-4  logo escorts"
            style={{
              maxWidth: '8%',
              position: 'absolute',
              top: '20px', 
            }}
          />
          </div>
          <img
            src={bot}
            alt="Chatbot"
            className="mt-4 bot-image"
            style={{ maxWidth: '80%' }}
          />
        </div>
        
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-white p-4">
        <div className="col-sm-12 d-flex flex-row mb-3">
          <img
            src={kubotalogo}
            alt="Kubota Logo"
            className="mb-4 kubotalogo logo"
            style={{
              maxWidth: '30%',
              position: 'absolute',
              top: '20px', 
            }}
          />
          </div>
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <h1 className="text-center mb-2 text-teal font-weight-bold name">Serv-Genie</h1>
            <div className="form-group mb-3">
              <input type="email" className="form-control form-control-lg" placeholder="Email" />
            </div>
            <div className="form-group mb-3">
              <input type="password" className="form-control form-control-lg" placeholder="Password" />
            </div>
            <div className="form-group ">
              <button
                className="btn btn-teal btn-lg"
                style={{ width: '100%' }}
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


