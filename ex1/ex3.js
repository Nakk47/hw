let x = 45;

if (x %5 === 0 && x %3 === 0) {
    console.log("It is divisible by both 3 and 5");
} else if (x %5 === 0) {
    console.log("It is only divisible by 5");
} else if (x %3 === 0) {
    console.log("It is only divisible by 3");
} else {
    console.log("It is not divisible by 3 or 5");
}

let day="Sunday";
if(day =="Sunday" || day=="Saturday"){
    console.log("Its weekend");
}else if(day != "saturday"||day!="sunday"){
    console.log("It not a Weekend");
}
let light = "Red";
if(light==="Red"){
    console.log("stop");
}else if(light ==="Green"){
    console.log("go");
}else if(light ==="Yellow"){
    console.log("slow down");
}else{
    console.log("invalid color")
}
