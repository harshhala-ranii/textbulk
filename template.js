const templates = [
  // Template 1
  [
    "Hey {candidateFirstName} 🙂",
    "The Weekday team here! {recruiterName} from {company} emailed you at {candidateEmail}.",
    "Subject: {emailSubject}\nPlease reply directly to the email. Link: {conversationLink1}"
  ],

  // Template 2
  [
    "Hello {candidateFirstName},",
    "You’ve received an email from {recruiterName} ({company}) at {candidateEmail}.",
    "Subject: {emailSubject}\nPlease check and reply to the recruiter on email. Link: {conversationLink2}"
  ],

  // Template 3
  [
    "Hi {candidateFirstName},",
    "This is a reminder from Weekday — {recruiterName} ({company}) reached out via email ({candidateEmail}).",
    "Subject: {emailSubject}\nKindly reply to their email. Thread: {conversationLink3}"
  ],

  // Template 4
  [
    "Hey {candidateFirstName},",
    "The Weekday team here 👋. {recruiterName} from {company} shared an opportunity with you over email ({candidateEmail}).",
    "Subject: {emailSubject}\nPlease check and reply to that email. Conversation: {conversationLink4}"
  ],

  // Template 5
  [
    "Hi {candidateFirstName},",
    "We noticed {recruiterName} from {company} emailed you at {candidateEmail}.",
    "Subject: {emailSubject}\nPlease reply back on the email itself. Link: {conversationLink5}"
  ],

  // Template 6
  [
    "Hello {candidateFirstName},",
    "Weekday here — you should have received an email from {recruiterName} ({company}) at {candidateEmail}.",
    "Subject: {emailSubject}\nPlease check and respond via email. Link: {conversationLink1}"
  ],

  // Template 7
  [
    "Hey {candidateFirstName},",
    "This is a quick reminder from Weekday. {recruiterName} ({company}) emailed you at {candidateEmail}.",
    "Subject: {emailSubject}\nPlease check your inbox and reply directly. Link: {conversationLink2}"
  ],

  // Template 8
  [
    "Hi {candidateFirstName},",
    "Weekday update: {recruiterName} ({company}) sent you an email to {candidateEmail}.",
    "Subject: {emailSubject}\nKindly reply via email. Conversation: {conversationLink3}"
  ],

  // Template 9
  [
    "Hello {candidateFirstName},",
    "We wanted to remind you that {recruiterName} from {company} sent you an email at {candidateEmail}.",
    "Subject: {emailSubject}\nPlease reply directly to them on email. Link: {conversationLink4}"
  ],

  // Template 10
  [
    "Hi {candidateFirstName},",
    "Weekday here 🙂 — {recruiterName} from {company} contacted you via email ({candidateEmail}).",
    "Subject: {emailSubject}\nPlease open and respond on email. Link: {conversationLink5}"
  ],

  // Template 11
  [
    "Hey {candidateFirstName},",
    "This is a Weekday reminder: {recruiterName} ({company}) reached out over email at {candidateEmail}.",
    "Subject: {emailSubject}\nReplying to the email is the best way. Link: {conversationLink1}"
  ],

  // Template 12
  [
    "Hello {candidateFirstName},",
    "Just a quick reminder from Weekday — {recruiterName} from {company} emailed you at {candidateEmail}.",
    "Subject: {emailSubject}\nPlease check and reply directly on email. Link: {conversationLink2}"
  ],

  // Template 13
  [
    "Hi {candidateFirstName},",
    "Weekday here! You’ve got an email from {recruiterName} ({company}) at {candidateEmail}.",
    "Subject: {emailSubject}\nKindly reply on the email. Thread: {conversationLink3}"
  ],

  // Template 14
  [
    "Hey {candidateFirstName},",
    "This is a friendly nudge from Weekday. {recruiterName} from {company} sent you an email at {candidateEmail}.",
    "Subject: {emailSubject}\nPlease reply back on the email thread. Link: {conversationLink4}"
  ],

  // Template 15
  [
    "Hello {candidateFirstName},",
    "Reminder from Weekday: {recruiterName} ({company}) emailed you at {candidateEmail}.",
    "Subject: {emailSubject}\nDo check and reply on the email. Link: {conversationLink5}"
  ],

  // Template 16
  [
    "Hi {candidateFirstName}, 👋",
    "Weekday here. You’ve got a mail from {recruiterName} ({company}) at {candidateEmail}.",
    "Subject: {emailSubject}\nPlease reply via email. Link: {conversationLink1}"
  ],

  // Template 17
  [
    "Hey {candidateFirstName},",
    "Weekday reminder: {recruiterName} from {company} sent an email to {candidateEmail}.",
    "Subject: {emailSubject}\nCheck and reply to the email. Link: {conversationLink2}"
  ],

  // Template 18
  [
    "Hello {candidateFirstName},",
    "We noticed an email sent by {recruiterName} ({company}) at {candidateEmail}.",
    "Subject: {emailSubject}\nPlease respond directly on email. Conversation: {conversationLink3}"
  ],

  // Template 19
  [
    "Hi {candidateFirstName},",
    "This is the Weekday team reminding you: {recruiterName} from {company} emailed you at {candidateEmail}.",
    "Subject: {emailSubject}\nPlease check and reply via email. Link: {conversationLink4}"
  ],

  // Template 20
  [
    "Hey {candidateFirstName}, 🙂",
    "Reminder from Weekday — {recruiterName} ({company}) sent you an email at {candidateEmail}.",
    "Subject: {emailSubject}\nReply on the email thread to continue. Link: {conversationLink5}"
  ]
];




let templateIndex = 0;

/**
 * Returns the next template in rotation as an array of messages
 */
function getNextMessage() {
  const msgs = templates[templateIndex];
  templateIndex = (templateIndex + 1) % templates.length;
  return msgs;
}

module.exports = { getNextMessage, templates };
