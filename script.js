
let guessBtn = document.getElementById("adivinha");
let input = document.getElementById("guess");

function getRandom(n) {
    return Math.round(Math.random()*n);
}

window.onload = ()=>{
    num=getRandom(100);
}

var numberOfGuess=0;
guessBtn.addEventListener('click',()=>{
    numberOfGuess++;
    console.log(numberOfGuess);
    let guess = input.value;
    if(guess==num){
        alert("Acertou! O número escondido era " + guess + "\nVocê acertou após " + numberOfGuess + " tentativas");
        if(confirm("Quer jogar novamente")){
            numberOfGuess=0;
            num=getRandom(100);
            input.value='';
        }else{
            document.getElementsByTagName("h1")[0].innerHTML="Até logo! Obrigado por jogar!";
            input.remove();
            guessBtn.remove();
        }
    }else if(guess>num){
        alert("O número escondido é menor!");
        input.value='';
    }else{
        alert("O número escondido é maior!");
        input.value='';
    }
})
