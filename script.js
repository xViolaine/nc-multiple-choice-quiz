
const correctAnswer = document.getElementsByClassName("correct answer!")

function addCounter(){
  function innerCounter (){
  let counter = 0
  counter ++
  return counter
  }
  console.log(counter)
  return innerCounter
}

let count = addCounter()

correctAnswer.addEventListener('click',()=>{count})

