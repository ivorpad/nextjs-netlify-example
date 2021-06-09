import { Handler } from "@netlify/functions";

console.log(process.env);

const handler: Handler = async function (event, context) {
  const { identity, user } = context.clientContext;
   return {
     statusCode: 200,
     body: JSON.stringify({
       message: "Hello World",
       variables: process.env,
     }),
   };
};

export { handler };
