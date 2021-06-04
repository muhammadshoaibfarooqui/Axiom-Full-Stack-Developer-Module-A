//Get DOM Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value; //add+ to convert string into number

populateUI();
console.log(ticketPrice);

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map (seat => [...seats].indexOf(seat));
    const selectedSeatsCount = selectedSeats.length;
    console.log(seatsIndex);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
}

//Save the movie data to local storage
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}

//Get Data from local storage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    //console.log(selectedSeats);
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat,index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        })
    };
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    //console.log(selectedMovieIndex);
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

//Event Listeners
//1. Event Listener for container to check for click on seats
container.addEventListener('click', e => {
if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    //e.target.classList.add();
    e.target.classList.toggle('selected');
    updateSelectedCount();
}
})

//2. Event Listener for movie select
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;//add+ to convert string into number
    console.log(ticketPrice);
    updateSelectedCount();
    setMovieData(e.target.selectedIndex,e.target.value);
    //console.log(e.target.selectedIndex,e.target.value);
})

//Intial count and total price
updateSelectedCount();
