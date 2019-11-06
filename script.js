
    
    // character arrays

    var lowerCase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j' ,'k', 'l', 'z', 'x', 'c', 'v', 'b',  'n', 'm',];
    var  upperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',];
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]; 
    var characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ':', ';', '+', '-', '_', '|',];

    // random characters

    var randomLower = lowerCase[Math.floor(Math.random()*lowerCase.length)];
    var randomUpper = upperCase[Math.floor(Math.random()*upperCase.length)];
    var randomNum = numbers[Math.floor(Math.random()*numbers.length)];
    var randomChar = characters[Math.floor(Math.random()*characters.length)];

    console.log(randomLower);
    console.log(randomUpper);
    console.log(randomNum);
    console.log(randomChar);

   // document.getElementById('password').value = randomLower;

   for (var i = 0; i < 5; i++){
      document.getElementById('password').value = randomLower;
   }
 
   
  
    