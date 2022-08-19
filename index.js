function scuberGreetingForFeet(ride){
  if(ride <= 400){
    return "This one is on me!";
  }
  else if(ride <= 2500){
    return "I will gladly take your thirty bucks.";
  }
   else if(ride > 2500){
    return "No can do.";
  };
}

function ternaryCheckCity(city){
    const place = "NYC";
  return city === place ? 'Ok, sounds good.': 'No go.';
}

function switchOnCharmFromTip(tip){
  let charm;
    switch(tip){
      case "generous":
        return charm = "Thank you so much.";
        break;
      case "not as generous":
        return charm = "Thank you."; 
        break;
      default: 
         return charm = "Bye."; 
         break;
    }
}