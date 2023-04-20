
let mainCont=document.querySelector(".main-container")
let sliderArraySize=document.querySelector("#slider-array-size")
let sliderSpeed=document.querySelector("#slider-speed")
let startBtn=document.querySelector(".start")
let arr=[];
let n=30;
let speed=500

function  generateArray(){
    mainCont.innerHTML=""
    arr=[]
    let width=80/n
    for(let i=0; i<n; i++)
    {
        let temp=document.createElement("div")
        let num=Math.floor(Math.random()*500+1)
        temp.classList.add("numBar")
        temp.style.height=`${num}px`
        temp.style.width=`${width}vw`
        temp.style.backgroundColor="grey"
        temp.style.order=0
        temp.innerText=`${num}`

        arr.push(temp)
        mainCont.append(temp)
    }
}
generateArray();

sliderArraySize.addEventListener("input", ()=>{
    let sliderVal=document.querySelector(".slider-array-size-val")
    n=sliderArraySize.value
    sliderVal.innerText=sliderArraySize.value
    generateArray()
})
sliderSpeed.addEventListener("input", ()=>{
    let sliderVal=document.querySelector(".slider-speed-val")
    speed=Math.abs(sliderSpeed.value)
    sliderVal.innerText=Math.abs(sliderSpeed.value)
})

startBtn.addEventListener("click", ()=>{
    let val=document.querySelector("#dropdown").value

    if(val==="sSort")
    selectionSort()

    if(val==="iSort")
    insertionSort()

    if(val==="bSort")
    bubbleSort()
})
