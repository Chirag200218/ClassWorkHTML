let obj = document.getElementsByClassName("element");

for(let i=0;i<obj.length;i++){
    console.log(obj[i]);
    if(i%2){
        obj[i].style.borderLeft = "2px solid red";
        obj[i].style.borderRight = "2px solid red";
    }else{
        obj[i].style.borderBottom = "2px solid black";
        obj[i].style.borderTop = "2px solid black";
    }
}