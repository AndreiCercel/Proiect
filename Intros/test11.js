var birthday = new Date(1982, 08, 20, 11, 15, 25);
var birthday2 = new Date(1982, 08, 20, 11, 15, 25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());
if(birthday.getTime === birthday2.getTime){
    console.log("birthdays are equal");
}else {
    console.log("birthay are not equal")
}