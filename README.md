This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
run command npm install


start the server using 
npm run dev 
OR 
pnpm dev

take a look at the db.js file under src/app/lib
create a .env file and add the necessary environment variables according to db.js file

and open up your browser or postman and hit 
localhost:{your_port_number}/api/setup 
to create the table necessary for the crud operations

then open up api/CnR folder and go through the apis and hit according to the file structure

eg. for api/CnR/[id]/route.js 
localhost:{your_port_number}/api/CnR/{your_id}