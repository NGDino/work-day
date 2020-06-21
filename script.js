var today = moment().format('MMMM Do, YYYY')
var currentDayEl = $('#currentDay')
var inputEl = $('input')
currentDayEl.text(today)

var currentHour = moment().format('HH');

console.log(currentHour);


// on click save the input elements to local storage using JSON 

// 
$('.btn').click(function(){
    console.log('button works');
    console.log(inputEl.val());
})

var rowsArray = document.getElementsByClassName('row');
for(let i = 0; i<rowsArray.length; i++) {
   
    var rowEl = rowsArray[i]
    let hour = rowEl.getAttribute("id");
    hour = hour.split("r");
    hour = hour[hour.length - 1]
    let colorChange = $(rowEl).find(".colorchange")

    console.log(rowEl)
    console.log(hour)

    if(hour < currentHour) {
        colorChange.addClass("bg-danger");
    }
    else if(hour === currentHour){
        colorChange.addClass('bg-info');
    }
    else{
        colorChange.addClass('bg-success');
    }
    
}




