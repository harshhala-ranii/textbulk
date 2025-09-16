const fs = require('fs');
const csv = require('csv-parser');

async function loadContacts() {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream('data/Airtabl-WA maunual - Sheet1.csv')
      .pipe(csv())
      .on('data', (row) => {
        results.push({
          candidateFirstName: row['candidateFirstName'],
          candidateEmail: row['Candidate email'],
          phone: row['Candidate phone number'],
          company: row['Sender Company'],
          recruiterName: row['final - recruiterName (from Email)'],
          emailSubject: row['Email subject'],
          conversation: row['Email Conversation'],
        });
      })
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

module.exports = { loadContacts };
