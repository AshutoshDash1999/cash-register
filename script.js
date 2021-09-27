var billInput = document.querySelector("#billInput");
var cashInput = document.querySelector("#cashInput");
var amountReturnBtn = document.querySelector("#amountReturnBtn");
var output = document.querySelector("#output");
var noOfNotes = document.querySelectorAll(".no-of-notes")

var notes = [2000, 500, 100, 20, 10, 5, 1]
var notesToReturn = 0;

function validate(){
    if (parseInt(billInput.value) > 0){
        if ( parseInt(cashInput.value) > parseInt(billInput.value)){
            var amountToReturn = parseInt(cashInput.value) - parseInt(billInput.value);
            console.log(`Amount to return is ${amountToReturn}`)

            for(var index = 0; index < notes.length; index++){
                var numberOfNote = amountToReturn/notes[index];
                numberOfNote = Math.floor(numberOfNote)
                if(numberOfNote > 0){
                    console.log("No. of", notes[index], "note, is", numberOfNote)
                    noOfNotes[index].innerText = numberOfNote;
                }
                amountToReturn = amountToReturn - (notes[index]*numberOfNote)
            }
            
            
        } else {
            output.innerText = "Cash should be greater than bill";
        }
    } else {
        output.innerText  = "Bill amount should be greater than 0";
    }
}

amountReturnBtn.addEventListener("click", validate)