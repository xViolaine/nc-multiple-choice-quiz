
const correctAnswer = document.getElementById("correct_answer!")
const message = document.getElementsByClassName('answer')


function printMessage(){message.innerText = "You're correct"}



correctAnswer.addEventListener('click',()=>{
  console.log('here')
  printMessage();
  })




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

