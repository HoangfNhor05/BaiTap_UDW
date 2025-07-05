// Bài 6

function dangki() {
    var hoTen = document.forms.myForm["user"].value;
    var pass = document.forms.myForm["pass"].value;
    var ns = document.forms.myForm["ns"].value;
    var ngaySinh = new Date(ns);
    var hienTai = new Date();
    var tuoi = hienTai.getFullYear() - ngaySinh.getFullYear();
    var gt = document.forms.myForm["sex"].value;
    var qt = document.forms.myForm["qt"].value;
    console.log(hoTen);
    console.log(tuoi);
    console.log(gt);
    console.log(qt);

    document.forms.myForm["thongtin"].value =
      "Chào mừng " +
      hoTen +
      "\nBạn là " +
      gt+
      "\nMật khẩu bạn có " +
      pass.length +
      " kí tự \n" +
      "Tuổi bạn là " +
      tuoi +
      "\nVấn đề bạn quan tâm là: " +
      qt;
      return false;
  }

  // Bài 7

  
  function reverse() {
    var s1 = document.getElementById("S1").value;
    var kq = "";
    arr = s1.split(" ");
    for (var i = arr.length - 1; i >= 0; i--) {
      kq += arr[i].trim() + " ";
    }
    document.getElementById("S1").value = kq.trim();
  }
  function normal() {
    var s1 = document.getElementById("S1").value;
    arr = s1.split(" ");
    var kq = "",
      temp;
    for (var i = 0; i < arr.length; i++) {
      temp = arr[i].trim().toLowerCase();
      if (temp != "") {
        temp = temp.substr(0, 1).toUpperCase() + temp.substr(1);
        kq += temp + " ";
      }
    }
    document.getElementById("S1").value = kq.trim();
  }

  function reset() {
    var str = "learning JAVASCRIPT is veRy easy";
    document.getElementById("S1").value = str;
  }

  function insertStr() {
    var strMain = document.getElementById("S1").value;
    var str2 = document.getElementById("S2").value;
    var index = parseInt(document.getElementById("index").value);

    var kq = strMain.slice(0, index) + str2 + strMain.slice(index);
    document.getElementById("S1").value = kq;
  }

  function replace() {
    var str1 = document.getElementById("S1").value;
    var str2 = document.getElementById("S2").value;
    var str3 = document.getElementById("S3").value;

    var index = str1.search(str2);
    console.log(index);
    if (index != -1) {
      var kq =
        str1.slice(0, index) + str3 + str1.slice(index + str3.length);
      document.getElementById("S1").value = kq;
    } else alert("Chuỗi S1 không chứa chuỗi S2");
  }

  function delS2() {
    var str1 = document.getElementById("S1").value;
    var str2 = document.getElementById("S2").value;
    var index = parseInt(document.getElementById("index").value, 10);
    
    // Kiểm tra xem chỉ số có hợp lệ không
    if (index < 0 || index >= str1.length) {
        console.error("Chỉ số ngoài phạm vi.");
        return;
    }
    
    // Hàm kiểm tra ký tự có phải chữ hoa không
    function isAllUpperCase(char) {
        return char === char.toUpperCase() && char !== char.toLowerCase();
    }

    if (isAllUpperCase(str1[index])) {
        // Chuyển ký tự tại vị trí index thành chữ thường
        var str = str1[index].toLowerCase();
        var strMain = str1.slice(0, index) + str + str1.slice(index + 1);
        
        console.log("Chuỗi đã chỉnh sửa:", strMain);

        // Tìm vị trí của str2 trong strMain
        var strDelIndex = strMain.indexOf(str2);

        console.log("Vị trí của str2:", strDelIndex);

        if (strDelIndex !== -1) {
            // Xóa str2 khỏi strMain
            var kq = strMain.slice(0, strDelIndex) + strMain.slice(strDelIndex + str2.length);
            document.getElementById("S1").value = kq;
        } else {
            console.error("Không tìm thấy chuỗi con.");
        }
    } else {
        // Nếu ký tự tại vị trí index không phải là chữ hoa, chỉ cần xóa str2 khỏi str1
        var strDelIndex = str1.indexOf(str2);

        if (strDelIndex !== -1) {
            var kq = str1.slice(0, strDelIndex) + str1.slice(strDelIndex + str2.length);
            document.getElementById("S1").value = kq;
        } else {
            console.error("Không tìm thấy chuỗi con.");
        }
    }
}
