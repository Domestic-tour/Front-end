$(document).ready(function () {
    setColorAndValForCheckActive()
    $('#add-new-nhan-vien').click(function (e) {
        e.preventDefault()
        let numberNhanVien = $('.row-nhanvien').length
        let lastMaNhanVien =$('.ma-nhan-vien').eq(numberNhanVien-1).html()
        window.location.href = `/staffs/addNewStaff?MaNhanVien=${lastMaNhanVien}`
        
    })
});
function setColorAndValForCheckActive() {
    let totalRow = $('.row-nhanvien').length
    for (let i = 0; i < totalRow; ++i) {
        let CheckFinishedOfRow = $('.row-check-active-nhanvien').eq(i).html()
        // finished -- red
        if (CheckFinishedOfRow == 'true') {
            $('.span-checkactive-nhanvien').eq(i).html("In Tour")
            $('.span-checkactive-nhanvien').eq(i).addClass('intour')
        }
        else if (CheckFinishedOfRow == 'false') {
            $('.span-checkactive-nhanvien').eq(i).html("Enable")
            $('.span-checkactive-nhanvien').eq(i).addClass('enable')
        }
    }
}
