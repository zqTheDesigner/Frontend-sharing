// This is a single line comment.

/*
This is also a comment, but
can split in multiple lines
 */

/**
 * This is same as the 2nd comment
 * but formatted in a  nicer style
 */

/**
 * Comment is important. The code tells computer what to do.
 * The comment tells  you  and others what does the CODE do.
 */

// This line will display the string "test" in console
console.log('test')

// If you comment a code, it will not run
// console.log('This will NOT show in console')
/**
 * console.log('This will NOT show in console as well')
 */

// Try to UNCOMMENT the code below, and refresh the page
// console.log('You should see this in the browser console')

console.log('script.js loaded')

// ops is the argument passd from the button clicking event
function calculating(ops) {
  var calculatingResult = 0
  var inputA = document.getElementById('inputA')
  var inputB = document.getElementById('inputB')
  var inputAVal = Number(inputA.value)
  var inputBVal = Number(inputB.value)
  console.log(ops)
  // Some calculating logic

  if (ops == '+') {
    // 0.1 + 0.2 doesn't work here!!!
    calculatingResult = inputAVal + inputBVal
    console.log('Plus')
  }
  if (ops == '-') {
    calculatingResult = inputAVal - inputBVal
    console.log('Min')
  }
  if (ops == '*') {
    calculatingResult = inputAVal * inputBVal
    console.log('Times')
  }
  if (ops == '/') {
    calculatingResult = inputAVal / inputBVal
    console.log('divide')
  }

  var resultContainer = document.getElementById('resultContainer')
  resultContainer.innerHTML = calculatingResult
  return calculatingResult
}

// Kindly do a utf-8 encode the payload for language other than English.


var xhr = new XMLHttpRequest()
//Please disable this when testing in local
// xhr.withCredentials = true

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    document.getElementById('resultContainer').innerText = this.responseText
  }
})

xhr.open(
  'POST',
  'https://apis.sentient.io/microservices/nlp/textsummarisation/v0/getpredictions'
)
xhr.setRequestHeader('content-type', 'application/json')
// Just to remember
xhr.setRequestHeader('x-api-key', 'A76DE7145C5641549429')


var data = JSON.stringify({
  text: "",
})

xhr.send(data)
