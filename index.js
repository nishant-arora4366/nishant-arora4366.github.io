function acceptInput() {
    var userInput = document.getElementById('userInput').value;

    var hexVal = parseInt(userInput, 16);
    var resRight=hexVal/Math.pow(2,6);
    var binaryResult=deciToBin(resRight);

    var alternateDigitsV;
    let hexValues = []; // Initialize an array to hold the hex values
    alternateDigitsV = extractAlternateDigits(binaryResult, false);
    decimalVal = parseInt(alternateDigitsV, 2);
    hexValues.push(decimalVal.toString(16).toUpperCase()); // Add the first hex value to the array
    alternateDigitsV = extractAlternateDigits(binaryResult, true);
    decimalVal = parseInt(alternateDigitsV, 2);
    hexValues.push(decimalVal.toString(16).toUpperCase()); // Add the second hex value to the array
    alert(hexValues.join(', ')); 
}


function hexToBinary(hexString) {
  // Define a mapping from hexadecimal characters to their binary representation
  const hexToBinaryMap = {
    '0': '0000', '1': '0001', '2': '0010', '3': '0011',
    '4': '0100', '5': '0101', '6': '0110', '7': '0111',
    '8': '1000', '9': '1001', 'A': '1010', 'B': '1011',
    'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111'
  };

  // Convert each hexadecimal character to binary and concatenate them
  let binaryString = '';
  for (let i = 0; i < hexString.length; i++) {
    const hexChar = hexString[i].toUpperCase();
    binaryString += hexToBinaryMap[hexChar];
  }

  return binaryString;
}

function extractAlternateDigits(inputStringF, bool) {
  let result = "";
    var i;
    if (bool){
        i = 1
    }else i = 0;
  for (i; i < inputStringF.length; i += 2) {
    result += inputStringF[i];
  }
  return result;
}

function deciToBin(arg)
{
    res1 = 999;
    args = arg;
    while(args>1){
        arg1 = parseInt(args/2);
        arg2 = args%2;
        args = arg1;        
        if(res1 == 999){
            res1=arg2.toString();
        }
        else{
            res1=arg2.toString()+res1.toString();
        }
    }
    if(args==1 && res1 != 999){
        res1=args.toString()+res1.toString();
    }
    else if(args==0 && res1 == 999){
        res1=0;
    }
    else if(res1 == 999){
        res1=1;
    }
    var ll = res1.length;
    while(ll%4 != 0){
        res1 = '0'+res1;
        ll = res1.length;
    }
var resNew=res1.split('.');
    return resNew[0]; 
}
