const ChatResponse = ({ content }) => (
  content
);

const ChatResponseOptions = ({ options, onOptionClick, selectedOption }) => {
  const handleOptionClick = (option) => {
    onOptionClick(option);
  };

  return (
    <div className='d-flex flex-column align-items-end btn-group-animate'>
      {selectedOption ? (
        <button
          className={`btn btn-light btn-outline-secondary rounded-pill shadow my-1 ${selectedOption === selectedOption ? 'selected btn-info' : ''}
          `}
          onClick={() => handleOptionClick(selectedOption)}
        >
          {selectedOption}
        </button>
      ) : (
        options.map((option, index) => (
          <button
            key={index}
            className={`btn btn-light btn-outline-secondary rounded-pill shadow my-1 ${option === selectedOption ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))
      )}
    </div>
  );
};


const renderChatResponses = (selectedOptions, responseData, handleOptionClick) => {
  let chatContent = null;

  for (const currentOption of selectedOptions) {
    console.log('Current Option:', currentOption);
    const optionResponses = responseData[currentOption];

    if (optionResponses) {
      console.log('Option Responses:', optionResponses);
      chatContent = (
        <>
          {chatContent}
          <ChatResponse content={optionResponses.content} />
          <ChatResponseOptions
            options={optionResponses.options}
            onOptionClick={handleOptionClick}
          />
        </>
      );
    } else {
      console.info(`No response found for option: ${currentOption}`);
    }
  }


  return chatContent;
};

export { ChatResponse, ChatResponseOptions, renderChatResponses };
