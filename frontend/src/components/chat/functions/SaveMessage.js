export function saveMessage(props,isMe,type,date,author,json){
    props.saveMessages({
        author: isMe,
        type,
        data: { text: `${author} : ${json}` },
        date: date
      });
}