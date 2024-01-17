const dialogflow = require('dialogflow');
const { Storage } = require('@google-auth-library/storage');
const path = require('path');
const { promises: fs } = require('fs');

const PROJECT_ID = process.env.DIALOGFLOW_PROJECT_ID;
const KEY_FILE = process.env.DIALOGFLOW_KEY_FILE;

// Initialize Dialogflow client
const sessionClient = new dialogflow.SessionsClient({
  keyFilename: KEY_FILE,
});

// Create a new session
const sessionPath = sessionClient.projectAgentSessionPath(PROJECT_ID, 'unique-session-id');

// Function to send a message to Dialogflow
async function sendMessageToDialogflow(message) {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en-US', // Set the language code as per your agent's configuration
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    return result.fulfillmentText;
  } catch (error) {
    console.error('Error communicating with Dialogflow:', error);
    return 'An error occurred while processing your request.';
  }
}

module.exports = {
  sendMessageToDialogflow,
};
