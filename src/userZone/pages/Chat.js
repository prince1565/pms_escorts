
import React, { useState } from "react";
import { Box, VStack, IconButton,Text } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import Chatbot from "../components/Chatbot";
import ChatHistory from "../components/ChatHistory";
import InputComponent from "../components/InputComponent";
import logo from "../Images/eslogo.png";
import Header from "../components/Header";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [clearInput, setClearInput] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const firstmsg = { sender: "bot", text: "hello how can i help you?" };

  const guidedQuestions = {
    sender: "bot",
    text: "How can I help you today?",
    options: ["Question about services", "Support issue", "Billing query"]
  };

  const handleSend = (message) => {
    const userMessage = { sender: "user", text: message };
    const botMessage = {
      sender: "bot",
      text: "Bot message comes here"
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
  };

  const handleClear = () => {
    setMessages([]);
    setClearInput(true);
    setTimeout(() => setClearInput(false), 0);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box display="flex" height="100vh">
      <Box
        position={{ base: "absolute", md: "relative" }}
        transform={{ base: isSidebarOpen ? "translateX(0)" : "translateX(-100%)", md: "none" }}
        transition="transform 0.3s ease-in-out"
        width={{ base: "75%", md: "20%" }}
        bg="blue.50"
        p={4}
        height="100vh"
        zIndex="10"
      >
        <div className="d-grid col-9 mx-auto">
          <img src={logo} alt="Logo" />
        </div>
        <br />
        <div className="d-grid gap-2 col-8 col-lg-6 mx-auto">
          <button className="btn btn-danger border-0 shadow-none" onClick={handleClear}>
            New Chat
          </button>
        </div>
        <ChatHistory messages={messages} />
        <IconButton
          aria-label="Close Sidebar"
          background={"transparent"}
          icon={<FaTimes />}
          onClick={toggleSidebar}
          display={{ base: "block", md: "none" }}
          position="absolute"
          top="10px"
          right="0px"
          _hover={{ background: 'transparent' }}
          _active={{ background: 'transparent' }}
          boxSize="40px" // Adjust the size as needed
          fontSize="24px" // Adjust the icon size as needed
        />
      </Box>
      <Box flex="1" p={4} width={{ base: "100%", md: "80%" }}>
        <IconButton
          aria-label="Open Sidebar"
          background={"transparent"}
          icon={<FaBars />}
          onClick={toggleSidebar}
          display={{ base: "block", md: "none" }}
          position="absolute"
          top="22px"
          left="10px"
          _hover={{ background: 'transparent' }}
          _active={{ background: 'transparent' }}
          boxSize="40px" // Adjust the size as needed
          fontSize="24px" // Adjust the icon size as needed
          
        />
        <VStack spacing={4} height="100%">
          <Header />
          <Box flex="1" width="100%" overflowY="auto">
            <Box m={2} display="flex" justifyContent={firstmsg.sender === "user" ? "flex-end" : "flex-start"}>
              <Box
                bg={"red.200"}
                color={"red.900"}
                px={4}
                borderRadius="md"
                maxWidth="60%"
              >
                <Text pt={2}>{firstmsg.text}</Text>
              </Box>
            </Box>
            {messages && messages.map((msg, index) => (
              <Chatbot key={index} message={msg} onSend={handleSend} />
            ))}
          </Box>
          <InputComponent onSend={handleSend} clearInput={clearInput} />
        </VStack>
      </Box>
    </Box>
  );
};

export default Chat;
