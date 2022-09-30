let a = 5;
let b = a;
let myArray = ['ali','veli', 3, {'name': 'ismail'}, 'veli 1']

function tekilYazdir() {
  const ekArray = myArray.map(function(item,index) {
        return item + 'ek'
  });
  
  console.log(ekArray);
}

function filtrele() {
  const filtredArray = myArray.filter(function(item){
    return item == 'veli'
  });
  console.log(filtredArray)
}

tekilYazdir()
filtrele()

const tekilYazidirArrow = () => {
  myArray.map( (item,index) => {console.log(item);} );
}

// Arrow Function
const filtreleArrow = () => {
  const filtrelenmis = myArray.filter((item) => item == 'veli' )
  console.log(filtrelenmis)
}

tekilYazidirArrow();
filtreleArrow();


