# Simple makefile to deploy the avalara-nose-server consisting of the following commands:
# make build - to build the image
# make start - to run the container
# make stop - to stop the container
# make restart - to restart the container
# make logs - to follow the logs of the container
# make shell - to execute a shell inside the container
# make status - to view the status of the container
COMPOSE_FILE_PATH := -f docker-compose.yml

IMAGE := avalara-node-server


build:
	$(info Make: Building images.)
	docker-compose build

start:
	$(info Make: Starting containers.)
	docker-compose $(COMPOSE_FILE_PATH) up -d

stop:
	$(info Make: Stopping containers.)
	docker-compose -f docker-compose.yml stop

restart:
	$(info Make: Restarting containers.)
	@make -s stop
	@make -s start

logs:
	$(info Make: Following container logs...)
	docker-compose -f docker-compose.yml logs -f

shell:
	$(info Make: Executing a shell inside the container.)
	docker-compose -f docker-compose.yml exec node-server /bin/bash

status:
	$(info Make: Displaying the status of the container.)
	docker ps -a
