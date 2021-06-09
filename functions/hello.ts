import { Handler } from "@netlify/functions";

const handler: Handler = async function (event, context) {
  const { identity, user } = context.clientContext;
  console.log(identity, user);
   return {
     statusCode: 200,
     body: JSON.stringify({
       message: "Hello World",
       email: process.env.CONTACT_FORM_EMAIL,
       toml_env_variable: process.env.TEST_VALUE || "not found",
       event: {
         multiValueQueryStringParameters: event.multiValueQueryStringParameters,
         queryStringParameters: event.queryStringParameters,
         body: event.body,
       },
     }),
   };
};

export { handler };
