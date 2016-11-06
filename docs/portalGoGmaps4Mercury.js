/* 
javascript:(function(d){var s=d.createElement("script");s.src="https://doooon.github.io/Portal-go-googleMaps/portalGoGmaps4Mercury.js";d.getElementsByTagName("head")[0].appendChild(s);})(document);
https://doooon.github.io/Portal-go-googleMaps/portalGoGmaps4Mercury.js
iOSブラウザ Mercury Browser 用 （MercuryはURL schemeが効かない。さらにUserAgentがSafariと一緒で認識できない。）
*/



(function () {
  
  var latlng="";
  var portalWindow = document.getElementById("portal_info_windows");
  console.log("portalWindow: "+portalWindow);
  // googleMapマークから現在地を取得
  var url_default=document.getElementById("map_canvas").getElementsByTagName("a")[0].getAttributeNode("href").value;
  console.log(url_default);    

try {
  
  if (portalWindow==null) {
    
    console.log("no portal_info_windows");
    
    console.log(url_default);    
    location.href=url_default;

  } else {
    
    console.log("get portal_info_windows");
    
    var lat="";
    var lng="";

    latlng=Hj.c.latLng.lat+","+Hj.c.latLng.lng;
    // var portalName = encodeURIComponent(document.getElementById("portal_primary_title").innerText);
    console.log("latlng: "+latlng);
    
    console.log("http://maps.google.com/?q="+latlng);    
    location.href="http://maps.google.com/?q="+latlng;
    
  }
  
} catch(e) { 
  
  console.log("no portal data");
} finally { 
}


})(document)
