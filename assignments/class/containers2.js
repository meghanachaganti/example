const togglebtn=document.getElementById("btnid");
const togglebtn1=document.getElementById("redbtnid");
const togglebtn2=document.getElementById("pinkbtnid");
const togglebtn3=document.getElementById("bluebtnid");
const togglebtn4=document.getElementById("brownbtnid");
const togglebtn5=document.getElementById("greybtnid");
const togglebtn6=document.getElementById("yellowbtnid");
const item = document.getElementsByClassName("item");

togglebtn.addEventListener("click" , () => {
     for(i=0;i<4;i++){
        item[i].classList.toggle("darkmode");
     }
});
togglebtn1.addEventListener("click" , () => {
     for(i=0;i<4;i++){
        item[i].classList.toggle("redmode");
     }
});
togglebtn2.addEventListener("click" , () => {
     for(i=0;i<4;i++){
        item[i].classList.toggle("pinkmode");
     }
});
togglebtn3.addEventListener("click" , () => {
     for(i=0;i<4;i++){
        item[i].classList.toggle("bluemode");
     }
});
togglebtn4.addEventListener("click" , () => {
     for(i=0;i<4;i++){
        item[i].classList.toggle("brownmode");
     }
});

togglebtn5.addEventListener("click" , () => {
     for(i=0;i<4;i++){
        item[i].classList.toggle("greymode");
     }
});
togglebtn6.addEventListener("click" , () => {
     for(i=0;i<4;i++){
        item[i].classList.toggle("yellowmode");
     }
});
// togglebtn.addEventListener("click" , () => {
 // document.body.classList.toggle("darkmode");
 //}); here it makes total black
    //togglebtn1.addEventListener("click" , () => {
    //document.body.classList.toggle("redmode");
    //});
    //togglebtn2.addEventListener("click" , () => {
       // document.body.classList.toggle("pinkmode");
    //});
    //togglebtn3.addEventListener("click" , () => {
        //document.body.classList.toggle("bluemode");
    //});
    //togglebtn4.addEventListener("click" , () => {
      //  document.body.classList.toggle("brownmode");
    //});
    //togglebtn5.addEventListener("click" , () => {
        //document.body.classList.toggle("greymode");
    //});
    //togglebtn6.addEventListener("click" , () => {
       // document.body.classList.toggle("yellowmode");
    //});
