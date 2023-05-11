import Sib from "sib-api-v3-sdk";

const client = Sib.ApiClient.instance;
const sendInBlueCLient = client.authentications["api-key"];
sendInBlueCLient.apiKey =
  "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";

const tranEmailApi = new Sib.TransactionalEmailsApi();
const sender = {
  email: "arksonjosiah@gmail.com",
  name: "Josiah Arkson",
};

const sendEmailSendInBlue = async (email) => {
  const recievers = [{ email }];

  // const verificationLink = "https://example.com/verify"; // replace with your own verification link
  tranEmailApi
    .sendTransacEmail({
      sender,
      to: recievers,
      subject: "Welcome to the hood",
      htmlContent: `<h1>hello world</h1> <p>Click <a href="blow me">here</a> to verify your email.</p>`,

      // htmlContent: `<h1>hello world</h1> <p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
    })
    .then(console.log)
    .catch(console.log);
};

export default sendEmailSendInBlue;
