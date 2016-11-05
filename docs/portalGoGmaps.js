/* 
javascript:
  (
    function(){ 
      // ---------
      
      
      // -------
    } 
  )(document);

javascript:(function(d){var s=d.createElement("script");s.src="https://doooon.github.io/Portal-go-googleMaps/portalGoGmaps.js";d.getElementsByTagName("head")[0].appendChild(s);})(document);
javascript:(function(d){var s=d.createElement("script");s.src="file:///Users/sakodon/Documents/%20gitHub/gitHub%20doooon/Portal-go-googleMaps/docs/portalGoGmaps.js";d.getElementsByTagName("head")[0].appendChild(s);})(document);


################################### 
ポータルが選択されていなかったら画面の中心をGmapの中心へ
ポータルが選択されていたらGmapのドライブモードへ
目的地 daddr=
directionsmode:移動手段です。 driving、transit、bicycling、walking

*/



function PortalDetail(){
  return Hj
}

function PortalDetail2(){
  return Hj.c.latLng
}

function GetCookie(cookieName,separeter){ 
  var cookieStr = document.cookie;
  cookieStr = cookieStr.substring(
                cookieStr.search(cookieName) + cookieName.length, 
                cookieStr.indexOf(
                  separeter, 
                  cookieStr.search(cookieName)
                )
              )
  return cookieStr; 
}

(function () {
var latlng=""; 
var ok=true; 
var detail=false; 
var portalName=""; 

try {
  if ( PortalDetail2() == undefined ){ 
    detail=false; 
  } else { 
    detail=true; 
    portalName = document.getElementById("portal_primary_title").innerText; 
  } 
  ok=true; 
  
} catch(e) { 
  ok=false;
  
} finally { 
  if(detail==false || ok == false){ 
    latlng=GetCookie("ingress.intelmap.lat=",";")+","+GetCookie("ingress.intelmap.lng=",";"); 
  }else{ 
    latlng=PortalDetail2().lat+","+PortalDetail2().lng; 
  } 
  if (navigator.userAgent.match(/iPhone|iPad/i)) { 
    location.href="comgooglemaps://?q="+latlng; 
  } else { 
    location.href="http://maps.google.com/?q="+latlng; 
  } 
} 
})(document)