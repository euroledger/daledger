# daledger
DA Ledger Blockchain MarketPlace for Architects in Romania
=======
Instructions for how to install and run the code (windows):

1. To view the github repo go to:

`https://github.com/euroledger/daledger`

2. clone the code (important: always work on test branch)

`git clone -b test https://github.com/euroledger/daledger.git`

`cd daledger\server`

3. Install server node modules

`npm install`

4. Install client node modules (on dev there are two processes running concurrently: expressjs and react client)

`cd client`
`npm install` 

5. Create the file dev.js in server\config and paste in the dev keys (ask Mike).
These are our private keys for various APIs such as Google and MongoDB which are not committed to github for security reasons.

6. Run the app

`npm run dev`

This concurrently runs the server and client (see package.json)

# To change branch in git
`git checkout master`


`git checkout test`

# To check status
`git status`

This shows which branch you are on and what has changed since the last commit

# To commit to test branch
`git add .`


`git commit -m<comment>`


`git push -u origin test`

# To merge test -> master

`git checkout master`


`git merge test`


`git push origin master`

# DAS-1 TEST 



For information on Git branches/pull requests for the project see Cookbook (or ask Mike)

Also see the Technical Notes document

