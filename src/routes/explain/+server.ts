import { promptGPT } from "../../lib/openai";

export async function POST({ request }): Promise<Response> {
  const data = await request.json();
  console.log(data);
  if (data["code"].length > 2000) {
    return new Response("Code is too long. (Max 2000 characters)");
  }
  const response = await promptGPT(
    "Explain what the following code does",
    data["code"] ?? ""
  );
  console.log(response);
  return new Response(String(response));
}
