// Bài tập 8

function Statistic()
{
    var str = document.getElementById("stringstt").value;
    var arrstr = str.split(" ");
    var word = 0;
    var arrkq=[];
    for (var i = 0 ; i < 128; i++)
        arrkq[i] = 0;
    var count = 0;
   for (var i = 0 ; i < arrstr.length ; i++)
   {
    if (arrstr[i] != "")
        count++;
   }
   
    var strNew= str.toUpperCase();
    var kq = "characters " + str.length + "<br>" + "Words"+" : " + count+"<br>";

    for (var i = 0 ; i < str.length ; i++)
        arrkq[strNew.charCodeAt(i)]++;
   
    for (var i = 0 ; i <arrkq.length ; i++)
        {
            if (arrkq[i] > 0)
                kq += "characters   '" + String.fromCharCode(i) + "'   :  " + arrkq[i] + "<br>";
            
        }
    document.getElementById("kq").innerHTML= kq;
}

// Bài 9
function cArray() {
var n = parseInt(document.getElementById("number").value);
arr = new Array(n);
for (var i = 0; i < n; i++) {
  arr[i] = Math.floor(Math.random() * 100) % 50;
  console.log(arr[i]);
}
document.getElementById("arrinitial").value = arr.join(" ");
}

function des(a, b) {
return b - a;
}

function asc(a, b) {
return a - b;
}
function sortAsc() {
arr.sort(asc);
document.getElementById("arrAsc").value = arr.join(" ");
}

function sortDes() {
arr.sort(des);
document.getElementById("arrDes").value = arr.join(" ");
}

// Bài 10
function changeColor()
{
    var bgcolor = document.getElementById("bgColor").value;
    var textColor = document.getElementById("textColor").value;

    document.getElementById("title").innerHTML = document.getElementById("textInput").value;
    document.getElementById("divtest").style.backgroundColor= bgcolor;
    document.getElementById("divtest").style.color=textColor;
}
