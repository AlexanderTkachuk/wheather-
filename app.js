//init weather object
const weather = new Weather('Boston','MA');

//init ui obj
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation('Ukraine', 'Keiv');

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })

        .catch(err => console.log(err));
}
