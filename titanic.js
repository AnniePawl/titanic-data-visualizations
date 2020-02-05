// Load Titanic Passenger Data --------------------
fetch('passengers.json')
  .then(res => res.json())
  .then(json => handleData(json))
  .catch(err => console.log(err.message))

// Variables ---------------------------------------
let state = false
let showGender = false
let showCasualties = false
let showChildren = false
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
      const el = document.createElement('div') // Make element and attach to DOM
      root.appendChild(el)
      elements.push(el)  //store element
      passengerData.push(passenger) //store passenger

      el.classList.add('square-styles')
      el.dataset.index = i // <div data-index="i">

    });
  }
}

//  Passenger Event Listener -------------------------------
const body = document.querySelector('body') // qs will select 1st instance
body.addEventListener('click', (e) => { //always takes event object as parameter
  const index = e.target.dataset.index
  console.log(index)

  if (index !== undefined)
    showOverlay(index)
  console.log(passengerData[index])
})

function showOverlay(index) {
  const el = document.getElementById('showOverlay')
  const { name, sex, age, survived, fare, pclass } = passengerData[index]
  el.style.display = 'block'
  el.innerHTML = `
  <div><span><strong>Name: </strong></span>${name}</div>
  <div><span><strong>Gender: </strong></span>${sex}</div>
  <div><span><strong>Age: </strong></span>${age}</div>
  <div><span><strong>Survived: </strong></span>${survived}</div>
  <div><span><strong>Passenger Class: </strong></span>${pclass}</div>
  <div><span><strong>Fare: </strong></span>${fare}</div>
   `
  el.style.height = '140px'
  el.style.width = '220px'
  el.style.margin = '3px'
  el.style.border = '2px solid black'
}

// Toggle Gender Button On/Off -----------------------------
const showGenderButton = document.getElementById('showGenderButton')
showGenderButton.addEventListener('click', (e) => {
  showGender = !showGender

  if (showGender) {
    e.target.style.backgroundColor = '#3355a3'
    e.target.style.color = 'white'
    e.target.classList.add('buttonActive')
    e.target.innerHTML = 'Reset'
    // show gender in el
    displayGender()
  } else {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black'
    e.target.classList.remove('buttonActive')
    e.target.innerHTML = 'Gender'

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
    e.target.innerHTML = 'Reset'

  } else {
    e.target.style.backgroundColor = 'white';
    e.target.classList.remove('buttonActive')
    displayCasualties()
    e.target.innerHTML = 'Casualties'
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

// Toggle Childen Button On/Off -----------------------------
const showChildrenButton = document.getElementById('showChildrenButton')
showChildrenButton.addEventListener('click', (e) => {
  showChildren = !showChildren
  if (showChildren) {
    e.target.classList.add('buttonActive')
    e.target.innerHTML = 'Reset'
    displayChildren()
  } else {
    e.target.classList.remove('buttonActive')
    e.target.innerHTML = 'Gender'
    displayChildren()
  }
})

//  Display Children -------------------------------
function displayChildren() {

  const childPassengers = fields.filter(passenger => {
    return passenger.age < 13
  })

  console.log(showChildren)
  passengerData.forEach((obj, i) => {
    const el = elements[i]
    el.innerHTML = obj.childPassengers === "True" ? '☠︎' : ''
    if (!showChilden) {
      el.innerHTML = ''
    }
  })
}

  //  Sort Button Function ------------------------
  // function sortButtons(button) {
  //   button.classList.remove('button-selected')
  //   button.classList.add('button-selected')
  // }

