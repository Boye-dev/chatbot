const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const intent = req.body.queryResult.intent.displayName;
  const scamType = req.body.queryResult.parameters?.ScamType;
  // const previousContext =
  //   req.body.queryResult.outputContexts[0].parameters.ScamType;
  let responseText = "";

  switch (intent) {
    case "InformationIntent":
      if (scamType.length === 0) {
        responseText =
          "A scam is a fraudulent scheme designed to deceive and cheat individuals out of their money or personal information. Scammers often use tactics such as impersonation, false promises, or fake appeals to trick victims into giving them money, sensitive information, or access to their accounts. It is important to be vigilant and cautious when dealing with unsolicited requests or unfamiliar individuals and to thoroughly research and verify any offers before giving out personal information or money.";
      } else {
        for (const type of scamType) {
          if (type?.toLowerCase()?.includes("lottery")) {
            responseText =
              "A lottery scam is a type of scam where the attacker claims that the recipient has won a lottery and needs to pay a fee or provide personal information to claim the prize. This is a fraudulent activity and the recipient should not respond to such claims.";
          } else if (
            type?.toLowerCase()?.includes("phishing") ||
            type?.toLowerCase()?.includes("email")
          ) {
            responseText =
              "Phishing is a type of scam where the attacker poses as a trustworthy entity to steal sensitive information such as passwords, credit card numbers, or other personal information. It is often carried out through emails, phone calls, or fake websites.";
          } else if (type?.toLowerCase()?.includes("investment")) {
            responseText =
              "An investment scam is a type of scam where the attacker offers a high-return investment opportunity with little or no risk. The attacker may use fake companies, fake products, or high-pressure sales tactics to trick the victim into investing money. It is important to thoroughly research any investment opportunity before investing money.";
          } else if (type?.toLowerCase()?.includes("scam")) {
            responseText =
              "A scam is a fraudulent scheme designed to deceive and cheat individuals out of their money or personal information. Scammers often use tactics such as impersonation, false promises, or fake appeals to trick victims into giving them money, sensitive information, or access to their accounts. It is important to be vigilant and cautious when dealing with unsolicited requests or unfamiliar individuals and to thoroughly research and verify any offers before giving out personal information or money.";
          } else if (type?.toLowerCase()?.includes("advance fee")) {
            responseText =
              "An advance-fee scam is a type of scam where the attacker requires an advance fee to be paid upfront for a promised service or product. The attacker may claim that the fee is needed for taxes, insurance, or processing fees. In reality, the attacker will not provide the promised service or product and will disappear with the advance fee.";
          } else if (type?.toLowerCase()?.includes("debt collection")) {
            responseText =
              "A debt collection scam is a type of scam where the attacker claims to be a debt collector and demands payment for a debt that may not actually be owed. The attacker may use scare tactics or threaten legal action to pressure the victim into paying. It is important to verify the legitimacy of the debt and the debt collector before making any payments.";
          } else if (type?.toLowerCase()?.includes("employment")) {
            responseText =
              "An employment scam is a type of scam where the attacker offers a job opportunity, but requires the victim to pay for training, materials, or background checks upfront. The attacker may also ask for personal information such as social security numbers or bank account information. It is important to thoroughly research any job opportunity and avoid paying any fees before starting a job.";
          } else if (type?.toLowerCase()?.includes("tech support")) {
            responseText =
              "A tech support scam is a type of scam where the attacker poses as a technical support representative and claims that the victim's computer or device has a problem. The attacker may ask for remote access to the victim's computer or device or request payment for the supposed solution. It is important to be cautious of unsolicited tech support calls and to only trust well-known and reputable tech support providers.";
          } else if (type?.toLowerCase()?.includes("imposter")) {
            responseText =
              "An imposter scam is a type of scam where the attacker poses as a trustworthy person or entity, such as a government official, law enforcement agent, or a loved one in need, to trick the victim into giving money or personal information. The attacker may use urgency or emotional appeals to pressure the victim into taking action. It is important to verify the identity of anyone who contacts you and to never give money or personal information to an unknown source.";
          } else if (type?.toLowerCase()?.includes("charity")) {
            responseText =
              "A charity scam is a type of scam where the attacker poses as a legitimate charity and asks for donations. The attacker may use high-pressure tactics or fake appeals, such as natural disasters or emergencies, to trick the victim into giving money. It is important to thoroughly research any charity before making a donation and to never give money to unsolicited requests.";
          } else if (
            type?.toLowerCase()?.includes("romance") ||
            type?.toLowerCase()?.includes("dating")
          ) {
            responseText =
              "A Romance/Dating scam is a type of scam where the attacker poses as a romantic interest to trick the victim into sending money or personal information. The attacker may use online dating sites, social media, or other platforms to reach potential victims. It is important to never send money or personal information to someone you have not met in person and to be cautious of people who move too quickly in a relationship.";
          } else if (type?.toLowerCase()?.includes("health")) {
            responseText =
              "A Healthcare scam is a type of scam where the attacker pretends to be a representative of a healthcare company or government agency and asks for personal information or payment. The attacker may use tactics such as fake bills, emails, or phone calls to trick the victim. It is important to never give out personal information over the phone or through email and to always verify the identity of any healthcare representative before giving information or making payment.";
          } else if (type?.toLowerCase()?.includes("impersonation")) {
            responseText =
              "An Impersonation scam is a type of scam where the attacker poses as a known or trusted individual or organization to trick the victim into sending money or personal information. The attacker may use tactics such as email, phone calls, or social media to reach potential victims. It is important to never give out personal information or send money to an unsolicited request and to verify the identity of any individual or organization before giving information or making payment.";
          } else if (type?.toLowerCase()?.includes("ponzi")) {
            responseText =
              "A Ponzi scheme is a type of investment scam where the attacker promises high returns with little risk and uses the investments from new victims to pay the returns to earlier investors. The scheme relies on a constant flow of new victims to generate returns for earlier investors and eventually collapses when the flow of new victims dries up. It is important to thoroughly research any investment opportunity and to be wary of unrealistic returns with little risk.";
          } else {
            responseText =
              "There are many different kinds of scams but i am limited to answering for just some common scams like  Lottery scams, Phishing scams, Investment scams, Advance Fee scams, debt Collection scams, Employment scams, Tech support scams, Charity scams, Ponzi scams, Romance scams, Health scams, Impersonation scams, Imposter scams ";
          }
        }
      }

      break;
    case "PreventiveMeasures":
      if (scamType.length === 0) {
        responseText = `To avoid falling victim to a scam, it's important to follow some simple preventive measures. Some of these include:\n
          -Verifying the identity of the person or organization making the request\n
          -Researching the company or charity before making a donation\n
          -Not giving out personal or financial information to unsolicited requests\n
          -Being wary of high-pressure tactics\n
          By staying informed and vigilant, you can protect yourself from various types of scams.`;
      } else {
        for (const type of scamType) {
          if (type?.toLowerCase()?.includes("lottery")) {
            responseText = `Be wary of unsolicited emails, phone calls, or mail claiming that you have won a lottery you did not enter.\n
              Verify the legitimacy of the lottery by checking the official website or contacting the lottery organizers directly.\n
              Never provide personal or financial information to anyone claiming to represent a lottery.\n
              Be suspicious of lotteries that ask for a fee before paying out the winnings.\n
              Report any lottery scam attempts to the relevant authorities and/or organizations, such as the Federal Trade Commission (FTC) or the National Consumer League's Fraud Center.`;
          } else if (
            type?.toLowerCase()?.includes("phishing") ||
            type?.toLowerCase()?.includes("email")
          ) {
            responseText = `Be cautious of emails or messages from unknown or suspicious sources that ask for personal or financial information.
              Verify the authenticity of the sender by checking their email address or contacting the company directly.
              Do not click on links or download attachments from emails or messages that seem suspicious.
              Use security software, such as antivirus programs and firewalls, to protect your computer and devices.
              Report any phishing attempts to the relevant authorities, such as the FTC or your bank.
              `;
          } else if (type?.toLowerCase()?.includes("investment")) {
            responseText = `Be skeptical of promises of high returns with low risks.
              Verify the legitimacy of the investment opportunity by researching the company and its management team.
              Check if the investment has been registered with the appropriate regulatory bodies.
              Get a second opinion from a financial advisor or professional before making any investment decisions.
              Report any suspicious investment opportunities to the relevant authorities, such as the SEC or FINRA.`;
          } else if (type?.toLowerCase()?.includes("advance fee")) {
            responseText = `Be wary of requests for money or personal information in exchange for a loan, grant, or prize.
              Verify the legitimacy of the offer by researching the company or organization.
              Be suspicious of offers that require upfront fees or ask for personal or financial information.
              Check the Better Business Bureau's website for any complaints about the company or organization.
              Report any advance fee scams to the relevant authorities, such as the FTC or the National Fraud Information Center.`;
          } else if (
            type?.toLowerCase()?.includes("debt collection") ||
            type?.toLowerCase()?.includes("debt")
          ) {
            responseText = `Verify the identity of the debt collector by asking for their name, company name, and contact information.
              Ask for proof of the debt, such as a written statement or official document.
              Be cautious of debt collectors who threaten legal action or use aggressive tactics.
              Report any suspicious debt collection practices to the relevant authorities, such as the FTC or the Consumer Financial Protection Bureau.
              Keep records of all debt collection communications, including the date, time, and content of each interaction.`;
          } else if (type?.toLowerCase()?.includes("employment")) {
            responseText = `Be wary of job offers that require payment for training, materials, or background checks.
              Verify the legitimacy of the job offer by researching the company and its website.
              Check if the job has been posted on legitimate job search websites.
              Be cautious of job offers that ask for personal or financial information.
              Report any suspicious job offers to the relevant authorities, such as the FTC or the National Fraud Information Center.`;
          } else if (type?.toLowerCase()?.includes("tech support")) {
            responseText = `Do not provide any personal information, such as passwords or credit card numbers, to unsolicited callers or emails.
              If you receive a call from someone claiming to be a tech support agent, hang up and call the company directly using a legitimate phone number.
              Be wary of callers who use high-pressure tactics or who promise to fix your computer immediately.
              Keep your anti-virus and anti-malware software up to date.
              Do not download software or allow remote access to your computer from unsolicited sources.`;
          } else if (type?.toLowerCase()?.includes("imposter")) {
            responseText = `Verify the identity of the person claiming to be someone else through an independent source or by confirming details they have provided.
              Do not give out personal or financial information to someone you do not know or trust.
              Hang up on unsolicited calls, even if they appear to be from a legitimate organization.
              Be wary of unsolicited emails, texts, or social media messages, especially if they ask for personal or financial information.
              Report suspected imposter scams to the authorities, including local law enforcement and the Federal Trade Commission.`;
          } else if (type?.toLowerCase()?.includes("charity")) {
            responseText = `Research the charity before making a donation. Check the organization's reputation and track record.
              Be wary of charities that are unfamiliar to you or that have recently been created.
              Do not give in to pressure to make a donation immediately.
              Do not provide personal or financial information to unsolicited callers or emails.
              Verify the charity's tax-exempt status by checking the Internal Revenue Service's (IRS) database of tax-exempt organizations.`;
          } else if (
            type?.toLowerCase()?.includes("romance") ||
            type?.toLowerCase()?.includes("dating")
          ) {
            responseText = `Be cautious of people who claim to have fallen in love with you after a brief online interaction.
              Do not send money or personal information to someone you have never met in person.
              Be wary of people who make excuses for not being able to meet in person.
              Verify the identity of the person you are communicating with through an independent source or by confirming details they have provided.
              Report any suspected romance scams to the authorities, including local law enforcement and the Federal Trade Commission.`;
          } else if (type?.toLowerCase()?.includes("health")) {
            responseText = `Always research the product, service, or treatment before making a purchase or deciding to participate.
              Consult with a licensed healthcare professional to ensure the product, service, or treatment is safe and effective.
              Be wary of claims that seem too good to be true, such as instant cures or guaranteed results.
              Be cautious of free trials or offers that require payment information upfront.
              Report any suspicious health scams to the authorities, including the Food and Drug Administration and the Federal Trade Commission.`;
          } else if (type?.toLowerCase()?.includes("impersonation")) {
            responseText = `Do not provide personal information, such as social security numbers or banking information, to unsolicited callers or emails.
              Be cautious of callers claiming to be from government agencies or law enforcement.
              Verify the identity of anyone who contacts you by asking for their name, title, and contact information.
              Do not provide payment information, such as credit card numbers, over the phone or through email.
              Report any suspicious activity to the relevant authorities, such as the police or the Federal Trade Commission (FTC).`;
          } else if (type?.toLowerCase()?.includes("ponzi")) {
            responseText = `Be cautious of investment opportunities that promise high returns with little or no risk.
              Do not invest in opportunities that are not registered with the Securities and Exchange Commission (SEC).
              Research the background of the investment opportunity and the people behind it.
              Verify the legitimacy of any documents or information provided by the investment opportunity.
              Consult with a financial advisor before making any investment decisions.`;
          } else {
            responseText =
              "Please rephrase your question i can only answer questions on some common scams ";
          }
        }
      }
  }

  const response = {
    fulfillmentText: responseText,
  };

  return res.json(response);
});

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Webhook server is listening on port ${server.address().port}`);
});
