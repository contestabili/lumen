// /******
//   — Lumen JavaScript
//   - Google Spreadsheet DB
// /******

/* ID's connecting to Questioin 1
  #question-1
  #responce-1
  #submit-1
*/

// First line of function
blockspring.runParsed("query-google-spreadsheet", {
    // Here is where you need to decide what data you are grabbing with the Google query syntax
    // I am finding elements that match the variable num, which is from a previous part of the code
    // Google syntax makes you request columns with letters as opposed to your column titles.
    "query": "SELECT A, B",
    // This is the full URL of your sheet. Just copy and paste from your browser.
    "url": "https://docs.google.com/spreadsheets/d/1gwKR7NJ3qMCFhx4ACEke5hkluQLd34XhpZRQ1TFqMyA/edit?usp=sharing"
    // Cache is false so that your browser does not run an old function when you change your code
    }, { cache: false, expiry: 7200}, function(res) {
    // All results are part of the res.params.data object.
    // in my case, I requested two columns from my spreadsheet, one named skill and one named key.
    // There is one matching row in this case, with two elements
    var answers = res.params.data;
    numAnswers = answers.length;
    console.log('Answers: ' + answers);
    console.log('Number of answers: ' + numAnswers);
    console.log('Answer 0: ' + answers[0]['answer']);
});

var data = {};
data[0] = '?';

blockspring.runParsed("append-to-google-spreadsheet", {
// middle parameter from Google Spreadsheet URL
// https://docs.google.com/spreadsheets/d/FILE_ID/edit?usp=sharing
"file_id": '1gwKR7NJ3qMCFhx4ACEke5hkluQLd34XhpZRQ1TFqMyA',
// The first sheet within the particular doc will always be 0
"worksheet_id": 0,
//The array of arrays, as stated above
"values": data},
//Provided on the page at https://open.blockspring.com/pkpp1233/append-to-google-spreadsheet
{ "api_key": "c155f5a32843c24811a08f684545a5aa" },
function(res){
  //console.log to check for errors
console.log(res);
});
