// Load Titanic Passenger Data
fetch('passengers.json')
  .then(res => res.json())
  .then(json => handleData(json))
  .catch(err => console.log(err.message))


// Handle Data
function handleData(json) {
  const fields = json.map(passengers => passengers.fields)

  // TOTAL PASSENGER
  const totalPassengers = fields.length
  document.getElementById("total-passengers").innerHTML = totalPassengers
  console.log("Total Passengers:" + totalPassengers)

  // SURVIVORS
  const Survivors = fields.filter(passenger => {
    return passenger.survived === "Yes"
  })
  document.getElementById("survivors").innerHTML = Survivors.length
  console.log("Number of Survivors:" + Survivors.length)

  // DEATHS
  const Casualties = fields.filter(passenger => {
    return passenger.survived === "No"
  })
  document.getElementById('deaths').innerHTML = Casualties.length
  console.log("Number of Casualties:" + Casualties.length)

  // Child Passenger (Under 13)
  const childPassengers = fields.filter(passenger => {
    return passenger.age < 13
  })
  document.getElementById('childPassengers').innerHTML = childPassengers.length
  console.log("Total Number of Child Passengers: " + childPassengers.length)


  // Number of Female Passengers 
  const femalePassengers = fields.filter(passenger => {
    return passenger.sex === "female"
  })
  document.getElementById('femalePassengers').innerHTML = femalePassengers.length
  console.log("Female Deaths: " + femaleDeaths.length)

  // Number of Male Passengers
  const malePassengers = fields.filter(passenger => {
    return passenger.sex === "male"
  })
  document.getElementById('malePassengers').innerHTML = malePassengers.length
  console.log("Male Deaths: " + maleDeaths.length)

  // Male Deaths
  const deadMen = malePassengers.reduce((acc, pass) => {
    if (pass.survived === "No") {
      acc += 1
    }
    return acc
  }, 0)
  document.getElementById('maleDeaths').innerHTML = deadMen
  console.log("Male Deaths: " + deadMen)

  // Female Deaths
  const deadWomen = femalePassengers.reduce((acc, pass) => {
    if (pass.survived === "No") {
      acc += 1
    }
    return acc
  }, 0)
  document.getElementById('femaleDeaths').innerHTML = deadWomen
  console.log("Female Deaths: " + deadWomen)

  // Child Deaths (Under 13)
  const deadChildren = childPassengers.reduce((acc, child) => {
    if (child.survived === "No") {
      acc += 1
    }
    return acc
  }, 0)
  document.getElementById('childDeaths').innerHTML = deadChildren
  console.log("Child Deaths: " + deadChildren)

  // Challenge 5: Passenger Classes
  // const pClasses = new Set()
  // const numOfPClasses
  // const pc = {}
  // fields.forEach((passenger) => {
  //   pClasses.add(passenger.pclass)
  //   pc[passenger.pclass]
  // })

  // Challenge 1: Name, Fare, PClass, Survived Age
  const allFares = fields
    .filter(passenger => passenger.fare !== undefined)
    .map(({ fare }) => fare)
  console.log("All Fares:" + allFares)

  // Stretch Challenge: Ages (All, Min, Max, and Range)
  const allAges = fields.filter(passenger => {
    return passenger.age !== undefined
  }).map(passenger => {
    return passenger.age
  })
  const minAge = Math.min(...allAges)
  const maxAge = Math.max(...allAges)
  const ageRange = maxAge - minAge

  console.log('All Ages:' + allAges)
  console.log('Min Age:' + minAge)
  console.log('Max Age:' + maxAge)
  console.log('Age Range:' + ageRange)

  // Stretch Challenge: How many traveled w/ a nanny?

}
