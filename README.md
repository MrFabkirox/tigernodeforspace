To run the app on your machine, locally or on docker, fiddle around with your own database.
For obvious reasons i don't include passwords.
You can either include your config files for your db or set variables in command line for docker.

Also keep keep in mind that there is 2 different node_modules for the server and the client.

For each, do:
npm i

Run app:
npm run dev

Run test(in server or client folder):
npm run test

Docker cli:
docker container run -v $(pwd):/usr/src/app -e MONGO_ATLAS_PW=pwd -d -p 80:3000 --name 2tigernodeforspace fabriceesope/tigernodeforspace

docker-compose up

Don't hesitate to visit http://tigernodeforspace.herokuapp.com/ , i will be happy to see you there !

Warm Regards
