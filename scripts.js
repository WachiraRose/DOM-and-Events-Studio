// Write your JavaScript code here.
// Remember to pay attention to page loading!
// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    let takeoffButton = document.getElementById("takeoff");
    let flightStatusB = document.getElementById("flightStatus");
    let shuttleBckgrnd = document.getElementById("shuttleBackground");
    let spaceShuttlehght = document.getElementById("spaceShuttleHeight");
    let initialHeight = 0
    let landingButton = document.getElementById("landing");

    // creating function for takeoff
    takeoffButton.addEventListener("click", ()=>{
       let confirm= window.confirm("Confirm that the shuttle is ready to takeoff")
        if(confirm){
            flightStatusB.innerHTML = 'Shuttle in Flight';
            shuttleBckgrnd.style.background = 'blue';
            spaceShuttlehght.innerHTML = initialHeight + 10000;

        }

    landingButton.addEventListener("click", ()=>{
        window.alert("The shuttle is landing.Landing gear engaged.")
        flightStatusB.innerHTML = "The Shuttle has landed"
        shuttleBckgrnd.style.background = 'green'
        spaceShuttlehght.innerHTML = initialHeight
       

    })
    });

});

