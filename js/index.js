function leapYear(){
  var year = parseInt(document.getElementById('yearID').value);
  var value;
  if(year % 4 === 0 && year % 100 === 0){
    if(year % 400 === 0){
      value ="it's a leap year!!!";
    }else{
      value ="It's not a leap year!!!";
    }
  }else if(year % 4 === 0){
      value ="It's a leap year!!!";

  }else{
      value="It's not a leap year!!!";
  }
  document.getElementById('result').innerHTML = value;
}
