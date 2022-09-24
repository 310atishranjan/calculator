let screenShow=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenvalue=" ";  
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        if(buttonText == "C")
        {  
            screenvalue=" ";
            screenShow.value=screenvalue;
        }
        else if(buttonText=='=')
        {
            screenShow.value=eval(screenvalue);
        } 
        else
        {
            screenvalue += buttonText;
            screenShow.value=screenvalue;
        }
    })
}