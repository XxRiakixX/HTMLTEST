function buttonTest()
{
alert('お使いの機器が(13)個のウイルスにより深刻なダメージを受けてません');
}
function ClickTextbox1()
{
getTextbox1 = document.getElementById("Textbox1");
text1 = getTextbox1.value;
alert(text1);
}
function ClickTextbox2()
{
getTextbox2 = document.getElementById("Textbox2");
text2 = getTextbox2.value;
text2 ="ほう...?"+text2+"...。本当にそう思っているんですか？";
Displaytext2=document.getElementById("DisplayTextbox2");
Displaytext2.innerHTML = text2;
}
function iftest()
{
res = window.confirm("個人情報を提供しますか？");
if(res == true)
{
alert("お使いの機器が(13)個のウイルスにより深刻なダメージを受けています");
}
else{
alert("ITリテラシー持ちか・・・");
}
}
function SetDate()
{
document.getElementById('TimeDate').innerHTML=Date();
}
window.onload=SetDate;
setinterval(SetDate,1000);
function Trigger()
{
Count=5;
CountDownTimer =setInterval(function()
{document.getElementById('CountDown').innerHTML = Count;

if(0==Count)
{
document.getElementById('Bombe').innerHTML="<img src ='img/bakuhatsu.png'>";
clearInterval(CountDownTimer);
}
Count--;
},1000);
}
function Keisan()
{
getKeisanBox1=document.getElementById("KeisanBox1");
getKeisanBox2=document.getElementById("KeisanBox2");

if(getKeisanBox1.value == "" || getKeisanBox2.value =="")
{
alert("未記入の項目があります");
return;
}

if(getKeisanBox1.value.match(/[^0-9]+/)|| getKeisanBox2.value.match(/[^0-9]+/))
{
alert("認識できない情報が入力されています");
return;
}
a = parseInt(getKeisanBox1.value);
b = parseInt(getKeisanBox2.value);

c=a+b;

DisplayResult = document.getElementById("KeisanResult");
DisplayResult.innerHTML = c;
}
