// This is a Cloudflare Pages Function (Worker).
// It securely reads your environment variables and serves them to the frontend.

export async function onRequest(context) {
  // context.env accesses the GOOGLE_CLIENT_ID and GOOGLE_API_KEY variables 
  // you set in your Cloudflare Pages settings.
  const clientID = context.env.GOOGLE_CLIENT_ID;
  const apiKey = context.env.GOOGLE_API_KEY;

  if (!clientID || !apiKey) {
    return new Response(JSON.stringify({ error: "API keys are not configured in environment variables. Check GOOGLE_CLIENT_ID and GOOGLE_API_KEY." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Returns the keys to the client script.
  return new Response(JSON.stringify({ clientID, apiKey }), {
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  });
}