

// TODO
//check correct answer
//better font
//reload at end of quiz and change button text
// display corrext score


var list_a = document.getElementById("list_a");
var list_b = document.getElementById("list_b");
var list_c = document.getElementById("list_c");
var list_d = document.getElementById("list_d");
var questionText = document.getElementById("question");
var count = 0;
var listHTML =  document.getElementById("quiz-list").innerHTML;
var card = document.getElementById("quiz-list");
var totalScore = 0;

var questions = [ 
    {
        q_text: "what color are stop signs",
        a_text: "red",
        b_text: "green",
        c_text: "yellow",
        d_text: "pink",
        answer: "a",
    },
    {
        q_text: "what is not a fruit",
        a_text: "apple",
        b_text: "oragne",
        c_text: "strawberry",
        d_text: "lettuce",
        answer: "d",
    },
    {
        q_text: "who is an economist",
        a_text: "john keynes",
        b_text: "barak obamna",
        c_text: "cardi b",
        d_text: "elon musk",
        answer: "a",
    },
    {
        q_text: "what cannot fly",
        a_text: "a plane",
        b_text: "a bird",
        c_text: "a go kart",
        d_text: "a spaceship",
        answer: "c",
    },
    {
        q_text: "what should you do after viewing this website",
        a_text: "offer me gainful employment",
        b_text: "commit a crime",
        c_text: "gamble away your life savings",
        d_text: "crash your car",
        answer: "a",
    },
];


function loadQuiz() {
    questionText.innerHTML = questions[count].q_text;
    list_a.innerText = questions[count].a_text;
    list_b.innerText = questions[count].b_text;
    list_c.innerText = questions[count].c_text;
    list_d.innerText = questions[count].d_text;
    var radioButtons = document.getElementsByName("answer");
    var checkedButton = NaN;
    var selected = false;
    for(let i = 0; i < radioButtons.length; i++){
        radioButtons[i].checked = false;
    }

}


function checkAnswer(){
    var radioButtons = document.getElementsByName("answer");
    var checkedButton = NaN;
    var selected = false;
    for(let i = 0; i < radioButtons.length; i++){
        if (radioButtons[i].checked){
            checkedButton = radioButtons[i].id;
            selected = true;
        }
    }

    if (selected){
        if (checkedButton === questions[count].answer){
            totalScore++;
        }       
    }


    if (selected){
        count++;  
    }


    //console.log(questions[count].answer);


}


var submited = false;
function submitQuestion(){
    checkAnswer();

    if (count >= questions.length) {
        submited = true;
        count = 0;
        questionText.innerHTML = " ";
        card.innerHTML = `<h2>${totalScore}/${questions.length}</h2>`;
        var button = document.getElementById("sub-button");
        button.innerText = "restart quiz";
    }else if (submited){
        location.reload()
    }else{

        loadQuiz();
    }

}



loadQuiz();