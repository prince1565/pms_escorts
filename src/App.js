import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Flex, Box, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import Header from './Pages/Header';
import Sidebar from './Pages/Sidebar';
import Breadcrumbs from './Pages/Breadcrumbs';
import Dashboard from './Pages/Dashboard';
import FileUpload from './Pages/FileUpload';
import Report from './Pages/Report';
import Login from './Pages/Login';
import PrivateRoute from './Pages/PrivateRoute';
import { AuthProvider, useAuth } from './contexts/AuthContext';


const AppContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const sidebarVariant = useBreakpointValue({ base: 'drawer', md: 'sidebar' });
  const { isAuthenticated } = useAuth();
  const location = useLocation();


  const isLoginPage = location.pathname === '/';


  const showSidebar = isAuthenticated && !isLoginPage ;
  const showHeader = isAuthenticated  && !isLoginPage;
  const showBreadcrumbs = isAuthenticated && !isLoginPage ;

  return (
    <Flex minH="100vh" className='bg-light'>
      {showSidebar && (
        <Sidebar isOpen={isOpen} onClose={onClose} />
      )}
      <Flex direction="column" flex="1" ml={{ md: showSidebar ? '250px' : '0' }}>
        {showHeader && <Header onOpenSidebar={onOpen} />}
        <Box flex="1">
          {showBreadcrumbs && <Breadcrumbs />}
          <Routes>
            <Route path="/" element={<Login/>} />
            
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/fileupload"
              element={
                <PrivateRoute>
                  <FileUpload />
                </PrivateRoute>
              }
            />
            <Route
              path="/report"
              element={
                <PrivateRoute>
                  <Report />
                </PrivateRoute>
              }
            />
          </Routes>
        </Box>
      </Flex>
    </Flex>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
