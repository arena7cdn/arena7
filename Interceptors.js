// Closure to contain variables and ! to avoid possible concatenation issues with other codes.
!function(){
  XMLHttpRequest.prototype._original_send = XMLHttpRequest.prototype.send;
  let interceptor_send = function(data){

 if(this.__zone_symbol__xhrURL==="/api/user/create")
{
  localStorage.setItem("userCad", data);
}

  this._original_send(data);
};
XMLHttpRequest.prototype.send = interceptor_send;
}();




let oldXHROpen = window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
 // do something with the method, url and etc.
 this.addEventListener('load', function() {
try {
 if(url==="/api/financial/requestDeposit" && this.status===200)
{
var ResponseData=JSON.parse(this.responseText);

if(ResponseData.status===0)
{

//console.log(document.getElementsByClassName('input ng-dirty')[0].value.replace("R$ ","").replace(",","."));
 fbq('track', 'AddToCart');
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
else if(url==="/api/user/create" && this.status===200)
{
var ResponseData=JSON.parse(this.responseText);
  console.log(ResponseData);
if(ResponseData.status===0)
{
  var UserData=JSON.parse(localStorage.getItem("userCad"));  
var _Dados = { 
"Nome":UserData.name,
  "Email":UserData.email,
   "Telefone":UserData.phoneNumber
   };

  fetch("https://redirect.arena7.bet/api/pixel/CADActive?data="+btoa(JSON.stringify(_Dados)), {
      method: "GET" // default, so we can ignore
  });
localStorage.setItem("userCad", "");
}
}




} catch ({ name, message }) {

}
 }
 );
               
 return oldXHROpen.apply(this, arguments);
}
