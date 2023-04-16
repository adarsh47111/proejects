
const mainCont=document.querySelector(".main-container")
const addBtn=document.querySelector(".add-note-box")
const clearBtn=document.querySelector(".clear-note-box")
const pinBtn=document.querySelector(".pin-icon")
const deleteBtn=document.querySelector(".delete-icon")
const copyBtn=document.querySelector(".copy-icon")
const bg=document.querySelector(".bg")

let pinArray=[]
let order=0

console.log(copyBtn)

function createNoteBox(){
    let template=`<div class="noteBox">
        <div class="noteBox-header">
            <input class="noteBox-title" type="text" placeholder="Title" spellcheck="false">
            <div class="noteBox-iconbox">
                <i class="fa-solid fa-thumbtack fa-xl pin-icon" title="Pin" onclick="pinBox(this)"></i>
                
                <i class="fa-solid fa-copy fa-xl copy-icon" title="Copy"  onclick="copy(this)"></i>
                <i class="fa-regular fa-trash-can fa-xl delete-icon" title="Delete" onclick="deleteBox(this)"></i>
                <i class="fa-solid fa-expand fa-xl expand-icon" title="Expand" onclick="expand(this)"></i>
            </div>
        </div>
        <textarea class="noteBox-textbox" name="" id="" cols="30" rows="15" spellcheck="false"></textarea>
    </div>`
    mainCont.insertAdjacentHTML("beforeend",template)
}

function pinBox(ele){
    let e=ele.parentElement.parentElement.parentElement;
    let idx, flag=0;

    //if ele is pinned
    for(let i=0; i<pinArray.length; i++)
    {

        if(flag==0 && pinArray[i]===e)
        {
            pinArray[i].style.order=0;
            idx=i;
            order++;
            flag=1;
        }
        else if(flag==1)
        {
            pinArray[i].style.order++;
        }
    }

    if(flag==1)
    {
        ele.style.bottom="0px"
        pinArray.splice(idx,1)
    }
    else //if ele is not pinned
    {
        ele.style.bottom="10px"
        order--;
        e.style.order=order;
        pinArray.push(e)
    }
}


function copy(ele){
    let e=ele.parentElement.parentElement.nextElementSibling;
    navigator.clipboard.writeText(e.value)
}

function deleteBox(ele)
{
    let e=ele.parentElement.parentElement.parentElement;
    mainCont.removeChild(e);
    if(mainCont.children.length==0)
    createNoteBox()
    // console.log(mainCont.children.length)
}

function expand(ele){
    let e=ele.parentElement.parentElement.parentElement;
    let e1=ele.parentElement.parentElement.nextElementSibling;
    if(e.classList.contains("expand-note-box"))
    {
        e.classList.add("noteBox")
        e1.classList.add("noteBox-textbox")
        e.classList.remove("expand-note-box")
        e1.classList.remove("expand-textbox")
        bg.style.zIndex=-1;
    }
    else
    {
        e.classList.add("expand-note-box")
        e1.classList.add("expand-textbox")
        e.classList.remove("noteBox")
        e1.classList.remove("noteBox-textbox")
        bg.style.zIndex=1;
    }
    console.log(e.classList)
}

addBtn.addEventListener("click", ()=>{
    createNoteBox()
})

clearBtn.addEventListener("click", ()=>{
    mainCont.innerHTML=""
    createNoteBox()
}) 

createNoteBox()
