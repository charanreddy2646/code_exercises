// Just a basic Expressjs service to listen for POST requests and then send them to SignalFX
// Here we're setting up the listener for events
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.raw());
app.use(bodyParser.json({ type: 'application/json'}));
// Here's our endpoint URL
app.post('/post-test', function (req, res) {
    console.log(req.body);
// Here, we're storing the event to a variable
app.locals.data = {};
    req.app.locals.data = (JSON.stringify(req.body));
    res.sendStatus(200);
// Now we're setting up our call to SignalFX with all the requirements
const options = {
// Replace with the URL for your SignalFX org if necessary
    url: 'https://ingest.us1.signalfx.com/v2/event',
    json: true,
    headers: {
      'Content-Type': 'application/json',
// Replace with your SignalFX org token if necessary
      'X-SF-TOKEN': 'rrQocVjveDNdxzmY6EP3rQ',
    },
    body: [{
        category: 'USER_DEFINED',
        dimensions: {
          environment: 'Test',
          service: 'API'},
        eventType: 'TEST-EVENT-FROM NJS',
        properties: req.body}]
    };
// Here, we're sending the parsed data as an event to SignalFX
request.post(options, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(body, res.statusCode);
  })
})
app.listen(8080, () => console.log(`Server listening at 172.17.0.2:8080/post-test`));
