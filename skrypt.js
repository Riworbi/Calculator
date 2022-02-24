function enterKeyPressed(event) 
{
    if (event.keyCode == 13) 
    {
        let x = document.getElementById('nice').value;
        let result = eval(x)
        document.getElementById("nice").value = result;
    }
    else if(event.keyCode == 32){
        document.getElementById("nice").value = " ";
    }
}

function Valid(){
    if(document.getElementById("nice").value=='undefined'){
        document.getElementById("nice").value= "Insert numbers";
    }
}
