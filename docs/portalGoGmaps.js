/* 
javascript:(function(d){var s=d.createElement("script");s.src="https://doooon.github.io/Portal-go-googleMaps/portalGoGmaps.js";d.getElementsByTagName("head")[0].appendChild(s);})(document);
*/



(function () {

try {
  var latlng=Hj.c.latLng.lat+","+Hj.c.latLng.lng; 
  var portalName = document.getElementById("portal_primary_title").innerText; 
  var str=latlng+"("+portalName+")&iwloc=A";
  console.log(str);
  if (navigator.userAgent.match(/iPhone|iPad/i)) { 
    location.href="comgooglemaps://?q="+str; 
  } else { 
    //location.href="http://maps.google.com/?q="+str;
    window.open("http://maps.google.com/?q="+str,"_blank");
  } 
  
} catch(e) { 
  console.log("no portal data");
} finally { 
} 
})(document)