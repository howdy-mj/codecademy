const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  
  get appitizers() {
    return this._courses.appitizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  
  set appitizers(app) {
    this._courses.appitizers = appitizers;
  },
  set mains(main) {
    this._courses.mains = mains;
  },
  set desserts(dess) {
    this._courses.desserts = desserts;
  },
  
  get courses() {
    return {
      appitizers: this.appietizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const random = Math.floor(Math.random() * dishes.length);
    return dishes[random];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the total price is ${totalPrice}.`
  }
}

menu.addDishToCourse('appetizers', 'Salad', 3);
menu.addDishToCourse('appetizers', 'Bread', 4);
menu.addDishToCourse('mains', 'Pizza', 7);
menu.addDishToCourse('mains', 'Pasta', 8);
menu.addDishToCourse('desserts', 'Ice Cream', 2);
menu.addDishToCourse('desserts', 'Coffee', 3);

console.log(menu.generateRandomMeal());