const btn = document.getElementById("toggle-btn");
const list = document.getElementById("lists");
const nh = document.getElementById("nav-height");
const x = window.matchMedia("(max-width: 1023px)")

function changeImg(x) {
    if (x.matches) { 
      document.getElementById("img1").src="img/Pickle_s-2022.5.11.jpg";
      document.getElementById("img2").src="img/Karen-S2.jpg";
      document.getElementById("img3").src="img/10_Pro_S.jpg";
    } else {
        document.getElementById("img1").src="img/10R.jpg";
        document.getElementById("img2").src="img/N_2T.jpg";
        document.getElementById("img3").src="img/10_Pro.jpg";
    }
  }
  
  changeImg(x);
  x.addListener(changeImg);

btn.addEventListener("click", ()=> {
    const visibility = list.getAttribute("data-value");
    
    if (visibility === "false"){
        list.style.transform=('translateX(0%)');
        list.setAttribute("data-value",true);
        
    }
    else{
        list.style.transform=('translateX(-120%)');
        list.setAttribute("data-value",false);
        
    }
})