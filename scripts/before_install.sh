#!/bin/bash

# Install necessary packages
sudo apt update
sudo apt install nginx git nodejs npm
sudo npm install pm2 -g

# create directory for repo
sudo rm -rf /home/ubuntu/cicd2
mkdir /home/ubuntu/cicd2