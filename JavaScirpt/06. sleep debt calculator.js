const getSleepHours = function(day){
  day.toLowerCase();
  if ( day === 'monday'){
    return 8;
  } else if (day === 'tuesday'){
    return 7;
  } else if (day === 'wednesday'){
    return 5;
  } else if (day === 'thursday'){
    return 6;
  } else if (day === 'friday'){
    return 12;
  }else if (day === 'saturday'){
    return 10;
  } else if (day === 'sunday'){
    return 3;
  } else {
    return 'no data';
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') +getSleepHours('wednesday')+ getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours){
    return 'you got the perfect amount of sleep';
  } else if (actualSleepHours > idealSleepHours){
    console.log('you got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than needed');
  } else if (actualSleepHours < idealSleepHours){
    console.log('you got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than needed. get some rest.');
  }
}

calculateSleepDebt();