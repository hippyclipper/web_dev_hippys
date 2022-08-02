var list_a = document.getElementById("list_a");
var list_b = document.getElementById("list_b");
var list_c = document.getElementById("list_c");
var list_d = document.getElementById("list_d");
var questionText = document.getElementById("question");
var count = 0;


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

}

function submitQuestion(){
    count++;
    if (count >= questions.length) {
        count = 0;
    }
    loadQuiz();
}



loadQuiz();