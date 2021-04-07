#!/bin/bash
sudo chmod -R 777 /home/ec2-user/express-app

#navigate into our workin directory
cd /home/ec2-user/express-app

#add npm and node path
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
npm install

node src/index.js > app.out.log 2> app.err.log < /dev/null &