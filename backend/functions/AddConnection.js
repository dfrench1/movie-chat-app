exports.addConnection = (CHATCONNECTION_TABLE,connectionId,dynamo) => {
    const params = {
        TableName: CHATCONNECTION_TABLE,
        Item: {
          connectionId: connectionId
        }
      };
    
      return dynamo.put(params).promise();
}