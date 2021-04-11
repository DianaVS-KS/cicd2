#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ubuntu/cicd2

# move to git folder
cd /home/ubuntu/cicd2

#install node modules
sudo npm install

# stop and delete all previous pm2 process
pm2 stop all
sleep 1
pm2 delete all
sleep 1

# start our node app in the background
pm2 start index.js 

# start nginx server
sudo service nginx start