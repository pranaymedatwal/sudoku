var id1;//id of cell
var ids1=["1","2","3","4","5","6","7","8","9"];
var ids2=["10","11","12","13","14","15","16","17","18"];
var ids3=["19","20","21","22","23","24","25","26","27"];
var ids4=["28","29","30","31","32","33","34","35","36"];
var ids5=["37","38","39","40","41","42","43","44","45"];
var ids6=["46","47","48","49","50","51","52","53","54"];
var ids7=["55","56","57","58","59","60","61","62","63"];
var ids8=["64","65","66","67","68","69","70","71","72"];
var ids9=["73","74","75","76","77","78","79","80","81"];
var idc1=["1","10","19","28","37","46","55","64","73"];
var idc2=["2","11","20","29","38","47","56","65","74"];
var idc3=["3","12","21","30","39","48","57","66","75"];
var idc4=["4","13","22","31","40","49","58","67","76"];
var idc5=["5","14","23","32","41","50","59","68","77"];
var idc6=["6","15","24","33","42","51","60","69","78"];
var idc7=["7","16","25","34","43","52","61","70","79"];
var idc8=["8","17","26","35","44","53","62","71","80"];
var idc9=["9","18","27","36","45","54","63","72","81"];
var idb1=["1","2","3","10","11","12","19","20","21"];
var idb2=["4","5","6","13","14","15","22","23","24"];
var idb3=["7","8","9","16","17","18","25","26","27"];
var idb4=["28","29","30","37","38","39","46","47","48"];
var idb5=["31","32","33","40","41","42","49","50","51"];
var idb6=["34","35","36","43","44","45","52","53","54"];
var idb7=["55","56","57","64","65","66","73","74","75"];
var idb8=["58","59","60","67","68","69","76","77","78"];
var idb9=["61","62","63","70","71","72","79","80","81"];
var val1=["2"];//value of button stored in an array
var val2=["9","8","5"];
var val3=["6","3","1","9","8"];
var val4=["8"];
var val5=["1","6","8","9","5"];
var val6=["7","4","6","1"];
var val7=["5","7","4"];
var val8=["2","5","6"];
var val9=["4"];
var valc1=["6","1","7"];
var valc2=["3"];
var valc3=["6","5","2"];
var valc4=["9","8","7"];
var valc5=["8","4"];
var valc6=["2","1","4","5"];
var valc7=["5","9","8","6"];
var valc8=["8","9","6"];
var valc9=["5","1","4"];
var valb1=["6","3"];
var valb2=["9","8","2","1"];
var valb3=["5","9","8"];
var valb4=["1","7","6"];
var valb5=["8","4"];
var valb6=["8","9","5","6","1"];
var valb7=["5","2"];
var valb8=["7","4","5"];
var valb9=["6","4"];
var flag=1,flag1=1,flagg;
var x;//value
var counter=0;
var idofcell=[];
$(document).ready(function(){
$(".cell").click(function(){
  id1=$(this).attr("id");
  $(this).css("backgroundColor","orange")

 });
$(".button").click(function(){
  x=$(this).val();//value of button
  flag=1;
  flag1=1;
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
   row1(check1);
  }
  else
  { 
   row1(check2);
  }
}
function column()//column check
{
  if(jQuery.inArray(id1,idofcell)==-1){
   column1(check1);
   }
   else{
   column1(check2);
   }
}
function box()//box check
{
  if(jQuery.inArray(id1,idofcell)==-1){
   box1(check1);
   }
   else
   {
   box1(check2);
   }
} 
function row1(check)
{
  if(jQuery.inArray(id1,ids1)!=-1)
  {
  check(val1);
  }
  else
  if(jQuery.inArray(id1,ids2)!==-1)
  {
  check(val2);
  }
  else
  if(jQuery.inArray(id1,ids3)!==-1)
  {
  check(val3);
  }
  else
  if(jQuery.inArray(id1,ids4)!==-1)
  {
  check(val4);
  }
  else
  if(jQuery.inArray(id1,ids5)!==-1)
  {
  check(val5);
  }
  else
  if(jQuery.inArray(id1,ids6)!==-1)
  {
  check(val6);
  }
  else
  if(jQuery.inArray(id1,ids7)!==-1)
  {
  check(val7);
  }
  else
  if(jQuery.inArray(id1,ids8)!==-1)
  {
  check(val8);
  }
  else
  if(jQuery.inArray(id1,ids9)!==-1)
  {
  check(val9);
  }
}

function column1(check)
{
  if(jQuery.inArray(id1,idc1)!=-1){
  check(valc1);
  }
  else
  if(jQuery.inArray(id1,idc2)!=-1){
  check(valc2);
  }
  else
  if(jQuery.inArray(id1,idc3)!=-1){
  check(valc3);
  }
  else
  if(jQuery.inArray(id1,idc4)!=-1){
  check(valc4);
  }
  else
  if(jQuery.inArray(id1,idc5)!=-1){
  check(valc5);
  }
  else
  if(jQuery.inArray(id1,idc6)!=-1){
  check(valc6);
  }
  else
  if(jQuery.inArray(id1,idc7)!=-1){
  check(valc7)
  }
  else
  if(jQuery.inArray(id1,idc8)!=-1){
  check(valc8);
  }
  else
  if(jQuery.inArray(id1,idc9)!=-1){
  check(valc9);
  }
}

function box1(check)
{
  if(jQuery.inArray(id1,idb1)!=-1){
  check(valb1);
  }
  else
  if(jQuery.inArray(id1,idb2)!=-1){
  check(valb2);
  }
  else
  if(jQuery.inArray(id1,idb3)!=-1){
  check(valb3);
  }
  else
  if(jQuery.inArray(id1,idb4)!=-1){
  check(valb4);
  }
  else
  if(jQuery.inArray(id1,idb5)!=-1){
  check(valb5);
  }
  else
  if(jQuery.inArray(id1,idb6)!=-1){
  check(valb6);
  }
  else
  if(jQuery.inArray(id1,idb7)!=-1){
  check(valb7);
  }
  else
  if(jQuery.inArray(id1,idb8)!=-1){
  check(valb8);
  }
  else
  if(jQuery.inArray(id1,idb9)!=-1){
  check(valb9);
  }
}

function counter1(){
	
if(counter>80)
{
document.getElementById("body1").innerHTML="completed";
}
}
function check(){
	if(flagg==1){
if(flag==1){
counter++;
document.getElementById(id1).style.backgroundColor="yellow";
document.getElementById(id1).innerHTML=x;
}
else if(flag==0)
{
document.getElementById(id1).style.backgroundColor="red";
document.getElementById(id1).innerHTML=x;
}
}
if(flagg==0){
 
	if(flag1==0)
{
	document.getElementById(id1).style.backgroundColor="red";
document.getElementById(id1).innerHTML=x;
}
else{
	counter++;
document.getElementById(id1).style.backgroundColor="yellow";
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
else{
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
}}
