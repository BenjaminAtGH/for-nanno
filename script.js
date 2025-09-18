
const btnPos = document.getElementById("boxDrop");
const toglBtn = document.getElementById("myBtn")
toglBtn.addEventListener("click", animate1);
const bodyBase = document.getElementById("body2")

let step = 0;
btnPos.style.transform = 'translateY(0px)';
btnPos.style.color = 'var(--pineGreen)';
btnPos.addEventListener("click", nextpage);
bodyBase.style.background = 'var(--gradientBG2)';

    
function animate1(){
    step++;
    btnPos.disabled = true;
    if(step ===1){
        btnPos.style.transform = 'translateY(15vh) rotate(-5deg)'
        toglBtn.textContent = "Tekan lagi";
    }else if(step ===2){
        btnPos.style.transform = 'translateY(20vh) rotate(20deg)';
        toglBtn.textContent = "lagi";
    }else if(step ===3){
        btnPos.style.transform = 'translateY(30vh)';
        btnPos.style.color = 'var(--peachDust)';
        btnPos.disabled = false;
        toglBtn.textContent = "";
        toglBtn.style.display = "none";
        step =0;
    }
   
}
function darkmode(){
    

}
function nextpage(){
    window.location.href = "nanno.html";
    bodyBase.style.background = 'var(--gradientBG1)';
}