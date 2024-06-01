const { EmailClient } = require("@azure/communication-email");

// const connectionString = 'endpoint=https://agomiclabs-communication.communication.azure.com/;accesskey=eBRyjqMKHwOW4rp3Gr6yOwLEi/VGP/f/Itv3FxkvGqJZXnBR+8ZUm5qdyRNWDjcSaJ5wW03QcFmJOuWhxFpuvQ==';
// const client = new EmailClient(connectionString);
// const sender = "inquiry@agomiclabs.com";

const connectionString = 'endpoint=https://askgaloren.communication.azure.com/;accesskey=IO6X4U9RSn/u2rbGMhf196y+00mndlL/IyEtz6rttrZGkhseMz5UCSmxIQgN1zB+e02scZpzGghvsqzDGbw+yw==';
const client = new EmailClient(connectionString);
const sender = "inquiry@askgalore.nl";

module.exports = { connectionString, client, sender }