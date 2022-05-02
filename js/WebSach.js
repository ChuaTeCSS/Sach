function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this);
        let data = JSON.parse(this.responseText);
        console.log(data);
        data.items.forEach(sach => {
            $('#demo').append(
            ` 
                <div class="col-sm align-items-center justify-content-center h-100">
                <a href="ChiTiet.html?id=${sach.id}">
                 <img width="100px" height="200px" style="object-fit: contain;" onclick="Detail()" src="http://books.google.com/books/content?id=${sach.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api">
                </a>
                <p class="textellipsis">${sach.volumeInfo.title}</p>
                </div>
            `
            )
        });
        
    }
    xhttp.open("GET", "https://www.googleapis.com/books/v1/volumes?q=e");
    xhttp.send();
   
  
}
var _startIndex=10;
function btnXemThem()
{
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this);
        let data = JSON.parse(this.responseText);
        console.log(data);
        
        data.items.forEach(sach => {
            $('#demo').append(
            ` 
                <div class="col-sm h-100">
                <a href="ChiTiet.html?id=${sach.id}">
                 <img width="100px" height="200px" style="object-fit: contain;" onclick="Detail()"  src="http://books.google.com/books/content?id=${sach.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api">
                </a>
                <p class="textellipsis">${sach.volumeInfo.title}</p>
                </div>
            `
            )
            _startIndex+=10;
        });
        
    }
    xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=e&startIndex=${_startIndex}&maxResult=10`);
    xhttp.send();
}

{/* <div class="col-md-12 d-flex justify-content-center align-items-center">
<div style="text-align: center;">
    <div>
        <a><img style="object-fit: contain;" width="100%" height="auto" src="fhs11.jpg"> </a>
    </div>
    <div class="textellipsis">
        <p>Truyện cổ Grimm - Bản Cao Cấp - Tặng kèm Bookmark + 2 PostCard
        </p>
        <h5 class="text-warning">463.000</h5>
    </div>
</div> */}
