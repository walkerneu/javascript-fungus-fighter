// EVENT --> STATE --> RENDER

//attack, changes variable, show variable change


// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

attackArray = [
    {
        name: "Arcane Scepter",
        attackpoints: 12,
        hitpoints: 14
    },
    {
        name: "Entangle",
        attackpoints: 23,
        hitpoints: 9
    },
    {
        name: "Dragon Blade",
        attackpoints: 38,
        hitpoints: 47
    },
    {
        name: "Star Fire",
        attackpoints: 33,
        hitpoints: 25
    }
]

let fungusHP = 100;
let attackPoints = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function attack(attack) {
    fungusHP -= attack.hitpoints;
    console.log(fungusHP);
    attackPoints -= attack.attackpoints;
    console.log(attackPoints);
    if (fungusHP <= 0){
        let fungus = document.getElementById("freaky-fungus")
        fungus.classList.remove("walk");
        fungus.classList.add("dead");
        fungusHP = 0
    }
    if (attackPoints <= 0){
        let fungus = document.getElementById("freaky-fungus")
        fungus.classList.remove("walk");
        fungus.classList.add("jump");
        attackPoints = 0
        // let disabledAttacks = document.getElementsByClassName("attacks")
        // button.setAttribute("disabled", true);
        document.getElementById("attack1").setAttribute("disabled", true);
        document.getElementById("attack2").setAttribute("disabled", true);
        document.getElementById("attack3").setAttribute("disabled", true);
        document.getElementById("attack4").setAttribute("disabled", true);
    }
    renderValues ()
    //render shit
}

function renderValues () {
    document.getElementById("attack").textContent = '';
    document.getElementById("enemyHP").textContent = '';
    document.getElementById("attack").textContent = `${attackPoints} AP`;
    document.getElementById("enemyHP").textContent = `${fungusHP} HP`;

}


onReady()