var id1;//id of cell
var ids1=["1","2","3","4","5","6","7","8","9"];//id for rows
var ids2=["10","11","12","13","14","15","16","17","18"];
var ids3=["19","20","21","22","23","24","25","26","27"];
var ids4=["28","29","30","31","32","33","34","35","36"];
var ids5=["37","38","39","40","41","42","43","44","45"];
var ids6=["46","47","48","49","50","51","52","53","54"];
var ids7=["55","56","57","58","59","60","61","62","63"];
var ids8=["64","65","66","67","68","69","70","71","72"];
var ids9=["73","74","75","76","77","78","79","80","81"];
var idc1=["1","10","19","28","37","46","55","64","73"];//id for column
var idc2=["2","11","20","29","38","47","56","65","74"];
var idc3=["3","12","21","30","39","48","57","66","75"];
var idc4=["4","13","22","31","40","49","58","67","76"];
var idc5=["5","14","23","32","41","50","59","68","77"];
var idc6=["6","15","24","33","42","51","60","69","78"];
var idc7=["7","16","25","34","43","52","61","70","79"];
var idc8=["8","17","26","35","44","53","62","71","80"];
var idc9=["9","18","27","36","45","54","63","72","81"];
var idb1=["1","2","3","10","11","12","19","20","21"];//id for box
var idb2=["4","5","6","13","14","15","22","23","24"];
var idb3=["7","8","9","16","17","18","25","26","27"];
var idb4=["28","29","30","37","38","39","46","47","48"];
var idb5=["31","32","33","40","41","42","49","50","51"];
var idb6=["34","35","36","43","44","45","52","53","54"];
var idb7=["55","56","57","64","65","66","73","74","75"];
var idb8=["58","59","60","67","68","69","76","77","78"];
var idb9=["61","62","63","70","71","72","79","80","81"];
var val1=[],val2=[],val3=[],val4=[],val5=[],val6=[],val7=[], val8=[],val9=[];//value of rows
var valc1=[],valc2=[],valc3=[],valc4=[],valc5=[],valc6=[],valc7=[],valc8=[], valc9=[];//value of column
var valb1=[], valb2=[], valb3=[],valb4=[], valb5=[], valb6=[], valb7=[], valb8=[], valb9=[];//value of box
var idrandom=[];
var flag=1,flag1=1,flag2=1,flag3=1,flagg;
var x;//value
var counter=0;
var idofcell=[];
var length;
var a1;
$(document).ready(function(){

$(".cell").click(function(){
  id1=$(this).attr("id");
  $(this).css("backgroundColor","cornsilk");
});
$(".cell").dblclick(function(){
	$(this).css("backgroundColor","");
	});
$(".button").click(function(){
  x=$(this).val();//value of button
  flag=1;
  flag1=1;
  flag2=1;
  flag3=1;
  row();
  column();
  box();
  counter1();
  check();
  idofcell.push(id1);
});
});
function row(){//row check
  if(jQuery.inArray(id1,idofcell)==-1)
  {
   row1();
  }
  else
  { 
   row2();
  }
}
function column()//column check
{
  if(jQuery.inArray(id1,idofcell)==-1){
   column1();
   }
   else{
   column2();
   }
}
function box()//box check
{
  if(jQuery.inArray(id1,idofcell)==-1){
   box1();
   }
   else
   {
   box2();
   }
} 
function counter1(){//game completed
 if(counter>(80-length))
 {
  document.getElementById("body1").innerHTML="COMPLETED";
 }
}
function check(){
if(flagg==1){
  if(flag==1){
   counter++;
   document.getElementById(id1).style.backgroundColor="transparent";
   document.getElementById(id1).innerHTML=x;
  }
else if(flag==0)
  {
   document.getElementById(id1).style.backgroundColor="red";
   document.getElementById(id1).innerHTML=x;
}
}
if(flagg==0)
{
  if(flag1==0||flag2==0||flag3==0)
  {
  document.getElementById(id1).style.backgroundColor="red";
  document.getElementById(id1).innerHTML=x;
  }
  else
  {
   counter++;
   document.getElementById(id1).style.backgroundColor="transparent";
   document.getElementById(id1).innerHTML=x;
  } 
 }
}
function check1(val)
{
flagg=1;
if(jQuery.inArray(x,val)==-1)
{
 val.push(x);
}
 else
  {
   flag=0;
  }
}
function check2(value)
{    flagg=0;
  var z=document.getElementById(id1).textContent;
  var x1=(jQuery.inArray(z,value));
  value.splice(x1,1);
  if(jQuery.inArray(x,value)==-1){
    value.push(x);
   }
   else{
   flag1=0;
    } 
}
function check3(value)
{   flagg=0;
   var z=document.getElementById(id1).textContent;
   var x1=(jQuery.inArray(z,value));
   value.splice(x1,1);
   if(jQuery.inArray(x,value)==-1){
    value.push(x);
    }
    else{
    flag2=0;
    }
}
function check4(value)
{   flagg=0;
  var z=document.getElementById(id1).textContent;
  var x1=(jQuery.inArray(z,value));
  value.splice(x1,1);
  if(jQuery.inArray(x,value)==-1){
    value.push(x);
   }
   else{
    flag3=0;
    }
}
function set()//randomly generating numbers 
{ 
	start();
	for(var r=0;r<idb1.length;r++)
	{ a1=idb1[r];
	 document.getElementById(a1).style.backgroundColor="grey";
	 a1=idb3[r];
		document.getElementById(a1).style.backgroundColor="grey";
		a1=idb5[r]
		document.getElementById(a1).style.backgroundColor="grey";
		a1=idb7[r];
		document.getElementById(a1).style.backgroundColor="grey";
		a1=idb9[r];
		document.getElementById(a1).style.backgroundColor="grey";
	} 
 for(i=0;i<30;i++)
{  
  x=((Math.floor(Math.random() * 9) + 1).toString()); 
  id1=((Math.floor(Math.random() * 81) + 1).toString());
if(jQuery.inArray(id1,idrandom)==-1){
  idrandom.push(id1);
  flag=1;
row1();
if(flag!=0)
{	
 column1();
 if(flag!=0){
  box1();
  if(flag!=0)
   {document.getElementById(id1).disable=true;
   	document.getElementById(id1).className="cellshow";
    document.getElementById(id1).innerHTML=x;
    
   }
    else
    {
     i--;
     idrandom.pop(id1);
     row3();
     column3();
    }         
  }
 else
 {
  i--;
  idrandom.pop(id1);
  row3();
 }
}
 else{
 i--;
 idrandom.pop(id1);
}
}
}
length=idrandom.length;
console.log(length);
}
function row1()
{
  if(jQuery.inArray(id1,ids1)!=-1)
  {
  check1(val1);
  }
  else
  if(jQuery.inArray(id1,ids2)!==-1)
  {
  check1(val2);
  }
  else
  if(jQuery.inArray(id1,ids3)!==-1)
  {
  check1(val3);
  }
  else
  if(jQuery.inArray(id1,ids4)!==-1)
  {
  check1(val4);
  }
  else
  if(jQuery.inArray(id1,ids5)!==-1)
  {
  check1(val5);
  }
  else
  if(jQuery.inArray(id1,ids6)!==-1)
  {
  check1(val6);
  }
  else
  if(jQuery.inArray(id1,ids7)!==-1)
  {
  check1(val7);
  }
  else
  if(jQuery.inArray(id1,ids8)!==-1)
  {
  check1(val8);
  }
  else
  if(jQuery.inArray(id1,ids9)!==-1)
  {
  check1(val9);
  }
}
function row2()
{
  if(jQuery.inArray(id1,ids1)!=-1){
  check2(val1);
  }
  else
  if(jQuery.inArray(id1,ids2)!=-1){
  check2(val2);
  }
  else
  if(jQuery.inArray(id1,ids3)!=-1){
  check2(val3);
  }
  else
  if(jQuery.inArray(id1,ids4)!=-1){
  check2(val4);
  }
  else
  if(jQuery.inArray(id1,ids5)!=-1){
  check2(val5);
  }
  else
  if(jQuery.inArray(id1,ids6)!=-1){
  check2(val6);
  }
  else
  if(jQuery.inArray(id1,ids7)!=-1){
  check2(val7);
  }
  else
  if(jQuery.inArray(id1,ids8)!=-1){
  check2(val8);
  }
  else
  if(jQuery.inArray(id1,ids9)!=-1){
  check2(val9);
  }
}
function column1()
{
  if(jQuery.inArray(id1,idc1)!=-1){
  check1(valc1);
  }
  else
  if(jQuery.inArray(id1,idc2)!=-1){
  check1(valc2);
  }
  else
  if(jQuery.inArray(id1,idc3)!=-1){
  check1(valc3);
  }
  else
  if(jQuery.inArray(id1,idc4)!=-1){
  check1(valc4);
  }
  else
  if(jQuery.inArray(id1,idc5)!=-1){
  check1(valc5);
  }
  else
  if(jQuery.inArray(id1,idc6)!=-1){
  check1(valc6);
  }
  else
  if(jQuery.inArray(id1,idc7)!=-1){
  check1(valc7)
  }
  else
  if(jQuery.inArray(id1,idc8)!=-1){
  check1(valc8);
  }
  else
  if(jQuery.inArray(id1,idc9)!=-1){
  check1(valc9);
  }
}
function column2(){
  if(jQuery.inArray(id1,idc1)!=-1){
  check3(valc1);
  }
  else
  if(jQuery.inArray(id1,idc2)!=-1){
  check3(valc2);
  }
  else
  if(jQuery.inArray(id1,idc3)!=-1){
  check3(valc3);
  }
  else
  if(jQuery.inArray(id1,idc4)!=-1){
  check3(valc4);
  }
  else
  if(jQuery.inArray(id1,idc5)!=-1){
  check3(valc5);
  }
  else
  if(jQuery.inArray(id1,idc6)!=-1){
  check3(valc6);
  }
  else
  if(jQuery.inArray(id1,idc7)!=-1){
  check3(valc7);
  }
  else
  if(jQuery.inArray(id1,idc8)!=-1){
  check3(valc8);
  }
  else
  if(jQuery.inArray(id1,idc9)!=-1){
  check3(valc9);
  }
}
function box1()
{
  if(jQuery.inArray(id1,idb1)!=-1){
  check1(valb1);
  }
  else
  if(jQuery.inArray(id1,idb2)!=-1){
  check1(valb2);
  }
  else
  if(jQuery.inArray(id1,idb3)!=-1){
  check1(valb3);
  }
  else
  if(jQuery.inArray(id1,idb4)!=-1){
  check1(valb4);
  }
  else
  if(jQuery.inArray(id1,idb5)!=-1){
  check1(valb5);
  }
  else
  if(jQuery.inArray(id1,idb6)!=-1){
  check1(valb6);
  }
  else
  if(jQuery.inArray(id1,idb7)!=-1){
  check1(valb7);
  }
  else
  if(jQuery.inArray(id1,idb8)!=-1){
  check1(valb8);
  }
  else
  if(jQuery.inArray(id1,idb9)!=-1){
  check1(valb9);
  }
}
function box2()
{
  if(jQuery.inArray(id1,idb1)!=-1){
  check4(valb1);
  }
  else
  if(jQuery.inArray(id1,idb2)!=-1){
  check4(valb2);
  }
  else
  if(jQuery.inArray(id1,idb3)!=-1){
  check4(valb3);
  }
  else
  if(jQuery.inArray(id1,idb4)!=-1){
  check4(valb4);
  }
  else
  if(jQuery.inArray(id1,idb5)!=-1){
  check4(valb5);
  }
  else
  if(jQuery.inArray(id1,idb6)!=-1){
  check4(valb6);
  }
  else
  if(jQuery.inArray(id1,idb7)!=-1){
  check4(valb7); 
  }
  else
  if(jQuery.inArray(id1,idb8)!=-1){
  check4(valb8);
  }
  else
  if(jQuery.inArray(id1,idb9)!=-1){
  check4(valb9);
  }
}
function row3()
{
  if(jQuery.inArray(id1,ids1)!=-1){
  check5(val1);
  }
  else
  if(jQuery.inArray(id1,ids2)!=-1){
  check5(val2);
  }
  else
  if(jQuery.inArray(id1,ids3)!=-1){
  check5(val3);
  }
  else
  if(jQuery.inArray(id1,ids4)!=-1){
  check5(val4);
  }
  else
  if(jQuery.inArray(id1,ids5)!=-1){
  check5(val5);
  }
  else
  if(jQuery.inArray(id1,ids6)!=-1){
  check5(val6);
  }
  else
  if(jQuery.inArray(id1,ids7)!=-1){
  check5(val7);
  }
  else
  if(jQuery.inArray(id1,ids8)!=-1){
  check5(val8);
  }
  else
  if(jQuery.inArray(id1,ids9)!=-1){
  check5(val9);
  }
}
function column3()
{
  if(jQuery.inArray(id1,idc1)!=-1){
  check5(valc1);
  }
  else
  if(jQuery.inArray(id1,idc2)!=-1){
  check5(valc2);
  } 
  else
  if(jQuery.inArray(id1,idc3)!=-1){
  check5(valc3); 
  }
  else
  if(jQuery.inArray(id1,idc4)!=-1){
  check5(valc4);
  }
  else
  if(jQuery.inArray(id1,idc5)!=-1){
  check5(valc5);
  }
  else
  if(jQuery.inArray(id1,idc6)!=-1){
  check5(valc6);
  }
  else
  if(jQuery.inArray(id1,idc7)!=-1){
  check5(valc7)
  }
  else
  if(jQuery.inArray(id1,idc8)!=-1){
  check5(valc8);
  }
  else
  if(jQuery.inArray(id1,idc9)!=-1){
  check5(valc9);
  }
}

function check5(valuee)
{
  valuee.pop();
}
function start()//timer
{
	document.getElementById('timer').innerHTML =
  10 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59)
  {
  	m=m-1
  }
  if(m<0){
   document.getElementById("body1").innerHTML="GAME OVER";
 }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}
}

