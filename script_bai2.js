// JavaScript source code
// 1 & 2. Hàm ki?m tra h?p l? các ô nh?p li?u
function validateForm() {
    var isValid = true;

    // Danh sách các field b?t bu?c không ???c r?ng (Yêu c?u 1)
    var fields = [
        { id: 'ten', errId: 'ten_err', name: 'Tên' },
        { id: 'diachi', errId: 'diachi_err', name: '??a ch? nh?n hàng' },
        { id: 'tinhtanh', errId: 'tinhtanh_err', name: 'T?nh / thành ph?' },
        { id: 'quanhuyen', errId: 'quanhuyen_err', name: 'Qu?n / Huy?n' },
        { id: 'phuongxa', errId: 'phuongxa_err', name: 'Ph??ng / Xã' }
    ];

    // Ki?m tra không cho phép r?ng cho các textbox chung
    for (var i = 0; i < fields.length; i++) {
        var inputElem = document.getElementById(fields[i].id);
        var errElem = document.getElementById(fields[i].errId);

        if (inputElem.value.trim() === "") {
            errElem.innerText = "Vui lòng nh?p " + fields[i].name;
            isValid = false;
        } else {
            errElem.innerText = "";
        }
    }

    // 2. Ki?m tra s? ?i?n tho?i t? 10 ký s? tr? lên
    var sdtInput = document.getElementById('sdt');
    var sdtErr = document.getElementById('sdt_err');
    var sdtValue = sdtInput.value.trim();

    // Ki?m tra chu?i ch? ch?a s? và có ?? dài >= 10
    var isNumeric = /^\d+$/.test(sdtValue);
    if (sdtValue === "" || !isNumeric || sdtValue.length < 10) {
        sdtErr.innerText = "S? ?i?n tho?i ph?i t? 10 ký s? tr? lên";
        isValid = false;
    } else {
        sdtErr.innerText = "";
    }

    // 4. Xu?t thông báo alert d?a trên k?t qu?
    if (!isValid) {
        alert("Thông tin nh?p không h?p l?");
    } else {
        alert("L?u thông tin thành công");
    }

    return false; // Ng?n không cho form reload trang
}

// 3. Hàm dùng chung cho 2 nút V?n phòng / Nhà riêng
function selectLocationType(type) {
    if (type === 'vanphong') {
        alert("B?n ch?n giao hàng t?i v?n phòng");
    } else if (type === 'nharieng') {
        alert("B?n ch?n giao hàng t?i nhà riêng");
    }
}