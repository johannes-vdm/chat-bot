import { useState } from 'react';
import { ChatResponse, ChatResponseOptions, renderChatResponses } from './ChatResponse';
import { ChatResponseData } from './ChatResponseData';

import './Chatbot.css';
import guus from '../assets/default-male-avatar.jpg';
import messageLogo from '../assets/message.svg';

const Chat = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const chatBoxDisplay = () => {
    setSelectedOptions([]);
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleOptionClick = (option) => {
    if (option) {
      setSelectedOptions([option]);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const _shouldDisplayGuusContainer = selectedOptions.length == 0;

  return (
    <>
      <div className='fixed-bottom p-4 d-flex justify-content-end'>
        <div className="position-relative" style={{ width: '300px' }}>
          {isChatboxOpen && (
            <div className="chat-container">
              <button
              className="btn btn-close bg-light position-absolute end-0 mtn-5 rounded-circle p-2"
                onClick={() => chatBoxDisplay()}
              ></button>
              {_shouldDisplayGuusContainer && (
                <div className='guus-container'>
                  <img src={guus} width={40} height={40} className='shadow rounded-circle position-absolute mtl-5 guus-animate' alt="Guus from LeadInfo" />
                  {/* Intial Chatbot response, same Components are used to read ChatResponseData */}
                  <ChatResponse content={<div className='bg-light rounded p-3 shadow'>
                    <p><b>Guus</b> from Leadinfo<br /><br />Good day <span className='wave'>👋</span><br />Can I help you?</p>
                  </div>} />
                  <div className='align-items-end d-flex flex-column'>
                    <span className='lead-tag bg-black text-light rounded-bottom mx-2 px-1 p-1px fs-6 lead-tag'>
                      Powered by Leadinfo ⚡
                    </span>
                  </div>
                </div>
              )}

              <ChatResponseOptions
                options={['Make appointment', 'I have a question', '🕶 Neo']}
                onOptionClick={handleOptionClick}
                selectedOption={selectedOptions.length > 0 ? selectedOptions[0] : null}
              />
              {renderChatResponses(selectedOptions, ChatResponseData, handleOptionClick)}
            </div>
          )}
          <div className='d-flex flex-row-reverse'>
            <button
              className='btn bg-primary p-3 my-2 rounded-circle'
              onClick={() => chatBoxDisplay()}
            >
              <img src={messageLogo} width={24} height={24} alt="Message Logo" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;