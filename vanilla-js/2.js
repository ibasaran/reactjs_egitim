class Animal {
  
    constructor(tipi) {
      this.tipi = 'Animal'
    }
    
    tipiniYazdir() {
      console.log(this.tipi)
    }
  }
  
  class Kedi extends Animal {
    constructor(name) {
      super()
      this.name = 'Pamuk';
      this.tipi = 'Kedi';
    }
  }
  
  
  class Person extends Animal {
    
    constructor(name,surname) {
      super();
      this.name = 'İsmail';
      this.surname = 'BAŞARAN';
      this.tipi = 'İnsan';
    }
    
    call() {
      console.log(this.name)
    }
    
    getName = () => {console.log(this.name)}
    
  }
  
  
  const person = new Person()
  person.call()
  person.tipiniYazdir()
  
  
  const kedi = new Kedi();
  kedi.tipiniYazdir()
  console.log(kedi.name)