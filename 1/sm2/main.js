let name = prompt('Как тебя зовут?')
    alert(`Тебя зовут ${name}`);



let age = prompt('Сколько тебе лет?', 100);
    if (age < 20) {
        alert( "Тебе меньше 20!" );
        }
    if (age >= 20) {
        for (let i = 0; i < 5; i++){
            alert("Привет!")
        }
    }

let kek = confirm("Хочешь учить js?");
    if (kek){
        alert ("Супер!")
    }
    else{
        alert("плохо")
    }
    