// Bài tập 1
function tinhTuoi() {
  var name = document.getElementById("js-name").value;
  var dob = parseInt(document.getElementById("js-namSinh").value);
  var curDate = new Date();

  if (name == "") {
    alert("Tên không hợp lệ");
    return;
  }
  if (isNaN(dob)) {
    alert("Năm sinh không hợp lệ");
    return;
  }
  document.getElementById("js-kq").innerHTML =
    "Chào bạn " +
    name +
    "! <br> Tuổi của bạn là " +
    (curDate.getFullYear() - dob);
}

// Bài tập 2

function tinhDay(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) return 29;
      else return 28;
  }
}
function dateTime() {
  var curDate = new Date();
  var thu = curDate.getDay() + 1;
  var day = curDate.getDate();
  var month = curDate.getMonth() + 1;
  var year = curDate.getFullYear();
  document.getElementById("js-dateNow").innerHTML =
    "Hôm nay " +
   
    (thu == 1 ? " Chủ Nhật ": "thứ " + thu) +
    " Ngày " +
    day +
    " Tháng " +
    month +
    " Năm " +
    year;
  setInterval(showTime, 1000);
}

function showTime() {
  var curDate = new Date();
  var minutes = curDate.getMinutes();
  var hour = curDate.getHours();
  var second = curDate.getSeconds();
  document.getElementById("js-TimeNow").innerHTML =
    hour + ":" + minutes + ":" + second;
}

function showFunction() {
  var thang = Number(prompt("Nhập tháng"));
  var nam = Number(prompt("Nhập Năm"));
  var ngay = tinhDay(thang, nam);
  document.getElementById("js-setDate").innerHTML =
    "Tháng " + thang + " Năm " + nam + " có " + ngay + " Ngày";
}

//Bài tập 3

function giaiPt()
{
    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    var c = parseInt(document.getElementById("c").value)
    var kq;

    if (a == 0)
    {
        if (b== 0)
        {
            if (c == 0)
                kq="Phương Trình có VSN";
            else
                kq = "phương Trình VN"
        }
        else
        {
            var x = -c /b;
            kq = x.toFixed(2);
        }
    }
    else
    {
        var delta = b * b - 4 * a * c;
        if ( delta < 0)
            kq = "Phương Trình VN"
        else if (delta > 0)
            {
                var x1 = (-b +Math.sqrt(delta)/(2*a))
                var x2 = (-b -Math.sqrt(delta)/(2*a))
                kq = "Phương Trình có 2 nghiệm : <br> x1: " + x1.toFixed(2) + "<br> x2: " + x2.toFixed(2);
            }
    }
    document.getElementById("ketQua").innerHTML=kq;
}
// Bài tập 4 
function Tinh() {
  var a = parseInt(document.forms["myForm"]["js-so1"].value);
  var b = parseInt(document.forms["myForm"]["js-so2"].value);
  var op = document.forms["myForm"]["op"].value;
  var kq;
  switch (op) {
    case "+":
      kq = a + b;
      break;
    case "-":
      kq = a - b;
      break;
    case "*":
      kq = a * b;
      break;
    case "/":
      kq = a / b;
      break;
  }
  document.forms["myForm"]["kq"].value = kq;
  return false;
}
