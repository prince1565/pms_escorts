
// import React, { useState, useEffect } from 'react';
// import { Input, IconButton } from '@chakra-ui/react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import '../App.css';

// const InputComponent = ({ onSend, clearInput }) => {
//   const [message, setMessage] = useState('');

//   const handleSend = (event) => {
//     event.preventDefault();
//     SpeechRecognition.stopListening();
//     if (message.trim()) {
//       onSend(message);
//       setMessage('');
//     }
//   };

//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition
//   } = useSpeechRecognition();

//   const startListening = () => SpeechRecognition.startListening({ continuous: false, interimResults: true });

//   const handleListen = () => {
//     resetTranscript();
//     startListening();
//   };


//   useEffect(() => {
//     setMessage(transcript);
//   }, [transcript]);

//   useEffect(() => {
//     if (clearInput) {
//       setMessage('');
//     }
//   }, [clearInput]);

//   return (
//     <div className="input-container">
//       <form className="chat-form" onSubmit={handleSend}>
//         <Input
//           className="form-control"
//           type="text"
//           placeholder="Ask your question here..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
        
//         <IconButton
//           aria-label="Voice Input"
//           onClick={handleListen}
//           className={` ${listening ? 'voice-input-button-on' : 'voice-input-button'}`} 
//           icon={
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
//               <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
//               <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
//             </svg>
//           }
//           colorScheme="white"
//           marginRight="10px" // Adjusted to shift the mic to the left
//         />
//         <IconButton
//           type="submit"
//           aria-label="Send Message"
//           icon={
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
//               <path d="M15.854.146a.5.5 0 0 0-.683.183L1.15 8.926a.5.5 0 0 0-.052.558l3.38 6.76a.5.5 0 0 0 .875-.017l6.742-12.196a.5.5 0 0 0-.092-.592L15.854.146zM4.937 13.16L3.19 9.452 12.56 3.12 4.937 13.16zm-1.272-3.3l-2.083 4.173 4.275-2.245-2.192-1.928z"/>
//             </svg>
//           }
//           colorScheme="teal"
//         />
//       </form>
//     </div>
//   );
// };

// export default InputComponent;


import React, { useState, useEffect } from 'react';
import { Input, IconButton } from '@chakra-ui/react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../App.css';

const InputComponent = ({ onSend, clearInput }) => {
  const [message, setMessage] = useState('');

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    setMessage(transcript);
  }, [transcript]);

  useEffect(() => {
    if (clearInput) {
      setMessage('');
    }
  }, [clearInput]);

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true, interimResults: true });
    }
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (listening) {
      SpeechRecognition.stopListening();
    }
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="input-container">
      <form className="chat-form" onSubmit={handleSend}>
        <Input
          className="form-control"
          type="text"
          placeholder="Ask your question here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        <IconButton
          aria-label="Voice Input"
          onClick={toggleListening}
          className={` ${listening ? 'voice-input-button-on' : 'voice-input-button'}`} 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
            </svg>
          }
          colorScheme="white"
          marginRight="10px" // Adjusted to shift the mic to the left
        />
        <IconButton
          type="submit"
          aria-label="Send Message"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 0-.683.183L1.15 8.926a.5.5 0 0 0-.052.558l3.38 6.76a.5.5 0 0 0 .875-.017l6.742-12.196a.5.5 0 0 0-.092-.592L15.854.146zM4.937 13.16L3.19 9.452 12.56 3.12 4.937 13.16zm-1.272-3.3l-2.083 4.173 4.275-2.245-2.192-1.928z"/>
            </svg>
          }
          colorScheme="teal"
        />
      </form>
    </div>
  );
};

export default InputComponent;

