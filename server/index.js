const express = require('express');
const cors = require('cors');

const { client, sender } = require('./utils/emailConfig')

const port = 4000;
const app = express();


app.use(cors({ origin: '*' }))
app.options('*', cors());

app.use(express.json());




// routes middleware
app.post('/api/send-email', async (req, res) => {

    console.log("Elinc ---", client)
    const { html, subject, toRecipients } = req.body

    // console.log("subject :", subject);
    // console.log("html :", html);
    // console.log("recipient :", toRecipients);

    const emailContent = {
        subject,
        html,
    };

    try {
        const emailMessage = {
            senderAddress: sender,
            content: emailContent,
            recipients: toRecipients,
        };

        const sendResult = await client.beginSend(emailMessage);

        console.log("sendResult----", sendResult)

        if (sendResult && sendResult.messageId) {
            // check mail status, wait for 5 seconds, check for 60 seconds.
            const messageId = sendResult.messageId;
            if (messageId === null) {
                console.log("Message Id not found.");
                return;
            }

            console.log("Send email success, MessageId :", messageId);

            // let counter = 0;
            // const statusInterval = setInterval(async function () {
            //     counter++;
            //     try {
            //         const response = await client.getSendStatus(messageId);
            //         if (response) {
            //             console.log(`Email status for {${messageId}} : [${response.status}]`);
            //             if (response.status.toLowerCase() !== "queued" || counter > 12) {
            //                 clearInterval(statusInterval);
            //             }
            //         }
            //     } catch (e) {
            //         console.log("Error in checking send mail status: ", e);
            //     }
            // }, 5000);
        } else {
            console.error("Something went wrong when trying to send this email: ", sendResult);
        }
        res.json({
            code: 'success'
        })
    } catch (e) {
        console.log("################### Exception occoured while sending email #####################", e);
    }
});

app.get('/api/server', (req, res) => {
    res.json({ message: "server is running" })
})

//Invalid route handling
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 404)
    res.json({
        error: error.message
    })
})

// Server start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
