import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FormWrap } from "./styled";
import { Launcher } from "react-chat-window";
import { saveUser } from "../../redux/actions";
import { toggleChat } from "../../redux/actions";
import { saveMessages } from "../../redux/actions";
import { translateMessages } from "../../redux/actions";
import { saveLang } from "../../redux/actions";
import { clearMessages } from "../../redux/actions";
import { FadingCircle } from "styled-spinkit";
import Sockette from "sockette";
import { translateMessage } from "./functions/TranslateMessage";
import { changeLang } from "./functions/ChangeLang";
import { newConnection } from "./functions/NewConnection";
import UserName from "./UserName";
import Language from "./Language";
import JoinBtn from "./JoinBtn";
let ws = null;

const ChatSettings = props => {
  const [badge, setBadge] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(props.user);
  const [flash, setFlash] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.openChat && openConnection();
    return function cleanup() {
      ws && ws.close();
      ws = null;
    };
  }, [props.messages, props.openChat, name, props.lang]);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setBadge(0);
  };

  const disableInput = () => {
    setLoading(true);
  };

  const enableInput = () => {
    setLoading(false);
  };

  const openConnection = () => {
    ws = newConnection(Sockette, onMessageReceived);
  };

  const onMessageWasSent = message => {
    disableInput();
    const newMessage = { ...message, author: name, date: Date.now() };
    ws.json({
      action: "sendMessage",
      data: JSON.stringify(newMessage)
    });
  };

  const onMessageReceived = ({ data }) => {
    const { author, type, data: messageData, date } = JSON.parse(data);
    translateMessage(
      messageData,
      props,
      name,
      author,
      isOpen,
      setBadge,
      badge,
      type,
      date,
      enableInput
    );
  };

  const onLangChange = e => {
    changeLang(props, disableInput, enableInput, e);
  };
  return (
    <React.Fragment>
      {props.settings && <FormWrap>
        <div style={{ textAlign: "left" }}>
          <UserName 
            name={name} 
            setName={setName} 
            openChat={props.openChat}
          />
          <Language
            saveLang={props.saveLang}
            lang={props.lang}
            onLangChange={onLangChange}
          />
        </div>
        <JoinBtn
          name={name}
          setFlash={setFlash}
          saveUser={props.saveUser}
          toggleChat={props.toggleChat}
          leave={props.openChat ? true : false}
          clearMessages={props.clearMessages}
        />

        {flash && !props.openChat && <div>{flash.message}</div>}
      </FormWrap>}
      {props.openChat && (
        <Launcher
          agentProfile={{
            teamName: "Movie Chat Room"
          }}
          onMessageWasSent={onMessageWasSent}
          messageList={props.messages}
          handleClick={handleClick}
          isOpen={isOpen}
          showEmoji
          newMessagesCount={badge}
        />
      )}
      {loading && (
        <div
          style={{
            position: "fixed",
            right: "3.5em",
            bottom: "11.5em",
            width: "300px",
            height: "70px"
          }}
        >
          <FadingCircle size="60" />
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  messages: state.messages,
  openChat: state.openChat,
  lang: state.lang
});

const mapDispatchToProps = dispatch => ({
  saveUser: value => dispatch(saveUser(value)),
  saveMessages: value => dispatch(saveMessages(value)),
  toggleChat: value => dispatch(toggleChat(value)),
  translateMessages: value => dispatch(translateMessages(value)),
  saveLang: value => dispatch(saveLang(value)),
  clearMessages: () => dispatch(clearMessages()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatSettings);
