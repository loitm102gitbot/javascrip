// JavaScript source code
function changeNganh() {
    var nganh = document.getElementById("chuyennganh").value;
    var soTruongElem = document.getElementById("sotruong");

    if (nganh === "H? th?ng") {
        soTruongElem.innerText = "Phân tích & Thi?t k?";
    } else if (nganh === "Ph?n m?m") {
        soTruongElem.innerText = "L?p trình";
    } else if (nganh === "M?ng máy tính") {
        soTruongElem.innerText = "Qu?n lý m?ng";
    }
}

// Ki?m tra h?p l? khi nh?n nút ??ng ký
function validateForm() {
    var isValid = true;

    // Reset các thông báo l?i
    document.getElementById("masv_err").innerText = "";
    document.getElementById("hoten_err").innerText = "";
    document.getElementById("tuoi_err").innerText = "";
    document.getElementById("ngoaingu_info").innerText = "";
    document.getElementById("status_msg").innerText = "";

    // 1. Ki?m tra Mã sinh viên (?? 10 ký t?)
    var masv = document.getElementById("masv").value.trim();
    if (masv.length !== 10) {
        document.getElementById("masv_err").innerText = "Mã sinh viên g?m 10 ký t?";
        isValid = false;
    }

    // 2. Ki?m tra H? tên (không r?ng và < 30 ký t?)
    var hoten = document.getElementById("hoten").value.trim();
    if (hoten === "" || hoten.length >= 30) {
        document.getElementById("hoten_err").innerText = "H? tên không r?ng và < 30 ký t?";
        isValid = false;
    }

    // 3. Ki?m tra Tu?i (>= 18)
    var tuoiVal = document.getElementById("tuoi").value.trim();
    var tuoi = parseInt(tuoiVal, 10);
    if (tuoiVal === "" || isNaN(tuoi) || tuoi < 18) {
        document.getElementById("tuoi_err").innerText = "Tu?i ph?i 18 tr? lên";
        isValid = false;
    }

    // 5. Xu?t các ngo?i ng? ???c ch?n
    var chkAnh = document.getElementById("chkAnh").checked;
    var chkPhap = document.getElementById("chkPhap").checked;
    var chkNhat = document.getElementById("chkNhat").checked;

    var selectedNN = [];
    if (chkAnh) selectedNN.push("Anh");
    if (chkPhap) selectedNN.push("Pháp");
    if (chkNhat) selectedNN.push("Nh?t");

    if (selectedNN.length > 0) {
        document.getElementById("ngoaingu_info").innerText = selectedNN.join(" và ");
    }

    // Thông báo k?t qu? t?ng th?
    var statusElem = document.getElementById("status_msg");
    if (isValid) {
        statusElem.innerText = "B?n ?ã ??ng ký thành công";
        statusElem.style.color = "green";
    } else {
        statusElem.innerText = "B?n ph?i nh?p l?i cho ?úng";
        statusElem.style.color = "blue";
    }

    return false; // Ng?n submit reload trang
}