let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let inp4 = document.getElementById('inp4');
let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let btn = document.getElementById('btn');
let h4 = document.getElementById('h4')
let btn2 = document.getElementById('btn2')
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let span3 = document.getElementById('span3')
let dayDifference;
function h4text(){
    setTimeout(() => {
        h4.innerText =''
    }, 1600);
    clearTimeout()
}
btn.onclick = function(){
    if(inp1.value === ""){
        h4.innerText = 'Please Enter the service name';
        h4text()
        return;
    }
    if(inp2.value === ""){
        h4.innerText = 'please Enter the subscription amount';
        h4text()
        return;
    }
    if(inp3.value === ""){
        h4.innerText = 'please Enter Next Renewal Date';
        h4text()
        return;
    }
    if(select1.value === ""){
        h4.innerText = 'Please select your currency';
        h4text()
        return;
    }
    if(select2.value === ""){
        h4.innerText = "Please select Billing Cycle";
        h4text()
        return;
    }
    calculation()
    inp3value()
    inp1.value ='';
    inp2.value='';
    inp3.value='';
    inp4.value='';
    select1.value ='';
    select2.value = '';
}
function inp3value(){
    // 1. جلب عنصر التاريخ
        let userDate = new Date(inp3.value);
        let currentDate = new Date();
        userDate.setHours(0, 0, 0, 0);
        currentDate.setHours(0, 0, 0, 0);
        let timeDifference = userDate - currentDate;
        dayDifference = timeDifference / (1000 * 60 * 60 * 24);
        console.log("الفرق بالأيام هو: " + dayDifference);
        return dayDifference; 
    }
function calculation(){
    let Monthlycostandannualcost;
    if(select2.value === "monthly"){
        Monthlycostandannualcost = Number(inp2.value)* 12;
    }else{
        Monthlycostandannualcost = Number(inp2.value);
    }
    if(dayDifference >= 0){
        console.log('Active subscription')
        span2.innerText = "Active subscription"
    }else{
        console.log("Written history is old and has already passed")
        span2.innerText = "Written history is old and has already passed"
    }
    console.log(Monthlycostandannualcost)
    span1.innerText = "The difference in days is: " + dayDifference;
    span3.innerText = "The subscription cost is: " + Monthlycostandannualcost;
    btn2.style.display = 'inline'
}
btn2.onclick = function(){
    location.reload()
}