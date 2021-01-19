/* Global Variables */
let baseurl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apikey = '&appid=d760a388b0789dd8110b95427fbbdc8b';
let apiData;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();
document.getElementById('generate').addEventListener('click', performAction);
function performAction(e) {
  let ur = document.getElementById('feelings').value;
  let zip_code = document.getElementById('zip').value;
  apiData = retrieveData(baseurl, zip_code, apikey)
  .then(function(apiData){
    console.log(apiData)
    postData('http://localhost:8080/addData', {temperature: apiData.main.temp, date: newDate, user_response: ur})
  }).then(function(){
    updateUI()
  })
};
// Async GET
const retrieveData = async (url, zip, key) =>{
  const request = await fetch(url+zip+key);
  try {
  // Transform into JSON
  const allData = await request.json()
  console.log(allData)
  return allData;
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// Async POST
const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

// Update UI Elements
const updateUI = async () => {
  const request = await fetch('http://localhost:8080/all');
  try{
    const allData = await request.json();
    console.log(allData)
    document.getElementById('date').innerHTML = allData[allData.length-1].date;
    document.getElementById('temp').innerHTML = allData[allData.length-1].temp;
    document.getElementById('content').innerHTML = allData[allData.length-1].user_response;
  }catch(error){
    console.log("error", error);
  }
}
