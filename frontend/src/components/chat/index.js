import React from "react";
import ChatWindow from './ChatWindow'
import {SettingsWrap} from './styled'

const Chat = () => (
    <SettingsWrap>
      <h3>Chat Settings</h3>
      <ChatWindow settings={true}/>
    </SettingsWrap>
);

export default Chat;
