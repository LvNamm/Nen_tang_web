$(".btn").on('click',function (){
    let lis_src = ['dua_hau.jpg',"khe.jpg",'dua_hau.jpg',"dau.jpg"]
    let list_item = ['melon',"start","orange","otrawberry"]
    let check = false
    for(let i =0;i<list_item.length;i++){
        if($("#input_fruit").val().toLowerCase() == list_item[i]){
            $('#fruit_display').text($("#input_fruit").val())
            $("#img").attr("src",lis_src[i]);
            check = true
            break
        }
    }
    if(check == false){
        alert("Nhap lai")
    }
}
)