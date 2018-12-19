import React from "react"

const Message = ({ message, onclick, buttonText }) => {
  return (
    <div className="message-box">
      <div className="message">
        <div>{message}</div>
        <div>
          <button onClick={onclick}>{buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default Message
