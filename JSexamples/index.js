console.log('Hello, world!')
var myButton = document.getElementById('btnClick')
function myClick(){
    console.log('click')
    alert('Hello, world!')
}

myButton.addEventListener("click", myClick)