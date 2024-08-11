import React, { useRef, useEffect } from "react";
import { Box, Text, VStack, Button } from "@chakra-ui/react";

const Chatbot = ({ message, onSend }) => {
  const chatEndRef = useRef(null);

  const handleOptionClick = (option) => {
    onSend(option);
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  return (
    <Box display="flex" justifyContent={message.sender === 'user' ? 'flex-end' : 'flex-start'}>
      <Box mt={4}
        bg={message.sender === 'user' ? "green.200" : "red.200"}
        color={message.sender === 'user' ? "green.900" : "red.900"}
        px={4}
        py={2}
        borderRadius="md"
        maxWidth="60%"
        wordBreak="break-word" // Ensure long words break to fit within the box
      >
        <Text mb={2}>{message.text}</Text>
        {message.options && (
          <VStack mt={2} spacing={2} align="stretch">
            {message.options.map((option, index) => (
              <Button
                key={index}
                size="sm"
                variant="solid"
                colorScheme={message.sender === 'user' ? "green" : "red"}
                onClick={() => handleOptionClick(option)}
                _hover={{ bg: message.sender === 'user' ? "green.300" : "red.300" }}
                _active={{ bg: message.sender === 'user' ? "green.400" : "red.400" }}
                _focus={{ boxShadow: "outline" }}
                borderRadius="md"
                width="full"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                minHeight="auto"
                height="auto"
                whiteSpace="normal" // Allows text to wrap
                p={4} // Adds padding to ensure there's space around the text
              >
                <Text
                  as="span"
                  display="block"
                  width="100%"
                  textAlign="center"
                >
                  {option}
                </Text>
              </Button>
            ))}
          </VStack>
        )}
        <div ref={chatEndRef} />
      </Box>
    </Box>
  );
};

export default Chatbot;







