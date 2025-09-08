// templates.js

const messages = [
  // Short + casual (no link)
  "Hey {candidateFirstName}, just a quick nudge 🙂 {recruiterName} from {company} emailed you at {candidateEmail} via Weekday about a role. Could you take a look?\n\nSubject: {emailSubject}",

  // Polite + formal
  "Hello {candidateFirstName},\n\n{recruiterName} from {company} recently sent you an email at {candidateEmail} regarding an opportunity. Please review it when you get a chance.\n\nEmail Subject: {emailSubject}\n\nYou may access it here: {conversationLink2}",

  // Slightly urgent (no link)
  "Hi {candidateFirstName},\n\nThis is {recruiterName} from {company}. I’d appreciate if you could check the email I sent to {candidateEmail} through Weekday about a job opportunity.\n\nSubject: {emailSubject}",

  // Conversational
  "Hey {candidateFirstName},\n\n{recruiterName} here from {company}. I dropped you an email via Weekday at {candidateEmail}. Could you confirm if you’ve seen it?\n\nEmail Subject: {emailSubject}\n\nCheck here: {conversationLink4}",

  // Simple & direct
  "Hi {candidateFirstName},\n\n{recruiterName} from {company} shared an opportunity with you over email ({candidateEmail}). Kindly review and respond.\n\nSubject: {emailSubject}\n\nLink: {conversationLink5}",

  // Casual reminder (no link)
  "Hey {candidateFirstName}, hope you’re doing well! {recruiterName} from {company} emailed you at {candidateEmail} via Weekday. Could you please check it out?\n\nEmail Subject: {emailSubject}",

  // Short professional
  "Hello {candidateFirstName},\n\nYou should have received an email from {recruiterName} ({company}) at {candidateEmail}. Please review when possible.\n\nSubject: {emailSubject}\n\nView: {conversationLink2}",

  // Friendly (no link)
  "Hi {candidateFirstName},\n\nThis is {recruiterName} from {company}. I used Weekday to reach you on {candidateEmail}. Would be great if you could check and reply.\n\nEmail Subject: {emailSubject}",

  // Neutral tone
  "Hey {candidateFirstName},\n\nA quick reminder — {recruiterName} from {company} sent you an email on {candidateEmail} regarding a role.\n\nSubject: {emailSubject}\n\nCheck here: {conversationLink4}",

  // Polished
  "Hi {candidateFirstName},\n\n{recruiterName} from {company} contacted you at {candidateEmail} through Weekday regarding a position. Please review it when convenient.\n\nEmail Subject: {emailSubject}\n\nConversation: {conversationLink5}",

  // Short casual (no link)
  "Hey {candidateFirstName}, did you get the email from {recruiterName} ({company})? It was sent to {candidateEmail}.\n\nSubject: {emailSubject}",

  // Formal follow-up
  "Hello {candidateFirstName},\n\nFollowing up on the email {recruiterName} from {company} sent to {candidateEmail} via Weekday regarding a role.\n\nSubject: {emailSubject}\n\nHere’s the link: {conversationLink2}",

  // Conversational + emoji
  "Hey {candidateFirstName} 👋,\n\n{recruiterName} from {company} reached out over email ({candidateEmail}). Could you take a quick look?\n\nEmail Subject: {emailSubject}\n\nHere’s the mail: {conversationLink3}",

  // Formal polite (no link)
  "Hi {candidateFirstName},\n\nI hope this finds you well. {recruiterName} from {company} sent you an email on {candidateEmail}. Kindly review.\n\nSubject: {emailSubject}",

  // Crisp
  "Hey {candidateFirstName},\n\nYou got a mail from {recruiterName} ({company}) at {candidateEmail}.\n\nSubject: {emailSubject}\n\nView here: {conversationLink5}",

  // Slightly persuasive
  "Hi {candidateFirstName},\n\nThis is {recruiterName} from {company}. I believe you’ll find the opportunity I emailed to {candidateEmail} via Weekday interesting. Please check it out.\n\nEmail Subject: {emailSubject}\n\nThread: {conversationLink1}",

  // Friendly nudge (no link)
  "Hey {candidateFirstName},\n\nJust wanted to remind you that {recruiterName} from {company} reached out to you at {candidateEmail}. Do have a look when you can.\n\nSubject: {emailSubject}",

  // Polished & respectful
  "Hello {candidateFirstName},\n\nYou were recently contacted by {recruiterName} from {company} via email ({candidateEmail}) about an opportunity. Please review it.\n\nEmail Subject: {emailSubject}\n\nAccess here: {conversationLink3}",

  // Super short (no link)
  "Hi {candidateFirstName}, {recruiterName} ({company}) emailed you at {candidateEmail}. Please check.\n\nSubject: {emailSubject}",

  // Conversational + polite
  "Hey {candidateFirstName},\n\n{recruiterName} from {company} sent you a job opportunity via Weekday at {candidateEmail}. Could you take a moment to review it?\n\nEmail Subject: {emailSubject}\n\nHere’s the link: {conversationLink5}"
];

let templateIndex = 0;

/**
 * Returns the next template in rotation
 */
function getNextMessage() {
  const message = messages[templateIndex];
  templateIndex = (templateIndex + 1) % messages.length; // loop back after last
  return message;
}

module.exports = { getNextMessage, messages };