blockspring.runParsed("query-google-spreadsheet",{query:"SELECT A, B",url:"https://docs.google.com/spreadsheets/d/1gwKR7NJ3qMCFhx4ACEke5hkluQLd34XhpZRQ1TFqMyA/edit?usp=sharing"},{cache:!1,expiry:7200},function(e){var s=e.params.data;numAnswers=s.length,console.log("Answers: "+s),console.log("Number of answers: "+numAnswers),console.log("Answer 0: "+s[0].answer)});var data={};data[0]="?",blockspring.runParsed("append-to-google-spreadsheet",{file_id:"1gwKR7NJ3qMCFhx4ACEke5hkluQLd34XhpZRQ1TFqMyA",worksheet_id:0,values:data},{api_key:"c155f5a32843c24811a08f684545a5aa"},function(e){console.log(e)});