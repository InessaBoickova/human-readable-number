module.exports = function check(number) {
  // your solution
    
  let one = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let two = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = ' hundred';
  let result = '';
  let str= number.toString();
if (number == 0) {
    return 'zero';
}

if (number < 20) {
    result = one[number];
    return result;
}

if (str.length == 3) {
    result = one[parseInt(str.charAt(0))] + hundred;
    if(parseInt(str.charAt(1))==1)
    {
        result +=' '+ one[parseInt(str.charAt(1)+str.charAt(2))]; 
        return result; 
    }
    if(parseInt(str.charAt(1))==0 && parseInt(str.charAt(2))==0){
        return result;
    }
    if(parseInt(str.charAt(2))==0){
        result +=' '+ two[parseInt(str.charAt(1))];
        return result;
    }
    if(parseInt(str.charAt(1))==0){
        result +=' '+ two[parseInt(str.charAt(1))];
        result += one[parseInt(str.charAt(2))];
        return result;
    }
    result +=' '+ two[parseInt(str.charAt(1))]+' ';
    result += one[parseInt(str.charAt(2))];
    return result;
}
if(parseInt(str.charAt(1))==0){
    result += two[parseInt(str.charAt(0))];
    return result;
}
result += two[parseInt(str.charAt(0))]+' ';
result += one[parseInt(str.charAt(1))];
return result;
}
