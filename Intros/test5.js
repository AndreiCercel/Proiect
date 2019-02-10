for(n = 0; n < 15; n++){
if (n === 5 || n === 3){
    continue;
}   
console.log(n);
    if (n === 7){
        break;
    }
}
console.log("looped break at 14! DONE")