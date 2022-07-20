const firstname = "Conrad";
const firstlastname = "Soler";
const secondlastname = "Ferrer";

//Nivel 1 - Ejercicio 1
yourName(firstname);

function yourName(firstname){
    console.log("Your name is " + firstname);
}

//Nivel 2 - Ejercicio 1
console.log(`Your full name is ${firstname} ${firstlastname} ${secondlastname}`);


//Nivel 2 - Ejercicio 2 
function suma(num1, num2) {
    return (`The sum of the numbers ${num1} & ${num2} is: ${num1+num2}`);
}  
console.log(suma(1,2));

//Nivel 3 - Ejercicio 1
const countTenTimesTenNumbers = [];
let count = 0;
while (count < 10) {
    countTenTimesTenNumbers.push(tenNumbersList());
    count++; 
}
console.log(countTenTimesTenNumbers);

function tenNumbersList(){
    let tenNumbersList = [];
    let count = 0;

    while (count < 10) {
        tenNumbersList += String(count); 
        count++;  
        //count 0, 01, 012, 0123...
        //console.log(tenNumbersList);
    }
    //0123456789 x 10
    console.log(tenNumbersList);
    return tenNumbersList;
}

//Nivel 3 - Ejercicio 2
const userName = userName => userName;
console.log(userName(firstname));