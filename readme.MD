# 📱 WhatsApp Bulk Messaging (with Human-like Typing)

This project automates sending **personalized WhatsApp messages** to candidates using `whatsapp-web.js`.  
It mimics human behavior with **typing delays, multi-part messages, and randomized gaps** between sends to reduce the risk of account flagging.

---

## 📂 Project Structure
.
├── index.js             # Entry point – starts the client and triggers bulk send
├── client.js            # WhatsApp client setup (LocalAuth & QR)
├── bulkSend.js          # Main loop to send messages in bulk
├── sendMessage.js       # Typing + send logic (start/stop typing)
├── templates.js         # Message templates (multi-part arrays)
├── messageBuilder.js    # Replaces placeholders and returns message parts
├── contact.js           # Loads contacts from CSV
├── utils.js             # Random delay helpers
├── package.json         # Node dependencies & scripts
├── Dockerfile           # Docker setup for containerized runs
├── docker-compose.yml   # Compose file with persisted auth volume
└── README.md            # This file

---

## ⚡ Features
- Send **personalized WhatsApp messages** from a CSV.  
- Support for **multi-part templates** (2–3 smaller messages per candidate).  
- Simulates typing status before sending each part.  
- Randomized short delays between parts and longer delays between recipients.  
- Docker-ready with persistent auth folder so you don't scan QR every time.  
- Rotation through templates (no strict repeating pattern).

---

## 🛠️ Quick Setup

### Prerequisites
- Docker Desktop (recommended) **or** Node.js (v16+) + npm if running locally.

### 1) Clone repo
git clone <your-repo-url>
cd whatsapp_bulk

### 2) Install dependencies (if running locally)
npm install

### 3) Run with Docker (recommended)
docker-compose up --build

> On first run you'll see a QR in container logs / terminal. Scan it from WhatsApp → *Linked Devices*.  
> Make sure `docker-compose.yml` mounts `./wwebjs_auth:/app/.wwebjs_auth` (so session persists).

### 4) Run locally (if not using Docker)
node index.js

---

## 📑 CSV Format (sample)
The CSV must contain these column headers:
phone,candidateFirstNameFormatted,candidateEmail,company,recruiterName,emailSubject,conversation

Example:
919876543210,Alex,alex@example.com,Acme Corp,Kavita Shah,Exciting Opportunity,https://platform.weekday.works/conversation?conversationId=...
919812345678,Raj,raj@example.com,Globex Ltd,Manish Patel,Department Head Role,https://platform.weekday.works/conversation?conversationId=...

---

## 📄 templates.js (example)
const templates = [
  ["Hey {candidateFirstName} 🙂", "{recruiterName} from {company} emailed you at {candidateEmail}.", "Subject: {emailSubject}\nCheck: {conversationLink1}"],
  ["Hello {candidateFirstName},", "{recruiterName} here from {company}. I sent you an email at {candidateEmail}.", "Thread: {conversationLink2}"],
  ["Hi {candidateFirstName},", "Just a friendly reminder — I emailed you about a role.", "Subject: {emailSubject}\nLink: {conversationLink3}"],
  ["Hey {candidateFirstName}, hope you're well 👋", "{recruiterName} (from {company}) emailed you at {candidateEmail}.", "Conversation: {conversationLink4}"],
  ["Hi {candidateFirstName},", "{recruiterName} from {company} has shared a role with you.", "View: {conversationLink5}"]
];

let templateIndex = 0;
function getNextMessage() {
  const msgs = templates[templateIndex];
  templateIndex = (templateIndex + 1) % templates.length;
  return msgs;
}
module.exports = { getNextMessage, templates };

---

## 🔧 Important Code Notes
- **messageBuilder.js** → Always returns an array of finalized message parts.  
- **bulkSend.js** → Sends each part with short delays, then longer gap between contacts.  
- **sendMessageWithTyping** → Shows typing for 5–12s randomly before sending.

---

## ⏱️ Delay Recommendations
- Between parts: **5–15 seconds** (random).  
- Between recipients: **2–5 minutes** (random).  
- Start small: 10–20 messages/hour max.

---

## 🐳 Docker Example
services:
  whatsapp-bulk:
    build: .
    volumes:
      - ./wwebjs_auth:/app/.wwebjs_auth
      - ./data:/app/data
    stdin_open: true
    tty: true

---

## ✅ Best Practices
- **Do not spam.** Only send relevant messages.  
- Pilot with 5–10 test numbers first.  
- Monitor WhatsApp account warnings.  
- Rotate templates & delays.  
- Secure `wwebjs_auth`.

---

## 📌 Commands
- Install deps (local):  
  npm install  

- Run locally:  
  node index.js  

- Docker build & run:  
  docker-compose up --build  

---




