
let input = document.getElementById ("quantity");
let value = document.getElementById("quantity").value;
value =16;
let grid = document.querySelector(".grid");
let box = value*value;
let btn = document.querySelector(".reset");

for(i=0;i<256;i++){

    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
}

input.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        value = document.getElementById("quantity").value;
        box = value*value;
        grid.innerHTML = '';
        if (value > 101) {

            alert("Enter number lower than 100");
            
        }
        if (value <= 100){
            for(i=0;i<box;i++){

                const div = document.createElement("div");
                /*div.setAttribute('style', "background:white; border: 1px solid black;");*/
                div.classList.add("square");
                grid.appendChild(div);
            }
        }
        grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    }


});

btn.addEventListener("click", () => {

    grid.innerHTML = '';
    
    for(i=0;i<256;i++){

        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
    grid.style.gridTemplateColumns = "repeat(16, 1fr)";
    grid.style.gridTemplateRows = "repeat(16, 1fr)";

});


const square = document.querySelector(".square");

grid.addEventListener('mouseover', function(event) {

    event.target.classList.replace("square", "color");
});

