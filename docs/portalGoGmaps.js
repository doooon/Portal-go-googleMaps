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



(function () {

try {
  var latlng=Hj.c.latLng.lat+","+Hj.c.latLng.lng; 
  var portalName = document.getElementById("portal_primary_title").innerText; 
  var str=latlng+"+("+portalName+")&iwloc=A";
  console.log(str);
  if (navigator.userAgent.match(/iPhone|iPad/i)) { 
    location.href="comgooglemaps://?q="+str; 
  } else { 
    location.href="http://maps.google.com/?q="+str;
  } 
  
} catch(e) { 
  console.log("no portal data");
} finally { 
} 
})(document)