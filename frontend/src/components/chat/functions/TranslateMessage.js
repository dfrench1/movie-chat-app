import {saveMessage} from './SaveMessage'

export function translateMessage(messageData, props,name,author,isOpen,setBadge,badge,type,date,enableInput){
    fetch(`https://sti4ozpaj4.execute-api.eu-west-1.amazonaws.com/dev/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: messageData.text, lang: props.lang })
      })
        .then(res => res.json())
        .then(json => {
          const isMe = name === author ? "me" : "them";
          if (!isOpen) {
            setBadge(+badge + 1);
          }
          saveMessage(props,isMe,type,date,author,json)
        //   props.saveMessages({
        //     author: isMe,
        //     type,
        //     data: { text: `${author} : ${json}` },
        //     date: date
        //   });
          enableInput()
        })
        .catch(err => {
          console.log(err);
          const isMe = name === author ? "me" : "them";
          if (!isOpen) {
            setBadge(+badge + 1);
          }
          saveMessage(props,isMe,type,date,author,messageData.text)
        //   props.saveMessages({
        //     author: isMe,
        //     type,
        //     data: { text: `${author} : ${messageData.text}` },
        //     date: date
        //   });
          enableInput()
        });
}