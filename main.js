const getSleepHours = (day) => {
  switch(day){
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7
      break;
      case 'wednesday':
      return 6
      break;
      case 'thursday':
      return 18
      break;
    case  'friday':
      return 9
      break;
      case 'saturday':
      return 4
      break;
      case 'sunday':
      return 5
      break;
  }
};

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') +getSleepHours('wednesday') +getSleepHours('thursday') +getSleepHours('friday') +getSleepHours('saturday') +getSleepHours('sunday') 
}

console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  let idealHours = 6;
  return idealHours * 7
}

console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours){
    return 'Perfect amount of sleep'
  }else if(actualSleepHours < idealSleepHours){
    
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')
  }else{
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed this week. Get back to work.')
  }
};

calculateSleepDebt()
