// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import { Flex, Box, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Breadcrumbs from './components/Breadcrumbs';
// import Dashboard from './components/Dashboard';
// import FileUpload from './components/FileUpload';
// import FileHistory from './components/FileHistory';
// import Login from './components/Login';
// import PrivateRoute from './components/PrivateRoute';
// import { AuthProvider, useAuth } from './contexts/AuthContext';
// import Chat from './userZone/pages/Chat';
// import Userlogin from './components/Userlogin';

// const AppContent = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const sidebarVariant = useBreakpointValue({ base: 'drawer', md: 'sidebar' });
//   const { isAuthenticated } = useAuth();
//   const location = useLocation();

//   // Check if the current path is /chat
//   const isChatPage = location.pathname === '/chat';
//   const isloginpage = location.pathname === '/admin';
//   const isuserloginpage = location.pathname === '/login';

//   return (
//     <Flex minH="100vh">
//       {isAuthenticated && !isChatPage && !isuserloginpage && !isloginpage && (
//         <Sidebar isOpen={isOpen} onClose={onClose} />
//       )}
//       <Flex direction="column" flex="1" ml={{ md: isChatPage ? '0' : '250px' }}>
//         {isAuthenticated && !isChatPage && !isuserloginpage && !isloginpage   && <Header onOpenSidebar={onOpen} />}
//         <Box flex="1" >
//           {isAuthenticated && !isChatPage && !isuserloginpage && !isloginpage  && <Breadcrumbs />}
//           <Routes>
//             <Route path="/admin" element={<Login />} />
//             <Route path="/login" element={<Userlogin />} />
//             <Route path="/chat" element={<Chat />} />
//             <Route
//               path="/"
//               element={
//                 <PrivateRoute>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/fileupload"
//               element={
//                 <PrivateRoute>
//                   <FileUpload />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/filehistory"
//               element={
//                 <PrivateRoute>
//                   <FileHistory />
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </Box>
//       </Flex>
//     </Flex>
//   );
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <AppContent />
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Flex, Box, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Breadcrumbs from './components/Breadcrumbs';
import Dashboard from './components/Dashboard';
import FileUpload from './components/FileUpload';
import FileHistory from './components/FileHistory';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Chat from './userZone/pages/Chat';
import Userlogin from './components/Userlogin';

const AppContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sidebarVariant = useBreakpointValue({ base: 'drawer', md: 'sidebar' });
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // Check if the current path is for login pages or chat
  const isChatPage = location.pathname === '/chat';
  const isLoginPage = location.pathname === '/admin';
  const isUserLoginPage = location.pathname === '/login';

  const showSidebar = isAuthenticated && !isChatPage && !isLoginPage && !isUserLoginPage;
  const showHeader = isAuthenticated && !isChatPage && !isLoginPage && !isUserLoginPage;
  const showBreadcrumbs = isAuthenticated && !isChatPage && !isLoginPage && !isUserLoginPage;

  return (
    <Flex minH="100vh">
      {showSidebar && (
        <Sidebar isOpen={isOpen} onClose={onClose} />
      )}
      <Flex direction="column" flex="1" ml={{ md: showSidebar ? '250px' : '0' }}>
        {showHeader && <Header onOpenSidebar={onOpen} />}
        <Box flex="1">
          {showBreadcrumbs && <Breadcrumbs />}
          <Routes>
            <Route path="/admin" element={<Login />} />
            <Route path="/login" element={<Userlogin />} />
            <Route path="/chat" element={<Chat />} />
            <Route
              path="/"
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
              path="/filehistory"
              element={
                <PrivateRoute>
                  <FileHistory />
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
