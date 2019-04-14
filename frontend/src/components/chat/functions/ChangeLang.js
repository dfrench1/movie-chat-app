export function changeLang(props,disableInput,enableInput,e){
    const msgLength = props.messages.length
    if(msgLength > 0){
      let messages;
      //only translate the last 5 messages 
      if (msgLength < 5){
        messages = props.messages
      } else {messages = props.messages.slice(-5)}

      disableInput()
      fetch(`https://sti4ozpaj4.execute-api.eu-west-1.amazonaws.com/dev/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: messages, lang: e.target.value })
      })
        .then(res => res.json())
        .then(json => {
          props.translateMessages(json)
          enableInput()
        })
        .catch(err => {
          console.log(err);
          enableInput()
        });
    }
}