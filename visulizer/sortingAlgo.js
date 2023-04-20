
async function selectionSort(){
    for(let i=0; i<n; i++)
    {
        let min=i
        arr[min].style.backgroundColor="rgb(203, 33, 61)" //selcector1
        for(let j=i+1; j<n; j++)
        {
            arr[j].style.backgroundColor="rgb(88, 63, 198)" //selector2
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, speed)
            );

            let a=parseInt(arr[min].innerText)
            let b=parseInt(arr[j].innerText)
            if( a>=b )
                {
                    arr[min].style.backgroundColor="grey" //unorsted colour
                    arr[j].style.backgroundColor="rgb(203, 33, 61)" //seclector1
                    min=j
                }
                else
                arr[j].style.backgroundColor="grey" //unorsted colour
        }
        arr[min].style.backgroundColor="rgb(50, 190, 118)" //sorted colour
        arr[min].style.order=-(n-i);
        
        let temp=arr[min]
        arr[min]=arr[i]
        arr[i]=temp
    }
}

async function bubbleSort(){
    for(let i=0; i<n-1; i++)
    {
        for(let j=0; j<n-i-1; j++)
        {
            arr[j].style.backgroundColor="rgb(203, 33, 61)" //selector1
            arr[j+1].style.backgroundColor="rgb(88, 63, 198)"  //selector2
            
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
            );
            
            let a=parseInt(arr[j].innerText)
            let b=parseInt(arr[j+1].innerText)
            if(a>b)
            {
                arr[j].style.height=`${b}px`
                arr[j].innerText=`${b}`;
                
                arr[j+1].style.height=`${a}px`
                arr[j+1].innerText=`${a}`;
                
                // let temp=arr[j]
                // arr[j]=arr[j+1]
                // arr[j+1]=temp
            }
            
            arr[j].style.backgroundColor="grey"  //unorsted colour
            arr[j+1].style.backgroundColor="grey"  //unorsted colour
        }
        arr[n-i-1].style.backgroundColor="rgb(50, 190, 118)" //sorted colour
    }
    arr[0].style.backgroundColor="rgb(50, 190, 118)"  //sorted colour
}

// async function insertionSort(){
//     for(let i=1; i<n; i++)
//     {
//         await new Promise((resolve) =>
//             setTimeout(() => {
//                 resolve();
//             }, speed)
//             );
            
//         let key=arr[i]
//         let j=i-1
//         let a=parseInt(arr[i].innerText)
//         let b=parseInt(arr[j].innerText)
//         key.style.backgroundColor="rgb(203, 33, 61)" //selector1
        
//         while(j>=0 && b>a)
//         {
//             arr[j].style.backgroundColor="rgb(88, 63, 198)" //selector2
//             arr[j+1].style.height=`${b}px`
//             arr[j+1].innerText=`${b}`
//             arr[j].style.backgroundColor="grey" //unsorted colour
            
//             j=j-1
            
//             if(j>=0)
//             b=parseInt(arr[j].innerText)

//         }
        
//         arr[j+1].style.height=`${a}px`
//         arr[j+1].innerText=`${a}`

//         arr[j+1].style.backgroundColor="rgb(50, 190, 118)" //sorted colour
//     }
// }