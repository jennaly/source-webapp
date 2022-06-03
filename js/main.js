//Create a constructor with 4 properties and 3 methods
function Cat (name, age, breed, behavior) {
    this.name = name,
    this.age = age,
    this.breed = breed,
    this.behavior = behavior,
    this.purr = function() {
        return `prrr`
    },
    this.alertName = function() {
        return `the cat\'s name is ${this.name}`
    },
    this.alertBreed = function() {
        return `it\'s a ${this.breed}`
    }
}

let Mojo = new Cat = ('Mojo', '2', 'siameese', 'friendly')