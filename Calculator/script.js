let s="";
let btn=document.querySelectorAll('.btn');
Array.from(btn).forEach((ele)=>{
    ele.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '=')
        {
            s=eval(s);
            document.querySelector('input').value=s;
        }
        else if(e.target.innerHTML == 'CE')
        {
            s="";
            document.querySelector('input').value=s;
        }
        else
        {
            console.log(e.target);
            s=s+e.target.innerHTML;
            document.querySelector('input').value=s;
        }
    })
})