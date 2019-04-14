export function newConnection(Sockette, onMessageReceived){
    return new Sockette(
        "wss://bfho0zqctd.execute-api.eu-west-1.amazonaws.com/dev",
        {
          timeout: 5e3,
          maxAttempts: 1,
          onmessage: e => onMessageReceived(e)
        }
      );
}