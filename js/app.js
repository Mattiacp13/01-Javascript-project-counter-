 
 //setting for disabled of minus button
 //default number 1
 document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

 //taking value to increment - decrement input value

 var valueCount

 //plus button

 document.querySelector(".plus-btn").addEventListener("click", function() {

     //getting value of input

     valueCount = document.getElementById("counter").value;

     //value increment by 1

     valueCount++;

     //setting increment input value

     document.getElementById("counter").value = valueCount;

     if (valueCount > 0) {
         document.querySelector(".minus-btn").removeAttribute("disabled");
         document.querySelector(".minus-btn").classList.remove("disabled")
     }
    
 })

 //minus button

 document.querySelector(".minus-btn").addEventListener("click", function() {

     //getting value of input

     valueCount = document.getElementById("counter").value;

     //value decrement by 1

     valueCount--;

     //setting increment input value

     document.getElementById("counter").value = valueCount

     if (valueCount == 0) {
         document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
     }
 
 })