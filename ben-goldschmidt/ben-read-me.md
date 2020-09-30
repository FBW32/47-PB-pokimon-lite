// POKEMON CONSTRUCTOR
// create a constructor function to create a pokemon
// add the methods onto the .prototype property of the constructor function. 
// create all new pokemon
// function to create an attackSkill 

// NOTES:
// 1. Constructs pokemon
// 2. Pokemon has no skills when created
// 3. Create skills
// 4. Add skills
// 5. Check pokemon status
// 6. Attack/battle
// 7. getMagic


// FUNCTIONALITY

// –––––––––– INPUT ––––––––––

// class Pokemon{}

// const pikachu = new Pokemon("Pikachu!", 100, 90);

//    What?       Details          Example
// 1. name   ---> nickname     --> bengee
// 2. magic  ---> amount       --> (?)
// 3. health ---> amount       --> max 200(?)
// 4. skills ---> array/object --> max 4 skills 
//                             --> lightning, (currently undefined) 
//                                 etc

// class attackSkill{};

// let lightning = new AttackSkill("lightning", 40, 30);

// 1. name   ---> nickname     --> "lightning"
// 2. damage ---> amount       --> 40
// 3. magic  ---> amount       --> 30


// –––––––––– ALGORITHM/classes/function ––––––––––
//
// Total
// class    x2
// methods  x4

// Algorithm 1.
// newPokemon{}     --> CLASS
// arguments        --> (name, health, magic)


// Algorithm 2.
// AttackSkill()    --> CLASS to CREATE new attack
// arguments        --> (name, damage, magic)

// Algorithm 3.
// learnAttackSkill()--> METHOD to LEARN attack
// arguments        --> pokemonName.learnAttackSkill(attackSkill)

// Algorithm 4.
// showStatus()     --> METHOD to show status
// logs             --> (how much health, magic left)

// Algorithm 5.
// attack()         --> METHOD to attack
// arguments        --> (bulbasaur.skills[indexOf], pokemon to be attacked)
// logs             --> randomly selected attack
//                  --> damage dealt
//                  --> magic depleted
//                  --> return attack was successful
//                  --> return result of the attack = attackedPokemon.status() 
// 
// NOTES: 
// (e.g what if the pokemon doesn't have enough magic to launch the attack skill?)
// if (magicUse > magicAmount ) { return does not have enough magic}
// else { return attack was successful!}

// Algorithm 6.
// getMagic         --> METHOD to get/add magic to a pokemon
// arguments        --> (magicAdded) random amount given
// random number  Math.floor(Math.random()*15)




// –––––––––– OUTPUT ––––––––––

// CLASS 1.
// NEW Pokemon  
// const newPokemon = new newPokemon(name, health, ...skills);

// LEARN Skill
// pikachu.learnAttackSkill(lightning);

// SHOW status
// pikachu.showStatus();



// CLASS 2.
// ATTACK pokemon
// pikachu.attack(0, bulbasaur);



// CLASS 3. 
// CREATE Skill
// let lightning = new attackSkill("lightning", 40, 30);




// ––––––––
class newPokemon{
    constructor(name, health, magic, skills){
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = skills;
    }

    learnAttackSkill(){}

    showStatus(){}

    attack(){}

    getMagic(){}
}

class attackSkill{
    constructor(name, damage, magic){
        this.variable = name;
        this.variable = damage;
        this.variable = magic;
    }
}

const newPokemon = new newPokemon(name, health, ...skills);

pikachu.learnAttackSkill(lightning);
pikachu.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.getMagic();






// –––––––––– For example, the following sequence: ––––––––––
// 
//Each Pokemon should start with a certain amount of health and magic. For example, here Pikachu starts with 120 health and 80 magic 
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);
//Each skill should do a certain amount of damage, and consume a certain amount of magic from the Pokemon that used the skill.
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill ("poison seed", 20, 20);
pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
//The first argument to `attack` should be the index (or key) of the attack
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
// should log out the following to the console:
// pikachu launched skill 'lightning' successfully!
// bulbasaur got 40 damage
-------------------
// bulbasaur launched skill 'poison seed' successfully!
// pikachu got 20 damage
-------------------
// pikachu status
// health: 100
// magic: 50
-------------------
// bulbasaur status
// health: 55
// magic: 85
-------------------
// pikachu launched skill 'lightning' successfully!
// bulbasaur got 40 damage
-------------------
// not enough magic, cannot launch attack!
-------------------
// pikachu got 20 magic back
-------------------
// pikachu launched skill 'lightning' successfully!
// bulbasaur got 40 damage
-------------------
// bulbasaur is killed!
-------------------
// bulbasaur is already dead!
// That's just one example. You can call different series of attacks to get different results!




