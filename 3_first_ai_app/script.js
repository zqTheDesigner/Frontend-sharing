console.log('scripe.js loaded')

document.getElementById('textToSummary')

// Define of the function
function summaryText() {
  const userInput = document.getElementById('textToSummary').value

  const data = JSON.stringify({
    text: userInput,
  })

  // Declaring a Class
  const xhr = new XMLHttpRequest()

  // Retrieving the Data
  const callBack = function () {
    if (this.readyState === this.DONE) {
      const resultString = this.responseText
      const resultObject = JSON.parse(resultString)

      const resultHTMLElement = document.getElementById('resultContainer')
      

      resultHTMLElement.innerText = resultObject.results.text
    }
  }

  xhr.addEventListener('readystatechange', callBack)

  xhr.open(
    'POST',
    'https://apis.sentient.io/microservices/nlp/textsummarisation/v0/getpredictions'
  )
  xhr.setRequestHeader('content-type', 'application/json')

  // API key
  xhr.setRequestHeader('x-api-key', 'A76DE7145C5641549429')

  xhr.send(data)
}
