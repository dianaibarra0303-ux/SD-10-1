export class FriendNames {
    constructor(name1, name2, name3) {
      this.name1 = name1;
      this.name2 = name2;
      this.name3 = name3
  
    }

    agregarNombres(){
      return `Nosostros somos amigos de Ed; ${this.name1}, ${this.name2} y ${this.name3}`;
    }
  
      
 }

const amigos = new FriendNames("Diana", "Juan", "Angel");
console.log(amigos.agregarNombres());

    

