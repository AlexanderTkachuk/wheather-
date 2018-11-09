//init storage
const stor = new storage();

//get stored location data
const weatheStorage = stor.getLocationData();

//init weather object
const weather = new Weather(weatheStorage.city, weatheStorage.state);

//init ui obj
const ui = new UI();



const button = document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    

    //change location
    weather.changeLocation(city, state);

    //set loc in localstorage
    stor.setLocationData(city, state);
    
    //get and display weather 
    getWeather();

    //close modal;
    $('#locModal').modal('hide');
}); 

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })

        .catch(err => console.log(err));
}
