/* 
javascript:(function(d){var s=d.createElement("script");s.src="https://doooon.github.io/Portal-go-googleMaps/portalGoGmaps.js";d.getElementsByTagName("head")[0].appendChild(s);})(document);
*/



(function () {
  
  var latlng="";
  var portalWindow = document.getElementById("portal_info_windows");
  console.log("portalWindow: "+portalWindow);
  console.log("document.cookie: "+document.cookie);

try {
  if (portalWindow==null) {
    var str="";
    var lat="";
    var lng="";
    var cookies = document.cookie.split(/;/);
    for (var i in cookies) {
      cookies[i]=cookies[i].split(/=/);
      //console.log(cookies[i][0]+": "+cookies[i][1]);
      if (cookies[i][0].match("ingress.intelmap.lat")) lat=cookies[i][1];
      if (cookies[i][0].match("ingress.intelmap.lng")) lng=cookies[i][1];
    }
    latlng=lat+","+lng;
    str="ll="+latlng;
    console.log(latlng);
  } else {
    latlng=Hj.c.latLng.lat+","+Hj.c.latLng.lng;
    str="q="+latlng;
    // var portalName = encodeURIComponent(document.getElementById("portal_primary_title").innerText);
    console.log(latlng);    
  }
  
  if (navigator.userAgent.match(/iPhone|iPad/i)) { 
    location.href="comgooglemaps://"+str;
    console.log(location.href="comgooglemaps://"+str);    
  } else { 
    location.href="http://maps.google.com/?"+str;
    console.log(location.href="http://maps.google.com/?"+str);    
  } 

} catch(e) { 
  console.log("no portal data");
} finally { 
} 
})(document)
