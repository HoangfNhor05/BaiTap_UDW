const week = [`SUM`, `MON`, `TUE`, `WED`, `THU`, `FIR`, `SAT`];

function updateTime() {
    var now = new Date();

    document.getElementById(`time`).innerHTML =
        zeroPadding(now.getHours(), 2) +
        ` : ` +
        zeroPadding(now.getMinutes(), 2) +
        ` : ` +
        zeroPadding(now.getSeconds(), 2);
    document.getElementById(`date`).innerHTML = 
    week[now.getDay()]
        + ` - ` +
        zeroPadding(now.getDate(), 2) +
        ` : ` +
        zeroPadding(now.getMonth() + 1, 2) +` : ` +
        now.getFullYear();
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, `0`);
}
