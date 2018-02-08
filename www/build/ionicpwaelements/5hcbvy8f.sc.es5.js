/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=o[2&r[0]?"return":r[0]?"throw":"next"])&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[0,i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};ionicpwaelements.loadBundle("5hcbvy8f",["exports"],function(t){var e=window.ionicpwaelements.h,n=(window.ionicpwaelements.Context,function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})}),o=function(){function t(){this.facingMode="user",this.showShutterOverlay=!1,this.flashIndex=0,this.hasMultipleCameras=!1,this.hasFlash=!1,this.flashModes=[]}return t.prototype.componentDidLoad=function(){return n(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return this.isServer?[2]:(this.defaultConstraints={video:{facingMode:this.facingMode}},[4,this.queryDevices()]);case 1:return t.sent(),[4,this.initCamera()];case 2:return t.sent(),[2]}})})},t.prototype.componentDidUnload=function(){this.stopStream(),this.photoSrc&&URL.revokeObjectURL(this.photoSrc)},t.prototype.hasImageCapture=function(){return"ImageCapture"in window},t.prototype.queryDevices=function(){return n(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,navigator.mediaDevices.enumerateDevices()];case 1:return t=e.sent(),this.hasMultipleCameras=t.filter(function(t){return"videoinput"==t.kind}).length>1,[2]}})})},t.prototype.initCamera=function(t){return n(this,void 0,void 0,function(){var e,n;return __generator(this,function(o){switch(o.label){case 0:console.log("Initializing",t),t||(t=this.defaultConstraints),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,navigator.mediaDevices.getUserMedia(Object.assign({video:!0,audio:!1},t))];case 2:return e=o.sent(),this.initStream(e),[3,4];case 3:return n=o.sent(),console.error(n),[3,4];case 4:return[2]}})})},t.prototype.initStream=function(t){return n(this,void 0,void 0,function(){return __generator(this,function(e){return this.stream=t,this.videoElement.srcObject=t,this.hasImageCapture()&&(this.imageCapture=new window.ImageCapture(t.getVideoTracks()[0]),this.initPhotoCapabilities(this.imageCapture)),[2]})})},t.prototype.initPhotoCapabilities=function(t){return n(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return[4,t.getPhotoCapabilities()];case 1:return(e=n.sent()).fillLightMode.length&&(this.flashModes=e.fillLightMode.map(function(t){return t})),[2]}})})},t.prototype.stopStream=function(){this.stream&&this.stream.getTracks().forEach(function(t){return t.stop()})},t.prototype.capture=function(){return n(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:if(!this.hasImageCapture())return[3,5];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,this.imageCapture.takePhoto()];case 2:return t=n.sent(),[4,this.flashScreen()];case 3:return n.sent(),this.promptAccept(t),[3,5];case 4:return e=n.sent(),console.error("Unable to take photo!",e),[3,5];case 5:return[2]}})})},t.prototype.promptAccept=function(t){return n(this,void 0,void 0,function(){return __generator(this,function(e){return this.photo=t,this.photoSrc=URL.createObjectURL(t),[2]})})},t.prototype.rotate=function(){this.stopStream();var t=this.stream&&this.stream.getTracks()[0];if(t){var e=t.getConstraints(),n=e.facingMode;n||(n=(e=t.getCapabilities()).facingMode[0]),"environment"===n?this.initCamera({video:{facingMode:"user"}}):this.initCamera({video:{facingMode:"environment"}})}},t.prototype.setFlashMode=function(t){console.log("New flash mode: ",t)},t.prototype.cycleFlash=function(){this.flashIndex=this.flashIndex+1%this.flashModes.length,this.setFlashMode(this.flashModes[this.flashIndex])},t.prototype.flashScreen=function(){return n(this,void 0,void 0,function(){var t=this;return __generator(this,function(e){return[2,new Promise(function(e,n){t.showShutterOverlay=!0,setTimeout(function(){t.showShutterOverlay=!1,e()},100)})]})})},t.prototype.handleShutterClick=function(t){console.log(),this.capture()},t.prototype.handleRotateClick=function(t){this.rotate()},t.prototype.handleClose=function(t){this.onPhoto.emit(null)},t.prototype.handleFlashClick=function(t){this.cycleFlash()},t.prototype.handleCancelPhoto=function(t){this.photo=null},t.prototype.handleAcceptPhoto=function(t){this.onPhoto.emit(this.photo)},t.prototype.render=function(){var t=this;return e("div",{class:"camera-wrapper"},e("div",{class:"camera-header"},e("section",{class:"items"},e("div",{class:"item close",onClick:function(e){return t.handleClose(e)}}),e("div",{class:"item flash",onClick:function(e){return t.handleFlashClick(e)}}))),this.photo&&e("div",{class:"accept"},e("div",{class:"accept-image",style:{backgroundImage:"url("+this.photoSrc+")"}})),e("div",{class:"camera-video",style:{display:this.photo?"none":""}},this.showShutterOverlay&&e("div",{class:"shutter-overlay"}),this.hasImageCapture()?e("video",{ref:function(e){return t.videoElement=e},autoplay:!0,playsinline:!0}):e("canvas",{ref:function(e){return t.canvasElement=e},width:"100%",height:"100%"})),e("div",{class:"camera-footer"},this.photo?e("section",{class:"items"},e("div",{class:"item accept-cancel",onClick:function(e){return t.handleCancelPhoto(e)}}),e("div",{class:"item accept-use",onClick:function(e){return t.handleAcceptPhoto(e)}})):[e("div",{class:"shutter",onClick:function(e){return t.handleShutterClick(e)}},e("div",{class:"shutter-button"})),e("div",{class:"rotate",onClick:function(e){return t.handleRotateClick(e)}}),{}]))},Object.defineProperty(t,"is",{get:function(){return"ion-camera"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{facingMode:{type:String,attr:"facing-mode"},flashIndex:{state:!0},isServer:{context:"isServer"},photo:{state:!0},photoSrc:{state:!0},showShutterOverlay:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"onPhoto",method:"onPhoto",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@charset \"UTF-8\";[data-ion-camera-host]{font-family:-apple-system,BlinkMacSystemFont,“Segoe UI”,“Roboto”,“Droid Sans”,“Helvetica Neue”,sans-serif;display:block;width:100%;height:100%}[data-ion-camera-host]   .items[data-ion-camera]{box-sizing:border-box;display:flex;width:100%;height:100%;align-items:center;justify-content:center}[data-ion-camera-host]   .items[data-ion-camera]   .item[data-ion-camera]{flex:1;text-align:center}[data-ion-camera-host]   .items[data-ion-camera]   .item[data-ion-camera]:first-child{background-position-x:0}[data-ion-camera-host]   .items[data-ion-camera]   .item[data-ion-camera]:last-child{background-position-x:100%}[data-ion-camera-host]   .camera-wrapper[data-ion-camera]{position:relative;display:flex;flex-direction:column;width:100%;height:100%}[data-ion-camera-host]   .camera-header[data-ion-camera]{color:#fff;background-color:#000;height:4em}[data-ion-camera-host]   .camera-header[data-ion-camera]   .items[data-ion-camera]{padding:1.5em}[data-ion-camera-host]   .camera-footer[data-ion-camera]{position:relative;color:#fff;background-color:#000;height:9em}[data-ion-camera-host]   .camera-footer[data-ion-camera]   .items[data-ion-camera]{padding:2em}[data-ion-camera-host]   .camera-video[data-ion-camera]{position:relative;flex:1;overflow:hidden;background-color:#000}[data-ion-camera-host]   video[data-ion-camera]{width:100%;height:100%;max-height:100%;min-height:100%;z-index:-1;object-fit:cover;background-color:#000}[data-ion-camera-host]   .shutter[data-ion-camera]{position:absolute;left:50%;top:50%;width:6em;height:6em;margin-top:-3em;margin-left:-3em;border-radius:100%;background-color:#c6cdd8;padding:12px;box-sizing:border-box}[data-ion-camera-host]   .shutter[data-ion-camera]:active   .shutter-button[data-ion-camera]{background-color:#9da9bb}[data-ion-camera-host]   .shutter-button[data-ion-camera]{background-color:#fff;border-radius:100%;width:100%;height:100%}[data-ion-camera-host]   .rotate[data-ion-camera]{position:absolute;right:2em;top:0;height:100%;width:2.5em;color:#fff;background:url(/assets/reverse-camera.svg) no-repeat transparent;background-size:2.5em;background-position:center}[data-ion-camera-host]   .shutter-overlay[data-ion-camera]{z-index:5;position:absolute;width:100%;height:100%;background-color:#000}[data-ion-camera-host]   .accept[data-ion-camera]{background-color:#000;flex:1}[data-ion-camera-host]   .accept[data-ion-camera]   .accept-image[data-ion-camera]{width:100%;height:100%;background-position:center center;background-size:cover;background-repeat:no-repeat}[data-ion-camera-host]   .close[data-ion-camera]{width:1.5em;height:1.5em;background:url(/assets/exit.svg) no-repeat transparent;background-size:1.5em;background-position:center}[data-ion-camera-host]   .flash[data-ion-camera]{width:1.5em;height:1.5em;background:url(/assets/flash-on.svg) no-repeat transparent;background-size:1.5em;background-position:center}[data-ion-camera-host]   .accept-use[data-ion-camera]{width:2.5em;height:2.5em;background:url(/assets/confirm.svg) no-repeat transparent;background-size:2.5em;background-position:center}[data-ion-camera-host]   .accept-cancel[data-ion-camera]{width:2.5em;height:2.5em;background:url(/assets/retake.svg) no-repeat transparent;background-size:2.5em;background-position:center}"},enumerable:!0,configurable:!0}),t}();t.IonCamera=o,Object.defineProperty(t,"__esModule",{value:!0})});