const addConnection = require('./AddConnection').addConnection;
const deleteConnection = require('./DeleteConnection').deleteConnection;

exports.connectionMethod = (
  event,
  CHATCONNECTION_TABLE,
  dynamo,
  response,
  callback
) => {
  if (event.requestContext.eventType === "CONNECT") {
    addConnection(CHATCONNECTION_TABLE, event.requestContext.connectionId, dynamo)
      .then(() => {
        callback(null, response(200, "connected"))
      })
      .catch(err => {
        console.log(err);
        callback(null, response(400, err));
      });
  } else if (event.requestContext.eventType === "DISCONNECT") {
    deleteConnection(CHATCONNECTION_TABLE, event.requestContext.connectionId, dynamo)
      .then(() => {
        callback(null, response(200, "disconnected"));
      })
      .catch(err => {
        console.log(err);
        callback(null, response(500, err));
      });
  }
}
