//let get in our object 1
const comeIn = document.querySelector('.come-in');
const powerOn = document.querySelector('.power');
const firstContainer = document.querySelector('.first-container');
const hp = document.querySelector('.hp');

// let set our count
powerOn.addEventListener('click', () => {
    timeDown(3)
})


//our interval
let counter = 0;
function timeDown(time) {
    counter = setInterval(timer, 1000);
    function timer(){
        time--;
        if (time < 2) {
            hp.style.display = "block";
        }
        if (time < 0) {
            comeIn.style.display = "block";
            hp.style.display = "none";
            console.log('it has loadee');
            clearInterval(counter)
        }
       
    }
}
//second interval for animating
let countin = 0;
function minute(time) {
    countin = setInterval(timer, 1000);
    function timer(){
        time--;
        if (time < 0) { 
            console.log('it has load');
            thirdCon.style.display = "none";
            forthCon.style.display = "block";
            clearInterval(countin);
            clearInterval(counter)
        }
       
    }
}

//let get in our object 2
const comeSecond = document.querySelector('.come-in-2');
const switched = document.querySelector('.install');
const secondContainer = document.querySelector('.second-container');

switched.addEventListener('click', () => {
    timeDown();
    clearInterval(counter)
    secondContainer.style.display = "block"
    firstContainer.style.display = "none";
})

//our object 3
const thirdCon = document.querySelector('.third-container');
const installTwo = document.querySelector('.install-2');

installTwo.addEventListener('click', () => {
    thirdCon.style.display = "block";
    secondContainer.style.display = "none";
    countDownLine(0);
     minute(2);
})


//our object 4
const forthCon = document.querySelector('.forth-container');
const timeLine = document.querySelector('.time');


//our complete counter
let countUp = 0;
function countDownLine(clock) {
        countUp = setInterval(timer, 200)
        function timer() {
            clock++;
            timeLine.innerHTML = clock + "%";
            if (clock > 99) {
                console.log("installation is complete")
                //    clearInterval(countUp)
                   forthCon.style.display = "none";
                   fifthCon.style.display = "block";
            }
            if (clock > 130) {
                fifthCon.style.background = "rgb(48, 4, 90)";
            }
            if (clock > 180) {
                fifthCon.style.background = "#043261f3";
            }
            if (clock > 210) {
                fifthCon.style.background = "#612904f3";
            }
            if (clock > 250) {
                fifthCon.style.background = "#612904f3";
                almost.style.display = "none";
                finish.style.display = "block";
            }
            if (clock > 280) {
                comeInFifth.style.display = "none";
                comeInSixth.style.display = "block";
            }
            if (clock > 320) {
               fifthCon.style.display = "none";
                sixthCon.style.display = "block";
            }
            if (clock > 350) {
                clearInterval(countUp);
            }
        }
}

// object 5
const fifthCon = document.querySelector('.fifth-container');
const comeInFifth = document.querySelector('.come-in-fifth');
const almost = document.querySelector('.almost');
const finish = document.querySelector('.finish');

//object 6
const sixthCon = document.querySelector('.sixth-container');
const comeInSixth = document.querySelector('.come-in-sixth');



        // animation created by Dprince corporation
        //     follow me on social media
        //     twitter = dprinceboi
        //     facebook = azubuike prince
        //     youtube = Azubuike Prince

        //     please support my youtube by suscribing thanks.
          