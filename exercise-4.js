function totalDigitRekursif(angka) {
    // you can only write your code here!
    if (angka != 0){
        var digitString = String(angka)
        digitString = digitString.split("")
        var takeNumber = Number(digitString.splice(0,1))
        var newAngka = Number(digitString.join(""))
        return takeNumber + totalDigitRekursif(newAngka)
    } else {
        return 0;
    }

    
    
    // if (digitString[0]!==0){
    //     var temp = Number(digitString[0]);
        
    // }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5