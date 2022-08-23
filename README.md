
This file I will write serval things about the development process and add operating instructions.

Development process:
Server side: Nodejs, Cliend Side: React, Cache: Redis.
During the development I used in library:
Server side:
  1. axios - for http request to api's actors.
  2. config - for global variable.
  3. fs-extra - for create txt file and write.
  4. redis - for store data, in this way it is possible to reduce requests to the api or the database.
  devDependencies: 
  1. nodemon - to avoid from restart to server
Cliend Side:
  1. material/mui - using to style the table
  2. axios - for http restuest to backend
 
During the development in server side I struggled with the async function that need to return the data to client.
I used Postman to check my result and I saw that the data that need to return not included, 
so I understand that is because async function dont wating to result and send empty data to client side.
After I understood it, I checked and I solved this problem.


It was really challenging and enriching(I dont work before with Redis).
I followed all the tasks that were on the requirements page.

Operating Instructions:
1. Run Redis server - open cmd in directory of Redis(location: Redis-x64-3.0.504) and write "redis-server.exe"
2. Run local server - In main direcotry of "Actors-app-Node.js" - write "npm server"
3. Run Frontend - In main direcotry of "Actors-app-React" - write "npm server"
4. Wating for the browser loading.
