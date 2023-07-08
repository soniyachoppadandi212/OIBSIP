var subclass1=document.getElementById("subclass1");
var subclass2=document.getElementById("subclass2");
var subclass3=document.getElementById("subclass3");
var subclass4=document.getElementById("subclass4");
var subclass5=document.getElementById("subclass5");
var subclass6=document.getElementById("subclass6");

console.log(subclass1);
var time=0;
const timeInter = setInterval(() => {
    time++;
    console.log(time);
    if(time==260)
    {
        clearInterval(timeInter);
    }
    subclass1.style=`width:${time}px;`
}, 30);
var time1=0;

const timeInter2 = setInterval(() => {
    time1++;
    console.log(time);
    if(time1==200)
    {
        clearInterval(timeInter2);
    }
    subclass2.style=`width:${time1}px;`
}, 30);

var time2=0;

const timeInter3 = setInterval(() => {
    time2++;
    console.log(time2);
    if(time2==180)
    {
        clearInterval(timeInter3);
    }
    subclass3.style=`width:${time2}px;`
}, 30);

var time3=0;

const timeInter4 = setInterval(() => {
    time3++;
    console.log(time2);
    if(time3==100)
    {
        clearInterval(timeInter4);
    }
    subclass4.style=`width:${time3}px;`
}, 30);


var time4=0;

const timeInter5 = setInterval(() => {
    time4++;
    console.log(time2);
    if(time4==320)
    {
        clearInterval(timeInter5);
    }
    subclass5.style=`width:${time4}px;`
}, 30);

var time5=0;

const timeInter6 = setInterval(() => {
    time5++;
    console.log(time2);
    if(time5==280)
    {
        clearInterval(timeInter6);
    }
    subclass6.style=`width:${time5}px;`
}, 30);

