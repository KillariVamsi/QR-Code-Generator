let imgElement = document.getElementById("qrImg")
let textElement = document.getElementById("input")



function generateQR(){

    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value

}