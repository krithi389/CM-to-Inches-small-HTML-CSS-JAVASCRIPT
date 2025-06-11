var inp=document.querySelector(".inp")
var cmm=document.querySelector(".cmm")

function res(){
    var val=Number(inp.value)
    var t=val/2.54

    cmm.innerHTML=t.toFixed(3)+" inches"
    inp.style["backgroundColor"]="red"
    cmm.style["color"]="orange"
    inp.style["color"]="white"


}

