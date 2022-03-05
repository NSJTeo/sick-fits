import { createTransport } from "nodemailer";

console.log(typeof process.env.MAIL_HOST);

const transport = createTransport({
  port: Number(process.env.MAIL_PORT),
  host: String(process.env.MAIL_HOST),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const createEmail = (text: string): string => `
  <div style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
  ">
    <h2>Hello there</h2>
    <p>${text}</p>
  </div>
`;

interface MailResponse {
  message: string;
}

export async function sendPasswordResetEmail(
  resetToken: string,
  to: string
): Promise<void> {
  // email the user a token
  const info = (await transport.sendMail({
    to,
    from: "test@example.com",
    subject: "Your password reset token!",
    html: createEmail(`Your Password Reset Token is here!
      <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click Here to reset</a>
    `),
  })) as MailResponse;
  console.log(info);
}
