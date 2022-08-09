
const months = [31,28,31,30,31,30,31,31,30,31,30,31]
   
   function age(){

    
    var today = new Date();
    var userinput = new Date(document.getElementById("inputdateid").value);

    var birthMonth,birthDate,birthYear;

    var birthDetails = {
         
      date: userinput.getDate(),
      month: userinput.getMonth()+1,
      year: userinput.getfullyear()
    }

    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth()+1;
    var currentDate = today.getDate();

    leapChecker(currentYear);


    if(

      birthDetails.year > currentYear ||
       (birthDetails.month > currentMonth &&
         birthDetails.year == currentYear) ||
         (birthDetails.date > currentDate &&
          birthDetails.month == currentMonth &&
          birthDetails.year == currentYear)
    ) {

      document.getElementById("result") = " Not Born Yet!";
      
    }
     


    birthYear = currentYear - birthDetails.year;
    
    if(currentMonth >= birthDetails.month){
       birthMonth = currentMonth - birthDetails.month;
    }
    else{
       birthYear--;
       birthMonth = 12 + currentMonth - birthDetails.month;
    } 


    if(currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        var days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
      if(birthMonth < 0) {
        birthMonth = 11;
        birthYear--,
      }
    }


     displayResult(birthDate,birthMonth,birthYear);

  }

  function displayResult(){

    document.getElementById("result").innerHTML =displayResult;
  }

  function leapChecker(year) {

    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0) ){
      months[1] = 29;
    }
    else{
      months[1] = 28   
     }
  }









    
    
    
    





    
    
    
    


   