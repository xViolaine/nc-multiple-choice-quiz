const correctAnswer = document.getElementById("correct_answer!")
const startButton = document.getElementById('start')
const question = document.getElementById('question')
const answers = document.getElementById('answers')
const mainQuestion = document.getElementById('mainQuestion')
const count = document.getElementById('count')


const questions = [["What is the best animal?", ["RED PANDA!", "Ring-tailed Lemur", "Otto", "Dogs"], 0], ["What is the worst animal?", ["RED PANDA!", "Ring-tailed Lemur", "Otto", "Dogs"], 1]]

// function printMessage() {
//   console.log(message)
//   message.innerText = "You're correct"
// }

function addCounter() {
  let counter = 0
  function innerCounter() {
    counter++
    count.innerText = counter
    return counter
  }
  console.log(counter)
  return innerCounter
}

let counter = addCounter()

function nextQuestion(questionNumber) {
  question.innerHTML = ""
  answers.innerHTML = ""
  // if condition for when there is no more questions
  printQuestion(...questions[questionNumber + 1], questionNumber + 1)
}

function printQuestion(title, allAnswers, correctAnswer, questionNumber) {
  startButton.hidden = true
  question.innerText = title
  for (let i = 0; i < allAnswers.length; i++) {
    const btn = document.createElement("button")
    btn.innerText = allAnswers[i]
    if (i === correctAnswer) {
      btn.addEventListener('click', counter)
    }
    btn.addEventListener('click', () => nextQuestion(questionNumber))

    answers.appendChild(btn)

  }
}


// function printQuestion() {
//   startButton.hidden = true
//   question.innerText = "What is the best animal?"
//   const btn1 = document.createElement("button")
//   btn1.addEventListener('click', counter)

//   btn1.innerText = "RED PANDA!"
//   const btn2 = document.createElement("button")
//   btn2.innerText = "Ring-tailed Lemur"
//   const btn3 = document.createElement("button")
//   btn3.innerText = "Otto"
//   const btn4 = document.createElement("button")
//   btn4.innerText = "Dogs"
//   mainQuestion.appendChild(btn1)
//   mainQuestion.appendChild(btn2)
//   mainQuestion.appendChild(btn3)
//   mainQuestion.appendChild(btn4)
// }

startButton.addEventListener('click', () => printQuestion(...questions[0], 0), { once: true })

// correctAnswer.addEventListener('click', printMessage)






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