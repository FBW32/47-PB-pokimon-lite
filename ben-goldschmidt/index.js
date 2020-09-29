// POKEMON CONSTRUCTOR
// create a constructor function to create a pokemon
// add the methods onto the .prototype property of the constructor function. 
// create all new pokemon.
// function to create an attackSkill 

// NOTES:
// 1. Constructs pokemon
// 2. Pokemon has no skills when created
// 3. Create skills
// 4. Add skills
// 5. Check pokemon status
// 6. Attack battle


// FUNCTIONALITY

// –––––––––– INPUT ––––––––––
//    What?       Details          Example
// 1. name   ---> nickname     --> bengee
// 2. magic  ---> amount       --> (?)
// 3. health ---> amount       --> max 200(?)
// 4. skills ---> array/object --> max 4 skills 
//                             --> lightning, 
//                                 etc



// –––––––––– ALGORITHM/classes/function ––––––––––

// Total
// class    x1
// methods  x

// Algorithm 1.
// newPokemon{}     --> CLASS
// arguments        --> (name, health, magic)

// Algorithm 2.
// attackSkill()    --> METHOD to CREATE new attack
// arguments        -->(name, damage, magic)

// Algorithm 3.
// learnAttackSkill()--> METHOD to LEARN attack
// arguments        --> .learnAttackSkill(attackSkill)

// Algorithm 4.
// showStatus()     --> METHOD to show status
// logs             --> (how much health, magic left)

// Algorithm 5.
// attack()         --> METHOD to attack
// arguments        --> (index/key of the attack, pokemon attacked)
// logs             --> randomly selected attack
//                  --> damage dealt
//                  --> magic depleted
//                  --> return attack was successful
//                  --> return result of the attack = attackedPokemon.status 
// 
// NOTES: 
// (e.g what if the pokemon doesn't have enough magic to launch the attack skill?)
// if (magicUse > magicAmount ) { return does not have enough magic}
// else { return attack attack was successful!}


// Algorithm 6.
// getMagic         --> METHOD to get/add magic to a pokemon
// arguments        --> (magicAdded)
// 




// –––––––––– OUTPUT ––––––––––
// NEW Pokemon  
// const newPokemon = new newPokemon(name, health, ...skills);

// CREATE Skill
// let lightning = new AttackSkill("lightning", 40, 30);

// LEARN Skill
// pikachu.learnAttackSkill(lightning);

// SHOW status
// pikachu.showStatus();

// ATTACK pokemon
// pikachu.attack(0, bulbasaur);





class Pokemon {
    // const pikachu = new Pokemon("Pikachu!", 100, 90);
    constructor(name, health, magic) {
        // constructor for ALL variables
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }

    // pikachu.learnAttackSkill(lightning);
    learnAttackSkill(...attackSkilllearned) {
        // METHOD to LEARN attack

        this.skills.push(...attackSkilllearned);
        return this.skills;
    }

    // console.log(pikachu.attackSkilllearned());
    showStatus() {
        // METHOD to show status

        // Has health points
        if (this.health > 0) {
            return `${this.name} currently has ${this.health} health and ${this.magic} magic.`
        }

        // No health points
        else {
            return `${this.name} has fainted!`
        }

    }

    // console.log(pikachu.attack(0, bulbasaur));
    attack(attackIndex, pokemonAttacked) {
        // METHOD to attack pokemon

        // Enough magic?
        if (this.magic < 0) {
            return `${this.name} has no magic!`
        }

        if (this.magic < this.skills[attackIndex].magic) {
            return `${this.name} does not have enough magic for this move!`
        }

        // Damage dealt
        pokemonAttacked.health = pokemonAttacked.health - this.skills[attackIndex].damage;

        // Magic depleted
        this.magic = this.magic - this.skills[attackIndex].magic;

        // Health regeneration
        if (this.skills[attackIndex].heal !== undefined) {
            this.health = this.health + this.skills[attackIndex].heal;
        }

        return `${this.name}'s ${this.skills[attackIndex].name} was successful!`;
    }

    // console.log(pikachu.getMagic());
    getMagic() {
        // METHOD to get/add magic to a pokemon
        let randomMagic = Math.floor(Math.random() * 15);
        this.magic = this.magic + randomMagic;
        return this.showStatus();
    }
}

// WITHOUT PARENT/CHILD

class AttackSkill {
    //let lightning = new AttackSkill("lightning", 40, 30);
    constructor(name, damage, magic, heal) {
        this.name = name;
        this.damage = damage;
        this.magic = magic;

        // // Added
        if (heal === undefined) {
            return 0;
        }
        this.heal = heal;
    }
}


// TRY INHERENT SKILL ---> parent/child
// class Pikachu extends Pokemon {
//     constructor([details]) {
//         super("Pikachu", 100, 90);
//         this.skills = details;
//     }
// }


// –––––––––– NEW Pokemon ––––––––––  
console.log()
const pikachu = new Pokemon("Pikachu!", 100, 90);
console.log(pikachu)

console.log()
const bulbasaur = new Pokemon("bulbasaur", 95, 105);
console.log(bulbasaur)


// –––––––––– CREATE skill ––––––––––  
let lightning = new AttackSkill("lightning", 40, 30);
console.log()
console.log(lightning)

let tackle = new AttackSkill("tackle", 30, 20);
console.log()
console.log(tackle)

let poisonSeed = new AttackSkill("poison seed", 20, 20);
console.log()
console.log(poisonSeed)

let absorb = new AttackSkill("absorb", 20, 20, 10);
console.log()
console.log(absorb)


// –––––––––– LEARN skill ––––––––––  
console.log()
console.log(pikachu.learnAttackSkill(lightning));
console.log(pikachu)

console.log()
console.log(pikachu.learnAttackSkill(tackle));
console.log(pikachu)

bulbasaur.learnAttackSkill(poisonSeed);
console.log(bulbasaur)

bulbasaur.learnAttackSkill(absorb);
console.log(bulbasaur)


// –––––––––– SHOW status ––––––––––  
console.log()
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());


// –––––––––– ATTACK pokemon ––––––––––  
console.log()
console.log(pikachu.attack(0, bulbasaur));
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());

console.log()
console.log(bulbasaur.attack(0, pikachu));
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());

console.log()
console.log(pikachu.attack(0, bulbasaur));
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());

console.log()
console.log(bulbasaur.attack(1, pikachu));
console.log(pikachu.showStatus());
console.log(bulbasaur.showStatus());



// –––––––––– GET magic ––––––––––  
console.log()
console.log(pikachu.getMagic());
console.log(bulbasaur.getMagic());

console.log()
console.log(`${bulbasaur.name} has these attacks `, bulbasaur.skills);

console.log()
console.log(`${pikachu.name} has these attacks `, pikachu.skills);
