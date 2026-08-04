let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main= document.querySelector("#main");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profilepic = document.createElement("div");
    profilepic.classList.add("profilepic");

    let img = document.createElement("img");
    img.setAttribute("src",inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;

    let p = document.createElement("h5");
    p.textContent = inputs[3].value;

    profilepic.appendChild(img);
    card.appendChild(profilepic)

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);
    
    inputs.forEach(function(inp){
        if(inp.type!=="submit"){
            inp.value=""
        }
    });

});