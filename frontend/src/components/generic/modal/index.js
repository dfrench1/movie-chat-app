import React, {useState} from 'react';
import Modal from 'react-responsive-modal';

function VideoModal({trigger, triggerFunc, content}) {
    const [open, setOpen] = useState(trigger)
    return(
    <Modal 
      open={open} 
      onClose={()=>{
          setOpen(false)
          triggerFunc(false)
      }}
      center
      styles={{modal: {padding:'0', width:'100%', background:'black'}}}
    >
      {content}
    </Modal>
    )
}

export default VideoModal