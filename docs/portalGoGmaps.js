/* 
javascript:(function(d){var s=d.createElement("script");s.src="https://doooon.github.io/Portal-go-googleMaps/portalGoGmaps.js";d.getElementsByTagName("head")[0].appendChild(s);})(document);
https://doooon.github.io/Portal-go-googleMaps/portalGoGmaps.js

*/



(function () {
  
  var latlng="";
  var portalWindow = document.getElementById("portal_info_windows");
  console.log("portalWindow: "+portalWindow);
  // googleMapマークから現在地を取得
  var url_default=document.getElementById("map_canvas").getElementsByTagName("a")[0];
  console.log(url_iOS);    
  // https://maps.google.com/maps?ll=31.598416,130.568321&z=19&t=m&hl=ja-JP&gl=US&mapclient=apiv3
  var url_iOS=url_default.replace(/https:\/\/maps\.google\.com\/maps\?ll=/i, "comgooglemaps:\/\/?center=");

try {
  
  if (portalWindow==null) {
    
    console.log("no portal_info_windows");
    
    if (navigator.userAgent.match(/iPhone|iPad/i)) { 
      console.log(url_iOS);    
      location.href=url_iOS;
    } else { 
      console.log(url_default);    
      location.href=url_default;
    }

  } else {
    
    console.log("get portal_info_windows");
    
    var lat="";
    var lng="";

    latlng=Hj.c.latLng.lat+","+Hj.c.latLng.lng;
    // var portalName = encodeURIComponent(document.getElementById("portal_primary_title").innerText);
    console.log("latlng: "+latlng);
    
    location.href="http://maps.google.com/?q="+latlng;
    if (navigator.userAgent.match(/iPhone|iPad/i)) { 
      console.log("comgooglemaps://?q="+latlng);
      
      location.href="comgooglemaps://?q="+latlng;
      location.href="http://maps.google.com/?q="+latlng;
    } else { 
      console.log("http://maps.google.com/?q="+latlng);    
      
      location.href="http://maps.google.com/?q="+latlng;
    } 
    
  }
  
} catch(e) { 
  
  console.log("no portal data");
} finally { 
}


})(document)
