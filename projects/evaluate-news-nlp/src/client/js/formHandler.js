function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    postData('http://localhost:8081/addData', {ft: formText})
    fetch('http://localhost:8081/all')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('score_tag').innerHTML = res.data.score_tag;
        document.getElementById('agreement').innerHTML = res.data.agreement;
        document.getElementById('subjectivity').innerHTML = res.data.subjectivity;
        document.getElementById('confidence').innerHTML = res.data.confidence;
        document.getElementById('irony').innerHTML = res.data.irony;
        ;
    })
}

export { handleSubmit }

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
