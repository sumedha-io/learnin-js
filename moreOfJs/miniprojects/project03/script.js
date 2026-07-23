const clock = document.querySelector('#clock')


//console.log(date.toLocaleTimeString());
//we need this to be updated every second so we use setInterval for 1000ms

setInterval(function(){
    let date = new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
},1000)