// Load Titanic Passenger Data --------------------
fetch('passengers.json')
  .then(res => res.json())
  .then(json => handleData(json))
  .catch(err => console.log(err.message))

// Variables ---------------------------------------
let state = false
let showGender = false
let showCasualties = false
const elements = []
const passengerData = []

// Handle Data -------------------------------------
function handleData(json) {
  const fields = json.map(passengers => passengers.fields)

  renderPassengers(fields, 'render-all-passengers')
  renderPassengers(fields, 'render-male-passengers')


  // Render Passenger Squares -------------------------
  renderPassengers(fields, 'render-all-passengers')

  function renderPassengers(data, id) {
    const root = document.getElementById(id)

    root.style.display = "flex"
    root.style.flexWrap = "wrap"

    data.forEach((passenger, i) => {
      // Make element and attach to DOM
      const el = document.createElement('div')
      root.appendChild(el)
      elements.push(el)  //store element
      passengerData.push(passenger) //store passenger

      el.style.width = "22px"
      el.style.height = "22px"
      el.style.backgroundColor = '#2b2b2b'
      el.style.margin = "1px"
      el.style.transition = '1s'

      el.dataset.index = i // <div data-index="i">
    });
  }
}

//  Passenger Event Listener -------------------------------
const body = document.querySelector('body') // qs will select 1st instance
body.addEventListener('click', (e) => { //always takes event object as parameter
  console.log(e.target.dataset.index)
  if (e.index !== undefined)
    console.log(passengerData[index])
  overlay.innerHTML("Testing")
})


// Toggle Gender Button On/Off -------------------
const showGenderButton = document.getElementById('showGenderButton')
showGenderButton.addEventListener('click', (e) => {
  showGender = !showGender

  if (showGender) {
    e.target.style.backgroundColor = '#3355a3'
    e.target.style.color = 'white'
    e.target.classList.add('buttonActive')
    // show gender in el
    displayGender()
  } else {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black'
    e.target.classList.remove('buttonActive')
    displayGender()
  }
})

//  Display Gender -------------------------------
function displayGender() {

  console.log(showGender)
  passengerData.forEach((obj, i) => {
    // console.log(obj)
    const el = elements[i]
    let color = obj.sex === 'male' ? '#3355a3' : '#ab3e32'
    if (!showGender) {
      color = '#2b2b2b'
    }
    el.style.backgroundColor = color
  })
}

// Toggle Casualties Button On/ Off -----------------
const showCastualtiesButton = document.getElementById('showCasualtiesButton')
showCasualtiesButton.addEventListener('click', (e) => {
  showCasualties = !showCasualties

  if (showCasualties) {
    e.target.style.backgroundColor = '#fdffba'
    e.target.classList.add('buttonActive')
    displayCasualties()

  } else {
    e.target.style.backgroundColor = 'white';
    e.target.classList.remove('buttonActive')
    displayCasualties()
  }
})

// Display Casualties---------------------------
function displayCasualties() {
  console.log(showCasualties)
  passengerData.forEach((obj, i) => {
    const el = elements[i]
    el.innerHTML = obj.survived === "No" ? '☠︎' : ''
    if (!showCasualties) {
      el.innerHTML = ''
    }

  })
}


// // Total Passengers ----------------------------
// const totalPassengers = fields.length
// document.getElementById("total-passengers").innerHTML = totalPassengers
// console.log("Total Passengers:" + totalPassengers)

// // Survivors -----------------------------------
// const Survivors = fields.filter(passenger => {
//   return passenger.survived === "Yes"
// })
// document.getElementById("survivors").innerHTML = Survivors.length
// console.log("Number of Survivors:" + Survivors.length)

// // Deaths ---------------------------------------
// const Casualties = fields.filter(passenger => {
//   return passenger.survived === "No"
// })
// document.getElementById('deaths').innerHTML = Casualties.length
// console.log("Number of Casualties:" + Casualties.length)

// // Child Passenger (Under 13) --------------------
// const childPassengers = fields.filter(passenger => {
//   return passenger.age < 13
// })
// document.getElementById('childPassengers').innerHTML = childPassengers.length
// console.log("Total Number of Child Passengers: " + childPassengers.length)

// // Number of Female Passengers  -----------------
// const femalePassengers = fields.filter(passenger => {
//   return passenger.sex === "female"
// })
// document.getElementById('femalePassengers').innerHTML = femalePassengers.length
// console.log("Female Deaths: " + femaleDeaths.length)

// // Number of Male Passengers --------------------
// const malePassengers = fields.filter(passenger => {
//   return passenger.sex === "male"
// })
// document.getElementById('malePassengers').innerHTML = malePassengers.length
// console.log("Male Deaths: " + maleDeaths.length)

// // Male Deaths ----------------------------------
// const deadMen = malePassengers.reduce((acc, pass) => {
//   if (pass.survived === "No") {
//     acc += 1
//   }
//   return acc
// }, 0)
// document.getElementById('maleDeaths').innerHTML = deadMen
// console.log("Male Deaths: " + deadMen)

// // Female Deaths -------------------------------
// const deadWomen = femalePassengers.reduce((acc, pass) => {
//   if (pass.survived === "No") {
//     acc += 1
//   }
//   return acc
// }, 0)
// document.getElementById('femaleDeaths').innerHTML = deadWomen
// console.log("Female Deaths: " + deadWomen)

// // Child Deaths (Under 13) ----------------------
// const deadChildren = childPassengers.reduce((acc, child) => {
//   if (child.survived === "No") {
//     acc += 1
//   }
//   return acc
// }, 0)
// document.getElementById('childDeaths').innerHTML = deadChildren
// console.log("Child Deaths: " + deadChildren)

// // Challenge 5: Passenger Classes
// // const pClasses = new Set()
// // const numOfPClasses
// // const pc = {}
// // fields.forEach((passenger) => {
// //   pClasses.add(passenger.pclass)
// //   pc[passenger.pclass]
// // })

// // Challenge 1: Name, Fare, PClass, Survived Age
// const allFares = fields
//   .filter(passenger => passenger.fare !== undefined)
//   .map(({ fare }) => fare)
// console.log("All Fares:" + allFares)

// // Stretch Challenge: Ages (All, Min, Max, and Range)
// const allAges = fields.filter(passenger => {
//   return passenger.age !== undefined
// }).map(passenger => {
//   return passenger.age
// })
// const minAge = Math.min(...allAges)
// const maxAge = Math.max(...allAges)
// const ageRange = maxAge - minAge

// console.log('All Ages:' + allAges)
// console.log('Min Age:' + minAge)
// console.log('Max Age:' + maxAge)
// console.log('Age Range:' + ageRange)


  //  Sort Button Function ------------------------
  // function sortButtons(button) {
  //   button.classList.remove('button-selected')
  //   button.classList.add('button-selected')
  // }

