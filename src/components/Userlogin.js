import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import escortslogo from '../images/brand/escorts.png';
import kubotalogo from '../images/brand/Kubota-Logo.png';
import bot from '../images/botlogo.png';
import '../App.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [otpVisible, setOtpVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(0);
  const [showResend, setShowResend] = useState(false);

  const handleGetOtp = () => {
    setOtpVisible(true);
    setTimer(30);
    setShowResend(false);
    // Here you would typically call your API to send the OTP to the user's email
  };

  const handleResendOtp = () => {
    setTimer(30);
    setShowResend(false);
    // Re-send OTP logic here
  };

  const handleLogin = () => {
    // Handle OTP verification logic here
    login();
    navigate('/chat');
  };

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else if (timer === 0 && otpVisible) {
      setShowResend(true);
    }
  }, [timer, otpVisible]);

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100 no-gutters">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-teal text-white">
          <div className="col-sm-12 d-flex flex-row-reverse">
            <img
              src={escortslogo}
              alt="Kubota Logo"
              className="mb-4 logo escorts"
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
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {!otpVisible && (
              <div className="form-group mb-3">
                <button
                  className="btn btn-teal btn-lg"
                  style={{ width: '100%' }}
                  onClick={handleGetOtp}
                >
                  Get OTP
                </button>
              </div>
            )}
            {otpVisible && (
              <>
                <div className="form-group mb-3">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-teal btn-lg"
                    style={{ width: '100%' }}
                    onClick={handleLogin}
                  >
                    Submit
                  </button>
                </div>
                {showResend ? (
                  <div className="text-center">
                    <button
                      className="btn btn-link"
                      onClick={handleResendOtp}
                    >
                      Resend OTP
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <small className="text-muted">Resend OTP in: {timer} seconds</small>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

