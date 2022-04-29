function loadCart() {
   
    let giohang = JSON.parse(localStorage.getItem('mycart'));
    localStorage.setItem('mycart', JSON.stringify(giohang));
    console.log('mycart', giohang);
    giohang.forEach((sach,i) => {

        $('#listCart').append(
            `
            <tr class="bg-warning fw-bold">
            <td class="p-2 bg-white"><img class="w-50 h-50" src="${sach.hinhanh}"/></td>
            <td>${sach.tensach}</td>
            <td>${sach.dongia}</td>
            <td>${sach.soluong}</td>
            <td class="text-success">${sach.tongtien}</td>
            <td><button class="btn btn-danger fw-bold"" onclick="Remove(${i});TongTienSP()">XOA</button></td>
            </tr>
            `
        )
    });
    
}
function Remove(vitriremove) {
    let giohang = JSON.parse(localStorage.getItem('mycart'));
    giohang.splice(vitriremove, 1);
    console.log('gio hang hien tai', giohang);
    localStorage.setItem('mycart', JSON.stringify(giohang));
    $('#listCart tr:not(:first)').empty();
    giohang.forEach((sach, i) => {
        $('#listCart').append(
            `
            <tr class="bg-warning fw-bold">
            <td><img class="w-100 h-100" src="${sach.hinhanh}"/></td>
            <td>${sach.tensach}</td>
            <td>${sach.dongia}</td>
            <td>${sach.soluong}</td>
            <td class="text-success">${sach.tongtien}</td>
            <td><button class="btn btn-danger fw-bold"" onclick="Remove(${i});TongTienSP()">XOA</button></td>
            </tr>
            `
        )
    });
}
function TongTienSP() {
    let tongtiensp = 0;
    let giohang = JSON.parse(localStorage.getItem('mycart'));
    giohang.forEach(sach => {
        tongtiensp+=sach.tongtien;
    });
    localStorage.setItem('mycart', JSON.stringify(giohang));
    document.querySelector('input[id="output-TongTienSP"]').value=tongtiensp;
}