// Bài Tập 11
function changeScale(id) {
    var sz = id.value;
    document.getElementById("ocean").style.transform = 'scale(' + sz + ')';
}

// Bài Tập 13

let myChart; // Khai báo biến toàn cục cho biểu đồ

function cChart() {
    var n = document.getElementById("valueNumber").value;
    console.log(n);
    n = n.split(",").map(x => x.trim()); // Xử lý khoảng trắng
    console.log(n);

    // Hàm tạo mảng màu ngẫu nhiên cho biểu đồ
    const generateColors = (count) => {
        let colors = [];
        for (let i = 0; i < count; i++) {
            colors.push("#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase());
        }
        return colors;
    };

    // Nếu biểu đồ đã tồn tại, xóa trước khi tạo mới
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart("myChart", {
        type: "pie",
        data: {
            labels: n,
            datasets: [
                {
                    data: n.map(x => parseFloat(x)), // Chuyển đổi giá trị thành số
                    backgroundColor: generateColors(n.length), // Tạo mảng màu cho từng phần
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                },
                title: {
                    display: true,
                    text: "Pie Chart",
                },
            },
        },
    });
}


