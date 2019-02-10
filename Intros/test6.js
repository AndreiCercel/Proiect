function getAverage (a,b,c,d,e,f){

    var average = (a + b + c + d + e + f) / 6;//local variable
    console.log(average);
    return average
}
var myResult = getAverage(7,8,9,10,11,12);
console.log("the average is " + myResult)

function myNumbers (x,y,z){
    var operatii = (x - z + y)*2;
    console.log(operatii);
    return operatii;
}
var rezultatulMeu = myNumbers(3,5,6); // global variable
console.log("Rezultatul operatiei mele este " + rezultatulMeu);

function logResults(){
    console.log("the average is " + myResult + " inside the function")
}
logResults();
function getResults(a,b,c,d){
    var results = a - b + c - d;

   
}
var myResults = getResults(3,2,4,5);
console.log(myResults);