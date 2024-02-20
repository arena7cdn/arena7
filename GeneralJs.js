function setFooterHeight(_height)
{
const interval = setInterval(function() {

if(document.querySelector('app-footer') !==null  && document.querySelector('app-footer') !== undefined)
{
if(document.querySelector('app-footer').childNodes.length >=1)
{clearInterval(interval); // thanks @Luca D'Amico
console.log('desktop mounted');

if(window.screen.width >= 1366)
{
document.querySelector('app-footer').childNodes[0].childNodes[0].height="550px";
}
else 
{
 document.querySelector('app-footer').childNodes[0].childNodes[0].height="650px";
}

clearInterval(interval); // thanks @Luca D'Amico




}

}
else if(document.querySelector('app-footer-mobile') !== null  && document.querySelector('app-footer-mobile') !== undefined)
{

if(document.querySelector('app-footer-mobile').childNodes.length >=1)
{clearInterval(interval); // thanks @Luca D'Amico
console.log('mobile mounted');
document.querySelector('app-footer-mobile').childNodes[0].childNodes[0].height="600px";

}

}




 }, 500);
}


window.onload = function () {
document.title = "Arena7.bet  | Página Inicial";
fbq('track', 'PageView');

if(window.location.href==="https://arena7.bet/sports/mobile/deposit/1")
{
document.querySelector('.popup-box').style.width = "350px";
document.querySelector('.popup_w').style.width = "350px";
}
if(window.location.href==="https://arena7.bet/sports/desktop/deposit/1")
{
document.querySelector('.popup-box').style.width = "500px";
document.querySelector('.popup_w').style.width = "500px";
}






var cc_ = 0 ;
var lastDepositValue ;
function myTimer() {

if(window.location.href.includes("https://arena7.bet/sports/mobile/deposit/1") || window.location.href.includes("https://arena7.bet/sports/desktop/deposit/1") || window.location.href.includes("https://arena7.bet/sports/desktop/deposit") || window.location.href.includes("https://arena7.bet/sports/mobile/deposit"))
{
	
	if(document.getElementsByClassName('input ng-dirty').length>0)
	{	
		
		  lastDepositValue = document.getElementsByClassName('input ng-dirty')[0].value.replace("R$ ","").replace(",",".");

		
	}
	
	
	
 if(document.getElementsByClassName('BoxpixQrCode') .length > 0)
{

const urlParams = new URLSearchParams(window.location.search);
if(urlParams!==null)
{
const myParam = urlParams.get('trace');
if(myParam!==null)
{

    var JSOB = JSON.parse(atob(myParam))
 
JSOB.valor=lastDepositValue;
JSOB.contato=JSON.parse(atob(atob(localStorage.getItem("YWNjZXNzX3Rva2Vu")).replace('"', "").split('.')[1])).unique_name;

	  fetch("https://redirect.arena7.bet/mail/trace?data="+btoa(JSON.stringify(JSOB)), {
      method: "GET" // default, so we can ignore
  })

}

}








clearInterval(timer);
}
}


if(cc_ >= 30)
{
clearInterval(timer);
}

cc_++;
}

var timer = setInterval(myTimer, 1000);




if(window.location.href==="https://arena7.bet/sports/mobile/deposit/1" || window.location.href==="https://arena7.bet/sports/desktop/deposit/1")
{
fbq('track', 'Purchase');

console.log('enable pixel');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.getElementById("btn_cad_Close");
 
 
 
popupContainer.onclick = () => {
      popupContainer.classList.remove('active');
}

closeBtn.onclick = () => {
    popupContainer.classList.remove('active');
}
 popupContainer.classList.add('active');

}



const urlParams = new URLSearchParams(window.location.search);
if(urlParams!==null)
{
const myParam = urlParams.get('trace');
if(myParam!==null)
{
gtag('event', 'email_open', {'user_mail': atob(myParam),});
}

}


        };



