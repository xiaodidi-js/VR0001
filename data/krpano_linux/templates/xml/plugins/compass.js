/* krpano 1.19-pr5 compass plugin (build 2016-05-24) */
var krpanoplugin=function(){function f(b){var h=d?top.orientation:window.orientation;b=b.webkitCompassHeading;var e=!1;void 0===b?window.removeEventListener("deviceorientation",f):(isNaN(b)&&(b=0),b+=h,b!=g&&(g=a.heading,a.heading=b,e=!0),0==a.available&&(a.available=!0,null!=a.onavailability&&c.call(a.onavailability,a),null!=a.onavailable&&c.call(a.onavailable,a)),e&&null!=a.onchange&&c.call(a.onchange,a))}var c=null,a=null,d=!1,g=Number.NaN;this.registerplugin=function(b,g,e){c=b;a=e;if("1.0.8.14">
c.version||"2011-03-30">c.build)c.trace(3,"compass plugin - too old krpano version (min. 1.0.8.14)");else{d=c._have_top_access;if(void 0===d){d=!1;try{top&&top.document&&(d=!0)}catch(k){}}a.registerattribute("available",!1);a.registerattribute("heading",0);a.registerattribute("onavailability",null);a.registerattribute("onavailable",null);a.registerattribute("onchange",null);window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",f)}};this.unloadplugin=function(){window.removeEventListener("deviceorientation",
f);c=a=null}};
