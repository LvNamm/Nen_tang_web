function reset() {
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('tour').value = 1;
    document.getElementById('mb').checked=false
    document.getElementById('eto').checked = false;
    document.getElementById('nl').value = ''
    document.getElementById('te').value =''
}
function Submit() {
    let check = true
    let name = document.getElementById('name')
    let address = document.getElementById('address')
    let phone = document.getElementById('phone')
    let tour = document.getElementById('tour')
    let vehicle = [document.getElementById('mb'), document.getElementById('eto')]
    let Khach = [document.getElementById('nl'), document.getElementById('te')]
    if (name.value == '' || /^[a-zA-Z ]{1,}$/.test(name.value.trim()) == false) {
        check = false
        console.log(1)
    }
    if (address.value == '' || /^[a-zA-Z0-9 ]{3,}$/.test(address.value.trim()) == false) {
        check = false
        console.log(2)
    }
    if (phone.value == '' || /^[0-9]{10}$/.test(phone.value.trim()) == false) {
        check = false
        console.log(2)
    }
    if (isNaN(Khach[0].value) == true || isNaN(Khach[1].value) == true) {
        check = false
        console.log(3)
    }
    if (vehicle[0].checked == false && vehicle[1].checked == false) {
        check = false
        console.log(4)
    }
    if (check) {
        document.getElementById('sucess').style.display = 'table-row'
    }
    else {
        document.getElementById('fall').style.display = 'table-row'

    }
    console.log(check)

}