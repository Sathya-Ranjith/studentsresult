function getResult(){
    var m1textbox=document.getElementById("m1");
    var m2textbox=document.getElementById("m2");
    var m3textbox=document.getElementById("m3");
    var m4textbox=document.getElementById("m4");
    var m5textbox=document.getElementById("m5");

    var m1=parseInt(m1textbox.value);
    var m2=parseInt(m2textbox.value);
    var m3=parseInt(m3textbox.value);
    var m4=parseInt(m4textbox.value);
    var m5=parseInt(m5textbox.value);

    var sum=m1+m2+m3+m4+m5;
    var result;
    var avg;

    document.getElementById("totaltxt").innerText=sum;

    if((m1>=35)&&(m2>=35)&&(m3>=35)&&(m4>=35)&&(m5>=35))
    {
        result="PASS";
    }
    else{
        result="FAIL";
    }
    document.getElementById("resulttxt").innerText=result;

    if(result=="PASS"){
        avg=(sum/5);
        document.getElementById("avgtxt").innerText=avg.toFixed(2)
    }
    else{
        document.getElementById("avgtxt").innerText="Not Applicable";
    }

}

function validateData1(){
    var m1=document.getElementById("m1").value;
    if(m1==""){
        document.getElementById("m1check").innerText="Field value should not be empty";
        document.getElementById("btn1").disabled=true;
    }
    else{
        document.getElementById("m1check").innerText="";
        document.getElementById("btn1").disabled=false;
        if(isNaN(m1))
        {
            document.getElementById("m1check").innerText="Input Should be a number";
            document.getElementById("btn1").disabled=true;
        }
        else
        {
            document.getElementById("m1check").innerText="";
            document.getElementById("btn1").disabled=false;
            if(m1>100){
                document.getElementById("btn1").disabled=true;
                document.getElementById("m1check").innerText="Mark should be less than 100";
            }
            else{
                document.getElementById("m1check").innerText="";
                document.getElementById("btn1").disabled=false;
            }
        }
        
    }
   
}

function validateData2(){
    var m2=document.getElementById("m2").value;
    if(m2==""){
        document.getElementById("m2check").innerText="Field value should not be empty";
        document.getElementById("btn1").disabled=true;
    }
    else{
        document.getElementById("m2check").innerText="";
        document.getElementById("btn1").disabled=false;
        if(isNaN(m2))
        {
            document.getElementById("m2check").innerText="Input Should be a number";
            document.getElementById("btn1").disabled=true;
        }
        else
        {
            document.getElementById("m2check").innerText="";
            document.getElementById("btn1").disabled=false;
            if(m2>100){
                document.getElementById("btn1").disabled=true;
                document.getElementById("m2check").innerText="Mark should be less than 100";
            }
            else{
                document.getElementById("m2check").innerText="";
                document.getElementById("btn1").disabled=false;
            }
        }
        
    }
   
}

function validateData3(){
    var m3=document.getElementById("m3").value;
    if(m3==""){
        document.getElementById("m3check").innerText="Field value should not be empty";
        document.getElementById("btn1").disabled=true;
    }
    else{
        document.getElementById("m3check").innerText="";
        document.getElementById("btn1").disabled=false;
        if(isNaN(m3))
        {
            document.getElementById("m3check").innerText="Input Should be a number";
            document.getElementById("btn1").disabled=true;
        }
        else
        {
            document.getElementById("m3check").innerText="";
            document.getElementById("btn1").disabled=false;
            if(m3>100){
                document.getElementById("btn1").disabled=true;
                document.getElementById("m3check").innerText="Mark should be less than 100";
            }
            else{
                document.getElementById("m3check").innerText="";
                document.getElementById("btn1").disabled=false;
            }
        }
        
    }
   
}

function validateData4(){
    var m4=document.getElementById("m4").value;
    if(m4==""){
        document.getElementById("m4check").innerText="Field value should not be empty";
        document.getElementById("btn1").disabled=true;
    }
    else{
        document.getElementById("m4check").innerText="";
        document.getElementById("btn1").disabled=false;
        if(isNaN(m4))
        {
            document.getElementById("m4check").innerText="Input Should be a number";
            document.getElementById("btn1").disabled=true;
        }
        else
        {
            document.getElementById("m4check").innerText="";
            document.getElementById("btn1").disabled=false;
            if(m4>100){
                document.getElementById("btn1").disabled=true;
                document.getElementById("m4check").innerText="Mark should be less than 100";
            }
            else{
                document.getElementById("m4check").innerText="";
                document.getElementById("btn1").disabled=false;
            }
        }
        
    }
   
}

function validateData5(){
    var m5=document.getElementById("m5").value;
    if(m5==""){
        document.getElementById("m5check").innerText="Field value should not be empty";
        document.getElementById("btn1").disabled=true;
    }
    else{
        document.getElementById("m5check").innerText="";
        document.getElementById("btn1").disabled=false;
        if(isNaN(m5))
        {
            document.getElementById("m5check").innerText="Input Should be a number";
            document.getElementById("btn1").disabled=true;
        }
        else
        {
            document.getElementById("m5check").innerText="";
            document.getElementById("btn1").disabled=false;
            if(m5>100){
                document.getElementById("btn1").disabled=true;
                document.getElementById("m5check").innerText="Mark should be less than 100";
            }
            else{
                document.getElementById("m5check").innerText="";
                document.getElementById("btn1").disabled=false;
            }
        } 
    }
}

