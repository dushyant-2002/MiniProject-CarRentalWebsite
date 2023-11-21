const location_dropdown = document.querySelectorAll(".dropdown-item");
const location_input = document.querySelector("#locationinp");
console.log(location_dropdown);
location_dropdown.forEach((a)=>{
    a.addEventListener('click',(e)=>{
        console.log(e.target.innerText);
        location_input.value = e.target.innerText;

    })
})


