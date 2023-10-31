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
let yourHP = 100;

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
        document.getElementById("attack1").setAttribute("disabled", true);
        document.getElementById("attack2").setAttribute("disabled", true);
        document.getElementById("attack3").setAttribute("disabled", true);
        document.getElementById("attack4").setAttribute("disabled", true);
    }
    renderValues ()
    //render shit
}
function fungusRegenerate () {
    if (fungusHP < 50 && fungusHP > 0) {
        fungusHP ++
    }
    renderValues ();
}

function fungusAttack () {
    if (fungusHP > 0){
        yourHP -= 30
        if (yourHP <= 0){
            let fungus = document.getElementById("freaky-fungus")
            fungus.classList.remove("walk", "attack");
            fungus.classList.add("jump");
            yourHP = 0
            document.getElementById("attack1").setAttribute("disabled", true);
            document.getElementById("attack2").setAttribute("disabled", true);
            document.getElementById("attack3").setAttribute("disabled", true);
            document.getElementById("attack4").setAttribute("disabled", true);
            let attackInterval = setInterval(fungusAttack, 6000);
            let animationInterval = setInterval(fungusAnimation, 3000);
            clearInterval(attackInterval);
            clearInterval(animationInterval);
        }
    renderValues();
    }
}

function fungusAnimation () {
    let fungus = document.getElementById("freaky-fungus")
    fungus.classList.toggle("walk");
    fungus.classList.toggle("attack");
}


function renderValues () {
    document.getElementById("attack").textContent = '';
    document.getElementById("enemyHP").textContent = '';
    document.getElementById("attack").textContent = `Attack Points: ${attackPoints}`;
    document.getElementById("enemyHP").textContent = `Freaky Fungus: ${fungusHP}`;
    document.getElementById("ap-meter").value = attackPoints;
    document.getElementById("enemyhp-meter").value = fungusHP;
    document.getElementById("yourHP").textContent = '';
    document.getElementById("yourHP").textContent = `Your HP: ${yourHP}`;
    document.getElementById("hp-meter").value = yourHP;

}

setInterval(fungusRegenerate, 1000);
setInterval(fungusAttack, 6000);
setInterval(fungusAnimation, 3000);

onReady()