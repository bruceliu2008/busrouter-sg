!function(){function a(a){this.el=a;for(var b=a.className.replace(/^\s+|\s+$/g,"").split(/\s+/),c=0;c<b.length;c++)d.call(this,b[c])}function b(a,b,c){Object.defineProperty?Object.defineProperty(a,b,{get:c}):a.__defineGetter__(b,c)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var c=Array.prototype,d=c.push,e=c.splice,f=c.join;a.prototype={add:function(a){this.contains(a)||(d.call(this,a),this.el.className=this.toString())},contains:function(a){return-1!=this.el.className.indexOf(a)},item:function(a){return this[a]||null},remove:function(a){if(this.contains(a)){for(var b=0;b<this.length&&this[b]!=a;b++);e.call(this,b,1),this.el.className=this.toString()}},toString:function(){return f.call(this," ")},toggle:function(a){return this.contains(a)?this.remove(a):this.add(a),this.contains(a)}},window.DOMTokenList=a,b(Element.prototype,"classList",function(){return new a(this)})}}(),function(a,b){"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports?module.exports=b():a.lscache=b()}(this,function(){function a(){var a="__lscachetest__",c=a;if(void 0!==n)return n;try{h(a,c),i(a),n=!0}catch(d){n=b(d)?!0:!1}return n}function b(a){return a&&"QUOTA_EXCEEDED_ERR"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name||"QuotaExceededError"===a.name?!0:!1}function c(){return void 0===o&&(o=null!=window.JSON),o}function d(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function e(a){return a+q}function f(){return Math.floor((new Date).getTime()/s)}function g(a){return localStorage.getItem(p+u+a)}function h(a,b){localStorage.removeItem(p+u+a),localStorage.setItem(p+u+a,b)}function i(a){localStorage.removeItem(p+u+a)}function j(a){for(var b=new RegExp("^"+p+d(u)+"(.*)"),c=localStorage.length-1;c>=0;--c){var f=localStorage.key(c);f=f&&f.match(b),f=f&&f[1],f&&f.indexOf(q)<0&&a(f,e(f))}}function k(a){var b=e(a);i(a),i(b)}function l(a){var b=e(a),c=g(b);if(c){var d=parseInt(c,r);if(f()>=d)return i(a),i(b),!0}}function m(a,b){v&&"console"in window&&"function"==typeof window.console.warn&&(window.console.warn("lscache - "+a),b&&window.console.warn("lscache - The error was: "+b.message))}var n,o,p="lscache-",q="-cacheexpiration",r=10,s=6e4,t=Math.floor(864e13/s),u="",v=!1,w={set:function(d,l,n){if(a()){if("string"!=typeof l){if(!c())return;try{l=JSON.stringify(l)}catch(o){return}}try{h(d,l)}catch(o){if(!b(o))return void m("Could not add item with key '"+d+"'",o);var p,q=[];j(function(a,b){var c=g(b);c=c?parseInt(c,r):t,q.push({key:a,size:(g(a)||"").length,expiration:c})}),q.sort(function(a,b){return b.expiration-a.expiration});for(var s=(l||"").length;q.length&&s>0;)p=q.pop(),m("Cache is full, removing item with key '"+d+"'"),k(p.key),s-=p.size;try{h(d,l)}catch(o){return void m("Could not add item with key '"+d+"', perhaps it's too big?",o)}}n?h(e(d),(f()+n).toString(r)):i(e(d))}},get:function(b){if(!a())return null;if(l(b))return null;var d=g(b);if(!d||!c())return d;try{return JSON.parse(d)}catch(e){return d}},remove:function(b){a()&&k(b)},supported:function(){return a()},flush:function(){a()&&j(function(a){k(a)})},flushExpired:function(){a()&&j(function(a){l(a)})},setBucket:function(a){u=a},resetBucket:function(){u=""},enableWarnings:function(a){v=a}};return w}),function(){function a(a){function d(){for(;h=k<j.length&&a>l;){var b=k++,d=j[b],f=c.call(d,1);f.push(e(b)),++l,d[0].apply(null,f)}}function e(a){return function(b,c){--l,null==n&&(null!=b?(n=b,k=m=NaN,f()):(j[a]=c,--m?h||d():f()))}}function f(){null!=n?o(n):i?o(n,j):o.apply(null,[n].concat(j))}var g,h,i,j=[],k=0,l=0,m=0,n=null,o=b;return a||(a=1/0),g={defer:function(){return n||(j.push(arguments),++m,d()),g},await:function(a){return o=a,i=!1,m||f(),g},awaitAll:function(a){return o=a,i=!0,m||f(),g}}}function b(){}var c=[].slice;a.version="1.0.7","function"==typeof define&&define.amd?define(function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.queue=a}(),function(a){var b=[],c=function(){},d={defaultPath:"/",before:c,on:c,notfound:c},e={current:null,previous:null,config:function(a){for(var b in a)a.hasOwnProperty(b)&&(d[b]=a[b]);return e},add:function(a,c,d){return a&&c&&("function"==typeof c&&(d=c,c=null),b.push({path:a,name:c,fn:d||function(){}})),e},go:function(a){return location.hash=a,e},back:function(a){return e.previous?(history.back(),e.previous=null):a&&(location.hash=a),e}},f=function(){var a=location.hash.slice(1),c=!1,f=e.current;a||(a=d.defaultPath),f&&f!=e.previous&&(e.previous=f),e.current=a;for(var g=0,h=b.length;h>g&&!c;g++){var i=b[g],j=i.path,k=i.name,l=i.fn;if("string"==typeof j)j.toLowerCase()==a.toLowerCase()&&(d.before.call(e,j,k),l.call(e),d.on.call(e,j,k),c=!0);else{var m=a.match(j);m&&(d.before.call(e,j,k,m),l.apply(e,m),d.on.call(e,j,k,m),c=!0)}}return c||d.notfound.call(e),e};e.init=function(b){return a.addEventListener("hashchange",f),f()},e.reload=f,a.ruto=e}(window);var Yokuto=function(){var a=function(a,b){if(!a||1!==a.nodeType)return!1;var c=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.oMatchesSelector||a.msMatchesSelector;return c.call(a,b)},b=function(b,c){var d=!1;do d=a(b,c);while(!d&&(b=b.parentNode)&&b.ownerDocument);return d?b:!1},c=function(a,b){if(!a)return this;b||(b=document);var c;"string"!=typeof a?(this.selector="",c=[a]):(this.selector=a,c=[].slice.call(b.querySelectorAll(a)));for(var d=this.length=c.length,e=0;d>e;e++)this[e]=c[e];return this};return c.prototype={each:function(a){for(var b=this.length,c=0;b>c;c++){var d=this[c];a.call(d,d,c)}return this},on:function(a,c,d,e){return"string"!=typeof c?(e=d,d=c,this.each(function(b){a.split(" ").forEach(function(a){b.addEventListener(a,d,e||!1)})})):this.each(function(f){a.split(" ").forEach(function(a){f.addEventListener(a,function(a){var e=b(a.target,c);e&&d.call(e,a)},e||!1)})}),this},trigger:function(a){if(!this.length)return this;var b=this[0],c=document.createEvent("MouseEvents"),d="dblclick"==a?2:1,e="contextmenu"==a?2:0;return c.initEvent(a,!0,!0,document.defaultView,d,0,0,0,0,!1,!1,!1,!1,e,b),b.dispatchEvent(c),this},find:function(a){return new c(a,this[0])},parent:function(){var a=this[0];return new c(a.parentElement||a.parentNode)},next:function(){var a=this[0];return new c(a.nextElementSibling||a.nextSibling)},prev:function(){var a=this[0];return new c(a.previousElementSibling||a.previousSibling)},addClass:function(a){return this.each(function(b){b.classList.add(a)}),this},removeClass:function(a){return this.each(function(b){b.classList.remove(a)}),this},toggleClass:function(a){return this.each(function(b){b.classList.toggle(a)}),this},html:function(a){return this.length?a?(this[0].innerHTML=a,this):this[0].innerHTML:this},attr:function(a){return this.length?this[0].getAttribute(a):""},data:function(a){return this.length?this[0].getAttribute("data-"+a):void 0},text:function(a){if(!this.length)return"";var b=this[0];return a?(b.textContent=a,this):b.textContent},focus:function(){return this.length&&this[0].focus&&this[0].focus(),this},blur:function(){return this.length&&this[0].blur&&this[0].blur(),this}},function(a){return new c(a)}}();"$"in window||(window.$=Yokuto),function(){if(window.addEventListener){var a="2",b=lscache.get("busDataVersion");if(a!=b&&localStorage&&localStorage.length&&localStorage.removeItem){for(var c=localStorage.length-1;c>=0;--c){var d=localStorage.key(c);0===d.indexOf("__amplify__bus")&&localStorage.removeItem(d)}lscache.flush(),lscache.set("busDataVersion",a)}var e,f={github:"data/2/",s3:"https://busrouter-sg.s3-ap-southeast-1.amazonaws.com/v2/"},g={busStops:"bus-stops.json",busServices:"bus-services.json",busService:"bus-services/{{no}}.json",busStopsServices:"bus-stops-services.json"},h=function(a,b,c){2==arguments.length&&(c=b,b={});var d=lscache.get(a);if(d)c(null,d);else{var e=new XMLHttpRequest,h="withCredentials"in e&&"undefined"!=typeof GZIP_ENABLED&&GZIP_ENABLED,i=f[h?"s3":"github"]+g[a.split("-")[0]];for(p in b)i=i.replace("{{"+p+"}}",b[p]);h&&(i+="?"+ +new Date),e.onload=function(){try{var b=JSON.parse(this.responseText);c(null,b),lscache.set(a,b,1440)}catch(d){c(d)}},e.onerror=e.onabort=c,e.open("get",i,!0),e.send()}},i=window.innerWidth<=640,j=[function(a){h("busStops",a)},function(a){h("busServices",a)},function(a){h("busStopsServices",a)},function(a){function b(){var b=new google.maps.LatLng(1.352083,103.819836),c=new google.maps.Map(document.getElementById("map"),{mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!0,keyboardShortcuts:!0,overviewMapControl:!0,overviewMapControlOptions:{opened:!0},zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.RIGHT_BOTTOM}});i&&(c.setOptions({overviewMapControl:!1,zoomControl:!1}),google.maps.event.addListener(c,"dragstart",function(){$("body").addClass("header-collapsed")}));var d=new google.maps.LatLngBounds(new google.maps.LatLng(1.25352193438281,103.62192147229632),new google.maps.LatLng(1.50129709375363,103.99983438993593));c.fitBounds(d);var f={url:"assets/images/bus-sprite.png",scaledSize:new google.maps.Size(78,84)};if(e={location:{url:f.url,scaledSize:f.scaledSize,size:new google.maps.Size(18,19),anchor:new google.maps.Point(9,9.5),origin:new google.maps.Point(48,0)},circle:{url:f.url,scaledSize:f.scaledSize,size:new google.maps.Size(18,19),anchor:new google.maps.Point(9,9.5),origin:new google.maps.Point(30,0)},dot:{url:f.url,scaledSize:f.scaledSize,size:new google.maps.Size(26,38),origin:new google.maps.Point(0,46)},a:{url:f.url,scaledSize:f.scaledSize,size:new google.maps.Size(26,38),origin:new google.maps.Point(26,46)},b:{url:f.url,scaledSize:f.scaledSize,size:new google.maps.Size(26,38),origin:new google.maps.Point(52,46)}},navigator.geolocation){var g=document.createElement("a");g.id="geolocation-control",g.href="#",g.innerHTML='<i class="fa fa-location-arrow icon-circle"></i>',c.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(g);var h,j=new google.maps.Marker({map:c,clickable:!1,title:"Current location",icon:e.location,cursor:"default",visible:!1,zIndex:9001}),k=new google.maps.Circle({map:c,clickable:!1,fillColor:"#00b4d2",fillOpacity:.1,strokeWeight:0,visible:!1,zIndex:9e3}),l=!1,m=function(){navigator.geolocation.clearWatch(h),l=!1,k.setVisible(!1),j.setVisible(!1),$("#geolocation-control").removeClass("active")};$("#map").on("click","#geolocation-control",function(a){if(a.preventDefault(),l){var b=j.getPosition();c.getBounds().contains(b)?m():c.panTo(b)}else{var e=!1;h=navigator.geolocation.watchPosition(function(a){l=!0;var b=a.coords,f=new google.maps.LatLng(b.latitude,b.longitude);if(k.setCenter(f),k.setRadius(b.accuracy),k.setVisible(!0),j.setPosition(f),j.setVisible(!0),!e&&d.contains(f)){c.panTo(f);var g=c.getZoom();15>g&&c.setZoom(15),e=!0}$("#geolocation-control").addClass("active")},function(a){m(),alert("Unable to get your location. Please try again.")},{enableHighAccuracy:!0,timeout:6e4,maximumAge:5e3})}})}var n=$("#bounds-warning");google.maps.event.addListener(c,"bounds_changed",function(){var a=c.getBounds();a.intersects(d)?n.removeClass("visible"):n.addClass("visible")}),$("#back-sg").on("click",function(a){a.preventDefault(),n.removeClass("visible"),c.panTo(b),setTimeout(function(){c.fitBounds(d)},300)});var o=$("#places-search-form");o.on("submit",function(a){a.preventDefault()});var p=new google.maps.places.Autocomplete(o.find("input")[0],{bounds:d,componentRestrictions:{country:"sg"}});google.maps.event.addListener(p,"place_changed",function(){$("#search").addClass("hidden");var a=p.getPlace();a.geometry&&(a.geometry.viewport?c.fitBounds(a.geometry.viewport):(c.setCenter(a.geometry.location),c.setZoom(17)))}),a(null,c)}queue().defer(function(a){var b=document.createElement("script");b.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJii3LssFIl3cw4XzTxtWqSls57rayV5I&libraries=places&callback=loadMap",document.body.appendChild(b),window.loadMap=a}).await(b)}],k=function(a,b){if(a||!b||4!=b.length)return void alert("Oops, an error occured.");var c=b[0],d=b[1],f=b[2],g=b[3],j={};c.forEach(function(a){j[a.no]=a});var k={},l={};d.services.forEach(function(a){var b=a.type;k[b]?k[b].push(a):k[b]=[a],l[a.no]=a});var m=$("#bus-services"),n="";for(type in k){var o=k[type];n+="<h2>"+d.types[type]+"</h2><ul>";for(var p=0,q=o.length;q>p;p++){var r=o[p],s=r.no;n+='<li><a href="#/services/'+s+'" id="service-'+s+'">'+s+"</a></li>"}n+="</ul>"}m.html(n);var t=[],u={},v=new google.maps.InfoWindow({maxWidth:260}),w=new google.maps.Polyline({clickable:!1,strokeColor:"#f01b48",strokeWeight:5,strokeOpacity:.5}),x=function(){t.forEach(function(a){a.setMap(null),google.maps.event.clearInstanceListeners(a)}),t=[];for(var a in y){var b=y[a];b.setMap(null),google.maps.event.clearInstanceListeners(b)}y={};for(var c in u){var d=u[c];d.setMap(null),google.maps.event.clearInstanceListeners(d)}u={},w.setMap(null),v.close()};google.maps.event.addListener(g,"markerClick",function(a){var b=a.marker,c=a.stop,d=a.currentService,e=a.hideShowRoutesLink,h=j[c],i=h.name,k=f[c],l='<div class="infowindow"><h1>'+i+'&nbsp;<span class="tag">'+c+"</span></h1>";k.forEach(function(a){l+=a==d?'<span class="infoservice">'+a+"</span> ":'<a href="#/services/'+a+'" class="infoservice">'+a+"</a> "}),l+='<div class="infofooter">',l+='<a href="bus-arrival/#'+c+'" target="_blank" class="show-arrivals"><i class="fa fa-clock-o fa-fw"></i> Show bus arrival times here</a>',k.length>1&&!e&&(l+='<a href="#/stops/'+c+'" class="show-routes"><i class="fa fa-code-fork fa-fw"></i> Show all routes passing here</a>'),l+="</div></div>",v.setContent(l),v.open(g,b)});var y={};google.maps.event.addListener(g,"idle",function(){if("home"==C){var a=$("#bus-stops"),b=g.getZoom();if(b>=15){$("#bus-stops-section").removeClass("hidden");var d=g.getBounds();for(var f in y){var h=y[f];if(!d.contains(h.getPosition())){h.setMap(null),y[f]=void 0;try{delete y[f]}catch(i){}}}var j=[];if(c.forEach(function(a){var b=a.no;if(!y[b]){var c=new google.maps.LatLng(a.lat,a.lng);if(!d.contains(c))return;var f=new google.maps.Marker({position:c,map:g,title:a.name,icon:e.circle});google.maps.event.addListener(f,"click",function(){google.maps.event.trigger(g,"markerClick",{marker:f,stop:b})}),y[b]=f}j.push({no:b,stop:a})}),j.length){var k="<ul>";j.sort(function(a,b){var c=a.stop.name,d=b.stop.name;return d>c?-1:c>d?1:0}),j.forEach(function(a){var b=a.no,c=a.stop.name;k+='<li><a class="stop" id="stop-'+b+'"><span class="tag">'+b+"</span> "+c+"</a></li>"}),k+="</ul>",a.html(k)}else a.html("<p>Try zoom in or pan around to see bus stops on the map.</p>")}else{for(var f in y)y[f].setMap(null);y=[],a.html("<p>Try zoom in or pan around to see bus stops on the map.</p>")}}}),$("#bus-stops").on("click","li a",function(a){a.preventDefault();var b=$(this).find(".tag").text(),c=y[b],d=c.getPosition();g.panTo(d),google.maps.event.trigger(c,"click")}),$("#bus-stops-section").on("click","a.close",function(a){a.preventDefault(),$("#bus-stops-section").addClass("hidden")});var z,A=$("#bus-routes"),B=document.title,C="home";ruto.config({notfound:function(){ruto.go("/")}}).add("/",function(){C="home",document.title=B,$("section.extra").addClass("hidden"),$("body").removeClass("header-collapsed"),x(),setTimeout(function(){m.find("a.selected").removeClass("selected")},400)}).add(/^\/services\/(\w+)\/?(\d)?$/i,function(a,b,c){C="services",document.title="Bus service "+b+" - "+B,c||(c=1),m.find("a.selected").removeClass("selected"),$("#service-"+b).addClass("selected"),x(),$busServicesSection=$("#bus-services-section").addClass("loading"),h("busService-"+b,{no:b},function(a,d){if($busServicesSection.removeClass("loading"),d){for(var h=d[c],i=h.route,k=h.stops,m=[],n=0,o=i.length;o>n;n++){var p=i[n],q=p.split(","),r=new google.maps.LatLng(parseFloat(q[0],10),parseFloat(q[1],10));m.push(r)}w.setPath(m),w.setMap(g);var s='<div class="tab-bar">';d[2]&&d[2].route&&d[2].route.length&&(s+='<a href="#/services/'+b+'" class="tab '+(1==c?"selected":"")+'">Route 1</a><a href="#/services/'+b+'/2" class="tab '+(2==c?"selected":"")+'">Route 2</a>');var u=l[b].operator;if(u){var v="sbs"==u?"http://www.sbstransit.com.sg/journeyplan/servicedetails.aspx?serviceno=":"http://www.transitlink.com.sg/eservice/eguide/service_route.php?service=";s+='<a href="'+v+b+'" target="_blank" class="details"><i class="fa fa-list-alt"></i> Bus schedules</a>'}s+="</div>",s+="<ul>";var x=!1,o=k.length,y=new google.maps.LatLngBounds;k.forEach(function(a,c){var d=j[a],h=d.name,i=(f[a],e.circle),l=o-1,m="stop";if(0==c){var n=k[l],p=j[n];h==p.name?(x=!0,i=e.dot,m="stop-dot"):(i=e.a,m="stop-a")}else c==l&&(x?(i=e.dot,m="stop-dot"):(i=e.b,m="stop-b"));if(c==l&&x)t.push(t[0]);else{var q=new google.maps.LatLng(d.lat,d.lng),r=new google.maps.Marker({position:q,map:g,icon:i,title:h,animation:0==c||c==l?google.maps.Animation.DROP:null,zIndex:0==c||c==l?5:1});google.maps.event.addListener(r,"click",function(){google.maps.event.trigger(g,"markerClick",{marker:r,stop:a,currentService:b}),A.find("li a.selected").removeClass("selected"),$(".stop-"+a+'[data-index="'+c+'"]').addClass("selected").focus()}),t.push(r),y.extend(q)}s+='<li><a tabindex="0" href="#" class="'+m+" stop-"+a+'" data-index="'+c+'"><i></i><span class="tag">'+a+"</span> "+h+"</a></li>"}),A.html(s+"</ul>"),A[0].scrollTop=0,$("#bus-routes-section h1 b").text(b),$("section.extra").addClass("hidden"),$("#bus-routes-section").removeClass("hidden"),b==z&&y.contains(g.getCenter())||(z=b,g.panTo(y.getCenter()),setTimeout(function(){g.fitBounds(y)},400)),lscache.set("busService-"+b,d,1440)}})}).add(/^\/stops\/(\w+)$/i,function(a,b){C="stops",document.title="Bus stop "+b+" - "+B,x(),$("#bus-stop-routes-section").removeClass("hidden").addClass("loading").find("h1 b").text(b);var c=j[b],d=new google.maps.LatLng(c.lat,c.lng),i=new google.maps.Marker({position:d,map:g,icon:e.dot,title:c.name,animation:google.maps.Animation.DROP});google.maps.event.addListener(i,"click",function(){google.maps.event.trigger(g,"markerClick",{marker:i,stop:b,hideShowRoutesLink:!0})}),t.push(i);var k=f[b],m=new google.maps.LatLngBounds,n="",o=function(a,c){var d=a[1],e=d.stops;(-1==e.indexOf(b)||e[e.length-1]==b)&&(d=a[2],e=d.stops,-1==e.indexOf(b)&&(d=a[1],e=d.stops)),e.forEach(function(a){var b=j[a];m.extend(new google.maps.LatLng(b.lat,b.lng))});for(var f=d.route,h=[],i=0,k=f.length;k>i;i++){var o=f[i],p=o.split(","),q=new google.maps.LatLng(parseFloat(p[0],10),parseFloat(p[1],10));h.push(q)}var r=new google.maps.Polyline({strokeColor:"#f01b48",strokeWeight:5,strokeOpacity:.4,path:h,map:g});google.maps.event.addListener(r,"mouseover",function(){$("#stop-service-"+c).trigger("mouseover").focus()}),google.maps.event.addListener(r,"mouseout",function(){$("#stop-service-"+c).trigger("mouseout").blur()}),google.maps.event.addListener(r,"click",function(){location.href=$("#stop-service-"+c).attr("href")}),u[c]=r,n+='<li><a href="#/services/'+c+'" id="stop-service-'+c+'"><span class="tag">'+c+"</span> "+l[c].name+"</a></li>"},p=queue();k.forEach(function(a){p.defer(function(b){h("busService-"+a,{no:a},function(c,d){o(d,a),b()})})}),p.awaitAll(function(){g.fitBounds(m),$("#bus-stop-routes-section").removeClass("loading"),$("#bus-stop-routes").html("<ul>"+n+"</ul>")})}).init(),$("#bus-routes").on("click","li a",function(a){a.preventDefault();var b=$(this).data("index"),c=t[b];if(c){var d=c.getPosition();g.getZoom()<15&&g.setZoom(15),g.panTo(d),google.maps.event.trigger(c,"click"),i&&$("#header-sidebar").trigger("click")}}),$("#bus-stop-routes").on("mouseover touchstart","li a",function(){var a=$(this).find(".tag").text();for(var b in u){var c=u[b];b==a?c.setOptions({strokeOpacity:.8}):c.setOptions({strokeOpacity:.1})}}).on("mouseout touchend touchcancel","li a",function(){for(var a in u)u[a].setOptions({strokeOpacity:.4})}),$(document).on("keyup",function(a){if(/services\/.+/i.test(location.hash)&&(!a.target.tagName||"input"!=a.target.tagName.toLowerCase())){var b=a.keyCode;switch(b){case 39:case 40:var c=A.find("li a.selected");if(!c.length)return;c.removeClass("selected");var d=c.parent().next();if(!d.length)return;d.find("a").trigger("click");break;case 37:case 38:var c=A.find("li a.selected");if(!c.length)return;c.removeClass("selected");var e=c.parent().prev();if(!e.length)return;e.find("a").trigger("click")}}}),$("#sidebar").on("click",function(a){var b=a.target,c=b.tagName.toLowerCase();("h1"==c||"b"==c&&"h1"==b.parentNode.tagName.toLowerCase())&&(a.preventDefault(),$("body").toggleClass("sidebar-collapsed"),setTimeout(function(){google.maps.event.trigger(g,"resize")},300))})};queue().defer(function(a){var b=document.createElement("script");b.src="https://busrouter-sg.s3-ap-southeast-1.amazonaws.com/js/gzip-enabled.js",b.onload=function(){var b="undefined"!=typeof GZIP_ENABLED&&GZIP_ENABLED;ga("send","event","features","gzip",b?"enabled":"disabled"),a()},document.body.appendChild(b)}).await(function(){var a=queue();j.forEach(function(b){a.defer(b)}),a.awaitAll(k)}),$("#logo").on("click",function(){$("body").toggleClass("header-collapsed")}),$("#header-about").on("click",function(){$("#about").removeClass("hidden")}),$("#header-search").on("click",function(){$("#search").removeClass("hidden"),$("#places-search-form input").focus()}),$("#about .close").on("click",function(){$("#about").addClass("hidden")}),$("#search .close").on("click",function(){$("#search").addClass("hidden")}),$("#map").on("click","a.show-arrivals",function(a){a.preventDefault();var b=320,c=480,d=((screen.availHeight||screen.height)-c)/2,e=(screen.width-b)/2;window.open(this.href,"busArrivals"+new Date,"width="+b+",height="+c+",menubar=0,toolbar=0,top="+d+",left="+e)}),$(".share-buttons a").on("click",function(a){var b=a.target;if(b.href){a.preventDefault();var c=500,d=300,e=((screen.availHeight||screen.height)-d)/2,f=(screen.width-c)/2;window.open(b.href,"window-"+Math.random(),"width="+c+",height="+d+",menubar=0,toolbar=0,top="+e+",left="+f)}})}}();
//# sourceMappingURL=scripts.js.map