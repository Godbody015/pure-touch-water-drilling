(function(){
var bg=document.getElementById("bg"),ln=document.getElementById("links");
bg.onclick=function(){var o=ln.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
var rv=document.querySelectorAll(".rv"),rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(rm||!("IntersectionObserver"in window)){rv.forEach(function(e){e.classList.add("in")})}
else{var o=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");o.unobserve(x.target)}})},{threshold:.12});
rv.forEach(function(e,i){e.style.transitionDelay=(i%4)*80+"ms";o.observe(e)})}
var f=document.getElementById("f"),wa=document.querySelector(".wa").href.split("/").pop();
if(f)f.onsubmit=function(v){v.preventDefault();var t="Hi PURE-TOUCH, I would like a quote.\nName: "+f.n.value+"\nPhone: "+f.c.value+"\nSite: "+f.t.value+"\nService: "+f.s.value+"\n"+f.m.value;
window.open("https://wa.me/"+wa+"?text="+encodeURIComponent(t),"_blank")};
})();
