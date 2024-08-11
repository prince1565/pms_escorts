import React, { useState, useEffect } from 'react';
import { VStack, Text, Box } from '@chakra-ui/react';
import '../App.css';

const ChatHistory = ({ messages }) => {
  const [chathistory, setchathistory] = useState([]);

  useEffect(() => {
    // Fetch history from local storage on component mount
    
    const retrievedArray = getArrayFromLocalStorage('chathistory');
    setchathistory(retrievedArray);
  }, []);

  useEffect(() => {
    // Check if there are messages and the first message is not already in the history
    if (messages.length > 0) {
      const firstmsg = messages[0].text;
      if (chathistory.length === 0 || chathistory[chathistory.length - 1] !== firstmsg) {
        const updatedHistory = [...chathistory, firstmsg];
        setchathistory(updatedHistory);
        saveArrayToLocalStorage('chathistory', updatedHistory);
      }
    }
  }, [messages]);

  // Method to store history data in localStorage
  const saveArrayToLocalStorage = (key, array) => {
    localStorage.setItem(key, JSON.stringify(array));
  };

  // Method to access history data from localStorage
  const getArrayFromLocalStorage = (key) => {
    const storedArray = localStorage.getItem(key);
    return storedArray ? JSON.parse(storedArray) : [];
  };

  return (
    <Box maxH="80vh" overflowY="auto" className='msghistory'>
      <VStack spacing={2} marginTop={5} align="start" style={{ overflow: 'hidden' }} >
        {chathistory.length > 0 && [...chathistory].reverse().map((msg, index) => (
          <Text key={index}>{msg}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default ChatHistory;


