
import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";
import { ENV } from "./env.js";

const aj = arcjet({
  key: ENV.ARCJET_KEY,
  rules: [
    // Create a token bucket rate limit. Other algorithms are supported.

    shield({mode: "LIVE"}),

    detectBot({
      mode: "LIVE",

      allow: [
        "CATEGORY:SEARCH_ENGINE",
      ],
    }),


    slidingWindow({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      max: 100,
      interval: 60,
    }),
  ],
});

// export async function GET(req: Request) {
//   const userId = "user123"; // Replace with your authenticated user ID
//   const decision = await aj.protect(req, { userId, requested: 5 }); // Deduct 5 tokens from the bucket
//   console.log("Arcjet decision", decision);

//   if (decision.isDenied()) {
//     return NextResponse.json(
//       { error: "Too Many Requests", reason: decision.reason },
//       { status: 429 },
//     );
//   }

//   return NextResponse.json({ message: "Hello world" });
// }

export default aj;