/**
 * Create an HTML email template welcoming a user to Chatify.
 *
 * The returned template personalizes the greeting with the provided name and uses the provided URL for the call-to-action button.
 *
 * @param {string} name - Recipient's display name used in the greeting.
 * @param {string} clientURL - URL used as the action button link.
 * @returns {string} A complete HTML document as a string representing the welcome email.
 */
export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to Chatify</title>
  </head>

  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">

    <div style="max-width:600px; margin:40px auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.1);">

      <!-- Header -->
      <div style="background: linear-gradient(to right, #36D1DC, #5B86E5); padding:30px; text-align:center;">
        <div style="width:50px; height:50px; background:#ffffff; border-radius:50%; margin:0 auto 10px;"></div>
        <h1 style="color:#ffffff; margin:0; font-size:26px; font-weight:500;">
          Welcome to Chatify!
        </h1>
      </div>

      <!-- Content -->
      <div style="padding:35px; color:#333333;">

        <p style="font-size:18px; color:#5B86E5; margin-top:0;">
          <strong>Hello ${name},</strong>
        </p>

        <p style="font-size:15px; line-height:1.6;">
          We're excited to have you join our messaging platform! Chatify connects you with friends,
          family, and colleagues in real-time, no matter where they are.
        </p>

        <!-- Steps Box -->
        <div style="background:#f8f9fa; padding:25px; border-radius:10px; margin:25px 0; border-left:4px solid #36D1DC;">
          <p style="font-size:16px; margin-top:0; margin-bottom:15px;">
            <strong>Get started in just a few steps:</strong>
          </p>
          <ul style="padding-left:20px; margin:0;">
            <li style="margin-bottom:10px;">Set up your profile picture</li>
            <li style="margin-bottom:10px;">Find and add your contacts</li>
            <li style="margin-bottom:10px;">Start a conversation</li>
            <li>Share photos, videos, and more</li>
          </ul>
        </div>

        <!-- Button -->
        <div style="text-align:center; margin:30px 0;">
          <a href="${clientURL}"
            style="
              background: linear-gradient(to right, #36D1DC, #5B86E5);
              color:#ffffff;
              text-decoration:none;
              padding:12px 30px;
              border-radius:50px;
              font-weight:500;
              display:inline-block;
            ">
            Open Chatify
          </a>
        </div>

        <p style="font-size:14px; margin-bottom:5px;">
          If you need any help or have questions, we're always here to assist you.
        </p>

        <p style="font-size:14px; margin-top:0;">
          Happy messaging!
        </p>

        <p style="margin-top:25px; font-size:14px;">
          Best regards,<br />
          <strong>The Chatify Team</strong>
        </p>

      </div>
    </div>

  </body>
  </html>
  `;
}