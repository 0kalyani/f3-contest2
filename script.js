
// document.getElementById("z1")=data.coord.lat;
// document.getElementById("s1")
function myFunc(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=varanasi&appid=ed3553e53ec8c4b430a8748863af77a4')
.then(res => res.json())
.then((data)=>{
    document.getElementById("z1").innerText=data.name;
    document.getElementById("z2").innerText=data.coord.lat;
    document.getElementById("z3").innerText=data.timezone;
    document.getElementById("z4").innerText=data.wind.speed;
    document.getElementById("z5").innerText=data.main.pressure;
    document.getElementById("z6").innerText=data.main.humidity;
    document.getElementById("z7").innerText=data.wind.deg;
    // document.getElementById("z8").innerText=data.;
    document.getElementById("z9").innerText=data.main.feels_like;
   document.getElementById("e1").innerText=data.coord.lon;
   document.getElementById("z10").innerText=data.coord.lat;
   document.getElementById("z11").innerText=data.coord.lon;
    document.getElementById("body").style.visibility="visible";
    document.getElementById("web").style.visibility="hidden";
    // myCar.style.visibility="visible";

    console.log(data.coord.lat);
    console.log(data);
    console.log(data.coord.lon);
    console.log(data.name);
    console.log(data.timezone);
    console.log(data.wind.speed);
    console.log(data.wind.deg);
    console.log(data.main.feels_like);
    console.log(data.main.humidity);
    console.log(data.main.pressure);
});
}
