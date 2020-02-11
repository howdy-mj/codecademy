let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 30;

if (age > 18 && registeredEarly){
  raceNumber += 1000;
  console.log(`${raceNumber} will race at 9:30am.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`${raceNumber} will race at 11:00am.`)
} else if (age < 18) {
  console.log(`${raceNumber} will race at 12:30am.`)
} else{
  console.log('Please see the registration desk.')
}