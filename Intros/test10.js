

var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);

};
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(210, "Ninja Man");
var myCar2 = new Car(30, "JObalau");
var myCar3 = new Car(10, "melc Man");
var myCar4 = new Car(200, "James");
var myCar5 = new Car(70, "Nononon");

myCar.drive(30,5);
    myCar3.logDriver();


