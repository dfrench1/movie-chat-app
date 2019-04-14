exports.deleteConnection = (CHATCONNECTION_TABLE, connectionId, dynamo) => {
  const params = {
    TableName: CHATCONNECTION_TABLE,
    Key: {
      connectionId: connectionId
    }
  };

  return dynamo.delete(params).promise();
}
