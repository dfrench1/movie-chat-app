import React from "react";
import ChatWindow from '../chat/ChatWindow'
import {FoldingCube} from 'styled-spinkit'
import Loadable from 'react-loadable';
const Video = Loadable({
  loader: () => import('./video'),
  loading: () => <FoldingCube color={'#ADD8E6'} size={80} />,
});
function Home(props) {
  return (
    <React.Fragment>
    <Video />
    <ChatWindow settings={false}/>
    </React.Fragment>

  )
}

export default Home;