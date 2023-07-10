import { useState } from 'react';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleNewUserMessage = async (newMessage) => {
    setMessages((prevState) => [...prevState, { author: 'user', message: newMessage }]);
    try {
      const response = await axios.post('/api/chatbot', { message: newMessage });
      const { reply } = response.data;
      setMessages((prevState) => [...prevState, { author: 'bot', message: reply }]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Chatbot"
      subtitle="AI-powered chatbot"
      senderPlaceHolder="Type your message..."
      profileAvatar="path_to_your_avatar_image"
      showTimeStamp
      autofocus
      fullScreenMode
      messages={messages.map((message, index) => ({
        id: index,
        author: message.author,
        message: message.message,
      }))}
    />
  );
};

export default Chatbot;
