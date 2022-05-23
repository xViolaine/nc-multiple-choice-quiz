const correctAnswer = document.getElementById("correct_answer!")
const startButton = document.getElementById('start')
const question = document.getElementById('question')
const answers = document.getElementById('answers')
const mainQuestion =document.getElementById('mainQuestion')


// function printMessage() {
//   console.log(message)
//   message.innerText = "You're correct"
// }


function printQuestion1() {
  question.innerText = "What is the best animal?"
  const btn1 = document.createElement("button")
  btn1.innerText = "RED PANDA!"
  const btn2 = document.createElement("button")
  btn2.innerText = "Ring-tailed Lemur"
  const btn3 = document.createElement("button")
  btn3.innerText = "Otto"
  const btn4 = document.createElement("button")
  btn4.innerText = "Dogs"
  mainQuestion.appendChild(btn1)
  mainQuestion.appendChild(btn2)
  mainQuestion.appendChild(btn3)
  mainQuestion.appendChild(btn4)
}

startButton.addEventListener('click', printQuestion1)

// correctAnswer.addEventListener('click', printMessage)




// function addCounter(){
//   function innerCounter (){
//   let counter = 0
//   counter ++
//   return counter
//   }
//   console.log(counter)
//   return innerCounter
// }

// let count = addCounter()

// correctAnswer.addEventListener('click',()=>{count})

{/* <h2>1. What is the best animal?</h2>
<button id="correct_answer!">RED PANDA!</button>
<button>Otter</button>
<button>Moose</button>
<button>Dog</button>
<h2>2. What is the best colour?</h2>
<button id="correct_answer!">BLUE!</button>
<button>Red</button>
<button>Violet</button>
<button>Aquamarine</button>
<h2>3. What is the best food?</h2>
<button id="correct_answer!">SPAGHETTI CARBONARA!</button>
<button>Scotch Eggs</button>
<button>Tikka Masala</button>
<button>Fajitas</button> */}