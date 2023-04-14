
let index=0;
let wright=0;

function createTemplate(){
    let ques_box=document.querySelector(".question-box")
    let option_box=document.querySelector(".option-box")

    option_box.innerHTML=""

    ques_box.innerHTML=`<p class="question">${questions[index].question}</p>`
    for(let i=0; i<4; i++)
    {
        let opt=`<p class="option" onclick="checkAnswer(this)">${questions[index].options[i]}</p>`
        option_box.insertAdjacentHTML("beforeend", opt)
    }

    document.querySelector(".first").innerText=index+1;
    document.querySelector(".last").innerText=questions.length;

    countDownHanler();
}

function countDownHanler(){
    let timerCount=30;
    let time=document.querySelector(".time")
    let statusTime=document.querySelector(".status-time")
    let option=document.querySelectorAll(".option");

    timer=setInterval(()=>{
        time.innerHTML=timerCount
        
        if(timerCount < 10)
        time.innerHTML= '0' + timerCount
        
        if(timerCount==0)
        {
            clearInterval(timer)
            statusTime.style.background="rgba(229, 21, 21, 0.8)"
            
            for(let i=0; i<4; i++)
            {
                option[i].classList.add("pointer-events-disable");
                if(option[i].innerHTML==questions[index].answer)
                option[i].classList.add("wright-answer")
            }
        }

        timerCount--;
    },1000)
}

function checkAnswer(answer){
    if(answer.innerHTML==questions[index].answer)
    {
        answer.classList.add("wright-answer");
        wright++;
        const option=document.querySelectorAll(".option");
        for(let i=0; i<4; i++)
        {
            option[i].classList.add("pointer-events-disable");
            if(option[i].innerHTML==questions[index].answer)
            option[i].classList.add("wright-answer");
        }
    }
    else
    {
        answer.classList.add("wrong-answer");
        const option=document.querySelectorAll(".option");
        for(let i=0; i<4; i++)
        {
            option[i].classList.add("pointer-events-disable");
            if(option[i].innerHTML==questions[index].answer)
            option[i].classList.add("wright-answer");
        }
    }
}

function showResult()
{
    let container=document.querySelector(".container")
    let resBox=document.querySelector(".result-box")
    let message=document.querySelector(".message")
    let score=document.querySelector(".score")

    if(wright==8)
    message.innerHTML="Congratulations!!!"
    else if(wright>=4 && wright<8)
    message.innerHTML="Well Done."
    else
    message.innerHTML="Better Luck Next Time."

    score.innerHTML=wright;

    container.classList.add("hide")
    resBox.classList.remove("hide");
}

document.querySelector(".next-Question").addEventListener("click",()=>{
    index++
    clearInterval(timer)
    if(index==questions.length-1)
    {
        let submit=document.querySelector(".submit")
        let next=document.querySelector(".next-Question")

        submit.classList.remove("hide")
        next.classList.add("hide")
    }
    createTemplate()
})

document.querySelector(".submit").addEventListener("click", showResult)
document.querySelector(".restart").addEventListener("click", ()=>{
    location.reload()
})

createTemplate();
