console.log('scripe.js loaded')

document.getElementById('textToSummary')

// Define of the function
function summaryText() {
  console.log('Summary Text Triggered')
  // Kindly do a utf-8 encode the payload for language other than English.

  // This is the long raw text string input by user
  const userInput = document.getElementById('textToSummary').value

  console.log('Summarying text: ', userInput)
  // Payload
  const data = JSON.stringify({
    text: userInput,
  })

  // Declaring a Class
  const xhr = new XMLHttpRequest()
  //Please disable this when testing in local
  // xhr.withCredentials = true;

  // Retrieving the Data
  const callBack = function () {
    if (this.readyState === this.DONE) {
      // Deliver it back
      console.log(this.responseText)

      // result is the response from text summary api call
      const result = this.responseText
      const resultHTMLElement = document.getElementById('resultContainer')

      resultHTMLElement.innerText = result
    }
  }
  // A callback function (function B) is a function passed in to another function (function A) as argument.
  // When function A is running, it will call function B automatically
  xhr.addEventListener('readystatechange', callBack)

  // Endpoint
  xhr.open(
    'POST',
    'https://apis.sentient.io/microservices/nlp/textsummarisation/v0/getpredictions'
  )
  xhr.setRequestHeader('content-type', 'application/json')

  // API key
  xhr.setRequestHeader('x-api-key', 'A76DE7145C5641549429')

  // Request action
  // Calling a xhr.send() function with a data argument
  xhr.send(data)
}
