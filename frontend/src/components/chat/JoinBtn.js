import React from "react";

const JoinBtn = ({ name, setFlash, saveUser, toggleChat, leave, clearMessages }) => {
  return (
    <button
      onClick={e => {
        if(leave){
          toggleChat(false);
          clearMessages();
        } 
        else {
          e.preventDefault();
          if (name && name !== "") {
            saveUser(name);
            toggleChat(true);
          } else {
            setFlash({ message: "Please enter username" });
          }
        }
      }}
    >
      {leave ? 'Leave' : 'Join'}
    </button>
  );
};

export default JoinBtn;
