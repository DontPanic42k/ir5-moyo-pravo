(()=>{var t={382:()=>{$(".myform .myform-submit").on("click",(function(t){t.preventDefault(),wrapper=$(this).parents(".myform");var e=!1,a=wrapper.find('input[name="fio"]').val(),n=wrapper.find('input[name="tel"]').val();0==a.length?(e=!0,wrapper.find('input[name="fio"]').addClass("input-error-red")):wrapper.find('input[name="fio"]').removeClass("input-error-red"),0==n.length?(e=!0,wrapper.find('input[name="tel"]').addClass("input-error-red")):wrapper.find('input[name="tel"]').removeClass("input-error-red"),0==e&&(data=wrapper.serialize(),$.post("/js/sendmail.php",data,(function(t){wrapper.css({display:"flex","align-items":"center","justify-content":"center","box-sizing":"border-box","padding-bottom":"60px",height:wrapper.height()+"px"}),wrapper.html('<div class="good-mail"><div class="mbig">Спасибо за сообщение!</div><div class="msmall">В ближайшее время мы свяжемся с Вами.</div></div>')})))}))},446:()=>{$(".page-bankruptcy-keys-tabs-buttons-item").each((function(t){$(this).attr("data-id",++t)})),$(".page-bankruptcy-keys-tabs-buttons-item:first-of-type").addClass("page-bankruptcy-keys-tabs-buttons-item_active"),$(".page-bankruptcy-keys-tabs-content-item").each((function(t){$(this).attr("data-id",++t),$(this).css("display","none"),$(this).removeClass("page-bankruptcy-keys-tabs-content-item_displaynone")})),$(".page-bankruptcy-keys-tabs-content-item:first-of-type").fadeIn(),$(".page-bankruptcy-keys-tabs-buttons-item").on("click",(function(t){t.preventDefault();var e=$(this).attr("data-id");$(".page-bankruptcy-keys-tabs-buttons-item").each((function(){$(this).removeClass("page-bankruptcy-keys-tabs-buttons-item_active")})),$(this).addClass("page-bankruptcy-keys-tabs-buttons-item_active"),$(".page-bankruptcy-keys-tabs-content-item").each((function(){$(this).fadeOut(0)})),$('.page-bankruptcy-keys-tabs-content-item[data-id="'+e+'"]').fadeIn(300)}))}},e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={exports:{}};return t[n](r,r.exports,a),r.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";a(446),a(382)})()})();
//# sourceMappingURL=main.js.map