// Chatbot.js
import React, { useState, useRef, useEffect } from 'react';
import { MdAirplanemodeActive } from 'react-icons/md';
import { FaTimes, FaWindowMinimize } from 'react-icons/fa'; // Importe os ícones 'X' e '-'
import { useSpring, animated } from 'react-spring';
import './style.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Bem-vindo! Como posso ajudar? ${'\n'} Escolha uma das opções! ${'\n'} 1 - Sobre nós ${'\n'} 2 - ONG's`,
      user: false,
      options: ["1 - Sobre nós", "2 - ONGs"],
    },
  ]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('pt'); // Defina o idioma padrão
  const [minimized, setMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUserInput = () => {
    if (input.trim() !== '') {
      const userInput = input.toLowerCase();
      setMessages([...messages, { id: messages.length + 1, text: input, user: true }]);
      setInput('');
      handleBotResponse(userInput);
    }
  };

  const handleBotResponse = (userInput) => {
    const responses = {
      '1': 'Somos uma rede social de viagens que conecta pessoas apaixonadas por explorar o mundo.',
      'sobre nós': 'Somos uma rede social de viagens que conecta pessoas apaixonadas por explorar o mundo.',
      '2': 'Nossas ONGs parceiras trabalham em diversos projetos, desde conservação ambiental até desenvolvimento comunitário.',
      'ongs': 'Nossas ONGs parceiras trabalham em diversos projetos, desde conservação ambiental até desenvolvimento comunitário.'
      // Adicione mais respostas com base na entrada do usuário
    };

    const response = responses[userInput] || 'Desculpe, não entendi. Por favor, escolha uma opção válida.';
    
    setMessages([...messages, { id: messages.length + 1, text: response, user: false }]);
  };

  const inputSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <div className={`chatbot-container ${minimized ? 'minimized' : ''}`}>
      {!minimized && (
        <div>
          <div className="chatbot-header">
            <MdAirplanemodeActive className="header-icon" />
            <h3>TravelBot</h3>
            <div className="language-toggle">
              <span onClick={() => setLanguage('en')} className={language === 'en' ? 'active' : ''}>EN</span>
              <span onClick={() => setLanguage('pt')} className={language === 'pt' ? 'active' : ''}>PT</span>
            </div>
            <FaWindowMinimize className="minimize-icon" onClick={() => setMinimized(true)} />
          </div>
          <div className="chatbot">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.user ? 'user' : 'bot'}`}>
                {msg.user ? <MdAirplanemodeActive /> : null}
                <p>{msg.text.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}</p>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>
          <animated.div style={inputSpring} className="user-input">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => handleUserInput()}>Enviar</button>
          </animated.div>
        </div>
      )}
      {minimized && (
        <button onClick={() => setMinimized(false)}>
        <div className="chatbot-header">
        <MdAirplanemodeActive className="header-icon" />
        <h3>TravelBot</h3>
      </div>
        </button>
        
      )}
    </div>
  );
};

export default Chatbot;
