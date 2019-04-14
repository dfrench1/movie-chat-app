exports.getUsers = (CHATCONNECTION_TABLE,dynamo) => {
  const params = {
    TableName: CHATCONNECTION_TABLE,
    ProjectionExpression: "connectionId"
  };

  return dynamo.scan(params).promise();
}
