var today = moment().format('MMMM Do, YYYY')
var currentDayEl = $('#currentDay')
var inputEl = $('input')
//var buttonEl = $('.btn')
//var hourToDO =
let workingArray = [];
currentDayEl.text(today)

var currentHour = moment().format('HH');

//console.log(currentHour);



var rowsArray = document.getElementsByClassName('row');
for(let i = 0; i<rowsArray.length; i++) {
   
    var rowEl = rowsArray[i]
    var hour = rowEl.getAttribute("id");
    hour = hour.split("r");
    hour = hour[hour.length - 1]
    let input = $(rowEl).find("input")

    //console.log(rowEl)
    

    if(hour < currentHour) {
        input.addClass("bg-danger");
    }
    else if(hour === currentHour){
        input.addClass('bg-info');
    }
    else{
        input.addClass('bg-success');
    }
   
}



$(document).on('click','button', function(e) {
    //console.log($(this));
    let val = $(this).siblings(".task").val()
    console.log(val);
    let parentId = $(this).parent().attr("id")
    console.log(parentId)
    workingArray.push(
        {
            "text": val, 
            "id": parentId
        }
    )
    console.log(workingArray)
    localStorage.setItem('schedule', JSON.stringify(workingArray))
})

let schedule = JSON.parse(localStorage.getItem('schedule'))
console.log(schedule);
for (let i = 0; i < schedule.length; i++) {
    let text = schedule[i].text; 
    let id = schedule[i].id; 
    console.log(text, id)
    let hourContainer = $(`#${id}`);
    hourContainer.find('input').val(text)
}
/*var buttons = $(":button");
var inputs = $(":input");
for(let i=0; i<inputs.length; i++){
   var inputsArr = inputs[i]
   var inputNumber = inputsArr.getAttribute("id");
   var taskToDo = inputs
   
   console.log(inputNumber)
   

}*/





