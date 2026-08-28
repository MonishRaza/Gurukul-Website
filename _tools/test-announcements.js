// Test sheetRowsToAnnouncements + parseCsvLine against the live published CSV
const fs = require("fs");
const https = require("https");

const code = fs.readFileSync("D:/Projects/Gurukul Website/js/main.js", "utf8");
const start = code.indexOf("function parseCsvLine");
const end = code.indexOf("function renderHome");
const fnsSrc = code.slice(start, end).replace(/\/\*[\s\S]*?\*\//g, "");
const { sheetRowsToAnnouncements } = new Function(fnsSrc + "; return { sheetRowsToAnnouncements };")();

function get(url, cb) {
  https.get(url, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location)
      return get(res.headers.location, cb);
    let d = "";
    res.on("data", c => (d += c));
    res.on("end", () => cb(d));
  });
}

get("https://docs.google.com/spreadsheets/d/e/2PACX-1vSJYsNE4lzI7B1wfDlauWPaH8s-RQJudFcHqm3qumqOj1KqxEESjqIXTAA4rHpUClnWpvsm1gN0oY5L/pub?output=csv", d => {
  console.log("--- raw CSV ---");
  console.log(d);
  console.log("--- parsed rows ---");
  console.log(JSON.stringify(sheetRowsToAnnouncements(d), null, 1));
});