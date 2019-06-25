function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var digitString = String(angka)
    digitString = digitString.split("") 
    if (angka != 0 && digitString.length != 1 ){
        var newAngka = 1;
        for (var i=0; i < digitString.length; i++){
            newAngka = newAngka * digitString[i];
            // console.log(newAngka)
        }
        return kaliTerusRekursif(newAngka)
    } else {
        return angka;
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6