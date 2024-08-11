import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './pages/Chat';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box className="App">
          <Routes>
          <Route path="/" element={<Chat />} />
            
         </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
