/* 
javascript:(function(d){var s=d.createElement("script");s.src="https://doooon.github.io/Portal-go-googleMaps/portalGoGmaps.js";d.getElementsByTagName("head")[0].appendChild(s);})(document);

http://maps.google.com/?q=%E8%A5%BF%E9%83%B7%E9%9A%86%E7%9B%9B%E5%83%8F@31.595286,130.553541
http://maps.google.com/?q=31.595286,130.553541+(%E8%A5%BF%E9%83%B7%E9%9A%86%E7%9B%9B%E5%83%8F)
http://maps.google.com/?q=%E8%A5%BF%E9%83%B7%E9%9A%86%E7%9B%9B%E5%83%8F@31.595286,130.553541&ie=UTF8
http://maps.google.com/?daddr=31.595286,130.553541+(testtest)&ie=UTF8
*/



(function () {

  var portalWindow = document.getElementById("portal_info_windows");
  console.log("portalWindow: "+portalWindow);
  if (portalWindow==null) {
    var cookies = document.cookie.split(/;/);
    for (var i in cookies) {
      cookies[i]=cookies[i].split(/=/);
      console.log("cookies["+i+"][0]: "+cookies[i][1]);   
    }
  }

try {
  var latlng=Hj.c.latLng.lat+","+Hj.c.latLng.lng; 
  var portalName = document.getElementById("portal_primary_title").innerText; 

  // var str=encodeURIComponent(portalName);
  console.log(latlng);
  if (navigator.userAgent.match(/iPhone|iPad/i)) { 
    location.href="comgooglemaps://q="+latlng; 
  } else { 
    location.href="http://maps.google.com/?q="+latlng;
  } 
  
} catch(e) { 
  console.log("no portal data");
} finally { 
} 
})(document)
