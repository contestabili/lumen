function SubmitHikeOption() {
  
  console.log('Submit hike option');

  var data = {};
  data[0] = "hike";
  
  console.log(data);

  blockspring.runParsed("append-to-google-spreadsheet", {
  // middle parameter from Google Spreadsheet URL
  // https://docs.google.com/spreadsheets/d/FILE_ID/edit?usp=sharing
  "file_id": "1H-Py5u_c_ugqLPfp0EcskjISn02eXgelRtppDZewHh4",
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
 
  SubmitOn();
}

function SubmitCityOption() {
  
  console.log('Submit city option');

  var data = {};
  data[0] = "city";
  
  console.log(data);

  blockspring.runParsed("append-to-google-spreadsheet", {
  // middle parameter from Google Spreadsheet URL
  // https://docs.google.com/spreadsheets/d/FILE_ID/edit?usp=sharing
  "file_id": "1H-Py5u_c_ugqLPfp0EcskjISn02eXgelRtppDZewHh4",
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
 
  SubmitOn();
}

function SubmitOn() {
  
  console.log('Submit on');

  var data = {};
  data[0] = "on";
  
  console.log(data);

  blockspring.runParsed("append-to-google-spreadsheet", {
  // middle parameter from Google Spreadsheet URL
  // https://docs.google.com/spreadsheets/d/FILE_ID/edit?usp=sharing
  "file_id": "1ICXEhupijOfZB8n70q5rTOFOdd2Ndtjm-UbPhYd_jWs",
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
}