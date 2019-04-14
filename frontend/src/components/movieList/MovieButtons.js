import React, {useState} from "react";
import { ButtonWrap, ButtonStyle, IframeStyle } from "./styled";
import Modal from '../../components/generic/modal'

function MovieButton ({ props, film }) {
  const [modal, setModal] = useState(false)
  return (
  <ButtonWrap>
    <ButtonStyle
      color="white"
      background="green"
      onClick={() => {
        setModal(true)
      }}
    >
      Watch Trailer
    </ButtonStyle>
    {modal && <Modal 
      trigger={modal} 
      triggerFunc={setModal}
      content={
        <IframeStyle
          frameBorder="0"
          allowFullScreen
          src={`https://www.youtube.com/embed/${film.videoID}?rel=0&autoplay=1&mute=1`}>
        </IframeStyle>
      } 
    />}    
 
  </ButtonWrap>
);
}

export default MovieButton;
