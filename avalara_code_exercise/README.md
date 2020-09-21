# Avalara_Code_Exercise

This is the code exercise assigned to me for the SRE role at Avalara.  It will contain 1 docker container that will receive POST requests and send the data received as an event to SignalFX.

## Contents

1. A makefile capable of setting up the docker image and container.
2. A nodejs express server to accept http POST requests, parse the data, and send that data in a new POST request as an event to SignalFX.
3. A test folder containing the tool I used to test this endpoint with.

## Items noteworthy

1. I signed up for a trial on SignalFX so I could get an org token and try to familiarize myself with the UI.
2. The current org token this app is using will expire in 6 days as of 7/27/20.
3. The token is easily swapped out with your own org's token by editing the 'X-SF-TOKEN' value (line 28 in myapp.js).
4. If the token is changed, be sure to also make sure you're either using us1 as well or change that line to match the ingest endpoint your org uses.

## Environment setup

1. Use the provided makefile to build the image.
```bash
make build
```
2. Use the makefile to run the container.
```bash
make start
```
3. Use the makefile to check the status of the container.
```bash
make status
```
4. Use the makefile to run a shell inside the container.
```bash
make shell
```
5. Use the makefile to follow the logs in the container.
```bash
make logs
```
6. Use the makefile to stop the container.
```bash
make stop
```
7. Use the makefile to restart the container.
```bash
make restart
```

## Usage
Using Postman or a curl command, send a POST request to the container running at http://172.17.0.2:8080/post-test.  You should receive a response from the server and (depending on the data sent) will then be able to see that data sent as an event to SignalFX.

```bash
curl -s -i -k -X POST -H 'Content-Type: application/json' -d '{"id": "i-0085a516efcc628d6", "description": "This server is unhealthy."}' http://172.17.0.2:8080/post-test
```
