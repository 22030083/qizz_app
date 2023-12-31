const questions=[
        {
                question:"which is the largest animal in the whole world?",
                answers:[
                        {text:"Shark",correct:false},
                        {text:"Blue whale",correct:true},
                        {text:"Elephant",correct:false},
                        {text:"Giraffe",correct:false},
                ]
        },
        {
                question:"what is the smallest country in the whole world?",
                answers:[
                        {text:"Vatican City",correct:true},
                        {text:"Bhutan",correct:false},
                        {text:"Nepal",correct:false},
                        {text:"Shrilanka",correct:false},
                ]

        },
        {
                question:"which is the largest desert in the whole world?",
                answers:[
                        {text:"Kalhari",correct:false},
                        {text:"Gobi",correct:false},
                        {text:"Sahara",correct:false},
                        {text:"Antartica",correct:true},
                ]
        },
        {
                question:"which is the smallest continent in the whole world?",
                answers:[
                        {text:"Asia",correct:false},
                        {text:"Australia",correct:true},
                        {text:"Arctic",correct:false},
                        {text:"Africa",correct:false},
                ]
        }
      
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;

function startQuiz(){
         currentQuestionIndex=0;
         score=0;
         nextButton.innerHTML="Next";
         ShowQuestion();

}
function ShowQuestion(){
       resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo=currentQuestionIndex+1;
        questionElement.innerHTML=questionNo+". "+currentQuestion.question;

        currentQuestion.answers.forEach(answer=>{
                const button=document.createElement("button");
                button.innerHTML=answer.text;
                button.classList.add('btn');
                answerButtons.appendChild(button);
                if(answer.correct){
                        button.dataset.correct=answer.correct;
                }
                button.addEventListener("click",selectAnswer)
        });
}
function resetState(){
        nextButton.style.display="none";
        while(answerButtons.firstChild){
                answerButtons.removeChild(answerButtons.firstChild);
        }
}
function selectAnswer(e){
        const selectedBtn=e.target;
        const isCorrect=selectedBtn.dataset.correct==="true";
        if(isCorrect){
                selectedBtn.classList.add("correct");
        }else{
                selectedBtn.classList.add("incorrect");
        }
 }
startQuiz();
