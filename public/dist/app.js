/*
 CanvasJS HTML5 & JavaScript Charts - v1.9.1 GA - http://canvasjs.com/ 
 Copyright 2016 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     http://canvasjs.com/license-canvasjs/

*/
(function(){function S(a,c){a.prototype=Ka(c.prototype);a.prototype.constructor=a;a.base=c.prototype}function Ka(a){function c(){}c.prototype=a;return new c}function Aa(a,c,b){"millisecond"===b?a.setMilliseconds(a.getMilliseconds()+1*c):"second"===b?a.setSeconds(a.getSeconds()+1*c):"minute"===b?a.setMinutes(a.getMinutes()+1*c):"hour"===b?a.setHours(a.getHours()+1*c):"day"===b?a.setDate(a.getDate()+1*c):"week"===b?a.setDate(a.getDate()+7*c):"month"===b?a.setMonth(a.getMonth()+1*c):"year"===b&&a.setFullYear(a.getFullYear()+
1*c);return a}function Q(a,c){var b=!1;0>a&&(b=!0,a*=-1);a=""+a;for(c=c?c:1;a.length<c;)a="0"+a;return b?"-"+a:a}function ga(a){if(!a)return a;a=a.replace(/^\s\s*/,"");for(var c=/\s/,b=a.length;c.test(a.charAt(--b)););return a.slice(0,b+1)}function La(a){a.roundRect=function(a,b,d,e,f,g,h,p){h&&(this.fillStyle=h);p&&(this.strokeStyle=p);"undefined"===typeof f&&(f=5);this.lineWidth=g;this.beginPath();this.moveTo(a+f,b);this.lineTo(a+d-f,b);this.quadraticCurveTo(a+d,b,a+d,b+f);this.lineTo(a+d,b+e-f);
this.quadraticCurveTo(a+d,b+e,a+d-f,b+e);this.lineTo(a+f,b+e);this.quadraticCurveTo(a,b+e,a,b+e-f);this.lineTo(a,b+f);this.quadraticCurveTo(a,b,a+f,b);this.closePath();h&&this.fill();p&&0<g&&this.stroke()}}function ta(a,c){return a-c}function Ba(a,c){return a.x-c.x}function C(a){var c=((a&16711680)>>16).toString(16),b=((a&65280)>>8).toString(16);a=((a&255)>>0).toString(16);c=2>c.length?"0"+c:c;b=2>b.length?"0"+b:b;a=2>a.length?"0"+a:a;return"#"+c+b+a}function Ma(a,c){var b=this.length>>>0,d=Number(c)||
0,d=0>d?Math.ceil(d):Math.floor(d);for(0>d&&(d+=b);d<b;d++)if(d in this&&this[d]===a)return d;return-1}function x(a){return null===a||"undefined"===typeof a}function Ca(a,c,b){b=b||"normal";var d=a+"_"+c+"_"+b,e=Da[d];if(isNaN(e)){try{a="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+a+"; font-size:"+c+"px; font-weight:"+b+";";if(!Y){var f=document.body;Y=document.createElement("span");Y.innerHTML="";var g=document.createTextNode("Mpgyi");
Y.appendChild(g);f.appendChild(Y)}Y.style.display="";Y.setAttribute("style",a);e=Math.round(Y.offsetHeight);Y.style.display="none"}catch(h){e=Math.ceil(1.1*c)}e=Math.max(e,c);Da[d]=e}return e}function D(a,c){var b=[];if(b={solid:[],shortDash:[3,1],shortDot:[1,1],shortDashDot:[3,1,1,1],shortDashDotDot:[3,1,1,1,1,1],dot:[1,2],dash:[4,2],dashDot:[4,2,1,2],longDash:[8,2],longDashDot:[8,2,1,2],longDashDotDot:[8,2,1,2,1,2]}[a||"solid"])for(var d=0;d<b.length;d++)b[d]*=c;else b=[];return b}function K(a,
c,b,d){if(a.addEventListener)a.addEventListener(c,b,d||!1);else if(a.attachEvent)a.attachEvent("on"+c,function(d){d=d||window.event;d.preventDefault=d.preventDefault||function(){d.returnValue=!1};d.stopPropagation=d.stopPropagation||function(){d.cancelBubble=!0};b.call(a,d)});else return!1}function Ea(a,c,b){a*=O;c*=O;a=b.getImageData(a,c,2,2).data;c=!0;for(b=0;4>b;b++)if(a[b]!==a[b+4]|a[b]!==a[b+8]|a[b]!==a[b+12]){c=!1;break}return c?a[0]<<16|a[1]<<8|a[2]:0}function R(a,c,b){return a in c?c[a]:b[a]}
function la(a,c,b){if(t&&Fa){var d=a.getContext("2d");ma=d.webkitBackingStorePixelRatio||d.mozBackingStorePixelRatio||d.msBackingStorePixelRatio||d.oBackingStorePixelRatio||d.backingStorePixelRatio||1;O=ua/ma;a.width=c*O;a.height=b*O;ua!==ma&&(a.style.width=c+"px",a.style.height=b+"px",d.scale(O,O))}else a.width=c,a.height=b}function Na(a){if(!Ga){var c=!1,b=!1;"undefined"===typeof da.Chart.creditHref?(a.creditHref="http://canvasjs.com/",a.creditText="CanvasJS.com"):(c=a.updateOption("creditText"),
b=a.updateOption("creditHref"));if(a.creditHref&&a.creditText){a._creditLink||(a._creditLink=document.createElement("a"),a._creditLink.setAttribute("class","canvasjs-chart-credit"),a._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:2px;top:"+(a.height-14)+"px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),a._creditLink.setAttribute("tabIndex",-1),a._creditLink.setAttribute("target","_blank"));
if(0===a.renderCount||c||b)a._creditLink.setAttribute("href",a.creditHref),a._creditLink.innerHTML=a.creditText;a._creditLink&&a.creditHref&&a.creditText?(a._creditLink.parentElement||a._canvasJSContainer.appendChild(a._creditLink),a._creditLink.style.top=a.height-14+"px"):a._creditLink.parentElement&&a._canvasJSContainer.removeChild(a._creditLink)}}}function ba(a,c){var b=document.createElement("canvas");b.setAttribute("class","canvasjs-chart-canvas");la(b,a,c);t||"undefined"===typeof G_vmlCanvasManager||
G_vmlCanvasManager.initElement(b);return b}function Ha(a,c,b){if(a&&c&&b){b=b+"."+c;var d="image/"+c;a=a.toDataURL(d);var e=!1,f=document.createElement("a");f.download=b;f.href=a;f.target="_blank";if("undefined"!==typeof Blob&&new Blob){for(var g=a.replace(/^data:[a-z/]*;base64,/,""),g=atob(g),h=new ArrayBuffer(g.length),h=new Uint8Array(h),p=0;p<g.length;p++)h[p]=g.charCodeAt(p);c=new Blob([h.buffer],{type:"image/"+c});try{window.navigator.msSaveBlob(c,b),e=!0}catch(k){f.dataset.downloadurl=[d,f.download,
f.href].join(":"),f.href=window.URL.createObjectURL(c)}}if(!e)try{event=document.createEvent("MouseEvents"),event.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),f.dispatchEvent?f.dispatchEvent(event):f.fireEvent&&f.fireEvent("onclick")}catch(n){c=window.open(),c.document.write("<img src='"+a+"'></img><div>Please right click on the image and save it to your device</div>"),c.document.close()}}}function T(a,c,b){c.getAttribute("state")!==b&&(c.setAttribute("state",b),c.setAttribute("type",
"button"),c.style.position="relative",c.style.margin="0px 0px 0px 0px",c.style.padding="3px 4px 0px 4px",c.style.cssFloat="left",c.setAttribute("title",a._cultureInfo[b+"Text"]),c.innerHTML="<img style='height:16px;' src='"+Oa[b].image+"' alt='"+a._cultureInfo[b+"Text"]+"' />")}function na(){for(var a=null,c=0;c<arguments.length;c++)a=arguments[c],a.style&&(a.style.display="inline")}function W(){for(var a=null,c=0;c<arguments.length;c++)(a=arguments[c])&&a.style&&(a.style.display="none")}function L(a,
c,b,d){this._defaultsKey=a;this.parent=d;this._eventListeners=[];d={};b&&(ea[b]&&ea[b][a])&&(d=ea[b][a]);this._options=c?c:{};this.setOptions(this._options,d)}function z(a,c,b){this._publicChartReference=b;c=c||{};z.base.constructor.call(this,"Chart",c,c.theme?c.theme:"theme1");var d=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType="";this._lastTouchData=null;this.isAnimating=!1;this.renderCount=
0;this.panEnabled=this.disableToolTip=this.animatedRender=!1;this._defaultCursor="default";this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0};this._dataInRenderedOrder=[];(this._container="string"===typeof this._containerId?document.getElementById(this._containerId):this._containerId)?(this._container.innerHTML="",c=a=0,a=this._options.width?this.width:0<this._container.clientWidth?this._container.clientWidth:this.width,c=this._options.height?this.height:0<this._container.clientHeight?
this._container.clientHeight:this.height,this.width=a,this.height=c,this.x1=this.y1=0,this.x2=this.width,this.y2=this.height,this._selectedColorSet="undefined"!==typeof ca[this.colorSet]?ca[this.colorSet]:ca.colorSet1,this._canvasJSContainer=document.createElement("div"),this._canvasJSContainer.setAttribute("class","canvasjs-chart-container"),this._canvasJSContainer.style.position="relative",this._canvasJSContainer.style.textAlign="left",this._canvasJSContainer.style.cursor="auto",t||(this._canvasJSContainer.style.height=
"0px"),this._container.appendChild(this._canvasJSContainer),this.canvas=ba(a,c),this.canvas.style.position="absolute",this.canvas.getContext&&(this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",La(this.ctx),t?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=ba(a,c),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),this.plotArea.ctx=
this.plotArea.canvas.getContext("2d")),this.overlaidCanvas=ba(a,c),this.overlaidCanvas.style.position="absolute",this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",this._eventManager=new ha(this),K(window,"resize",function(){d._updateSize()&&d.render()}),this._toolBar=document.createElement("div"),this._toolBar.setAttribute("class","canvasjs-chart-toolbar"),this._toolBar.style.cssText="position: absolute; right: 1px; top: 1px;",
this._canvasJSContainer.appendChild(this._toolBar),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},K(this.overlaidCanvas,"click",function(a){d._mouseEventHandler(a)}),K(this.overlaidCanvas,"mousemove",function(a){d._mouseEventHandler(a)}),K(this.overlaidCanvas,"mouseup",function(a){d._mouseEventHandler(a)}),K(this.overlaidCanvas,"mousedown",function(a){d._mouseEventHandler(a);W(d._dropdownMenu)}),K(this.overlaidCanvas,"mouseout",function(a){d._mouseEventHandler(a)}),K(this.overlaidCanvas,window.navigator.msPointerEnabled?
"MSPointerDown":"touchstart",function(a){d._touchEventHandler(a)}),K(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(a){d._touchEventHandler(a)}),K(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerUp":"touchend",function(a){d._touchEventHandler(a)}),K(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(a){d._touchEventHandler(a)}),this._toolTip=new U(this,this._options.toolTip,this.theme),this.axisY2=
this.axisY=this.axisX=this.data=null,this.sessionVariables={axisX:{},axisY:{},axisY2:{}})):window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+this._containerId+'" was not found')}function oa(a,c){for(var b=[],d,e=0;e<a.length;e++)if(0==e)b.push(a[0]);else{var f,g,h;h=e-1;f=0===h?0:h-1;g=h===a.length-1?h:h+1;d=Math.abs((a[g].x-a[f].x)/(0===a[g].x-a[h].x?0.01:a[g].x-a[h].x))*(c-1)/2+1;var p=(a[g].x-a[f].x)/d;d=(a[g].y-a[f].y)/d;b[b.length]=a[h].x>a[f].x&&0<p||a[h].x<a[f].x&&
0>p?{x:a[h].x+p/3,y:a[h].y+d/3}:{x:a[h].x,y:a[h].y+d/9};h=e;f=0===h?0:h-1;g=h===a.length-1?h:h+1;d=Math.abs((a[g].x-a[f].x)/(0===a[h].x-a[f].x?0.01:a[h].x-a[f].x))*(c-1)/2+1;p=(a[g].x-a[f].x)/d;d=(a[g].y-a[f].y)/d;b[b.length]=a[h].x>a[f].x&&0<p||a[h].x<a[f].x&&0>p?{x:a[h].x-p/3,y:a[h].y-d/3}:{x:a[h].x,y:a[h].y-d/9};b[b.length]=a[e]}return b}function Ia(a,c){if(null===a||"undefined"===typeof a)return c;var b=parseFloat(a.toString())*(0<=a.toString().indexOf("%")?c/100:1);return!isNaN(b)&&b<=c&&0<=
b?b:c}function fa(a,c,b,d,e){"undefined"===typeof e&&(e=0);this._padding=e;this._x1=a;this._y1=c;this._x2=b;this._y2=d;this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding}function M(a,c){M.base.constructor.call(this,"TextBlock",c);this.ctx=a;this._isDirty=!0;this._wrappedText=null}function ia(a,c){ia.base.constructor.call(this,"Title",c,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;if(x(this._options.margin)&&a._options.subtitles)for(var b=
a._options.subtitles,d=0;d<b.length;d++)if((x(b[d].horizontalAlign)&&"center"===this.horizontalAlign||b[d].horizontalAlign===this.horizontalAlign)&&(x(b[d].verticalAlign)&&"top"===this.verticalAlign||b[d].verticalAlign===this.verticalAlign)&&!b[d].dockInsidePlotArea===!this.dockInsidePlotArea){this.margin=0;break}"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function pa(a,
c){pa.base.constructor.call(this,"Subtitle",c,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function qa(a,c,b){qa.base.constructor.call(this,"Legend",c,b);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.ghostCtx=this.chart._eventManager.ghostCtx;this.items=[];this.height=this.width=0;this.orientation=
null;this.dataSeries=[];this.bounds={x1:null,y1:null,x2:null,y2:null};"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.lineHeight=Ca(this.fontFamily,this.fontSize,this.fontWeight);this.horizontalSpacing=this.fontSize}function va(a,c){va.base.constructor.call(this,c);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx}function X(a,c,b,d,e){X.base.constructor.call(this,"DataSeries",c,b);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;
this.index=d;this.noDataPointsInPlotArea=0;this.id=e;this.chart._eventManager.objectMap[e]={id:e,objectType:"dataSeries",dataSeriesIndex:d};this.dataPointIds=[];this.plotUnit=[];this.axisY=this.axisX=null;null===this.fillOpacity&&(this.type.match(/area/i)?this.fillOpacity=0.7:this.fillOpacity=1);this.axisPlacement=this.getDefaultAxisPlacement();"undefined"===typeof this._options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function B(a,c,b,d){B.base.constructor.call(this,
"Axis",c,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=this.maxWidth=0;this.labels=[];this._stripLineLabels=this._ticks=this._labels=null;this.dataInfo={min:Infinity,max:-Infinity,viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};"axisX"===b?(this.sessionVariables=this.chart.sessionVariables[b],this._options.interval||(this.intervalType=null),"theme2"===this.chart.theme&&x(this._options.lineThickness)&&(this.lineThickness=2)):this.sessionVariables=
"left"===d||"top"===d?this.chart.sessionVariables.axisY:this.chart.sessionVariables.axisY2;"undefined"===typeof this._options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===typeof this._options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize));this.type=b;"axisX"!==b||c&&"undefined"!==typeof c.gridThickness||(this.gridThickness=0);this._position=d;this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null};this.labelAngle=
(this.labelAngle%360+360)%360;90<this.labelAngle&&270>this.labelAngle?this.labelAngle-=180:270<=this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360);if(this._options.stripLines&&0<this._options.stripLines.length)for(this.stripLines=[],c=0;c<this._options.stripLines.length;c++)this.stripLines.push(new ra(this.chart,this._options.stripLines[c],a.theme,++this.chart._eventManager.lastObjectId,this));this._titleTextBlock=null;this.hasOptionChanged("viewportMinimum")&&null===this.viewportMinimum&&
(this._options.viewportMinimum=void 0,this.sessionVariables.viewportMinimum=null);this.hasOptionChanged("viewportMinimum")||isNaN(this.sessionVariables.newViewportMinimum)||null===this.sessionVariables.newViewportMinimum?this.sessionVariables.newViewportMinimum=null:this.viewportMinimum=this.sessionVariables.newViewportMinimum;this.hasOptionChanged("viewportMaximum")&&null===this.viewportMaximum&&(this._options.viewportMaximum=void 0,this.sessionVariables.viewportMaximum=null);this.hasOptionChanged("viewportMaximum")||
isNaN(this.sessionVariables.newViewportMaximum)||null===this.sessionVariables.newViewportMaximum?this.sessionVariables.newViewportMaximum=null:this.viewportMaximum=this.sessionVariables.newViewportMaximum;null!==this.minimum&&null!==this.viewportMinimum&&(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));null!==this.maximum&&null!==this.viewportMaximum&&(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.trackChanges("viewportMinimum");this.trackChanges("viewportMaximum")}
function ra(a,c,b,d,e){ra.base.constructor.call(this,"StripLine",c,b,e);this.id=d;this.chart=a;this.ctx=this.chart.ctx;this.label=this.label;this._thicknessType="pixel";null!==this.startValue&&null!==this.endValue&&(this.value=e.logarithmic?Math.sqrt((this.startValue.getTime?this.startValue.getTime():this.startValue)*(this.endValue.getTime?this.endValue.getTime():this.endValue)):((this.startValue.getTime?this.startValue.getTime():this.startValue)+(this.endValue.getTime?this.endValue.getTime():this.endValue))/
2,this.thickness=e.logarithmic?Math.log(this.endValue/this.startValue)/Math.log(e.logarithmBase):Math.max(this.endValue-this.startValue),this._thicknessType="value")}function U(a,c,b){U.base.constructor.call(this,"ToolTip",c,b);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._timerId=0;this._prevY=this._prevX=NaN;this._initialize()}function ha(a){this.chart=a;this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=
[];this.previousDataPointEventObject=null;this.ghostCanvas=ba(this.chart.width,this.chart.height);this.ghostCtx=this.ghostCanvas.getContext("2d");this.mouseoveredObjectMaps=[]}function ja(a){var c;a&&ka[a]&&(c=ka[a]);ja.base.constructor.call(this,"CultureInfo",c)}function wa(a){this.chart=a;this.ctx=this.chart.plotArea.ctx;this.animations=[];this.animationRequestId=null}var H={},t=!!document.createElement("canvas").getContext,da={Chart:{width:500,height:400,zoomEnabled:!1,zoomType:"x",backgroundColor:"white",
theme:"theme1",animationEnabled:!1,animationDuration:1200,dataPointWidth:null,dataPointMinWidth:null,dataPointMaxWidth:null,colorSet:"colorSet1",culture:"en",creditText:"CanvasJS",interactivityEnabled:!0,exportEnabled:!1,exportFileName:"Chart",rangeChanging:null,rangeChanged:null},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,
margin:5,wrap:!0,maxWidth:null,dockInsidePlotArea:!1},Subtitle:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:14,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:2,wrap:!0,maxWidth:null,dockInsidePlotArea:!1},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",
cursor:null,itemmouseover:null,itemmouseout:null,itemmousemove:null,itemclick:null,dockInsidePlotArea:!1,reversed:!1,maxWidth:null,maxHeight:null,itemMaxWidth:null,itemWidth:null,itemWrap:!0,itemTextFormatter:null},ToolTip:{enabled:!0,shared:!1,animationEnabled:!0,content:null,contentFormatter:null,reversed:!1,backgroundColor:null,borderColor:null,borderThickness:2,cornerRadius:5,fontSize:14,fontColor:null,fontFamily:"Calibri, Arial, Georgia, serif;",fontWeight:"normal",fontStyle:"italic"},Axis:{minimum:null,
maximum:null,viewportMinimum:null,viewportMaximum:null,interval:null,intervalType:null,reversed:!1,logarithmic:!1,logarithmBase:10,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",titleWrap:!0,titleMaxWidth:null,labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!0,labelWrap:!0,labelMaxWidth:null,labelFormatter:null,prefix:"",suffix:"",
includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,lineDashType:"solid",gridColor:"A0A0A0",gridThickness:0,gridDashType:"solid",interlacedColor:null,valueFormatString:null,margin:2,stripLines:[]},StripLine:{value:null,startValue:null,endValue:null,color:"orange",opacity:null,thickness:2,lineDashType:"solid",label:"",labelPlacement:"inside",labelAlign:"far",labelWrap:!0,labelMaxWidth:null,labelBackgroundColor:"transparent",labelFontFamily:"arial",labelFontColor:"orange",
labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,showOnTop:!1},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,highlightEnabled:!0,cursor:null,indexLabel:"",indexLabelPlacement:"auto",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:null,indexLabelLineThickness:1,indexLabelLineDashType:"solid",
indexLabelMaxWidth:null,indexLabelWrap:!0,indexLabelFormatter:null,lineThickness:2,lineDashType:"solid",connectNullData:!1,nullDataLineDashType:"dash",color:null,lineColor:null,risingColor:"white",fillOpacity:null,startAngle:0,radius:null,innerRadius:null,type:"column",xValueType:"number",axisYType:"primary",xValueFormatString:null,yValueFormatString:null,zValueFormatString:null,percentFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,legendMarkerBorderColor:null,
legendMarkerBorderThickness:null,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:null,markerBorderThickness:null,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null,visible:!0},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,
textBaseline:"top"},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",menuText:"More Options",saveJPGText:"Save as JPEG",savePNGText:"Save as PNG",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},
ka={en:{}},ca={colorSet1:"#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),colorSet2:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},ea={theme1:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",fontSize:33,fontColor:"#3A3A3A",
fontWeight:"bold",verticalAlign:"top",margin:5},Subtitle:{fontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",fontSize:16,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Axis:{titleFontSize:26,titleFontColor:"#666666",titleFontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"#BBBBBB",tickThickness:2,
gridThickness:2,gridColor:"#BBBBBB",lineThickness:2,lineColor:"#BBBBBB"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:t?"monospace, sans-serif,arial black":"calibri"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineThickness:1}},theme2:{Chart:{colorSet:"colorSet2"},Title:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:32,fontColor:"#333333",verticalAlign:"top",
margin:5},Subtitle:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:14,fontColor:"#333333",verticalAlign:"top",margin:5},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:t?"monospace, sans-serif,arial black":"arial",titleFontWeight:"bold",labelFontFamily:t?"monospace, Courier New, Courier":"arial",labelFontSize:16,labelFontColor:"grey",labelFontWeight:"bold",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineColor:"grey",lineThickness:0},Legend:{verticalAlign:"bottom",
horizontalAlign:"center",fontFamily:t?"monospace, sans-serif,arial black":"arial"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:t?"Courier New, Courier, monospace":"arial",indexLabelFontWeight:"bold",indexLabelFontSize:18,indexLabelLineThickness:1}},theme3:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:t?"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":"calibri",fontSize:32,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Subtitle:{fontFamily:t?
"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":"calibri",fontSize:16,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:t?"Verdana, Geneva, Calibri, sans-serif":"calibri",labelFontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:2,lineColor:"grey"},
Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:t?"monospace, sans-serif,arial black":"calibri"},DataSeries:{bevelEnabled:!0,indexLabelFontColor:"grey",indexLabelFontFamily:t?"Candara, Optima, Calibri, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}}},E={numberDuration:1,yearDuration:314496E5,monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,minuteDuration:6E4,secondDuration:1E3,millisecondDuration:1,
dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")},Da={},Y=null,xa=function(){var a=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,c="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),b="Sun Mon Tue Wed Thu Fri Sat".split(" "),d="January February March April May June July August September October November December".split(" "),e="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),f=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
g=/[^-+\dA-Z]/g;return function(h,p,k){var n=k?k.days:c,m=k?k.months:d,l=k?k.shortDays:b,q=k?k.shortMonths:e;k="";var r=!1;h=h&&h.getTime?h:h?new Date(h):new Date;if(isNaN(h))throw SyntaxError("invalid date");"UTC:"===p.slice(0,4)&&(p=p.slice(4),r=!0);k=r?"getUTC":"get";var s=h[k+"Date"](),y=h[k+"Day"](),u=h[k+"Month"](),v=h[k+"FullYear"](),w=h[k+"Hours"](),t=h[k+"Minutes"](),V=h[k+"Seconds"](),A=h[k+"Milliseconds"](),x=r?0:h.getTimezoneOffset();return k=p.replace(a,function(a){switch(a){case "D":return s;
case "DD":return Q(s,2);case "DDD":return l[y];case "DDDD":return n[y];case "M":return u+1;case "MM":return Q(u+1,2);case "MMM":return q[u];case "MMMM":return m[u];case "Y":return parseInt(String(v).slice(-2));case "YY":return Q(String(v).slice(-2),2);case "YYY":return Q(String(v).slice(-3),3);case "YYYY":return Q(v,4);case "h":return w%12||12;case "hh":return Q(w%12||12,2);case "H":return w;case "HH":return Q(w,2);case "m":return t;case "mm":return Q(t,2);case "s":return V;case "ss":return Q(V,2);
case "f":return String(A).slice(0,1);case "ff":return Q(String(A).slice(0,2),2);case "fff":return Q(String(A).slice(0,3),3);case "t":return 12>w?"a":"p";case "tt":return 12>w?"am":"pm";case "T":return 12>w?"A":"P";case "TT":return 12>w?"AM":"PM";case "K":return r?"UTC":(String(h).match(f)||[""]).pop().replace(g,"");case "z":return(0<x?"-":"+")+Math.floor(Math.abs(x)/60);case "zz":return(0<x?"-":"+")+Q(Math.floor(Math.abs(x)/60),2);case "zzz":return(0<x?"-":"+")+Q(Math.floor(Math.abs(x)/60),2)+Q(Math.abs(x)%
60,2);default:return a.slice(1,a.length-1)}})}}(),Z=function(a,c,b){if(null===a)return"";a=Number(a);var d=0>a?!0:!1;d&&(a*=-1);var e=b?b.decimalSeparator:".",f=b?b.digitGroupSeparator:",",g="";c=String(c);var g=1,h=b="",p=-1,k=[],n=[],m=0,l=0,q=0,r=!1,s=0,h=c.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);c=null;for(var y=0;h&&y<h.length;y++)if(c=h[y],"."===c&&0>p)p=y;else{if("%"===c)g*=100;else if("\u2030"===c){g*=1E3;continue}else if(","===c[0]&&"."===c[c.length-1]){g/=Math.pow(1E3,c.length-
1);p=y+c.length-1;continue}else"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||(r=!0);0>p?(k.push(c),"#"===c||"0"===c?m++:","===c&&q++):(n.push(c),"#"!==c&&"0"!==c||l++)}r&&(c=Math.floor(a),s=(0===c?"":String(c)).length-m,g/=Math.pow(10,s));0>p&&(p=y);g=(a*g).toFixed(l);c=g.split(".");g=(c[0]+"").split("");a=(c[1]+"").split("");g&&"0"===g[0]&&g.shift();for(y=r=h=l=p=0;0<k.length;)if(c=k.pop(),"#"===c||"0"===c)if(p++,p===m){var u=g,g=[];if("0"===c)for(c=m-l-(u?u.length:0);0<c;)u.unshift("0"),c--;for(;0<
u.length;)b=u.pop()+b,y++,0===y%r&&(h===q&&0<u.length)&&(b=f+b);d&&(b="-"+b)}else 0<g.length?(b=g.pop()+b,l++,y++):"0"===c&&(b="0"+b,l++,y++),0===y%r&&(h===q&&0<g.length)&&(b=f+b);else"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||!/[eE][+-]*[0]+/.test(c)?","===c?(h++,r=y,y=0,0<g.length&&(b=f+b)):b=1<c.length&&('"'===c[0]&&'"'===c[c.length-1]||"'"===c[0]&&"'"===c[c.length-1])?c.slice(1,c.length-1)+b:c+b:(c=0>s?c.replace("+","").replace("-",""):c.replace("-",""),b+=c.replace(/[0]+/,function(a){return Q(s,
a.length)}));d="";for(f=!1;0<n.length;)c=n.shift(),"#"===c||"0"===c?0<a.length&&0!==Number(a.join(""))?(d+=a.shift(),f=!0):"0"===c&&(d+="0",f=!0):1<c.length&&('"'===c[0]&&'"'===c[c.length-1]||"'"===c[0]&&"'"===c[c.length-1])?d+=c.slice(1,c.length-1):"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||!/[eE][+-]*[0]+/.test(c)?d+=c:(c=0>s?c.replace("+","").replace("-",""):c.replace("-",""),d+=c.replace(/[0]+/,function(a){return Q(s,a.length)}));return b+((f?e:"")+d)},sa=function(a){var c=0,b=0;a=a||window.event;
a.offsetX||0===a.offsetX?(c=a.offsetX,b=a.offsetY):a.layerX||0==a.layerX?(c=a.layerX,b=a.layerY):(c=a.pageX-a.target.offsetLeft,b=a.pageY-a.target.offsetTop);return{x:c,y:b}},Fa=!0,ua=window.devicePixelRatio||1,ma=1,O=Fa?ua/ma:1,Ga=window&&window.location&&window.location.href&&window.location.href.indexOf&&-1!==window.location.href.indexOf("canvasjs.com"),Oa={reset:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="},
pan:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="},
zoom:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="},
menu:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"}};(function(){H.fSDec=function(a){for(var c="",b=0;b<a.length;b++)c+=String.fromCharCode(a[b]);return c};H.str={tv:[84,114,105,97,108,32,86,101,114,115,105,
111,110],fntStr:[112,120,32,67,97,108,105,98,114,105,44,32,76,117,99,105,100,97,32,71,114,97,110,100,101,44,32,76,117,99,105,100,97,32,83,97,110,115,32,85,110,105,99,111,100,101,44,32,65,114,105,97,108,44,32,115,97,110,115,45,115,101,114,105,102],tBl:[116,101,120,116,66,97,115,101,108,105,110,101],fnt:[102,111,110,116],fSy:[102,105,108,108,83,116,121,108,101],fTx:[102,105,108,108,84,101,120,116],gr:[103,114,101,121],ct:[99,116,120],tp:[116,111,112]};delete da[H.fSDec([67,104,97,114,116])][H.fSDec([99,
114,101,100,105,116,72,114,101,102])];H.pro={sCH:da[H.fSDec([67,104,97,114,116])][H.fSDec([99,114,101,100,105,116,72,114,101,102])]};H.fAWm=function(a){if("undefined"===typeof H.pro.sCH&&!Ga){var c=a[H.fSDec(H.str.ct)];c[H.fSDec(H.str.tBl)]=H.fSDec(H.str.tp);c[H.fSDec(H.str.fnt)]=11+H.fSDec(H.str.fntStr);c[H.fSDec(H.str.fSy)]=H.fSDec(H.str.gr);c[H.fSDec(H.str.fTx)](H.fSDec(H.str.tv),2,a.height-11-2)}}})();L.prototype.setOptions=function(a,c){if(da[this._defaultsKey]){var b=da[this._defaultsKey],d;
for(d in b)b.hasOwnProperty(d)&&(this[d]=a&&d in a?a[d]:c&&d in c?c[d]:b[d])}};L.prototype.updateOption=function(a){var c=da[this._defaultsKey],b=this._options.theme?this._options.theme:this.chart&&this.chart._options.theme?this.chart._options.theme:"theme1",d={},e=this[a];b&&(ea[b]&&ea[b][this._defaultsKey])&&(d=ea[b][this._defaultsKey]);a in c&&(e=a in this._options?this._options[a]:d&&a in d?d[a]:c[a]);if(e===this[a])return!1;this[a]=e;return!0};L.prototype.trackChanges=function(a){if(!this.sessionVariables)throw"Session Variable Store not set";
this.sessionVariables[a]=this._options[a]};L.prototype.isBeingTracked=function(a){this._options._oldOptions||(this._options._oldOptions={});return this._options._oldOptions[a]?!0:!1};L.prototype.hasOptionChanged=function(a){if(!this.sessionVariables)throw"Session Variable Store not set";return this.sessionVariables[a]!==this._options[a]};L.prototype.addEventListener=function(a,c,b){a&&c&&(this._eventListeners[a]=this._eventListeners[a]||[],this._eventListeners[a].push({context:b||this,eventHandler:c}))};
L.prototype.removeEventListener=function(a,c){if(a&&c&&this._eventListeners[a])for(var b=this._eventListeners[a],d=0;d<b.length;d++)if(b[d].eventHandler===c){b[d].splice(d,1);break}};L.prototype.removeAllEventListeners=function(){this._eventListeners=[]};L.prototype.dispatchEvent=function(a,c,b){if(a&&this._eventListeners[a]){c=c||{};for(var d=this._eventListeners[a],e=0;e<d.length;e++)d[e].eventHandler.call(d[e].context,c)}"function"===typeof this[a]&&this[a].call(b||this.chart._publicChartReference,
c)};S(z,L);z.prototype._updateOptions=function(){var a=this;this.updateOption("width");this.updateOption("height");this.updateOption("dataPointWidth");this.updateOption("dataPointMinWidth");this.updateOption("dataPointMaxWidth");this.updateOption("interactivityEnabled");this.updateOption("theme");this.updateOption("colorSet")&&(this._selectedColorSet="undefined"!==typeof ca[this.colorSet]?ca[this.colorSet]:ca.colorSet1);this.updateOption("backgroundColor");this.backgroundColor||(this.backgroundColor=
"rgba(0,0,0,0)");this.updateOption("culture");this._cultureInfo=new ja(this._options.culture);this.updateOption("animationEnabled");this.animationEnabled=this.animationEnabled&&t;this.updateOption("animationDuration");this.updateOption("rangeChanging");this.updateOption("rangeChanged");this.updateOption("exportEnabled");this.updateOption("exportFileName");this.updateOption("zoomType");this._options.zoomEnabled?(this._zoomButton||(W(this._zoomButton=document.createElement("button")),T(this,this._zoomButton,
"pan"),this._toolBar.appendChild(this._zoomButton),K(this._zoomButton,"click",function(){a.zoomEnabled?(a.zoomEnabled=!1,a.panEnabled=!0,T(a,a._zoomButton,"zoom")):(a.zoomEnabled=!0,a.panEnabled=!1,T(a,a._zoomButton,"pan"));a.render()})),this._resetButton||(W(this._resetButton=document.createElement("button")),T(this,this._resetButton,"reset"),this._toolBar.appendChild(this._resetButton),K(this._resetButton,"click",function(){a._toolTip.hide();a.zoomEnabled||a.panEnabled?(a.zoomEnabled=!0,a.panEnabled=
!1,T(a,a._zoomButton,"pan"),a._defaultCursor="default",a.overlaidCanvas.style.cursor=a._defaultCursor):(a.zoomEnabled=!1,a.panEnabled=!1);a.sessionVariables.axisX&&(a.sessionVariables.axisX.newViewportMinimum=null,a.sessionVariables.axisX.newViewportMaximum=null);a.sessionVariables.axisY&&(a.sessionVariables.axisY.newViewportMinimum=null,a.sessionVariables.axisY.newViewportMaximum=null);a.sessionVariables.axisY2&&(a.sessionVariables.axisY2.newViewportMinimum=null,a.sessionVariables.axisY2.newViewportMaximum=
null);a.resetOverlayedCanvas();W(a._zoomButton,a._resetButton);a._dispatchRangeEvent("rangeChanging","reset");a.render();a._dispatchRangeEvent("rangeChanged","reset")}),this.overlaidCanvas.style.cursor=a._defaultCursor),this.zoomEnabled||this.panEnabled||(this._zoomButton?(a._zoomButton.getAttribute("state")===a._cultureInfo.zoomText?(this.panEnabled=!0,this.zoomEnabled=!1):(this.zoomEnabled=!0,this.panEnabled=!1),na(a._zoomButton,a._resetButton)):(this.zoomEnabled=!0,this.panEnabled=!1))):this.panEnabled=
this.zoomEnabled=!1;this._menuButton?this.exportEnabled?na(this._menuButton):W(this._menuButton):this.exportEnabled&&t&&(this._menuButton=document.createElement("button"),T(this,this._menuButton,"menu"),this._toolBar.appendChild(this._menuButton),K(this._menuButton,"click",function(){"none"!==a._dropdownMenu.style.display||a._dropDownCloseTime&&500>=(new Date).getTime()-a._dropDownCloseTime.getTime()||(a._dropdownMenu.style.display="block",a._menuButton.blur(),a._dropdownMenu.focus())},!0));if(!this._dropdownMenu&&
this.exportEnabled&&t){this._dropdownMenu=document.createElement("div");this._dropdownMenu.setAttribute("tabindex",-1);this._dropdownMenu.style.cssText="position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
a._dropdownMenu.style.display="none";this._toolBar.appendChild(this._dropdownMenu);K(this._dropdownMenu,"blur",function(){W(a._dropdownMenu);a._dropDownCloseTime=new Date},!0);var c=document.createElement("div");c.style.cssText="padding: 2px 15px 2px 10px";c.innerHTML=this._cultureInfo.saveJPGText;this._dropdownMenu.appendChild(c);K(c,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0);K(c,"mouseout",function(){this.style.backgroundColor="transparent"},!0);K(c,"click",function(){Ha(a.canvas,
"jpeg",a.exportFileName);W(a._dropdownMenu)},!0);c=document.createElement("div");c.style.cssText="padding: 2px 15px 2px 10px";c.innerHTML=this._cultureInfo.savePNGText;this._dropdownMenu.appendChild(c);K(c,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0);K(c,"mouseout",function(){this.style.backgroundColor="transparent"},!0);K(c,"click",function(){Ha(a.canvas,"png",a.exportFileName);W(a._dropdownMenu)},!0)}"none"!==this._toolBar.style.display&&this._zoomButton&&(this.panEnabled?T(a,
a._zoomButton,"zoom"):T(a,a._zoomButton,"pan"),a._resetButton.getAttribute("state")!==a._cultureInfo.resetText&&T(a,a._resetButton,"reset"));this._options.toolTip&&this._toolTip._options!==this._options.toolTip&&(this._toolTip._options=this._options.toolTip);for(var b in this._toolTip._options)this._toolTip._options.hasOwnProperty(b)&&this._toolTip.updateOption(b)};z.prototype._updateSize=function(){var a=0,c=0;this._options.width?a=this.width:this.width=a=0<this._container.clientWidth?this._container.clientWidth:
this.width;this._options.height?c=this.height:this.height=c=0<this._container.clientHeight?this._container.clientHeight:this.height;return this.canvas.width!==a*O||this.canvas.height!==c*O?(la(this.canvas,a,c),la(this.overlaidCanvas,a,c),la(this._eventManager.ghostCanvas,a,c),!0):!1};z.prototype._initialize=function(){this._animator?this._animator.cancelAllAnimations():this._animator=new wa(this);this.removeAllEventListeners();this.disableToolTip=!1;this._axes=[];this.pieDoughnutClickHandler=null;
this.animationRequestId&&this.cancelRequestAnimFrame.call(window,this.animationRequestId);this._updateOptions();this.animatedRender=t&&this.animationEnabled&&0===this.renderCount;this._updateSize();this.clearCanvas();this.ctx.beginPath();this.axisY2=this.axisY=this.axisX=null;this._indexLabels=[];this._dataInRenderedOrder=[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,axisXValueType:null,plotTypes:[]};this.layoutManager=new fa(0,0,this.width,this.height,
2);this.plotArea.layoutManager&&this.plotArea.layoutManager.reset();this.data=[];var a=0;if(this._options.data)for(var c=0;c<this._options.data.length;c++)if(a++,!this._options.data[c].type||0<=z._supportedChartTypes.indexOf(this._options.data[c].type)){var b=new X(this,this._options.data[c],this.theme,a-1,++this._eventManager.lastObjectId);null===b.name&&(b.name="DataSeries "+a);null===b.color?1<this._options.data.length?(b._colorSet=[this._selectedColorSet[b.index%this._selectedColorSet.length]],
b.color=this._selectedColorSet[b.index%this._selectedColorSet.length]):b._colorSet="line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type||"candlestick"===b.type||"ohlc"===b.type?[this._selectedColorSet[0]]:this._selectedColorSet:b._colorSet=[b.color];null===b.markerSize&&(("line"===b.type||"stepLine"===b.type||"spline"===b.type||0<=b.type.toLowerCase().indexOf("area"))&&
b.dataPoints&&b.dataPoints.length<this.width/16||"scatter"===b.type)&&(b.markerSize=8);"bubble"!==b.type&&"scatter"!==b.type||!b.dataPoints||(b.dataPoints.some?b.dataPoints.some(function(a){return a.x})&&b.dataPoints.sort(Ba):b.dataPoints.sort(Ba));this.data.push(b);var d=b.axisPlacement,e;"normal"===d?"xySwapped"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with pie chart':null===this.plotInfo.axisPlacement&&
(this.plotInfo.axisPlacement="normal"):"xySwapped"===d?"normal"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"==d&&("normal"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?e=
'You cannot combine "'+b.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"));if(e&&window.console){window.console.log(e);return}}H.fAWm&&H.fAWm(this);Na(this);this._objectsInitialized=!0};z._supportedChartTypes=function(a){a.indexOf||(a.indexOf=Ma);return a}("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" "));
z.prototype.render=function(a){a&&(this._options=a);this._initialize();var c=[];for(a=0;a<this.data.length;a++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)this.data[a].axisYType&&"primary"!==this.data[a].axisYType?"secondary"===this.data[a].axisYType&&(this.axisY2||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY2=new B(this,this._options.axisY2,"axisY","right")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2=new B(this,
this._options.axisY2,"axisY","top"))),this.data[a].axisY=this.axisY2):(this.axisY||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY=new B(this,this._options.axisY,"axisY","left")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY=new B(this,this._options.axisY,"axisY","bottom"))),this.data[a].axisY=this.axisY),this.axisX||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX=new B(this,this._options.axisX,"axisX","bottom")):"xySwapped"===this.plotInfo.axisPlacement&&
this._axes.push(this.axisX=new B(this,this._options.axisX,"axisX","left"))),this.data[a].axisX=this.axisX;this.axisY&&this.axisY2&&(0<this.axisY.gridThickness&&"undefined"===typeof this.axisY2._options.gridThickness?this.axisY2.gridThickness=0:0<this.axisY2.gridThickness&&"undefined"===typeof this.axisY._options.gridThickness&&(this.axisY.gridThickness=0));var b=!1;if(0<this._axes.length&&(this.zoomEnabled||this.panEnabled))for(a=0;a<this._axes.length;a++)if(null!==this._axes[a].viewportMinimum||
null!==this._axes[a].viewportMaximum){b=!0;break}b?na(this._zoomButton,this._resetButton):(W(this._zoomButton,this._resetButton),this._options.zoomEnabled&&(this.zoomEnabled=!0,this.panEnabled=!1));this._processData();this._options.title&&(this._title=new ia(this,this._options.title),this._title.dockInsidePlotArea?c.push(this._title):this._title.render());if(this._options.subtitles)for(a=0;a<this._options.subtitles.length;a++)this.subtitles=[],b=new pa(this,this._options.subtitles[a]),this.subtitles.push(b),
b.dockInsidePlotArea?c.push(b):b.render();this.legend=new qa(this,this._options.legend,this.theme);for(a=0;a<this.data.length;a++)(this.data[a].showInLegend||"pie"===this.data[a].type||"doughnut"===this.data[a].type)&&this.legend.dataSeries.push(this.data[a]);this.legend.dockInsidePlotArea?c.push(this.legend):this.legend.render();if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)B.setLayoutAndRender(this.axisX,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace());
else if("none"===this.plotInfo.axisPlacement)this.preparePlotArea();else return;for(a=0;a<c.length;a++)c[a].render();var d=[];if(this.animatedRender){var e=ba(this.width,this.height);e.getContext("2d").drawImage(this.canvas,0,0,this.width,this.height)}for(a=0;a<this.plotInfo.plotTypes.length;a++)for(c=this.plotInfo.plotTypes[a],b=0;b<c.plotUnits.length;b++){var f=c.plotUnits[b],g=null;f.targetCanvas=null;this.animatedRender&&(f.targetCanvas=ba(this.width,this.height),f.targetCanvasCtx=f.targetCanvas.getContext("2d"));
"line"===f.type?g=this.renderLine(f):"stepLine"===f.type?g=this.renderStepLine(f):"spline"===f.type?g=this.renderSpline(f):"column"===f.type?g=this.renderColumn(f):"bar"===f.type?g=this.renderBar(f):"area"===f.type?g=this.renderArea(f):"stepArea"===f.type?g=this.renderStepArea(f):"splineArea"===f.type?g=this.renderSplineArea(f):"stackedColumn"===f.type?g=this.renderStackedColumn(f):"stackedColumn100"===f.type?g=this.renderStackedColumn100(f):"stackedBar"===f.type?g=this.renderStackedBar(f):"stackedBar100"===
f.type?g=this.renderStackedBar100(f):"stackedArea"===f.type?g=this.renderStackedArea(f):"stackedArea100"===f.type?g=this.renderStackedArea100(f):"bubble"===f.type?g=g=this.renderBubble(f):"scatter"===f.type?g=this.renderScatter(f):"pie"===f.type?this.renderPie(f):"doughnut"===f.type?this.renderPie(f):"candlestick"===f.type?g=this.renderCandlestick(f):"ohlc"===f.type?g=this.renderCandlestick(f):"rangeColumn"===f.type?g=this.renderRangeColumn(f):"rangeBar"===f.type?g=this.renderRangeBar(f):"rangeArea"===
f.type?g=this.renderRangeArea(f):"rangeSplineArea"===f.type&&(g=this.renderRangeSplineArea(f));for(var h=0;h<f.dataSeriesIndexes.length;h++)this._dataInRenderedOrder.push(this.data[f.dataSeriesIndexes[h]]);this.animatedRender&&g&&d.push(g)}this.animatedRender&&0<this._indexLabels.length&&(a=ba(this.width,this.height).getContext("2d"),d.push(this.renderIndexLabels(a)));var p=this;0<d.length?(p.disableToolTip=!0,p._animator.animate(200,p.animationDuration,function(a){p.ctx.clearRect(0,0,p.width,p.height);
p.ctx.drawImage(e,0,0,Math.floor(p.width*O),Math.floor(p.height*O),0,0,p.width,p.height);for(var b=0;b<d.length;b++)g=d[b],1>a&&"undefined"!==typeof g.startTimePercent?a>=g.startTimePercent&&g.animationCallback(g.easingFunction(a-g.startTimePercent,0,1,1-g.startTimePercent),g):g.animationCallback(g.easingFunction(a,0,1,1),g);p.dispatchEvent("dataAnimationIterationEnd",{chart:p})},function(){d=[];for(var a=0;a<p.plotInfo.plotTypes.length;a++)for(var b=p.plotInfo.plotTypes[a],c=0;c<b.plotUnits.length;c++)b.plotUnits[c].targetCanvas=
null;e=null;p.disableToolTip=!1})):(0<p._indexLabels.length&&p.renderIndexLabels(),p.dispatchEvent("dataAnimationIterationEnd",{chart:p}));this.attachPlotAreaEventHandlers();this.zoomEnabled||(this.panEnabled||!this._zoomButton||"none"===this._zoomButton.style.display)||W(this._zoomButton,this._resetButton);this._toolTip._updateToolTip();this.renderCount++};z.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,mouseup:this._plotAreaMouseUp,
mousemove:this._plotAreaMouseMove,cursor:this.zoomEnabled?"col-resize":"move",cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})};z.prototype.categoriseDataSeries=function(){for(var a="",c=0;c<this.data.length;c++)if(a=this.data[c],a.dataPoints&&(0!==a.dataPoints.length&&a.visible)&&0<=z._supportedChartTypes.indexOf(a.type)){for(var b=null,d=!1,e=null,f=!1,g=0;g<this.plotInfo.plotTypes.length;g++)if(this.plotInfo.plotTypes[g].type===a.type){d=!0;b=this.plotInfo.plotTypes[g];
break}d||(b={type:a.type,totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(b));for(g=0;g<b.plotUnits.length;g++)if(b.plotUnits[g].axisYType===a.axisYType){f=!0;e=b.plotUnits[g];break}f||(e={type:a.type,previousDataSeriesCount:0,index:b.plotUnits.length,plotType:b,axisYType:a.axisYType,axisY:"primary"===a.axisYType?this.axisY:this.axisY2,axisX:this.axisX,dataSeriesIndexes:[],yTotals:[]},b.plotUnits.push(e));b.totalDataSeries++;e.dataSeriesIndexes.push(c);a.plotUnit=e}for(c=0;c<this.plotInfo.plotTypes.length;c++)for(b=
this.plotInfo.plotTypes[c],g=a=0;g<b.plotUnits.length;g++)b.plotUnits[g].previousDataSeriesCount=a,a+=b.plotUnits[g].dataSeriesIndexes.length};z.prototype.assignIdToDataPoints=function(){for(var a=0;a<this.data.length;a++){var c=this.data[a];if(c.dataPoints)for(var b=c.dataPoints.length,d=0;d<b;d++)c.dataPointIds[d]=++this._eventManager.lastObjectId}};z.prototype._processData=function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=0;a<this.plotInfo.plotTypes.length;a++)for(var c=
this.plotInfo.plotTypes[a],b=0;b<c.plotUnits.length;b++){var d=c.plotUnits[b];"line"===d.type||"stepLine"===d.type||"spline"===d.type||"column"===d.type||"area"===d.type||"stepArea"===d.type||"splineArea"===d.type||"bar"===d.type||"bubble"===d.type||"scatter"===d.type?this._processMultiseriesPlotUnit(d):"stackedColumn"===d.type||"stackedBar"===d.type||"stackedArea"===d.type?this._processStackedPlotUnit(d):"stackedColumn100"===d.type||"stackedBar100"===d.type||"stackedArea100"===d.type?this._processStacked100PlotUnit(d):
"candlestick"!==d.type&&"ohlc"!==d.type&&"rangeColumn"!==d.type&&"rangeBar"!==d.type&&"rangeArea"!==d.type&&"rangeSplineArea"!==d.type||this._processMultiYPlotUnit(d)}};z.prototype._processMultiseriesPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,f=!1,g=0;g<a.dataSeriesIndexes.length;g++){var h=this.data[a.dataSeriesIndexes[g]],p=0,k=!1,n=!1,m;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var l=this.sessionVariables.axisX.newViewportMinimum?
this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?this._options.axisX.viewportMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:a.axisX.logarithmic?0:-Infinity,q=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this._options.axisX&&this._options.axisX.viewportMaximum?this._options.axisX.viewportMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:
Infinity;if(h.dataPoints[p].x&&h.dataPoints[p].x.getTime||"dateTime"===h.xValueType)f=!0;for(p=0;p<h.dataPoints.length;p++){"undefined"===typeof h.dataPoints[p].x&&(h.dataPoints[p].x=p+(a.axisX.logarithmic?1:0));h.dataPoints[p].x.getTime?(f=!0,d=h.dataPoints[p].x.getTime()):d=h.dataPoints[p].x;e=h.dataPoints[p].y;d<b.min&&(b.min=d);d>b.max&&(b.max=d);e<c.min&&(c.min=e);e>c.max&&(c.max=e);if(0<p){if(a.axisX.logarithmic){var r=d/h.dataPoints[p-1].x;1>r&&(r=1/r);b.minDiff>r&&1!==r&&(b.minDiff=r)}else r=
d-h.dataPoints[p-1].x,0>r&&(r*=-1),b.minDiff>r&&0!==r&&(b.minDiff=r);null!==e&&null!==h.dataPoints[p-1].y&&(a.axisY.logarithmic?(r=e/h.dataPoints[p-1].y,1>r&&(r=1/r),c.minDiff>r&&1!==r&&(c.minDiff=r)):(r=e-h.dataPoints[p-1].y,0>r&&(r*=-1),c.minDiff>r&&0!==r&&(c.minDiff=r)))}if(d<l&&!k)null!==e&&(m=d);else{if(!k&&(k=!0,0<p)){p-=2;continue}if(d>q&&!n)n=!0;else if(d>q&&n)continue;h.dataPoints[p].label&&(a.axisX.labels[d]=h.dataPoints[p].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=
d);null===e?b.viewPortMin===d&&m<d&&(b.viewPortMin=m):(e<c.viewPortMin&&(c.viewPortMin=e),e>c.viewPortMax&&(c.viewPortMax=e))}}this.plotInfo.axisXValueType=h.xValueType=f?"dateTime":"number"}};z.prototype._processStackedPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,f=!1,g=[],h=[],p=Infinity,k=0;k<a.dataSeriesIndexes.length;k++){var n=this.data[a.dataSeriesIndexes[k]],m=0,l=!1,q=!1,r;if("normal"===n.axisPlacement||"xySwapped"===
n.axisPlacement)var s=this.sessionVariables.axisX.newViewportMinimum?this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?this._options.axisX.viewportMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,y=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this._options.axisX&&this._options.axisX.viewportMaximum?this._options.axisX.viewportMaximum:this._options.axisX&&
this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(n.dataPoints[m].x&&n.dataPoints[m].x.getTime||"dateTime"===n.xValueType)f=!0;for(m=0;m<n.dataPoints.length;m++){"undefined"===typeof n.dataPoints[m].x&&(n.dataPoints[m].x=m+(a.axisX.logarithmic?1:0));n.dataPoints[m].x.getTime?(f=!0,d=n.dataPoints[m].x.getTime()):d=n.dataPoints[m].x;x(n.dataPoints[m].y)?e=0:(e=n.dataPoints[m].y,0===k&&(p=Math.min(e,p)));d<b.min&&(b.min=d);d>b.max&&(b.max=d);if(0<m){if(a.axisX.logarithmic){var u=d/
n.dataPoints[m-1].x;1>u&&(u=1/u);b.minDiff>u&&1!==u&&(b.minDiff=u)}else u=d-n.dataPoints[m-1].x,0>u&&(u*=-1),b.minDiff>u&&0!==u&&(b.minDiff=u);null!==e&&null!==n.dataPoints[m-1].y&&(a.axisY.logarithmic?0<e&&(u=e/n.dataPoints[m-1].y,1>u&&(u=1/u),c.minDiff>u&&1!==u&&(c.minDiff=u)):(u=e-n.dataPoints[m-1].y,0>u&&(u*=-1),c.minDiff>u&&0!==u&&(c.minDiff=u)))}if(d<s&&!l)null!==n.dataPoints[m].y&&(r=d);else{if(!l&&(l=!0,0<m)){m-=2;continue}if(d>y&&!q)q=!0;else if(d>y&&q)continue;n.dataPoints[m].label&&(a.axisX.labels[d]=
n.dataPoints[m].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);null===n.dataPoints[m].y?b.viewPortMin===d&&r<d&&(b.viewPortMin=r):(a.yTotals[d]=(a.yTotals[d]?a.yTotals[d]:0)+Math.abs(e),0<=e?g[d]=g[d]?g[d]+e:e:h[d]=h[d]?h[d]+e:e)}}this.plotInfo.axisXValueType=n.xValueType=f?"dateTime":"number"}for(m in g)g.hasOwnProperty(m)&&!isNaN(m)&&(a=g[m],a<c.min&&(c.min=Math.min(a,p)),a>c.max&&(c.max=a),m<b.viewPortMin||m>b.viewPortMax||(a<c.viewPortMin&&(c.viewPortMin=Math.min(a,
p)),a>c.viewPortMax&&(c.viewPortMax=a)));for(m in h)h.hasOwnProperty(m)&&!isNaN(m)&&(a=h[m],a<c.min&&(c.min=Math.min(a,p)),a>c.max&&(c.max=a),m<b.viewPortMin||m>b.viewPortMax||(a<c.viewPortMin&&(c.viewPortMin=Math.min(a,p)),a>c.viewPortMax&&(c.viewPortMax=a)))}};z.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,f=!1,g=!1,h=!1,p=[],k=0;k<a.dataSeriesIndexes.length;k++){var n=this.data[a.dataSeriesIndexes[k]],
m=0,l=!1,q=!1,r;if("normal"===n.axisPlacement||"xySwapped"===n.axisPlacement)var s=this.sessionVariables.axisX.newViewportMinimum?this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?this._options.axisX.viewportMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,y=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this._options.axisX&&this._options.axisX.viewportMaximum?
this._options.axisX.viewportMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(n.dataPoints[m].x&&n.dataPoints[m].x.getTime||"dateTime"===n.xValueType)f=!0;for(m=0;m<n.dataPoints.length;m++){"undefined"===typeof n.dataPoints[m].x&&(n.dataPoints[m].x=m+(a.axisX.logarithmic?1:0));n.dataPoints[m].x.getTime?(f=!0,d=n.dataPoints[m].x.getTime()):d=n.dataPoints[m].x;e=x(n.dataPoints[m].y)?null:n.dataPoints[m].y;d<b.min&&(b.min=d);d>b.max&&(b.max=d);if(0<m){if(a.axisX.logarithmic){var u=
d/n.dataPoints[m-1].x;1>u&&(u=1/u);b.minDiff>u&&1!==u&&(b.minDiff=u)}else u=d-n.dataPoints[m-1].x,0>u&&(u*=-1),b.minDiff>u&&0!==u&&(b.minDiff=u);x(e)||null===n.dataPoints[m-1].y||(a.axisY.logarithmic?0<e&&(u=e/n.dataPoints[m-1].y,1>u&&(u=1/u),c.minDiff>u&&1!==u&&(c.minDiff=u)):(u=e-n.dataPoints[m-1].y,0>u&&(u*=-1),c.minDiff>u&&0!==u&&(c.minDiff=u)))}if(d<s&&!l)null!==e&&(r=d);else{if(!l&&(l=!0,0<m)){m-=2;continue}if(d>y&&!q)q=!0;else if(d>y&&q)continue;n.dataPoints[m].label&&(a.axisX.labels[d]=n.dataPoints[m].label);
d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);null===e?b.viewPortMin===d&&r<d&&(b.viewPortMin=r):(a.yTotals[d]=(a.yTotals[d]?a.yTotals[d]:0)+Math.abs(e),0<=e?g=!0:0>e&&(h=!0),p[d]=p[d]?p[d]+Math.abs(e):Math.abs(e))}}this.plotInfo.axisXValueType=n.xValueType=f?"dateTime":"number"}a.axisY.logarithmic?(c.max=x(c.viewPortMax)?99*Math.pow(a.axisY.logarithmBase,-0.05):Math.max(c.viewPortMax,99*Math.pow(a.axisY.logarithmBase,-0.05)),c.min=x(c.viewPortMin)?1:Math.min(c.viewPortMin,
1)):g&&!h?(c.max=x(c.viewPortMax)?99:Math.max(c.viewPortMax,99),c.min=x(c.viewPortMin)?1:Math.min(c.viewPortMin,1)):g&&h?(c.max=x(c.viewPortMax)?99:Math.max(c.viewPortMax,99),c.min=x(c.viewPortMin)?-99:Math.min(c.viewPortMin,-99)):!g&&h&&(c.max=x(c.viewPortMax)?-1:Math.max(c.viewPortMax,-1),c.min=x(c.viewPortMin)?-99:Math.min(c.viewPortMin,-99));c.viewPortMin=c.min;c.viewPortMax=c.max;a.dataPointYSums=p}};z.prototype._processMultiYPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var c=
a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,f,g,h=!1,p=0;p<a.dataSeriesIndexes.length;p++){var k=this.data[a.dataSeriesIndexes[p]],n=0,m=!1,l=!1,q,r,s;if("normal"===k.axisPlacement||"xySwapped"===k.axisPlacement)var y=this.sessionVariables.axisX.newViewportMinimum?this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?this._options.axisX.viewportMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,u=this.sessionVariables.axisX.newViewportMaximum?
this.sessionVariables.axisX.newViewportMaximum:this._options.axisX&&this._options.axisX.viewportMaximum?this._options.axisX.viewportMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(k.dataPoints[n].x&&k.dataPoints[n].x.getTime||"dateTime"===k.xValueType)h=!0;for(n=0;n<k.dataPoints.length;n++){"undefined"===typeof k.dataPoints[n].x&&(k.dataPoints[n].x=n+(a.axisX.logarithmic?1:0));k.dataPoints[n].x.getTime?(h=!0,d=k.dataPoints[n].x.getTime()):d=k.dataPoints[n].x;
if((e=k.dataPoints[n].y)&&e.length){f=Math.min.apply(null,e);g=Math.max.apply(null,e);r=!0;for(var v=0;v<e.length;v++)null===e.k&&(r=!1);r&&(m||(s=q),q=d)}d<b.min&&(b.min=d);d>b.max&&(b.max=d);f<c.min&&(c.min=f);g>c.max&&(c.max=g);0<n&&(a.axisX.logarithmic?(r=d/k.dataPoints[n-1].x,1>r&&(r=1/r),b.minDiff>r&&1!==r&&(b.minDiff=r)):(r=d-k.dataPoints[n-1].x,0>r&&(r*=-1),b.minDiff>r&&0!==r&&(b.minDiff=r)),e&&(null!==e[0]&&k.dataPoints[n-1].y&&null!==k.dataPoints[n-1].y[0])&&(a.axisY.logarithmic?(r=e[0]/
k.dataPoints[n-1].y[0],1>r&&(r=1/r),c.minDiff>r&&1!==r&&(c.minDiff=r)):(r=e[0]-k.dataPoints[n-1].y[0],0>r&&(r*=-1),c.minDiff>r&&0!==r&&(c.minDiff=r))));if(!(d<y)||m){if(!m&&(m=!0,0<n)){n-=2;q=s;continue}if(d>u&&!l)l=!0;else if(d>u&&l)continue;k.dataPoints[n].label&&(a.axisX.labels[d]=k.dataPoints[n].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);if(b.viewPortMin===d&&e)for(v=0;v<e.length;v++)if(null===e[v]&&q<d){b.viewPortMin=q;break}null===e?b.viewPortMin===d&&q<d&&
(b.viewPortMin=q):(f<c.viewPortMin&&(c.viewPortMin=f),g>c.viewPortMax&&(c.viewPortMax=g))}}this.plotInfo.axisXValueType=k.xValueType=h?"dateTime":"number"}};z.prototype.getDataPointAtXY=function(a,c,b){b=b||!1;for(var d=[],e=this._dataInRenderedOrder.length-1;0<=e;e--){var f=null;(f=this._dataInRenderedOrder[e].getDataPointAtXY(a,c,b))&&d.push(f)}a=null;c=!1;for(b=0;b<d.length;b++)if("line"===d[b].dataSeries.type||"stepLine"===d[b].dataSeries.type||"area"===d[b].dataSeries.type||"stepArea"===d[b].dataSeries.type)if(e=
R("markerSize",d[b].dataPoint,d[b].dataSeries)||8,d[b].distance<=e/2){c=!0;break}for(b=0;b<d.length;b++)c&&"line"!==d[b].dataSeries.type&&"stepLine"!==d[b].dataSeries.type&&"area"!==d[b].dataSeries.type&&"stepArea"!==d[b].dataSeries.type||(a?d[b].distance<=a.distance&&(a=d[b]):a=d[b]);return a};z.prototype.getObjectAtXY=function(a,c,b){var d=null;if(b=this.getDataPointAtXY(a,c,b||!1))d=b.dataSeries.dataPointIds[b.dataPointIndex];else if(t)d=Ea(a,c,this._eventManager.ghostCtx);else for(b=0;b<this.legend.items.length;b++){var e=
this.legend.items[b];a>=e.x1&&(a<=e.x2&&c>=e.y1&&c<=e.y2)&&(d=e.id)}return d};z.prototype.getAutoFontSize=function(a,c,b){a/=400;return Math.max(10,Math.round(Math.min(this.width,this.height)*a))};z.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)};z.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.width,this.height);this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))};z.prototype.attachEvent=
function(a){this._events.push(a)};z.prototype._touchEventHandler=function(a){if(a.changedTouches&&this.interactivityEnabled){var c=[],b=a.changedTouches,d=b?b[0]:a,e=null;switch(a.type){case "touchstart":case "MSPointerDown":c=["mousemove","mousedown"];this._lastTouchData=sa(d);this._lastTouchData.time=new Date;break;case "touchmove":case "MSPointerMove":c=["mousemove"];break;case "touchend":case "MSPointerUp":c="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType?["mouseup",
"click"]:["mouseup"];break;default:return}if(!(b&&1<b.length)){e=sa(d);e.time=new Date;try{var f=e.y-this._lastTouchData.y,g=e.time-this._lastTouchData.time;if(15<Math.abs(f)&&(this._lastTouchData.scroll||200>g)){this._lastTouchData.scroll=!0;var h=window.parent||window;h&&h.scrollBy&&h.scrollBy(0,-f)}}catch(p){}this._lastTouchEventType=a.type;if(this._lastTouchData.scroll&&this.zoomEnabled)this.isDrag&&this.resetOverlayedCanvas(),this.isDrag=!1;else for(b=0;b<c.length;b++)e=c[b],f=document.createEvent("MouseEvent"),
f.initMouseEvent(e,!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),d.target.dispatchEvent(f),a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()}}};z.prototype._dispatchRangeEvent=function(a,c){var b={};b.chart=this._publicChartReference;b.type=a;b.trigger=c;var d=[];this.axisX&&d.push("axisX");this.axisY&&d.push("axisY");this.axisY2&&d.push("axisY2");for(var e=0;e<d.length;e++)b[d[e]]={viewportMinimum:this[d[e]].sessionVariables.newViewportMinimum,
viewportMaximum:this[d[e]].sessionVariables.newViewportMaximum};this.dispatchEvent(a,b,this._publicChartReference)};z.prototype._mouseEventHandler=function(a){"undefined"===typeof a.target&&a.srcElement&&(a.target=a.srcElement);var c=sa(a),b=a.type,d,e;a.which?e=3==a.which:a.button&&(e=2==a.button);z.capturedEventParam&&(d=z.capturedEventParam,"mouseup"===b&&(z.capturedEventParam=null,d.chart.overlaidCanvas.releaseCapture?d.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",
d.chart._mouseEventHandler,!1)),d.hasOwnProperty(b)&&("mouseup"!==b||d.chart.overlaidCanvas.releaseCapture?a.target===d.chart.overlaidCanvas&&d[b].call(d.context,c.x,c.y):a.target!==d.chart.overlaidCanvas&&(d.chart.isDrag=!1)));if(this.interactivityEnabled)if(this._ignoreNextEvent)this._ignoreNextEvent=!1;else if(a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault(),!e){if(!z.capturedEventParam&&this._events){for(var f=0;f<this._events.length;f++)if(this._events[f].hasOwnProperty(b))if(d=
this._events[f],e=d.bounds,c.x>=e.x1&&c.x<=e.x2&&c.y>=e.y1&&c.y<=e.y2){d[b].call(d.context,c.x,c.y);"mousedown"===b&&!0===d.capture?(z.capturedEventParam=d,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.documentElement.addEventListener("mouseup",this._mouseEventHandler,!1)):"mouseup"===b&&(d.chart.overlaidCanvas.releaseCapture?d.chart.overlaidCanvas.releaseCapture():document.documentElement.removeEventListener("mouseup",this._mouseEventHandler,!1));break}else d=null;a.target.style.cursor=
d&&d.cursor?d.cursor:this._defaultCursor}b=this.plotArea;if(c.x<b.x1||c.x>b.x2||c.y<b.y1||c.y>b.y2)this._toolTip&&this._toolTip.enabled?this._toolTip.hide():this.resetOverlayedCanvas();this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(a)}};z.prototype._plotAreaMouseDown=function(a,c){this.isDrag=!0;this.dragStartPoint={x:a,y:c}};z.prototype._plotAreaMouseUp=function(a,c){if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&
this.isDrag){var b=c-this.dragStartPoint.y,d=a-this.dragStartPoint.x,e=0<=this.zoomType.indexOf("x"),f=0<=this.zoomType.indexOf("y"),g=!1;this.resetOverlayedCanvas();if("xySwapped"===this.plotInfo.axisPlacement)var h=f,f=e,e=h;if(this.panEnabled||this.zoomEnabled){if(this.panEnabled)for(e=f=0;e<this._axes.length;e++)b=this._axes[e],b.logarithmic?b.viewportMinimum<b.minimum?(f=b.minimum/b.viewportMinimum,b.sessionVariables.newViewportMinimum=b.viewportMinimum*f,b.sessionVariables.newViewportMaximum=
b.viewportMaximum*f,g=!0):b.viewportMaximum>b.maximum&&(f=b.viewportMaximum/b.maximum,b.sessionVariables.newViewportMinimum=b.viewportMinimum/f,b.sessionVariables.newViewportMaximum=b.viewportMaximum/f,g=!0):b.viewportMinimum<b.minimum?(f=b.minimum-b.viewportMinimum,b.sessionVariables.newViewportMinimum=b.viewportMinimum+f,b.sessionVariables.newViewportMaximum=b.viewportMaximum+f,g=!0):b.viewportMaximum>b.maximum&&(f=b.viewportMaximum-b.maximum,b.sessionVariables.newViewportMinimum=b.viewportMinimum-
f,b.sessionVariables.newViewportMaximum=b.viewportMaximum-f,g=!0);else if((!e||2<Math.abs(d))&&(!f||2<Math.abs(b))&&this.zoomEnabled){if(!this.dragStartPoint)return;b=e?this.dragStartPoint.x:this.plotArea.x1;d=f?this.dragStartPoint.y:this.plotArea.y1;e=e?a:this.plotArea.x2;f=f?c:this.plotArea.y2;2<Math.abs(b-e)&&2<Math.abs(d-f)&&this._zoomPanToSelectedRegion(b,d,e,f)&&(g=!0)}g&&(this._ignoreNextEvent=!0,this._dispatchRangeEvent("rangeChanging","zoom"),this.render(),this._dispatchRangeEvent("rangeChanged",
"zoom"),g&&(this.zoomEnabled&&"none"===this._zoomButton.style.display)&&(na(this._zoomButton,this._resetButton),T(this,this._zoomButton,"pan"),T(this,this._resetButton,"reset")))}}this.isDrag=!1};z.prototype._plotAreaMouseMove=function(a,c){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var b=0,d=0,e=b=null,e=0<=this.zoomType.indexOf("x"),f=0<=this.zoomType.indexOf("y");"xySwapped"===this.plotInfo.axisPlacement&&(b=f,f=e,e=b);b=this.dragStartPoint.x-a;d=this.dragStartPoint.y-c;2<Math.abs(b)&&
8>Math.abs(b)&&(this.panEnabled||this.zoomEnabled)?this._toolTip.hide():this.panEnabled||this.zoomEnabled||this._toolTip.mouseMoveHandler(a,c);if((!e||2<Math.abs(b)||!f||2<Math.abs(d))&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled)e={x1:e?this.plotArea.x1+b:this.plotArea.x1,y1:f?this.plotArea.y1+d:this.plotArea.y1,x2:e?this.plotArea.x2+b:this.plotArea.x2,y2:f?this.plotArea.y2+d:this.plotArea.y2},this._zoomPanToSelectedRegion(e.x1,e.y1,e.x2,e.y2,!0)&&(this._dispatchRangeEvent("rangeChanging",
"pan"),this.render(),this._dispatchRangeEvent("rangeChanged","pan"),this.dragStartPoint.x=a,this.dragStartPoint.y=c);else if(this.zoomEnabled){this.resetOverlayedCanvas();b=this.overlaidCanvasCtx.globalAlpha;this.overlaidCanvasCtx.fillStyle="#A89896";var d=e?this.dragStartPoint.x:this.plotArea.x1,g=f?this.dragStartPoint.y:this.plotArea.y1,h=e?a-this.dragStartPoint.x:this.plotArea.x2-this.plotArea.x1,p=f?c-this.dragStartPoint.y:this.plotArea.y2-this.plotArea.y1;this.validateRegion(d,g,e?a:this.plotArea.x2-
this.plotArea.x1,f?c:this.plotArea.y2-this.plotArea.y1,"xy"!==this.zoomType).isValid&&(this.resetOverlayedCanvas(),this.overlaidCanvasCtx.fillStyle="#99B2B5");this.overlaidCanvasCtx.globalAlpha=0.7;this.overlaidCanvasCtx.fillRect(d,g,h,p);this.overlaidCanvasCtx.globalAlpha=b}}else this._toolTip.mouseMoveHandler(a,c)};z.prototype._zoomPanToSelectedRegion=function(a,c,b,d,e){a=this.validateRegion(a,c,b,d,e);c=a.axesWithValidRange;b=a.axesRanges;if(a.isValid)for(d=0;d<c.length;d++)e=b[d],c[d].setViewPortRange(e.val1,
e.val2);return a.isValid};z.prototype.validateRegion=function(a,c,b,d,e){e=e||!1;var f=0<=this.zoomType.indexOf("x"),g=0<=this.zoomType.indexOf("y"),h=!1,p=[],k=[],n=[];this.axisX&&f&&k.push(this.axisX);this.axisY&&g&&k.push(this.axisY);this.axisY2&&g&&k.push(this.axisY2);for(f=0;f<k.length;f++){var g=k[f],m=g.convertPixelToValue({x:a,y:c}),l=g.convertPixelToValue({x:b,y:d});if(m>l)var q=l,l=m,m=q;if(isFinite(g.dataInfo.minDiff))if(!(g.logarithmic&&l/m<Math.pow(g.dataInfo.minDiff,3)||!g.logarithmic&&
Math.abs(l-m)<3*Math.abs(g.dataInfo.minDiff)||m<g.minimum||l>g.maximum))p.push(g),n.push({val1:m,val2:l}),h=!0;else if(!e){h=!1;break}}return{isValid:h,axesWithValidRange:p,axesRanges:n}};z.prototype.preparePlotArea=function(){var a=this.plotArea,c=this.axisY?this.axisY:this.axisY2;!t&&(0<a.x1||0<a.y1)&&a.ctx.translate(a.x1,a.y1);this.axisX&&c?(a.x1=this.axisX.lineCoordinates.x1<this.axisX.lineCoordinates.x2?this.axisX.lineCoordinates.x1:c.lineCoordinates.x1,a.y1=this.axisX.lineCoordinates.y1<c.lineCoordinates.y1?
this.axisX.lineCoordinates.y1:c.lineCoordinates.y1,a.x2=this.axisX.lineCoordinates.x2>c.lineCoordinates.x2?this.axisX.lineCoordinates.x2:c.lineCoordinates.x2,a.y2=this.axisX.lineCoordinates.y2>this.axisX.lineCoordinates.y1?this.axisX.lineCoordinates.y2:c.lineCoordinates.y2,a.width=a.x2-a.x1,a.height=a.y2-a.y1):(c=this.layoutManager.getFreeSpace(),a.x1=c.x1,a.x2=c.x2,a.y1=c.y1,a.y2=c.y2,a.width=c.width,a.height=c.height);t||(a.canvas.width=a.width,a.canvas.height=a.height,a.canvas.style.left=a.x1+
"px",a.canvas.style.top=a.y1+"px",(0<a.x1||0<a.y1)&&a.ctx.translate(-a.x1,-a.y1));a.layoutManager=new fa(a.x1,a.y1,a.x2,a.y2,2)};z.prototype.getPixelCoordinatesOnPlotArea=function(a,c){return{x:this.axisX.getPixelCoordinatesOnAxis(a).x,y:this.axisY.getPixelCoordinatesOnAxis(c).y}};z.prototype.renderIndexLabels=function(a){a=a||this.plotArea.ctx;for(var c=this.plotArea,b=0,d=0,e=0,f=0,g=b=f=d=e=0,h=0,p=0;p<this._indexLabels.length;p++){var k=this._indexLabels[p],n=k.chartType.toLowerCase(),m,l,q=R("indexLabelFontColor",
k.dataPoint,k.dataSeries),g=R("indexLabelFontSize",k.dataPoint,k.dataSeries),h=R("indexLabelFontFamily",k.dataPoint,k.dataSeries);m=R("indexLabelFontStyle",k.dataPoint,k.dataSeries);l=R("indexLabelFontWeight",k.dataPoint,k.dataSeries);var f=R("indexLabelBackgroundColor",k.dataPoint,k.dataSeries),d=R("indexLabelMaxWidth",k.dataPoint,k.dataSeries),e=R("indexLabelWrap",k.dataPoint,k.dataSeries),r=R("indexLabelLineDashType",k.dataPoint,k.dataSeries),s=R("indexLabelLineColor",k.dataPoint,k.dataSeries),
y=x(k.dataPoint.indexLabelLineThickness)?x(k.dataSeries._options.indexLabelLineThickness)?0:k.dataSeries._options.indexLabelLineThickness:k.dataPoint.indexLabelLineThickness,b=0<y?Math.min(10,("normal"===this.plotInfo.axisPlacement?this.plotArea.height:this.plotArea.width)<<0):0,u={percent:null,total:null},v=null;if(0<=k.dataSeries.type.indexOf("stacked")||"pie"===k.dataSeries.type||"doughnut"===k.dataSeries.type)u=this.getPercentAndTotal(k.dataSeries,k.dataPoint);if(k.dataSeries.indexLabelFormatter||
k.dataPoint.indexLabelFormatter)v={chart:this._publicChartReference,dataSeries:k.dataSeries,dataPoint:k.dataPoint,index:k.indexKeyword,total:u.total,percent:u.percent};var w=k.dataPoint.indexLabelFormatter?k.dataPoint.indexLabelFormatter(v):k.dataPoint.indexLabel?this.replaceKeywordsWithValue(k.dataPoint.indexLabel,k.dataPoint,k.dataSeries,null,k.indexKeyword):k.dataSeries.indexLabelFormatter?k.dataSeries.indexLabelFormatter(v):k.dataSeries.indexLabel?this.replaceKeywordsWithValue(k.dataSeries.indexLabel,
k.dataPoint,k.dataSeries,null,k.indexKeyword):null;if(null!==w&&""!==w){var u=R("indexLabelPlacement",k.dataPoint,k.dataSeries),v=R("indexLabelOrientation",k.dataPoint,k.dataSeries),t=k.direction,V=k.dataSeries.axisX,A=k.dataSeries.axisY,z=!1,q=new M(a,{x:0,y:0,maxWidth:d?d:0.5*this.width,maxHeight:e?5*g:1.5*g,angle:"horizontal"===v?0:-90,text:w,padding:0,backgroundColor:f,horizontalAlign:"left",fontSize:g,fontFamily:h,fontWeight:l,fontColor:q,fontStyle:m,textBaseline:"top"});q.measureText();if(0<=
n.indexOf("line")||0<=n.indexOf("area")||0<=n.indexOf("bubble")||0<=n.indexOf("scatter")){if(k.dataPoint.x<V.viewportMinimum||k.dataPoint.x>V.viewportMaximum||k.dataPoint.y<A.viewportMinimum||k.dataPoint.y>A.viewportMaximum)continue}else if(0<=n.indexOf("column")){if(k.dataPoint.x<V.viewportMinimum||k.dataPoint.x>V.viewportMaximum||k.bounds.y1>c.y2||k.bounds.y2<c.y1)continue}else if(0<=n.indexOf("bar")){if(k.dataPoint.x<V.viewportMinimum||k.dataPoint.x>V.viewportMaximum||k.bounds.x1>c.x2||k.bounds.x2<
c.x1)continue}else if(k.dataPoint.x<V.viewportMinimum||k.dataPoint.x>V.viewportMaximum)continue;d=f=2;"horizontal"===v?(g=q.width,h=q.height):(h=q.width,g=q.height);if("normal"===this.plotInfo.axisPlacement){if(0<=n.indexOf("line")||0<=n.indexOf("area"))u="auto",f=4;else if(0<=n.indexOf("stacked"))"auto"===u&&(u="inside");else if("bubble"===n||"scatter"===n)u="inside";m=k.point.x-g/2;"inside"!==u?(d=c.y1,e=c.y2,0<t?(l=k.point.y-h-f-b,l<d&&(l="auto"===u?Math.max(k.point.y,d)+f+b:d+f+b,z=l+h>k.point.y)):
(l=k.point.y+f+b,l>e-h-f-b&&(l="auto"===u?Math.min(k.point.y,e)-h-f-b:e-h-f-b,z=l<k.point.y))):(d=Math.max(k.bounds.y1,c.y1),e=Math.min(k.bounds.y2,c.y2),b=0<=n.indexOf("range")?0<t?Math.max(k.bounds.y1,c.y1)+h/2+f:Math.min(k.bounds.y2,c.y2)-h/2-f:(Math.max(k.bounds.y1,c.y1)+Math.min(k.bounds.y2,c.y2))/2,0<t?(l=Math.max(k.point.y,b)-h/2,l<d&&("bubble"===n||"scatter"===n)&&(l=Math.max(k.point.y-h-f,c.y1+f))):(l=Math.min(k.point.y,b)-h/2,l>e-h-f&&("bubble"===n||"scatter"===n)&&(l=Math.min(k.point.y+
f,c.y2-h-f))),l=Math.min(l,e-h))}else 0<=n.indexOf("line")||0<=n.indexOf("area")||0<=n.indexOf("scatter")?(u="auto",d=4):0<=n.indexOf("stacked")?"auto"===u&&(u="inside"):"bubble"===n&&(u="inside"),l=k.point.y-h/2,"inside"!==u?(f=c.x1,e=c.x2,0>t?(m=k.point.x-g-d-b,m<f&&(m="auto"===u?Math.max(k.point.x,f)+d+b:f+d+b,z=m+g>k.point.x)):(m=k.point.x+d+b,m>e-g-d-b&&(m="auto"===u?Math.min(k.point.x,e)-g-d-b:e-g-d-b,z=m<k.point.x))):(f=Math.max(k.bounds.x1,c.x1),Math.min(k.bounds.x2,c.x2),b=0<=n.indexOf("range")?
0>t?Math.max(k.bounds.x1,c.x1)+g/2+d:Math.min(k.bounds.x2,c.x2)-g/2-d:(Math.max(k.bounds.x1,c.x1)+Math.min(k.bounds.x2,c.x2))/2,m=0>t?Math.max(k.point.x,b)-g/2:Math.min(k.point.x,b)-g/2,m=Math.max(m,f));"vertical"===v&&(l+=h);q.x=m;q.y=l;q.render(!0);y&&("inside"!==u&&(0>n.indexOf("bar")&&k.point.x>c.x1&&k.point.x<c.x2||!z)&&(0>n.indexOf("column")&&k.point.y>c.y1&&k.point.y<c.y2||!z))&&(a.lineWidth=y,a.strokeStyle=s?s:"gray",a.setLineDash&&a.setLineDash(D(r,y)),a.beginPath(),a.moveTo(k.point.x,k.point.y),
0<=n.indexOf("bar")?a.lineTo(m+(0<k.direction?0:g),l+("horizontal"===v?h:-h)/2):0<=n.indexOf("column")?a.lineTo(m+g/2,l+((0<k.direction?h:-h)+("horizontal"===v?h:-h))/2):a.lineTo(m+g/2,l+((l<k.point.y?h:-h)+("horizontal"===v?h:-h))/2),a.stroke())}}return{source:a,dest:this.plotArea.ctx,animationCallback:F.fadeInAnimation,easingFunction:F.easing.easeInQuad,animationBase:0,startTimePercent:0.7}};z.prototype.renderLine=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=
this._eventManager.ghostCtx;c.save();var d=this.plotArea;c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var f=a.dataSeriesIndexes[e],g=this.data[f];c.lineWidth=g.lineThickness;var h=g.dataPoints,p="solid";if(c.setLineDash){var k=D(g.nullDataLineDashType,g.lineThickness),p=g.lineDashType,n=D(p,g.lineThickness);c.setLineDash(n)}var m=g.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:f};m=C(m);b.strokeStyle=m;b.lineWidth=
0<g.lineThickness?Math.max(g.lineThickness,4):0;var m=g._colorSet,l=m=g._options.lineColor?g._options.lineColor:m[0];c.strokeStyle=m;var q=!0,r=0,s,y;c.beginPath();if(0<h.length){for(var u=!1,r=0;r<h.length;r++)if(s=h[r].x.getTime?h[r].x.getTime():h[r].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax&&(!g.connectNullData||!u)))if("number"!==typeof h[r].y)0<r&&!(g.connectNullData||u||q)&&(c.stroke(),t&&b.stroke()),u=!0;else{s=a.axisX.convertValueToPixel(s);y=a.axisY.convertValueToPixel(h[r].y);
var v=g.dataPointIds[r];this._eventManager.objectMap[v]={id:v,objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:r,x1:s,y1:y};q||u?(!q&&g.connectNullData?(c.setLineDash&&(g._options.nullDataLineDashType||p===g.lineDashType&&g.lineDashType!==g.nullDataLineDashType)&&(c.stroke(),p=g.nullDataLineDashType,c.setLineDash(k)),c.lineTo(s,y),t&&b.lineTo(s,y)):(c.beginPath(),c.moveTo(s,y),t&&(b.beginPath(),b.moveTo(s,y))),u=q=!1):(c.lineTo(s,y),t&&b.lineTo(s,y),0==r%500&&(c.stroke(),c.beginPath(),c.moveTo(s,
y),t&&(b.stroke(),b.beginPath(),b.moveTo(s,y))));r<h.length-1&&(l!==(h[r].lineColor||m)||p!==(h[r].lineDashType||g.lineDashType))&&(c.stroke(),c.beginPath(),c.moveTo(s,y),l=h[r].lineColor||m,c.strokeStyle=l,c.setLineDash&&(h[r].lineDashType?(p=h[r].lineDashType,c.setLineDash(D(p,g.lineThickness))):(p=g.lineDashType,c.setLineDash(n))));if(0<h[r].markerSize||0<g.markerSize){var w=g.getMarkerProperties(r,s,y,c);d.push(w);v=C(v);t&&d.push({x:s,y:y,ctx:b,type:w.type,size:w.size,color:v,borderColor:v,borderThickness:w.borderThickness})}(h[r].indexLabel||
g.indexLabel||h[r].indexLabelFormatter||g.indexLabelFormatter)&&this._indexLabels.push({chartType:"line",dataPoint:h[r],dataSeries:g,point:{x:s,y:y},direction:0>h[r].y===a.axisY.reversed?1:-1,color:m})}c.stroke();t&&b.stroke()}}P.drawMarkers(d);c.restore();c.beginPath();t&&b.beginPath();return{source:c,dest:this.plotArea.ctx,animationCallback:F.xClipAnimation,easingFunction:F.easing.linear,animationBase:0}}};z.prototype.renderStepLine=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=
a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx;c.save();var d=this.plotArea;c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var f=a.dataSeriesIndexes[e],g=this.data[f];c.lineWidth=g.lineThickness;var h=g.dataPoints,p="solid";if(c.setLineDash){var k=D(g.nullDataLineDashType,g.lineThickness),p=g.lineDashType,n=D(p,g.lineThickness);c.setLineDash(n)}var m=g.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:f};
m=C(m);b.strokeStyle=m;b.lineWidth=0<g.lineThickness?Math.max(g.lineThickness,4):0;var m=g._colorSet,l=m=g._options.lineColor?g._options.lineColor:m[0];c.strokeStyle=m;var q=!0,r=0,s,y;c.beginPath();if(0<h.length){for(var u=!1,r=0;r<h.length;r++)if(s=h[r].getTime?h[r].x.getTime():h[r].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax&&(!g.connectNullData||!u)))if("number"!==typeof h[r].y)0<r&&!(g.connectNullData||u||q)&&(c.stroke(),t&&b.stroke()),u=!0;else{var v=y;s=a.axisX.convertValueToPixel(s);
y=a.axisY.convertValueToPixel(h[r].y);var w=g.dataPointIds[r];this._eventManager.objectMap[w]={id:w,objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:r,x1:s,y1:y};q||u?(!q&&g.connectNullData?(c.setLineDash&&(g._options.nullDataLineDashType||p===g.lineDashType&&g.lineDashType!==g.nullDataLineDashType)&&(c.stroke(),p=g.nullDataLineDashType,c.setLineDash(k)),c.lineTo(s,v),c.lineTo(s,y),t&&(b.lineTo(s,v),b.lineTo(s,y))):(c.beginPath(),c.moveTo(s,y),t&&(b.beginPath(),b.moveTo(s,y))),u=q=!1):(c.lineTo(s,
v),t&&b.lineTo(s,v),c.lineTo(s,y),t&&b.lineTo(s,y),0==r%500&&(c.stroke(),c.beginPath(),c.moveTo(s,y),t&&(b.stroke(),b.beginPath(),b.moveTo(s,y))));r<h.length-1&&(l!==(h[r].lineColor||m)||p!==(h[r].lineDashType||g.lineDashType))&&(c.stroke(),c.beginPath(),c.moveTo(s,y),l=h[r].lineColor||m,c.strokeStyle=l,c.setLineDash&&(h[r].lineDashType?(p=h[r].lineDashType,c.setLineDash(D(p,g.lineThickness))):(p=g.lineDashType,c.setLineDash(n))));if(0<h[r].markerSize||0<g.markerSize)v=g.getMarkerProperties(r,s,y,
c),d.push(v),w=C(w),t&&d.push({x:s,y:y,ctx:b,type:v.type,size:v.size,color:w,borderColor:w,borderThickness:v.borderThickness});(h[r].indexLabel||g.indexLabel||h[r].indexLabelFormatter||g.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepLine",dataPoint:h[r],dataSeries:g,point:{x:s,y:y},direction:0>h[r].y===a.axisY.reversed?1:-1,color:m})}c.stroke();t&&b.stroke()}}P.drawMarkers(d);c.restore();c.beginPath();t&&b.beginPath();return{source:c,dest:this.plotArea.ctx,animationCallback:F.xClipAnimation,
easingFunction:F.easing.linear,animationBase:0}}};z.prototype.renderSpline=function(a){function c(a){a=oa(a,2);if(0<a.length){b.beginPath();t&&d.beginPath();b.moveTo(a[0].x,a[0].y);a[0].newStrokeStyle&&(b.strokeStyle=a[0].newStrokeStyle);a[0].newLineDashArray&&b.setLineDash(a[0].newLineDashArray);t&&d.moveTo(a[0].x,a[0].y);for(var c=0;c<a.length-3;c+=3)if(b.bezierCurveTo(a[c+1].x,a[c+1].y,a[c+2].x,a[c+2].y,a[c+3].x,a[c+3].y),t&&d.bezierCurveTo(a[c+1].x,a[c+1].y,a[c+2].x,a[c+2].y,a[c+3].x,a[c+3].y),
0<c&&0===c%3E3||a[c+3].newStrokeStyle||a[c+3].newLineDashArray)b.stroke(),b.beginPath(),b.moveTo(a[c+3].x,a[c+3].y),a[c+3].newStrokeStyle&&(b.strokeStyle=a[c+3].newStrokeStyle),a[c+3].newLineDashArray&&b.setLineDash(a[c+3].newLineDashArray),t&&(d.stroke(),d.beginPath(),d.moveTo(a[c+3].x,a[c+3].y));b.stroke();t&&d.stroke()}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx;b.save();var e=this.plotArea;b.beginPath();b.rect(e.x1,e.y1,e.width,
e.height);b.clip();for(var e=[],f=0;f<a.dataSeriesIndexes.length;f++){var g=a.dataSeriesIndexes[f],h=this.data[g];b.lineWidth=h.lineThickness;var p=h.dataPoints,k="solid";if(b.setLineDash){var n=D(h.nullDataLineDashType,h.lineThickness),k=h.lineDashType,m=D(k,h.lineThickness);b.setLineDash(m)}var l=h.id;this._eventManager.objectMap[l]={objectType:"dataSeries",dataSeriesIndex:g};l=C(l);d.strokeStyle=l;d.lineWidth=0<h.lineThickness?Math.max(h.lineThickness,4):0;var l=h._colorSet,q=l=h._options.lineColor?
h._options.lineColor:l[0];b.strokeStyle=l;var r=0,s,y,u=[];b.beginPath();if(0<p.length)for(y=!1,r=0;r<p.length;r++)if(s=p[r].getTime?p[r].x.getTime():p[r].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!y)))if("number"!==typeof p[r].y)0<r&&!y&&(h.connectNullData?b.setLineDash&&(0<u.length&&(h._options.nullDataLineDashType||!p[r-1].lineDashType))&&(u[u.length-1].newLineDashArray=n,k=h.nullDataLineDashType):(c(u),u=[])),y=!0;else{s=a.axisX.convertValueToPixel(s);
y=a.axisY.convertValueToPixel(p[r].y);var v=h.dataPointIds[r];this._eventManager.objectMap[v]={id:v,objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:r,x1:s,y1:y};u[u.length]={x:s,y:y};r<p.length-1&&(q!==(p[r].lineColor||l)||k!==(p[r].lineDashType||h.lineDashType))&&(q=p[r].lineColor||l,u[u.length-1].newStrokeStyle=q,b.setLineDash&&(p[r].lineDashType?(k=p[r].lineDashType,u[u.length-1].newLineDashArray=D(k,h.lineThickness)):(k=h.lineDashType,u[u.length-1].newLineDashArray=m)));if(0<p[r].markerSize||
0<h.markerSize){var w=h.getMarkerProperties(r,s,y,b);e.push(w);v=C(v);t&&e.push({x:s,y:y,ctx:d,type:w.type,size:w.size,color:v,borderColor:v,borderThickness:w.borderThickness})}(p[r].indexLabel||h.indexLabel||p[r].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"spline",dataPoint:p[r],dataSeries:h,point:{x:s,y:y},direction:0>p[r].y===a.axisY.reversed?1:-1,color:l});y=!1}c(u)}P.drawMarkers(e);b.restore();b.beginPath();t&&d.beginPath();return{source:b,dest:this.plotArea.ctx,
animationCallback:F.xClipAnimation,easingFunction:F.easing.linear,animationBase:0}}};var N=function(a,c,b,d,e,f,g,h,p,k,n,m,l){"undefined"===typeof l&&(l=1);g=g||0;h=h||"black";var q=15<d-c&&15<e-b?8:0.35*Math.min(d-c,e-b);a.beginPath();a.moveTo(c,b);a.save();a.fillStyle=f;a.globalAlpha=l;a.fillRect(c,b,d-c,e-b);a.globalAlpha=1;0<g&&(l=0===g%2?0:0.5,a.beginPath(),a.lineWidth=g,a.strokeStyle=h,a.moveTo(c,b),a.rect(c-l,b-l,d-c+2*l,e-b+2*l),a.stroke());a.restore();!0===p&&(a.save(),a.beginPath(),a.moveTo(c,
b),a.lineTo(c+q,b+q),a.lineTo(d-q,b+q),a.lineTo(d,b),a.closePath(),g=a.createLinearGradient((d+c)/2,b+q,(d+c)/2,b),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=g,a.fill(),a.restore());!0===k&&(a.save(),a.beginPath(),a.moveTo(c,e),a.lineTo(c+q,e-q),a.lineTo(d-q,e-q),a.lineTo(d,e),a.closePath(),g=a.createLinearGradient((d+c)/2,e-q,(d+c)/2,e),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=g,a.fill(),a.restore());!0===n&&(a.save(),a.beginPath(),
a.moveTo(c,b),a.lineTo(c+q,b+q),a.lineTo(c+q,e-q),a.lineTo(c,e),a.closePath(),g=a.createLinearGradient(c+q,(e+b)/2,c,(e+b)/2),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=g,a.fill(),a.restore());!0===m&&(a.save(),a.beginPath(),a.moveTo(d,b),a.lineTo(d-q,b+q),a.lineTo(d-q,e-q),a.lineTo(d,e),g=a.createLinearGradient(d-q,(e+b)/2,d,(e+b)/2),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=g,g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, 0.1)"),
a.fillStyle=g,a.fill(),a.closePath(),a.restore())};z.prototype.renderColumn=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=0,f,g,h,p=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,k=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.width,0.9*(this.plotArea.width/
a.plotType.totalDataSeries))<<0,n=a.axisX.dataInfo.minDiff;isFinite(n)||(n=0.3*Math.abs(a.axisX.range));n=this.dataPointWidth?this.dataPointWidth:0.9*(d.width*(a.axisX.logarithmic?Math.log(n)/Math.log(a.axisX.range):Math.abs(n)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>k&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,k));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&k<e)&&(k=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));n<
e&&(n=e);n>k&&(n=k);c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var k=a.dataSeriesIndexes[d],m=this.data[k],l=m.dataPoints;if(0<l.length)for(var q=5<n&&m.bevelEnabled?!0:!1,e=0;e<l.length;e++)if(l[e].getTime?h=l[e].x.getTime():h=l[e].x,!(h<a.axisX.dataInfo.viewPortMin||
h>a.axisX.dataInfo.viewPortMax)&&"number"===typeof l[e].y){f=a.axisX.convertValueToPixel(h);g=a.axisY.convertValueToPixel(l[e].y);f=a.axisX.reversed?f+a.plotType.totalDataSeries*n/2-(a.previousDataSeriesCount+d)*n<<0:f-a.plotType.totalDataSeries*n/2+(a.previousDataSeriesCount+d)*n<<0;var r=a.axisX.reversed?f-n<<0:f+n<<0,s;0<=l[e].y?s=p:(s=g,g=p);g>s&&(b=g,g=s,s=b);b=l[e].color?l[e].color:m._colorSet[e%m._colorSet.length];N(c,f,g,r,s,b,0,null,q&&0<=l[e].y,0>l[e].y&&q,!1,!1,m.fillOpacity);b=m.dataPointIds[e];
this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:e,x1:f,y1:g,x2:r,y2:s};b=C(b);t&&N(this._eventManager.ghostCtx,f,g,r,s,b,0,null,!1,!1,!1,!1);(l[e].indexLabel||m.indexLabel||l[e].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"column",dataPoint:l[e],dataSeries:m,point:{x:f+(r-f)/2,y:0>l[e].y===a.axisY.reversed?g:s},direction:0>l[e].y===a.axisY.reversed?1:-1,bounds:{x1:f,y1:Math.min(g,s),x2:r,y2:Math.max(g,s)},color:b})}}c.restore();
t&&this._eventManager.ghostCtx.restore();a=Math.min(p,a.axisY.boundingRect.y2);return{source:c,dest:this.plotArea.ctx,animationCallback:F.yScaleAnimation,easingFunction:F.easing.easeOutQuart,animationBase:a}}};z.prototype.renderStackedColumn=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],f=[],g=[],h=0,p,k=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.dataPointMinWidth?this.dataPointMinWidth:
this.dataPointWidth?this.dataPointWidth:1,n=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.width<<0,m=a.axisX.dataInfo.minDiff;isFinite(m)||(m=0.3*Math.abs(a.axisX.range));m=this.dataPointWidth?this.dataPointWidth:0.9*(d.width*(a.axisX.logarithmic?Math.log(m)/Math.log(a.axisX.range):Math.abs(m)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>n&&(h=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,n));!this.dataPointMaxWidth&&
(this.dataPointMinWidth&&n<h)&&(n=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,h));m<h&&(m=h);m>n&&(m=n);c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(n=0;n<a.dataSeriesIndexes.length;n++){var l=a.dataSeriesIndexes[n],q=this.data[l],r=q.dataPoints;if(0<r.length){var s=5<m&&q.bevelEnabled?
!0:!1;c.strokeStyle="#4572A7 ";for(h=0;h<r.length;h++)if(b=r[h].x.getTime?r[h].x.getTime():r[h].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[h].y){var d=a.axisX.convertValueToPixel(b),y=d-a.plotType.plotUnits.length*m/2+a.index*m<<0,u=y+m<<0,v;if(a.axisY.logarithmic)g[b]=r[h].y+(g[b]?g[b]:0),0<g[b]&&(p=a.axisY.convertValueToPixel(g[b]),v=e[b]?e[b]:k,e[b]=p);else if(p=a.axisY.convertValueToPixel(r[h].y),0<=r[h].y){var w=e[b]?e[b]:0;p-=w;v=k-w;e[b]=w+(v-p)}else w=
f[b]?f[b]:0,v=p+w,p=k+w,f[b]=w+(v-p);b=r[h].color?r[h].color:q._colorSet[h%q._colorSet.length];N(c,y,p,u,v,b,0,null,s&&0<=r[h].y,0>r[h].y&&s,!1,!1,q.fillOpacity);b=q.dataPointIds[h];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:h,x1:y,y1:p,x2:u,y2:v};b=C(b);t&&N(this._eventManager.ghostCtx,y,p,u,v,b,0,null,!1,!1,!1,!1);(r[h].indexLabel||q.indexLabel||r[h].indexLabelFormatter||q.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn",
dataPoint:r[h],dataSeries:q,point:{x:d,y:0<=r[h].y?p:v},direction:0>r[h].y===a.axisY.reversed?1:-1,bounds:{x1:y,y1:Math.min(p,v),x2:u,y2:Math.max(p,v)},color:b})}}}c.restore();t&&this._eventManager.ghostCtx.restore();a=Math.min(k,a.axisY.boundingRect.y2);return{source:c,dest:this.plotArea.ctx,animationCallback:F.yScaleAnimation,easingFunction:F.easing.easeOutQuart,animationBase:a}}};z.prototype.renderStackedColumn100=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=
null,d=this.plotArea,e=[],f=[],g=[],h=0,p,k=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,n=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.width<<0,m=a.axisX.dataInfo.minDiff;isFinite(m)||(m=0.3*Math.abs(a.axisX.range));m=this.dataPointWidth?this.dataPointWidth:0.9*(d.width*(a.axisX.logarithmic?Math.log(m)/Math.log(a.axisX.range):Math.abs(m)/
Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>n&&(h=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,n));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&n<h)&&(n=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,h));m<h&&(m=h);m>n&&(m=n);c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),
this._eventManager.ghostCtx.clip());for(n=0;n<a.dataSeriesIndexes.length;n++){var l=a.dataSeriesIndexes[n],q=this.data[l],r=q.dataPoints;if(0<r.length)for(var s=5<m&&q.bevelEnabled?!0:!1,h=0;h<r.length;h++)if(b=r[h].x.getTime?r[h].x.getTime():r[h].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[h].y){d=a.axisX.convertValueToPixel(b);p=0!==a.dataPointYSums[b]?100*(r[h].y/a.dataPointYSums[b]):0;var y=d-a.plotType.plotUnits.length*m/2+a.index*m<<0,u=y+m<<0,v;
if(a.axisY.logarithmic){g[b]=p+(g[b]?g[b]:0);if(0>=g[b])continue;p=a.axisY.convertValueToPixel(g[b]);v=e[b]?e[b]:k;e[b]=p}else if(p=a.axisY.convertValueToPixel(p),0<=r[h].y){var w=e[b]?e[b]:0;p-=w;v=k-w;e[b]=w+(v-p)}else w=f[b]?f[b]:0,v=p+w,p=k+w,f[b]=w+(v-p);b=r[h].color?r[h].color:q._colorSet[h%q._colorSet.length];N(c,y,p,u,v,b,0,null,s&&0<=r[h].y,0>r[h].y&&s,!1,!1,q.fillOpacity);b=q.dataPointIds[h];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:h,
x1:y,y1:p,x2:u,y2:v};b=C(b);t&&N(this._eventManager.ghostCtx,y,p,u,v,b,0,null,!1,!1,!1,!1);(r[h].indexLabel||q.indexLabel||r[h].indexLabelFormatter||q.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn100",dataPoint:r[h],dataSeries:q,point:{x:d,y:0<=r[h].y?p:v},direction:0>r[h].y===a.axisY.reversed?1:-1,bounds:{x1:y,y1:Math.min(p,v),x2:u,y2:Math.max(p,v)},color:b})}}c.restore();t&&this._eventManager.ghostCtx.restore();a=Math.min(k,a.axisY.boundingRect.y2);return{source:c,dest:this.plotArea.ctx,
animationCallback:F.yScaleAnimation,easingFunction:F.easing.easeOutQuart,animationBase:a}}};z.prototype.renderBar=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=0,f,g,h,p=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,k=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*
this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0,n=a.axisX.dataInfo.minDiff;isFinite(n)||(n=0.3*Math.abs(a.axisX.range));n=this.dataPointWidth?this.dataPointWidth:0.9*(d.height*(a.axisX.logarithmic?Math.log(n)/Math.log(a.axisX.range):Math.abs(n)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>k&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,k));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&k<e)&&(k=Math.max(this.dataPointWidth?
this.dataPointWidth:-Infinity,e));n<e&&(n=e);n>k&&(n=k);c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var k=a.dataSeriesIndexes[d],m=this.data[k],l=m.dataPoints;if(0<l.length){var q=5<n&&m.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(e=0;e<l.length;e++)if(l[e].getTime?
h=l[e].x.getTime():h=l[e].x,!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&"number"===typeof l[e].y){g=a.axisX.convertValueToPixel(h);f=a.axisY.convertValueToPixel(l[e].y);g=a.axisX.reversed?g+a.plotType.totalDataSeries*n/2-(a.previousDataSeriesCount+d)*n<<0:g-a.plotType.totalDataSeries*n/2+(a.previousDataSeriesCount+d)*n<<0;var r=a.axisX.reversed?g-n<<0:g+n<<0,s;0<=l[e].y?s=p:(s=f,f=p);b=l[e].color?l[e].color:m._colorSet[e%m._colorSet.length];N(c,s,g,f,r,b,0,null,q,!1,!1,!1,m.fillOpacity);
b=m.dataPointIds[e];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:e,x1:s,y1:g,x2:f,y2:r};b=C(b);t&&N(this._eventManager.ghostCtx,s,g,f,r,b,0,null,!1,!1,!1,!1);(l[e].indexLabel||m.indexLabel||l[e].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"bar",dataPoint:l[e],dataSeries:m,point:{x:0<=l[e].y?f:s,y:g+(r-g)/2},direction:0>l[e].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(s,f),y1:g,x2:Math.max(s,f),y2:r},color:b})}}}c.restore();
t&&this._eventManager.ghostCtx.restore();a=Math.max(p,a.axisX.boundingRect.x2);return{source:c,dest:this.plotArea.ctx,animationCallback:F.xScaleAnimation,easingFunction:F.easing.easeOutQuart,animationBase:a}}};z.prototype.renderStackedBar=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],f=[],g=[],h=0,p,k=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.dataPointMinWidth?this.dataPointMinWidth:
this.dataPointWidth?this.dataPointWidth:1,n=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.height<<0,m=a.axisX.dataInfo.minDiff;isFinite(m)||(m=0.3*Math.abs(a.axisX.range));m=this.dataPointWidth?this.dataPointWidth:0.9*(d.height*(a.axisX.logarithmic?Math.log(m)/Math.log(a.axisX.range):Math.abs(m)/Math.abs(a.axisX.range))/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>n&&(h=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,n));!this.dataPointMaxWidth&&
(this.dataPointMinWidth&&n<h)&&(n=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,h));m<h&&(m=h);m>n&&(m=n);c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(n=0;n<a.dataSeriesIndexes.length;n++){var l=a.dataSeriesIndexes[n],q=this.data[l],r=q.dataPoints;if(0<r.length){var s=5<m&&q.bevelEnabled?
!0:!1;c.strokeStyle="#4572A7 ";for(h=0;h<r.length;h++)if(b=r[h].x.getTime?r[h].x.getTime():r[h].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[h].y){var d=a.axisX.convertValueToPixel(b),y=d-a.plotType.plotUnits.length*m/2+a.index*m<<0,u=y+m<<0,v;if(a.axisY.logarithmic)g[b]=r[h].y+(g[b]?g[b]:0),0<g[b]&&(v=e[b]?e[b]:k,e[b]=p=a.axisY.convertValueToPixel(g[b]));else if(p=a.axisY.convertValueToPixel(r[h].y),0<=r[h].y){var w=e[b]?e[b]:0;v=k+w;p+=w;e[b]=w+(p-v)}else w=
f[b]?f[b]:0,v=p-w,p=k-w,f[b]=w+(p-v);b=r[h].color?r[h].color:q._colorSet[h%q._colorSet.length];N(c,v,y,p,u,b,0,null,s,!1,!1,!1,q.fillOpacity);b=q.dataPointIds[h];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:h,x1:v,y1:y,x2:p,y2:u};b=C(b);t&&N(this._eventManager.ghostCtx,v,y,p,u,b,0,null,!1,!1,!1,!1);(r[h].indexLabel||q.indexLabel||r[h].indexLabelFormatter||q.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar",dataPoint:r[h],dataSeries:q,
point:{x:0<=r[h].y?p:v,y:d},direction:0>r[h].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(v,p),y1:y,x2:Math.max(v,p),y2:u},color:b})}}}c.restore();t&&this._eventManager.ghostCtx.restore();a=Math.max(k,a.axisX.boundingRect.x2);return{source:c,dest:this.plotArea.ctx,animationCallback:F.xScaleAnimation,easingFunction:F.easing.easeOutQuart,animationBase:a}}};z.prototype.renderStackedBar100=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,
e=[],f=[],g=[],h=0,p,k=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),h=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,n=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.height<<0,m=a.axisX.dataInfo.minDiff;isFinite(m)||(m=0.3*Math.abs(a.axisX.range));m=this.dataPointWidth?this.dataPointWidth:0.9*(d.height*(a.axisX.logarithmic?Math.log(m)/Math.log(a.axisX.range):Math.abs(m)/Math.abs(a.axisX.range))/
a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&h>n&&(h=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,n));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&n<h)&&(n=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,h));m<h&&(m=h);m>n&&(m=n);c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());
for(n=0;n<a.dataSeriesIndexes.length;n++){var l=a.dataSeriesIndexes[n],q=this.data[l],r=q.dataPoints;if(0<r.length){var s=5<m&&q.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(h=0;h<r.length;h++)if(b=r[h].x.getTime?r[h].x.getTime():r[h].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[h].y){var d=a.axisX.convertValueToPixel(b),y;y=0!==a.dataPointYSums[b]?100*(r[h].y/a.dataPointYSums[b]):0;var u=d-a.plotType.plotUnits.length*m/2+a.index*m<<0,v=u+m<<0;if(a.axisY.logarithmic){g[b]=
y+(g[b]?g[b]:0);if(0>=g[b])continue;y=e[b]?e[b]:k;e[b]=p=a.axisY.convertValueToPixel(g[b])}else if(p=a.axisY.convertValueToPixel(y),0<=r[h].y){var w=e[b]?e[b]:0;y=k+w;p+=w;e[b]=w+(p-y)}else w=f[b]?f[b]:0,y=p-w,p=k-w,f[b]=w+(p-y);b=r[h].color?r[h].color:q._colorSet[h%q._colorSet.length];N(c,y,u,p,v,b,0,null,s,!1,!1,!1,q.fillOpacity);b=q.dataPointIds[h];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:h,x1:y,y1:u,x2:p,y2:v};b=C(b);t&&N(this._eventManager.ghostCtx,
y,u,p,v,b,0,null,!1,!1,!1,!1);(r[h].indexLabel||q.indexLabel||r[h].indexLabelFormatter||q.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar100",dataPoint:r[h],dataSeries:q,point:{x:0<=r[h].y?p:y,y:d},direction:0>r[h].y===a.axisY.reversed?1:-1,bounds:{x1:Math.min(y,p),y1:u,x2:Math.max(y,p),y2:v},color:b})}}}c.restore();t&&this._eventManager.ghostCtx.restore();a=Math.max(k,a.axisX.boundingRect.x2);return{source:c,dest:this.plotArea.ctx,animationCallback:F.xScaleAnimation,easingFunction:F.easing.easeOutQuart,
animationBase:a}}};z.prototype.renderArea=function(a){function c(){v&&(0<k.lineThickness&&b.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?u=y:0>a.axisY.viewportMaximum?u=f.y1:0<a.axisY.viewportMinimum&&(u=e.y2),b.lineTo(q,u),b.lineTo(v.x,u),b.closePath(),b.globalAlpha=k.fillOpacity,b.fill(),b.globalAlpha=1,t&&(d.lineTo(q,u),d.lineTo(v.x,u),d.closePath(),d.fill()),b.beginPath(),b.moveTo(q,r),d.beginPath(),d.moveTo(q,r),v={x:q,y:r})}var b=a.targetCanvasCtx||this.plotArea.ctx;
if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],h=this.plotArea;b.save();t&&d.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();t&&(d.beginPath(),d.rect(h.x1,h.y1,h.width,h.height),d.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var p=a.dataSeriesIndexes[h],k=this.data[p],n=k.dataPoints,g=k.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:p};g=C(g);d.fillStyle=g;var g=[],m=
!0,l=0,q,r,s,y=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),u,v=null;if(0<n.length){var w=k._colorSet[l%k._colorSet.length],x=k._options.lineColor||w,z=x;b.fillStyle=w;b.strokeStyle=x;b.lineWidth=k.lineThickness;var A="solid";if(b.setLineDash){var B=D(k.nullDataLineDashType,k.lineThickness),A=k.lineDashType,J=D(A,k.lineThickness);b.setLineDash(J)}for(var I=!0;l<n.length;l++)if(s=n[l].x.getTime?n[l].x.getTime():n[l].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax&&
(!k.connectNullData||!I)))if("number"!==typeof n[l].y)k.connectNullData||(I||m)||c(),I=!0;else{q=a.axisX.convertValueToPixel(s);r=a.axisY.convertValueToPixel(n[l].y);m||I?(!m&&k.connectNullData?(b.setLineDash&&(k._options.nullDataLineDashType||A===k.lineDashType&&k.lineDashType!==k.nullDataLineDashType)&&(b.stroke(),A=k.nullDataLineDashType,b.setLineDash(B)),b.lineTo(q,r),t&&d.lineTo(q,r)):(b.beginPath(),b.moveTo(q,r),t&&(d.beginPath(),d.moveTo(q,r)),v={x:q,y:r}),I=m=!1):(b.lineTo(q,r),t&&d.lineTo(q,
r),0==l%250&&c());l<n.length-1&&(z!==(n[l].lineColor||x)||A!==(n[l].lineDashType||k.lineDashType))&&(c(),z=n[l].lineColor||x,b.strokeStyle=z,b.setLineDash&&(n[l].lineDashType?(A=n[l].lineDashType,b.setLineDash(D(A,k.lineThickness))):(A=k.lineDashType,b.setLineDash(J))));var G=k.dataPointIds[l];this._eventManager.objectMap[G]={id:G,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:l,x1:q,y1:r};0!==n[l].markerSize&&(0<n[l].markerSize||0<k.markerSize)&&(s=k.getMarkerProperties(l,q,r,b),g.push(s),
G=C(G),t&&g.push({x:q,y:r,ctx:d,type:s.type,size:s.size,color:G,borderColor:G,borderThickness:s.borderThickness}));(n[l].indexLabel||k.indexLabel||n[l].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"area",dataPoint:n[l],dataSeries:k,point:{x:q,y:r},direction:0>n[l].y===a.axisY.reversed?1:-1,color:w})}c();P.drawMarkers(g)}}b.restore();t&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:F.xClipAnimation,easingFunction:F.easing.linear,
animationBase:0}}};z.prototype.renderSplineArea=function(a){function c(){var c=oa(u,2);if(0<c.length){if(0<k.lineThickness){b.beginPath();b.moveTo(c[0].x,c[0].y);c[0].newStrokeStyle&&(b.strokeStyle=c[0].newStrokeStyle);c[0].newLineDashArray&&b.setLineDash(c[0].newLineDashArray);for(var g=0;g<c.length-3;g+=3)if(b.bezierCurveTo(c[g+1].x,c[g+1].y,c[g+2].x,c[g+2].y,c[g+3].x,c[g+3].y),t&&d.bezierCurveTo(c[g+1].x,c[g+1].y,c[g+2].x,c[g+2].y,c[g+3].x,c[g+3].y),c[g+3].newStrokeStyle||c[g+3].newLineDashArray)b.stroke(),
b.beginPath(),b.moveTo(c[g+3].x,c[g+3].y),c[g+3].newStrokeStyle&&(b.strokeStyle=c[g+3].newStrokeStyle),c[g+3].newLineDashArray&&b.setLineDash(c[g+3].newLineDashArray);b.stroke()}b.beginPath();b.moveTo(c[0].x,c[0].y);t&&(d.beginPath(),d.moveTo(c[0].x,c[0].y));for(g=0;g<c.length-3;g+=3)b.bezierCurveTo(c[g+1].x,c[g+1].y,c[g+2].x,c[g+2].y,c[g+3].x,c[g+3].y),t&&d.bezierCurveTo(c[g+1].x,c[g+1].y,c[g+2].x,c[g+2].y,c[g+3].x,c[g+3].y);a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?
s=r:0>a.axisY.viewportMaximum?s=f.y1:0<a.axisY.viewportMinimum&&(s=e.y2);y={x:c[0].x,y:c[0].y};b.lineTo(c[c.length-1].x,s);b.lineTo(y.x,s);b.closePath();b.globalAlpha=k.fillOpacity;b.fill();b.globalAlpha=1;t&&(d.lineTo(c[c.length-1].x,s),d.lineTo(y.x,s),d.closePath(),d.fill())}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],h=this.plotArea;b.save();t&&d.save();b.beginPath();
b.rect(h.x1,h.y1,h.width,h.height);b.clip();t&&(d.beginPath(),d.rect(h.x1,h.y1,h.width,h.height),d.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var p=a.dataSeriesIndexes[h],k=this.data[p],n=k.dataPoints,g=k.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:p};g=C(g);d.fillStyle=g;var g=[],m=0,l,q,r=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),s,y=null,u=[];if(0<n.length){var v=k._colorSet[m%k._colorSet.length],w=k._options.lineColor||v,
x=w;b.fillStyle=v;b.strokeStyle=w;b.lineWidth=k.lineThickness;var z="solid";if(b.setLineDash){var A=D(k.nullDataLineDashType,k.lineThickness),z=k.lineDashType,B=D(z,k.lineThickness);b.setLineDash(B)}for(q=!1;m<n.length;m++)if(l=n[m].x.getTime?n[m].x.getTime():n[m].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!q)))if("number"!==typeof n[m].y)0<m&&!q&&(k.connectNullData?b.setLineDash&&(0<u.length&&(k._options.nullDataLineDashType||!n[m-1].lineDashType))&&
(u[u.length-1].newLineDashArray=A,z=k.nullDataLineDashType):(c(),u=[])),q=!0;else{l=a.axisX.convertValueToPixel(l);q=a.axisY.convertValueToPixel(n[m].y);var J=k.dataPointIds[m];this._eventManager.objectMap[J]={id:J,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:m,x1:l,y1:q};u[u.length]={x:l,y:q};m<n.length-1&&(x!==(n[m].lineColor||w)||z!==(n[m].lineDashType||k.lineDashType))&&(x=n[m].lineColor||w,u[u.length-1].newStrokeStyle=x,b.setLineDash&&(n[m].lineDashType?(z=n[m].lineDashType,u[u.length-
1].newLineDashArray=D(z,k.lineThickness)):(z=k.lineDashType,u[u.length-1].newLineDashArray=B)));if(0!==n[m].markerSize&&(0<n[m].markerSize||0<k.markerSize)){var I=k.getMarkerProperties(m,l,q,b);g.push(I);J=C(J);t&&g.push({x:l,y:q,ctx:d,type:I.type,size:I.size,color:J,borderColor:J,borderThickness:I.borderThickness})}(n[m].indexLabel||k.indexLabel||n[m].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"splineArea",dataPoint:n[m],dataSeries:k,point:{x:l,y:q},direction:0>
n[m].y===a.axisY.reversed?1:-1,color:v});q=!1}c();P.drawMarkers(g)}}b.restore();t&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:F.xClipAnimation,easingFunction:F.easing.linear,animationBase:0}}};z.prototype.renderStepArea=function(a){function c(){v&&(0<k.lineThickness&&b.stroke(),a.axisY.logarithmic||0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?u=y:0>a.axisY.viewportMaximum?u=f.y1:0<a.axisY.viewportMinimum&&(u=e.y2),b.lineTo(q,u),b.lineTo(v.x,
u),b.closePath(),b.globalAlpha=k.fillOpacity,b.fill(),b.globalAlpha=1,t&&(d.lineTo(q,u),d.lineTo(v.x,u),d.closePath(),d.fill()),b.beginPath(),b.moveTo(q,r),d.beginPath(),d.moveTo(q,r),v={x:q,y:r})}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],h=this.plotArea;b.save();t&&d.save();b.beginPath();b.rect(h.x1,h.y1,h.width,h.height);b.clip();t&&(d.beginPath(),d.rect(h.x1,h.y1,h.width,
h.height),d.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var p=a.dataSeriesIndexes[h],k=this.data[p],n=k.dataPoints,g=k.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:p};g=C(g);d.fillStyle=g;var g=[],m=!0,l=0,q,r,s,y=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),u,v=null,w=!1;if(0<n.length){var x=k._colorSet[l%k._colorSet.length],z=k._options.lineColor||x,A=z;b.fillStyle=x;b.strokeStyle=z;b.lineWidth=k.lineThickness;var B="solid";if(b.setLineDash){var J=
D(k.nullDataLineDashType,k.lineThickness),B=k.lineDashType,I=D(B,k.lineThickness);b.setLineDash(I)}for(;l<n.length;l++)if(s=n[l].x.getTime?n[l].x.getTime():n[l].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax&&(!k.connectNullData||!w))){var G=r;"number"!==typeof n[l].y?(k.connectNullData||(w||m)||c(),w=!0):(q=a.axisX.convertValueToPixel(s),r=a.axisY.convertValueToPixel(n[l].y),m||w?(!m&&k.connectNullData?(b.setLineDash&&(k._options.nullDataLineDashType||B===k.lineDashType&&k.lineDashType!==
k.nullDataLineDashType)&&(b.stroke(),B=k.nullDataLineDashType,b.setLineDash(J)),b.lineTo(q,G),b.lineTo(q,r),t&&(d.lineTo(q,G),d.lineTo(q,r))):(b.beginPath(),b.moveTo(q,r),t&&(d.beginPath(),d.moveTo(q,r)),v={x:q,y:r}),w=m=!1):(b.lineTo(q,G),t&&d.lineTo(q,G),b.lineTo(q,r),t&&d.lineTo(q,r),0==l%250&&c()),l<n.length-1&&(A!==(n[l].lineColor||z)||B!==(n[l].lineDashType||k.lineDashType))&&(c(),A=n[l].lineColor||z,b.strokeStyle=A,b.setLineDash&&(n[l].lineDashType?(B=n[l].lineDashType,b.setLineDash(D(B,k.lineThickness))):
(B=k.lineDashType,b.setLineDash(I)))),G=k.dataPointIds[l],this._eventManager.objectMap[G]={id:G,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:l,x1:q,y1:r},0!==n[l].markerSize&&(0<n[l].markerSize||0<k.markerSize)&&(s=k.getMarkerProperties(l,q,r,b),g.push(s),G=C(G),t&&g.push({x:q,y:r,ctx:d,type:s.type,size:s.size,color:G,borderColor:G,borderThickness:s.borderThickness})),(n[l].indexLabel||k.indexLabel||n[l].indexLabelFormatter||k.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepArea",
dataPoint:n[l],dataSeries:k,point:{x:q,y:r},direction:0>n[l].y===a.axisY.reversed?1:-1,color:x}))}c();P.drawMarkers(g)}}b.restore();t&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:F.xClipAnimation,easingFunction:F.easing.linear,animationBase:0}}};z.prototype.renderStackedArea=function(a){function c(){if(!(1>h.length)){for(0<v.lineThickness&&b.stroke();0<h.length;){var a=h.pop();b.lineTo(a.x,a.y);t&&s.lineTo(a.x,a.y)}b.closePath();b.globalAlpha=v.fillOpacity;
b.fill();b.globalAlpha=1;b.beginPath();t&&(s.closePath(),s.fill(),s.beginPath());h=[]}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=null,e=[],f=this.plotArea,g=[],h=[],p=[],k=[],n=0,m,l,q,r=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),s=this._eventManager.ghostCtx;t&&s.beginPath();b.save();t&&s.save();b.beginPath();b.rect(f.x1,f.y1,f.width,f.height);b.clip();t&&(s.beginPath(),s.rect(f.x1,f.y1,f.width,f.height),s.clip());for(var y=
[],f=0;f<a.dataSeriesIndexes.length;f++){var u=a.dataSeriesIndexes[f],v=this.data[u],w=v.dataPoints;v.dataPointIndexes=[];for(n=0;n<w.length;n++)u=w[n].x.getTime?w[n].x.getTime():w[n].x,v.dataPointIndexes[u]=n,y[u]||(p.push(u),y[u]=!0);p.sort(ta)}for(f=0;f<a.dataSeriesIndexes.length;f++){u=a.dataSeriesIndexes[f];v=this.data[u];w=v.dataPoints;y=!0;h=[];n=v.id;this._eventManager.objectMap[n]={objectType:"dataSeries",dataSeriesIndex:u};n=C(n);s.fillStyle=n;if(0<p.length){var d=v._colorSet[0],x=v._options.lineColor||
d,z=x;b.fillStyle=d;b.strokeStyle=x;b.lineWidth=v.lineThickness;var A="solid";if(b.setLineDash){var B=D(v.nullDataLineDashType,v.lineThickness),A=v.lineDashType,J=D(A,v.lineThickness);b.setLineDash(J)}for(var I=!0,n=0;n<p.length;n++){q=p[n];var G=null,G=0<=v.dataPointIndexes[q]?w[v.dataPointIndexes[q]]:{x:q,y:null};if(!(q<a.axisX.dataInfo.viewPortMin||q>a.axisX.dataInfo.viewPortMax&&(!v.connectNullData||!I)))if("number"!==typeof G.y)v.connectNullData||(I||y)||c(),I=!0;else{m=a.axisX.convertValueToPixel(q);
var $=g[q]?g[q]:0;if(a.axisY.logarithmic){k[q]=G.y+(k[q]?k[q]:0);if(0>=k[q])continue;l=a.axisY.convertValueToPixel(k[q])}else l=a.axisY.convertValueToPixel(G.y),l-=$;h.push({x:m,y:r-$});g[q]=r-l;y||I?(!y&&v.connectNullData?(b.setLineDash&&(v._options.nullDataLineDashType||A===v.lineDashType&&v.lineDashType!==v.nullDataLineDashType)&&(b.stroke(),A=v.nullDataLineDashType,b.setLineDash(B)),b.lineTo(m,l),t&&s.lineTo(m,l)):(b.beginPath(),b.moveTo(m,l),t&&(s.beginPath(),s.moveTo(m,l))),I=y=!1):(b.lineTo(m,
l),t&&s.lineTo(m,l),0==n%250&&(c(),b.moveTo(m,l),t&&s.moveTo(m,l),h.push({x:m,y:r-$})));n<w.length-1&&(z!==(w[n].lineColor||x)||A!==(w[n].lineDashType||v.lineDashType))&&(c(),b.beginPath(),b.moveTo(m,l),h.push({x:m,y:r-$}),z=w[n].lineColor||x,b.strokeStyle=z,b.setLineDash&&(w[n].lineDashType?(A=w[n].lineDashType,b.setLineDash(D(A,v.lineThickness))):(A=v.lineDashType,b.setLineDash(J))));if(0<=v.dataPointIndexes[q]){var aa=v.dataPointIds[v.dataPointIndexes[q]];this._eventManager.objectMap[aa]={id:aa,
objectType:"dataPoint",dataSeriesIndex:u,dataPointIndex:v.dataPointIndexes[q],x1:m,y1:l}}0<=v.dataPointIndexes[q]&&0!==G.markerSize&&(0<G.markerSize||0<v.markerSize)&&(q=v.getMarkerProperties(n,m,l,b),e.push(q),markerColor=C(aa),t&&e.push({x:m,y:l,ctx:s,type:q.type,size:q.size,color:markerColor,borderColor:markerColor,borderThickness:q.borderThickness}));(G.indexLabel||v.indexLabel||G.indexLabelFormatter||v.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:G,dataSeries:v,
point:{x:m,y:l},direction:0>w[n].y===a.axisY.reversed?1:-1,color:d})}}c();b.moveTo(m,l);t&&s.moveTo(m,l)}delete v.dataPointIndexes}P.drawMarkers(e);b.restore();t&&s.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:F.xClipAnimation,easingFunction:F.easing.linear,animationBase:0}}};z.prototype.renderStackedArea100=function(a){function c(){for(0<v.lineThickness&&b.stroke();0<h.length;){var a=h.pop();b.lineTo(a.x,a.y);t&&s.lineTo(a.x,a.y)}b.closePath();b.globalAlpha=v.fillOpacity;b.fill();
b.globalAlpha=1;b.beginPath();t&&(s.closePath(),s.fill(),s.beginPath());h=[]}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=null,e=this.plotArea,f=[],g=[],h=[],p=[],k=[],n=0,m,l,q,r=a.axisY.convertValueToPixel(a.axisY.logarithmic?a.axisY.viewportMinimum:0),s=this._eventManager.ghostCtx;b.save();t&&s.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();t&&(s.beginPath(),s.rect(e.x1,e.y1,e.width,e.height),s.clip());for(var y=[],e=0;e<a.dataSeriesIndexes.length;e++){var u=
a.dataSeriesIndexes[e],v=this.data[u],w=v.dataPoints;v.dataPointIndexes=[];for(n=0;n<w.length;n++)u=w[n].x.getTime?w[n].x.getTime():w[n].x,v.dataPointIndexes[u]=n,y[u]||(p.push(u),y[u]=!0);p.sort(ta)}for(e=0;e<a.dataSeriesIndexes.length;e++){u=a.dataSeriesIndexes[e];v=this.data[u];w=v.dataPoints;y=!0;d=v.id;this._eventManager.objectMap[d]={objectType:"dataSeries",dataSeriesIndex:u};d=C(d);s.fillStyle=d;h=[];if(0<p.length){var d=v._colorSet[n%v._colorSet.length],x=v._options.lineColor||d,z=x;b.fillStyle=
d;b.strokeStyle=x;b.lineWidth=v.lineThickness;var A="solid";if(b.setLineDash){var B=D(v.nullDataLineDashType,v.lineThickness),A=v.lineDashType,J=D(A,v.lineThickness);b.setLineDash(J)}for(var I=!0,n=0;n<p.length;n++){q=p[n];var G=null,G=0<=v.dataPointIndexes[q]?w[v.dataPointIndexes[q]]:{x:q,y:null};if(!(q<a.axisX.dataInfo.viewPortMin||q>a.axisX.dataInfo.viewPortMax&&(!v.connectNullData||!I)))if("number"!==typeof G.y)v.connectNullData||(I||y)||c(),I=!0;else{var $;$=0!==a.dataPointYSums[q]?100*(G.y/
a.dataPointYSums[q]):0;m=a.axisX.convertValueToPixel(q);var aa=g[q]?g[q]:0;if(a.axisY.logarithmic){k[q]=$+(k[q]?k[q]:0);if(0>=k[q])continue;l=a.axisY.convertValueToPixel(k[q])}else l=a.axisY.convertValueToPixel($),l-=aa;h.push({x:m,y:r-aa});g[q]=r-l;y||I?(!y&&v.connectNullData?(b.setLineDash&&(v._options.nullDataLineDashType||A===v.lineDashType&&v.lineDashType!==v.nullDataLineDashType)&&(b.stroke(),A=v.nullDataLineDashType,b.setLineDash(B)),b.lineTo(m,l),t&&s.lineTo(m,l)):(b.beginPath(),b.moveTo(m,
l),t&&(s.beginPath(),s.moveTo(m,l))),I=y=!1):(b.lineTo(m,l),t&&s.lineTo(m,l),0==n%250&&(c(),b.moveTo(m,l),t&&s.moveTo(m,l),h.push({x:m,y:r-aa})));n<w.length-1&&(z!==(w[n].lineColor||x)||A!==(w[n].lineDashType||v.lineDashType))&&(c(),b.beginPath(),b.moveTo(m,l),h.push({x:m,y:r-aa}),z=w[n].lineColor||x,b.strokeStyle=z,b.setLineDash&&(w[n].lineDashType?(A=w[n].lineDashType,b.setLineDash(D(A,v.lineThickness))):(A=v.lineDashType,b.setLineDash(J))));if(0<=v.dataPointIndexes[q]){var ya=v.dataPointIds[v.dataPointIndexes[q]];
this._eventManager.objectMap[ya]={id:ya,objectType:"dataPoint",dataSeriesIndex:u,dataPointIndex:v.dataPointIndexes[q],x1:m,y1:l}}0<=v.dataPointIndexes[q]&&0!==G.markerSize&&(0<G.markerSize||0<v.markerSize)&&(q=v.getMarkerProperties(n,m,l,b),f.push(q),markerColor=C(ya),t&&f.push({x:m,y:l,ctx:s,type:q.type,size:q.size,color:markerColor,borderColor:markerColor,borderThickness:q.borderThickness}));(G.indexLabel||v.indexLabel||G.indexLabelFormatter||v.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea100",
dataPoint:G,dataSeries:v,point:{x:m,y:l},direction:0>w[n].y===a.axisY.reversed?1:-1,color:d})}}c();b.moveTo(m,l);t&&s.moveTo(m,l)}delete v.dataPointIndexes}P.drawMarkers(f);b.restore();t&&s.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:F.xClipAnimation,easingFunction:F.easing.linear,animationBase:0}}};z.prototype.renderBubble=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this.plotArea,d=0,e,f;c.save();t&&this._eventManager.ghostCtx.save();
c.beginPath();c.rect(b.x1,b.y1,b.width,b.height);c.clip();t&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(b.x1,b.y1,b.width,b.height),this._eventManager.ghostCtx.clip());for(var g=-Infinity,h=Infinity,p=0;p<a.dataSeriesIndexes.length;p++)for(var k=a.dataSeriesIndexes[p],n=this.data[k],m=n.dataPoints,l=0,d=0;d<m.length;d++)e=m[d].getTime?e=m[d].x.getTime():e=m[d].x,e<a.axisX.dataInfo.viewPortMin||e>a.axisX.dataInfo.viewPortMax||"undefined"===typeof m[d].z||(l=m[d].z,l>
g&&(g=l),l<h&&(h=l));for(var q=25*Math.PI,b=Math.max(Math.pow(0.25*Math.min(b.height,b.width)/2,2)*Math.PI,q),p=0;p<a.dataSeriesIndexes.length;p++)if(k=a.dataSeriesIndexes[p],n=this.data[k],m=n.dataPoints,0<m.length)for(c.strokeStyle="#4572A7 ",d=0;d<m.length;d++)if(e=m[d].getTime?e=m[d].x.getTime():e=m[d].x,!(e<a.axisX.dataInfo.viewPortMin||e>a.axisX.dataInfo.viewPortMax)&&"number"===typeof m[d].y){e=a.axisX.convertValueToPixel(e);f=a.axisY.convertValueToPixel(m[d].y);var l=m[d].z,r=2*Math.max(Math.sqrt((g===
h?b/2:q+(b-q)/(g-h)*(l-h))/Math.PI)<<0,1),l=n.getMarkerProperties(d,c);l.size=r;c.globalAlpha=n.fillOpacity;P.drawMarker(e,f,c,l.type,l.size,l.color,l.borderColor,l.borderThickness);c.globalAlpha=1;var s=n.dataPointIds[d];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:d,x1:e,y1:f,size:r};r=C(s);t&&P.drawMarker(e,f,this._eventManager.ghostCtx,l.type,l.size,r,r,l.borderThickness);(m[d].indexLabel||n.indexLabel||m[d].indexLabelFormatter||n.indexLabelFormatter)&&
this._indexLabels.push({chartType:"bubble",dataPoint:m[d],dataSeries:n,point:{x:e,y:f},direction:1,bounds:{x1:e-l.size/2,y1:f-l.size/2,x2:e+l.size/2,y2:f+l.size/2},color:null})}c.restore();t&&this._eventManager.ghostCtx.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:F.fadeInAnimation,easingFunction:F.easing.easeInQuad,animationBase:0}}};z.prototype.renderScatter=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this.plotArea,d=0,
e,f;c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(b.x1,b.y1,b.width,b.height);c.clip();t&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(b.x1,b.y1,b.width,b.height),this._eventManager.ghostCtx.clip());for(var g=0;g<a.dataSeriesIndexes.length;g++){var h=a.dataSeriesIndexes[g],p=this.data[h],k=p.dataPoints;if(0<k.length){c.strokeStyle="#4572A7 ";Math.pow(0.3*Math.min(b.height,b.width)/2,2);for(var n=0,m=0,d=0;d<k.length;d++)if(e=k[d].getTime?e=k[d].x.getTime():
e=k[d].x,!(e<a.axisX.dataInfo.viewPortMin||e>a.axisX.dataInfo.viewPortMax)&&"number"===typeof k[d].y){e=a.axisX.convertValueToPixel(e);f=a.axisY.convertValueToPixel(k[d].y);var l=p.getMarkerProperties(d,e,f,c);c.globalAlpha=p.fillOpacity;P.drawMarker(l.x,l.y,l.ctx,l.type,l.size,l.color,l.borderColor,l.borderThickness);c.globalAlpha=1;Math.sqrt((n-e)*(n-e)+(m-f)*(m-f))<Math.min(l.size,5)&&k.length>Math.min(this.plotArea.width,this.plotArea.height)||(n=p.dataPointIds[d],this._eventManager.objectMap[n]=
{id:n,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:d,x1:e,y1:f},n=C(n),t&&P.drawMarker(l.x,l.y,this._eventManager.ghostCtx,l.type,l.size,n,n,l.borderThickness),(k[d].indexLabel||p.indexLabel||k[d].indexLabelFormatter||p.indexLabelFormatter)&&this._indexLabels.push({chartType:"scatter",dataPoint:k[d],dataSeries:p,point:{x:e,y:f},direction:1,bounds:{x1:e-l.size/2,y1:f-l.size/2,x2:e+l.size/2,y2:f+l.size/2},color:null}),n=e,m=f)}}}c.restore();t&&this._eventManager.ghostCtx.restore();return{source:c,
dest:this.plotArea.ctx,animationCallback:F.fadeInAnimation,easingFunction:F.easing.easeInQuad,animationBase:0}}};z.prototype.renderCandlestick=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx,b=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var d=null,d=this.plotArea,e=0,f,g,h,p,k,n,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;f=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.015*this.width;
var m=a.axisX.dataInfo.minDiff;isFinite(m)||(m=0.3*Math.abs(a.axisX.range));m=this.dataPointWidth?this.dataPointWidth:0.7*d.width*(a.axisX.logarithmic?Math.log(m)/Math.log(a.axisX.range):Math.abs(m)/Math.abs(a.axisX.range))<<0;this.dataPointMaxWidth&&e>f&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,f));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&f<e)&&(f=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));m<e&&(m=e);m>f&&(m=f);c.save();t&&b.save();c.beginPath();c.rect(d.x1,
d.y1,d.width,d.height);c.clip();t&&(b.beginPath(),b.rect(d.x1,d.y1,d.width,d.height),b.clip());for(var l=0;l<a.dataSeriesIndexes.length;l++){var q=a.dataSeriesIndexes[l],r=this.data[q],s=r.dataPoints;if(0<s.length)for(var y=5<m&&r.bevelEnabled?!0:!1,e=0;e<s.length;e++)if(s[e].getTime?n=s[e].x.getTime():n=s[e].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax)&&null!==s[e].y&&s[e].y.length&&"number"===typeof s[e].y[0]&&"number"===typeof s[e].y[1]&&"number"===typeof s[e].y[2]&&"number"===
typeof s[e].y[3]){f=a.axisX.convertValueToPixel(n);g=a.axisY.convertValueToPixel(s[e].y[0]);h=a.axisY.convertValueToPixel(s[e].y[1]);p=a.axisY.convertValueToPixel(s[e].y[2]);k=a.axisY.convertValueToPixel(s[e].y[3]);var u=f-m/2<<0,v=u+m<<0,d=s[e].color?s[e].color:r._colorSet[0],w=Math.round(Math.max(1,0.15*m)),x=0===w%2?0:0.5,z=r.dataPointIds[e];this._eventManager.objectMap[z]={id:z,objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:e,x1:u,y1:g,x2:v,y2:h,x3:f,y3:p,x4:f,y4:k,borderThickness:w,
color:d};c.strokeStyle=d;c.beginPath();c.lineWidth=w;b.lineWidth=Math.max(w,4);"candlestick"===r.type?(c.moveTo(f-x,h),c.lineTo(f-x,Math.min(g,k)),c.stroke(),c.moveTo(f-x,Math.max(g,k)),c.lineTo(f-x,p),c.stroke(),N(c,u,Math.min(g,k),v,Math.max(g,k),s[e].y[0]<=s[e].y[3]?r.risingColor:d,w,d,y,y,!1,!1,r.fillOpacity),t&&(d=C(z),b.strokeStyle=d,b.moveTo(f-x,h),b.lineTo(f-x,Math.min(g,k)),b.stroke(),b.moveTo(f-x,Math.max(g,k)),b.lineTo(f-x,p),b.stroke(),N(b,u,Math.min(g,k),v,Math.max(g,k),d,0,null,!1,!1,
!1,!1))):"ohlc"===r.type&&(c.moveTo(f-x,h),c.lineTo(f-x,p),c.stroke(),c.beginPath(),c.moveTo(f,g),c.lineTo(u,g),c.stroke(),c.beginPath(),c.moveTo(f,k),c.lineTo(v,k),c.stroke(),t&&(d=C(z),b.strokeStyle=d,b.moveTo(f-x,h),b.lineTo(f-x,p),b.stroke(),b.beginPath(),b.moveTo(f,g),b.lineTo(u,g),b.stroke(),b.beginPath(),b.moveTo(f,k),b.lineTo(v,k),b.stroke()));(s[e].indexLabel||r.indexLabel||s[e].indexLabelFormatter||r.indexLabelFormatter)&&this._indexLabels.push({chartType:r.type,dataPoint:s[e],dataSeries:r,
point:{x:u+(v-u)/2,y:a.axisY.reversed?p:h},direction:1,bounds:{x1:u,y1:Math.min(h,p),x2:v,y2:Math.max(h,p)},color:d})}}c.restore();t&&b.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:F.fadeInAnimation,easingFunction:F.easing.easeInQuad,animationBase:0}}};z.prototype.renderRangeColumn=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=0,f,g,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:
1;f=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.03*this.width;var h=a.axisX.dataInfo.minDiff;isFinite(h)||(h=0.3*Math.abs(a.axisX.range));h=this.dataPointWidth?this.dataPointWidth:0.9*(d.width*(a.axisX.logarithmic?Math.log(h)/Math.log(a.axisX.range):Math.abs(h)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>f&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,f));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&
f<e)&&(f=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));h<e&&(h=e);h>f&&(h=f);c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var p=0;p<a.dataSeriesIndexes.length;p++){var k=a.dataSeriesIndexes[p],n=this.data[k],m=n.dataPoints;if(0<m.length)for(var l=5<h&&n.bevelEnabled?!0:!1,e=0;e<
m.length;e++)if(m[e].getTime?g=m[e].x.getTime():g=m[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&null!==m[e].y&&m[e].y.length&&"number"===typeof m[e].y[0]&&"number"===typeof m[e].y[1]){b=a.axisX.convertValueToPixel(g);d=a.axisY.convertValueToPixel(m[e].y[0]);f=a.axisY.convertValueToPixel(m[e].y[1]);var q=a.axisX.reversed?b+a.plotType.totalDataSeries*h/2-(a.previousDataSeriesCount+p)*h<<0:b-a.plotType.totalDataSeries*h/2+(a.previousDataSeriesCount+p)*h<<0,r=a.axisX.reversed?
q-h<<0:q+h<<0,b=m[e].color?m[e].color:n._colorSet[e%n._colorSet.length];if(d>f){var s=d,d=f;f=s}s=n.dataPointIds[e];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:e,x1:q,y1:d,x2:r,y2:f};N(c,q,d,r,f,b,0,b,l,l,!1,!1,n.fillOpacity);b=C(s);t&&N(this._eventManager.ghostCtx,q,d,r,f,b,0,null,!1,!1,!1,!1);if(m[e].indexLabel||n.indexLabel||m[e].indexLabelFormatter||n.indexLabelFormatter)this._indexLabels.push({chartType:"rangeColumn",dataPoint:m[e],dataSeries:n,
indexKeyword:0,point:{x:q+(r-q)/2,y:m[e].y[1]>=m[e].y[0]?f:d},direction:m[e].y[1]>=m[e].y[0]?-1:1,bounds:{x1:q,y1:Math.min(d,f),x2:r,y2:Math.max(d,f)},color:b}),this._indexLabels.push({chartType:"rangeColumn",dataPoint:m[e],dataSeries:n,indexKeyword:1,point:{x:q+(r-q)/2,y:m[e].y[1]>=m[e].y[0]?d:f},direction:m[e].y[1]>=m[e].y[0]?1:-1,bounds:{x1:q,y1:Math.min(d,f),x2:r,y2:Math.max(d,f)},color:b})}}c.restore();t&&this._eventManager.ghostCtx.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:F.fadeInAnimation,
easingFunction:F.easing.easeInQuad,animationBase:0}}};z.prototype.renderRangeBar=function(a){var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=0,f,g,h,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;f=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0;var p=a.axisX.dataInfo.minDiff;
isFinite(p)||(p=0.3*Math.abs(a.axisX.range));p=this.dataPointWidth?this.dataPointWidth:0.9*(d.height*(a.axisX.logarithmic?Math.log(p)/Math.log(a.axisX.range):Math.abs(p)/Math.abs(a.axisX.range))/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>f&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,f));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&f<e)&&(f=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));p<e&&(p=e);p>f&&(p=f);c.save();t&&this._eventManager.ghostCtx.save();
c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.beginPath(),this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var k=0;k<a.dataSeriesIndexes.length;k++){var n=a.dataSeriesIndexes[k],m=this.data[n],l=m.dataPoints;if(0<l.length){var q=5<p&&m.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(e=0;e<l.length;e++)if(l[e].getTime?h=l[e].x.getTime():h=l[e].x,!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&
null!==l[e].y&&l[e].y.length&&"number"===typeof l[e].y[0]&&"number"===typeof l[e].y[1]){d=a.axisY.convertValueToPixel(l[e].y[0]);f=a.axisY.convertValueToPixel(l[e].y[1]);g=a.axisX.convertValueToPixel(h);g=a.axisX.reversed?g+a.plotType.totalDataSeries*p/2-(a.previousDataSeriesCount+k)*p<<0:g-a.plotType.totalDataSeries*p/2+(a.previousDataSeriesCount+k)*p<<0;var r=a.axisX.reversed?g-p<<0:g+p<<0;d>f&&(b=d,d=f,f=b);b=l[e].color?l[e].color:m._colorSet[e%m._colorSet.length];N(c,d,g,f,r,b,0,null,q,!1,!1,
!1,m.fillOpacity);b=m.dataPointIds[e];this._eventManager.objectMap[b]={id:b,objectType:"dataPoint",dataSeriesIndex:n,dataPointIndex:e,x1:d,y1:g,x2:f,y2:r};b=C(b);t&&N(this._eventManager.ghostCtx,d,g,f,r,b,0,null,!1,!1,!1,!1);if(l[e].indexLabel||m.indexLabel||l[e].indexLabelFormatter||m.indexLabelFormatter)this._indexLabels.push({chartType:"rangeBar",dataPoint:l[e],dataSeries:m,indexKeyword:0,point:{x:l[e].y[1]>=l[e].y[0]?d:f,y:g+(r-g)/2},direction:l[e].y[1]>=l[e].y[0]?-1:1,bounds:{x1:Math.min(d,f),
y1:g,x2:Math.max(d,f),y2:r},color:b}),this._indexLabels.push({chartType:"rangeBar",dataPoint:l[e],dataSeries:m,indexKeyword:1,point:{x:l[e].y[1]>=l[e].y[0]?f:d,y:g+(r-g)/2},direction:l[e].y[1]>=l[e].y[0]?1:-1,bounds:{x1:Math.min(d,f),y1:g,x2:Math.max(d,f),y2:r},color:b})}}}c.restore();t&&this._eventManager.ghostCtx.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:F.fadeInAnimation,easingFunction:F.easing.easeInQuad,animationBase:0}}};z.prototype.renderRangeArea=function(a){function c(){if(y){var a=
null;0<p.lineThickness&&b.stroke();for(var c=g.length-1;0<=c;c--)a=g[c],b.lineTo(a.x,a.y),d.lineTo(a.x,a.y);b.closePath();b.globalAlpha=p.fillOpacity;b.fill();b.globalAlpha=1;d.fill();if(0<p.lineThickness){b.beginPath();b.moveTo(a.x,a.y);for(c=0;c<g.length;c++)a=g[c],b.lineTo(a.x,a.y);b.stroke()}b.beginPath();b.moveTo(l,q);d.beginPath();d.moveTo(l,q);y={x:l,y:q};g=[];g.push({x:l,y:r})}}var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,
e=[],f=this.plotArea;b.save();t&&d.save();b.beginPath();b.rect(f.x1,f.y1,f.width,f.height);b.clip();t&&(d.beginPath(),d.rect(f.x1,f.y1,f.width,f.height),d.clip());for(f=0;f<a.dataSeriesIndexes.length;f++){var g=[],h=a.dataSeriesIndexes[f],p=this.data[h],k=p.dataPoints,e=p.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:h};e=C(e);d.fillStyle=e;var e=[],n=!0,m=0,l,q,r,s,y=null;if(0<k.length){var u=p._colorSet[m%p._colorSet.length],v=p._options.lineColor||u,w=v;b.fillStyle=
u;b.strokeStyle=v;b.lineWidth=p.lineThickness;var x="solid";if(b.setLineDash){var z=D(p.nullDataLineDashType,p.lineThickness),x=p.lineDashType,A=D(x,p.lineThickness);b.setLineDash(A)}for(var B=!0;m<k.length;m++)if(s=k[m].x.getTime?k[m].x.getTime():k[m].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax&&(!p.connectNullData||!B)))if(null!==k[m].y&&k[m].y.length&&"number"===typeof k[m].y[0]&&"number"===typeof k[m].y[1]){l=a.axisX.convertValueToPixel(s);q=a.axisY.convertValueToPixel(k[m].y[0]);
r=a.axisY.convertValueToPixel(k[m].y[1]);n||B?(p.connectNullData&&!n?(b.setLineDash&&(p._options.nullDataLineDashType||x===p.lineDashType&&p.lineDashType!==p.nullDataLineDashType)&&(g[g.length-1].newLineDashArray=A,x=p.nullDataLineDashType,b.setLineDash(z)),b.lineTo(l,q),t&&d.lineTo(l,q),g.push({x:l,y:r})):(b.beginPath(),b.moveTo(l,q),y={x:l,y:q},g=[],g.push({x:l,y:r}),t&&(d.beginPath(),d.moveTo(l,q))),B=n=!1):(b.lineTo(l,q),g.push({x:l,y:r}),t&&d.lineTo(l,q),0==m%250&&c());s=p.dataPointIds[m];this._eventManager.objectMap[s]=
{id:s,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:m,x1:l,y1:q,y2:r};m<k.length-1&&(w!==(k[m].lineColor||v)||x!==(k[m].lineDashType||p.lineDashType))&&(c(),w=k[m].lineColor||v,g[g.length-1].newStrokeStyle=w,b.strokeStyle=w,b.setLineDash&&(k[m].lineDashType?(x=k[m].lineDashType,g[g.length-1].newLineDashArray=D(x,p.lineThickness),b.setLineDash(g[g.length-1].newLineDashArray)):(x=p.lineDashType,g[g.length-1].newLineDashArray=A,b.setLineDash(A))));if(0!==k[m].markerSize&&(0<k[m].markerSize||
0<p.markerSize)){var J=p.getMarkerProperties(m,l,r,b);e.push(J);var I=C(s);t&&e.push({x:l,y:r,ctx:d,type:J.type,size:J.size,color:I,borderColor:I,borderThickness:J.borderThickness});J=p.getMarkerProperties(m,l,q,b);e.push(J);I=C(s);t&&e.push({x:l,y:q,ctx:d,type:J.type,size:J.size,color:I,borderColor:I,borderThickness:J.borderThickness})}if(k[m].indexLabel||p.indexLabel||k[m].indexLabelFormatter||p.indexLabelFormatter)this._indexLabels.push({chartType:"rangeArea",dataPoint:k[m],dataSeries:p,indexKeyword:0,
point:{x:l,y:q},direction:k[m].y[0]>k[m].y[1]===a.axisY.reversed?-1:1,color:u}),this._indexLabels.push({chartType:"rangeArea",dataPoint:k[m],dataSeries:p,indexKeyword:1,point:{x:l,y:r},direction:k[m].y[0]>k[m].y[1]===a.axisY.reversed?1:-1,color:u})}else B||n||c(),B=!0;c();P.drawMarkers(e)}}b.restore();t&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:F.xClipAnimation,easingFunction:F.easing.linear,animationBase:0}}};z.prototype.renderRangeSplineArea=
function(a){function c(a,c){var e=oa(q,2);if(0<e.length){if(0<h.lineThickness){b.strokeStyle=c;b.setLineDash&&b.setLineDash(a);b.beginPath();b.moveTo(e[0].x,e[0].y);for(var f=0;f<e.length-3;f+=3){if(e[f].newStrokeStyle||e[f].newLineDashArray)b.stroke(),b.beginPath(),b.moveTo(e[f].x,e[f].y),e[f].newStrokeStyle&&(b.strokeStyle=e[f].newStrokeStyle),e[f].newLineDashArray&&b.setLineDash(e[f].newLineDashArray);b.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y)}b.stroke()}b.beginPath();
b.moveTo(e[0].x,e[0].y);t&&(d.beginPath(),d.moveTo(e[0].x,e[0].y));for(f=0;f<e.length-3;f+=3)b.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y),t&&d.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y);e=oa(r,2);b.lineTo(r[r.length-1].x,r[r.length-1].y);for(f=e.length-1;2<f;f-=3)b.bezierCurveTo(e[f-1].x,e[f-1].y,e[f-2].x,e[f-2].y,e[f-3].x,e[f-3].y),t&&d.bezierCurveTo(e[f-1].x,e[f-1].y,e[f-2].x,e[f-2].y,e[f-3].x,e[f-3].y);b.closePath();b.globalAlpha=h.fillOpacity;
b.fill();t&&(d.closePath(),d.fill());b.globalAlpha=1;if(0<h.lineThickness){b.strokeStyle=c;b.setLineDash&&b.setLineDash(a);b.beginPath();b.moveTo(e[0].x,e[0].y);for(var g=f=0;f<e.length-3;f+=3,g++){if(q[g].newStrokeStyle||q[g].newLineDashArray)b.stroke(),b.beginPath(),b.moveTo(e[f].x,e[f].y),q[g].newStrokeStyle&&(b.strokeStyle=q[g].newStrokeStyle),q[g].newLineDashArray&&b.setLineDash(q[g].newLineDashArray);b.bezierCurveTo(e[f+1].x,e[f+1].y,e[f+2].x,e[f+2].y,e[f+3].x,e[f+3].y)}b.stroke()}b.beginPath()}}
var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=[],f=this.plotArea;b.save();t&&d.save();b.beginPath();b.rect(f.x1,f.y1,f.width,f.height);b.clip();t&&(d.beginPath(),d.rect(f.x1,f.y1,f.width,f.height),d.clip());for(f=0;f<a.dataSeriesIndexes.length;f++){var g=a.dataSeriesIndexes[f],h=this.data[g],p=h.dataPoints,e=h.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:g};e=C(e);d.fillStyle=e;var e=[],k=0,n,m,l,
q=[],r=[];if(0<p.length){var s=h._colorSet[k%h._colorSet.length],y=h._options.lineColor||s,u=y;b.fillStyle=s;b.lineWidth=h.lineThickness;var v="solid",w;if(b.setLineDash){var x=D(h.nullDataLineDashType,h.lineThickness),v=h.lineDashType;w=D(v,h.lineThickness)}for(m=!1;k<p.length;k++)if(n=p[k].x.getTime?p[k].x.getTime():p[k].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax&&(!h.connectNullData||!m)))if(null!==p[k].y&&p[k].y.length&&"number"===typeof p[k].y[0]&&"number"===typeof p[k].y[1]){n=
a.axisX.convertValueToPixel(n);m=a.axisY.convertValueToPixel(p[k].y[0]);l=a.axisY.convertValueToPixel(p[k].y[1]);var z=h.dataPointIds[k];this._eventManager.objectMap[z]={id:z,objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:k,x1:n,y1:m,y2:l};q[q.length]={x:n,y:m};r[r.length]={x:n,y:l};k<p.length-1&&(u!==(p[k].lineColor||y)||v!==(p[k].lineDashType||h.lineDashType))&&(u=p[k].lineColor||y,q[q.length-1].newStrokeStyle=u,b.setLineDash&&(p[k].lineDashType?(v=p[k].lineDashType,q[q.length-1].newLineDashArray=
D(v,h.lineThickness)):(v=h.lineDashType,q[q.length-1].newLineDashArray=w)));if(0!==p[k].markerSize&&(0<p[k].markerSize||0<h.markerSize)){var A=h.getMarkerProperties(k,n,m,b);e.push(A);var B=C(z);t&&e.push({x:n,y:m,ctx:d,type:A.type,size:A.size,color:B,borderColor:B,borderThickness:A.borderThickness});A=h.getMarkerProperties(k,n,l,b);e.push(A);B=C(z);t&&e.push({x:n,y:l,ctx:d,type:A.type,size:A.size,color:B,borderColor:B,borderThickness:A.borderThickness})}if(p[k].indexLabel||h.indexLabel||p[k].indexLabelFormatter||
h.indexLabelFormatter)this._indexLabels.push({chartType:"splineArea",dataPoint:p[k],dataSeries:h,indexKeyword:0,point:{x:n,y:m},direction:p[k].y[0]<=p[k].y[1]?-1:1,color:s}),this._indexLabels.push({chartType:"splineArea",dataPoint:p[k],dataSeries:h,indexKeyword:1,point:{x:n,y:l},direction:p[k].y[0]<=p[k].y[1]?1:-1,color:s});m=!1}else 0<k&&!m&&(h.connectNullData?b.setLineDash&&(0<q.length&&(h._options.nullDataLineDashType||!p[k-1].lineDashType))&&(q[q.length-1].newLineDashArray=x,v=h.nullDataLineDashType):
(c(w,y),q=[],r=[])),m=!0;c(w,y);P.drawMarkers(e)}}b.restore();t&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:F.xClipAnimation,easingFunction:F.easing.linear,animationBase:0}}};var za=function(a,c,b,d,e,f,g,h,p){if(!(0>b)){"undefined"===typeof h&&(h=1);if(!t){var k=Number((g%(2*Math.PI)).toFixed(8));Number((f%(2*Math.PI)).toFixed(8))===k&&(g-=1E-4)}a.save();a.globalAlpha=h;"pie"===e?(a.beginPath(),a.moveTo(c.x,c.y),a.arc(c.x,c.y,b,f,g,!1),a.fillStyle=
d,a.strokeStyle="white",a.lineWidth=2,a.closePath(),a.fill()):"doughnut"===e&&(a.beginPath(),a.arc(c.x,c.y,b,f,g,!1),0<=p&&a.arc(c.x,c.y,p*b,g,f,!0),a.closePath(),a.fillStyle=d,a.strokeStyle="white",a.lineWidth=2,a.fill());a.globalAlpha=1;a.restore()}};z.prototype.renderPie=function(a){function c(){if(k&&n){for(var a=0,b=0,c=0,d=0,e=0;e<n.length;e++){var f=n[e],g=k.dataPointIds[e],h={id:g,objectType:"dataPoint",dataPointIndex:e,dataSeriesIndex:0};q.push(h);var m={percent:null,total:null},r=null,m=
p.getPercentAndTotal(k,f);if(k.indexLabelFormatter||f.indexLabelFormatter)r={chart:p._options,dataSeries:k,dataPoint:f,total:m.total,percent:m.percent};m=f.indexLabelFormatter?f.indexLabelFormatter(r):f.indexLabel?p.replaceKeywordsWithValue(f.indexLabel,f,k,e):k.indexLabelFormatter?k.indexLabelFormatter(r):k.indexLabel?p.replaceKeywordsWithValue(k.indexLabel,f,k,e):f.label?f.label:"";p._eventManager.objectMap[g]=h;h.center={x:w.x,y:w.y};h.y=f.y;h.radius=A;h.percentInnerRadius=F;h.indexLabelText=m;
h.indexLabelPlacement=k.indexLabelPlacement;h.indexLabelLineColor=f.indexLabelLineColor?f.indexLabelLineColor:k.indexLabelLineColor?k.indexLabelLineColor:f.color?f.color:k._colorSet[e%k._colorSet.length];h.indexLabelLineThickness=x(f.indexLabelLineThickness)?k.indexLabelLineThickness:f.indexLabelLineThickness;h.indexLabelLineDashType=f.indexLabelLineDashType?f.indexLabelLineDashType:k.indexLabelLineDashType;h.indexLabelFontColor=f.indexLabelFontColor?f.indexLabelFontColor:k.indexLabelFontColor;h.indexLabelFontStyle=
f.indexLabelFontStyle?f.indexLabelFontStyle:k.indexLabelFontStyle;h.indexLabelFontWeight=f.indexLabelFontWeight?f.indexLabelFontWeight:k.indexLabelFontWeight;h.indexLabelFontSize=f.indexLabelFontSize?f.indexLabelFontSize:k.indexLabelFontSize;h.indexLabelFontFamily=f.indexLabelFontFamily?f.indexLabelFontFamily:k.indexLabelFontFamily;h.indexLabelBackgroundColor=f.indexLabelBackgroundColor?f.indexLabelBackgroundColor:k.indexLabelBackgroundColor?k.indexLabelBackgroundColor:null;h.indexLabelMaxWidth=f.indexLabelMaxWidth?
f.indexLabelMaxWidth:k.indexLabelMaxWidth?k.indexLabelMaxWidth:0.33*l.width;h.indexLabelWrap="undefined"!==typeof f.indexLabelWrap?f.indexLabelWrap:k.indexLabelWrap;h.startAngle=0===e?k.startAngle?k.startAngle/180*Math.PI:0:q[e-1].endAngle;h.startAngle=(h.startAngle+2*Math.PI)%(2*Math.PI);h.endAngle=h.startAngle+2*Math.PI/t*Math.abs(f.y);f=(h.endAngle+h.startAngle)/2;f=(f+2*Math.PI)%(2*Math.PI);h.midAngle=f;if(h.midAngle>Math.PI/2-u&&h.midAngle<Math.PI/2+u){if(0===a||q[c].midAngle>h.midAngle)c=e;
a++}else if(h.midAngle>3*Math.PI/2-u&&h.midAngle<3*Math.PI/2+u){if(0===b||q[d].midAngle>h.midAngle)d=e;b++}h.hemisphere=f>Math.PI/2&&f<=3*Math.PI/2?"left":"right";h.indexLabelTextBlock=new M(p.plotArea.ctx,{fontSize:h.indexLabelFontSize,fontFamily:h.indexLabelFontFamily,fontColor:h.indexLabelFontColor,fontStyle:h.indexLabelFontStyle,fontWeight:h.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:h.indexLabelBackgroundColor,maxWidth:h.indexLabelMaxWidth,maxHeight:h.indexLabelWrap?5*h.indexLabelFontSize:
1.5*h.indexLabelFontSize,text:h.indexLabelText,padding:0,textBaseline:"top"});h.indexLabelTextBlock.measureText()}g=f=0;m=!1;for(e=0;e<n.length;e++)h=q[(c+e)%n.length],1<a&&(h.midAngle>Math.PI/2-u&&h.midAngle<Math.PI/2+u)&&(f<=a/2&&!m?(h.hemisphere="right",f++):(h.hemisphere="left",m=!0));m=!1;for(e=0;e<n.length;e++)h=q[(d+e)%n.length],1<b&&(h.midAngle>3*Math.PI/2-u&&h.midAngle<3*Math.PI/2+u)&&(g<=b/2&&!m?(h.hemisphere="left",g++):(h.hemisphere="right",m=!0))}}function b(a){var b=p.plotArea.ctx;b.clearRect(l.x1,
l.y1,l.width,l.height);b.fillStyle=p.backgroundColor;b.fillRect(l.x1,l.y1,l.width,l.height);for(b=0;b<n.length;b++){var c=q[b].startAngle,d=q[b].endAngle;if(d>c){var e=0.07*A*Math.cos(q[b].midAngle),f=0.07*A*Math.sin(q[b].midAngle),g=!1;if(n[b].exploded){if(1E-9<Math.abs(q[b].center.x-(w.x+e))||1E-9<Math.abs(q[b].center.y-(w.y+f)))q[b].center.x=w.x+e*a,q[b].center.y=w.y+f*a,g=!0}else if(0<Math.abs(q[b].center.x-w.x)||0<Math.abs(q[b].center.y-w.y))q[b].center.x=w.x+e*(1-a),q[b].center.y=w.y+f*(1-a),
g=!0;g&&(e={},e.dataSeries=k,e.dataPoint=k.dataPoints[b],e.index=b,p._toolTip.highlightObjects([e]));za(p.plotArea.ctx,q[b].center,q[b].radius,n[b].color?n[b].color:k._colorSet[b%k._colorSet.length],k.type,c,d,k.fillOpacity,q[b].percentInnerRadius)}}a=p.plotArea.ctx;a.save();a.fillStyle="black";a.strokeStyle="grey";a.textBaseline="middle";a.lineJoin="round";for(b=b=0;b<n.length;b++)c=q[b],c.indexLabelText&&(c.indexLabelTextBlock.y-=c.indexLabelTextBlock.height/2,d=0,d="left"===c.hemisphere?"inside"!==
k.indexLabelPlacement?-(c.indexLabelTextBlock.width+m):-c.indexLabelTextBlock.width/2:"inside"!==k.indexLabelPlacement?m:-c.indexLabelTextBlock.width/2,c.indexLabelTextBlock.x+=d,c.indexLabelTextBlock.render(!0),c.indexLabelTextBlock.x-=d,c.indexLabelTextBlock.y+=c.indexLabelTextBlock.height/2,"inside"!==c.indexLabelPlacement&&0<c.indexLabelLineThickness&&(d=c.center.x+A*Math.cos(c.midAngle),e=c.center.y+A*Math.sin(c.midAngle),a.strokeStyle=c.indexLabelLineColor,a.lineWidth=c.indexLabelLineThickness,
a.setLineDash&&a.setLineDash(D(c.indexLabelLineDashType,c.indexLabelLineThickness)),a.beginPath(),a.moveTo(d,e),a.lineTo(c.indexLabelTextBlock.x,c.indexLabelTextBlock.y),a.lineTo(c.indexLabelTextBlock.x+("left"===c.hemisphere?-m:m),c.indexLabelTextBlock.y),a.stroke()),a.lineJoin="miter");a.save()}function d(a,b){var c=0,c=a.indexLabelTextBlock.y-a.indexLabelTextBlock.height/2,d=a.indexLabelTextBlock.y+a.indexLabelTextBlock.height/2,e=b.indexLabelTextBlock.y-b.indexLabelTextBlock.height/2,f=b.indexLabelTextBlock.y+
b.indexLabelTextBlock.height/2;return c=b.indexLabelTextBlock.y>a.indexLabelTextBlock.y?e-d:c-f}function e(a){for(var b=null,c=1;c<n.length;c++)if(b=(a+c+q.length)%q.length,q[b].hemisphere!==q[a].hemisphere){b=null;break}else if(q[b].indexLabelText&&b!==a&&(0>d(q[b],q[a])||("right"===q[a].hemisphere?q[b].indexLabelTextBlock.y>=q[a].indexLabelTextBlock.y:q[b].indexLabelTextBlock.y<=q[a].indexLabelTextBlock.y)))break;else b=null;return b}function f(a,b,c){c=(c||0)+1;if(1E3<c)return 0;b=b||0;var g=0,
h=w.y-1*s,l=w.y+1*s;if(0<=a&&a<n.length){var k=q[a];if(0>b&&k.indexLabelTextBlock.y<h||0<b&&k.indexLabelTextBlock.y>l)return 0;var m=0,p=0,p=m=m=0;0>b?k.indexLabelTextBlock.y-k.indexLabelTextBlock.height/2>h&&k.indexLabelTextBlock.y-k.indexLabelTextBlock.height/2+b<h&&(b=-(h-(k.indexLabelTextBlock.y-k.indexLabelTextBlock.height/2+b))):k.indexLabelTextBlock.y+k.indexLabelTextBlock.height/2<h&&k.indexLabelTextBlock.y+k.indexLabelTextBlock.height/2+b>l&&(b=k.indexLabelTextBlock.y+k.indexLabelTextBlock.height/
2+b-l);b=k.indexLabelTextBlock.y+b;h=0;h="right"===k.hemisphere?w.x+Math.sqrt(Math.pow(s,2)-Math.pow(b-w.y,2)):w.x-Math.sqrt(Math.pow(s,2)-Math.pow(b-w.y,2));p=w.x+A*Math.cos(k.midAngle);m=w.y+A*Math.sin(k.midAngle);m=Math.sqrt(Math.pow(h-p,2)+Math.pow(b-m,2));p=Math.acos(A/s);m=Math.acos((s*s+A*A-m*m)/(2*A*s));b=m<p?b-k.indexLabelTextBlock.y:0;h=null;for(l=1;l<n.length;l++)if(h=(a-l+q.length)%q.length,q[h].hemisphere!==q[a].hemisphere){h=null;break}else if(q[h].indexLabelText&&q[h].hemisphere===
q[a].hemisphere&&h!==a&&(0>d(q[h],q[a])||("right"===q[a].hemisphere?q[h].indexLabelTextBlock.y<=q[a].indexLabelTextBlock.y:q[h].indexLabelTextBlock.y>=q[a].indexLabelTextBlock.y)))break;else h=null;p=h;m=e(a);l=h=0;0>b?(l="right"===k.hemisphere?p:m,g=b,null!==l&&(p=-b,b=k.indexLabelTextBlock.y-k.indexLabelTextBlock.height/2-(q[l].indexLabelTextBlock.y+q[l].indexLabelTextBlock.height/2),b-p<r&&(h=-p,l=f(l,h,c+1),+l.toFixed(v)>+h.toFixed(v)&&(g=b>r?-(b-r):-(p-(l-h)))))):0<b&&(l="right"===k.hemisphere?
m:p,g=b,null!==l&&(p=b,b=q[l].indexLabelTextBlock.y-q[l].indexLabelTextBlock.height/2-(k.indexLabelTextBlock.y+k.indexLabelTextBlock.height/2),b-p<r&&(h=p,l=f(l,h,c+1),+l.toFixed(v)<+h.toFixed(v)&&(g=b>r?b-r:p-(h-l)))));g&&(c=k.indexLabelTextBlock.y+g,b=0,b="right"===k.hemisphere?w.x+Math.sqrt(Math.pow(s,2)-Math.pow(c-w.y,2)):w.x-Math.sqrt(Math.pow(s,2)-Math.pow(c-w.y,2)),k.midAngle>Math.PI/2-u&&k.midAngle<Math.PI/2+u?(h=(a-1+q.length)%q.length,h=q[h],a=q[(a+1+q.length)%q.length],"left"===k.hemisphere&&
"right"===h.hemisphere&&b>h.indexLabelTextBlock.x?b=h.indexLabelTextBlock.x-15:"right"===k.hemisphere&&("left"===a.hemisphere&&b<a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x+15)):k.midAngle>3*Math.PI/2-u&&k.midAngle<3*Math.PI/2+u&&(h=(a-1+q.length)%q.length,h=q[h],a=q[(a+1+q.length)%q.length],"right"===k.hemisphere&&"left"===h.hemisphere&&b<h.indexLabelTextBlock.x?b=h.indexLabelTextBlock.x+15:"left"===k.hemisphere&&("right"===a.hemisphere&&b>a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x-
15)),k.indexLabelTextBlock.y=c,k.indexLabelTextBlock.x=b,k.indexLabelAngle=Math.atan2(k.indexLabelTextBlock.y-w.y,k.indexLabelTextBlock.x-w.x))}return g}function g(){var a=p.plotArea.ctx;a.fillStyle="grey";a.strokeStyle="grey";a.font="16px Arial";a.textBaseline="middle";for(var b=a=0,c=0,g=!0,b=0;10>b&&(1>b||0<c);b++){if(k.radius||!k.radius&&"undefined"!==typeof k.innerRadius&&null!==k.innerRadius&&A-c<=B)g=!1;g&&(A-=c);c=0;if("inside"!==k.indexLabelPlacement){s=A*y;for(a=0;a<n.length;a++){var h=
q[a];h.indexLabelTextBlock.x=w.x+s*Math.cos(h.midAngle);h.indexLabelTextBlock.y=w.y+s*Math.sin(h.midAngle);h.indexLabelAngle=h.midAngle;h.radius=A;h.percentInnerRadius=F}for(var u,t,a=0;a<n.length;a++){var h=q[a],x=e(a);if(null!==x){u=q[a];t=q[x];var z=0,z=d(u,t)-r;if(0>z){for(var C=t=0,D=0;D<n.length;D++)D!==a&&q[D].hemisphere===h.hemisphere&&(q[D].indexLabelTextBlock.y<h.indexLabelTextBlock.y?t++:C++);t=z/(t+C||1)*C;var C=-1*(z-t),E=D=0;"right"===h.hemisphere?(D=f(a,t),C=-1*(z-D),E=f(x,C),+E.toFixed(v)<
+C.toFixed(v)&&+D.toFixed(v)<=+t.toFixed(v)&&f(a,-(C-E))):(D=f(x,t),C=-1*(z-D),E=f(a,C),+E.toFixed(v)<+C.toFixed(v)&&+D.toFixed(v)<=+t.toFixed(v)&&f(x,-(C-E)))}}}}else for(a=0;a<n.length;a++)h=q[a],s="pie"===k.type?0.7*A:0.8*A,x=w.x+s*Math.cos(h.midAngle),t=w.y+s*Math.sin(h.midAngle),h.indexLabelTextBlock.x=x,h.indexLabelTextBlock.y=t;for(a=0;a<n.length;a++)if(h=q[a],x=h.indexLabelTextBlock.measureText(),0!==x.height&&0!==x.width)x=x=0,"right"===h.hemisphere?(x=l.x2-(h.indexLabelTextBlock.x+h.indexLabelTextBlock.width+
m),x*=-1):x=l.x1-(h.indexLabelTextBlock.x-h.indexLabelTextBlock.width-m),0<x&&(!g&&h.indexLabelText&&(t="right"===h.hemisphere?l.x2-h.indexLabelTextBlock.x:h.indexLabelTextBlock.x-l.x1,0.3*h.indexLabelTextBlock.maxWidth>t?h.indexLabelText="":h.indexLabelTextBlock.maxWidth=0.85*t,0.3*h.indexLabelTextBlock.maxWidth<t&&(h.indexLabelTextBlock.x-="right"===h.hemisphere?2:-2)),Math.abs(h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2-w.y)<A||Math.abs(h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/
2-w.y)<A)&&(x/=Math.abs(Math.cos(h.indexLabelAngle)),9<x&&(x*=0.3),x>c&&(c=x)),x=x=0,0<h.indexLabelAngle&&h.indexLabelAngle<Math.PI?(x=l.y2-(h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2+5),x*=-1):x=l.y1-(h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2-5),0<x&&(!g&&h.indexLabelText&&(t=0<h.indexLabelAngle&&h.indexLabelAngle<Math.PI?-1:1,0===f(a,x*t)&&f(a,2*t)),Math.abs(h.indexLabelTextBlock.x-w.x)<A&&(x/=Math.abs(Math.sin(h.indexLabelAngle)),9<x&&(x*=0.3),x>c&&(c=x)));var H=function(a,
b,c){for(var d=[],e=0;d.push(q[b]),b!==c;b=(b+1+n.length)%n.length);d.sort(function(a,b){return a.y-b.y});for(b=0;b<d.length;b++)if(c=d[b],e<0.7*a)e+=c.indexLabelTextBlock.height,c.indexLabelTextBlock.text="",c.indexLabelText="",c.indexLabelTextBlock.measureText();else break};(function(){for(var a=-1,b=-1,c=0,f=!1,g=0;g<n.length;g++)if(f=!1,u=q[g],u.indexLabelText){var h=e(g);if(null!==h){var k=q[h];z=0;z=d(u,k);var l;if(l=0>z){l=u.indexLabelTextBlock.x;var p=u.indexLabelTextBlock.y-u.indexLabelTextBlock.height/
2,r=u.indexLabelTextBlock.y+u.indexLabelTextBlock.height/2,s=k.indexLabelTextBlock.y-k.indexLabelTextBlock.height/2,v=k.indexLabelTextBlock.x+k.indexLabelTextBlock.width,t=k.indexLabelTextBlock.y+k.indexLabelTextBlock.height/2;l=u.indexLabelTextBlock.x+u.indexLabelTextBlock.width<k.indexLabelTextBlock.x-m||l>v+m||p>t+m||r<s-m?!1:!0}l?(0>a&&(a=g),h!==a&&(b=h,c+=-z),0===g%Math.max(n.length/10,3)&&(f=!0)):f=!0;f&&(0<c&&0<=a&&0<=b)&&(H(c,a,b),b=a=-1,c=0)}}0<c&&H(c,a,b)})()}}function h(){p.plotArea.layoutManager.reset();
p._title&&(p._title.dockInsidePlotArea||"center"===p._title.horizontalAlign&&"center"===p._title.verticalAlign)&&p._title.render();if(p.subtitles)for(var a=0;a<p.subtitles.length;a++){var b=p.subtitles[a];(b.dockInsidePlotArea||"center"===b.horizontalAlign&&"center"===b.verticalAlign)&&b.render()}p.legend&&(p.legend.dockInsidePlotArea||"center"===p.legend.horizontalAlign&&"center"===p.legend.verticalAlign)&&p.legend.render()}var p=this;if(!(0>=a.dataSeriesIndexes.length)){var k=this.data[a.dataSeriesIndexes[0]],
n=k.dataPoints,m=10,l=this.plotArea,q=[],r=2,s,y=1.3,u=20/180*Math.PI,v=6,w={x:(l.x2+l.x1)/2,y:(l.y2+l.y1)/2},t=0;a=!1;for(var z=0;z<n.length;z++)t+=Math.abs(n[z].y),!a&&("undefined"!==typeof n[z].indexLabel&&null!==n[z].indexLabel&&0<n[z].indexLabel.toString().length)&&(a=!0),!a&&("undefined"!==typeof n[z].label&&null!==n[z].label&&0<n[z].label.toString().length)&&(a=!0);if(0!==t){a=a||"undefined"!==typeof k.indexLabel&&null!==k.indexLabel&&0<k.indexLabel.toString().length;var A="inside"!==k.indexLabelPlacement&&
a?0.75*Math.min(l.width,l.height)/2:0.92*Math.min(l.width,l.height)/2;k.radius&&(A=Ia(k.radius,A));var B="undefined"!==typeof k.innerRadius&&null!==k.innerRadius?Ia(k.innerRadius,A):0.7*A,F=Math.min(B/A,(A-1)/A);this.pieDoughnutClickHandler=function(a){p.isAnimating||!x(a.dataSeries.explodeOnClick)&&!a.dataSeries.explodeOnClick||(a=a.dataPoint,a.exploded=a.exploded?!1:!0,1<this.dataPoints.length&&p._animator.animate(0,500,function(a){b(a);h()}))};c();g();g();g();g();this.disableToolTip=!0;this._animator.animate(0,
this.animatedRender?this.animationDuration:0,function(a){var b=p.plotArea.ctx;b.clearRect(l.x1,l.y1,l.width,l.height);b.fillStyle=p.backgroundColor;b.fillRect(l.x1,l.y1,l.width,l.height);a=q[0].startAngle+2*Math.PI*a;for(b=0;b<n.length;b++){var c=0===b?q[b].startAngle:d,d=c+(q[b].endAngle-q[b].startAngle),e=!1;d>a&&(d=a,e=!0);var f=n[b].color?n[b].color:k._colorSet[b%k._colorSet.length];d>c&&za(p.plotArea.ctx,q[b].center,q[b].radius,f,k.type,c,d,k.fillOpacity,q[b].percentInnerRadius);if(e)break}h()},
function(){p.disableToolTip=!1;p._animator.animate(0,p.animatedRender?500:0,function(a){b(a);h()})})}}};z.prototype.animationRequestId=null;z.prototype.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();z.prototype.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||
window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;fa.prototype.registerSpace=function(a,c){"top"===a?this._topOccupied+=c.height:"bottom"===a?this._bottomOccupied+=c.height:"left"===a?this._leftOccupied+=c.width:"right"===a&&(this._rightOccupied+=c.width)};fa.prototype.unRegisterSpace=function(a,c){"top"===a?this._topOccupied-=c.height:"bottom"===a?this._bottomOccupied-=c.height:"left"===a?this._leftOccupied-=c.width:"right"===a&&(this._rightOccupied-=c.width)};
fa.prototype.getFreeSpace=function(){return{x1:this._x1+this._leftOccupied,y1:this._y1+this._topOccupied,x2:this._x2-this._rightOccupied,y2:this._y2-this._bottomOccupied,width:this._x2-this._x1-this._rightOccupied-this._leftOccupied,height:this._y2-this._y1-this._bottomOccupied-this._topOccupied}};fa.prototype.reset=function(){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding};S(M,L);M.prototype.render=function(a){a&&this.ctx.save();var c=this.ctx.font;this.ctx.textBaseline=
this.textBaseline;var b=0;this._isDirty&&this.measureText(this.ctx);this.ctx.translate(this.x,this.y+b);"middle"===this.textBaseline&&(b=-this._lineHeight/2);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/180*this.angle);var d=0,e=this.padding,f=null;(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(0,b,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor);this.ctx.fillStyle=this.fontColor;for(b=0;b<this._wrappedText.lines.length;b++)f=
this._wrappedText.lines[b],"right"===this.horizontalAlign?d=this.width-f.width-this.padding:"left"===this.horizontalAlign?d=this.padding:"center"===this.horizontalAlign&&(d=(this.width-2*this.padding)/2-f.width/2+this.padding),this.ctx.fillText(f.text,d,e),e+=f.height;this.ctx.font=c;a&&this.ctx.restore()};M.prototype.setText=function(a){this.text=a;this._isDirty=!0;this._wrappedText=null};M.prototype.measureText=function(){this._lineHeight=Ca(this.fontFamily,this.fontSize,this.fontWeight);if(null===
this.maxWidth)throw"Please set maxWidth and height for TextBlock";this._wrapText(this.ctx);this._isDirty=!1;return{width:this.width,height:this.height}};M.prototype._getLineWithWidth=function(a,c,b){a=String(a);if(!a)return{text:"",width:0};var d=b=0,e=a.length-1,f=Infinity;for(this.ctx.font=this._getFontString();d<=e;){var f=Math.floor((d+e)/2),g=a.substr(0,f+1);b=this.ctx.measureText(g).width;if(b<c)d=f+1;else if(b>c)e=f-1;else break}b>c&&1<g.length&&(g=g.substr(0,g.length-1),b=this.ctx.measureText(g).width);
c=!0;if(g.length===a.length||" "===a[g.length])c=!1;c&&(a=g.split(" "),1<a.length&&a.pop(),g=a.join(" "),b=this.ctx.measureText(g).width);return{text:g,width:b}};M.prototype._wrapText=function(){var a=new String(ga(String(this.text))),c=[],b=this.ctx.font,d=0,e=0;for(this.ctx.font=this._getFontString();0<a.length;){var f=this.maxHeight-2*this.padding,g=this._getLineWithWidth(a,this.maxWidth-2*this.padding,!1);g.height=this._lineHeight;c.push(g);var h=e,e=Math.max(e,g.width),d=d+g.height,a=ga(a.slice(g.text.length,
a.length));f&&d>f&&(g=c.pop(),d-=g.height,e=h)}this._wrappedText={lines:c,width:e,height:d};this.width=e+2*this.padding;this.height=d+2*this.padding;this.ctx.font=b};M.prototype._getFontString=function(){var a;a=""+(this.fontStyle?this.fontStyle+" ":"");a+=this.fontWeight?this.fontWeight+" ":"";a+=this.fontSize?this.fontSize+"px ":"";var c=this.fontFamily?this.fontFamily+"":"";!t&&c&&(c=c.split(",")[0],"'"!==c[0]&&'"'!==c[0]&&(c="'"+c+"'"));return a+=c};S(ia,L);ia.prototype.render=function(){if(this.text){var a=
this.dockInsidePlotArea?this.chart.plotArea:this.chart,c=a.layoutManager.getFreeSpace(),b=c.x1,d=c.y1,e=0,f=0,g=this.chart._menuButton&&this.chart.exportEnabled&&"top"===this.verticalAlign?22:0,h,p;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(null===this.maxWidth&&(this.maxWidth=c.width-4-g*("center"===this.horizontalAlign?2:1)),f=0.5*c.height-this.margin-2,e=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||"right"===this.horizontalAlign?(null===this.maxWidth&&(this.maxWidth=
c.height-4),f=0.5*c.width-this.margin-2):"center"===this.horizontalAlign&&(null===this.maxWidth&&(this.maxWidth=c.width-4),f=0.5*c.height-4));this.wrap||(f=Math.min(f,Math.max(1.5*this.fontSize,this.fontSize+2.5*this.padding)));var f=new M(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,
backgroundColor:this.backgroundColor,maxWidth:this.maxWidth,maxHeight:f,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:"top"}),k=f.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(d=c.y1+2,p="top"):"bottom"===this.verticalAlign&&(d=c.y2-2-k.height,p="bottom"),"left"===this.horizontalAlign?b=c.x1+2:"center"===this.horizontalAlign?b=c.x1+c.width/2-k.width/2:"right"===this.horizontalAlign&&(b=c.x2-2-k.width-g),h=this.horizontalAlign,
this.width=k.width,this.height=k.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(b=c.x1+2,d=c.y2-2-(this.maxWidth/2-k.width/2),e=-90,p="left",this.width=k.height,this.height=k.width):"right"===this.horizontalAlign?(b=c.x2-2,d=c.y1+2+(this.maxWidth/2-k.width/2),e=90,p="right",this.width=k.height,this.height=k.width):"center"===this.horizontalAlign&&(d=a.y1+(a.height/2-k.height/2),b=a.x1+(a.width/2-k.width/2),p="center",this.width=k.width,this.height=k.height),h="center");f.x=
b;f.y=d;f.angle=e;f.horizontalAlign=h;f.render(!0);a.layoutManager.registerSpace(p,{width:this.width+("left"===p||"right"===p?this.margin+2:0),height:this.height+("top"===p||"bottom"===p?this.margin+2:0)});this.bounds={x1:b,y1:d,x2:b+this.width,y2:d+this.height};this.ctx.textBaseline="top"}};S(pa,L);pa.prototype.render=ia.prototype.render;S(qa,L);qa.prototype.render=function(){var a=this.dockInsidePlotArea?this.chart.plotArea:this.chart,c=a.layoutManager.getFreeSpace(),b=null,d=0,e=0,f=0,g=0,h=this.chart._options.legend&&
!x(this.chart._options.legend.markerMargin)?this.chart._options.legend.markerMargin:0.3*this.fontSize;this.height=0;var p=[],k=[];"top"===this.verticalAlign||"bottom"===this.verticalAlign?(this.orientation="horizontal",b=this.verticalAlign,f=null!==this.maxWidth?this.maxWidth:c.width,g=null!==this.maxHeight?this.maxHeight:0.5*c.height):"center"===this.verticalAlign&&(this.orientation="vertical",b=this.horizontalAlign,f=null!==this.maxWidth?this.maxWidth:0.5*c.width,g=null!==this.maxHeight?this.maxHeight:
c.height);for(var n=0;n<this.dataSeries.length;n++){var m=this.dataSeries[n];if("pie"!==m.type&&"doughnut"!==m.type&&"funnel"!==m.type){var l=m.legendMarkerType?m.legendMarkerType:"line"!==m.type&&"stepLine"!==m.type&&"spline"!==m.type&&"scatter"!==m.type&&"bubble"!==m.type||!m.markerType?X.getDefaultLegendMarker(m.type):m.markerType,q=m.legendText?m.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart._publicChartReference,legend:this._options,dataSeries:m,dataPoint:null}):
m.name,r=m.legendMarkerColor?m.legendMarkerColor:m.markerColor?m.markerColor:m._colorSet[0],s=m.markerSize||"line"!==m.type&&"stepLine"!==m.type&&"spline"!==m.type?0.75*this.lineHeight:0,t=m.legendMarkerBorderColor?m.legendMarkerBorderColor:m.markerBorderColor,u=m.legendMarkerBorderThickness?m.legendMarkerBorderThickness:m.markerBorderThickness?Math.max(1,Math.round(0.2*s)):0,q=this.chart.replaceKeywordsWithValue(q,m.dataPoints[0],m,n),l={markerType:l,markerColor:r,text:q,textBlock:null,chartType:m.type,
markerSize:s,lineColor:m._colorSet[0],dataSeriesIndex:m.index,dataPointIndex:null,markerBorderColor:t,markerBorderThickness:u};p.push(l)}else for(var v=0;v<m.dataPoints.length;v++){var w=m.dataPoints[v],l=w.legendMarkerType?w.legendMarkerType:m.legendMarkerType?m.legendMarkerType:X.getDefaultLegendMarker(m.type),q=w.legendText?w.legendText:m.legendText?m.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart._publicChartReference,legend:this._options,dataSeries:m,dataPoint:w}):
w.name?w.name:"DataPoint: "+(v+1),r=w.legendMarkerColor?w.legendMarkerColor:m.legendMarkerColor?m.legendMarkerColor:w.color?w.color:m.color?m.color:m._colorSet[v%m._colorSet.length],s=0.75*this.lineHeight,t=w.legendMarkerBorderColor?w.legendMarkerBorderColor:m.legendMarkerBorderColor?m.legendMarkerBorderColor:w.markerBorderColor?w.markerBorderColor:m.markerBorderColor,u=w.legendMarkerBorderThickness?w.legendMarkerBorderThickness:m.legendMarkerBorderThickness?m.legendMarkerBorderThickness:w.markerBorderThickness||
m.markerBorderThickness?Math.max(1,Math.round(0.2*s)):0,q=this.chart.replaceKeywordsWithValue(q,w,m,v),l={markerType:l,markerColor:r,text:q,textBlock:null,chartType:m.type,markerSize:s,dataSeriesIndex:n,dataPointIndex:v,markerBorderColor:t,markerBorderThickness:u};(w.showInLegend||m.showInLegend&&!1!==w.showInLegend)&&p.push(l)}}!0===this.reversed&&p.reverse();if(0<p.length){m=null;v=q=w=0;q=null!==this.itemWidth?null!==this.itemMaxWidth?Math.min(this.itemWidth,this.itemMaxWidth,f):Math.min(this.itemWidth,
f):null!==this.itemMaxWidth?Math.min(this.itemMaxWidth,f):f;s=0===s?0.75*this.lineHeight:s;q-=s+h;for(n=0;n<p.length;n++){l=p[n];if("line"===l.chartType||"spline"===l.chartType||"stepLine"===l.chartType)q-=2*0.1*this.lineHeight;if(!(0>=g||"undefined"===typeof g||0>=q||"undefined"===typeof q)){if("horizontal"===this.orientation){l.textBlock=new M(this.ctx,{x:0,y:0,maxWidth:q,maxHeight:this.itemWrap?g:this.lineHeight,angle:0,text:l.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,
fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"});l.textBlock.measureText();null!==this.itemWidth&&(l.textBlock.width=this.itemWidth-(s+h+("line"===l.chartType||"spline"===l.chartType||"stepLine"===l.chartType?2*0.1*this.lineHeight:0)));if(!m||m.width+Math.round(l.textBlock.width+s+h+(0===m.width?0:this.horizontalSpacing)+("line"===l.chartType||"spline"===l.chartType||"stepLine"===l.chartType?2*0.1*this.lineHeight:0))>f)m={items:[],width:0},k.push(m),
this.height+=v,v=0;v=Math.max(v,l.textBlock.height)}else l.textBlock=new M(this.ctx,{x:0,y:0,maxWidth:q,maxHeight:!0===this.itemWrap?g:1.5*this.fontSize,angle:0,text:l.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"middle"}),l.textBlock.measureText(),null!==this.itemWidth&&(l.textBlock.width=this.itemWidth-(s+h+("line"===l.chartType||"spline"===l.chartType||"stepLine"===l.chartType?
2*0.1*this.lineHeight:0))),this.height<g-this.lineHeight?(m={items:[],width:0},k.push(m)):(m=k[w],w=(w+1)%k.length),this.height+=l.textBlock.height;l.textBlock.x=m.width;l.textBlock.y=0;m.width+=Math.round(l.textBlock.width+s+h+(0===m.width?0:this.horizontalSpacing)+("line"===l.chartType||"spline"===l.chartType||"stepLine"===l.chartType?2*0.1*this.lineHeight:0));m.items.push(l);this.width=Math.max(m.width,this.width)}}this.height=!1===this.itemWrap?k.length*this.lineHeight:this.height+v;this.height=
Math.min(g,this.height);this.width=Math.min(f,this.width)}"top"===this.verticalAlign?(e="left"===this.horizontalAlign?c.x1:"right"===this.horizontalAlign?c.x2-this.width:c.x1+c.width/2-this.width/2,d=c.y1):"center"===this.verticalAlign?(e="left"===this.horizontalAlign?c.x1:"right"===this.horizontalAlign?c.x2-this.width:c.x1+c.width/2-this.width/2,d=c.y1+c.height/2-this.height/2):"bottom"===this.verticalAlign&&(e="left"===this.horizontalAlign?c.x1:"right"===this.horizontalAlign?c.x2-this.width:c.x1+
c.width/2-this.width/2,d=c.y2-this.height);this.items=p;for(n=0;n<this.items.length;n++)l=p[n],l.id=++this.chart._eventManager.lastObjectId,this.chart._eventManager.objectMap[l.id]={id:l.id,objectType:"legendItem",legendItemIndex:n,dataSeriesIndex:l.dataSeriesIndex,dataPointIndex:l.dataPointIndex};for(n=c=0;n<k.length;n++){m=k[n];for(w=v=0;w<m.items.length;w++){l=m.items[w];r=l.textBlock.x+e+(0===w?0.2*s:this.horizontalSpacing);t=d+c;q=r;this.chart.data[l.dataSeriesIndex].visible||(this.ctx.globalAlpha=
0.5);this.ctx.save();this.ctx.beginPath();this.ctx.rect(e,d,f,Math.max(g-g%this.lineHeight,0));this.ctx.clip();if("line"===l.chartType||"stepLine"===l.chartType||"spline"===l.chartType)this.ctx.strokeStyle=l.lineColor,this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),this.ctx.moveTo(r-0.1*this.lineHeight,t+this.lineHeight/2),this.ctx.lineTo(r+0.85*this.lineHeight,t+this.lineHeight/2),this.ctx.stroke(),q-=0.1*this.lineHeight;P.drawMarker(r+s/2,t+this.lineHeight/2,this.ctx,l.markerType,
l.markerSize,l.markerColor,l.markerBorderColor,l.markerBorderThickness);l.textBlock.x=r+h+s;if("line"===l.chartType||"stepLine"===l.chartType||"spline"===l.chartType)l.textBlock.x+=0.1*this.lineHeight;l.textBlock.y=Math.round(t+this.lineHeight/2);l.textBlock.render(!0);this.ctx.restore();v=0<w?Math.max(v,l.textBlock.height):l.textBlock.height;this.chart.data[l.dataSeriesIndex].visible||(this.ctx.globalAlpha=1);r=C(l.id);this.ghostCtx.fillStyle=r;this.ghostCtx.beginPath();this.ghostCtx.fillRect(q,
l.textBlock.y-this.lineHeight/2,l.textBlock.x+l.textBlock.width-q,l.textBlock.height);l.x1=this.chart._eventManager.objectMap[l.id].x1=q;l.y1=this.chart._eventManager.objectMap[l.id].y1=l.textBlock.y-this.lineHeight/2;l.x2=this.chart._eventManager.objectMap[l.id].x2=l.textBlock.x+l.textBlock.width;l.y2=this.chart._eventManager.objectMap[l.id].y2=l.textBlock.y+l.textBlock.height-this.lineHeight/2}c+=v}0<p.length&&a.layoutManager.registerSpace(b,{width:this.width+2+2,height:this.height+5+5});this.bounds=
{x1:e,y1:d,x2:e+this.width,y2:d+this.height}};S(va,L);va.prototype.render=function(){var a=this.chart.layoutManager.getFreeSpace();this.ctx.fillStyle="red";this.ctx.fillRect(a.x1,a.y1,a.x2,a.y2)};S(X,L);X.prototype.getDefaultAxisPlacement=function(){var a=this.type;if("column"===a||"line"===a||"stepLine"===a||"spline"===a||"area"===a||"stepArea"===a||"splineArea"===a||"stackedColumn"===a||"stackedLine"===a||"bubble"===a||"scatter"===a||"stackedArea"===a||"stackedColumn100"===a||"stackedLine100"===
a||"stackedArea100"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeArea"===a||"rangeSplineArea"===a)return"normal";if("bar"===a||"stackedBar"===a||"stackedBar100"===a||"rangeBar"===a)return"xySwapped";if("pie"===a||"doughnut"===a||"funnel"===a)return"none";window.console.log("Unknown Chart Type: "+a);return null};X.getDefaultLegendMarker=function(a){if("column"===a||"stackedColumn"===a||"stackedLine"===a||"bar"===a||"stackedBar"===a||"stackedBar100"===a||"bubble"===a||"scatter"===a||
"stackedColumn100"===a||"stackedLine100"===a||"stepArea"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeBar"===a||"rangeArea"===a||"rangeSplineArea"===a)return"square";if("line"===a||"stepLine"===a||"spline"===a||"pie"===a||"doughnut"===a||"funnel"===a)return"circle";if("area"===a||"splineArea"===a||"stackedArea"===a||"stackedArea100"===a)return"triangle";window.console.log("Unknown Chart Type: "+a);return null};X.prototype.getDataPointAtX=function(a,c){if(!this.dataPoints||0===this.dataPoints.length)return null;
var b={dataPoint:null,distance:Infinity,index:NaN},d=null,e=0,f=0,g=1,h=Infinity,p=0,k=0,n=0;"none"!==this.chart.plotInfo.axisPlacement&&(this.axisX.logarithmic?(n=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),n=1<n?Math.min(Math.max((this.dataPoints.length-1)/n*Math.log(a/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0):(n=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,n=0<n?Math.min(Math.max((this.dataPoints.length-1)/n*(a-this.dataPoints[0].x)>>
0,0),this.dataPoints.length):0));for(;;){f=0<g?n+e:n-e;if(0<=f&&f<this.dataPoints.length){var d=this.dataPoints[f],m=this.axisX.logarithmic?d.x>a?d.x/a:a/d.x:Math.abs(d.x-a);m<b.distance&&(b.dataPoint=d,b.distance=m,b.index=f);d=m;d<=h?h=d:0<g?p++:k++;if(1E3<p&&1E3<k)break}else if(0>n-e&&n+e>=this.dataPoints.length)break;-1===g?(e++,g=1):g=-1}return c||b.dataPoint.x!==a?c&&null!==b.dataPoint?b:null:b};X.prototype.getDataPointAtXY=function(a,c,b){if(!this.dataPoints||0===this.dataPoints.length||a<
this.chart.plotArea.x1||a>this.chart.plotArea.x2||c<this.chart.plotArea.y1||c>this.chart.plotArea.y2)return null;b=b||!1;var d=[],e=0,f=0,g=1,h=!1,p=Infinity,k=0,n=0,m=0;"none"!==this.chart.plotInfo.axisPlacement&&(m=this.chart.axisX.getXValueAt({x:a,y:c}),this.axisX.logarithmic?(f=Math.log(this.dataPoints[this.dataPoints.length-1].x/this.dataPoints[0].x),m=1<f?Math.min(Math.max((this.dataPoints.length-1)/f*Math.log(m/this.dataPoints[0].x)>>0,0),this.dataPoints.length):0):(f=this.dataPoints[this.dataPoints.length-
1].x-this.dataPoints[0].x,m=0<f?Math.min(Math.max((this.dataPoints.length-1)/f*(m-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0));for(;;){f=0<g?m+e:m-e;if(0<=f&&f<this.dataPoints.length){var l=this.chart._eventManager.objectMap[this.dataPointIds[f]],q=this.dataPoints[f],r=null;if(l){switch(this.type){case "column":case "stackedColumn":case "stackedColumn100":case "bar":case "stackedBar":case "stackedBar100":case "rangeColumn":case "rangeBar":a>=l.x1&&(a<=l.x2&&c>=l.y1&&c<=l.y2)&&(d.push({dataPoint:q,
dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(l.x1-a),Math.abs(l.x2-a),Math.abs(l.y1-c),Math.abs(l.y2-c))}),h=!0);break;case "line":case "stepLine":case "spline":case "area":case "stepArea":case "stackedArea":case "stackedArea100":case "splineArea":case "scatter":var s=R("markerSize",q,this)||4,t=b?20:s,r=Math.sqrt(Math.pow(l.x1-a,2)+Math.pow(l.y1-c,2));r<=t&&d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:r});f=Math.abs(l.x1-a);f<=p?p=f:0<g?k++:n++;r<=s/2&&(h=!0);break;
case "rangeArea":case "rangeSplineArea":s=R("markerSize",q,this)||4;t=b?20:s;r=Math.min(Math.sqrt(Math.pow(l.x1-a,2)+Math.pow(l.y1-c,2)),Math.sqrt(Math.pow(l.x1-a,2)+Math.pow(l.y2-c,2)));r<=t&&d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:r});f=Math.abs(l.x1-a);f<=p?p=f:0<g?k++:n++;r<=s/2&&(h=!0);break;case "bubble":s=l.size;r=Math.sqrt(Math.pow(l.x1-a,2)+Math.pow(l.y1-c,2));r<=s/2&&(d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:r}),h=!0);break;case "pie":case "doughnut":s=
l.center;t="doughnut"===this.type?l.percentInnerRadius*l.radius:0;r=Math.sqrt(Math.pow(s.x-a,2)+Math.pow(s.y-c,2));r<l.radius&&r>t&&(r=Math.atan2(c-s.y,a-s.x),0>r&&(r+=2*Math.PI),r=Number(((180*(r/Math.PI)%360+360)%360).toFixed(12)),s=Number(((180*(l.startAngle/Math.PI)%360+360)%360).toFixed(12)),t=Number(((180*(l.endAngle/Math.PI)%360+360)%360).toFixed(12)),0===t&&1<l.endAngle&&(t=360),s>=t&&0!==q.y&&(t+=360,r<s&&(r+=360)),r>s&&r<t&&(d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:0}),
h=!0));break;case "candlestick":if(a>=l.x1-l.borderThickness/2&&a<=l.x2+l.borderThickness/2&&c>=l.y2-l.borderThickness/2&&c<=l.y3+l.borderThickness/2||Math.abs(l.x2-a+l.x1-a)<l.borderThickness&&c>=l.y1&&c<=l.y4)d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(l.x1-a),Math.abs(l.x2-a),Math.abs(l.y2-c),Math.abs(l.y3-c))}),h=!0;break;case "ohlc":if(Math.abs(l.x2-a+l.x1-a)<l.borderThickness&&c>=l.y2&&c<=l.y3||a>=l.x1&&a<=(l.x2+l.x1)/2&&c>=l.y1-l.borderThickness/2&&c<=l.y1+
l.borderThickness/2||a>=(l.x1+l.x2)/2&&a<=l.x2&&c>=l.y4-l.borderThickness/2&&c<=l.y4+l.borderThickness/2)d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(l.x1-a),Math.abs(l.x2-a),Math.abs(l.y2-c),Math.abs(l.y3-c))}),h=!0}if(h||1E3<k&&1E3<n)break}}else if(0>m-e&&m+e>=this.dataPoints.length)break;-1===g?(e++,g=1):g=-1}a=null;for(c=0;c<d.length;c++)a?d[c].distance<=a.distance&&(a=d[c]):a=d[c];return a};X.prototype.getMarkerProperties=function(a,c,b,d){var e=this.dataPoints;
return{x:c,y:b,ctx:d,type:e[a].markerType?e[a].markerType:this.markerType,size:e[a].markerSize?e[a].markerSize:this.markerSize,color:e[a].markerColor?e[a].markerColor:this.markerColor?this.markerColor:e[a].color?e[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length],borderColor:e[a].markerBorderColor?e[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:e[a].markerBorderThickness?e[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:
null}};S(B,L);B.prototype.createExtraLabelsForLog=function(a){a=(a||0)+1;if(!(5<a)){var c=this.logLabelValues[0]||this.intervalStartPosition;if(Math.log(this.range)/Math.log(c/this.viewportMinimum)<this.noTicks-1){for(var b=B.getNiceNumber((c-this.viewportMinimum)/Math.min(Math.max(2,this.noTicks-this.logLabelValues.length),3),!0),d=Math.ceil(this.viewportMinimum/b)*b;d<c;d+=b)d<this.viewportMinimum||this.logLabelValues.push(d);this.logLabelValues.sort(ta);this.createExtraLabelsForLog(a)}}};B.prototype.createLabels=
function(){var a,c,b=0,d=0,e,f=0,g=0,d=0,h=this.interval,p=0,k,n=0.6*this.chart.height;if("axisX"!==this.type||"dateTime"!==this.chart.plotInfo.axisXValueType||this.logarithmic){e=this.viewportMaximum;if(this.labels){a=Math.ceil(h);for(var h=Math.ceil(this.intervalStartPosition),m=!1,b=h;b<this.viewportMaximum;b+=a)if(this.labels[b])m=!0;else{m=!1;break}m&&(this.interval=a,this.intervalStartPosition=h)}if(this.logarithmic&&!this.equidistantInterval){this.logLabelValues||(this.logLabelValues=[],this.createExtraLabelsForLog());
for(var l=0;l<this.logLabelValues.length;l++)b=this.logLabelValues[l],b<this.viewportMinimum||(a=this.labelFormatter?this.labelFormatter({chart:this.chart._publicChartReference,axis:this._options,value:b,label:this.labels[b]?this.labels[b]:null}):"axisX"===this.type&&this.labels[b]?this.labels[b]:Z(b,this.valueFormatString,this.chart._cultureInfo),a=new M(this.ctx,{x:0,y:0,maxWidth:f,maxHeight:g,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,
fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:b,textBlock:a,effectiveHeight:null}))}for(b=this.intervalStartPosition;b<=e;b=parseFloat((this.logarithmic&&this.equidistantInterval?b*Math.pow(this.logarithmBase,this.interval):b+this.interval).toFixed(14)))a=this.labelFormatter?this.labelFormatter({chart:this.chart._publicChartReference,axis:this._options,
value:b,label:this.labels[b]?this.labels[b]:null}):"axisX"===this.type&&this.labels[b]?this.labels[b]:Z(b,this.valueFormatString,this.chart._cultureInfo),a=new M(this.ctx,{x:0,y:0,maxWidth:f,maxHeight:g,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:b,
textBlock:a,effectiveHeight:null})}else for(this.intervalStartPosition=this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval),e=Aa(new Date(this.viewportMaximum),this.interval,this.intervalType),b=this.intervalStartPosition;b<e;Aa(b,h,this.intervalType))a=b.getTime(),a=this.labelFormatter?this.labelFormatter({chart:this.chart._publicChartReference,axis:this._options,value:b,label:this.labels[b]?this.labels[b]:null}):"axisX"===this.type&&this.labels[a]?this.labels[a]:
xa(b,this.valueFormatString,this.chart._cultureInfo),a=new M(this.ctx,{x:0,y:0,maxWidth:f,maxHeight:g,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:b.getTime(),textBlock:a,effectiveHeight:null});if("bottom"===this._position||"top"===this._position)p=this.logarithmic&&
!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.width*Math.log(Math.min(this._labels[this._labels.length-1].position/this._labels[this._labels.length-2].position,this._labels[1].position/this._labels[0].position))/Math.log(this.range):this.lineCoordinates.width/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/Math.log(this.logarithmBase):Math.abs(this.range))*E[this.intervalType+"Duration"]*this.interval,f="undefined"===typeof this._options.labelMaxWidth?0.5*
this.chart.width>>0:this._options.labelMaxWidth,this.chart.panEnabled||(g="undefined"===typeof this._options.labelWrap||this.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize);else if("left"===this._position||"right"===this._position)p=this.logarithmic&&!this.equidistantInterval&&2<=this._labels.length?this.lineCoordinates.height*Math.log(Math.min(this._labels[this._labels.length-1].position/this._labels[this._labels.length-2].position,this._labels[1].position/this._labels[0].position))/Math.log(this.range):
this.lineCoordinates.height/(this.logarithmic&&this.equidistantInterval?Math.log(this.range)/Math.log(this.logarithmBase):Math.abs(this.range))*E[this.intervalType+"Duration"]*this.interval,this.chart.panEnabled||(f="undefined"===typeof this._options.labelMaxWidth?0.3*this.chart.width>>0:this._options.labelMaxWidth),g="undefined"===typeof this._options.labelWrap||this.labelWrap?0.3*this.chart.height>>0:1.5*this.labelFontSize;for(d=0;d<this._labels.length;d++){a=this._labels[d].textBlock;a.maxWidth=
f;a.maxHeight=g;var q=a.measureText();k=q.height}e=[];m=h=0;if(this.labelAutoFit||this._options.labelAutoFit)if(x(this.labelAngle)||(this.labelAngle=(this.labelAngle%360+360)%360,90<this.labelAngle&&270>this.labelAngle?this.labelAngle-=180:270<=this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360)),"bottom"===this._position||"top"===this._position)if(f=0.9*p>>0,m=0,!this.chart.panEnabled&&1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=
f;this.sessionVariables.labelMaxHeight=g;this.sessionVariables.labelAngle=this.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<this._labels.length;b++){a=this._labels[b].textBlock;for(var r,s=a.text.split(" "),d=0;d<s.length;d++)l=s[d],this.ctx.font=a.fontStyle+" "+a.fontWeight+" "+a.fontSize+"px "+a.fontFamily,l=this.ctx.measureText(l),l.width>m&&(r=b,m=l.width)}b=0;for(b=this.intervalStartPosition<this.viewportMinimum?1:0;b<this._labels.length;b++)if(a=this._labels[b].textBlock,
q=a.measureText(),b<this._labels.length-1&&(l=b+1,c=this._labels[l].textBlock,c=c.measureText()),e.push(a.height),this.sessionVariables.labelMaxHeight=Math.max.apply(Math,e),Math.cos(Math.PI/180*Math.abs(this.labelAngle)),Math.sin(Math.PI/180*Math.abs(this.labelAngle)),d=f*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(g-a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),x(this._options.labelAngle)&&isNaN(this._options.labelAngle)&&0!==this._options.labelAngle)if(this.sessionVariables.labelMaxHeight=
0===this.labelAngle?g:Math.min((d-f*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)),d),s=(n-(k+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(-25)))/Math.sin(Math.PI/180*Math.abs(-25)),!x(this._options.labelWrap))this.labelWrap?x(this._options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=Math.min(Math.max(f,m),s),this.sessionVariables.labelWrap=this.labelWrap,q.width+c.width>>0>2*f&&(this.sessionVariables.labelAngle=-25)):(this.sessionVariables.labelWrap=
this.labelWrap,this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth,this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>f?-25:this.sessionVariables.labelAngle):x(this._options.labelMaxWidth)?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=g,this.sessionVariables.labelMaxWidth=f,q.width+c.width>>0>2*f&&(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=s)):(this.sessionVariables.labelAngle=this.sessionVariables.labelMaxWidth>
f?-25:this.sessionVariables.labelAngle,this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth,this.sessionVariables.labelMaxHeight=g,this.sessionVariables.labelWrap=this.labelWrap);else{if(x(this._options.labelWrap))if(!x(this._options.labelMaxWidth))this._options.labelMaxWidth<f?(this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth,this.sessionVariables.labelMaxHeight=d):(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth,this.sessionVariables.labelMaxHeight=
g);else if(!x(c))if(d=q.width+c.width>>0,l=this.labelFontSize,m<f)d-2*f>h&&(h=d-2*f,d>=2*f&&d<2.2*f?(this.sessionVariables.labelMaxWidth=f,x(this._options.labelFontSize)&&12<l&&(l=Math.floor(12/13*l),a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?l:this._options.labelFontSize,this.sessionVariables.labelAngle=this.labelAngle):d>=2.2*f&&d<2.8*f?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=s,this.sessionVariables.labelFontSize=l):d>=2.8*
f&&d<3.2*f?(this.sessionVariables.labelMaxWidth=Math.max(f,m),this.sessionVariables.labelWrap=!0,x(this._options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?l:this._options.labelFontSize,this.sessionVariables.labelAngle=this.labelAngle):d>=3.2*f&&d<3.6*f?(this.sessionVariables.labelAngle=-25,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=s,
this.sessionVariables.labelFontSize=this.labelFontSize):d>3.6*f&&d<5*f?(x(this._options.labelFontSize)&&12<l&&(l=Math.floor(12/13*l),a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?l:this._options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=s):d>5*f&&(this.sessionVariables.labelWrap=!0,this.sessionVariables.labelMaxWidth=f,this.sessionVariables.labelFontSize=l,this.sessionVariables.labelMaxHeight=
g,this.sessionVariables.labelAngle=this.labelAngle));else if(r===b&&(0===r&&m+this._labels[r+1].textBlock.measureText().width-2*f>h||r===this._labels.length-1&&m+this._labels[r-1].textBlock.measureText().width-2*f>h||0<r&&r<this._labels.length-1&&m+this._labels[r+1].textBlock.measureText().width-2*f>h&&m+this._labels[r-1].textBlock.measureText().width-2*f>h))h=0===r?m+this._labels[r+1].textBlock.measureText().width-2*f:m+this._labels[r-1].textBlock.measureText().width-2*f,this.sessionVariables.labelFontSize=
x(this._options.labelFontSize)?l:this._options.labelFontSize,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelAngle=-25,this.sessionVariables.labelMaxWidth=s;else if(0===h)for(this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?l:this._options.labelFontSize,this.sessionVariables.labelWrap=!0,d=0;d<this._labels.length;d++)a=this._labels[d].textBlock,a.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(f,m),s),q=a.measureText(),d<this._labels.length-1&&(l=d+1,
c=this._labels[l].textBlock,c.maxWidth=this.sessionVariables.labelMaxWidth=Math.min(Math.max(f,m),s),c=c.measureText(),q.width+c.width>>0>2*f&&(this.sessionVariables.labelAngle=-25))}else(this.sessionVariables.labelAngle=this.labelAngle,this.sessionVariables.labelMaxHeight=0===this.labelAngle?g:Math.min((d-f*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/180*Math.abs(this.labelAngle)),d),s=0!=this.labelAngle?(n-(k+a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)))/Math.sin(Math.PI/
180*Math.abs(this.labelAngle)):f,this.sessionVariables.labelMaxHeight=g=this.labelWrap?(n-s*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)):1.5*this.labelFontSize,x(this._options.labelWrap))?x(this._options.labelWrap)&&(this.labelWrap&&!x(this._options.labelMaxWidth)?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth:s,this.sessionVariables.labelMaxHeight=g):(this.sessionVariables.labelAngle=
this.labelAngle,this.sessionVariables.labelMaxWidth=s,this.sessionVariables.labelMaxHeight=d<0.9*p?0.9*p:d,this.sessionVariables.labelWrap=this.labelWrap)):(this._options.labelWrap?(this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth:s):(x(this._options.labelMaxWidth),this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth:s,this.sessionVariables.labelWrap=this.labelWrap),this.sessionVariables.labelMaxHeight=
g);for(d=0;d<this._labels.length;d++)a=this._labels[d].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=x(this._options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:
this._options.labelMaxWidth,a.fontSize=this.labelFontSize=x(this._options.labelFontSize)?this.sessionVariables.labelFontSize:this._options.labelFontSize,a.angle=this.labelAngle=x(this._options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=x(this._options.labelWrap)?this.sessionVariables.labelWrap:this._options.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();else if("left"===this._position||"right"===this._position)if(f=x(this._options.labelMaxWidth)?
0.3*this.chart.width>>0:this._options.labelMaxWidth,g="undefined"===typeof this._options.labelWrap||this.labelWrap?0.3*this.chart.height>>0:1.5*this.labelFontSize,!this.chart.panEnabled&&1<=this._labels.length){this.sessionVariables.labelFontSize=this.labelFontSize;this.sessionVariables.labelMaxWidth=f;this.sessionVariables.labelMaxHeight=g;this.sessionVariables.labelAngle=x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle;this.sessionVariables.labelWrap=this.labelWrap;for(b=0;b<
this._labels.length;b++)(a=this._labels[b].textBlock,q=a.measureText(),b<this._labels.length-1&&(l=b+1,c=this._labels[l].textBlock,c=c.measureText()),e.push(a.height),this.sessionVariables.labelMaxHeight=Math.max.apply(Math,e),d=f*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(g-a.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),Math.cos(Math.PI/180*Math.abs(this.labelAngle)),Math.sin(Math.PI/180*Math.abs(this.labelAngle)),x(this._options.labelAngle)&&isNaN(this._options.labelAngle)&&
0!==this._options.labelAngle)?x(this._options.labelWrap)?x(this._options.labelWrap)&&(x(this._options.labelMaxWidth)?x(c)||(p=q.height+c.height>>0,p-2*g>m&&(m=p-2*g,p>=2*g&&p<2.4*g?(x(this._options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelMaxHeight=g,this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?this.labelFontSize:this._options.labelFontSize):p>=2.4*g&&p<2.8*g?(this.sessionVariables.labelMaxHeight=
d,this.sessionVariables.labelFontSize=this.labelFontSize,this.sessionVariables.labelWrap=!0):p>=2.8*g&&p<3.2*g?(this.sessionVariables.labelMaxHeight=g,this.sessionVariables.labelWrap=!0,x(this._options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?this.labelFontSize:this._options.labelFontSize,this.sessionVariables.labelAngle=x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):
p>=3.2*g&&p<3.6*g?(this.sessionVariables.labelMaxHeight=d,this.sessionVariables.labelWrap=!0,this.sessionVariables.labelFontSize=this.labelFontSize):p>3.6*g&&p<10*g?(x(this._options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?this.labelFontSize:this._options.labelFontSize,this.sessionVariables.labelMaxWidth=f,this.sessionVariables.labelMaxHeight=g,this.sessionVariables.labelAngle=
x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle):p>10*g&&p<50*g&&(x(this._options.labelFontSize)&&12<this.labelFontSize&&(this.labelFontSize=Math.floor(12/13*this.labelFontSize),a.measureText()),this.sessionVariables.labelFontSize=x(this._options.labelFontSize)?this.labelFontSize:this._options.labelFontSize,this.sessionVariables.labelMaxHeight=g,this.sessionVariables.labelMaxWidth=f,this.sessionVariables.labelAngle=x(this.sessionVariables.labelAngle)?0:this.sessionVariables.labelAngle))):
(this.sessionVariables.labelMaxHeight=g,this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth:this.sessionVariables.labelMaxWidth)):(this.sessionVariables.labelMaxWidth=this.labelWrap?this._options.labelMaxWidth?this._options.labelMaxWidth:this.sessionVariables.labelMaxWidth:this.labelMaxWidth?this._options.labelMaxWidth?this._options.labelMaxWidth:this.sessionVariables.labelMaxWidth:f,this.sessionVariables.labelMaxHeight=g):(this.sessionVariables.labelAngle=
this.labelAngle,this.sessionVariables.labelMaxWidth=0===this.labelAngle?f:Math.min((d-g*Math.sin(Math.PI/180*Math.abs(this.labelAngle)))/Math.cos(Math.PI/180*Math.abs(this.labelAngle)),g),x(this._options.labelWrap))?x(this._options.labelWrap)&&(this.labelWrap&&!x(this._options.labelMaxWidth)?(this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth>this._options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxHeight=
d):(this.sessionVariables.labelMaxWidth=this._options.labelMaxWidth?this._options.labelMaxWidth:f,this.sessionVariables.labelMaxHeight=0===this.labelAngle?g:d,x(this._options.labelMaxWidth)&&(this.sessionVariables.labelAngle=this.labelAngle))):this._options.labelWrap?(this.sessionVariables.labelMaxHeight=0===this.labelAngle?g:d,this.sessionVariables.labelWrap=this.labelWrap,this.sessionVariables.labelMaxWidth=f):(this.sessionVariables.labelMaxHeight=g,x(this._options.labelMaxWidth),this.sessionVariables.labelMaxWidth=
this._options.labelMaxWidth?this._options.labelMaxWidth:this.sessionVariables.labelMaxWidth,this.sessionVariables.labelWrap=this.labelWrap);for(d=0;d<this._labels.length;d++)a=this._labels[d].textBlock,a.maxWidth=this.labelMaxWidth=this.sessionVariables.labelMaxWidth,a.fontSize=this.labelFontSize=this.sessionVariables.labelFontSize,a.angle=this.labelAngle=this.sessionVariables.labelAngle,a.wrap=this.labelWrap=this.sessionVariables.labelWrap,a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText()}else for(b=
0;b<this._labels.length;b++)a=this._labels[b].textBlock,a.maxWidth=this.labelMaxWidth=x(this._options.labelMaxWidth)?this.sessionVariables.labelMaxWidth:this._options.labelMaxWidth,a.fontSize=this.labelFontSize=x(this._options.labelFontSize)?this.sessionVariables.labelFontSize:this._options.labelFontSize,a.angle=this.labelAngle=x(this._options.labelAngle)?this.sessionVariables.labelAngle:this.labelAngle,a.wrap=this.labelWrap=x(this._options.labelWrap)?this.sessionVariables.labelWrap:this._options.labelWrap,
a.maxHeight=this.sessionVariables.labelMaxHeight,a.measureText();for(b=0;b<this.stripLines.length;b++){var f=this.stripLines[b],t;if("outside"===f.labelPlacement){g=this.sessionVariables.labelMaxWidth;if("bottom"===this._position||"top"===this._position)t="undefined"===typeof f._options.labelWrap?this.sessionVariables.labelMaxHeight:f.labelWrap?0.8*this.chart.height>>0:1.5*this.labelFontSize;if("left"===this._position||"right"===this._position)t="undefined"===typeof f._options.labelWrap?this.sessionVariables.labelMaxHeight:
f.labelWrap?0.8*this.chart.width>>0:1.5*this.labelFontSize;c=x(f._options.labelBackgroundColor)?"#EEEEEE":f._options.labelBackgroundColor}else g="bottom"===this._position||"top"===this._position?0.9*this.chart.width>>0:0.9*this.chart.height>>0,t="undefined"===typeof f._options.labelWrap||f.labelWrap?"bottom"===this._position||"top"===this._position?0.8*this.chart.width>>0:0.8*this.chart.height>>0:1.5*this.labelFontSize,c=x(f._options.labelBackgroundColor)?x(f.startValue)&&0!==f.startValue?"transparent":
"#EEEEEE":f._options.labelBackgroundColor;a=new M(this.ctx,{x:0,y:0,backgroundColor:c,maxWidth:f._options.labelMaxWidth?f._options.labelMaxWidth:g,maxHeight:t,angle:this.labelAngle,text:f.labelFormatter?f.labelFormatter({chart:this.chart._publicChartReference,axis:this,stripLine:f}):f.label,horizontalAlign:"left",fontSize:"outside"===f.labelPlacement?f._options.labelFontSize?f._options.labelFontSize:this.labelFontSize:f.labelFontSize,fontFamily:"outside"===f.labelPlacement?f._options.labelFontFamily?
f._options.labelFontFamily:this.labelFontFamily:f.labelFontFamily,fontWeight:"outside"===f.labelPlacement?f._options.fontWeight?f._options.fontWeight:this.fontWeight:f.fontWeight,fontColor:f._options.labelFontColor||f.color,fontStyle:"outside"===f.labelPlacement?f._options.fontStyle?f._options.fontStyle:this.fontWeight:f.fontStyle,textBaseline:"middle",borderThickness:0});this._stripLineLabels.push({position:f.value,textBlock:a,effectiveHeight:null,stripLine:f})}};B.prototype.createLabelsAndCalculateWidth=
function(){var a=0,c=0;this._labels=[];this._stripLineLabels=[];if("left"===this._position||"right"===this._position){this.createLabels();for(c=0;c<this._labels.length;c++){var b=this._labels[c].textBlock,d=b.measureText(),e=0,e=0===this.labelAngle?d.width:d.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(d.height-b.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle));a<e&&(a=e);this._labels[c].effectiveWidth=e}for(c=0;c<this._stripLineLabels.length;c++)"outside"===this._stripLineLabels[c].stripLine.labelPlacement&&
(this._stripLineLabels[c].stripLine.value>this.viewportMinimum&&this._stripLineLabels[c].stripLine.value<this.viewportMaximum)&&(b=this._stripLineLabels[c].textBlock,d=b.measureText(),e=0===this.labelAngle?d.width:d.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+(d.height-b.fontSize/2)*Math.sin(Math.PI/180*Math.abs(this.labelAngle)),a<e&&(a=e),this._stripLineLabels[c].effectiveWidth=e)}return(this.title?this._titleTextBlock.measureText().height+2:0)+a+this.tickLength+5};B.prototype.createLabelsAndCalculateHeight=
function(){var a=0;this._labels=[];this._stripLineLabels=[];var c,b=0;this.createLabels();if("bottom"===this._position||"top"===this._position){for(b=0;b<this._labels.length;b++){c=this._labels[b].textBlock;var d=c.measureText(),e=0,e=0===this.labelAngle?d.height:d.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(d.height-c.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<e&&(a=e);this._labels[b].effectiveHeight=e}for(b=0;b<this._stripLineLabels.length;b++)"outside"===this._stripLineLabels[b].stripLine.labelPlacement&&
(c=this._stripLineLabels[b].textBlock,d=c.measureText(),e=0===this.labelAngle?d.height:d.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+(d.height-c.fontSize/2)*Math.cos(Math.PI/180*Math.abs(this.labelAngle)),a<e&&(a=e),this._stripLineLabels[b].effectiveHeight=e)}return(this.title?this._titleTextBlock.measureText().height+2:0)+a+this.tickLength+5};B.setLayoutAndRender=function(a,c,b,d,e){var f,g,h,p=a.chart,k=p.ctx;a.calculateAxisParameters();c&&c.calculateAxisParameters();b&&b.calculateAxisParameters();
var n=c?c.margin:0,m=b?b.margin:0,l=0,q=0,r=0,s,t,u,v,w,z,B=0,A=0,C,D,F;C=D=F=!1;a&&a.title&&(a._titleTextBlock=new M(a.ctx,{text:a.title,horizontalAlign:"center",fontSize:a.titleFontSize,fontFamily:a.titleFontFamily,fontWeight:a.titleFontWeight,fontColor:a.titleFontColor,fontStyle:a.titleFontStyle,textBaseline:"top"}));c&&c.title&&(c._titleTextBlock=new M(c.ctx,{text:c.title,horizontalAlign:"center",fontSize:c.titleFontSize,fontFamily:c.titleFontFamily,fontWeight:c.titleFontWeight,fontColor:c.titleFontColor,
fontStyle:c.titleFontStyle,textBaseline:"top"}));b&&b.title&&(b._titleTextBlock=new M(b.ctx,{text:b.title,horizontalAlign:"center",fontSize:b.titleFontSize,fontFamily:b.titleFontFamily,fontWeight:b.titleFontWeight,fontColor:b.titleFontColor,fontStyle:b.titleFontStyle,textBaseline:"top"}));if("normal"===d){var G=[],E=[],H=[];a&&a.title&&(a._titleTextBlock.maxWidth=a.titleMaxWidth||e.width,a._titleTextBlock.maxHeight=a.titleWrap?0.8*e.height:1.5*a.titleFontSize,a._titleTextBlock.angle=0);c&&c.title&&
(c._titleTextBlock.maxWidth=c.titleMaxWidth||e.height,c._titleTextBlock.maxHeight=c.titleWrap?0.8*e.width:1.5*c.titleFontSize,c._titleTextBlock.angle=-90);b&&b.title&&(b._titleTextBlock.maxWidth=b.titleMaxWidth||e.height,b._titleTextBlock.maxHeight=b.titleWrap?0.8*e.width:1.5*b.titleFontSize,b._titleTextBlock.angle=90);for(;4>l++;){a.lineCoordinates={};t=Math.ceil(c?c.createLabelsAndCalculateWidth():0);E.push(t);f=Math.round(e.x1+t+n);s=Math.ceil(b?b.createLabelsAndCalculateWidth():0);H.push(s);g=
Math.round(e.x2-s-m>a.chart.width-10?a.chart.width-10:e.x2-s-m);!a.labelAutoFit||(x(w)||x(z))||(0<a.labelAngle?z+r>g&&(B+=0<a.labelAngle?z+r-g-s:0):0>a.labelAngle?w-q<f&&w-q<a.viewportMinimum&&(A=f-(n+a.tickLength+t+w-q+a.labelFontSize/2)):0===a.labelAngle&&(z+r>g&&(B=z+r/2-g-s),w-q<f&&w-q<a.viewportMinimum&&(A=f-n-a.tickLength-t-w+q/2)),a.viewportMaximum===a.maximum&&a.viewportMinimum===a.minimum&&0<a.labelAngle&&0<B?g-=B:a.viewportMaximum===a.maximum&&a.viewportMinimum===a.minimum&&0>a.labelAngle&&
0<A?f+=A:a.viewportMaximum===a.maximum&&a.viewportMinimum===a.minimum&&0===a.labelAngle&&(0<A&&(f+=A),0<B&&(g-=B)));a.lineCoordinates.x1=f;a.lineCoordinates.x2=g;a.lineCoordinates.width=Math.abs(g-f);a.title&&(a._titleTextBlock.maxWidth=0<a.titleMaxWidth&&a.titleMaxWidth<a.lineCoordinates.width?a.titleMaxWidth:a.lineCoordinates.width);t=Math.ceil(a.createLabelsAndCalculateHeight());G.push(t);a._labels&&1<a._labels.length&&(d=h=0,h=a._labels[1],d="dateTime"===a.chart.plotInfo.axisXValueType?a._labels[a._labels.length-
2]:a._labels[a._labels.length-1],q=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-d.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),r=d.textBlock.width*Math.cos(Math.PI/180*Math.abs(d.textBlock.angle))+(d.textBlock.height-d.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(d.textBlock.angle)));p.panEnabled?t=p.sessionVariables.axisX.height:p.sessionVariables.axisX.height=t;d=Math.round(e.y2-t-a.margin);h=Math.round(e.y2-a.margin);
a.lineCoordinates.y1=d;a.lineCoordinates.y2=d;a.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d};c&&(f=Math.round(e.x1+c.margin),d=Math.round(10>e.y1?10:e.y1),g=Math.round(a.lineCoordinates.x1),h=Math.round(e.y2-t-a.margin),c.lineCoordinates={x1:g,y1:d,x2:g,y2:h,height:Math.abs(h-d)},c.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d},c.title&&(c._titleTextBlock.maxWidth=0<c.titleMaxWidth&&c.titleMaxWidth<c.lineCoordinates.height?c.titleMaxWidth:c.lineCoordinates.height));b&&(f=Math.round(a.lineCoordinates.x2),
d=Math.round(10>e.y1?10:e.y1),g=Math.round(f+s),h=Math.round(e.y2-t-a.margin),b.lineCoordinates={x1:f,y1:d,x2:f,y2:h,height:Math.abs(h-d)},b.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d},b.title&&(b._titleTextBlock.maxWidth=0<b.titleMaxWidth&&b.titleMaxWidth<b.lineCoordinates.height?b.titleMaxWidth:b.lineCoordinates.height));a.calculateValueToPixelConversionParameters();a._labels&&1<a._labels.length&&(w=(a.logarithmic?Math.log(a._labels[1].position/a.viewportMinimum)/a.conversionParameters.lnLogarithmBase:
a._labels[1].position-a.viewportMinimum)*Math.abs(a.conversionParameters.pixelPerUnit)+a.lineCoordinates.x1,z="dateTime"===a.chart.plotInfo.axisXValueType?(a.logarithmic?Math.log(a._labels[a._labels.length-2].position/a.viewportMinimum)/a.conversionParameters.lnLogarithmBase:a._labels[a._labels.length-2].position-a.viewportMinimum)*Math.abs(a.conversionParameters.pixelPerUnit)+a.lineCoordinates.x1:(a.logarithmic?Math.log(a._labels[a._labels.length-1].position/a.viewportMinimum)/a.conversionParameters.lnLogarithmBase:
a._labels[a._labels.length-1].position-a.viewportMinimum)*Math.abs(a.conversionParameters.pixelPerUnit)+a.lineCoordinates.x1);c&&c.calculateValueToPixelConversionParameters();b&&b.calculateValueToPixelConversionParameters();if(a||c||b){if(!x(G))for(l=0;l<G.length;l++)for(j=l+1;j<G.length;j++)G[l]==G[j]&&(C=!0);if(!x(E))for(l=0;l<E.length;l++)for(j=l+1;j<E.length;j++)E[l]==E[j]&&(D=!0);if(!x(H))for(l=0;l<H.length;l++)for(j=l+1;j<H.length;j++)H[l]==H[j]&&(F=!0)}if(C&&D&&F)break}k.save();k.beginPath();
k.rect(5,a.boundingRect.y1,a.chart.width-10,a.boundingRect.height);k.clip();a.renderLabelsTicksAndTitle();k.restore();c&&c.renderLabelsTicksAndTitle();b&&b.renderLabelsTicksAndTitle()}else{m=[];w=[];z=[];a&&a.title&&(a._titleTextBlock.maxWidth=a.titleMaxWidth||e.height,a._titleTextBlock.maxHeight=a.titleWrap?0.8*e.width:1.5*a.titleFontSize,a._titleTextBlock.angle=-90);c&&c.title&&(c._titleTextBlock.maxWidth=c.titleMaxWidth||e.width,c._titleTextBlock.maxHeight=c.titleWrap?0.8*e.height:1.5*c.titleFontSize,
c._titleTextBlock.angle=0);b&&b.title&&(b._titleTextBlock.maxWidth=c.titleMaxWidth||e.width,b._titleTextBlock.maxHeight=b.titleWrap?0.8*e.height:1.5*b.titleFontSize,b._titleTextBlock.angle=0);for(;4>l++;){B=Math.ceil(a.createLabelsAndCalculateWidth());m.push(B);c&&(c.lineCoordinates={},f=Math.round(e.x1+B+a.margin),g=Math.round(e.x2>c.chart.width-10?c.chart.width-10:e.x2),c.labelAutoFit&&!x(s)&&(f=0>c.labelAngle?Math.max(f,s):0===c.labelAngle?Math.max(f,s/2):f,g=0<c.labelAngle?g-t:0===c.labelAngle?
g-t/2:g),c.lineCoordinates.x1=f,c.lineCoordinates.x2=g,c.lineCoordinates.width=Math.abs(g-f),c.title&&(c._titleTextBlock.maxWidth=0<c.titleMaxWidth&&c.titleMaxWidth<c.lineCoordinates.width?c.titleMaxWidth:c.lineCoordinates.width));b&&(b.lineCoordinates={},f=Math.round(e.x1+B+a.margin),g=Math.round(e.x2>b.chart.width-10?b.chart.width-10:e.x2),c&&c.labelAutoFit&&!x(u)&&(f=0<b.labelAngle?Math.max(f,u):0===b.labelAngle?Math.max(f,u/2):f,g-=v/2),b.lineCoordinates.x1=f,b.lineCoordinates.x2=g,b.lineCoordinates.width=
Math.abs(g-f),b.title&&(b._titleTextBlock.maxWidth=0<b.titleMaxWidth&&b.titleMaxWidth<b.lineCoordinates.width?b.titleMaxWidth:b.lineCoordinates.width));A=Math.ceil(c?c.createLabelsAndCalculateHeight():0);q=Math.ceil(b?b.createLabelsAndCalculateHeight():0);w.push(A);z.push(q);c&&0<c._labels.length&&(h=c._labels[0],d=c._labels[c._labels.length-1],s=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-d.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),
t=d.textBlock.width*Math.cos(Math.PI/180*Math.abs(d.textBlock.angle))+(d.textBlock.height-d.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(d.textBlock.angle)));b&&0<b._labels.length&&(h=b._labels[0],d=b._labels[b._labels.length-1],u=h.textBlock.width*Math.cos(Math.PI/180*Math.abs(h.textBlock.angle))+(h.textBlock.height-d.textBlock.fontSize/2)*Math.sin(Math.PI/180*Math.abs(h.textBlock.angle)),v=d.textBlock.width*Math.cos(Math.PI/180*Math.abs(d.textBlock.angle))+(d.textBlock.height-d.textBlock.fontSize/
2)*Math.sin(Math.PI/180*Math.abs(d.textBlock.angle)));p.panEnabled?A=p.sessionVariables.axisY.height:p.sessionVariables.axisY.height=A;c&&(d=Math.round(e.y2-A-c.margin),h=Math.round(e.y2-n>c.chart.height-10?c.chart.height-10:e.y2-n),c.lineCoordinates.y1=d,c.lineCoordinates.y2=d,c.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:A},c.title&&(c._titleTextBlock.maxWidth=0<c.titleMaxWidth&&c.titleMaxWidth<c.lineCoordinates.width?c.titleMaxWidth:c.lineCoordinates.width));b&&(d=Math.round(e.y1+b.margin),
h=e.y1+b.margin+q,b.lineCoordinates.y1=h,b.lineCoordinates.y2=h,b.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:q},b.title&&(b._titleTextBlock.maxWidth=0<b.titleMaxWidth&&b.titleMaxWidth<b.lineCoordinates.width?b.titleMaxWidth:b.lineCoordinates.width));f=Math.round(e.x1+a.margin);d=Math.round(b?b.lineCoordinates.y2:10>e.y1?10:e.y1);g=Math.round(e.x1+B+a.margin);h=Math.round(c?c.lineCoordinates.y1:e.y2-n>a.chart.height-10?a.chart.height-10:e.y2-n);c&&c.labelAutoFit&&(g=0>c.labelAngle?Math.max(g,
s):0===c.labelAngle?Math.max(g,s/2):g,f=0>c.labelAngle||0===c.labelAngle?g-B:f);b&&b.labelAutoFit&&(g=b.lineCoordinates.x1,f=g-B);a.lineCoordinates={x1:g,y1:d,x2:g,y2:h,height:Math.abs(h-d)};a.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d};a.title&&(a._titleTextBlock.maxWidth=0<a.titleMaxWidth&&a.titleMaxWidth<a.lineCoordinates.height?a.titleMaxWidth:a.lineCoordinates.height);a.calculateValueToPixelConversionParameters();c&&c.calculateValueToPixelConversionParameters();b&&b.calculateValueToPixelConversionParameters();
if(a||c||b){if(!x(G))for(l=0;l<G.length;l++)for(j=l+1;j<G.length;j++)G[l]==G[j]&&(C=!0);if(!x(E))for(l=0;l<E.length;l++)for(j=l+1;j<E.length;j++)E[l]==E[j]&&(D=!0);if(!x(H))for(l=0;l<H.length;l++)for(j=l+1;j<H.length;j++)H[l]==H[j]&&(F=!0)}if(C&&D&&F)break}c&&c.renderLabelsTicksAndTitle();b&&b.renderLabelsTicksAndTitle();a.renderLabelsTicksAndTitle()}p.preparePlotArea();e=a.chart.plotArea;k.save();k.beginPath();k.rect(e.x1,e.y1,Math.abs(e.x2-e.x1),Math.abs(e.y2-e.y1));k.clip();a.renderStripLinesOfThicknessType("value");
c&&c.renderStripLinesOfThicknessType("value");b&&b.renderStripLinesOfThicknessType("value");a.renderInterlacedColors();c&&c.renderInterlacedColors();b&&b.renderInterlacedColors();k.restore();a.renderGrid();c&&c.renderGrid();b&&b.renderGrid();a.renderAxisLine();c&&c.renderAxisLine();b&&b.renderAxisLine();a.renderStripLinesOfThicknessType("pixel");c&&c.renderStripLinesOfThicknessType("pixel");b&&b.renderStripLinesOfThicknessType("pixel")};B.prototype.renderLabelsTicksAndTitle=function(){var a=!1,c=
0,b=0,d=1,e=0;0!==this.labelAngle&&360!==this.labelAngle&&(d=1.2);if("undefined"===typeof this._options.interval){if("bottom"===this._position||"top"===this._position)if(this.logarithmic&&!this.equidistantInterval&&this.labelAutoFit){for(var c=[],d=0!==this.labelAngle&&360!==this.labelAngle?1:1.2,f,g=this.viewportMaximum,h=this.lineCoordinates.width/Math.log(this.range),p=this._labels.length-1;0<=p;p--){n=this._labels[p];if(n.position<this.viewportMinimum)break;n.position>this.viewportMaximum||!(p===
this._labels.length-1||f<Math.log(g/n.position)*h/d)||(c.push(n),g=n.position,f=n.textBlock.width*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+n.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=c}else{for(p=0;p<this._labels.length;p++)n=this._labels[p],n.position<this.viewportMinimum||(n=n.textBlock.width*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+n.textBlock.height*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),c+=n);c>this.lineCoordinates.width*d&&this.labelAutoFit&&
(a=!0)}if("left"===this._position||"right"===this._position)if(this.logarithmic&&!this.equidistantInterval&&this.labelAutoFit){for(var c=[],k,g=this.viewportMaximum,h=this.lineCoordinates.height/Math.log(this.range),p=this._labels.length-1;0<=p;p--){n=this._labels[p];if(n.position<this.viewportMinimum)break;n.position>this.viewportMaximum||!(p===this._labels.length-1||k<Math.log(g/n.position)*h)||(c.push(n),g=n.position,k=n.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+n.textBlock.width*
Math.abs(Math.sin(Math.PI/180*this.labelAngle)))}this._labels=c}else{for(p=0;p<this._labels.length;p++)n=this._labels[p],n.position<this.viewportMinimum||(n=n.textBlock.height*Math.abs(Math.cos(Math.PI/180*this.labelAngle))+n.textBlock.width*Math.abs(Math.sin(Math.PI/180*this.labelAngle)),b+=n);b>this.lineCoordinates.height*d&&this.labelAutoFit&&(a=!0)}}if("bottom"===this._position){for(var n,p=0;p<this._labels.length;p++)n=this._labels[p],n.position<this.viewportMinimum||n.position>this.viewportMaximum||
(b=this.getPixelCoordinatesOnAxis(n.position),a&&0!==e++%2&&this.labelAutoFit||(this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,d=1===this.ctx.lineWidth%2?(b.x<<0)+0.5:b.x<<0,this.ctx.beginPath(),this.ctx.moveTo(d,b.y<<0),this.ctx.lineTo(d,b.y+this.tickLength<<0),this.ctx.stroke()),0===n.textBlock.angle?(b.x-=n.textBlock.width/2,b.y+=this.tickLength+n.textBlock.fontSize/2):(b.x-=0>this.labelAngle?n.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):
0,b.y+=this.tickLength+Math.abs(0>this.labelAngle?n.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)-5:5)),n.textBlock.x=b.x,n.textBlock.y=b.y,n.textBlock.render(!0)));this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.boundingRect.y2-this._titleTextBlock.height-3,this._titleTextBlock.render(!0))}else if("top"===this._position){for(p=0;p<this._labels.length;p++)n=
this._labels[p],n.position<this.viewportMinimum||n.position>this.viewportMaximum||(b=this.getPixelCoordinatesOnAxis(n.position),a&&0!==e++%2&&this.labelAutoFit||(this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,d=1===this.ctx.lineWidth%2?(b.x<<0)+0.5:b.x<<0,this.ctx.beginPath(),this.ctx.moveTo(d,b.y<<0),this.ctx.lineTo(d,b.y-this.tickLength<<0),this.ctx.stroke()),0===n.textBlock.angle?(b.x-=n.textBlock.width/2,b.y-=this.tickLength+n.textBlock.height):
(b.x+=(n.textBlock.height-this.tickLength-this.labelFontSize/2)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?n.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),b.y-=this.tickLength+(n.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+(0<this.labelAngle?n.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0))),n.textBlock.x=b.x,n.textBlock.y=b.y,n.textBlock.render(!0)));this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/
2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.boundingRect.y1+1,this._titleTextBlock.render(!0))}else if("left"===this._position){for(p=0;p<this._labels.length;p++)n=this._labels[p],n.position<this.viewportMinimum||n.position>this.viewportMaximum||(b=this.getPixelCoordinatesOnAxis(n.position),a&&0!==e++%2&&this.labelAutoFit||(this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,d=1===this.ctx.lineWidth%2?(b.y<<0)+0.5:b.y<<0,this.ctx.beginPath(),
this.ctx.moveTo(b.x<<0,d),this.ctx.lineTo(b.x-this.tickLength<<0,d),this.ctx.stroke()),0===this.labelAngle?(n.textBlock.y=b.y,n.textBlock.x=b.x-n.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5):(n.textBlock.y=b.y-n.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),n.textBlock.x=0<this.labelAngle?b.x-n.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:b.x-n.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(n.textBlock.height-n.textBlock.fontSize/
2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength),n.textBlock.render(!0)));this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.boundingRect.x1+1,this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}else if("right"===this._position){for(p=0;p<this._labels.length;p++)n=this._labels[p],n.position<this.viewportMinimum||n.position>this.viewportMaximum||(b=this.getPixelCoordinatesOnAxis(n.position),
a&&0!==e++%2&&this.labelAutoFit||(this.tickThickness&&(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor,d=1===this.ctx.lineWidth%2?(b.y<<0)+0.5:b.y<<0,this.ctx.beginPath(),this.ctx.moveTo(b.x<<0,d),this.ctx.lineTo(b.x+this.tickLength<<0,d),this.ctx.stroke()),0===this.labelAngle?(n.textBlock.y=b.y,n.textBlock.x=b.x+this.tickLength+5):(n.textBlock.y=0>this.labelAngle?b.y:b.y-(n.textBlock.height-n.textBlock.fontSize/2-5)*Math.cos(Math.PI/180*this.labelAngle),n.textBlock.x=0<
this.labelAngle?b.x+(n.textBlock.height-n.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:b.x+this.tickLength+5),n.textBlock.render(!0)));this.title&&(this._titleTextBlock.measureText(),this._titleTextBlock.x=this.boundingRect.x2-1,this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}};B.prototype.renderInterlacedColors=function(){var a=this.chart.plotArea.ctx,c,b,d=this.chart.plotArea,
e=0;c=!0;if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e++)c?(c=this.getPixelCoordinatesOnAxis(this._labels[e].position),b=e+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(Math.min(b.x,c.x),d.y1,Math.abs(b.x-c.x),Math.abs(d.y1-d.y2)),c=!1):c=!0;else if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(a.fillStyle=
this.interlacedColor,e=0;e<this._labels.length;e++)c?(b=this.getPixelCoordinatesOnAxis(this._labels[e].position),c=e+1>this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(d.x1,Math.min(b.y,c.y),Math.abs(d.x1-d.x2),Math.abs(c.y-b.y)),c=!1):c=!0;a.beginPath()};B.prototype.renderStripLinesOfThicknessType=function(a){if(this.stripLines&&0<this.stripLines.length&&a){for(var c=this,b,d=0,e=0,f=!1,g=!1,h=[],p=[],
g=!1,d=0;d<this.stripLines.length;d++){var k=this.stripLines[d];k._thicknessType===a&&("pixel"===a&&(k.value<this.viewportMinimum||k.value>this.viewportMaximum)||h.push(k))}for(d=0;d<this._stripLineLabels.length;d++)if(k=this.stripLines[d],b=this._stripLineLabels[d],!(b.position<this.viewportMinimum||b.position>this.viewportMaximum)){a=this.getPixelCoordinatesOnAxis(b.position);if("outside"===b.stripLine.labelPlacement)if(k&&(this.ctx.strokeStyle=k.color,"pixel"===k._thicknessType&&(this.ctx.lineWidth=
k.thickness)),"bottom"===this._position){var n=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0;this.ctx.beginPath();this.ctx.moveTo(n,a.y<<0);this.ctx.lineTo(n,a.y+this.tickLength<<0);this.ctx.stroke();0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y+=this.tickLength+b.textBlock.fontSize/2):(a.x-=0>this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,a.y+=this.tickLength+Math.abs(0>this.labelAngle?b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)-5:5))}else"top"===this._position?
(n=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,this.ctx.beginPath(),this.ctx.moveTo(n,a.y<<0),this.ctx.lineTo(n,a.y-this.tickLength<<0),this.ctx.stroke(),0===this.labelAngle?(a.x-=b.textBlock.width/2,a.y-=this.tickLength+b.textBlock.height):(a.x+=(b.textBlock.height-this.tickLength-this.labelFontSize/2)*Math.sin(Math.PI/180*this.labelAngle)-(0<this.labelAngle?b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0),a.y-=this.tickLength+(b.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+
(0<this.labelAngle?b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)))):"left"===this._position?(n=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,n),this.ctx.lineTo(a.x-this.tickLength<<0,n),this.ctx.stroke(),0===this.labelAngle?a.x=a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5:(a.y-=b.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),a.x=0<this.labelAngle?a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-
this.tickLength-5:a.x-b.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)-this.tickLength)):"right"===this._position&&(n=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,this.ctx.beginPath(),this.ctx.moveTo(a.x<<0,n),this.ctx.lineTo(a.x+this.tickLength<<0,n),this.ctx.stroke(),0===this.labelAngle?a.x=a.x+this.tickLength+5:(a.y=0>this.labelAngle?a.y:a.y-(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.cos(Math.PI/
180*this.labelAngle),a.x=0<this.labelAngle?a.x+(b.textBlock.height-b.textBlock.fontSize/2-5)*Math.sin(Math.PI/180*this.labelAngle)+this.tickLength:a.x+this.tickLength+5));else b.textBlock.angle=-90,"bottom"===this._position?(b.textBlock.maxWidth=this._options.stripLines[d].labelMaxWidth?this._options.stripLines[d].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?x(k.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/2:a.x-=b.textBlock.height/
2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,x(k.startValue)?a.x+=b.textBlock.height-b.textBlock.fontSize/2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y1+b.textBlock.width+3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y2-b.textBlock.width-3:"center"===b.stripLine.labelAlign?
(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y1+3):"top"===this._position?(b.textBlock.maxWidth=this._options.stripLines[d].labelMaxWidth?this._options.stripLines[d].labelMaxWidth:this.chart.plotArea.height-3,b.textBlock.measureText(),a.x-b.textBlock.height>this.chart.plotArea.x1?x(k.startValue)?a.x-=b.textBlock.height-b.textBlock.fontSize/2:a.x-=b.textBlock.height/2-b.textBlock.fontSize/2+3:(b.textBlock.angle=90,x(k.startValue)?a.x+=b.textBlock.height-b.textBlock.fontSize/
2:a.x+=b.textBlock.height/2-b.textBlock.fontSize/2+3),a.y=-90===b.textBlock.angle?"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+b.textBlock.width+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1+b.textBlock.width)/2:this.chart.plotArea.y2-3:"near"===b.stripLine.labelAlign?this.chart.plotArea.y1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.y2+this.chart.plotArea.y1-b.textBlock.width)/2:this.chart.plotArea.y2-b.textBlock.width-3):"left"===this._position?
(b.textBlock.maxWidth=this._options.stripLines[d].labelMaxWidth?this._options.stripLines[d].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-b.textBlock.height>this.chart.plotArea.y1?x(k.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize+3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:x(k.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/
2-b.textBlock.fontSize+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x1+3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x2-b.textBlock.width-3):"right"===this._position&&(b.textBlock.maxWidth=this._options.stripLines[d].labelMaxWidth?this._options.stripLines[d].labelMaxWidth:this.chart.plotArea.width-3,b.textBlock.angle=0,b.textBlock.measureText(),a.y-+b.textBlock.height>this.chart.plotArea.y1?x(k.startValue)?
a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2-3:a.y-b.textBlock.height<this.chart.plotArea.y2?a.y+=b.textBlock.fontSize/2+3:x(k.startValue)?a.y-=b.textBlock.height-b.textBlock.fontSize/2:a.y-=b.textBlock.height/2-b.textBlock.fontSize/2+3,a.x="near"===b.stripLine.labelAlign?this.chart.plotArea.x2-b.textBlock.width-3:"center"===b.stripLine.labelAlign?(this.chart.plotArea.x2+this.chart.plotArea.x1)/2-b.textBlock.width/2:this.chart.plotArea.x1+3);b.textBlock.x=
a.x;b.textBlock.y=a.y;p.push(b)}if(!g){g=!1;this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();for(d=0;d<h.length;d++)k=h[d],k.showOnTop?f||(f=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){this.ctx.save();this.ctx.beginPath();this.ctx.rect(this.chart.plotArea.x1,this.chart.plotArea.y1,this.chart.plotArea.width,this.chart.plotArea.height);this.ctx.clip();for(e=
0;e<h.length;e++)k=h[e],k.showOnTop&&k.render();this.ctx.restore()},k)):k.render();for(d=0;d<p.length;d++)b=p[d],b.stripLine.showOnTop?g||(g=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(e=0;e<p.length;e++)b=p[e],"inside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&(c.ctx.save(),c.ctx.beginPath(),c.ctx.rect(c.chart.plotArea.x1,c.chart.plotArea.y1,c.chart.plotArea.width,c.chart.plotArea.height),c.ctx.clip(),b.textBlock.render(!0),c.ctx.restore())},b.textBlock)):
"inside"===b.stripLine.labelPlacement&&b.textBlock.render(!0);this.ctx.restore();g=!0}if(g)for(g=!1,d=0;d<p.length;d++)b=p[d],b.stripLine.showOnTop?g||(g=!0,this.chart.addEventListener("dataAnimationIterationEnd",function(){for(e=0;e<p.length;e++)b=p[e],"outside"===b.stripLine.labelPlacement&&b.stripLine.showOnTop&&b.textBlock.render(!0)},b.textBlock)):"outside"===b.stripLine.labelPlacement&&b.textBlock.render(!0)}};B.prototype.renderGrid=function(){if(this.gridThickness&&0<this.gridThickness){var a=
this.chart.ctx;a.save();var c,b=this.chart.plotArea;a.lineWidth=this.gridThickness;a.strokeStyle=this.gridColor;a.setLineDash&&a.setLineDash(D(this.gridDashType,this.gridThickness));if("bottom"===this._position||"top"===this._position)for(d=0;d<this._labels.length;d++)this._labels[d].position<this.viewportMinimum||this._labels[d].position>this.viewportMaximum||(a.beginPath(),c=this.getPixelCoordinatesOnAxis(this._labels[d].position),c=1===a.lineWidth%2?(c.x<<0)+0.5:c.x<<0,a.moveTo(c,b.y1<<0),a.lineTo(c,
b.y2<<0),a.stroke());else if("left"===this._position||"right"===this._position)for(var d=0;d<this._labels.length;d++)this._labels[d].position<this.viewportMinimum||this._labels[d].position>this.viewportMaximum||(a.beginPath(),c=this.getPixelCoordinatesOnAxis(this._labels[d].position),c=1===a.lineWidth%2?(c.y<<0)+0.5:c.y<<0,a.moveTo(b.x1<<0,c),a.lineTo(b.x2<<0,c),a.stroke());a.restore()}};B.prototype.renderAxisLine=function(){var a=this.chart.ctx;a.save();if("bottom"===this._position||"top"===this._position){if(this.lineThickness){a.lineWidth=
this.lineThickness;a.strokeStyle=this.lineColor?this.lineColor:"black";a.setLineDash&&a.setLineDash(D(this.lineDashType,this.lineThickness));var c=1===this.lineThickness%2?(this.lineCoordinates.y1<<0)+0.5:this.lineCoordinates.y1<<0;a.beginPath();a.moveTo(this.lineCoordinates.x1,c);a.lineTo(this.lineCoordinates.x2,c);a.stroke()}}else"left"!==this._position&&"right"!==this._position||!this.lineThickness||(a.lineWidth=this.lineThickness,a.strokeStyle=this.lineColor,a.setLineDash&&a.setLineDash(D(this.lineDashType,
this.lineThickness)),c=1===this.lineThickness%2?(this.lineCoordinates.x1<<0)+0.5:this.lineCoordinates.x1<<0,a.beginPath(),a.moveTo(c,this.lineCoordinates.y1),a.lineTo(c,this.lineCoordinates.y2),a.stroke());a.restore()};B.prototype.getPixelCoordinatesOnAxis=function(a){var c={};if("bottom"===this._position||"top"===this._position)c.x=this.convertValueToPixel(a),c.y=this.lineCoordinates.y1;if("left"===this._position||"right"===this._position)c.y=this.convertValueToPixel(a),c.x=this.lineCoordinates.x2;
return c};B.prototype.convertPixelToValue=function(a){if(!a)return null;var c=0;a="left"===this._position||"right"===this._position?a.y:a.x;return c=this.logarithmic?Math.pow(this.logarithmBase,(a-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit)*this.viewportMinimum:this.conversionParameters.minimum+(a-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit};B.prototype.setViewPortRange=function(a,c){this.sessionVariables.newViewportMinimum=this.viewportMinimum=
Math.min(a,c);this.sessionVariables.newViewportMaximum=this.viewportMaximum=Math.max(a,c)};B.prototype.getXValueAt=function(a){if(!a)return null;var c=null;"left"===this._position?c=this.convertPixelToValue(a.y):"bottom"===this._position&&(c=this.convertPixelToValue(a.x));return c};B.prototype.calculateValueToPixelConversionParameters=function(a){a={pixelPerUnit:null,minimum:null,reference:null};var c=this.lineCoordinates.width,b=this.lineCoordinates.height;a.minimum=this.viewportMinimum;if("bottom"===
this._position||"top"===this._position)this.logarithmic?(a.lnLogarithmBase=Math.log(this.logarithmBase),a.pixelPerUnit=(this.reversed?-1:1)*c*a.lnLogarithmBase/Math.log(Math.abs(this.range))):a.pixelPerUnit=(this.reversed?-1:1)*c/Math.abs(this.range),a.reference=this.reversed?this.lineCoordinates.x2:this.lineCoordinates.x1;if("left"===this._position||"right"===this._position)this.logarithmic?(a.lnLogarithmBase=Math.log(this.logarithmBase),a.pixelPerUnit=(this.reversed?1:-1)*b*a.lnLogarithmBase/Math.log(Math.abs(this.range))):
a.pixelPerUnit=(this.reversed?1:-1)*b/Math.abs(this.range),a.reference=this.reversed?this.lineCoordinates.y1:this.lineCoordinates.y2;this.conversionParameters=a};B.prototype.convertValueToPixel=function(a){return this.logarithmic?this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*Math.log(a/this.conversionParameters.minimum)/this.conversionParameters.lnLogarithmBase+0.5<<0:this.conversionParameters.reference+this.conversionParameters.pixelPerUnit*(a-this.conversionParameters.minimum)+
0.5<<0};B.prototype.calculateAxisParameters=function(){if(this.logarithmic)this.calculateLogarithamicAxisParameters();else{var a=this.chart.layoutManager.getFreeSpace(),c=!1;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?"xySwapped"===this.chart.plotInfo.axisPlacement?62:70:"xySwapped"===this.chart.plotInfo.axisPlacement?50:40,b=4;"axisX"===this.type&&(b=100>this.maxWidth?3:
300>this.maxWidth?6:600>this.maxWidth?8:6);var a=Math.max(b,Math.floor(this.maxWidth/a)),d,e,f,b=0;if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;"axisX"===this.type?(d=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,0===e-d&&(b="undefined"===typeof this._options.interval?
0.4:this._options.interval,e+=b,d-=b),Infinity!==this.dataInfo.minDiff?f=this.dataInfo.minDiff:1<e-d?f=0.5*Math.abs(e-d):(f=1,"dateTime"===this.chart.plotInfo.axisXValueType&&(c=!0))):"axisY"===this.type&&(d=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,isFinite(d)||isFinite(e)?isFinite(d)?isFinite(e)||(e=d):d=e:(e="undefined"===typeof this._options.interval?-Infinity:this._options.interval,d=
0),0===d&&0===e?(e+=9,d=0):0===e-d?(b=Math.min(Math.abs(0.01*Math.abs(e)),5),e+=b,d-=b):d>e?(b=Math.min(Math.abs(0.01*Math.abs(e-d)),5),0<=e?d=e-b:e=d+b):(b=Math.min(Math.abs(0.01*Math.abs(e-d)),0.05),0!==e&&(e+=b),0!==d&&(d-=b)),f=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<e-d?0.5*Math.abs(e-d):1,this.includeZero&&(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&0<d&&(d=0),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&0>e&&(e=0));b=(isNaN(this.viewportMaximum)||
null===this.viewportMaximum?e:this.viewportMaximum)-(isNaN(this.viewportMinimum)||null===this.viewportMinimum?d:this.viewportMinimum);if("axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType){this.intervalType||(b/1<=a?(this.interval=1,this.intervalType="millisecond"):b/2<=a?(this.interval=2,this.intervalType="millisecond"):b/5<=a?(this.interval=5,this.intervalType="millisecond"):b/10<=a?(this.interval=10,this.intervalType="millisecond"):b/20<=a?(this.interval=20,this.intervalType=
"millisecond"):b/50<=a?(this.interval=50,this.intervalType="millisecond"):b/100<=a?(this.interval=100,this.intervalType="millisecond"):b/200<=a?(this.interval=200,this.intervalType="millisecond"):b/250<=a?(this.interval=250,this.intervalType="millisecond"):b/300<=a?(this.interval=300,this.intervalType="millisecond"):b/400<=a?(this.interval=400,this.intervalType="millisecond"):b/500<=a?(this.interval=500,this.intervalType="millisecond"):b/(1*E.secondDuration)<=a?(this.interval=1,this.intervalType=
"second"):b/(2*E.secondDuration)<=a?(this.interval=2,this.intervalType="second"):b/(5*E.secondDuration)<=a?(this.interval=5,this.intervalType="second"):b/(10*E.secondDuration)<=a?(this.interval=10,this.intervalType="second"):b/(15*E.secondDuration)<=a?(this.interval=15,this.intervalType="second"):b/(20*E.secondDuration)<=a?(this.interval=20,this.intervalType="second"):b/(30*E.secondDuration)<=a?(this.interval=30,this.intervalType="second"):b/(1*E.minuteDuration)<=a?(this.interval=1,this.intervalType=
"minute"):b/(2*E.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):b/(5*E.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):b/(10*E.minuteDuration)<=a?(this.interval=10,this.intervalType="minute"):b/(15*E.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):b/(20*E.minuteDuration)<=a?(this.interval=20,this.intervalType="minute"):b/(30*E.minuteDuration)<=a?(this.interval=30,this.intervalType="minute"):b/(1*E.hourDuration)<=a?(this.interval=1,this.intervalType=
"hour"):b/(2*E.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):b/(3*E.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):b/(6*E.hourDuration)<=a?(this.interval=6,this.intervalType="hour"):b/(1*E.dayDuration)<=a?(this.interval=1,this.intervalType="day"):b/(2*E.dayDuration)<=a?(this.interval=2,this.intervalType="day"):b/(4*E.dayDuration)<=a?(this.interval=4,this.intervalType="day"):b/(1*E.weekDuration)<=a?(this.interval=1,this.intervalType="week"):b/(2*E.weekDuration)<=a?(this.interval=
2,this.intervalType="week"):b/(3*E.weekDuration)<=a?(this.interval=3,this.intervalType="week"):b/(1*E.monthDuration)<=a?(this.interval=1,this.intervalType="month"):b/(2*E.monthDuration)<=a?(this.interval=2,this.intervalType="month"):b/(3*E.monthDuration)<=a?(this.interval=3,this.intervalType="month"):b/(6*E.monthDuration)<=a?(this.interval=6,this.intervalType="month"):(this.interval=b/(1*E.yearDuration)<=a?1:b/(2*E.yearDuration)<=a?2:b/(4*E.yearDuration)<=a?4:Math.floor(B.getNiceNumber(b/(a-1),!0)/
E.yearDuration),this.intervalType="year"));if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=d-f/2;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=e+f/2;c?this.autoValueFormatString="MMM DD YYYY HH:mm":"year"===this.intervalType?this.autoValueFormatString="YYYY":"month"===this.intervalType?this.autoValueFormatString="MMM YYYY":"week"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"day"===this.intervalType?this.autoValueFormatString=
"MMM DD YYYY":"hour"===this.intervalType?this.autoValueFormatString="hh:mm TT":"minute"===this.intervalType?this.autoValueFormatString="hh:mm TT":"second"===this.intervalType?this.autoValueFormatString="hh:mm:ss TT":"millisecond"===this.intervalType&&(this.autoValueFormatString="fff'ms'");this.valueFormatString||(this.valueFormatString=this.autoValueFormatString)}else{this.intervalType="number";b=B.getNiceNumber(b,!1);this.interval=this._options&&0<this._options.interval?this._options.interval:B.getNiceNumber(b/
(a-1),!0);if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?d-f/2:Math.floor(d/this.interval)*this.interval;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?e+f/2:Math.ceil(e/this.interval)*this.interval;0===this.viewportMaximum&&0===this.viewportMinimum&&(0===this._options.viewportMinimum?this.viewportMaximum+=10:0===this._options.viewportMaximum&&(this.viewportMinimum-=10),this._options&&"undefined"===
typeof this._options.interval&&(this.interval=B.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)))}if(null===this.minimum||null===this.maximum)if("axisX"===this.type?(d=null!==this.minimum?this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,0===e-d&&(b="undefined"===typeof this._options.interval?0.4:this._options.interval,e+=b,d-=b),f=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<e-d?0.5*Math.abs(e-d):1):"axisY"===this.type&&(d=null!==
this.minimum?this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(d)||isFinite(e)?0===d&&0===e?(e+=9,d=0):0===e-d?(b=Math.min(Math.abs(0.01*Math.abs(e)),5),e+=b,d-=b):d>e?(b=Math.min(Math.abs(0.01*Math.abs(e-d)),5),0<=e?d=e-b:e=d+b):(b=Math.min(Math.abs(0.01*Math.abs(e-d)),0.05),0!==e&&(e+=b),0!==d&&(d-=b)):(e="undefined"===typeof this._options.interval?-Infinity:this._options.interval,d=0),f=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<e-d?0.5*
Math.abs(e-d):1,this.includeZero&&(null===this.minimum||isNaN(this.minimum))&&0<d&&(d=0),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&0>e&&(e=0)),"axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType){if(null===this.minimum||isNaN(this.minimum))this.minimum=d-f/2;if(null===this.maximum||isNaN(this.maximum))this.maximum=e+f/2}else this.intervalType="number",null===this.minimum&&(this.minimum="axisX"===this.type?d-f/2:Math.floor(d/this.interval)*this.interval,this.minimum=
Math.min(this.minimum,null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?Infinity:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum="axisX"===this.type?e+f/2:Math.ceil(e/this.interval)*this.interval,this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?-Infinity:this.sessionVariables.viewportMaximum)),0===this.maximum&&0===this.minimum&&(0===this._options.minimum?
this.maximum+=10:0===this._options.maximum&&(this.minimum-=10));this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum);this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum);this.range=this.viewportMaximum-this.viewportMinimum;this.intervalStartPosition="axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType?this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval):Math.floor((this.viewportMinimum+0.2*this.interval)/this.interval)*this.interval;
if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",1>this.range)){c=Math.floor(Math.abs(Math.log(this.range)/Math.LN10))+2;if(isNaN(c)||!isFinite(c))c=2;if(2<c)for(d=0;d<c-2;d++)this.valueFormatString+="#"}}};B.prototype.calculateLogarithamicAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace(),c=Math.log(this.logarithmBase),b;"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);
var a="axisX"===this.type?500>this.maxWidth?7:Math.max(7,Math.floor(this.maxWidth/100)):Math.max(Math.floor(this.maxWidth/50),3),d,e,f,g;g=1;if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;"axisX"===this.type?(d=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,
1===e/d&&(g=Math.pow(this.logarithmBase,"undefined"===typeof this._options.interval?0.4:this._options.interval),e*=g,d/=g),f=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/d>this.logarithmBase?e/d*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(d=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,e=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,0>=d&&!isFinite(e)?(e="undefined"===typeof this._options.interval?
0:this._options.interval,d=1):0>=d?d=e:isFinite(e)||(e=d),1===d&&1===e?(e*=this.logarithmBase-1/this.logarithmBase,d=1):1===e/d?(g=Math.min(e*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),e*=g,d/=g):d>e?(g=Math.min(d/e*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,5)),1<=e?d=e/g:e=d*g):(g=Math.min(e/d*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,0.04)),1!==e&&(e*=g),1!==d&&(d/=g)),f=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/d>this.logarithmBase?
e/d*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&1<d&&(d=1),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&1>e&&(e=1));g=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?e:this.viewportMaximum)/(isNaN(this.viewportMinimum)||null===this.viewportMinimum?d:this.viewportMinimum);linearRange=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?e:this.viewportMaximum)-(isNaN(this.viewportMinimum)||
null===this.viewportMinimum?d:this.viewportMinimum);this.intervalType="number";g=Math.pow(this.logarithmBase,B.getNiceNumber(Math.abs(Math.log(g)/c),!1));this._options&&0<this._options.interval?this.interval=this._options.interval:(this.interval=B.getNiceExponent(Math.log(g)/c/(a-1),!0),b=B.getNiceNumber(linearRange/(a-1),!0));if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?d/Math.sqrt(f):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(d)/
c/this.interval));if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?e*Math.sqrt(f):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(e)/c/this.interval));1===this.viewportMaximum&&1===this.viewportMinimum&&(1===this._options.viewportMinimum?this.viewportMaximum*=this.logarithmBase-1/this.logarithmBase:1===this._options.viewportMaximum&&(this.viewportMinimum/=this.logarithmBase-1/this.logarithmBase),this._options&&"undefined"===typeof this._options.interval&&
(this.interval=B.getNiceExponent(Math.ceil(Math.log(g)/c)/(a-1)),b=B.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)));if(null===this.minimum||null===this.maximum)"axisX"===this.type?(d=null!==this.minimum?this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,1===e/d&&(g=Math.pow(this.logarithmBase,"undefined"===typeof this._options.interval?0.4:this._options.interval),e*=g,d/=g),f=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/d>this.logarithmBase?
e/d*Math.pow(this.logarithmBase,0.5):this.logarithmBase):"axisY"===this.type&&(d=null!==this.minimum?this.minimum:this.dataInfo.min,e=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(d)||isFinite(e)?1===d&&1===e?(e*=this.logarithmBase,d/=this.logarithmBase):1===e/d?(g=Math.pow(this.logarithmBase,this.interval),e*=g,d/=g):d>e?(g=Math.min(0.01*(d/e),5),1<=e?d=e/g:e=d*g):(g=Math.min(e/d*Math.pow(this.logarithmBase,0.01),Math.pow(this.logarithmBase,0.04)),1!==e&&(e*=g),1!==d&&(d/=g)):(e="undefined"===
typeof this._options.interval?0:this._options.interval,d=1),f=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:e/d>this.logarithmBase?e/d*Math.pow(this.logarithmBase,0.5):this.logarithmBase,this.includeZero&&(null===this.minimum||isNaN(this.minimum))&&1<d&&(d=1),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&1>e&&(e=1)),this.intervalType="number",null===this.minimum&&(this.minimum="axisX"===this.type?d/Math.sqrt(f):Math.pow(this.logarithmBase,this.interval*Math.floor(Math.log(d)/
c/this.interval)),this.minimum=Math.min(this.minimum,null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?"undefined"===typeof this.sessionVariables.newViewportMinimum?Infinity:this.sessionVariables.newViewportMinimum:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum="axisX"===this.type?e*Math.sqrt(f):Math.pow(this.logarithmBase,this.interval*Math.ceil(Math.log(e)/c/this.interval)),this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||
isNaN(this.sessionVariables.viewportMaximum)?"undefined"===typeof this.sessionVariables.newViewportMaximum?0:this.sessionVariables.newViewportMaximum:this.sessionVariables.viewportMaximum)),1===this.maximum&&1===this.minimum&&(1===this._options.minimum?this.maximum*=this.logarithmBase-1/this.logarithmBase:1===this._options.maximum&&(this.minimum/=this.logarithmBase-1/this.logarithmBase));this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum);this.viewportMaximum=Math.min(this.viewportMaximum,
this.maximum);this.viewportMinimum>this.viewportMaximum&&(!this._options.viewportMinimum&&!this._options.minimum||this._options.viewportMaximum||this._options.maximum?this._options.viewportMinimum||this._options.minimum||!this._options.viewportMaximum&&!this._options.maximum||(this.viewportMinimum=this.minimum=(this._options.viewportMaximum||this._options.maximum)/Math.pow(this.logarithmBase,2*Math.ceil(this.interval))):this.viewportMaximum=this.maximum=this._options.viewportMinimum||this._options.minimum);
d=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(c*this.interval)+0.2)*this.interval);this.range=this.viewportMaximum/this.viewportMinimum;this.noTicks=a;if(!this._options.interval&&this.range<Math.pow(this.logarithmBase,8>this.viewportMaximum||3>a?2:3)){for(c=Math.floor(this.viewportMinimum/b+0.5)*b;c<this.viewportMinimum;)c+=b;this.equidistantInterval=!1;this.intervalStartPosition=c;this.interval=b}else this._options.interval||(b=Math.ceil(this.interval),this.range>this.interval&&
(this.interval=b,d=Math.pow(this.logarithmBase,Math.floor(Math.log(this.viewportMinimum)/(c*this.interval)+0.2)*this.interval))),this.equidistantInterval=!0,this.intervalStartPosition=d;if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",1>this.viewportMinimum)){c=Math.floor(Math.abs(Math.log(this.viewportMinimum)/Math.LN10))+2;if(isNaN(c)||!isFinite(c))c=2;if(2<c)for(b=0;b<c-2;b++)this.valueFormatString+="#"}};B.getNiceExponent=function(a,c){var b=Math.floor(Math.log(a)/Math.LN10),d=a/
Math.pow(10,b),d=0>b?1>=d?1:5>=d?5:10:Math.max(Math.floor(d),1);return Number((d*Math.pow(10,b)).toFixed(20))};B.getNiceNumber=function(a,c){var b=Math.floor(Math.log(a)/Math.LN10),d=a/Math.pow(10,b);return Number(((c?1.5>d?1:3>d?2:7>d?5:10:1>=d?1:2>=d?2:5>=d?5:10)*Math.pow(10,b)).toFixed(20))};B.prototype.getLabelStartPoint=function(){var a=E[this.intervalType+"Duration"]*this.interval,a=new Date(Math.floor(this.viewportMinimum/a)*a);if("millisecond"!==this.intervalType)if("second"===this.intervalType)0<
a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===this.intervalType){if(0<a.getSeconds()||0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===this.intervalType){if(0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+
1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===this.intervalType){if(0<a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setMonth(a.getMonth()+1),a.setDate(1),a.setHours(0),a.setMinutes(0),
a.setSeconds(0),a.setMilliseconds(0)}else"year"===this.intervalType&&(0<a.getMonth()||1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())&&(a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0));return a};S(ra,L);ra.prototype.render=function(){this.ctx.save();var a=this.parent.getPixelCoordinatesOnAxis(this.value),c=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*
this.thickness);if(0<c){var b=null===this.opacity?1:this.opacity;this.ctx.strokeStyle=this.color;this.ctx.beginPath();var d=this.ctx.globalAlpha;this.ctx.globalAlpha=b;C(this.id);var e,f,g,h;this.ctx.lineWidth=c;this.ctx.setLineDash&&this.ctx.setLineDash(D(this.lineDashType,c));if("bottom"===this.parent._position||"top"===this.parent._position)e=f=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,g=this.chart.plotArea.y1,h=this.chart.plotArea.y2;else if("left"===this.parent._position||"right"===this.parent._position)g=
h=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,e=this.chart.plotArea.x1,f=this.chart.plotArea.x2;this.ctx.moveTo(e,g);this.ctx.lineTo(f,h);this.ctx.stroke();this.ctx.globalAlpha=d}this.ctx.restore()};S(U,L);U.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");this.container.setAttribute("class","canvasjs-chart-tooltip");this.container.style.position="absolute";this.container.style.height="auto";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";
this.container.style.zIndex="1000";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';a+="line-height: auto;";a+="margin: 0px 0px 0px 0px;";a+="padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";a+="font-weight: normal;";a+="font-style: "+(t?"italic;":"normal;");a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";a+="text-align: left;";a+="border: 2px solid gray;";a+=t?"background: rgba(255,255,255,.9);":
"background: rgb(255,255,255);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 5px;";a+="-moz-user-select:none;";a+="-khtml-user-select: none;";a+="-webkit-user-select: none;";a+="-ms-user-select: none;";a+="user-select: none;";t||(a+="filter: alpha(opacity = 90);",a+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");a+='} "> Sample Tooltip</div>';this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=
this.contentDiv.style.borderRadius;this.chart._canvasJSContainer.appendChild(this.container)}};U.prototype.mouseMoveHandler=function(a,c){this._lastUpdated&&40>(new Date).getTime()-this._lastUpdated||(this._lastUpdated=(new Date).getTime(),this._updateToolTip(a,c))};U.prototype._updateToolTip=function(a,c){if(!this.chart.disableToolTip){if("undefined"===typeof a||"undefined"===typeof c){if(isNaN(this._prevX)||isNaN(this._prevY))return;a=this._prevX;c=this._prevY}else this._prevX=a,this._prevY=c;var b=
null,d=null,e=[],f=0;if(this.shared&&this.enabled&&"none"!==this.chart.plotInfo.axisPlacement){f="xySwapped"===this.chart.plotInfo.axisPlacement?this.chart.axisX.convertPixelToValue({y:c}):this.chart.axisX.convertPixelToValue({x:a});d=[];for(b=0;b<this.chart.data.length;b++){var g=this.chart.data[b].getDataPointAtX(f,!0);g&&0<=g.index&&(g.dataSeries=this.chart.data[b],null!==g.dataPoint.y&&d.push(g))}if(0===d.length)return;d.sort(function(a,b){return a.distance-b.distance});f=d[0];for(b=0;b<d.length;b++)d[b].dataPoint.x.valueOf()===
f.dataPoint.x.valueOf()&&e.push(d[b]);d=null}else{if(g=this.chart.getDataPointAtXY(a,c,!0))this.currentDataPointIndex=g.dataPointIndex,this.currentSeriesIndex=g.dataSeries.index;else if(t)if(g=Ea(a,c,this.chart._eventManager.ghostCtx),0<g&&"undefined"!==typeof this.chart._eventManager.objectMap[g]){g=this.chart._eventManager.objectMap[g];if("legendItem"===g.objectType)return;this.currentSeriesIndex=g.dataSeriesIndex;this.currentDataPointIndex=0<=g.dataPointIndex?g.dataPointIndex:-1}else this.currentDataPointIndex=
-1;else this.currentDataPointIndex=-1;if(0<=this.currentSeriesIndex){d=this.chart.data[this.currentSeriesIndex];g={};if(0<=this.currentDataPointIndex)b=d.dataPoints[this.currentDataPointIndex],g.dataSeries=d,g.dataPoint=b,g.index=this.currentDataPointIndex,g.distance=Math.abs(b.x-f);else{if(!this.enabled||"line"!==d.type&&"stepLine"!==d.type&&"spline"!==d.type&&"area"!==d.type&&"stepArea"!==d.type&&"splineArea"!==d.type&&"stackedArea"!==d.type&&"stackedArea100"!==d.type&&"rangeArea"!==d.type&&"rangeSplineArea"!==
d.type&&"candlestick"!==d.type&&"ohlc"!==d.type)return;f=d.axisX.convertPixelToValue({x:a});g=d.getDataPointAtX(f,!0);g.dataSeries=d;this.currentDataPointIndex=g.index;b=g.dataPoint}if(!x(g.dataPoint.y))if(g.dataSeries.axisY)if(0<g.dataPoint.y.length){for(b=f=0;b<g.dataPoint.y.length;b++)g.dataPoint.y[b]<g.dataSeries.axisY.viewportMinimum?f--:g.dataPoint.y[b]>g.dataSeries.axisY.viewportMaximum&&f++;f<g.dataPoint.y.length&&f>-g.dataPoint.y.length&&e.push(g)}else"column"===d.type||"bar"===d.type?0>
g.dataPoint.y?0>g.dataSeries.axisY.viewportMinimum&&g.dataSeries.axisY.viewportMaximum>=g.dataPoint.y&&e.push(g):g.dataSeries.axisY.viewportMinimum<=g.dataPoint.y&&0<=g.dataSeries.axisY.viewportMaximum&&e.push(g):"bubble"===d.type?(f=this.chart._eventManager.objectMap[d.dataPointIds[g.index]].size/2,g.dataPoint.y>=g.dataSeries.axisY.viewportMinimum-f&&g.dataPoint.y<=g.dataSeries.axisY.viewportMaximum+f&&e.push(g)):(0<=g.dataSeries.type.indexOf("100")||"stackedColumn"===d.type||"stackedBar"===d.type||
g.dataPoint.y>=g.dataSeries.axisY.viewportMinimum&&g.dataPoint.y<=g.dataSeries.axisY.viewportMaximum)&&e.push(g);else e.push(g)}}if(0<e.length&&(this.highlightObjects(e),this.enabled))if(f="",f=this.getToolTipInnerHTML({entries:e}),null!==f){this.contentDiv.innerHTML=f;this.contentDiv.innerHTML=f;f=!1;"none"===this.container.style.display&&(f=!0,this.container.style.display="block");try{this.contentDiv.style.background=this.backgroundColor?this.backgroundColor:t?"rgba(255,255,255,.9)":"rgb(255,255,255)",
this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.borderColor?this.borderColor:e[0].dataPoint.color?e[0].dataPoint.color:e[0].dataSeries.color?e[0].dataSeries.color:e[0].dataSeries._colorSet[e[0].index%e[0].dataSeries._colorSet.length],this.contentDiv.style.borderWidth=this.borderThickness||0===this.borderThickness?this.borderThickness+"px":"2px",this.contentDiv.style.borderRadius=this.cornerRadius||0===this.cornerRadius?this.cornerRadius+
"px":"5px",this.container.style.borderRadius=this.contentDiv.style.borderRadius,this.contentDiv.style.fontSize=this.fontSize||0===this.fontSize?this.fontSize+"px":"14px",this.contentDiv.style.color=this.fontColor?this.fontColor:"#000000",this.contentDiv.style.fontFamily=this.fontFamily?this.fontFamily:"Calibri, Arial, Georgia, serif;",this.contentDiv.style.fontWeight=this.fontWeight?this.fontWeight:"normal",this.contentDiv.style.fontStyle=this.fontStyle?this.fontStyle:t?"italic":"normal"}catch(h){}"pie"===
e[0].dataSeries.type||"doughnut"===e[0].dataSeries.type||"funnel"===e[0].dataSeries.type||"bar"===e[0].dataSeries.type||"rangeBar"===e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?g=a-10-this.container.clientWidth:(g=e[0].dataSeries.axisX.convertValueToPixel(e[0].dataPoint.x)-this.container.clientWidth<<0,g-=10);0>g&&(g+=this.container.clientWidth+20);g+this.container.clientWidth>Math.max(this.chart._container.clientWidth,this.chart.width)&&(g=Math.max(0,
Math.max(this.chart._container.clientWidth,this.chart.width)-this.container.clientWidth));g+="px";e=1!==e.length||this.shared||"line"!==e[0].dataSeries.type&&"stepLine"!==e[0].dataSeries.type&&"spline"!==e[0].dataSeries.type&&"area"!==e[0].dataSeries.type&&"stepArea"!==e[0].dataSeries.type&&"splineArea"!==e[0].dataSeries.type?"bar"===e[0].dataSeries.type||"rangeBar"===e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?e[0].dataSeries.axisX.convertValueToPixel(e[0].dataPoint.x):
c:e[0].dataSeries.axisY.convertValueToPixel(e[0].dataPoint.y);e=-e+10;0<e+this.container.clientHeight+5&&(e-=e+this.container.clientHeight+5-0);this.container.style.left=g;this.container.style.bottom=e+"px";!this.animationEnabled||f?this.disableAnimation():this.enableAnimation()}else this.hide(!1)}};U.prototype.highlightObjects=function(a){var c=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();c.clearRect(0,0,this.chart.width,this.chart.height);c.save();var b=this.chart.plotArea,d=0;
c.beginPath();c.rect(b.x1,b.y1,b.x2-b.x1,b.y2-b.y1);c.clip();for(b=0;b<a.length;b++){var e=a[b];if((e=this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]])&&e.objectType&&"dataPoint"===e.objectType){var d=this.chart.data[e.dataSeriesIndex],f=d.dataPoints[e.dataPointIndex],g=e.dataPointIndex;!1===f.highlightEnabled||!0!==d.highlightEnabled&&!0!==f.highlightEnabled||("line"===d.type||"stepLine"===d.type||"spline"===d.type||"scatter"===d.type||"area"===d.type||"stepArea"===d.type||
"splineArea"===d.type||"stackedArea"===d.type||"stackedArea100"===d.type||"rangeArea"===d.type||"rangeSplineArea"===d.type?(f=d.getMarkerProperties(g,e.x1,e.y1,this.chart.overlaidCanvasCtx),f.size=Math.max(1.5*f.size<<0,10),f.borderColor=f.borderColor||"#FFFFFF",f.borderThickness=f.borderThickness||Math.ceil(0.1*f.size),P.drawMarkers([f]),"undefined"!==typeof e.y2&&(f=d.getMarkerProperties(g,e.x1,e.y2,this.chart.overlaidCanvasCtx),f.size=Math.max(1.5*f.size<<0,10),f.borderColor=f.borderColor||"#FFFFFF",
f.borderThickness=f.borderThickness||Math.ceil(0.1*f.size),P.drawMarkers([f]))):"bubble"===d.type?(f=d.getMarkerProperties(g,e.x1,e.y1,this.chart.overlaidCanvasCtx),f.size=e.size,f.color="white",f.borderColor="white",c.globalAlpha=0.3,P.drawMarkers([f]),c.globalAlpha=1):"column"===d.type||"stackedColumn"===d.type||"stackedColumn100"===d.type||"bar"===d.type||"rangeBar"===d.type||"stackedBar"===d.type||"stackedBar100"===d.type||"rangeColumn"===d.type?N(c,e.x1,e.y1,e.x2,e.y2,"white",0,null,!1,!1,!1,
!1,0.3):"pie"===d.type||"doughnut"===d.type?za(c,e.center,e.radius,"white",d.type,e.startAngle,e.endAngle,0.3,e.percentInnerRadius):"candlestick"===d.type?(c.globalAlpha=1,c.strokeStyle=e.color,c.lineWidth=2*e.borderThickness,d=0===c.lineWidth%2?0:0.5,c.beginPath(),c.moveTo(e.x3-d,Math.min(e.y2,e.y3)),c.lineTo(e.x3-d,Math.min(e.y1,e.y4)),c.stroke(),c.beginPath(),c.moveTo(e.x3-d,Math.max(e.y1,e.y4)),c.lineTo(e.x3-d,Math.max(e.y2,e.y3)),c.stroke(),N(c,e.x1,Math.min(e.y1,e.y4),e.x2,Math.max(e.y1,e.y4),
"transparent",2*e.borderThickness,e.color,!1,!1,!1,!1),c.globalAlpha=1):"ohlc"===d.type&&(c.globalAlpha=1,c.strokeStyle=e.color,c.lineWidth=2*e.borderThickness,d=0===c.lineWidth%2?0:0.5,c.beginPath(),c.moveTo(e.x3-d,e.y2),c.lineTo(e.x3-d,e.y3),c.stroke(),c.beginPath(),c.moveTo(e.x3,e.y1),c.lineTo(e.x1,e.y1),c.stroke(),c.beginPath(),c.moveTo(e.x3,e.y4),c.lineTo(e.x2,e.y4),c.stroke(),c.globalAlpha=1))}}c.restore();c.globalAlpha=1;c.beginPath()};U.prototype.getToolTipInnerHTML=function(a){a=a.entries;
for(var c=null,b=null,d=null,e=0,f="",g=!0,h=0;h<a.length;h++)if(a[h].dataSeries.toolTipContent||a[h].dataPoint.toolTipContent){g=!1;break}if(g&&(this.content&&"function"===typeof this.content||this.contentFormatter))a={chart:this.chart._publicChartReference,toolTip:this._options,entries:a},c=this.contentFormatter?this.contentFormatter(a):this.content(a);else if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){for(var p="",h=0;h<a.length;h++)if(b=a[h].dataSeries,d=a[h].dataPoint,e=a[h].index,
f="",0===h&&(g&&!this.content)&&(p+="undefined"!==typeof this.chart.axisX.labels[d.x]?this.chart.axisX.labels[d.x]:"{x}",p+="</br>",p=this.chart.replaceKeywordsWithValue(p,d,b,e)),null!==d.toolTipContent&&("undefined"!==typeof d.toolTipContent||null!==b._options.toolTipContent)){if("line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===
b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type)f+=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}";else if("bubble"===b.type)f+=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+
(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type)f+=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";else if("candlestick"===b.type||"ohlc"===b.type)f+=d.toolTipContent?
d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";null===c&&(c="");!0===this.reversed?(c=this.chart.replaceKeywordsWithValue(f,d,b,e)+c,h<a.length-1&&(c="</br>"+c)):(c+=this.chart.replaceKeywordsWithValue(f,d,b,e),h<a.length-1&&(c+="</br>"))}null!==
c&&(c=p+c)}else{b=a[0].dataSeries;d=a[0].dataPoint;e=a[0].index;if(null===d.toolTipContent||"undefined"===typeof d.toolTipContent&&null===b._options.toolTipContent)return null;if("line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type)f=
d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}";else if("bubble"===b.type)f=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
else if("pie"===b.type||"doughnut"===b.type||"funnel"===b.type)f=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.name?"{name}:</span>&nbsp;&nbsp;":d.label?"{label}:</span>&nbsp;&nbsp;":"</span>")+"{y}";else if("rangeColumn"===b.type||"rangeBar"===b.type||"rangeArea"===b.type||"rangeSplineArea"===b.type)f=d.toolTipContent?d.toolTipContent:b.toolTipContent?
b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";else if("candlestick"===b.type||"ohlc"===b.type)f=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+"</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
null===c&&(c="");c+=this.chart.replaceKeywordsWithValue(f,d,b,e)}return c};U.prototype.enableAnimation=function(){this.container.style.WebkitTransition||(this.container.style.WebkitTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MozTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MsTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.transition="left .2s ease-out, bottom .2s ease-out")};U.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&
(this.container.style.WebkitTransition="",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};U.prototype.hide=function(a){this.enabled&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=NaN,("undefined"===typeof a||a)&&this.chart.resetOverlayedCanvas())};z.prototype.getPercentAndTotal=function(a,c){var b=null,d=null,e=null;if(0<=a.type.indexOf("stacked"))d=0,b=c.x.getTime?c.x.getTime():c.x,b in a.plotUnit.yTotals&&
(d=a.plotUnit.yTotals[b],e=isNaN(c.y)?0:0===d?0:100*(c.y/d));else if("pie"===a.type||"doughnut"===a.type){for(i=d=0;i<a.dataPoints.length;i++)isNaN(a.dataPoints[i].y)||(d+=a.dataPoints[i].y);e=isNaN(c.y)?0:100*(c.y/d)}return{percent:e,total:d}};z.prototype.replaceKeywordsWithValue=function(a,c,b,d,e){var f=this;e="undefined"===typeof e?0:e;if((0<=b.type.indexOf("stacked")||"pie"===b.type||"doughnut"===b.type)&&(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))){var g="#percent",h="#total",p=this.getPercentAndTotal(b,
c),h=isNaN(p.total)?h:p.total,g=isNaN(p.percent)?g:p.percent;do{p="";if(b.percentFormatString)p=b.percentFormatString;else{var p="#,##0.",k=Math.max(Math.ceil(Math.log(1/Math.abs(g))/Math.LN10),2);if(isNaN(k)||!isFinite(k))k=2;for(var n=0;n<k;n++)p+="#"}a=a.replace("#percent",Z(g,p,f._cultureInfo));a=a.replace("#total",Z(h,b.yValueFormatString?b.yValueFormatString:"#,##0.########"))}while(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))}return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g,function(a){if('"'===
a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=ga(a.slice(1,a.length-1));a=a.replace("#index",e);var g=null;try{var h=a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);h&&0<h.length&&(g=ga(h[2]),a=ga(h[1]))}catch(k){}h=null;if("color"===a)return c.color?c.color:b.color?b.color:b._colorSet[d%b._colorSet.length];if(c.hasOwnProperty(a))h=c;else if(b.hasOwnProperty(a))h=b;else return"";h=h[a];null!==g&&(h=h[g]);return"x"===a?!f.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic&&
("dateTime"===f.plotInfo.axisXValueType||"dateTime"===b.xValueType||c.x&&c.x.getTime)?xa(h,c.xValueFormatString?c.xValueFormatString:b.xValueFormatString?b.xValueFormatString:f.axisX&&f.axisX.autoValueFormatString?f.axisX.autoValueFormatString:"DD MMM YY",f._cultureInfo):Z(h,c.xValueFormatString?c.xValueFormatString:b.xValueFormatString?b.xValueFormatString:"#,##0.########",f._cultureInfo):"y"===a?Z(h,c.yValueFormatString?c.yValueFormatString:b.yValueFormatString?b.yValueFormatString:"#,##0.########",
f._cultureInfo):"z"===a?Z(h,c.zValueFormatString?c.zValueFormatString:b.zValueFormatString?b.zValueFormatString:"#,##0.########",f._cultureInfo):h})};ha.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.eventObjects=[];t&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),this.ghostCtx.beginPath())};ha.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};ha.prototype.mouseEventHandler=
function(a){if("mousemove"===a.type||"click"===a.type){var c=[],b=sa(a),d=null;if((d=this.chart.getObjectAtXY(b.x,b.y,!1))&&"undefined"!==typeof this.objectMap[d])if(d=this.objectMap[d],"dataPoint"===d.objectType){var e=this.chart.data[d.dataSeriesIndex],f=e.dataPoints[d.dataPointIndex],g=d.dataPointIndex;d.eventParameter={x:b.x,y:b.y,dataPoint:f,dataSeries:e._options,dataPointIndex:g,dataSeriesIndex:e.index,chart:this.chart._publicChartReference};d.eventContext={context:f,userContext:f,mouseover:"mouseover",
mousemove:"mousemove",mouseout:"mouseout",click:"click"};c.push(d);d=this.objectMap[e.id];d.eventParameter={x:b.x,y:b.y,dataPoint:f,dataSeries:e._options,dataPointIndex:g,dataSeriesIndex:e.index,chart:this.chart._publicChartReference};d.eventContext={context:e,userContext:e._options,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};c.push(this.objectMap[e.id])}else"legendItem"===d.objectType&&(e=this.chart.data[d.dataSeriesIndex],f=null!==d.dataPointIndex?e.dataPoints[d.dataPointIndex]:
null,d.eventParameter={x:b.x,y:b.y,dataSeries:e._options,dataPoint:f,dataPointIndex:d.dataPointIndex,dataSeriesIndex:d.dataSeriesIndex,chart:this.chart._publicChartReference},d.eventContext={context:this.chart.legend,userContext:this.chart.legend._options,mouseover:"itemmouseover",mousemove:"itemmousemove",mouseout:"itemmouseout",click:"itemclick"},c.push(d));e=[];for(b=0;b<this.mouseoveredObjectMaps.length;b++){f=!0;for(d=0;d<c.length;d++)if(c[d].id===this.mouseoveredObjectMaps[b].id){f=!1;break}f?
this.fireEvent(this.mouseoveredObjectMaps[b],"mouseout",a):e.push(this.mouseoveredObjectMaps[b])}this.mouseoveredObjectMaps=e;for(b=0;b<c.length;b++){e=!1;for(d=0;d<this.mouseoveredObjectMaps.length;d++)if(c[b].id===this.mouseoveredObjectMaps[d].id){e=!0;break}e||(this.fireEvent(c[b],"mouseover",a),this.mouseoveredObjectMaps.push(c[b]));"click"===a.type?this.fireEvent(c[b],"click",a):"mousemove"===a.type&&this.fireEvent(c[b],"mousemove",a)}}};ha.prototype.fireEvent=function(a,c,b){if(a&&c){var d=
a.eventParameter,e=a.eventContext,f=a.eventContext.userContext;f&&(e&&f[e[c]])&&f[e[c]].call(f,d);"mouseout"!==c?f.cursor&&f.cursor!==b.target.style.cursor&&(b.target.style.cursor=f.cursor):(b.target.style.cursor=this.chart._defaultCursor,delete a.eventParameter,delete a.eventContext);"click"===c&&("dataPoint"===a.objectType&&this.chart.pieDoughnutClickHandler)&&this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],d)}};S(ja,L);wa.prototype.animate=function(a,c,b,d,e){var f=this;
this.chart.isAnimating=!0;e=e||F.easing.linear;b&&this.animations.push({startTime:(new Date).getTime()+(a?a:0),duration:c,animationCallback:b,onComplete:d});for(a=[];0<this.animations.length;)if(c=this.animations.shift(),b=(new Date).getTime(),d=0,c.startTime<=b&&(d=e(Math.min(b-c.startTime,c.duration),0,1,c.duration),d=Math.min(d,1),isNaN(d)||!isFinite(d))&&(d=1),1>d&&a.push(c),c.animationCallback(d),1<=d&&c.onComplete)c.onComplete();this.animations=a;0<this.animations.length?this.animationRequestId=
this.chart.requestAnimFrame.call(window,function(){f.animate.call(f)}):this.chart.isAnimating=!1};wa.prototype.cancelAllAnimations=function(){this.animations=[];this.animationRequestId&&this.chart.cancelRequestAnimFrame.call(window,this.animationRequestId);this.animationRequestId=null;this.chart.isAnimating=!1};var F={yScaleAnimation:function(a,c){if(0!==a){var b=c.dest,d=c.source.canvas,e=c.animationBase;b.drawImage(d,0,0,d.width,d.height,0,e-e*a,b.canvas.width/O,a*b.canvas.height/O)}},xScaleAnimation:function(a,
c){if(0!==a){var b=c.dest,d=c.source.canvas,e=c.animationBase;b.drawImage(d,0,0,d.width,d.height,e-e*a,0,a*b.canvas.width/O,b.canvas.height/O)}},xClipAnimation:function(a,c){if(0!==a){var b=c.dest,d=c.source.canvas;b.save();0<a&&b.drawImage(d,0,0,d.width*a,d.height,0,0,d.width*a/O,d.height/O);b.restore()}},fadeInAnimation:function(a,c){if(0!==a){var b=c.dest,d=c.source.canvas;b.save();b.globalAlpha=a;b.drawImage(d,0,0,d.width,d.height,0,0,b.canvas.width/O,b.canvas.height/O);b.restore()}},easing:{linear:function(a,
c,b,d){return b*a/d+c},easeOutQuad:function(a,c,b,d){return-b*(a/=d)*(a-2)+c},easeOutQuart:function(a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInQuad:function(a,c,b,d){return b*(a/=d)*a+c},easeInQuart:function(a,c,b,d){return b*(a/=d)*a*a*a+c}}},P={drawMarker:function(a,c,b,d,e,f,g,h){if(b){var p=1;b.fillStyle=f?f:"#000000";b.strokeStyle=g?g:"#000000";b.lineWidth=h?h:0;"circle"===d?(b.moveTo(a,c),b.beginPath(),b.arc(a,c,e/2,0,2*Math.PI,!1),f&&b.fill(),h&&(g?b.stroke():(p=b.globalAlpha,b.globalAlpha=
0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=p))):"square"===d?(b.beginPath(),b.rect(a-e/2,c-e/2,e,e),f&&b.fill(),h&&(g?b.stroke():(p=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=p))):"triangle"===d?(b.beginPath(),b.moveTo(a-e/2,c+e/2),b.lineTo(a+e/2,c+e/2),b.lineTo(a,c-e/2),b.closePath(),f&&b.fill(),h&&(g?b.stroke():(p=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=p)),b.beginPath()):"cross"===d&&(b.strokeStyle=f,b.lineWidth=
e/4,b.beginPath(),b.moveTo(a-e/2,c-e/2),b.lineTo(a+e/2,c+e/2),b.stroke(),b.moveTo(a+e/2,c-e/2),b.lineTo(a-e/2,c+e/2),b.stroke())}},drawMarkers:function(a){for(var c=0;c<a.length;c++){var b=a[c];P.drawMarker(b.x,b.y,b.ctx,b.type,b.size,b.color,b.borderColor,b.borderThickness)}}},Ja={Chart:function(a,c){var b=new z(a,c,this);this.render=function(){b.render(this.options)};this.options=b._options},addColorSet:function(a,c){ca[a]=c},addCultureInfo:function(a,c){ka[a]=c},formatNumber:function(a,c,b){b=
b||"en";if(ka[b])return Z(a,c||"#,##0.##",new ja(b));throw"Unknown Culture Name";},formatDate:function(a,c,b){b=b||"en";if(ka[b])return xa(a,c||"DD MMM YYYY",new ja(b));throw"Unknown Culture Name";}};Ja.Chart.version="v1.9.1 GA";window.CanvasJS=Ja})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext||function(){function V(){return this.context_||(this.context_=new C(this))}function W(a,b,c){var g=M.call(arguments,2);return function(){return a.apply(b,g.concat(M.call(arguments)))}}function N(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");
a.styleSheets.ex_canvas_||(a=a.createStyleSheet(),a.owningElement.id="ex_canvas_",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function X(a){var b=a.srcElement;switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect(),b.style.height=b.attributes.height.nodeValue+"px",b.firstChild.style.height=b.clientHeight+
"px"}}function Y(a){a=a.srcElement;a.firstChild&&(a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function D(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(a,b){for(var c=D(),g=0;3>g;g++)for(var e=0;3>e;e++){for(var f=0,d=0;3>d;d++)f+=a[g][d]*b[d][e];c[g][e]=f}return c}function P(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=
a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function Q(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1),b=a.substring(b+1,c).split(",");if(4!=b.length||"a"!=a.charAt(3))b[3]=1;return b}function E(a,b,c){return Math.min(c,Math.max(b,a))}function F(a,b,c){0>c&&c++;1<c&&c--;return 1>6*c?a+6*(b-a)*c:
1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}function G(a){if(a in H)return H[a];var b,c=1;a=String(a);if("#"==a.charAt(0))b=a;else if(/^rgb/.test(a)){c=Q(a);b="#";for(var g,e=0;3>e;e++)g=-1!=c[e].indexOf("%")?Math.floor(255*(parseFloat(c[e])/100)):+c[e],b+=v[E(g,0,255)];c=+c[3]}else if(/^hsl/.test(a)){e=c=Q(a);b=parseFloat(e[0])/360%360;0>b&&b++;g=E(parseFloat(e[1])/100,0,1);e=E(parseFloat(e[2])/100,0,1);if(0==g)g=e=b=e;else{var f=0.5>e?e*(1+g):e+g-e*g,d=2*e-f;g=F(d,f,b+1/3);e=F(d,f,b);b=F(d,f,b-1/3)}b="#"+
v[Math.floor(255*g)]+v[Math.floor(255*e)]+v[Math.floor(255*b)];c=c[3]}else b=Z[a]||a;return H[a]={color:b,alpha:c}}function C(a){this.m_=D();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*q;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",
c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(!1);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function R(a,b,c,g){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:g.x,y:g.y});a.currentX_=g.x;a.currentY_=g.y}function S(a,b){var c=G(a.strokeStyle),g=c.color,c=c.alpha*a.globalAlpha,e=a.lineScale_*a.lineWidth;1>e&&(c*=e);b.push("<g_vml_:stroke",
' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',$[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',g,'" />')}function T(a,b,c,g){var e=a.fillStyle,f=a.arcScaleX_,d=a.arcScaleY_,k=g.x-c.x,n=g.y-c.y;if(e instanceof w){var h=0,l=g=0,u=0,m=1;if("gradient"==e.type_){h=e.x1_/f;c=e.y1_/d;var p=s(a,e.x0_/f,e.y0_/d),h=s(a,h,c),h=180*Math.atan2(h.x-p.x,h.y-p.y)/Math.PI;0>h&&(h+=360);1E-6>h&&(h=0)}else p=s(a,e.x0_,e.y0_),g=(p.x-c.x)/k,l=(p.y-c.y)/n,k/=f*q,
n/=d*q,m=x.max(k,n),u=2*e.r0_/m,m=2*e.r1_/m-u;f=e.colors_;f.sort(function(a,b){return a.offset-b.offset});d=f.length;p=f[0].color;c=f[d-1].color;k=f[0].alpha*a.globalAlpha;a=f[d-1].alpha*a.globalAlpha;for(var n=[],r=0;r<d;r++){var t=f[r];n.push(t.offset*m+u+" "+t.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',c,'"',' colors="',n.join(","),'"',' opacity="',a,'"',' g_o_:opacity2="',k,'"',' angle="',h,'"',' focusposition="',g,",",l,'" />')}else e instanceof
I?k&&n&&b.push("<g_vml_:fill",' position="',-c.x/k*f*f,",",-c.y/n*d*d,'"',' type="tile"',' src="',e.src_,'" />'):(e=G(a.fillStyle),b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />'))}function s(a,b,c){a=a.m_;return{x:q*(b*a[0][0]+c*a[1][0]+a[2][0])-r,y:q*(b*a[0][1]+c*a[1][1]+a[2][1])-r}}function z(a,b,c){isFinite(b[0][0])&&(isFinite(b[0][1])&&isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1]))&&(a.m_=b,c&&(a.lineScale_=aa(ba(b[0][0]*b[1][1]-b[0][1]*
b[1][0]))))}function w(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function I(a,b){if(!a||1!=a.nodeType||"IMG"!=a.tagName)throw new A("TYPE_MISMATCH_ERR");if("complete"!=a.readyState)throw new A("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=b;break;default:throw new A("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}
function A(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var x=Math,k=x.round,J=x.sin,K=x.cos,ba=x.abs,aa=x.sqrt,q=10,r=q/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var M=Array.prototype.slice;O(document);var U={init:function(a){a=a||document;a.createElement("canvas");a.attachEvent("onreadystatechange",W(this.init_,this,a))},init_:function(a){a=a.getElementsByTagName("canvas");for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=
V;O(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",X);a.attachEvent("onresize",Y);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};U.init();for(var v=[],d=0;16>d;d++)for(var B=0;16>B;B++)v[16*d+B]=d.toString(16)+B.toString(16);var Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",
bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",
darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",
ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",
mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",
peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},
H={},L={},$={butt:"flat",round:"round"},d=C.prototype;d.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null);this.element_.innerHTML=""};d.beginPath=function(){this.currentPath_=[]};d.moveTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.lineTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.bezierCurveTo=
function(a,b,c,g,e,f){e=s(this,e,f);a=s(this,a,b);c=s(this,c,g);R(this,a,c,e)};d.quadraticCurveTo=function(a,b,c,g){a=s(this,a,b);c=s(this,c,g);g={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};R(this,g,{x:g.x+(c.x-this.currentX_)/3,y:g.y+(c.y-this.currentY_)/3},c)};d.arc=function(a,b,c,g,e,f){c*=q;var d=f?"at":"wa",k=a+K(g)*c-r,n=b+J(g)*c-r;g=a+K(e)*c-r;e=b+J(e)*c-r;k!=g||f||(k+=0.125);a=s(this,a,b);k=s(this,k,n);g=s(this,g,e);this.currentPath_.push({type:d,
x:a.x,y:a.y,radius:c,xStart:k.x,yStart:k.y,xEnd:g.x,yEnd:g.y})};d.rect=function(a,b,c,g){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath()};d.strokeRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath();this.stroke();this.currentPath_=e};d.fillRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+
c,b+g);this.lineTo(a,b+g);this.closePath();this.fill();this.currentPath_=e};d.createLinearGradient=function(a,b,c,g){var e=new w("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=g;return e};d.createRadialGradient=function(a,b,c,g,e,f){var d=new w("gradientradial");d.x0_=a;d.y0_=b;d.r0_=c;d.x1_=g;d.y1_=e;d.r1_=f;return d};d.drawImage=function(a,b){var c,g,e,d,r,y,n,h;e=a.runtimeStyle.width;d=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,u=a.height;a.runtimeStyle.width=
e;a.runtimeStyle.height=d;if(3==arguments.length)c=arguments[1],g=arguments[2],r=y=0,n=e=l,h=d=u;else if(5==arguments.length)c=arguments[1],g=arguments[2],e=arguments[3],d=arguments[4],r=y=0,n=l,h=u;else if(9==arguments.length)r=arguments[1],y=arguments[2],n=arguments[3],h=arguments[4],c=arguments[5],g=arguments[6],e=arguments[7],d=arguments[8];else throw Error("Invalid number of arguments");var m=s(this,c,g),p=[];p.push(" <g_vml_:group",' coordsize="',10*q,",",10*q,'"',' coordorigin="0,0"',' style="width:',
10,"px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var t=[];t.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",k(m.x/q),",","Dy=",k(m.y/q),"");var v=s(this,c+e,g),w=s(this,c,g+d);c=s(this,c+e,g+d);m.x=x.max(m.x,v.x,w.x,c.x);m.y=x.max(m.y,v.y,w.y,c.y);p.push("padding:0 ",k(m.x/q),"px ",k(m.y/q),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",t.join(""),", sizingmethod='clip');")}else p.push("top:",
k(m.y/q),"px;left:",k(m.x/q),"px;");p.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',q*e,"px;"," height:",q*d,'px"',' cropleft="',r/l,'"',' croptop="',y/u,'"',' cropright="',(l-r-n)/l,'"',' cropbottom="',(u-y-h)/u,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))};d.stroke=function(a){var b=[];b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*q,",",10*q,'"',
' stroked="',!a,'"',' path="');for(var c={x:null,y:null},d={x:null,y:null},e=0;e<this.currentPath_.length;e++){var f=this.currentPath_[e];switch(f.type){case "moveTo":b.push(" m ",k(f.x),",",k(f.y));break;case "lineTo":b.push(" l ",k(f.x),",",k(f.y));break;case "close":b.push(" x ");f=null;break;case "bezierCurveTo":b.push(" c ",k(f.cp1x),",",k(f.cp1y),",",k(f.cp2x),",",k(f.cp2y),",",k(f.x),",",k(f.y));break;case "at":case "wa":b.push(" ",f.type," ",k(f.x-this.arcScaleX_*f.radius),",",k(f.y-this.arcScaleY_*
f.radius)," ",k(f.x+this.arcScaleX_*f.radius),",",k(f.y+this.arcScaleY_*f.radius)," ",k(f.xStart),",",k(f.yStart)," ",k(f.xEnd),",",k(f.yEnd))}if(f){if(null==c.x||f.x<c.x)c.x=f.x;if(null==d.x||f.x>d.x)d.x=f.x;if(null==c.y||f.y<c.y)c.y=f.y;if(null==d.y||f.y>d.y)d.y=f.y}}b.push(' ">');a?T(this,b,c,d):S(this,b);b.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};d.fill=function(){this.stroke(!0)};d.closePath=function(){this.currentPath_.push({type:"close"})};d.save=function(){var a=
{};P(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=t(D(),this.m_)};d.restore=function(){this.aStack_.length&&(P(this.aStack_.pop(),this),this.m_=this.mStack_.pop())};d.translate=function(a,b){z(this,t([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)};d.rotate=function(a){var b=K(a);a=J(a);z(this,t([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};d.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;z(this,t([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};d.transform=function(a,b,c,d,e,f){z(this,t([[a,
b,0],[c,d,0],[e,f,1]],this.m_),!0)};d.setTransform=function(a,b,c,d,e,f){z(this,[[a,b,0],[c,d,0],[e,f,1]],!0)};d.drawText_=function(a,b,c,d,e){var f=this.m_;d=0;var r=1E3,t=0,n=[],h;h=this.font;if(L[h])h=L[h];else{var l=document.createElement("div").style;try{l.font=h}catch(u){}h=L[h]={style:l.fontStyle||"normal",variant:l.fontVariant||"normal",weight:l.fontWeight||"normal",size:l.fontSize||10,family:l.fontFamily||"sans-serif"}}var l=h,m=this.element_;h={};for(var p in l)h[p]=l[p];p=parseFloat(m.currentStyle.fontSize);
m=parseFloat(l.size);"number"==typeof l.size?h.size=l.size:-1!=l.size.indexOf("px")?h.size=m:-1!=l.size.indexOf("em")?h.size=p*m:-1!=l.size.indexOf("%")?h.size=p/100*m:-1!=l.size.indexOf("pt")?h.size=m/0.75:h.size=p;h.size*=0.981;p=h.style+" "+h.variant+" "+h.weight+" "+h.size+"px "+h.family;m=this.element_.currentStyle;l=this.textAlign.toLowerCase();switch(l){case "left":case "center":case "right":break;case "end":l="ltr"==m.direction?"right":"left";break;case "start":l="rtl"==m.direction?"right":
"left";break;default:l="left"}switch(this.textBaseline){case "hanging":case "top":t=h.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":t=-h.size/2.25}switch(l){case "right":d=1E3;r=0.05;break;case "center":d=r=500}b=s(this,b+0,c+t);n.push('<g_vml_:line from="',-d,' 0" to="',r,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?S(this,n):T(this,n,{x:-d,y:0},
{x:r,y:h.size});e=f[0][0].toFixed(3)+","+f[1][0].toFixed(3)+","+f[0][1].toFixed(3)+","+f[1][1].toFixed(3)+",0,0";b=k(b.x/q)+","+k(b.y/q);n.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',N(a),'" style="v-text-align:',l,";font:",N(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",n.join(""))};d.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,!1)};d.strokeText=function(a,
b,c,d){this.drawText_(a,b,c,d,!0)};d.measureText=function(a){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));return{width:this.textMeasureEl_.offsetWidth}};d.clip=function(){};
d.arcTo=function(){};d.createPattern=function(a,b){return new I(a,b)};w.prototype.addColorStop=function(a,b){b=G(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};d=A.prototype=Error();d.INDEX_SIZE_ERR=1;d.DOMSTRING_SIZE_ERR=2;d.HIERARCHY_REQUEST_ERR=3;d.WRONG_DOCUMENT_ERR=4;d.INVALID_CHARACTER_ERR=5;d.NO_DATA_ALLOWED_ERR=6;d.NO_MODIFICATION_ALLOWED_ERR=7;d.NOT_FOUND_ERR=8;d.NOT_SUPPORTED_ERR=9;d.INUSE_ATTRIBUTE_ERR=10;d.INVALID_STATE_ERR=11;d.SYNTAX_ERR=12;d.INVALID_MODIFICATION_ERR=
13;d.NAMESPACE_ERR=14;d.INVALID_ACCESS_ERR=15;d.VALIDATION_ERR=16;d.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=U;CanvasRenderingContext2D=C;CanvasGradient=w;CanvasPattern=I;DOMException=A}();

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//! moment.js
//! version : 2.15.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () { 'use strict';

    var hookCallback;

    function utils_hooks__hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        var k;
        for (k in obj) {
            // even if its not own property I'd still call it non-empty
            return false;
        }
        return true;
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid (flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    function isUndefined(input) {
        return input === void 0;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (utils_hooks__hooks.deprecationHandler != null) {
                utils_hooks__hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (utils_hooks__hooks.deprecationHandler != null) {
            utils_hooks__hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;
    utils_hooks__hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function locale_set__set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function locale_calendar__calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function get_set__set (mom, unit, value) {
        if (mom.isValid()) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return this._months;
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return this._monthsShort;
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function units_month__handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = create_utc__createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return units_month__handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (typeof value !== 'number') {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function createDate (y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        //the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        if (!m) {
            return this._weekdays;
        }
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function day_of_week__handleStrictParse(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = create_utc__createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = create_utc__createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        ordinalParse: defaultOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = locale_locales__getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    // treat as if there is no base config
                    deprecateSimple('parentLocaleUndefined',
                            'specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/');
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, parentConfig = baseConfig;
            // MERGE
            if (locales[name] != null) {
                parentConfig = locales[name]._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function locale_locales__getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function locale_locales__listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(utils_hooks__hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    utils_hooks__hooks.ISO_8601 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (isDate(input)) {
            config._d = input;
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!valid__isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date(utils_hooks__hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = local__createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return valid__createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = local__createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return valid__createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = ((string || '').match(matcher) || []);
        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
            } else if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);

            if (tZone === 0) {
                this.utcOffset(0, true);
            } else {
                this.utcOffset(offsetFromString(matchOffset, this._i));
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

    function create__createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add      = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function moment_calendar__calendar (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = utils_hooks__hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : local__createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            delta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString () {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 local__createLocal(time).isValid())) {
            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function moment_valid__isValid () {
        return valid__isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIOROITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add               = add_subtract__add;
    momentPrototype__proto.calendar          = moment_calendar__calendar;
    momentPrototype__proto.clone             = clone;
    momentPrototype__proto.diff              = diff;
    momentPrototype__proto.endOf             = endOf;
    momentPrototype__proto.format            = format;
    momentPrototype__proto.from              = from;
    momentPrototype__proto.fromNow           = fromNow;
    momentPrototype__proto.to                = to;
    momentPrototype__proto.toNow             = toNow;
    momentPrototype__proto.get               = stringGet;
    momentPrototype__proto.invalidAt         = invalidAt;
    momentPrototype__proto.isAfter           = isAfter;
    momentPrototype__proto.isBefore          = isBefore;
    momentPrototype__proto.isBetween         = isBetween;
    momentPrototype__proto.isSame            = isSame;
    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
    momentPrototype__proto.isValid           = moment_valid__isValid;
    momentPrototype__proto.lang              = lang;
    momentPrototype__proto.locale            = locale;
    momentPrototype__proto.localeData        = localeData;
    momentPrototype__proto.max               = prototypeMax;
    momentPrototype__proto.min               = prototypeMin;
    momentPrototype__proto.parsingFlags      = parsingFlags;
    momentPrototype__proto.set               = stringSet;
    momentPrototype__proto.startOf           = startOf;
    momentPrototype__proto.subtract          = add_subtract__subtract;
    momentPrototype__proto.toArray           = toArray;
    momentPrototype__proto.toObject          = toObject;
    momentPrototype__proto.toDate            = toDate;
    momentPrototype__proto.toISOString       = moment_format__toISOString;
    momentPrototype__proto.toJSON            = toJSON;
    momentPrototype__proto.toString          = toString;
    momentPrototype__proto.unix              = unix;
    momentPrototype__proto.valueOf           = to_type__valueOf;
    momentPrototype__proto.creationData      = creationData;

    // Year
    momentPrototype__proto.year       = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear    = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month       = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
    momentPrototype__proto.weeksInYear    = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date       = getSetDayOfMonth;
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset            = getSetOffset;
    momentPrototype__proto.utc                  = setOffsetToUTC;
    momentPrototype__proto.local                = setOffsetToLocal;
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST                = isDaylightSavingTime;
    momentPrototype__proto.isLocal              = isLocal;
    momentPrototype__proto.isUtcOffset          = isUtcOffset;
    momentPrototype__proto.isUtc                = isUtc;
    momentPrototype__proto.isUTC                = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    momentPrototype__proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix (input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone () {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var prototype__proto = Locale.prototype;

    prototype__proto.calendar        = locale_calendar__calendar;
    prototype__proto.longDateFormat  = longDateFormat;
    prototype__proto.invalidDate     = invalidDate;
    prototype__proto.ordinal         = ordinal;
    prototype__proto.preparse        = preParsePostFormat;
    prototype__proto.postformat      = preParsePostFormat;
    prototype__proto.relativeTime    = relative__relativeTime;
    prototype__proto.pastFuture      = pastFuture;
    prototype__proto.set             = locale_set__set;

    // Month
    prototype__proto.months            =        localeMonths;
    prototype__proto.monthsShort       =        localeMonthsShort;
    prototype__proto.monthsParse       =        localeMonthsParse;
    prototype__proto.monthsRegex       = monthsRegex;
    prototype__proto.monthsShortRegex  = monthsShortRegex;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays       =        localeWeekdays;
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

    prototype__proto.weekdaysRegex       =        weekdaysRegex;
    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;
    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get (format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = lists__get(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = locale_locales__getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return lists__get(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = lists__get(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function lists__listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function lists__listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function lists__listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function lists__listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function lists__listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract (duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf () {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function duration_get__get (units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds]  ||
                minutes <= 1           && ['m']           ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours   <= 1           && ['h']           ||
                hours   < thresholds.h && ['hh', hours]   ||
                days    <= 1           && ['d']           ||
                days    < thresholds.d && ['dd', days]    ||
                months  <= 1           && ['M']           ||
                months  < thresholds.M && ['MM', months]  ||
                years   <= 1           && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function duration_humanize__getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize (withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days         = iso_string__abs(this._days);
        var months       = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs            = duration_abs__abs;
    duration_prototype__proto.add            = duration_add_subtract__add;
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
    duration_prototype__proto.as             = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds      = asSeconds;
    duration_prototype__proto.asMinutes      = asMinutes;
    duration_prototype__proto.asHours        = asHours;
    duration_prototype__proto.asDays         = asDays;
    duration_prototype__proto.asWeeks        = asWeeks;
    duration_prototype__proto.asMonths       = asMonths;
    duration_prototype__proto.asYears        = asYears;
    duration_prototype__proto.valueOf        = duration_as__valueOf;
    duration_prototype__proto._bubble        = bubble;
    duration_prototype__proto.get            = duration_get__get;
    duration_prototype__proto.milliseconds   = milliseconds;
    duration_prototype__proto.seconds        = seconds;
    duration_prototype__proto.minutes        = minutes;
    duration_prototype__proto.hours          = hours;
    duration_prototype__proto.days           = days;
    duration_prototype__proto.weeks          = weeks;
    duration_prototype__proto.months         = months;
    duration_prototype__proto.years          = years;
    duration_prototype__proto.humanize       = humanize;
    duration_prototype__proto.toISOString    = iso_string__toISOString;
    duration_prototype__proto.toString       = iso_string__toISOString;
    duration_prototype__proto.toJSON         = iso_string__toISOString;
    duration_prototype__proto.locale         = locale;
    duration_prototype__proto.localeData     = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.15.1';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn                    = momentPrototype;
    utils_hooks__hooks.min                   = min;
    utils_hooks__hooks.max                   = max;
    utils_hooks__hooks.now                   = now;
    utils_hooks__hooks.utc                   = create_utc__createUTC;
    utils_hooks__hooks.unix                  = moment__createUnix;
    utils_hooks__hooks.months                = lists__listMonths;
    utils_hooks__hooks.isDate                = isDate;
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid               = valid__createInvalid;
    utils_hooks__hooks.duration              = create__createDuration;
    utils_hooks__hooks.isMoment              = isMoment;
    utils_hooks__hooks.weekdays              = lists__listWeekdays;
    utils_hooks__hooks.parseZone             = moment__createInZone;
    utils_hooks__hooks.localeData            = locale_locales__getLocale;
    utils_hooks__hooks.isDuration            = isDuration;
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale          = defineLocale;
    utils_hooks__hooks.updateLocale          = updateLocale;
    utils_hooks__hooks.locales               = locale_locales__listLocales;
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
    utils_hooks__hooks.relativeTimeRounding = duration_humanize__getSetRelativeTimeRounding;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
    utils_hooks__hooks.calendarFormat        = getCalendarFormat;
    utils_hooks__hooks.prototype             = momentPrototype;

    var _moment = utils_hooks__hooks;

    return _moment;

}));
},{}],2:[function(require,module,exports){
(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.objectPath = factory();
  }
})(this, function(){
  'use strict';

  var
    toStr = Object.prototype.toString,
    _hasOwnProperty = Object.prototype.hasOwnProperty;

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
      return true;
    } else {
      for (var i in value) {
        if (_hasOwnProperty.call(value, i)) {
          return false;
        }
      }
      return true;
    }
  }

  function toString(type){
    return toStr.call(type);
  }

  function isNumber(value){
    return typeof value === 'number' || toString(value) === "[object Number]";
  }

  function isString(obj){
    return typeof obj === 'string' || toString(obj) === "[object String]";
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  function isArray(obj){
    return typeof obj === 'object' && typeof obj.length === 'number' && toString(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function set(obj, path, value, doNotReplace){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isString(path)) {
      return set(obj, path.split('.'), value, doNotReplace);
    }
    var currentPath = getKey(path[0]);

    if (path.length === 1) {
      var oldVal = obj[currentPath];
      if (oldVal === void 0 || !doNotReplace) {
        obj[currentPath] = value;
      }
      return oldVal;
    }

    if (obj[currentPath] === void 0) {
      if (isNumber(currentPath)) {
        obj[currentPath] = [];
      } else {
        obj[currentPath] = {};
      }
    }

    return set(obj[currentPath], path.slice(1), value, doNotReplace);
  }

  function del(obj, path) {
    if (isNumber(path)) {
      path = [path];
    }

    if (isEmpty(obj)) {
      return void 0;
    }

    if (isEmpty(path)) {
      return obj;
    }
    if(isString(path)) {
      return del(obj, path.split('.'));
    }

    var currentPath = getKey(path[0]);
    var oldVal = obj[currentPath];

    if(path.length === 1) {
      if (oldVal !== void 0) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      }
    } else {
      if (obj[currentPath] !== void 0) {
        return del(obj[currentPath], path.slice(1));
      }
    }

    return obj;
  }

  var objectPath = {};

  objectPath.ensureExists = function (obj, path, value){
    return set(obj, path, value, true);
  };

  objectPath.set = function (obj, path, value, doNotReplace){
    return set(obj, path, value, doNotReplace);
  };

  objectPath.insert = function (obj, path, value, at){
    var arr = objectPath.get(obj, path);
    at = ~~at;
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }
    arr.splice(at, 0, value);
  };

  objectPath.empty = function(obj, path) {
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return void 0;
    }

    var value, i;
    if (!(value = objectPath.get(obj, path))) {
      return obj;
    }

    if (isString(value)) {
      return objectPath.set(obj, path, '');
    } else if (isBoolean(value)) {
      return objectPath.set(obj, path, false);
    } else if (isNumber(value)) {
      return objectPath.set(obj, path, 0);
    } else if (isArray(value)) {
      value.length = 0;
    } else if (isObject(value)) {
      for (i in value) {
        if (_hasOwnProperty.call(value, i)) {
          delete value[i];
        }
      }
    } else {
      return objectPath.set(obj, path, null);
    }
  };

  objectPath.push = function (obj, path /*, values */){
    var arr = objectPath.get(obj, path);
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }

    arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
  };

  objectPath.coalesce = function (obj, paths, defaultValue) {
    var value;

    for (var i = 0, len = paths.length; i < len; i++) {
      if ((value = objectPath.get(obj, paths[i])) !== void 0) {
        return value;
      }
    }

    return defaultValue;
  };

  objectPath.get = function (obj, path, defaultValue){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return defaultValue;
    }
    if (isString(path)) {
      return objectPath.get(obj, path.split('.'), defaultValue);
    }

    var currentPath = getKey(path[0]);

    if (path.length === 1) {
      if (obj[currentPath] === void 0) {
        return defaultValue;
      }
      return obj[currentPath];
    }

    return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
  };

  objectPath.del = function(obj, path) {
    return del(obj, path);
  };

  return objectPath;
});
},{}],3:[function(require,module,exports){
var objectPath = require('object-path');
var sortBy;
var sort;

/**
 * Return a comparator function
 * @param  {String} property The key to sort by
 * @return {Function}        Returns the comparator function
 */
sort = function sort(property) {
    var sortOrder = 1;
    var fn;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function fn(a,b) {
        var result;
        if (objectPath.get(a, property) < objectPath.get(b, property)) result = -1;
        if (objectPath.get(a, property) > objectPath.get(b, property)) result = 1;
        if (objectPath.get(a, property) === objectPath.get(b, property)) result = 0;
        return result * sortOrder;
    }
};

/**
 * Return a comparator function that sorts by multiple keys
 * @return {Function} Returns the comparator function
 */
sortBy = function sortBy() {
    var properties = arguments;
    var fn;

    return function fn(obj1, obj2) {
        var numberOfProperties = properties.length,
            result = 0,
            i = 0;

        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while(result === 0 && i < numberOfProperties) {
            result = sort(properties[i])(obj1, obj2);
            i++;
        }
        return result;
    };
};

/**
 * Expose `sortBy`
 * @type {Function}
 */
module.exports = sortBy;
},{"object-path":2}],4:[function(require,module,exports){
"use strict";

var EX = require("../vdom_es6");
var moment = require('moment');
var goBackList = function goBackList() {

   EX.SetState({
      compDisplay: "list"
   });
};

var Details = EX.component({
   componentName: 'details',
   state: {},
   componentRender: function componentRender(props) {
      var ex_framework = props.ex_framework;
      if (!ex_framework) {
         return EX.node('div', { class: "col-xs-12" }, ["No Data"]);
      }
      var g = props.ex_data.general;

      return EX.node('div', { class: "col-xs-12" }, [EX.node('div', { class: "top-headline fw-head" }, [ex_framework]), EX.node('div', { class: "row" }, [EX.node('div', { class: "col-xs-2" }, [EX.node('img', { class: "details-img", src: g.owner.avatar_url })]), EX.node('div', { class: "col-xs-8" }, [EX.node('table', { class: "table" }, [EX.node('thead', null, [EX.node('tr', null, [EX.node('th', null, ["Subscribers"]), EX.node('th', null, ["Forks"]), EX.node('th', null, ["Watching"]), EX.node('th', null, ["Open Issues"]), EX.node('th', null, ["First Commit"])])]), EX.node('tbody', null, [EX.node('tr', null, [EX.node('td', { class: "bold-green" }, [" ", g.subscribers_count]), EX.node('td', { class: "bold-green" }, [g.forks]), EX.node('td', { class: "bold-green" }, [g.watchers]), EX.node('td', { class: "bold-red" }, [g.open_issues]), EX.node('td', { class: "bold-black" }, [moment(g.created_at).format('LL')])])])])])]), EX.node('div', { class: "row hide-elm" }, [EX.node('div', { class: "col-xs-4 center-text" }, [" Current Issue Count: ", g.open_issues])]), EX.node('div', { class: "block-button" }, [EX.node('div', { onClick: goBackList, class: "big-butt cool-button" }, ["Back to List"])])]);
   }
});

module.exports = Details;

},{"../vdom_es6":20,"moment":1}],5:[function(require,module,exports){
"use strict";

var EX = require("../vdom_es6");
var GitRepo = require("./gitlist.js");
var sortBy = require('sort-by');

var getAvatar = function getAvatar(data, loaded, app, sortwith) {
   if (!loaded) return [];

   return Object.keys(app.fwList).map(function (itm) {
      var w = app.fwList[itm];
      w.framework = itm;
      return w;
   }).sort(sortBy(sortwith)).map(function (ob) {
      var w = data[ob.framework];
      w.stats = ob;
      return GitRepo({ ex_data: w, ex_app: app, ex_stars: w.general.stargazers_count, ex_framework: ob.framework });
   });
};
var sortList = function sortList(num) {
   return function () {
      EX.SetState({
         list: {
            order: num
         }
      });
   };
};

var FWlist = EX.component({
   componentName: 'fwlist',
   state: {},
   componentRender: function componentRender(props) {
      var ex_data = props.ex_data;
      var ex_loaded = props.ex_loaded;
      var ex_app = props.ex_app;

      ex_data = ex_data ? ex_data : {};

      var gitRepos = getAvatar(ex_data, ex_loaded, ex_app, ex_app.list.order);
      console.log('gitRepos', gitRepos);
      return EX.node('div', { class: "col-xs-12" }, [EX.node('div', { class: "top-headline" }, ["Frameworks"]), EX.node('div', { class: "list-by" }, [EX.node('div', { onClick: sortList('created'), class: ex_app.list.order === 'created' ? "sort-by selected" : "sort-by" }, ["Oldest"]), EX.node('div', { onClick: sortList('-created'), class: ex_app.list.order === '-created' ? "sort-by selected" : "sort-by" }, ["Newest"]), EX.node('div', { onClick: sortList('-stars'), class: ex_app.list.order === '-stars' ? "sort-by selected" : "sort-by" }, ["Stars"]), EX.node('div', { onClick: sortList('-size'), class: ex_app.list.order === '-size' ? "sort-by selected" : "sort-by" }, ["Largest First"]), EX.node('div', { onClick: sortList('size'), class: ex_app.list.order === 'size' ? "sort-by selected" : "sort-by" }, ["Smallest First"]), EX.node('div', { onClick: sortList('perf'), class: ex_app.list.order === 'perf' ? "sort-by selected" : "sort-by" }, ["Performance"])]), EX.node('ul', { class: "nice-list boxed-list" }, [gitRepos])]);
   }
});

module.exports = FWlist;

},{"../vdom_es6":20,"./gitlist.js":6,"sort-by":3}],6:[function(require,module,exports){
"use strict";

var EX = require("../vdom_es6");
var moment = require('moment');

var detailsClick = function detailsClick(framework, data, appdata) {
   return function () {
      var payLoad = Object.assign({}, appdata, {
         compDisplay: "details",
         details: {
            onview: framework,
            data: data
         }
      });
      EX.SetState(payLoad);
   };
};

var GitRepo = EX.component({
   componentName: 'list2',
   state: {},
   componentRender: function componentRender(props) {
      var ex_framework = props.ex_framework;
      var ex_data = props.ex_data;
      var ex_app = props.ex_app;
      var ex_stars = props.ex_stars;

      var show = ex_app.activefw === ex_framework;

      var g = ex_data.general;
      var theFunc = function theFunc() {
         var change = ex_app.activefw === ex_framework ? "none" : ex_framework;
         var payLoad = Object.assign({}, ex_app, {
            activefw: change
         });
         EX.SetState(payLoad);
      };

      var getDetails = detailsClick(ex_framework, ex_data, ex_app);

      return EX.node('li', { class: "yikes" }, [EX.node('div', { class: "info-block", onClick: theFunc }, [EX.node('img', { class: "li-img", src: g.owner.avatar_url }), EX.node('strong', { class: "fw-header" }, [ex_framework]), EX.node('span', { class: "float-right" }, [EX.node('i', { class: "fa fa-star yellow-star", 'aria-hidden': "true" })]), EX.node('span', { class: "float-right" }, [ex_stars.toString()])]), EX.node('div', { class: show ? "details-block height-auto" : "details-block height-zero" }, [EX.node('div', { class: "col-xs-6 center-text" }, [EX.node('p', { class: "p-heading" }, ["Framework Age:"]), moment(g.created_at, "YYYYMMDD").fromNow()]), EX.node('div', { class: "col-xs-6 center-text" }, [EX.node('p', { class: "p-heading" }, ["Framework HomePage:"]), EX.node('a', { href: g.homepage }, [g.homepage])]), EX.node('div', { class: "row center-text" }, [EX.node('strong', { onClick: getDetails, class: "more-info" }, ["More info on ", ex_framework])])])]);
   }
});
module.exports = GitRepo;

},{"../vdom_es6":20,"moment":1}],7:[function(require,module,exports){
"use strict";

var EX = require("../vdom_es6");
var frameWorkPrefs = require("./perf_data.js");
var GraphINTERFACE = require("../graphs/graphs.js");
console.log('frameWorkPrefs', frameWorkPrefs);

var Graph = EX.component({
   componentName: 'graph',
   state: {},
   componentRender: function componentRender(props) {

      return EX.node('div', { class: "col-xs-12" });
   }
});

module.exports = Graph;

},{"../graphs/graphs.js":13,"../vdom_es6":20,"./perf_data.js":9}],8:[function(require,module,exports){
"use strict";

var EX = require("../vdom_es6");
var AppState = require("../data.js");
var FWlist = require("./fwlist.js");
var Graph = require("./graph.js");
var Details = require("./details.js");

var Layout = {
   state: AppState,
   githubHook: function githubHook(res) {
      console.log('成龍大哥');
      console.log('responseAholic', res);
      EX.SetState({
         data: res,
         loaded: true,
         frameworks: ['React', 'Angular', 'Vue', 'Inferno', 'Ember']
      });
   },
   render: function render() {
      var _Layout$state = Layout.state;
      var frameworks = _Layout$state.frameworks;
      var data = _Layout$state.data;
      var loaded = _Layout$state.loaded;
      var activefw = _Layout$state.activefw;
      var details = _Layout$state.details;
      var compDisplay = _Layout$state.compDisplay;


      return EX.node('div', null, [EX.node('div', { class: loaded ? "hide-elm" : "loader" }, ["Getting Data..."]), EX.node('div', { class: loaded && compDisplay === "list" ? "ok" : "hide-elm" }, [FWlist({ ex_data: data, ex_app: Layout.state, ex_loaded: loaded })]), EX.node('div', { class: compDisplay === "details" ? "fadeinto" : "hide-elm" }, [Details({ ex_data: details.data, ex_framework: details.onview })])]);
   }
};
EX.rootComponent = Layout;
EX.SetState = function () {
   return function (payload) {
      Layout.state = Object.assign({}, Layout.state, payload);
      EX.objectChange(Layout.render());
      console.log(Layout.state);
   };
}();

module.exports = Layout;

},{"../data.js":10,"../vdom_es6":20,"./details.js":4,"./fwlist.js":5,"./graph.js":7}],9:[function(require,module,exports){
'use strict';

var parseFloats = function parseFloats(obb) {
   var newObject = {};
   Object.keys(obb).forEach(function (itm) {
      var h = obb[itm];
      newObject[itm] = {
         v: parseFloat(h.v),
         sd: parseFloat(h.sd)
      };
   });
   return newObject;
};

var frameWorkPrefs = {};
frameWorkPrefs['Ember'] = parseFloats(JSON.parse('{"create rows":{"v":"747.01","sd":"13.05"},"replace all rows":{"v":"583.99","sd":"15.99"},"partial update":{"v":"37.67","sd":"0.83"},"select row":{"v":"42.24","sd":"0.93"},"swap rows":{"v":"74.69","sd":"1.83"},"remove row":{"v":"92.95","sd":"1.43"},"create many rows":{"v":"5905.1","sd":"191.34"},"append rows to large table":{"v":"1211.5","sd":"12.02"},"clear rows":{"v":"1182.97","sd":"12.84"},"clear rows a 2nd time":{"v":"1617.69","sd":"14.12"}}'));
frameWorkPrefs['Angular1'] = parseFloats(JSON.parse('{"create rows":{"v":"249.56","sd":"6.29"},"replace all rows":{"v":"262.91","sd":"14.03"},"partial update":{"v":"16.41","sd":"0.17"},"select row":{"v":"7.85","sd":"1.4"},"swap rows":{"v":"50.53","sd":"1.5"},"remove row":{"v":"70.72","sd":"1.9"},"create many rows":{"v":"2573.01","sd":"105.2"},"append rows to large table":{"v":"826.88","sd":"17.85"},"clear rows":{"v":"840.63","sd":"6.94"},"clear rows a 2nd time":{"v":"1644.59","sd":"22.86"}}'));
frameWorkPrefs['Angular2'] = parseFloats(JSON.parse('{"create rows":{"v":"192.38","sd":"4.51"},"replace all rows":{"v":"210.64","sd":"5.51"},"partial update":{"v":"11.87","sd":"0.44"},"select row":{"v":"5.08","sd":"0.29"},"swap rows":{"v":"51.76","sd":"1.5"},"remove row":{"v":"133.52","sd":"2.53"},"create many rows":{"v":"1842","sd":"9.49"},"append rows to large table":{"v":"679.67","sd":"14.07"},"clear rows":{"v":"436.54","sd":"27.78"},"clear rows a 2nd time":{"v":"411.59","sd":"31.34"}}'));
frameWorkPrefs['Inferno'] = parseFloats(JSON.parse('{"create rows":{"v":"153.6","sd":"4.05"},"replace all rows":{"v":"160.18","sd":"2.21"},"partial update":{"v":"13.7","sd":"0.41"},"select row":{"v":"6.31","sd":"0.88"},"swap rows":{"v":"48.09","sd":"0.96"},"remove row":{"v":"61.91","sd":"0.42"},"create many rows":{"v":"1488.96","sd":"21.3"},"append rows to large table":{"v":"285.41","sd":"13.48"},"clear rows":{"v":"227.16","sd":"2.26"},"clear rows a 2nd time":{"v":"227.97","sd":"3.15"}}'));
frameWorkPrefs['React'] = parseFloats(JSON.parse('{"create rows":{"v":"184.48","sd":"2.26"},"replace all rows":{"v":"197.82","sd":"4"},"partial update":{"v":"18.78","sd":"0.66"},"select row":{"v":"7.07","sd":"0.63"},"swap rows":{"v":"53.05","sd":"1.02"},"remove row":{"v":"64.89","sd":"2.16"},"create many rows":{"v":"1858.08","sd":"24.52"},"append rows to large table":{"v":"326.41","sd":"18.33"},"clear rows":{"v":"2000.85","sd":"18.56"},"clear rows a 2nd time":{"v":"4117.91","sd":"23.41"}}'));
frameWorkPrefs['Vue'] = parseFloats(JSON.parse('{"create rows":{"v":"259.77","sd":"9.46"},"replace all rows":{"v":"261.84","sd":"8.52"},"partial update":{"v":"15.76","sd":"0.56"},"select row":{"v":"7.33","sd":"0.48"},"swap rows":{"v":"52.96","sd":"1.02"},"remove row":{"v":"70.61","sd":"0.85"},"create many rows":{"v":"2705.86","sd":"148.47"},"append rows to large table":{"v":"743.44","sd":"14.95"},"clear rows":{"v":"434.58","sd":"12.47"},"clear rows a 2nd time":{"v":"435.33","sd":"7.33"}}'));

module.exports = frameWorkPrefs;

},{}],10:[function(require,module,exports){
"use strict";

var AppState = {
   data: {},
   loaded: false,
   frameworks: [],
   compDisplay: "list",
   list: {
      order: '-stars'
   },
   details: {
      onview: null,
      data: {}
   },
   activefw: "none",
   fwList: {
      React: {
         created: 1369412154000,
         stars: '49457',
         size: 133,
         perf: 3
      },
      Angular: {
         created: 1262738077000,
         stars: '52264',
         size: 766,
         perf: 4
      },
      Vue: {
         created: 1375068291000,
         stars: '27558',
         size: 78,
         perf: 2
      },
      Inferno: {
         created: 1422828458000,
         stars: '3885',
         size: 4,
         perf: 1
      },
      Ember: {
         created: 1306366780000,
         stars: '16822',
         size: 746,
         perf: 5
      }
   }

};

module.exports = AppState;

},{}],11:[function(require,module,exports){
"use strict";

//const CanvasJS = require('../vendor/canvasjs.min.js');

module.exports = function () {
   return function (data) {
      var chart = new CanvasJS.Chart("chartContainer", {
         title: {
            text: "Basic Column Chart"
         },
         data: [{
            type: "column",
            dataPoints: [{
               y: 45,
               label: "Apple"
            }, {
               y: 31,
               label: "Mango"
            }, {
               y: 52,
               label: "Pineapple"
            }, {
               y: 10,
               label: "Grapes"
            }, {
               y: 46,
               label: "Lemon"
            }, {
               y: 30,
               label: "Banana"
            }, {
               y: 50,
               label: "Watermelon"
            }, {
               y: 28,
               label: "Coconut"
            }, {
               y: 45,
               label: "Lychee"
            }, {
               y: 15,
               label: "Palm"
            }, {
               y: 48,
               label: "Orange"
            }, {
               y: 38,
               label: "Muskmelon"
            }, {
               y: 41,
               label: "Strawberry"
            }, {
               y: 25,
               label: "Kiwi"
            }, {
               y: 50,
               label: "Guava"
            }]
         }]
      });
      chart.render();
   };
};

},{}],12:[function(require,module,exports){
"use strict";

//const CanvasJS = require('../vendor/canvasjs.min.js');

module.exports = function () {
   return function (data) {
      var chart = new CanvasJS.Chart("chartContainer", {
         title: {
            text: "Comparison among Countries on Fertility Rate Vs Life Expectancy in 2009"
         },
         data: [{
            type: "bubble",
            dataPoints: [{
               x: 64.8,
               y: 2.66,
               z: 12074.4,
               name: "India"
            }, {
               x: 73.1,
               y: 1.61,
               z: 13313.8,
               name: "China"
            }, {
               x: 78.1,
               y: 2.00,
               z: 306.77,
               name: "US"
            }, {
               x: 68.5,
               y: 2.15,
               z: 237.414,
               name: "Indonesia"
            }, {
               x: 72.5,
               y: 1.86,
               z: 193.24,
               name: "Brazil"
            }, {
               x: 76.5,
               y: 2.36,
               z: 112.24,
               name: "Mexico"
            }, {
               x: 50.9,
               y: 5.56,
               z: 154.48,
               name: "Nigeria"
            }, {
               x: 68.6,
               y: 1.54,
               z: 141.91,
               name: "Russia"
            }, {
               x: 82.9,
               y: 1.37,
               z: 127.55,
               name: "Japan"
            }, {
               x: 79.8,
               y: 1.36,
               z: 81.90,
               name: "Australia"
            }, {
               x: 72.7,
               y: 2.78,
               z: 79.71,
               name: "Egypt"
            }, {
               x: 80.1,
               y: 1.94,
               z: 61.81,
               name: "UK"
            }, {
               x: 55.8,
               y: 4.76,
               z: 39.24,
               name: "Kenya"
            }, {
               x: 81.5,
               y: 1.93,
               z: 21.95,
               name: "Australia"
            }, {
               x: 68.1,
               y: 4.77,
               z: 31.09,
               name: "Iraq"
            }, {
               x: 47.9,
               y: 6.42,
               z: 33.42,
               name: "Afganistan"
            }, {
               x: 50.3,
               y: 5.58,
               z: 18.55,
               name: "Angola"
            }]
         }]
      });

      chart.render();
   };
};

},{}],13:[function(require,module,exports){
"use strict";

var bubble = require("./bubblechart.js");
var bar = require("./bargraph.js");
var pie = require("./piegraph.js");

var GraphINTERFACE = {
	bubble: bubble(),
	bar: bar(),
	pie: pie()
};
module.exports = GraphINTERFACE;

},{"./bargraph.js":11,"./bubblechart.js":12,"./piegraph.js":14}],14:[function(require,module,exports){
"use strict";

//const CanvasJS = require('../vendor/canvasjs.min.js');

module.exports = function () {
   return function (data) {
      var chart = new CanvasJS.Chart("chartContainer", {
         title: {
            text: "Gaming Consoles Sold in 2012"
         },
         legend: {
            maxWidth: 350,
            itemWidth: 120
         },
         data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{indexLabel}",
            dataPoints: [{
               y: 4181563,
               indexLabel: "PlayStation 3"
            }, {
               y: 2175498,
               indexLabel: "Wii"
            }, {
               y: 3125844,
               indexLabel: "Xbox 360"
            }, {
               y: 1176121,
               indexLabel: "Nintendo DS"
            }, {
               y: 1727161,
               indexLabel: "PSP"
            }, {
               y: 4303364,
               indexLabel: "Nintendo 3DS"
            }, {
               y: 1717786,
               indexLabel: "PS Vita"
            }]
         }]
      });
      chart.render();
   };
};

},{}],15:[function(require,module,exports){
'use strict';

var flatten = function flatten(a, b) {
			return a.concat(Array.isArray(b) ? b.reduce(flatten, []) : b);
};
function flattenIteration(arr, flatArr) {
			flatArr = flatArr || [];

			var length = arr.length | 0;

			for (var index = 0; index < length; index = index + 1) {
						var item = arr[index];
						item.constructor === Array ? flatten(item, flatArr) : flatArr[flatArr.length] = item;
			}

			return flatArr;
}
module.exports = {
			smoothArray: function smoothArray() {
						return function (nested) {
									return nested.reduce(flatten, []).filter(function (ne) {
												return ne !== null && ne !== undefined && ne !== '';
									});
						};
			}
};

},{}],16:[function(require,module,exports){
"use strict";

var theXHRstuff = require('./xhrRequests.js');

var EX = require("./vdom_es6");
var Layout = require("./components/layout.js");

EX.createComponent(Layout.render(), document.getElementById('container'));

EX.viewObjects();

theXHRstuff(Layout.githubHook);

},{"./components/layout.js":8,"./vdom_es6":20,"./xhrRequests.js":21}],17:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

module.exports = function (self, createElem) {
   var re = new RegExp(/^ex_/i);

   function removeProp(element, attr) {
      if (!self.events[attr] && !re.test(attr)) {
         element.removeAttribute(attr.replace(/[A-Z]/g, '-$&'));
      }
   }

   function changeProp(element, attr, val) {
      if (!self.events[attr] && !re.test(attr) || attr === 'src') {
         element.setAttribute(attr.replace(/[A-Z]/g, '-$&'), val);
      }
   }

   function updateProp(element, name, newVal, oldVal) {
      if (!newVal) {
         removeProp(element, name);
      } else if (!oldVal || newVal !== oldVal) {
         changeProp(element, name, newVal);
      }
   }

   function updateProps(element, newProps) {
      var oldProps = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      var props = Object.assign({}, newProps, oldProps);
      // Object.keys(props).forEach( (name) => {
      for (var name in props) {
         updateProp(element, name, newProps[name], oldProps[name]);
      };
   }

   function changed(node1, node2) {
      return (typeof node1 === 'undefined' ? 'undefined' : _typeof(node1)) !== (typeof node2 === 'undefined' ? 'undefined' : _typeof(node2)) || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type;
   }

   function updateElement(parent, newNode, oldNode) {
      var index = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

      if (typeof newNode === 'string' || typeof newNode === "number") {
         var vdomid = parent.props.trace + '.' + index;
         if (changed(newNode, oldNode)) {
            parent.domElement.replaceChild(createElem(newNode, vdomid, parent.trace), parent.domElement.childNodes[index]);
         }

         return;
      }
      if (!oldNode) {
         var _vdomid = parent.props.trace + '.' + index;
         newNode.domElement = createElem(newNode, _vdomid, parent.trace);
         parent.domElement.appendChild(newNode.domElement);
         return;
      }
      if (!newNode) {
         parent.domElement.removeChild(parent.childNodes[index]);
         return;
      }
      if (changed(newNode, oldNode)) {
         newNode.domElement = createElem(newNode, newNode.trace, newNode.parent);
         parent.domElement.replaceChild(newNode.domElement, parent.domElement.childNodes[index]);
      }
      if (newNode.type) {

         newNode.domElement = oldNode.domElement ? oldNode.domElement : createElem(newNode, newNode.trace, newNode.parent);
         updateProps(newNode.domElement, newNode.props, oldNode.props);
         var newLength = newNode.nested ? newNode.nested.length : 0;
         if (typeof oldNode === 'string' || typeof oldNode === 'number') {
            for (var i = 0; i < newLength; i++) {
               updateElement(newNode, newNode.nested[i], null, i);
            }
            return;
         }
         oldNode.nested = oldNode.nested ? oldNode.nested : [];
         var oldLength = oldNode.nested.length;

         // console.log('parent', {parent: parent, newNode: newNode, oldNode: oldNode});
         for (var _i = 0; _i < newLength || _i < oldLength; _i++) {
            updateElement(newNode, newNode.nested[_i], oldNode.nested[_i], _i);
         }
      }
   }
   return updateElement;
};

},{}],18:[function(require,module,exports){
"use strict";

module.exports = ["onCopy", "onCut", "onPaste", "onKeyDown", "onKeyPress", "onKeyUp", "onFocus", "onBlur", "onChange", "onInput", "onSubmit", "onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onSelect", "onScroll", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd"];

},{}],19:[function(require,module,exports){
"use strict";

var Eventlist = require("./eventlist.js");

function extractEventName(name) {
	return name.slice(2).toLowerCase();
}

module.exports = Eventlist.reduce(function (ob, itm) {
	ob[itm] = { registered: false, eventName: extractEventName(itm), eventNS: itm };
	return ob;
}, {});

},{"./eventlist.js":18}],20:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var events = require("./vdom/events.js");
var setDiff = require("./vdom/diffing.js");
var handyHelpers = require("./handy_funcs.js");
var smoothNested = handyHelpers.smoothArray();

function NodeMap() {
   var _this = this;

   var appTitle = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];

   this.appTitle = appTitle;
   this.domComponents = {};
   this.rootComponent = null;
   this.appRootDom = {
      domElement: null,
      nested: []
   };
   this.appRoot = null;
   this.events = events;

   this.createUdid = function () {
      return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
   };

   this.getElement = function (domElement) {
      if (domElement instanceof HTMLElement) {
         _this.appRoot = domElement;
         _this.appRootDom.domElement = domElement;
         return true;
      }
      var elem = document.querySelector(domElement);
      if (elem) {
         _this.appRoot = elem;
         _this.appRootDom.domElement = domElement;
         return true;
      }
      console.error("Element: " + domElement + " not found");
      return false;
   };
   this.setListener = function (listener, type) {
      var self = _this;
      console.log('appRoot', _this.appRoot);
      _this.appRoot.addEventListener(listener, function (e) {
         self.lookUpRegistry(e.target, type);
      });
   };
   this.applyListener = function (listener) {

      var eventInfo = _this.events[listener];
      if (!eventInfo.registered) {
         eventInfo.registered = true;
         _this.setListener(eventInfo.eventName, listener);
      }
   };
   this.lookUpRegistry = function (target, eventName) {
      //split(/\.(?=[^.]*$)/)
      var tgTrace = target.getAttribute('trace');
      var traceArray = tgTrace.split('.');
      console.log('traceArray', traceArray);
      var vDom = _this.domComponents;
      console.log('vDom', vDom);
      traceArray.shift();
      traceArray.map(function (itm, i) {
         if (!vDom.nested) {
            return false;
         }
         var nest = vDom.nested[itm];
         vDom = nest;
         return nest;
      }).forEach(function (itm, ii) {
         if (itm) {
            var hasAction = itm.props[eventName];
            if (hasAction) {
               hasAction();
            }
         }
      });
   };
   this.objectChange = function (newRender) {
      var newOb = _this.rerender(newRender, 'Root');
      console.log('newRender', newOb);
      _this.updateElement(_this.domComponents, newOb);
   };
   this.createComponent = function (obj, containerElement) {

      if (_this.getElement(containerElement)) {
         obj.domElement = _this.appRoot;
         _this.mountApp(obj);
      };
   };

   this.viewObjects = function () {
      console.log('appRootDom', _this.appRootDom);
      console.log('domBranches', _this.domComponents);
      console.log('this.events', _this.events);
   };
   this.mountApp = function (obj) {
      _this.domComponents = obj;
      _this.appRootDom.nested.push(_this.domComponents);
      _this.appRoot.appendChild(_this.htmlBuild(obj, "Root"));
   };

   var ogCreateElement = Document.prototype.createElement;
   var ogcreateElementNS = Document.prototype.createElementNS;

   var self = this;
   var re = new RegExp(/^ex_/i);
   Document.prototype.createElement = function createElement(name, attrs) {
      var element = ogCreateElement.call(this, String(name));

      if (!attrs) return element;

      for (var attr in attrs) {
         if (!self.events[attr] && !re.test(attr) || attr === 'src') {
            element.setAttribute(attr.replace(/[A-Z]/g, '-$&'), attrs[attr]);
         }
      }
      return element;
   };
   Document.prototype.createElementNS = function createElementNS(name, attrs) {
      var element = ogcreateElementNS.call(this, 'http://www.w3.org/2000/svg', String(name));

      if (!attrs) return element;

      for (var attr in attrs) {
         if (!self.events[attr] && !re.test(attr)) {
            element.setAttributeNS('http://www.w3.org/2000/svg', attr.replace(/[A-Z]/g, '-$&'), attrs[attr]);
         }
      }
      return element;
   };
   var createElem = function createElem(node, group, parent) {

      if (typeof node === 'string' || typeof node === 'number' || (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object" && node !== null && node !== undefined) {
         return document.createTextNode(node);
      }
      node.props = Object.assign({}, node.props, {
         trace: group,
         parent: parent
      });
      Object.keys(node.props).forEach(function (itm, ii) {
         if (self.events[itm] && itm !== 'src') {
            self.applyListener(itm);
         }
      });

      var el = document.createElement(node.type, node.props);
      node.domElement = el;
      node.nested = node.nested ? node.nested : [];
      if (node.nested.length === 0) {
         return el;
      }
      node.nested.map(function (elm, ii) {
         var elmId = group + '.' + ii;
         return createElem(elm, elmId, group);
      }).forEach(el.appendChild.bind(el));
      return el;
   };

   var reRenderElem = function reRenderElem(node, group, parent) {
      if (typeof node === 'string' || typeof node === 'number' || (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object" && node !== null && node !== undefined) {
         return node;
      }

      node.nested = node.nested ? node.nested : [];
      node.props = Object.assign({}, node.props, {
         trace: group,
         parent: parent
      });
      node.nested.map(function (elm, ii) {
         var elmId = group + '.' + ii;
         return reRenderElem(elm, elmId, group);
      });
      return node;
   };
   this.htmlBuild = function (node, group) {
      return createElem(node, group, 'Root');
   };
   this.rerender = function (node, group) {
      return reRenderElem(node, group, 'Root');
   };
   this.diffElements = setDiff(self, createElem);
   this.updateElement = function (oldNode, newNode) {
      _this.diffElements(_this.appRootDom, newNode, oldNode);
      _this.domComponents = newNode;
   };
   this.SetState = function (data) {
      console.log('not yet set');
   };
};

NodeMap.prototype.component = function (obj) {
   if (!(obj instanceof Array) && obj instanceof Object) {
      if (!obj["componentName"] || !obj["componentRender"]) {
         console.error("Object must have a branchName and branchObject");
         return false;
      }

      obj.vdomId = '@' + obj.componentName;
      return function (opts) {
         return obj.componentRender(opts);
      };
   }
};

NodeMap.prototype.node = function (type) {
   var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

   var _ref = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

   var _ref2 = _toArray(_ref);

   var nested = _ref2;

   nested = smoothNested(nested);
   return {
      type: type,
      props: props,
      nested: nested
   };
};

module.exports = new NodeMap('example');

},{"./handy_funcs.js":15,"./vdom/diffing.js":17,"./vdom/events.js":19}],21:[function(require,module,exports){
'use strict';

module.exports = function (callBack) {
   if (true) {
      var getRepoData = function getRepoData(url, framework, infoType) {
         return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = function (e) {
               if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                     resolve({
                        res: JSON.parse(xhr.responseText),
                        repo: framework,
                        type: infoType
                     });
                  } else {
                     reject({
                        res: new Error(xhr.statusText),
                        repo: framework,
                        type: infoType
                     });
                  }
               }
            };
            xhr.onerror = function (e) {
               reject({
                  res: new Error(xhr.statusText),
                  repo: framework,
                  type: infoType
               });
            };
            xhr.send();
         });
      };

      ;

      Promise.all([getRepoData('https://api.github.com/repos/vuejs/vue/events', 'Vue', 'events'), getRepoData('https://api.github.com/repos/vuejs/vue', 'Vue', 'general'), getRepoData('https://api.github.com/repos/vuejs/vue/contributors', 'Vue', 'contributors'), getRepoData('https://api.github.com/repos/facebook/react/events', 'React', 'events'), getRepoData('https://api.github.com/repos/facebook/react', 'React', 'general'), getRepoData('https://api.github.com/repos/facebook/react/contributors', 'React', 'contributors'), getRepoData('https://api.github.com/repos/angular/angular.js/events', 'Angular', 'events'), getRepoData('https://api.github.com/repos/angular/angular.js', 'Angular', 'general'), getRepoData('https://api.github.com/repos/angular/angular.js/contributors', 'Angular', 'contributors'), getRepoData('https://api.github.com/repos/trueadm/inferno/events', 'Inferno', 'events'), getRepoData('https://api.github.com/repos/trueadm/inferno', 'Inferno', 'general'), getRepoData('https://api.github.com/repos/trueadm/inferno/contributors', 'Inferno', 'contributors'), getRepoData('https://api.github.com/repos/emberjs/ember.js/events', 'Ember', 'events'), getRepoData('https://api.github.com/repos/emberjs/ember.js', 'Ember', 'general'), getRepoData('https://api.github.com/repos/emberjs/ember.js/contributors', 'Ember', 'contributors')]).then(function (responses) {
         var responseAholic = responses.reduce(function (ob, res) {
            ob[res.repo][res.type] = res.res;
            return ob;
         }, {
            Vue: {},
            React: {},
            Angular: {},
            Inferno: {},
            Ember: {}
         });
         // console.log('responseAholic',responseAholic);
         callBack(responseAholic);
         localStorage.setItem("githubdata", JSON.stringify(responseAholic));
      });
   } else {
      setTimeout(function () {
         callBack(JSON.parse(localStorage.getItem("githubdata")));
      }, 3000);
   }
};

},{}]},{},[16])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9vYmplY3QtcGF0aC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zb3J0LWJ5L2luZGV4LmpzIiwicHVibGljL2pzL2NvbXBvbmVudHMvZGV0YWlscy5qcyIsInB1YmxpYy9qcy9jb21wb25lbnRzL2Z3bGlzdC5qcyIsInB1YmxpYy9qcy9jb21wb25lbnRzL2dpdGxpc3QuanMiLCJwdWJsaWMvanMvY29tcG9uZW50cy9ncmFwaC5qcyIsInB1YmxpYy9qcy9jb21wb25lbnRzL2xheW91dC5qcyIsInB1YmxpYy9qcy9jb21wb25lbnRzL3BlcmZfZGF0YS5qcyIsInB1YmxpYy9qcy9kYXRhLmpzIiwicHVibGljL2pzL2dyYXBocy9iYXJncmFwaC5qcyIsInB1YmxpYy9qcy9ncmFwaHMvYnViYmxlY2hhcnQuanMiLCJwdWJsaWMvanMvZ3JhcGhzL2dyYXBocy5qcyIsInB1YmxpYy9qcy9ncmFwaHMvcGllZ3JhcGguanMiLCJwdWJsaWMvanMvaGFuZHlfZnVuY3MuanMiLCJwdWJsaWMvanMvaW5kZXguanMiLCJwdWJsaWMvanMvdmRvbS9kaWZmaW5nLmpzIiwicHVibGljL2pzL3Zkb20vZXZlbnRsaXN0LmpzIiwicHVibGljL2pzL3Zkb20vZXZlbnRzLmpzIiwicHVibGljL2pzL3Zkb21fZXM2LmpzIiwicHVibGljL2pzL3hoclJlcXVlc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDem9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZEQSxJQUFNLEtB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RUFBYTtBQUNoRCxlQUFHLElBQUksSUFBUCxFQUFhLElBQUksSUFBakIsSUFBeUIsSUFBSSxHQUE3QjtBQUNBLG1CQUFPLEVBQVA7QUFDRixVQUhvQixFQUdsQjtBQUNBLGlCQUFLLEVBREw7QUFFQSxtQkFBTyxFQUZQO0FBR0EscUJBQVMsRUFIVDtBQUlBLHFCQUFTLEVBSlQ7QUFLQSxtQkFBTztBQUxQLFVBSGtCLENBQXJCO0FBVUE7QUFDQSxrQkFBUyxjQUFUO0FBQ0Esc0JBQWEsT0FBYixDQUFxQixZQUFyQixFQUFtQyxLQUFLLFNBQUwsQ0FBZSxjQUFmLENBQW5DO0FBRUYsT0EvQkQ7QUFnQ0YsSUFuRUQsTUFtRU87QUFDSixpQkFBVyxZQUFXO0FBQ25CLGtCQUFTLEtBQUssS0FBTCxDQUFXLGFBQWEsT0FBYixDQUFxQixZQUFyQixDQUFYLENBQVQ7QUFDRixPQUZELEVBRUcsSUFGSDtBQUdGO0FBQ0gsQ0F6RUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8hIG1vbWVudC5qc1xuLy8hIHZlcnNpb24gOiAyLjE1LjFcbi8vISBhdXRob3JzIDogVGltIFdvb2QsIElza3JlbiBDaGVybmV2LCBNb21lbnQuanMgY29udHJpYnV0b3JzXG4vLyEgbGljZW5zZSA6IE1JVFxuLy8hIG1vbWVudGpzLmNvbVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICBnbG9iYWwubW9tZW50ID0gZmFjdG9yeSgpXG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGhvb2tDYWxsYmFjaztcblxuICAgIGZ1bmN0aW9uIHV0aWxzX2hvb2tzX19ob29rcyAoKSB7XG4gICAgICAgIHJldHVybiBob29rQ2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIGRvbmUgdG8gcmVnaXN0ZXIgdGhlIG1ldGhvZCBjYWxsZWQgd2l0aCBtb21lbnQoKVxuICAgIC8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuICAgIGZ1bmN0aW9uIHNldEhvb2tDYWxsYmFjayAoY2FsbGJhY2spIHtcbiAgICAgICAgaG9va0NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBcnJheShpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBBcnJheSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzT2JqZWN0KGlucHV0KSB7XG4gICAgICAgIC8vIElFOCB3aWxsIHRyZWF0IHVuZGVmaW5lZCBhbmQgbnVsbCBhcyBvYmplY3QgaWYgaXQgd2Fzbid0IGZvclxuICAgICAgICAvLyBpbnB1dCAhPSBudWxsXG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqKSB7XG4gICAgICAgIHZhciBrO1xuICAgICAgICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgICAgICAgICAvLyBldmVuIGlmIGl0cyBub3Qgb3duIHByb3BlcnR5IEknZCBzdGlsbCBjYWxsIGl0IG5vbi1lbXB0eVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRGF0ZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBEYXRlIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IERhdGVdJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXAoYXJyLCBmbikge1xuICAgICAgICB2YXIgcmVzID0gW10sIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGZuKGFycltpXSwgaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzT3duUHJvcChhLCBiKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwgYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0ZW5kKGEsIGIpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBiKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChiLCBpKSkge1xuICAgICAgICAgICAgICAgIGFbaV0gPSBiW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc093blByb3AoYiwgJ3RvU3RyaW5nJykpIHtcbiAgICAgICAgICAgIGEudG9TdHJpbmcgPSBiLnRvU3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc093blByb3AoYiwgJ3ZhbHVlT2YnKSkge1xuICAgICAgICAgICAgYS52YWx1ZU9mID0gYi52YWx1ZU9mO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlX3V0Y19fY3JlYXRlVVRDIChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgdHJ1ZSkudXRjKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1wdHkgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgICAgICB1bnVzZWRUb2tlbnMgICAgOiBbXSxcbiAgICAgICAgICAgIHVudXNlZElucHV0ICAgICA6IFtdLFxuICAgICAgICAgICAgb3ZlcmZsb3cgICAgICAgIDogLTIsXG4gICAgICAgICAgICBjaGFyc0xlZnRPdmVyICAgOiAwLFxuICAgICAgICAgICAgbnVsbElucHV0ICAgICAgIDogZmFsc2UsXG4gICAgICAgICAgICBpbnZhbGlkTW9udGggICAgOiBudWxsLFxuICAgICAgICAgICAgaW52YWxpZEZvcm1hdCAgIDogZmFsc2UsXG4gICAgICAgICAgICB1c2VySW52YWxpZGF0ZWQgOiBmYWxzZSxcbiAgICAgICAgICAgIGlzbyAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICAgICAgcGFyc2VkRGF0ZVBhcnRzIDogW10sXG4gICAgICAgICAgICBtZXJpZGllbSAgICAgICAgOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFyc2luZ0ZsYWdzKG0pIHtcbiAgICAgICAgaWYgKG0uX3BmID09IG51bGwpIHtcbiAgICAgICAgICAgIG0uX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtLl9wZjtcbiAgICB9XG5cbiAgICB2YXIgc29tZTtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcbiAgICAgICAgc29tZSA9IEFycmF5LnByb3RvdHlwZS5zb21lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNvbWUgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgICAgICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpIGluIHQgJiYgZnVuLmNhbGwodGhpcywgdFtpXSwgaSwgdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRfX2lzVmFsaWQobSkge1xuICAgICAgICBpZiAobS5faXNWYWxpZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgZmxhZ3MgPSBnZXRQYXJzaW5nRmxhZ3MobSk7XG4gICAgICAgICAgICB2YXIgcGFyc2VkUGFydHMgPSBzb21lLmNhbGwoZmxhZ3MucGFyc2VkRGF0ZVBhcnRzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpICE9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBpc05vd1ZhbGlkID0gIWlzTmFOKG0uX2QuZ2V0VGltZSgpKSAmJlxuICAgICAgICAgICAgICAgIGZsYWdzLm92ZXJmbG93IDwgMCAmJlxuICAgICAgICAgICAgICAgICFmbGFncy5lbXB0eSAmJlxuICAgICAgICAgICAgICAgICFmbGFncy5pbnZhbGlkTW9udGggJiZcbiAgICAgICAgICAgICAgICAhZmxhZ3MuaW52YWxpZFdlZWtkYXkgJiZcbiAgICAgICAgICAgICAgICAhZmxhZ3MubnVsbElucHV0ICYmXG4gICAgICAgICAgICAgICAgIWZsYWdzLmludmFsaWRGb3JtYXQgJiZcbiAgICAgICAgICAgICAgICAhZmxhZ3MudXNlckludmFsaWRhdGVkICYmXG4gICAgICAgICAgICAgICAgKCFmbGFncy5tZXJpZGllbSB8fCAoZmxhZ3MubWVyaWRpZW0gJiYgcGFyc2VkUGFydHMpKTtcblxuICAgICAgICAgICAgaWYgKG0uX3N0cmljdCkge1xuICAgICAgICAgICAgICAgIGlzTm93VmFsaWQgPSBpc05vd1ZhbGlkICYmXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLmNoYXJzTGVmdE92ZXIgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MudW51c2VkVG9rZW5zLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBmbGFncy5iaWdIb3VyID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuaXNGcm96ZW4gPT0gbnVsbCB8fCAhT2JqZWN0LmlzRnJvemVuKG0pKSB7XG4gICAgICAgICAgICAgICAgbS5faXNWYWxpZCA9IGlzTm93VmFsaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNOb3dWYWxpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbS5faXNWYWxpZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZF9fY3JlYXRlSW52YWxpZCAoZmxhZ3MpIHtcbiAgICAgICAgdmFyIG0gPSBjcmVhdGVfdXRjX19jcmVhdGVVVEMoTmFOKTtcbiAgICAgICAgaWYgKGZsYWdzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGV4dGVuZChnZXRQYXJzaW5nRmxhZ3MobSksIGZsYWdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS51c2VySW52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNVbmRlZmluZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09PSB2b2lkIDA7XG4gICAgfVxuXG4gICAgLy8gUGx1Z2lucyB0aGF0IGFkZCBwcm9wZXJ0aWVzIHNob3VsZCBhbHNvIGFkZCB0aGUga2V5IGhlcmUgKG51bGwgdmFsdWUpLFxuICAgIC8vIHNvIHdlIGNhbiBwcm9wZXJseSBjbG9uZSBvdXJzZWx2ZXMuXG4gICAgdmFyIG1vbWVudFByb3BlcnRpZXMgPSB1dGlsc19ob29rc19faG9va3MubW9tZW50UHJvcGVydGllcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gY29weUNvbmZpZyh0bywgZnJvbSkge1xuICAgICAgICB2YXIgaSwgcHJvcCwgdmFsO1xuXG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNBTW9tZW50T2JqZWN0KSkge1xuICAgICAgICAgICAgdG8uX2lzQU1vbWVudE9iamVjdCA9IGZyb20uX2lzQU1vbWVudE9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2kpKSB7XG4gICAgICAgICAgICB0by5faSA9IGZyb20uX2k7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9mKSkge1xuICAgICAgICAgICAgdG8uX2YgPSBmcm9tLl9mO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbCkpIHtcbiAgICAgICAgICAgIHRvLl9sID0gZnJvbS5fbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3N0cmljdCkpIHtcbiAgICAgICAgICAgIHRvLl9zdHJpY3QgPSBmcm9tLl9zdHJpY3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl90em0pKSB7XG4gICAgICAgICAgICB0by5fdHptID0gZnJvbS5fdHptO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNVVEMpKSB7XG4gICAgICAgICAgICB0by5faXNVVEMgPSBmcm9tLl9pc1VUQztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX29mZnNldCkpIHtcbiAgICAgICAgICAgIHRvLl9vZmZzZXQgPSBmcm9tLl9vZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9wZikpIHtcbiAgICAgICAgICAgIHRvLl9wZiA9IGdldFBhcnNpbmdGbGFncyhmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2xvY2FsZSkpIHtcbiAgICAgICAgICAgIHRvLl9sb2NhbGUgPSBmcm9tLl9sb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9tZW50UHJvcGVydGllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGkgaW4gbW9tZW50UHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIHByb3AgPSBtb21lbnRQcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgICAgIHZhbCA9IGZyb21bcHJvcF07XG4gICAgICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvW3Byb3BdID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0bztcbiAgICB9XG5cbiAgICB2YXIgdXBkYXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgLy8gTW9tZW50IHByb3RvdHlwZSBvYmplY3RcbiAgICBmdW5jdGlvbiBNb21lbnQoY29uZmlnKSB7XG4gICAgICAgIGNvcHlDb25maWcodGhpcywgY29uZmlnKTtcbiAgICAgICAgdGhpcy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5fZCAhPSBudWxsID8gY29uZmlnLl9kLmdldFRpbWUoKSA6IE5hTik7XG4gICAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcCBpbiBjYXNlIHVwZGF0ZU9mZnNldCBjcmVhdGVzIG5ldyBtb21lbnRcbiAgICAgICAgLy8gb2JqZWN0cy5cbiAgICAgICAgaWYgKHVwZGF0ZUluUHJvZ3Jlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIHV0aWxzX2hvb2tzX19ob29rcy51cGRhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc01vbWVudCAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNb21lbnQgfHwgKG9iaiAhPSBudWxsICYmIG9iai5faXNBTW9tZW50T2JqZWN0ICE9IG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFic0Zsb29yIChudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgICAgIC8vIC0wIC0+IDBcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKSB8fCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvSW50KGFyZ3VtZW50Rm9yQ29lcmNpb24pIHtcbiAgICAgICAgdmFyIGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbixcbiAgICAgICAgICAgIHZhbHVlID0gMDtcblxuICAgICAgICBpZiAoY29lcmNlZE51bWJlciAhPT0gMCAmJiBpc0Zpbml0ZShjb2VyY2VkTnVtYmVyKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBhYnNGbG9vcihjb2VyY2VkTnVtYmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBjb21wYXJlIHR3byBhcnJheXMsIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzXG4gICAgZnVuY3Rpb24gY29tcGFyZUFycmF5cyhhcnJheTEsIGFycmF5MiwgZG9udENvbnZlcnQpIHtcbiAgICAgICAgdmFyIGxlbiA9IE1hdGgubWluKGFycmF5MS5sZW5ndGgsIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICAgICAgbGVuZ3RoRGlmZiA9IE1hdGguYWJzKGFycmF5MS5sZW5ndGggLSBhcnJheTIubGVuZ3RoKSxcbiAgICAgICAgICAgIGRpZmZzID0gMCxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKChkb250Q29udmVydCAmJiBhcnJheTFbaV0gIT09IGFycmF5MltpXSkgfHxcbiAgICAgICAgICAgICAgICAoIWRvbnRDb252ZXJ0ICYmIHRvSW50KGFycmF5MVtpXSkgIT09IHRvSW50KGFycmF5MltpXSkpKSB7XG4gICAgICAgICAgICAgICAgZGlmZnMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlmZnMgKyBsZW5ndGhEaWZmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gICAgICAgIGlmICh1dGlsc19ob29rc19faG9va3Muc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID09PSBmYWxzZSAmJlxuICAgICAgICAgICAgICAgICh0eXBlb2YgY29uc29sZSAhPT0gICd1bmRlZmluZWQnKSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRGVwcmVjYXRpb24gd2FybmluZzogJyArIG1zZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXByZWNhdGUobXNnLCBmbikge1xuICAgICAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gZXh0ZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh1dGlsc19ob29rc19faG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1dGlsc19ob29rc19faG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG51bGwsIG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgYXJnO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyArPSAnXFxuWycgKyBpICsgJ10gJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcgKz0ga2V5ICsgJzogJyArIGFyZ3VtZW50c1swXVtrZXldICsgJywgJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZSgwLCAtMik7IC8vIFJlbW92ZSB0cmFpbGluZyBjb21tYSBhbmQgc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goYXJnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2Fybihtc2cgKyAnXFxuQXJndW1lbnRzOiAnICsgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykuam9pbignJykgKyAnXFxuJyArIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuICAgICAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIGZuKTtcbiAgICB9XG5cbiAgICB2YXIgZGVwcmVjYXRpb25zID0ge307XG5cbiAgICBmdW5jdGlvbiBkZXByZWNhdGVTaW1wbGUobmFtZSwgbXNnKSB7XG4gICAgICAgIGlmICh1dGlsc19ob29rc19faG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHV0aWxzX2hvb2tzX19ob29rcy5kZXByZWNhdGlvbkhhbmRsZXIobmFtZSwgbXNnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlcHJlY2F0aW9uc1tuYW1lXSkge1xuICAgICAgICAgICAgd2Fybihtc2cpO1xuICAgICAgICAgICAgZGVwcmVjYXRpb25zW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHV0aWxzX2hvb2tzX19ob29rcy5zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZ3MgPSBmYWxzZTtcbiAgICB1dGlsc19ob29rc19faG9va3MuZGVwcmVjYXRpb25IYW5kbGVyID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgRnVuY3Rpb24gfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVfc2V0X19zZXQgKGNvbmZpZykge1xuICAgICAgICB2YXIgcHJvcCwgaTtcbiAgICAgICAgZm9yIChpIGluIGNvbmZpZykge1xuICAgICAgICAgICAgcHJvcCA9IGNvbmZpZ1tpXTtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tpXSA9IHByb3A7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbJ18nICsgaV0gPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgLy8gTGVuaWVudCBvcmRpbmFsIHBhcnNpbmcgYWNjZXB0cyBqdXN0IGEgbnVtYmVyIGluIGFkZGl0aW9uIHRvXG4gICAgICAgIC8vIG51bWJlciArIChwb3NzaWJseSkgc3R1ZmYgY29taW5nIGZyb20gX29yZGluYWxQYXJzZUxlbmllbnQuXG4gICAgICAgIHRoaXMuX29yZGluYWxQYXJzZUxlbmllbnQgPSBuZXcgUmVnRXhwKHRoaXMuX29yZGluYWxQYXJzZS5zb3VyY2UgKyAnfCcgKyAoL1xcZHsxLDJ9Lykuc291cmNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjaGlsZENvbmZpZykge1xuICAgICAgICB2YXIgcmVzID0gZXh0ZW5kKHt9LCBwYXJlbnRDb25maWcpLCBwcm9wO1xuICAgICAgICBmb3IgKHByb3AgaW4gY2hpbGRDb25maWcpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pICYmIGlzT2JqZWN0KGNoaWxkQ29uZmlnW3Byb3BdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKHJlc1twcm9wXSwgcGFyZW50Q29uZmlnW3Byb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKHJlc1twcm9wXSwgY2hpbGRDb25maWdbcHJvcF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGRDb25maWdbcHJvcF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSBjaGlsZENvbmZpZ1twcm9wXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHByb3AgaW4gcGFyZW50Q29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHByb3ApICYmXG4gICAgICAgICAgICAgICAgICAgICFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSAmJlxuICAgICAgICAgICAgICAgICAgICBpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGNoYW5nZXMgdG8gcHJvcGVydGllcyBkb24ndCBtb2RpZnkgcGFyZW50IGNvbmZpZ1xuICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IGV4dGVuZCh7fSwgcmVzW3Byb3BdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIExvY2FsZShjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNldChjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXM7XG5cbiAgICBpZiAoT2JqZWN0LmtleXMpIHtcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICB2YXIgaSwgcmVzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3Aob2JqLCBpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0Q2FsZW5kYXIgPSB7XG4gICAgICAgIHNhbWVEYXkgOiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgICAgIG5leHREYXkgOiAnW1RvbW9ycm93IGF0XSBMVCcsXG4gICAgICAgIG5leHRXZWVrIDogJ2RkZGQgW2F0XSBMVCcsXG4gICAgICAgIGxhc3REYXkgOiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgICAgICBsYXN0V2VlayA6ICdbTGFzdF0gZGRkZCBbYXRdIExUJyxcbiAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlX2NhbGVuZGFyX19jYWxlbmRhciAoa2V5LCBtb20sIG5vdykge1xuICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5fY2FsZW5kYXJba2V5XSB8fCB0aGlzLl9jYWxlbmRhclsnc2FtZUVsc2UnXTtcbiAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24ob3V0cHV0KSA/IG91dHB1dC5jYWxsKG1vbSwgbm93KSA6IG91dHB1dDtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdExvbmdEYXRlRm9ybWF0ID0ge1xuICAgICAgICBMVFMgIDogJ2g6bW06c3MgQScsXG4gICAgICAgIExUICAgOiAnaDptbSBBJyxcbiAgICAgICAgTCAgICA6ICdNTS9ERC9ZWVlZJyxcbiAgICAgICAgTEwgICA6ICdNTU1NIEQsIFlZWVknLFxuICAgICAgICBMTEwgIDogJ01NTU0gRCwgWVlZWSBoOm1tIEEnLFxuICAgICAgICBMTExMIDogJ2RkZGQsIE1NTU0gRCwgWVlZWSBoOm1tIEEnXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxvbmdEYXRlRm9ybWF0IChrZXkpIHtcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0sXG4gICAgICAgICAgICBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcblxuICAgICAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0gPSBmb3JtYXRVcHBlci5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZywgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5zbGljZSgxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRJbnZhbGlkRGF0ZSA9ICdJbnZhbGlkIGRhdGUnO1xuXG4gICAgZnVuY3Rpb24gaW52YWxpZERhdGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52YWxpZERhdGU7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRPcmRpbmFsID0gJyVkJztcbiAgICB2YXIgZGVmYXVsdE9yZGluYWxQYXJzZSA9IC9cXGR7MSwyfS87XG5cbiAgICBmdW5jdGlvbiBvcmRpbmFsIChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yZGluYWwucmVwbGFjZSgnJWQnLCBudW1iZXIpO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0UmVsYXRpdmVUaW1lID0ge1xuICAgICAgICBmdXR1cmUgOiAnaW4gJXMnLFxuICAgICAgICBwYXN0ICAgOiAnJXMgYWdvJyxcbiAgICAgICAgcyAgOiAnYSBmZXcgc2Vjb25kcycsXG4gICAgICAgIG0gIDogJ2EgbWludXRlJyxcbiAgICAgICAgbW0gOiAnJWQgbWludXRlcycsXG4gICAgICAgIGggIDogJ2FuIGhvdXInLFxuICAgICAgICBoaCA6ICclZCBob3VycycsXG4gICAgICAgIGQgIDogJ2EgZGF5JyxcbiAgICAgICAgZGQgOiAnJWQgZGF5cycsXG4gICAgICAgIE0gIDogJ2EgbW9udGgnLFxuICAgICAgICBNTSA6ICclZCBtb250aHMnLFxuICAgICAgICB5ICA6ICdhIHllYXInLFxuICAgICAgICB5eSA6ICclZCB5ZWFycydcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVsYXRpdmVfX3JlbGF0aXZlVGltZSAobnVtYmVyLCB3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbc3RyaW5nXTtcbiAgICAgICAgcmV0dXJuIChpc0Z1bmN0aW9uKG91dHB1dCkpID9cbiAgICAgICAgICAgIG91dHB1dChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpIDpcbiAgICAgICAgICAgIG91dHB1dC5yZXBsYWNlKC8lZC9pLCBudW1iZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhc3RGdXR1cmUgKGRpZmYsIG91dHB1dCkge1xuICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW2RpZmYgPiAwID8gJ2Z1dHVyZScgOiAncGFzdCddO1xuICAgICAgICByZXR1cm4gaXNGdW5jdGlvbihmb3JtYXQpID8gZm9ybWF0KG91dHB1dCkgOiBmb3JtYXQucmVwbGFjZSgvJXMvaSwgb3V0cHV0KTtcbiAgICB9XG5cbiAgICB2YXIgYWxpYXNlcyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gYWRkVW5pdEFsaWFzICh1bml0LCBzaG9ydGhhbmQpIHtcbiAgICAgICAgdmFyIGxvd2VyQ2FzZSA9IHVuaXQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgYWxpYXNlc1tsb3dlckNhc2VdID0gYWxpYXNlc1tsb3dlckNhc2UgKyAncyddID0gYWxpYXNlc1tzaG9ydGhhbmRdID0gdW5pdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVVbml0cyh1bml0cykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHVuaXRzID09PSAnc3RyaW5nJyA/IGFsaWFzZXNbdW5pdHNdIHx8IGFsaWFzZXNbdW5pdHMudG9Mb3dlckNhc2UoKV0gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXRPYmplY3QpIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJbnB1dCA9IHt9LFxuICAgICAgICAgICAgbm9ybWFsaXplZFByb3AsXG4gICAgICAgICAgICBwcm9wO1xuXG4gICAgICAgIGZvciAocHJvcCBpbiBpbnB1dE9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZFByb3AgPSBub3JtYWxpemVVbml0cyhwcm9wKTtcbiAgICAgICAgICAgICAgICBpZiAobm9ybWFsaXplZFByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZElucHV0W25vcm1hbGl6ZWRQcm9wXSA9IGlucHV0T2JqZWN0W3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3JtYWxpemVkSW5wdXQ7XG4gICAgfVxuXG4gICAgdmFyIHByaW9yaXRpZXMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGFkZFVuaXRQcmlvcml0eSh1bml0LCBwcmlvcml0eSkge1xuICAgICAgICBwcmlvcml0aWVzW3VuaXRdID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0c09iaikge1xuICAgICAgICB2YXIgdW5pdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgdSBpbiB1bml0c09iaikge1xuICAgICAgICAgICAgdW5pdHMucHVzaCh7dW5pdDogdSwgcHJpb3JpdHk6IHByaW9yaXRpZXNbdV19KTtcbiAgICAgICAgfVxuICAgICAgICB1bml0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdW5pdHM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUdldFNldCAodW5pdCwga2VlcFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBnZXRfc2V0X19zZXQodGhpcywgdW5pdCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHV0aWxzX2hvb2tzX19ob29rcy51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0X3NldF9fZ2V0KHRoaXMsIHVuaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldF9zZXRfX2dldCAobW9tLCB1bml0KSB7XG4gICAgICAgIHJldHVybiBtb20uaXNWYWxpZCgpID9cbiAgICAgICAgICAgIG1vbS5fZFsnZ2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSgpIDogTmFOO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldF9zZXRfX3NldCAobW9tLCB1bml0LCB2YWx1ZSkge1xuICAgICAgICBpZiAobW9tLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgbW9tLl9kWydzZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArIHVuaXRdKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIHN0cmluZ0dldCAodW5pdHMpIHtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbdW5pdHNdKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdHJpbmdTZXQgKHVuaXRzLCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHVuaXRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdW5pdHMgPSBub3JtYWxpemVPYmplY3RVbml0cyh1bml0cyk7XG4gICAgICAgICAgICB2YXIgcHJpb3JpdGl6ZWQgPSBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpb3JpdGl6ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzW3ByaW9yaXRpemVkW2ldLnVuaXRdKHVuaXRzW3ByaW9yaXRpemVkW2ldLnVuaXRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpc1t1bml0c10pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6ZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgICAgIHZhciBhYnNOdW1iZXIgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgICAgICB6ZXJvc1RvRmlsbCA9IHRhcmdldExlbmd0aCAtIGFic051bWJlci5sZW5ndGgsXG4gICAgICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG4gICAgICAgIHJldHVybiAoc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLScpICtcbiAgICAgICAgICAgIE1hdGgucG93KDEwLCBNYXRoLm1heCgwLCB6ZXJvc1RvRmlsbCkpLnRvU3RyaW5nKCkuc3Vic3RyKDEpICsgYWJzTnVtYmVyO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZztcblxuICAgIHZhciBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nO1xuXG4gICAgdmFyIGZvcm1hdEZ1bmN0aW9ucyA9IHt9O1xuXG4gICAgdmFyIGZvcm1hdFRva2VuRnVuY3Rpb25zID0ge307XG5cbiAgICAvLyB0b2tlbjogICAgJ00nXG4gICAgLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuICAgIC8vIG9yZGluYWw6ICAnTW8nXG4gICAgLy8gY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgdGhpcy5tb250aCgpICsgMSB9XG4gICAgZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4gKHRva2VuLCBwYWRkZWQsIG9yZGluYWwsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBmdW5jID0gY2FsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBmdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2NhbGxiYWNrXSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGZ1bmM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhZGRlZCkge1xuICAgICAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gemVyb0ZpbGwoZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBwYWRkZWRbMV0sIHBhZGRlZFsyXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcmRpbmFsKSB7XG4gICAgICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRva2VuKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLCBpLCBsZW5ndGg7XG5cbiAgICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV0pIHtcbiAgICAgICAgICAgICAgICBhcnJheVtpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobW9tKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gJycsIGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gYXJyYXlbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFycmF5W2ldLmNhbGwobW9tLCBmb3JtYXQpIDogYXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGZvcm1hdCBkYXRlIHVzaW5nIG5hdGl2ZSBkYXRlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGZvcm1hdE1vbWVudChtLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFtLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG0ubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXQgPSBleHBhbmRGb3JtYXQoZm9ybWF0LCBtLmxvY2FsZURhdGEoKSk7XG4gICAgICAgIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdID0gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKG0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChmb3JtYXQsIGxvY2FsZSkge1xuICAgICAgICB2YXIgaSA9IDU7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKGlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlLmxvbmdEYXRlRm9ybWF0KGlucHV0KSB8fCBpbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoaSA+PSAwICYmIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKGxvY2FsRm9ybWF0dGluZ1Rva2VucywgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKTtcbiAgICAgICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2gxICAgICAgICAgPSAvXFxkLzsgICAgICAgICAgICAvLyAgICAgICAwIC0gOVxuICAgIHZhciBtYXRjaDIgICAgICAgICA9IC9cXGRcXGQvOyAgICAgICAgICAvLyAgICAgIDAwIC0gOTlcbiAgICB2YXIgbWF0Y2gzICAgICAgICAgPSAvXFxkezN9LzsgICAgICAgICAvLyAgICAgMDAwIC0gOTk5XG4gICAgdmFyIG1hdGNoNCAgICAgICAgID0gL1xcZHs0fS87ICAgICAgICAgLy8gICAgMDAwMCAtIDk5OTlcbiAgICB2YXIgbWF0Y2g2ICAgICAgICAgPSAvWystXT9cXGR7Nn0vOyAgICAvLyAtOTk5OTk5IC0gOTk5OTk5XG4gICAgdmFyIG1hdGNoMXRvMiAgICAgID0gL1xcZFxcZD8vOyAgICAgICAgIC8vICAgICAgIDAgLSA5OVxuICAgIHZhciBtYXRjaDN0bzQgICAgICA9IC9cXGRcXGRcXGRcXGQ/LzsgICAgIC8vICAgICA5OTkgLSA5OTk5XG4gICAgdmFyIG1hdGNoNXRvNiAgICAgID0gL1xcZFxcZFxcZFxcZFxcZFxcZD8vOyAvLyAgIDk5OTk5IC0gOTk5OTk5XG4gICAgdmFyIG1hdGNoMXRvMyAgICAgID0gL1xcZHsxLDN9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OVxuICAgIHZhciBtYXRjaDF0bzQgICAgICA9IC9cXGR7MSw0fS87ICAgICAgIC8vICAgICAgIDAgLSA5OTk5XG4gICAgdmFyIG1hdGNoMXRvNiAgICAgID0gL1srLV0/XFxkezEsNn0vOyAgLy8gLTk5OTk5OSAtIDk5OTk5OVxuXG4gICAgdmFyIG1hdGNoVW5zaWduZWQgID0gL1xcZCsvOyAgICAgICAgICAgLy8gICAgICAgMCAtIGluZlxuICAgIHZhciBtYXRjaFNpZ25lZCAgICA9IC9bKy1dP1xcZCsvOyAgICAgIC8vICAgIC1pbmYgLSBpbmZcblxuICAgIHZhciBtYXRjaE9mZnNldCAgICA9IC9afFsrLV1cXGRcXGQ6P1xcZFxcZC9naTsgLy8gKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG4gICAgdmFyIG1hdGNoU2hvcnRPZmZzZXQgPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9naTsgLy8gKzAwIC0wMCArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcblxuICAgIHZhciBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy87IC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXG5cbiAgICAvLyBhbnkgd29yZCAob3IgdHdvKSBjaGFyYWN0ZXJzIG9yIG51bWJlcnMgaW5jbHVkaW5nIHR3by90aHJlZSB3b3JkIG1vbnRoIGluIGFyYWJpYy5cbiAgICAvLyBpbmNsdWRlcyBzY290dGlzaCBnYWVsaWMgdHdvIHdvcmQgYW5kIGh5cGhlbmF0ZWQgbW9udGhzXG4gICAgdmFyIG1hdGNoV29yZCA9IC9bMC05XSpbJ2EtelxcdTAwQTAtXFx1MDVGRlxcdTA3MDAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0rfFtcXHUwNjAwLVxcdTA2RkZcXC9dKyhcXHMqP1tcXHUwNjAwLVxcdTA2RkZdKyl7MSwyfS9pO1xuXG5cbiAgICB2YXIgcmVnZXhlcyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gYWRkUmVnZXhUb2tlbiAodG9rZW4sIHJlZ2V4LCBzdHJpY3RSZWdleCkge1xuICAgICAgICByZWdleGVzW3Rva2VuXSA9IGlzRnVuY3Rpb24ocmVnZXgpID8gcmVnZXggOiBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZURhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiAoaXNTdHJpY3QgJiYgc3RyaWN0UmVnZXgpID8gc3RyaWN0UmVnZXggOiByZWdleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4gKHRva2VuLCBjb25maWcpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHJlZ2V4ZXMsIHRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodW5lc2NhcGVGb3JtYXQodG9rZW4pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWdleGVzW3Rva2VuXShjb25maWcuX3N0cmljdCwgY29uZmlnLl9sb2NhbGUpO1xuICAgIH1cblxuICAgIC8vIENvZGUgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NjE0OTMvaXMtdGhlcmUtYS1yZWdleHAtZXNjYXBlLWZ1bmN0aW9uLWluLWphdmFzY3JpcHRcbiAgICBmdW5jdGlvbiB1bmVzY2FwZUZvcm1hdChzKSB7XG4gICAgICAgIHJldHVybiByZWdleEVzY2FwZShzLnJlcGxhY2UoJ1xcXFwnLCAnJykucmVwbGFjZSgvXFxcXChcXFspfFxcXFwoXFxdKXxcXFsoW15cXF1cXFtdKilcXF18XFxcXCguKS9nLCBmdW5jdGlvbiAobWF0Y2hlZCwgcDEsIHAyLCBwMywgcDQpIHtcbiAgICAgICAgICAgIHJldHVybiBwMSB8fCBwMiB8fCBwMyB8fCBwNDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHMpIHtcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG4gICAgfVxuXG4gICAgdmFyIHRva2VucyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gYWRkUGFyc2VUb2tlbiAodG9rZW4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBpLCBmdW5jID0gY2FsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0b2tlbiA9IFt0b2tlbl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbY2FsbGJhY2tdID0gdG9JbnQoaW5wdXQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRva2Vuc1t0b2tlbltpXV0gPSBmdW5jO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkV2Vla1BhcnNlVG9rZW4gKHRva2VuLCBjYWxsYmFjaykge1xuICAgICAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgICAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XG4gICAgICAgICAgICBjYWxsYmFjayhpbnB1dCwgY29uZmlnLl93LCBjb25maWcsIHRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIGlucHV0LCBjb25maWcpIHtcbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwgJiYgaGFzT3duUHJvcCh0b2tlbnMsIHRva2VuKSkge1xuICAgICAgICAgICAgdG9rZW5zW3Rva2VuXShpbnB1dCwgY29uZmlnLl9hLCBjb25maWcsIHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBZRUFSID0gMDtcbiAgICB2YXIgTU9OVEggPSAxO1xuICAgIHZhciBEQVRFID0gMjtcbiAgICB2YXIgSE9VUiA9IDM7XG4gICAgdmFyIE1JTlVURSA9IDQ7XG4gICAgdmFyIFNFQ09ORCA9IDU7XG4gICAgdmFyIE1JTExJU0VDT05EID0gNjtcbiAgICB2YXIgV0VFSyA9IDc7XG4gICAgdmFyIFdFRUtEQVkgPSA4O1xuXG4gICAgdmFyIGluZGV4T2Y7XG5cbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAgICAgaW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4T2YgPSBmdW5jdGlvbiAobykge1xuICAgICAgICAgICAgLy8gSSBrbm93XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IG8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCArIDEsIDApKS5nZXRVVENEYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ00nLCBbJ01NJywgMl0sICdNbycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGgoKSArIDE7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzU2hvcnQodGhpcywgZm9ybWF0KTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdNTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzKHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ21vbnRoJywgJ00nKTtcblxuICAgIC8vIFBSSU9SSVRZXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ21vbnRoJywgOCk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdNJywgICAgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdNTScsICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ01NTScsICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xuICAgIH0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ01NTU0nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1JlZ2V4KGlzU3RyaWN0KTtcbiAgICB9KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydNJywgJ01NJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbTU9OVEhdID0gdG9JbnQoaW5wdXQpIC0gMTtcbiAgICB9KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydNTU0nLCAnTU1NTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHZhciBtb250aCA9IGNvbmZpZy5fbG9jYWxlLm1vbnRoc1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgICAgICAvLyBpZiB3ZSBkaWRuJ3QgZmluZCBhIG1vbnRoIG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZC5cbiAgICAgICAgaWYgKG1vbnRoICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFycmF5W01PTlRIXSA9IG1vbnRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZE1vbnRoID0gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExPQ0FMRVNcblxuICAgIHZhciBNT05USFNfSU5fRk9STUFUID0gL0Rbb0RdPyhcXFtbXlxcW1xcXV0qXFxdfFxccyspK01NTU0/LztcbiAgICB2YXIgZGVmYXVsdExvY2FsZU1vbnRocyA9ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpO1xuICAgIGZ1bmN0aW9uIGxvY2FsZU1vbnRocyAobSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRocztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpID8gdGhpcy5fbW9udGhzW20ubW9udGgoKV0gOlxuICAgICAgICAgICAgdGhpcy5fbW9udGhzWyh0aGlzLl9tb250aHMuaXNGb3JtYXQgfHwgTU9OVEhTX0lOX0ZPUk1BVCkudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSddW20ubW9udGgoKV07XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCA9ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKTtcbiAgICBmdW5jdGlvbiBsb2NhbGVNb250aHNTaG9ydCAobSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRoc1Nob3J0KSA/IHRoaXMuX21vbnRoc1Nob3J0W20ubW9udGgoKV0gOlxuICAgICAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRbTU9OVEhTX0lOX0ZPUk1BVC50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJ11bbS5tb250aCgpXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bml0c19tb250aF9faGFuZGxlU3RyaWN0UGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSwgaWksIG1vbSwgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IHVzZWRcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgICAgICAgICAgbW9tID0gY3JlYXRlX3V0Y19fY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRocyhtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVNb250aHNQYXJzZSAobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgICAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuaXRzX21vbnRoX19oYW5kbGVTdHJpY3RQYXJzZS5jYWxsKHRoaXMsIG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogYWRkIHNvcnRpbmdcbiAgICAgICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlclxuICAgICAgICAvLyBzZWUgc29ydGluZyBpbiBjb21wdXRlTW9udGhzUGFyc2VcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICAgICAgbW9tID0gY3JlYXRlX3V0Y19fY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsICdpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKS5yZXBsYWNlKCcuJywgJycpICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdHJpY3QgJiYgIXRoaXMuX21vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSAnXicgKyB0aGlzLm1vbnRocyhtb20sICcnKSArICd8XicgKyB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NTScgJiYgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NJyAmJiB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX21vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgZnVuY3Rpb24gc2V0TW9udGggKG1vbSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGRheU9mTW9udGg7XG5cbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAvLyBObyBvcFxuICAgICAgICAgICAgcmV0dXJuIG1vbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtb20ubG9jYWxlRGF0YSgpLm1vbnRoc1BhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBbm90aGVyIHNpbGVudCBmYWlsdXJlP1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF5T2ZNb250aCA9IE1hdGgubWluKG1vbS5kYXRlKCksIGRheXNJbk1vbnRoKG1vbS55ZWFyKCksIHZhbHVlKSk7XG4gICAgICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyAnTW9udGgnXSh2YWx1ZSwgZGF5T2ZNb250aCk7XG4gICAgICAgIHJldHVybiBtb207XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0TW9udGggKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzZXRNb250aCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB1dGlsc19ob29rc19faG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0X3NldF9fZ2V0KHRoaXMsICdNb250aCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGF5c0luTW9udGggKCkge1xuICAgICAgICByZXR1cm4gZGF5c0luTW9udGgodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSk7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xuICAgIGZ1bmN0aW9uIG1vbnRoc1Nob3J0UmVnZXggKGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZU1vbnRoc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdE1vbnRoc1JlZ2V4ID0gbWF0Y2hXb3JkO1xuICAgIGZ1bmN0aW9uIG1vbnRoc1JlZ2V4IChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBkZWZhdWx0TW9udGhzUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlTW9udGhzUGFyc2UgKCkge1xuICAgICAgICBmdW5jdGlvbiBjbXBMZW5SZXYoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2hvcnRQaWVjZXMgPSBbXSwgbG9uZ1BpZWNlcyA9IFtdLCBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgaSwgbW9tO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVfdXRjX19jcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgICAgIHNob3J0UGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChtb20sICcnKSk7XG4gICAgICAgICAgICBsb25nUGllY2VzLnB1c2godGhpcy5tb250aHMobW9tLCAnJykpO1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaCh0aGlzLm1vbnRocyhtb20sICcnKSk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcbiAgICAgICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgICAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgICAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBzaG9ydFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKHNob3J0UGllY2VzW2ldKTtcbiAgICAgICAgICAgIGxvbmdQaWVjZXNbaV0gPSByZWdleEVzY2FwZShsb25nUGllY2VzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9tb250aHNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgICAgICB0aGlzLl9tb250aHNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIGxvbmdQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgICAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgc2hvcnRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdZJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgeSA9IHRoaXMueWVhcigpO1xuICAgICAgICByZXR1cm4geSA8PSA5OTk5ID8gJycgKyB5IDogJysnICsgeTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVknLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55ZWFyKCkgJSAxMDA7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVknLCAgIDRdLCAgICAgICAwLCAneWVhcicpO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVknLCAgNV0sICAgICAgIDAsICd5ZWFyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydZWVlZWVknLCA2LCB0cnVlXSwgMCwgJ3llYXInKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygneWVhcicsICd5Jyk7XG5cbiAgICAvLyBQUklPUklUSUVTXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ3llYXInLCAxKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ1knLCAgICAgIG1hdGNoU2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCdZWScsICAgICBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignWVlZWScsICAgbWF0Y2gxdG80LCBtYXRjaDQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1lZWVlZJywgIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbiAgICBhZGRSZWdleFRva2VuKCdZWVlZWVknLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnWVlZWVknLCAnWVlZWVlZJ10sIFlFQVIpO1xuICAgIGFkZFBhcnNlVG9rZW4oJ1lZWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W1lFQVJdID0gaW5wdXQubGVuZ3RoID09PSAyID8gdXRpbHNfaG9va3NfX2hvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSA6IHRvSW50KGlucHV0KTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbWUVBUl0gPSB1dGlsc19ob29rc19faG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ1knLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W1lFQVJdID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICB9KTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIGZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikge1xuICAgICAgICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0xlYXBZZWFyKHllYXIpIHtcbiAgICAgICAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwO1xuICAgIH1cblxuICAgIC8vIEhPT0tTXG5cbiAgICB1dGlsc19ob29rc19faG9va3MucGFyc2VUd29EaWdpdFllYXIgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHRvSW50KGlucHV0KSArICh0b0ludChpbnB1dCkgPiA2OCA/IDE5MDAgOiAyMDAwKTtcbiAgICB9O1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgdmFyIGdldFNldFllYXIgPSBtYWtlR2V0U2V0KCdGdWxsWWVhcicsIHRydWUpO1xuXG4gICAgZnVuY3Rpb24gZ2V0SXNMZWFwWWVhciAoKSB7XG4gICAgICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcigpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEYXRlICh5LCBtLCBkLCBoLCBNLCBzLCBtcykge1xuICAgICAgICAvL2Nhbid0IGp1c3QgYXBwbHkoKSB0byBjcmVhdGUgYSBkYXRlOlxuICAgICAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTgxMzQ4L2luc3RhbnRpYXRpbmctYS1qYXZhc2NyaXB0LW9iamVjdC1ieS1jYWxsaW5nLXByb3RvdHlwZS1jb25zdHJ1Y3Rvci1hcHBseVxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKTtcblxuICAgICAgICAvL3RoZSBkYXRlIGNvbnN0cnVjdG9yIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgICAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDAgJiYgaXNGaW5pdGUoZGF0ZS5nZXRGdWxsWWVhcigpKSkge1xuICAgICAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVVVENEYXRlICh5KSB7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgLy90aGUgRGF0ZS5VVEMgZnVuY3Rpb24gcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCAmJiBpc0Zpbml0ZShkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpKSB7XG4gICAgICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIC8vIHN0YXJ0LW9mLWZpcnN0LXdlZWsgLSBzdGFydC1vZi15ZWFyXG4gICAgZnVuY3Rpb24gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSB7XG4gICAgICAgIHZhciAvLyBmaXJzdC13ZWVrIGRheSAtLSB3aGljaCBqYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayAoNCBmb3IgaXNvLCAxIGZvciBvdGhlcilcbiAgICAgICAgICAgIGZ3ZCA9IDcgKyBkb3cgLSBkb3ksXG4gICAgICAgICAgICAvLyBmaXJzdC13ZWVrIGRheSBsb2NhbCB3ZWVrZGF5IC0tIHdoaWNoIGxvY2FsIHdlZWtkYXkgaXMgZndkXG4gICAgICAgICAgICBmd2RsdyA9ICg3ICsgY3JlYXRlVVRDRGF0ZSh5ZWFyLCAwLCBmd2QpLmdldFVUQ0RheSgpIC0gZG93KSAlIDc7XG5cbiAgICAgICAgcmV0dXJuIC1md2RsdyArIGZ3ZCAtIDE7XG4gICAgfVxuXG4gICAgLy9odHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUjQ2FsY3VsYXRpbmdfYV9kYXRlX2dpdmVuX3RoZV95ZWFyLjJDX3dlZWtfbnVtYmVyX2FuZF93ZWVrZGF5XG4gICAgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKHllYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgICAgIHZhciBsb2NhbFdlZWtkYXkgPSAoNyArIHdlZWtkYXkgLSBkb3cpICUgNyxcbiAgICAgICAgICAgIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpLFxuICAgICAgICAgICAgZGF5T2ZZZWFyID0gMSArIDcgKiAod2VlayAtIDEpICsgbG9jYWxXZWVrZGF5ICsgd2Vla09mZnNldCxcbiAgICAgICAgICAgIHJlc1llYXIsIHJlc0RheU9mWWVhcjtcblxuICAgICAgICBpZiAoZGF5T2ZZZWFyIDw9IDApIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSB5ZWFyIC0gMTtcbiAgICAgICAgICAgIHJlc0RheU9mWWVhciA9IGRheXNJblllYXIocmVzWWVhcikgKyBkYXlPZlllYXI7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyKSkge1xuICAgICAgICAgICAgcmVzWWVhciA9IHllYXIgKyAxO1xuICAgICAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5T2ZZZWFyIC0gZGF5c0luWWVhcih5ZWFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSB5ZWFyO1xuICAgICAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5T2ZZZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHllYXI6IHJlc1llYXIsXG4gICAgICAgICAgICBkYXlPZlllYXI6IHJlc0RheU9mWWVhclxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdlZWtPZlllYXIobW9tLCBkb3csIGRveSkge1xuICAgICAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldChtb20ueWVhcigpLCBkb3csIGRveSksXG4gICAgICAgICAgICB3ZWVrID0gTWF0aC5mbG9vcigobW9tLmRheU9mWWVhcigpIC0gd2Vla09mZnNldCAtIDEpIC8gNykgKyAxLFxuICAgICAgICAgICAgcmVzV2VlaywgcmVzWWVhcjtcblxuICAgICAgICBpZiAod2VlayA8IDEpIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpIC0gMTtcbiAgICAgICAgICAgIHJlc1dlZWsgPSB3ZWVrICsgd2Vla3NJblllYXIocmVzWWVhciwgZG93LCBkb3kpO1xuICAgICAgICB9IGVsc2UgaWYgKHdlZWsgPiB3ZWVrc0luWWVhcihtb20ueWVhcigpLCBkb3csIGRveSkpIHtcbiAgICAgICAgICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpO1xuICAgICAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCkgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCk7XG4gICAgICAgICAgICByZXNXZWVrID0gd2VlaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3ZWVrOiByZXNXZWVrLFxuICAgICAgICAgICAgeWVhcjogcmVzWWVhclxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdlZWtzSW5ZZWFyKHllYXIsIGRvdywgZG95KSB7XG4gICAgICAgIHZhciB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSxcbiAgICAgICAgICAgIHdlZWtPZmZzZXROZXh0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIgKyAxLCBkb3csIGRveSk7XG4gICAgICAgIHJldHVybiAoZGF5c0luWWVhcih5ZWFyKSAtIHdlZWtPZmZzZXQgKyB3ZWVrT2Zmc2V0TmV4dCkgLyA3O1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCd3JywgWyd3dycsIDJdLCAnd28nLCAnd2VlaycpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdXJywgWydXVycsIDJdLCAnV28nLCAnaXNvV2VlaycpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCd3ZWVrJywgJ3cnKTtcbiAgICBhZGRVbml0QWxpYXMoJ2lzb1dlZWsnLCAnVycpO1xuXG4gICAgLy8gUFJJT1JJVElFU1xuXG4gICAgYWRkVW5pdFByaW9yaXR5KCd3ZWVrJywgNSk7XG4gICAgYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrJywgNSk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCd3JywgIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignd3cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignVycsICBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1dXJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oWyd3JywgJ3d3JywgJ1cnLCAnV1cnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDEpXSA9IHRvSW50KGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIC8vIExPQ0FMRVNcblxuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWsgKG1vbSkge1xuICAgICAgICByZXR1cm4gd2Vla09mWWVhcihtb20sIHRoaXMuX3dlZWsuZG93LCB0aGlzLl93ZWVrLmRveSkud2VlaztcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZVdlZWsgPSB7XG4gICAgICAgIGRvdyA6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICBkb3kgOiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZXZWVrICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWsuZG93O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZZZWFyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWsuZG95O1xuICAgIH1cblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldFdlZWsgKGlucHV0KSB7XG4gICAgICAgIHZhciB3ZWVrID0gdGhpcy5sb2NhbGVEYXRhKCkud2Vlayh0aGlzKTtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldElTT1dlZWsgKGlucHV0KSB7XG4gICAgICAgIHZhciB3ZWVrID0gd2Vla09mWWVhcih0aGlzLCAxLCA0KS53ZWVrO1xuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2QnLCAwLCAnZG8nLCAnZGF5Jyk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5c01pbih0aGlzLCBmb3JtYXQpO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2RkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzU2hvcnQodGhpcywgZm9ybWF0KTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdkZGRkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXModGhpcywgZm9ybWF0KTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdlJywgMCwgMCwgJ3dlZWtkYXknKTtcbiAgICBhZGRGb3JtYXRUb2tlbignRScsIDAsIDAsICdpc29XZWVrZGF5Jyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ2RheScsICdkJyk7XG4gICAgYWRkVW5pdEFsaWFzKCd3ZWVrZGF5JywgJ2UnKTtcbiAgICBhZGRVbml0QWxpYXMoJ2lzb1dlZWtkYXknLCAnRScpO1xuXG4gICAgLy8gUFJJT1JJVFlcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2RheScsIDExKTtcbiAgICBhZGRVbml0UHJpb3JpdHkoJ3dlZWtkYXknLCAxMSk7XG4gICAgYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrZGF5JywgMTEpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignZCcsICAgIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignZScsICAgIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignRScsICAgIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignZGQnLCAgIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNNaW5SZWdleChpc1N0cmljdCk7XG4gICAgfSk7XG4gICAgYWRkUmVnZXhUb2tlbignZGRkJywgICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCk7XG4gICAgfSk7XG4gICAgYWRkUmVnZXhUb2tlbignZGRkZCcsICAgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1JlZ2V4KGlzU3RyaWN0KTtcbiAgICB9KTtcblxuICAgIGFkZFdlZWtQYXJzZVRva2VuKFsnZGQnLCAnZGRkJywgJ2RkZGQnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHZhciB3ZWVrZGF5ID0gY29uZmlnLl9sb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAgICAgLy8gaWYgd2UgZGlkbid0IGdldCBhIHdlZWtkYXkgbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkXG4gICAgICAgIGlmICh3ZWVrZGF5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHdlZWsuZCA9IHdlZWtkYXk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkV2Vla2RheSA9IGlucHV0O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBhZGRXZWVrUGFyc2VUb2tlbihbJ2QnLCAnZScsICdFJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB3ZWVrW3Rva2VuXSA9IHRvSW50KGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIGZ1bmN0aW9uIHBhcnNlV2Vla2RheShpbnB1dCwgbG9jYWxlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzTmFOKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGlucHV0LCAxMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCA9IGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KTtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlSXNvV2Vla2RheShpbnB1dCwgbG9jYWxlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpICUgNyB8fCA3O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc05hTihpbnB1dCkgPyBudWxsIDogaW5wdXQ7XG4gICAgfVxuXG4gICAgLy8gTE9DQUxFU1xuXG4gICAgdmFyIGRlZmF1bHRMb2NhbGVXZWVrZGF5cyA9ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKTtcbiAgICBmdW5jdGlvbiBsb2NhbGVXZWVrZGF5cyAobSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX3dlZWtkYXlzKSA/IHRoaXMuX3dlZWtkYXlzW20uZGF5KCldIDpcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzW3RoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnXVttLmRheSgpXTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQgPSAnU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0Jy5zcGxpdCgnXycpO1xuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzU2hvcnQgKG0pIHtcbiAgICAgICAgcmV0dXJuIChtKSA/IHRoaXMuX3dlZWtkYXlzU2hvcnRbbS5kYXkoKV0gOiB0aGlzLl93ZWVrZGF5c1Nob3J0O1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4gPSAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyk7XG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNNaW4gKG0pIHtcbiAgICAgICAgcmV0dXJuIChtKSA/IHRoaXMuX3dlZWtkYXlzTWluW20uZGF5KCldIDogdGhpcy5fd2Vla2RheXNNaW47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGF5X29mX3dlZWtfX2hhbmRsZVN0cmljdFBhcnNlKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSwgaWksIG1vbSwgbGxjID0gd2Vla2RheU5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7ICsraSkge1xuICAgICAgICAgICAgICAgIG1vbSA9IGNyZWF0ZV91dGNfX2NyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c01pbihtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1BhcnNlICh3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICAgICAgdmFyIGksIG1vbSwgcmVnZXg7XG5cbiAgICAgICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgcmV0dXJuIGRheV9vZl93ZWVrX19oYW5kbGVTdHJpY3RQYXJzZS5jYWxsKHRoaXMsIHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuXG4gICAgICAgICAgICBtb20gPSBjcmVhdGVfdXRjX19jcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFwuPycpICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFwuPycpICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJykucmVwbGFjZSgnLicsICdcXC4/JykgKyAnJCcsICdpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgICAgICByZWdleCA9ICdeJyArIHRoaXMud2Vla2RheXMobW9tLCAnJykgKyAnfF4nICsgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpICsgJ3xeJyArIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZGQnICYmIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZGQnICYmIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGQnICYmIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRTZXREYXlPZldlZWsgKGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF5ID0gdGhpcy5faXNVVEMgPyB0aGlzLl9kLmdldFVUQ0RheSgpIDogdGhpcy5fZC5nZXREYXkoKTtcbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlucHV0ID0gcGFyc2VXZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoaW5wdXQgLSBkYXksICdkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrIChpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdlZWtkYXkgPSAodGhpcy5kYXkoKSArIDcgLSB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3cpICUgNztcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrZGF5IDogdGhpcy5hZGQoaW5wdXQgLSB3ZWVrZGF5LCAnZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldElTT0RheU9mV2VlayAoaW5wdXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmVoYXZlcyB0aGUgc2FtZSBhcyBtb21lbnQjZGF5IGV4Y2VwdFxuICAgICAgICAvLyBhcyBhIGdldHRlciwgcmV0dXJucyA3IGluc3RlYWQgb2YgMCAoMS03IHJhbmdlIGluc3RlYWQgb2YgMC02KVxuICAgICAgICAvLyBhcyBhIHNldHRlciwgc3VuZGF5IHNob3VsZCBiZWxvbmcgdG8gdGhlIHByZXZpb3VzIHdlZWsuXG5cbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5ID0gcGFyc2VJc29XZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXkodGhpcy5kYXkoKSAlIDcgPyB3ZWVrZGF5IDogd2Vla2RheSAtIDcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF5KCkgfHwgNztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWZhdWx0V2Vla2RheXNSZWdleCA9IG1hdGNoV29yZDtcbiAgICBmdW5jdGlvbiB3ZWVrZGF5c1JlZ2V4IChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1JlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XG4gICAgZnVuY3Rpb24gd2Vla2RheXNTaG9ydFJlZ2V4IChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWZhdWx0V2Vla2RheXNNaW5SZWdleCA9IG1hdGNoV29yZDtcbiAgICBmdW5jdGlvbiB3ZWVrZGF5c01pblJlZ2V4IChpc1N0cmljdCkge1xuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNNaW5SZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjb21wdXRlV2Vla2RheXNQYXJzZSAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtaW5QaWVjZXMgPSBbXSwgc2hvcnRQaWVjZXMgPSBbXSwgbG9uZ1BpZWNlcyA9IFtdLCBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgaSwgbW9tLCBtaW5wLCBzaG9ydHAsIGxvbmdwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZV91dGNfX2NyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgIG1pbnAgPSB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpO1xuICAgICAgICAgICAgc2hvcnRwID0gdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpO1xuICAgICAgICAgICAgbG9uZ3AgPSB0aGlzLndlZWtkYXlzKG1vbSwgJycpO1xuICAgICAgICAgICAgbWluUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgICAgICBzaG9ydFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICAgICAgICBsb25nUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChtaW5wKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgd2Vla2RheSAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgICAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgICAgIG1pblBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XG4gICAgICAgICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBsb25nUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgc2hvcnRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWluUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBmdW5jdGlvbiBoRm9ybWF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3VycygpICUgMTIgfHwgMTI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga0Zvcm1hdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMoKSB8fCAyNDtcbiAgICB9XG5cbiAgICBhZGRGb3JtYXRUb2tlbignSCcsIFsnSEgnLCAyXSwgMCwgJ2hvdXInKTtcbiAgICBhZGRGb3JtYXRUb2tlbignaCcsIFsnaGgnLCAyXSwgMCwgaEZvcm1hdCk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ2snLCBbJ2trJywgMl0sIDAsIGtGb3JtYXQpO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2htbScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcnICsgaEZvcm1hdC5hcHBseSh0aGlzKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdobW1zcycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcnICsgaEZvcm1hdC5hcHBseSh0aGlzKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKSArXG4gICAgICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMik7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignSG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJycgKyB0aGlzLmhvdXJzKCkgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignSG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnJyArIHRoaXMuaG91cnMoKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKSArXG4gICAgICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMik7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBtZXJpZGllbSAodG9rZW4sIGxvd2VyY2FzZSkge1xuICAgICAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1lcmlkaWVtKHRoaXMuaG91cnMoKSwgdGhpcy5taW51dGVzKCksIGxvd2VyY2FzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1lcmlkaWVtKCdhJywgdHJ1ZSk7XG4gICAgbWVyaWRpZW0oJ0EnLCBmYWxzZSk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ2hvdXInLCAnaCcpO1xuXG4gICAgLy8gUFJJT1JJVFlcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2hvdXInLCAxMyk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBmdW5jdGlvbiBtYXRjaE1lcmlkaWVtIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuX21lcmlkaWVtUGFyc2U7XG4gICAgfVxuXG4gICAgYWRkUmVnZXhUb2tlbignYScsICBtYXRjaE1lcmlkaWVtKTtcbiAgICBhZGRSZWdleFRva2VuKCdBJywgIG1hdGNoTWVyaWRpZW0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0gnLCAgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdoJywgIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignSEgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignaGgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbiAgICBhZGRSZWdleFRva2VuKCdobW0nLCBtYXRjaDN0bzQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2htbXNzJywgbWF0Y2g1dG82KTtcbiAgICBhZGRSZWdleFRva2VuKCdIbW0nLCBtYXRjaDN0bzQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0htbXNzJywgbWF0Y2g1dG82KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydIJywgJ0hIJ10sIEhPVVIpO1xuICAgIGFkZFBhcnNlVG9rZW4oWydhJywgJ0EnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5faXNQbSA9IGNvbmZpZy5fbG9jYWxlLmlzUE0oaW5wdXQpO1xuICAgICAgICBjb25maWcuX21lcmlkaWVtID0gaW5wdXQ7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbihbJ2gnLCAnaGgnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQpO1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdobW0nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgICAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdobW1zcycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQ7XG4gICAgICAgIHZhciBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICAgICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xuICAgICAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICAgICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ0htbScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICB2YXIgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICAgICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbignSG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgdmFyIHBvczEgPSBpbnB1dC5sZW5ndGggLSA0O1xuICAgICAgICB2YXIgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICAgICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgICAgIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xuICAgIH0pO1xuXG4gICAgLy8gTE9DQUxFU1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlSXNQTSAoaW5wdXQpIHtcbiAgICAgICAgLy8gSUU4IFF1aXJrcyBNb2RlICYgSUU3IFN0YW5kYXJkcyBNb2RlIGRvIG5vdCBhbGxvdyBhY2Nlc3Npbmcgc3RyaW5ncyBsaWtlIGFycmF5c1xuICAgICAgICAvLyBVc2luZyBjaGFyQXQgc2hvdWxkIGJlIG1vcmUgY29tcGF0aWJsZS5cbiAgICAgICAgcmV0dXJuICgoaW5wdXQgKyAnJykudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICdwJyk7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlID0gL1thcF1cXC4/bT9cXC4/L2k7XG4gICAgZnVuY3Rpb24gbG9jYWxlTWVyaWRpZW0gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgICAgIGlmIChob3VycyA+IDExKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdwbScgOiAnUE0nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnYW0nIDogJ0FNJztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgLy8gU2V0dGluZyB0aGUgaG91ciBzaG91bGQga2VlcCB0aGUgdGltZSwgYmVjYXVzZSB0aGUgdXNlciBleHBsaWNpdGx5XG4gICAgLy8gc3BlY2lmaWVkIHdoaWNoIGhvdXIgaGUgd2FudHMuIFNvIHRyeWluZyB0byBtYWludGFpbiB0aGUgc2FtZSBob3VyIChpblxuICAgIC8vIGEgbmV3IHRpbWV6b25lKSBtYWtlcyBzZW5zZS4gQWRkaW5nL3N1YnRyYWN0aW5nIGhvdXJzIGRvZXMgbm90IGZvbGxvd1xuICAgIC8vIHRoaXMgcnVsZS5cbiAgICB2YXIgZ2V0U2V0SG91ciA9IG1ha2VHZXRTZXQoJ0hvdXJzJywgdHJ1ZSk7XG5cbiAgICB2YXIgYmFzZUNvbmZpZyA9IHtcbiAgICAgICAgY2FsZW5kYXI6IGRlZmF1bHRDYWxlbmRhcixcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IGRlZmF1bHRMb25nRGF0ZUZvcm1hdCxcbiAgICAgICAgaW52YWxpZERhdGU6IGRlZmF1bHRJbnZhbGlkRGF0ZSxcbiAgICAgICAgb3JkaW5hbDogZGVmYXVsdE9yZGluYWwsXG4gICAgICAgIG9yZGluYWxQYXJzZTogZGVmYXVsdE9yZGluYWxQYXJzZSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiBkZWZhdWx0UmVsYXRpdmVUaW1lLFxuXG4gICAgICAgIG1vbnRoczogZGVmYXVsdExvY2FsZU1vbnRocyxcbiAgICAgICAgbW9udGhzU2hvcnQ6IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcblxuICAgICAgICB3ZWVrOiBkZWZhdWx0TG9jYWxlV2VlayxcblxuICAgICAgICB3ZWVrZGF5czogZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxuICAgICAgICB3ZWVrZGF5c01pbjogZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCxcblxuICAgICAgICBtZXJpZGllbVBhcnNlOiBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZVxuICAgIH07XG5cbiAgICAvLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsb2NhbGUgY29uZmlnIGZpbGVzXG4gICAgdmFyIGxvY2FsZXMgPSB7fTtcbiAgICB2YXIgZ2xvYmFsTG9jYWxlO1xuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID8ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJykgOiBrZXk7XG4gICAgfVxuXG4gICAgLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XG4gICAgLy8gdHJ5IFsnZW4tYXUnLCAnZW4tZ2InXSBhcyAnZW4tYXUnLCAnZW4tZ2InLCAnZW4nLCBhcyBpbiBtb3ZlIHRocm91Z2ggdGhlIGxpc3QgdHJ5aW5nIGVhY2hcbiAgICAvLyBzdWJzdHJpbmcgZnJvbSBtb3N0IHNwZWNpZmljIHRvIGxlYXN0LCBidXQgbW92ZSB0byB0aGUgbmV4dCBhcnJheSBpdGVtIGlmIGl0J3MgYSBtb3JlIHNwZWNpZmljIHZhcmlhbnQgdGhhbiB0aGUgY3VycmVudCByb290XG4gICAgZnVuY3Rpb24gY2hvb3NlTG9jYWxlKG5hbWVzKSB7XG4gICAgICAgIHZhciBpID0gMCwgaiwgbmV4dCwgbG9jYWxlLCBzcGxpdDtcblxuICAgICAgICB3aGlsZSAoaSA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBqID0gc3BsaXQubGVuZ3RoO1xuICAgICAgICAgICAgbmV4dCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpICsgMV0pO1xuICAgICAgICAgICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShzcGxpdC5zbGljZSgwLCBqKS5qb2luKCctJykpO1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHQgJiYgbmV4dC5sZW5ndGggPj0gaiAmJiBjb21wYXJlQXJyYXlzKHNwbGl0LCBuZXh0LCB0cnVlKSA+PSBqIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvL3RoZSBuZXh0IGFycmF5IGl0ZW0gaXMgYmV0dGVyIHRoYW4gYSBzaGFsbG93ZXIgc3Vic3RyaW5nIG9mIHRoaXMgb25lXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lKSB7XG4gICAgICAgIHZhciBvbGRMb2NhbGUgPSBudWxsO1xuICAgICAgICAvLyBUT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byByZWdpc3RlciBhbmQgbG9hZCBhbGwgdGhlIGxvY2FsZXMgaW4gTm9kZVxuICAgICAgICBpZiAoIWxvY2FsZXNbbmFtZV0gJiYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSAmJlxuICAgICAgICAgICAgICAgIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvbGRMb2NhbGUgPSBnbG9iYWxMb2NhbGUuX2FiYnI7XG4gICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgZGVmaW5lTG9jYWxlIGN1cnJlbnRseSBhbHNvIHNldHMgdGhlIGdsb2JhbCBsb2NhbGUsIHdlXG4gICAgICAgICAgICAgICAgLy8gd2FudCB0byB1bmRvIHRoYXQgZm9yIGxhenkgbG9hZGVkIGxvY2FsZXNcbiAgICAgICAgICAgICAgICBsb2NhbGVfbG9jYWxlc19fZ2V0U2V0R2xvYmFsTG9jYWxlKG9sZExvY2FsZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbiAgICAvLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuICAgIC8vIGxvY2FsZSBrZXkuXG4gICAgZnVuY3Rpb24gbG9jYWxlX2xvY2FsZXNfX2dldFNldEdsb2JhbExvY2FsZSAoa2V5LCB2YWx1ZXMpIHtcbiAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGxvY2FsZV9sb2NhbGVzX19nZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkZWZpbmVMb2NhbGUoa2V5LCB2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIG1vbWVudC5kdXJhdGlvbi5fbG9jYWxlID0gbW9tZW50Ll9sb2NhbGUgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGdsb2JhbExvY2FsZSA9IGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2xvYmFsTG9jYWxlLl9hYmJyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmluZUxvY2FsZSAobmFtZSwgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgICAgICAgICAgY29uZmlnLmFiYnIgPSBuYW1lO1xuICAgICAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlcHJlY2F0ZVNpbXBsZSgnZGVmaW5lTG9jYWxlT3ZlcnJpZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZSBtb21lbnQudXBkYXRlTG9jYWxlKGxvY2FsZU5hbWUsIGNvbmZpZykgdG8gY2hhbmdlICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FuIGV4aXN0aW5nIGxvY2FsZS4gbW9tZW50LmRlZmluZUxvY2FsZShsb2NhbGVOYW1lLCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb25maWcpIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIGNyZWF0aW5nIGEgbmV3IGxvY2FsZSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9kZWZpbmUtbG9jYWxlLyBmb3IgbW9yZSBpbmZvLicpO1xuICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbbmFtZV0uX2NvbmZpZztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLl9jb25maWc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJlYXQgYXMgaWYgdGhlcmUgaXMgbm8gYmFzZSBjb25maWdcbiAgICAgICAgICAgICAgICAgICAgZGVwcmVjYXRlU2ltcGxlKCdwYXJlbnRMb2NhbGVVbmRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcGVjaWZpZWQgcGFyZW50TG9jYWxlIGlzIG5vdCBkZWZpbmVkIHlldC4gU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvcGFyZW50LWxvY2FsZS8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbmV3IExvY2FsZShtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpKTtcblxuICAgICAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gICAgICAgICAgICBsb2NhbGVfbG9jYWxlc19fZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lLCBjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlLCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgICAgICAgICAgLy8gTUVSR0VcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW25hbWVdLl9jb25maWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgbG9jYWxlID0gbmV3IExvY2FsZShjb25maWcpO1xuICAgICAgICAgICAgbG9jYWxlLnBhcmVudExvY2FsZSA9IGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlO1xuXG4gICAgICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICAgICAgICAgIGxvY2FsZV9sb2NhbGVzX19nZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBwYXNzIG51bGwgZm9yIGNvbmZpZyB0byB1bnVwZGF0ZSwgdXNlZnVsIGZvciB0ZXN0c1xuICAgICAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBsb2NhbGUgZGF0YVxuICAgIGZ1bmN0aW9uIGxvY2FsZV9sb2NhbGVzX19nZXRMb2NhbGUgKGtleSkge1xuICAgICAgICB2YXIgbG9jYWxlO1xuXG4gICAgICAgIGlmIChrZXkgJiYga2V5Ll9sb2NhbGUgJiYga2V5Ll9sb2NhbGUuX2FiYnIpIHtcbiAgICAgICAgICAgIGtleSA9IGtleS5fbG9jYWxlLl9hYmJyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzQXJyYXkoa2V5KSkge1xuICAgICAgICAgICAgLy9zaG9ydC1jaXJjdWl0IGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShrZXkpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaG9vc2VMb2NhbGUoa2V5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVfbG9jYWxlc19fbGlzdExvY2FsZXMoKSB7XG4gICAgICAgIHJldHVybiBrZXlzKGxvY2FsZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3cgKG0pIHtcbiAgICAgICAgdmFyIG92ZXJmbG93O1xuICAgICAgICB2YXIgYSA9IG0uX2E7XG5cbiAgICAgICAgaWYgKGEgJiYgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID09PSAtMikge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPVxuICAgICAgICAgICAgICAgIGFbTU9OVEhdICAgICAgIDwgMCB8fCBhW01PTlRIXSAgICAgICA+IDExICA/IE1PTlRIIDpcbiAgICAgICAgICAgICAgICBhW0RBVEVdICAgICAgICA8IDEgfHwgYVtEQVRFXSAgICAgICAgPiBkYXlzSW5Nb250aChhW1lFQVJdLCBhW01PTlRIXSkgPyBEQVRFIDpcbiAgICAgICAgICAgICAgICBhW0hPVVJdICAgICAgICA8IDAgfHwgYVtIT1VSXSAgICAgICAgPiAyNCB8fCAoYVtIT1VSXSA9PT0gMjQgJiYgKGFbTUlOVVRFXSAhPT0gMCB8fCBhW1NFQ09ORF0gIT09IDAgfHwgYVtNSUxMSVNFQ09ORF0gIT09IDApKSA/IEhPVVIgOlxuICAgICAgICAgICAgICAgIGFbTUlOVVRFXSAgICAgIDwgMCB8fCBhW01JTlVURV0gICAgICA+IDU5ICA/IE1JTlVURSA6XG4gICAgICAgICAgICAgICAgYVtTRUNPTkRdICAgICAgPCAwIHx8IGFbU0VDT05EXSAgICAgID4gNTkgID8gU0VDT05EIDpcbiAgICAgICAgICAgICAgICBhW01JTExJU0VDT05EXSA8IDAgfHwgYVtNSUxMSVNFQ09ORF0gPiA5OTkgPyBNSUxMSVNFQ09ORCA6XG4gICAgICAgICAgICAgICAgLTE7XG5cbiAgICAgICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93RGF5T2ZZZWFyICYmIChvdmVyZmxvdyA8IFlFQVIgfHwgb3ZlcmZsb3cgPiBEQVRFKSkge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93ID0gREFURTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla3MgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dXZWVrZGF5ICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93ID0gV0VFS0RBWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG5cbiAgICAvLyBpc28gODYwMSByZWdleFxuICAgIC8vIDAwMDAtMDAtMDAgMDAwMC1XMDAgb3IgMDAwMC1XMDAtMCArIFQgKyAwMCBvciAwMDowMCBvciAwMDowMDowMCBvciAwMDowMDowMC4wMDAgKyArMDA6MDAgb3IgKzAwMDAgb3IgKzAwKVxuICAgIHZhciBleHRlbmRlZElzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KS0oPzpcXGRcXGQtXFxkXFxkfFdcXGRcXGQtXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86OlxcZFxcZCg/OjpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPy87XG4gICAgdmFyIGJhc2ljSXNvUmVnZXggPSAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pKD86XFxkXFxkXFxkXFxkfFdcXGRcXGRcXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkKSkoPzooVHwgKShcXGRcXGQoPzpcXGRcXGQoPzpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPy87XG5cbiAgICB2YXIgdHpSZWdleCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/LztcblxuICAgIHZhciBpc29EYXRlcyA9IFtcbiAgICAgICAgWydZWVlZWVktTU0tREQnLCAvWystXVxcZHs2fS1cXGRcXGQtXFxkXFxkL10sXG4gICAgICAgIFsnWVlZWS1NTS1ERCcsIC9cXGR7NH0tXFxkXFxkLVxcZFxcZC9dLFxuICAgICAgICBbJ0dHR0ctW1ddV1ctRScsIC9cXGR7NH0tV1xcZFxcZC1cXGQvXSxcbiAgICAgICAgWydHR0dHLVtXXVdXJywgL1xcZHs0fS1XXFxkXFxkLywgZmFsc2VdLFxuICAgICAgICBbJ1lZWVktREREJywgL1xcZHs0fS1cXGR7M30vXSxcbiAgICAgICAgWydZWVlZLU1NJywgL1xcZHs0fS1cXGRcXGQvLCBmYWxzZV0sXG4gICAgICAgIFsnWVlZWVlZTU1ERCcsIC9bKy1dXFxkezEwfS9dLFxuICAgICAgICBbJ1lZWVlNTUREJywgL1xcZHs4fS9dLFxuICAgICAgICAvLyBZWVlZTU0gaXMgTk9UIGFsbG93ZWQgYnkgdGhlIHN0YW5kYXJkXG4gICAgICAgIFsnR0dHR1tXXVdXRScsIC9cXGR7NH1XXFxkezN9L10sXG4gICAgICAgIFsnR0dHR1tXXVdXJywgL1xcZHs0fVdcXGR7Mn0vLCBmYWxzZV0sXG4gICAgICAgIFsnWVlZWURERCcsIC9cXGR7N30vXVxuICAgIF07XG5cbiAgICAvLyBpc28gdGltZSBmb3JtYXRzIGFuZCByZWdleGVzXG4gICAgdmFyIGlzb1RpbWVzID0gW1xuICAgICAgICBbJ0hIOm1tOnNzLlNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGRcXC5cXGQrL10sXG4gICAgICAgIFsnSEg6bW06c3MsU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZCxcXGQrL10sXG4gICAgICAgIFsnSEg6bW06c3MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQvXSxcbiAgICAgICAgWydISDptbScsIC9cXGRcXGQ6XFxkXFxkL10sXG4gICAgICAgIFsnSEhtbXNzLlNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkXFwuXFxkKy9dLFxuICAgICAgICBbJ0hIbW1zcyxTU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZCxcXGQrL10sXG4gICAgICAgIFsnSEhtbXNzJywgL1xcZFxcZFxcZFxcZFxcZFxcZC9dLFxuICAgICAgICBbJ0hIbW0nLCAvXFxkXFxkXFxkXFxkL10sXG4gICAgICAgIFsnSEgnLCAvXFxkXFxkL11cbiAgICBdO1xuXG4gICAgdmFyIGFzcE5ldEpzb25SZWdleCA9IC9eXFwvP0RhdGVcXCgoXFwtP1xcZCspL2k7XG5cbiAgICAvLyBkYXRlIGZyb20gaXNvIGZvcm1hdFxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21JU08oY29uZmlnKSB7XG4gICAgICAgIHZhciBpLCBsLFxuICAgICAgICAgICAgc3RyaW5nID0gY29uZmlnLl9pLFxuICAgICAgICAgICAgbWF0Y2ggPSBleHRlbmRlZElzb1JlZ2V4LmV4ZWMoc3RyaW5nKSB8fCBiYXNpY0lzb1JlZ2V4LmV4ZWMoc3RyaW5nKSxcbiAgICAgICAgICAgIGFsbG93VGltZSwgZGF0ZUZvcm1hdCwgdGltZUZvcm1hdCwgdHpGb3JtYXQ7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pc28gPSB0cnVlO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvRGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzb0RhdGVzW2ldWzFdLmV4ZWMobWF0Y2hbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQgPSBpc29EYXRlc1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dUaW1lID0gaXNvRGF0ZXNbaV1bMl0gIT09IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0ZUZvcm1hdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb1RpbWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNvVGltZXNbaV1bMV0uZXhlYyhtYXRjaFszXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoWzJdIHNob3VsZCBiZSAnVCcgb3Igc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVGb3JtYXQgPSAobWF0Y2hbMl0gfHwgJyAnKSArIGlzb1RpbWVzW2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWxsb3dUaW1lICYmIHRpbWVGb3JtYXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFs0XSkge1xuICAgICAgICAgICAgICAgIGlmICh0elJlZ2V4LmV4ZWMobWF0Y2hbNF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHR6Rm9ybWF0ID0gJ1onO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uZmlnLl9mID0gZGF0ZUZvcm1hdCArICh0aW1lRm9ybWF0IHx8ICcnKSArICh0ekZvcm1hdCB8fCAnJyk7XG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRhdGUgZnJvbSBpc28gZm9ybWF0IG9yIGZhbGxiYWNrXG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZyhjb25maWcpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBhc3BOZXRKc29uUmVnZXguZXhlYyhjb25maWcuX2kpO1xuXG4gICAgICAgIGlmIChtYXRjaGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgrbWF0Y2hlZFsxXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gICAgICAgIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICAgICAgICAgICAgdXRpbHNfaG9va3NfX2hvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1dGlsc19ob29rc19faG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2sgPSBkZXByZWNhdGUoXG4gICAgICAgICd2YWx1ZSBwcm92aWRlZCBpcyBub3QgaW4gYSByZWNvZ25pemVkIElTTyBmb3JtYXQuIG1vbWVudCBjb25zdHJ1Y3Rpb24gZmFsbHMgYmFjayB0byBqcyBEYXRlKCksICcgK1xuICAgICAgICAnd2hpY2ggaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBhbGwgYnJvd3NlcnMgYW5kIHZlcnNpb25zLiBOb24gSVNPIGRhdGUgZm9ybWF0cyBhcmUgJyArXG4gICAgICAgICdkaXNjb3VyYWdlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGFuIHVwY29taW5nIG1ham9yIHJlbGVhc2UuIFBsZWFzZSByZWZlciB0byAnICtcbiAgICAgICAgJ2h0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvanMtZGF0ZS8gZm9yIG1vcmUgaW5mby4nLFxuICAgICAgICBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShjb25maWcuX2kgKyAoY29uZmlnLl91c2VVVEMgPyAnIFVUQycgOiAnJykpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIFBpY2sgdGhlIGZpcnN0IGRlZmluZWQgb2YgdHdvIG9yIHRocmVlIGFyZ3VtZW50cy5cbiAgICBmdW5jdGlvbiBkZWZhdWx0cyhhLCBiLCBjKSB7XG4gICAgICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKSB7XG4gICAgICAgIC8vIGhvb2tzIGlzIGFjdHVhbGx5IHRoZSBleHBvcnRlZCBtb21lbnQgb2JqZWN0XG4gICAgICAgIHZhciBub3dWYWx1ZSA9IG5ldyBEYXRlKHV0aWxzX2hvb2tzX19ob29rcy5ub3coKSk7XG4gICAgICAgIGlmIChjb25maWcuX3VzZVVUQykge1xuICAgICAgICAgICAgcmV0dXJuIFtub3dWYWx1ZS5nZXRVVENGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRVVENNb250aCgpLCBub3dWYWx1ZS5nZXRVVENEYXRlKCldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbbm93VmFsdWUuZ2V0RnVsbFllYXIoKSwgbm93VmFsdWUuZ2V0TW9udGgoKSwgbm93VmFsdWUuZ2V0RGF0ZSgpXTtcbiAgICB9XG5cbiAgICAvLyBjb252ZXJ0IGFuIGFycmF5IHRvIGEgZGF0ZS5cbiAgICAvLyB0aGUgYXJyYXkgc2hvdWxkIG1pcnJvciB0aGUgcGFyYW1ldGVycyBiZWxvd1xuICAgIC8vIG5vdGU6IGFsbCB2YWx1ZXMgcGFzdCB0aGUgeWVhciBhcmUgb3B0aW9uYWwgYW5kIHdpbGwgZGVmYXVsdCB0byB0aGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxuICAgIC8vIFt5ZWFyLCBtb250aCwgZGF5ICwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXVxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21BcnJheSAoY29uZmlnKSB7XG4gICAgICAgIHZhciBpLCBkYXRlLCBpbnB1dCA9IFtdLCBjdXJyZW50RGF0ZSwgeWVhclRvVXNlO1xuXG4gICAgICAgIGlmIChjb25maWcuX2QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGVBcnJheShjb25maWcpO1xuXG4gICAgICAgIC8vY29tcHV0ZSBkYXkgb2YgdGhlIHllYXIgZnJvbSB3ZWVrcyBhbmQgd2Vla2RheXNcbiAgICAgICAgaWYgKGNvbmZpZy5fdyAmJiBjb25maWcuX2FbREFURV0gPT0gbnVsbCAmJiBjb25maWcuX2FbTU9OVEhdID09IG51bGwpIHtcbiAgICAgICAgICAgIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiB0aGUgZGF5IG9mIHRoZSB5ZWFyIGlzIHNldCwgZmlndXJlIG91dCB3aGF0IGl0IGlzXG4gICAgICAgIGlmIChjb25maWcuX2RheU9mWWVhcikge1xuICAgICAgICAgICAgeWVhclRvVXNlID0gZGVmYXVsdHMoY29uZmlnLl9hW1lFQVJdLCBjdXJyZW50RGF0ZVtZRUFSXSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maWcuX2RheU9mWWVhciA+IGRheXNJblllYXIoeWVhclRvVXNlKSkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd0RheU9mWWVhciA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKHllYXJUb1VzZSwgMCwgY29uZmlnLl9kYXlPZlllYXIpO1xuICAgICAgICAgICAgY29uZmlnLl9hW01PTlRIXSA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtEQVRFXSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IGRhdGUuXG4gICAgICAgIC8vICogaWYgbm8geWVhciwgbW9udGgsIGRheSBvZiBtb250aCBhcmUgZ2l2ZW4sIGRlZmF1bHQgdG8gdG9kYXlcbiAgICAgICAgLy8gKiBpZiBkYXkgb2YgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgbW9udGggYW5kIHllYXJcbiAgICAgICAgLy8gKiBpZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBvbmx5IHllYXJcbiAgICAgICAgLy8gKiBpZiB5ZWFyIGlzIGdpdmVuLCBkb24ndCBkZWZhdWx0IGFueXRoaW5nXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAzICYmIGNvbmZpZy5fYVtpXSA9PSBudWxsOyArK2kpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gY3VycmVudERhdGVbaV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBaZXJvIG91dCB3aGF0ZXZlciB3YXMgbm90IGRlZmF1bHRlZCwgaW5jbHVkaW5nIHRpbWVcbiAgICAgICAgZm9yICg7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gKGNvbmZpZy5fYVtpXSA9PSBudWxsKSA/IChpID09PSAyID8gMSA6IDApIDogY29uZmlnLl9hW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIDI0OjAwOjAwLjAwMFxuICAgICAgICBpZiAoY29uZmlnLl9hW0hPVVJdID09PSAyNCAmJlxuICAgICAgICAgICAgICAgIGNvbmZpZy5fYVtNSU5VVEVdID09PSAwICYmXG4gICAgICAgICAgICAgICAgY29uZmlnLl9hW1NFQ09ORF0gPT09IDAgJiZcbiAgICAgICAgICAgICAgICBjb25maWcuX2FbTUlMTElTRUNPTkRdID09PSAwKSB7XG4gICAgICAgICAgICBjb25maWcuX25leHREYXkgPSB0cnVlO1xuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy5fZCA9IChjb25maWcuX3VzZVVUQyA/IGNyZWF0ZVVUQ0RhdGUgOiBjcmVhdGVEYXRlKS5hcHBseShudWxsLCBpbnB1dCk7XG4gICAgICAgIC8vIEFwcGx5IHRpbWV6b25lIG9mZnNldCBmcm9tIGlucHV0LiBUaGUgYWN0dWFsIHV0Y09mZnNldCBjYW4gYmUgY2hhbmdlZFxuICAgICAgICAvLyB3aXRoIHBhcnNlWm9uZS5cbiAgICAgICAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLl9uZXh0RGF5KSB7XG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAyNDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpIHtcbiAgICAgICAgdmFyIHcsIHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSwgdGVtcCwgd2Vla2RheU92ZXJmbG93O1xuXG4gICAgICAgIHcgPSBjb25maWcuX3c7XG4gICAgICAgIGlmICh3LkdHICE9IG51bGwgfHwgdy5XICE9IG51bGwgfHwgdy5FICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRvdyA9IDE7XG4gICAgICAgICAgICBkb3kgPSA0O1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIHRha2UgdGhlIGN1cnJlbnQgaXNvV2Vla1llYXIsIGJ1dCB0aGF0IGRlcGVuZHMgb25cbiAgICAgICAgICAgIC8vIGhvdyB3ZSBpbnRlcnByZXQgbm93IChsb2NhbCwgdXRjLCBmaXhlZCBvZmZzZXQpLiBTbyBjcmVhdGVcbiAgICAgICAgICAgIC8vIGEgbm93IHZlcnNpb24gb2YgY3VycmVudCBjb25maWcgKHRha2UgbG9jYWwvdXRjL29mZnNldCBmbGFncywgYW5kXG4gICAgICAgICAgICAvLyBjcmVhdGUgbm93KS5cbiAgICAgICAgICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5HRywgY29uZmlnLl9hW1lFQVJdLCB3ZWVrT2ZZZWFyKGxvY2FsX19jcmVhdGVMb2NhbCgpLCAxLCA0KS55ZWFyKTtcbiAgICAgICAgICAgIHdlZWsgPSBkZWZhdWx0cyh3LlcsIDEpO1xuICAgICAgICAgICAgd2Vla2RheSA9IGRlZmF1bHRzKHcuRSwgMSk7XG4gICAgICAgICAgICBpZiAod2Vla2RheSA8IDEgfHwgd2Vla2RheSA+IDcpIHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG93ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG93O1xuICAgICAgICAgICAgZG95ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG95O1xuXG4gICAgICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuZ2csIGNvbmZpZy5fYVtZRUFSXSwgd2Vla09mWWVhcihsb2NhbF9fY3JlYXRlTG9jYWwoKSwgZG93LCBkb3kpLnllYXIpO1xuICAgICAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcudywgMSk7XG5cbiAgICAgICAgICAgIGlmICh3LmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIHdlZWtkYXkgLS0gbG93IGRheSBudW1iZXJzIGFyZSBjb25zaWRlcmVkIG5leHQgd2Vla1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSB3LmQ7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPCAwIHx8IHdlZWtkYXkgPiA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh3LmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGxvY2FsIHdlZWtkYXkgLS0gY291bnRpbmcgc3RhcnRzIGZyb20gYmVnaW5pbmcgb2Ygd2Vla1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSB3LmUgKyBkb3c7XG4gICAgICAgICAgICAgICAgaWYgKHcuZSA8IDAgfHwgdy5lID4gNikge1xuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB0byBiZWdpbmluZyBvZiB3ZWVrXG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IGRvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAod2VlayA8IDEgfHwgd2VlayA+IHdlZWtzSW5ZZWFyKHdlZWtZZWFyLCBkb3csIGRveSkpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh3ZWVrZGF5T3ZlcmZsb3cgIT0gbnVsbCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla2RheSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gICAgICAgICAgICBjb25maWcuX2FbWUVBUl0gPSB0ZW1wLnllYXI7XG4gICAgICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRlbXAuZGF5T2ZZZWFyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIElTTyBzdGFuZGFyZFxuICAgIHV0aWxzX2hvb2tzX19ob29rcy5JU09fODYwMSA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZ1xuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKSB7XG4gICAgICAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhbm90aGVyIHBhcnQgb2YgdGhlIGNyZWF0aW9uIGZsb3cgdG8gcHJldmVudCBjaXJjdWxhciBkZXBzXG4gICAgICAgIGlmIChjb25maWcuX2YgPT09IHV0aWxzX2hvb2tzX19ob29rcy5JU09fODYwMSkge1xuICAgICAgICAgICAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLl9hID0gW107XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gdHJ1ZTtcblxuICAgICAgICAvLyBUaGlzIGFycmF5IGlzIHVzZWQgdG8gbWFrZSBhIERhdGUsIGVpdGhlciB3aXRoIGBuZXcgRGF0ZWAgb3IgYERhdGUuVVRDYFxuICAgICAgICB2YXIgc3RyaW5nID0gJycgKyBjb25maWcuX2ksXG4gICAgICAgICAgICBpLCBwYXJzZWRJbnB1dCwgdG9rZW5zLCB0b2tlbiwgc2tpcHBlZCxcbiAgICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoID0gMDtcblxuICAgICAgICB0b2tlbnMgPSBleHBhbmRGb3JtYXQoY29uZmlnLl9mLCBjb25maWcuX2xvY2FsZSkubWF0Y2goZm9ybWF0dGluZ1Rva2VucykgfHwgW107XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBwYXJzZWRJbnB1dCA9IChzdHJpbmcubWF0Y2goZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuLCBjb25maWcpKSB8fCBbXSlbMF07XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndG9rZW4nLCB0b2tlbiwgJ3BhcnNlZElucHV0JywgcGFyc2VkSW5wdXQsXG4gICAgICAgICAgICAvLyAgICAgICAgICdyZWdleCcsIGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSk7XG4gICAgICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBza2lwcGVkID0gc3RyaW5nLnN1YnN0cigwLCBzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkpO1xuICAgICAgICAgICAgICAgIGlmIChza2lwcGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChza2lwcGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKHN0cmluZy5pbmRleE9mKHBhcnNlZElucHV0KSArIHBhcnNlZElucHV0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCArPSBwYXJzZWRJbnB1dC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBkb24ndCBwYXJzZSBpZiBpdCdzIG5vdCBhIGtub3duIHRva2VuXG4gICAgICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBwYXJzZWRJbnB1dCwgY29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZy5fc3RyaWN0ICYmICFwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCByZW1haW5pbmcgdW5wYXJzZWQgaW5wdXQgbGVuZ3RoIHRvIHRoZSBzdHJpbmdcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuY2hhcnNMZWZ0T3ZlciA9IHN0cmluZ0xlbmd0aCAtIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGg7XG4gICAgICAgIGlmIChzdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChzdHJpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xlYXIgXzEyaCBmbGFnIGlmIGhvdXIgaXMgPD0gMTJcbiAgICAgICAgaWYgKGNvbmZpZy5fYVtIT1VSXSA8PSAxMiAmJlxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID4gMCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnBhcnNlZERhdGVQYXJ0cyA9IGNvbmZpZy5fYS5zbGljZSgwKTtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykubWVyaWRpZW0gPSBjb25maWcuX21lcmlkaWVtO1xuICAgICAgICAvLyBoYW5kbGUgbWVyaWRpZW1cbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gbWVyaWRpZW1GaXhXcmFwKGNvbmZpZy5fbG9jYWxlLCBjb25maWcuX2FbSE9VUl0sIGNvbmZpZy5fbWVyaWRpZW0pO1xuXG4gICAgICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICAgICAgICBjaGVja092ZXJmbG93KGNvbmZpZyk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBtZXJpZGllbUZpeFdyYXAgKGxvY2FsZSwgaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgdmFyIGlzUG07XG5cbiAgICAgICAgaWYgKG1lcmlkaWVtID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUubWVyaWRpZW1Ib3VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGUubWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhbGUuaXNQTSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFja1xuICAgICAgICAgICAgaXNQbSA9IGxvY2FsZS5pc1BNKG1lcmlkaWVtKTtcbiAgICAgICAgICAgIGlmIChpc1BtICYmIGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzUG0gJiYgaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBub3Qgc3VwcG9zZWQgdG8gaGFwcGVuXG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGFycmF5IG9mIGZvcm1hdCBzdHJpbmdzXG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZykge1xuICAgICAgICB2YXIgdGVtcENvbmZpZyxcbiAgICAgICAgICAgIGJlc3RNb21lbnQsXG5cbiAgICAgICAgICAgIHNjb3JlVG9CZWF0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZTtcblxuICAgICAgICBpZiAoY29uZmlnLl9mLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZEZvcm1hdCA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbmZpZy5fZi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY3VycmVudFNjb3JlID0gMDtcbiAgICAgICAgICAgIHRlbXBDb25maWcgPSBjb3B5Q29uZmlnKHt9LCBjb25maWcpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5fdXNlVVRDICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0ZW1wQ29uZmlnLl91c2VVVEMgPSBjb25maWcuX3VzZVVUQztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXBDb25maWcuX2YgPSBjb25maWcuX2ZbaV07XG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KHRlbXBDb25maWcpO1xuXG4gICAgICAgICAgICBpZiAoIXZhbGlkX19pc1ZhbGlkKHRlbXBDb25maWcpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGFueSBpbnB1dCB0aGF0IHdhcyBub3QgcGFyc2VkIGFkZCBhIHBlbmFsdHkgZm9yIHRoYXQgZm9ybWF0XG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLmNoYXJzTGVmdE92ZXI7XG5cbiAgICAgICAgICAgIC8vb3IgdG9rZW5zXG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnVudXNlZFRva2Vucy5sZW5ndGggKiAxMDtcblxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnNjb3JlID0gY3VycmVudFNjb3JlO1xuXG4gICAgICAgICAgICBpZiAoc2NvcmVUb0JlYXQgPT0gbnVsbCB8fCBjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xuICAgICAgICAgICAgICAgIGJlc3RNb21lbnQgPSB0ZW1wQ29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXh0ZW5kKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWdGcm9tT2JqZWN0KGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGNvbmZpZy5faSk7XG4gICAgICAgIGNvbmZpZy5fYSA9IG1hcChbaS55ZWFyLCBpLm1vbnRoLCBpLmRheSB8fCBpLmRhdGUsIGkuaG91ciwgaS5taW51dGUsIGkuc2Vjb25kLCBpLm1pbGxpc2Vjb25kXSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiAmJiBwYXJzZUludChvYmosIDEwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRnJvbUNvbmZpZyAoY29uZmlnKSB7XG4gICAgICAgIHZhciByZXMgPSBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3cocHJlcGFyZUNvbmZpZyhjb25maWcpKSk7XG4gICAgICAgIGlmIChyZXMuX25leHREYXkpIHtcbiAgICAgICAgICAgIC8vIEFkZGluZyBpcyBzbWFydCBlbm91Z2ggYXJvdW5kIERTVFxuICAgICAgICAgICAgcmVzLmFkZCgxLCAnZCcpO1xuICAgICAgICAgICAgcmVzLl9uZXh0RGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwYXJlQ29uZmlnIChjb25maWcpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gY29uZmlnLl9pLFxuICAgICAgICAgICAgZm9ybWF0ID0gY29uZmlnLl9mO1xuXG4gICAgICAgIGNvbmZpZy5fbG9jYWxlID0gY29uZmlnLl9sb2NhbGUgfHwgbG9jYWxlX2xvY2FsZXNfX2dldExvY2FsZShjb25maWcuX2wpO1xuXG4gICAgICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCAoZm9ybWF0ID09PSB1bmRlZmluZWQgJiYgaW5wdXQgPT09ICcnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbGlkX19jcmVhdGVJbnZhbGlkKHtudWxsSW5wdXQ6IHRydWV9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25maWcuX2kgPSBpbnB1dCA9IGNvbmZpZy5fbG9jYWxlLnByZXBhcnNlKGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc01vbWVudChpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3coaW5wdXQpKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KGZvcm1hdCkpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IGlucHV0O1xuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCkge1xuICAgICAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICAgICAgICB9ICBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2YWxpZF9faXNWYWxpZChjb25maWcpKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWdGcm9tSW5wdXQoY29uZmlnKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faTtcbiAgICAgICAgaWYgKGlucHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHV0aWxzX2hvb2tzX19ob29rcy5ub3coKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQudmFsdWVPZigpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nKGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYSA9IG1hcChpbnB1dC5zbGljZSgwKSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChvYmosIDEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGlucHV0KSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoaW5wdXQpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHV0aWxzX2hvb2tzX19ob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9jYWxPclVUQyAoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIGlzVVRDKSB7XG4gICAgICAgIHZhciBjID0ge307XG5cbiAgICAgICAgaWYgKHR5cGVvZihsb2NhbGUpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHN0cmljdCA9IGxvY2FsZTtcbiAgICAgICAgICAgIGxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoaXNPYmplY3QoaW5wdXQpICYmIGlzT2JqZWN0RW1wdHkoaW5wdXQpKSB8fFxuICAgICAgICAgICAgICAgIChpc0FycmF5KGlucHV0KSAmJiBpbnB1dC5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICBpbnB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBvYmplY3QgY29uc3RydWN0aW9uIG11c3QgYmUgZG9uZSB0aGlzIHdheS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE0MjNcbiAgICAgICAgYy5faXNBTW9tZW50T2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgYy5fdXNlVVRDID0gYy5faXNVVEMgPSBpc1VUQztcbiAgICAgICAgYy5fbCA9IGxvY2FsZTtcbiAgICAgICAgYy5faSA9IGlucHV0O1xuICAgICAgICBjLl9mID0gZm9ybWF0O1xuICAgICAgICBjLl9zdHJpY3QgPSBzdHJpY3Q7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUZyb21Db25maWcoYyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxfX2NyZWF0ZUxvY2FsIChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHZhciBwcm90b3R5cGVNaW4gPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQoKS5taW4gaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5tYXggaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvdGhlciA9IGxvY2FsX19jcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvdGhlciA8IHRoaXMgPyB0aGlzIDogb3RoZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZF9fY3JlYXRlSW52YWxpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHZhciBwcm90b3R5cGVNYXggPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQoKS5tYXggaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5taW4gaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvdGhlciA9IGxvY2FsX19jcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvdGhlciA+IHRoaXMgPyB0aGlzIDogb3RoZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZF9fY3JlYXRlSW52YWxpZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIFBpY2sgYSBtb21lbnQgbSBmcm9tIG1vbWVudHMgc28gdGhhdCBtW2ZuXShvdGhlcikgaXMgdHJ1ZSBmb3IgYWxsXG4gICAgLy8gb3RoZXIuIFRoaXMgcmVsaWVzIG9uIHRoZSBmdW5jdGlvbiBmbiB0byBiZSB0cmFuc2l0aXZlLlxuICAgIC8vXG4gICAgLy8gbW9tZW50cyBzaG91bGQgZWl0aGVyIGJlIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzIG9yIGFuIGFycmF5LCB3aG9zZVxuICAgIC8vIGZpcnN0IGVsZW1lbnQgaXMgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMuXG4gICAgZnVuY3Rpb24gcGlja0J5KGZuLCBtb21lbnRzKSB7XG4gICAgICAgIHZhciByZXMsIGk7XG4gICAgICAgIGlmIChtb21lbnRzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KG1vbWVudHNbMF0pKSB7XG4gICAgICAgICAgICBtb21lbnRzID0gbW9tZW50c1swXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1vbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxfX2NyZWF0ZUxvY2FsKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzID0gbW9tZW50c1swXTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IG1vbWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICghbW9tZW50c1tpXS5pc1ZhbGlkKCkgfHwgbW9tZW50c1tpXVtmbl0ocmVzKSkge1xuICAgICAgICAgICAgICAgIHJlcyA9IG1vbWVudHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBVc2UgW10uc29ydCBpbnN0ZWFkP1xuICAgIGZ1bmN0aW9uIG1pbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgICAgIHJldHVybiBwaWNrQnkoJ2lzQmVmb3JlJywgYXJncyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF4ICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICAgICAgcmV0dXJuIHBpY2tCeSgnaXNBZnRlcicsIGFyZ3MpO1xuICAgIH1cblxuICAgIHZhciBub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdyA/IERhdGUubm93KCkgOiArKG5ldyBEYXRlKCkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBEdXJhdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJbnB1dCA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGR1cmF0aW9uKSxcbiAgICAgICAgICAgIHllYXJzID0gbm9ybWFsaXplZElucHV0LnllYXIgfHwgMCxcbiAgICAgICAgICAgIHF1YXJ0ZXJzID0gbm9ybWFsaXplZElucHV0LnF1YXJ0ZXIgfHwgMCxcbiAgICAgICAgICAgIG1vbnRocyA9IG5vcm1hbGl6ZWRJbnB1dC5tb250aCB8fCAwLFxuICAgICAgICAgICAgd2Vla3MgPSBub3JtYWxpemVkSW5wdXQud2VlayB8fCAwLFxuICAgICAgICAgICAgZGF5cyA9IG5vcm1hbGl6ZWRJbnB1dC5kYXkgfHwgMCxcbiAgICAgICAgICAgIGhvdXJzID0gbm9ybWFsaXplZElucHV0LmhvdXIgfHwgMCxcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBub3JtYWxpemVkSW5wdXQubWludXRlIHx8IDAsXG4gICAgICAgICAgICBzZWNvbmRzID0gbm9ybWFsaXplZElucHV0LnNlY29uZCB8fCAwLFxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzID0gbm9ybWFsaXplZElucHV0Lm1pbGxpc2Vjb25kIHx8IDA7XG5cbiAgICAgICAgLy8gcmVwcmVzZW50YXRpb24gZm9yIGRhdGVBZGRSZW1vdmVcbiAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gK21pbGxpc2Vjb25kcyArXG4gICAgICAgICAgICBzZWNvbmRzICogMWUzICsgLy8gMTAwMFxuICAgICAgICAgICAgbWludXRlcyAqIDZlNCArIC8vIDEwMDAgKiA2MFxuICAgICAgICAgICAgaG91cnMgKiAxMDAwICogNjAgKiA2MDsgLy91c2luZyAxMDAwICogNjAgKiA2MCBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XG4gICAgICAgIC8vIEJlY2F1c2Ugb2YgZGF0ZUFkZFJlbW92ZSB0cmVhdHMgMjQgaG91cnMgYXMgZGlmZmVyZW50IGZyb20gYVxuICAgICAgICAvLyBkYXkgd2hlbiB3b3JraW5nIGFyb3VuZCBEU1QsIHdlIG5lZWQgdG8gc3RvcmUgdGhlbSBzZXBhcmF0ZWx5XG4gICAgICAgIHRoaXMuX2RheXMgPSArZGF5cyArXG4gICAgICAgICAgICB3ZWVrcyAqIDc7XG4gICAgICAgIC8vIEl0IGlzIGltcG9zc2libGUgdHJhbnNsYXRlIG1vbnRocyBpbnRvIGRheXMgd2l0aG91dCBrbm93aW5nXG4gICAgICAgIC8vIHdoaWNoIG1vbnRocyB5b3UgYXJlIGFyZSB0YWxraW5nIGFib3V0LCBzbyB3ZSBoYXZlIHRvIHN0b3JlXG4gICAgICAgIC8vIGl0IHNlcGFyYXRlbHkuXG4gICAgICAgIHRoaXMuX21vbnRocyA9ICttb250aHMgK1xuICAgICAgICAgICAgcXVhcnRlcnMgKiAzICtcbiAgICAgICAgICAgIHllYXJzICogMTI7XG5cbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuXG4gICAgICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZV9sb2NhbGVzX19nZXRMb2NhbGUoKTtcblxuICAgICAgICB0aGlzLl9idWJibGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0R1cmF0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFic1JvdW5kIChudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKC0xICogbnVtYmVyKSAqIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGZ1bmN0aW9uIG9mZnNldCAodG9rZW4sIHNlcGFyYXRvcikge1xuICAgICAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMudXRjT2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgc2lnbiA9ICcrJztcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gLW9mZnNldDtcbiAgICAgICAgICAgICAgICBzaWduID0gJy0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNpZ24gKyB6ZXJvRmlsbCh+fihvZmZzZXQgLyA2MCksIDIpICsgc2VwYXJhdG9yICsgemVyb0ZpbGwofn4ob2Zmc2V0KSAlIDYwLCAyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb2Zmc2V0KCdaJywgJzonKTtcbiAgICBvZmZzZXQoJ1paJywgJycpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignWicsICBtYXRjaFNob3J0T2Zmc2V0KTtcbiAgICBhZGRSZWdleFRva2VuKCdaWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xuICAgIGFkZFBhcnNlVG9rZW4oWydaJywgJ1paJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX3VzZVVUQyA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5fdHptID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XG4gICAgfSk7XG5cbiAgICAvLyBIRUxQRVJTXG5cbiAgICAvLyB0aW1lem9uZSBjaHVua2VyXG4gICAgLy8gJysxMDowMCcgPiBbJzEwJywgICcwMCddXG4gICAgLy8gJy0xNTMwJyAgPiBbJy0xNScsICczMCddXG4gICAgdmFyIGNodW5rT2Zmc2V0ID0gLyhbXFwrXFwtXXxcXGRcXGQpL2dpO1xuXG4gICAgZnVuY3Rpb24gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaGVyLCBzdHJpbmcpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSAoKHN0cmluZyB8fCAnJykubWF0Y2gobWF0Y2hlcikgfHwgW10pO1xuICAgICAgICB2YXIgY2h1bmsgICA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXSB8fCBbXTtcbiAgICAgICAgdmFyIHBhcnRzICAgPSAoY2h1bmsgKyAnJykubWF0Y2goY2h1bmtPZmZzZXQpIHx8IFsnLScsIDAsIDBdO1xuICAgICAgICB2YXIgbWludXRlcyA9ICsocGFydHNbMV0gKiA2MCkgKyB0b0ludChwYXJ0c1syXSk7XG5cbiAgICAgICAgcmV0dXJuIHBhcnRzWzBdID09PSAnKycgPyBtaW51dGVzIDogLW1pbnV0ZXM7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGEgbW9tZW50IGZyb20gaW5wdXQsIHRoYXQgaXMgbG9jYWwvdXRjL3pvbmUgZXF1aXZhbGVudCB0byBtb2RlbC5cbiAgICBmdW5jdGlvbiBjbG9uZVdpdGhPZmZzZXQoaW5wdXQsIG1vZGVsKSB7XG4gICAgICAgIHZhciByZXMsIGRpZmY7XG4gICAgICAgIGlmIChtb2RlbC5faXNVVEMpIHtcbiAgICAgICAgICAgIHJlcyA9IG1vZGVsLmNsb25lKCk7XG4gICAgICAgICAgICBkaWZmID0gKGlzTW9tZW50KGlucHV0KSB8fCBpc0RhdGUoaW5wdXQpID8gaW5wdXQudmFsdWVPZigpIDogbG9jYWxfX2NyZWF0ZUxvY2FsKGlucHV0KS52YWx1ZU9mKCkpIC0gcmVzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIC8vIFVzZSBsb3ctbGV2ZWwgYXBpLCBiZWNhdXNlIHRoaXMgZm4gaXMgbG93LWxldmVsIGFwaS5cbiAgICAgICAgICAgIHJlcy5fZC5zZXRUaW1lKHJlcy5fZC52YWx1ZU9mKCkgKyBkaWZmKTtcbiAgICAgICAgICAgIHV0aWxzX2hvb2tzX19ob29rcy51cGRhdGVPZmZzZXQocmVzLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsX19jcmVhdGVMb2NhbChpbnB1dCkubG9jYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERhdGVPZmZzZXQgKG0pIHtcbiAgICAgICAgLy8gT24gRmlyZWZveC4yNCBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgYSBmbG9hdGluZyBwb2ludC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvcHVsbC8xODcxXG4gICAgICAgIHJldHVybiAtTWF0aC5yb3VuZChtLl9kLmdldFRpbWV6b25lT2Zmc2V0KCkgLyAxNSkgKiAxNTtcbiAgICB9XG5cbiAgICAvLyBIT09LU1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciBhIG1vbWVudCBpcyBtdXRhdGVkLlxuICAgIC8vIEl0IGlzIGludGVuZGVkIHRvIGtlZXAgdGhlIG9mZnNldCBpbiBzeW5jIHdpdGggdGhlIHRpbWV6b25lLlxuICAgIHV0aWxzX2hvb2tzX19ob29rcy51cGRhdGVPZmZzZXQgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIC8vIGtlZXBMb2NhbFRpbWUgPSB0cnVlIG1lYW5zIG9ubHkgY2hhbmdlIHRoZSB0aW1lem9uZSwgd2l0aG91dFxuICAgIC8vIGFmZmVjdGluZyB0aGUgbG9jYWwgaG91ci4gU28gNTozMToyNiArMDMwMCAtLVt1dGNPZmZzZXQoMiwgdHJ1ZSldLS0+XG4gICAgLy8gNTozMToyNiArMDIwMCBJdCBpcyBwb3NzaWJsZSB0aGF0IDU6MzE6MjYgZG9lc24ndCBleGlzdCB3aXRoIG9mZnNldFxuICAgIC8vICswMjAwLCBzbyB3ZSBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cbiAgICAvL1xuICAgIC8vIEtlZXBpbmcgdGhlIHRpbWUgYWN0dWFsbHkgYWRkcy9zdWJ0cmFjdHMgKG9uZSBob3VyKVxuICAgIC8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxuICAgIC8vIGEgc2Vjb25kIHRpbWUuIEluIGNhc2UgaXQgd2FudHMgdXMgdG8gY2hhbmdlIHRoZSBvZmZzZXQgYWdhaW5cbiAgICAvLyBfY2hhbmdlSW5Qcm9ncmVzcyA9PSB0cnVlIGNhc2UsIHRoZW4gd2UgaGF2ZSB0byBhZGp1c3QsIGJlY2F1c2VcbiAgICAvLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxuICAgIGZ1bmN0aW9uIGdldFNldE9mZnNldCAoaW5wdXQsIGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuX29mZnNldCB8fCAwLFxuICAgICAgICAgICAgbG9jYWxBZGp1c3Q7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhpbnB1dCkgPCAxNikge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gaW5wdXQgKiA2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5faXNVVEMgJiYga2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgICAgIGxvY2FsQWRqdXN0ID0gZ2V0RGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX29mZnNldCA9IGlucHV0O1xuICAgICAgICAgICAgdGhpcy5faXNVVEMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGxvY2FsQWRqdXN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChsb2NhbEFkanVzdCwgJ20nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvZmZzZXQgIT09IGlucHV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFrZWVwTG9jYWxUaW1lIHx8IHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkX3N1YnRyYWN0X19hZGRTdWJ0cmFjdCh0aGlzLCBjcmVhdGVfX2NyZWF0ZUR1cmF0aW9uKGlucHV0IC0gb2Zmc2V0LCAnbScpLCAxLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHNfaG9va3NfX2hvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyBvZmZzZXQgOiBnZXREYXRlT2Zmc2V0KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0Wm9uZSAoaW5wdXQsIGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSAtaW5wdXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLXRoaXMudXRjT2Zmc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPZmZzZXRUb1VUQyAoa2VlcExvY2FsVGltZSkge1xuICAgICAgICByZXR1cm4gdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0T2Zmc2V0VG9Mb2NhbCAoa2VlcExvY2FsVGltZSkge1xuICAgICAgICBpZiAodGhpcy5faXNVVEMpIHtcbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5faXNVVEMgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnRyYWN0KGdldERhdGVPZmZzZXQodGhpcyksICdtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQgKCkge1xuICAgICAgICBpZiAodGhpcy5fdHptKSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCh0aGlzLl90em0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIHRab25lID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaE9mZnNldCwgdGhpcy5faSk7XG5cbiAgICAgICAgICAgIGlmICh0Wm9uZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KDAsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnV0Y09mZnNldChvZmZzZXRGcm9tU3RyaW5nKG1hdGNoT2Zmc2V0LCB0aGlzLl9pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzQWxpZ25lZEhvdXJPZmZzZXQgKGlucHV0KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCA9IGlucHV0ID8gbG9jYWxfX2NyZWF0ZUxvY2FsKGlucHV0KS51dGNPZmZzZXQoKSA6IDA7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLnV0Y09mZnNldCgpIC0gaW5wdXQpICUgNjAgPT09IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWUgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCgwKS51dGNPZmZzZXQoKSB8fFxuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCg1KS51dGNPZmZzZXQoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lU2hpZnRlZCAoKSB7XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5faXNEU1RTaGlmdGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjID0ge307XG5cbiAgICAgICAgY29weUNvbmZpZyhjLCB0aGlzKTtcbiAgICAgICAgYyA9IHByZXBhcmVDb25maWcoYyk7XG5cbiAgICAgICAgaWYgKGMuX2EpIHtcbiAgICAgICAgICAgIHZhciBvdGhlciA9IGMuX2lzVVRDID8gY3JlYXRlX3V0Y19fY3JlYXRlVVRDKGMuX2EpIDogbG9jYWxfX2NyZWF0ZUxvY2FsKGMuX2EpO1xuICAgICAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID0gdGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgICAgICAgICBjb21wYXJlQXJyYXlzKGMuX2EsIG90aGVyLnRvQXJyYXkoKSkgPiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTG9jYWwgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyAhdGhpcy5faXNVVEMgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1V0Y09mZnNldCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNVdGMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyAmJiB0aGlzLl9vZmZzZXQgPT09IDAgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBU1AuTkVUIGpzb24gZGF0ZSBmb3JtYXQgcmVnZXhcbiAgICB2YXIgYXNwTmV0UmVnZXggPSAvXihcXC0pPyg/OihcXGQqKVsuIF0pPyhcXGQrKVxcOihcXGQrKSg/OlxcOihcXGQrKShcXC5cXGQqKT8pPyQvO1xuXG4gICAgLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcbiAgICAvLyBzb21ld2hhdCBtb3JlIGluIGxpbmUgd2l0aCA0LjQuMy4yIDIwMDQgc3BlYywgYnV0IGFsbG93cyBkZWNpbWFsIGFueXdoZXJlXG4gICAgLy8gYW5kIGZ1cnRoZXIgbW9kaWZpZWQgdG8gYWxsb3cgZm9yIHN0cmluZ3MgY29udGFpbmluZyBib3RoIHdlZWsgYW5kIGRheVxuICAgIHZhciBpc29SZWdleCA9IC9eKC0pP1AoPzooLT9bMC05LC5dKilZKT8oPzooLT9bMC05LC5dKilNKT8oPzooLT9bMC05LC5dKilXKT8oPzooLT9bMC05LC5dKilEKT8oPzpUKD86KC0/WzAtOSwuXSopSCk/KD86KC0/WzAtOSwuXSopTSk/KD86KC0/WzAtOSwuXSopUyk/KT8kLztcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9fY3JlYXRlRHVyYXRpb24gKGlucHV0LCBrZXkpIHtcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gaW5wdXQsXG4gICAgICAgICAgICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxuICAgICAgICAgICAgbWF0Y2ggPSBudWxsLFxuICAgICAgICAgICAgc2lnbixcbiAgICAgICAgICAgIHJldCxcbiAgICAgICAgICAgIGRpZmZSZXM7XG5cbiAgICAgICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBtcyA6IGlucHV0Ll9taWxsaXNlY29uZHMsXG4gICAgICAgICAgICAgICAgZCAgOiBpbnB1dC5fZGF5cyxcbiAgICAgICAgICAgICAgICBNICA6IGlucHV0Ll9tb250aHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbltrZXldID0gaW5wdXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uLm1pbGxpc2Vjb25kcyA9IGlucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEhKG1hdGNoID0gYXNwTmV0UmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgICAgICBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAxO1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeSAgOiAwLFxuICAgICAgICAgICAgICAgIGQgIDogdG9JbnQobWF0Y2hbREFURV0pICAgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgICAgICBoICA6IHRvSW50KG1hdGNoW0hPVVJdKSAgICAgICAgICAgICAgICAgICAgICAgICAqIHNpZ24sXG4gICAgICAgICAgICAgICAgbSAgOiB0b0ludChtYXRjaFtNSU5VVEVdKSAgICAgICAgICAgICAgICAgICAgICAgKiBzaWduLFxuICAgICAgICAgICAgICAgIHMgIDogdG9JbnQobWF0Y2hbU0VDT05EXSkgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgICAgICBtcyA6IHRvSW50KGFic1JvdW5kKG1hdGNoW01JTExJU0VDT05EXSAqIDEwMDApKSAqIHNpZ24gLy8gdGhlIG1pbGxpc2Vjb25kIGRlY2ltYWwgcG9pbnQgaXMgaW5jbHVkZWQgaW4gdGhlIG1hdGNoXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKCEhKG1hdGNoID0gaXNvUmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgICAgICBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAxO1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeSA6IHBhcnNlSXNvKG1hdGNoWzJdLCBzaWduKSxcbiAgICAgICAgICAgICAgICBNIDogcGFyc2VJc28obWF0Y2hbM10sIHNpZ24pLFxuICAgICAgICAgICAgICAgIHcgOiBwYXJzZUlzbyhtYXRjaFs0XSwgc2lnbiksXG4gICAgICAgICAgICAgICAgZCA6IHBhcnNlSXNvKG1hdGNoWzVdLCBzaWduKSxcbiAgICAgICAgICAgICAgICBoIDogcGFyc2VJc28obWF0Y2hbNl0sIHNpZ24pLFxuICAgICAgICAgICAgICAgIG0gOiBwYXJzZUlzbyhtYXRjaFs3XSwgc2lnbiksXG4gICAgICAgICAgICAgICAgcyA6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7Ly8gY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdvYmplY3QnICYmICgnZnJvbScgaW4gZHVyYXRpb24gfHwgJ3RvJyBpbiBkdXJhdGlvbikpIHtcbiAgICAgICAgICAgIGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShsb2NhbF9fY3JlYXRlTG9jYWwoZHVyYXRpb24uZnJvbSksIGxvY2FsX19jcmVhdGVMb2NhbChkdXJhdGlvbi50bykpO1xuXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgICAgICAgICAgZHVyYXRpb24ubXMgPSBkaWZmUmVzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIGR1cmF0aW9uLk0gPSBkaWZmUmVzLm1vbnRocztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IG5ldyBEdXJhdGlvbihkdXJhdGlvbik7XG5cbiAgICAgICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfbG9jYWxlJykpIHtcbiAgICAgICAgICAgIHJldC5fbG9jYWxlID0gaW5wdXQuX2xvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgY3JlYXRlX19jcmVhdGVEdXJhdGlvbi5mbiA9IER1cmF0aW9uLnByb3RvdHlwZTtcblxuICAgIGZ1bmN0aW9uIHBhcnNlSXNvIChpbnAsIHNpZ24pIHtcbiAgICAgICAgLy8gV2UnZCBub3JtYWxseSB1c2Ugfn5pbnAgZm9yIHRoaXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGFsc29cbiAgICAgICAgLy8gY29udmVydHMgZmxvYXRzIHRvIGludHMuXG4gICAgICAgIC8vIGlucCBtYXkgYmUgdW5kZWZpbmVkLCBzbyBjYXJlZnVsIGNhbGxpbmcgcmVwbGFjZSBvbiBpdC5cbiAgICAgICAgdmFyIHJlcyA9IGlucCAmJiBwYXJzZUZsb2F0KGlucC5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgICAgIC8vIGFwcGx5IHNpZ24gd2hpbGUgd2UncmUgYXQgaXRcbiAgICAgICAgcmV0dXJuIChpc05hTihyZXMpID8gMCA6IHJlcykgKiBzaWduO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpIHtcbiAgICAgICAgdmFyIHJlcyA9IHttaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMH07XG5cbiAgICAgICAgcmVzLm1vbnRocyA9IG90aGVyLm1vbnRoKCkgLSBiYXNlLm1vbnRoKCkgK1xuICAgICAgICAgICAgKG90aGVyLnllYXIoKSAtIGJhc2UueWVhcigpKSAqIDEyO1xuICAgICAgICBpZiAoYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpLmlzQWZ0ZXIob3RoZXIpKSB7XG4gICAgICAgICAgICAtLXJlcy5tb250aHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXMubWlsbGlzZWNvbmRzID0gK290aGVyIC0gKyhiYXNlLmNsb25lKCkuYWRkKHJlcy5tb250aHMsICdNJykpO1xuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpIHtcbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgaWYgKCEoYmFzZS5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHttaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMH07XG4gICAgICAgIH1cblxuICAgICAgICBvdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSk7XG4gICAgICAgIGlmIChiYXNlLmlzQmVmb3JlKG90aGVyKSkge1xuICAgICAgICAgICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKG90aGVyLCBiYXNlKTtcbiAgICAgICAgICAgIHJlcy5taWxsaXNlY29uZHMgPSAtcmVzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogcmVtb3ZlICduYW1lJyBhcmcgYWZ0ZXIgZGVwcmVjYXRpb24gaXMgcmVtb3ZlZFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkZGVyKGRpcmVjdGlvbiwgbmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCwgcGVyaW9kKSB7XG4gICAgICAgICAgICB2YXIgZHVyLCB0bXA7XG4gICAgICAgICAgICAvL2ludmVydCB0aGUgYXJndW1lbnRzLCBidXQgY29tcGxhaW4gYWJvdXQgaXRcbiAgICAgICAgICAgIGlmIChwZXJpb2QgIT09IG51bGwgJiYgIWlzTmFOKCtwZXJpb2QpKSB7XG4gICAgICAgICAgICAgICAgZGVwcmVjYXRlU2ltcGxlKG5hbWUsICdtb21lbnQoKS4nICsgbmFtZSAgKyAnKHBlcmlvZCwgbnVtYmVyKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIG1vbWVudCgpLicgKyBuYW1lICsgJyhudW1iZXIsIHBlcmlvZCkuICcgK1xuICAgICAgICAgICAgICAgICdTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9hZGQtaW52ZXJ0ZWQtcGFyYW0vIGZvciBtb3JlIGluZm8uJyk7XG4gICAgICAgICAgICAgICAgdG1wID0gdmFsOyB2YWwgPSBwZXJpb2Q7IHBlcmlvZCA9IHRtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyArdmFsIDogdmFsO1xuICAgICAgICAgICAgZHVyID0gY3JlYXRlX19jcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XG4gICAgICAgICAgICBhZGRfc3VidHJhY3RfX2FkZFN1YnRyYWN0KHRoaXMsIGR1ciwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZF9zdWJ0cmFjdF9fYWRkU3VidHJhY3QgKG1vbSwgZHVyYXRpb24sIGlzQWRkaW5nLCB1cGRhdGVPZmZzZXQpIHtcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHMsXG4gICAgICAgICAgICBkYXlzID0gYWJzUm91bmQoZHVyYXRpb24uX2RheXMpLFxuICAgICAgICAgICAgbW9udGhzID0gYWJzUm91bmQoZHVyYXRpb24uX21vbnRocyk7XG5cbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAvLyBObyBvcFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xuXG4gICAgICAgIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICAgIG1vbS5fZC5zZXRUaW1lKG1vbS5fZC52YWx1ZU9mKCkgKyBtaWxsaXNlY29uZHMgKiBpc0FkZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRheXMpIHtcbiAgICAgICAgICAgIGdldF9zZXRfX3NldChtb20sICdEYXRlJywgZ2V0X3NldF9fZ2V0KG1vbSwgJ0RhdGUnKSArIGRheXMgKiBpc0FkZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vbnRocykge1xuICAgICAgICAgICAgc2V0TW9udGgobW9tLCBnZXRfc2V0X19nZXQobW9tLCAnTW9udGgnKSArIG1vbnRocyAqIGlzQWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRlT2Zmc2V0KSB7XG4gICAgICAgICAgICB1dGlsc19ob29rc19faG9va3MudXBkYXRlT2Zmc2V0KG1vbSwgZGF5cyB8fCBtb250aHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFkZF9zdWJ0cmFjdF9fYWRkICAgICAgPSBjcmVhdGVBZGRlcigxLCAnYWRkJyk7XG4gICAgdmFyIGFkZF9zdWJ0cmFjdF9fc3VidHJhY3QgPSBjcmVhdGVBZGRlcigtMSwgJ3N1YnRyYWN0Jyk7XG5cbiAgICBmdW5jdGlvbiBnZXRDYWxlbmRhckZvcm1hdChteU1vbWVudCwgbm93KSB7XG4gICAgICAgIHZhciBkaWZmID0gbXlNb21lbnQuZGlmZihub3csICdkYXlzJywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBkaWZmIDwgLTYgPyAnc2FtZUVsc2UnIDpcbiAgICAgICAgICAgICAgICBkaWZmIDwgLTEgPyAnbGFzdFdlZWsnIDpcbiAgICAgICAgICAgICAgICBkaWZmIDwgMCA/ICdsYXN0RGF5JyA6XG4gICAgICAgICAgICAgICAgZGlmZiA8IDEgPyAnc2FtZURheScgOlxuICAgICAgICAgICAgICAgIGRpZmYgPCAyID8gJ25leHREYXknIDpcbiAgICAgICAgICAgICAgICBkaWZmIDwgNyA/ICduZXh0V2VlaycgOiAnc2FtZUVsc2UnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbWVudF9jYWxlbmRhcl9fY2FsZW5kYXIgKHRpbWUsIGZvcm1hdHMpIHtcbiAgICAgICAgLy8gV2Ugd2FudCB0byBjb21wYXJlIHRoZSBzdGFydCBvZiB0b2RheSwgdnMgdGhpcy5cbiAgICAgICAgLy8gR2V0dGluZyBzdGFydC1vZi10b2RheSBkZXBlbmRzIG9uIHdoZXRoZXIgd2UncmUgbG9jYWwvdXRjL29mZnNldCBvciBub3QuXG4gICAgICAgIHZhciBub3cgPSB0aW1lIHx8IGxvY2FsX19jcmVhdGVMb2NhbCgpLFxuICAgICAgICAgICAgc29kID0gY2xvbmVXaXRoT2Zmc2V0KG5vdywgdGhpcykuc3RhcnRPZignZGF5JyksXG4gICAgICAgICAgICBmb3JtYXQgPSB1dGlsc19ob29rc19faG9va3MuY2FsZW5kYXJGb3JtYXQodGhpcywgc29kKSB8fCAnc2FtZUVsc2UnO1xuXG4gICAgICAgIHZhciBvdXRwdXQgPSBmb3JtYXRzICYmIChpc0Z1bmN0aW9uKGZvcm1hdHNbZm9ybWF0XSkgPyBmb3JtYXRzW2Zvcm1hdF0uY2FsbCh0aGlzLCBub3cpIDogZm9ybWF0c1tmb3JtYXRdKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQob3V0cHV0IHx8IHRoaXMubG9jYWxlRGF0YSgpLmNhbGVuZGFyKGZvcm1hdCwgdGhpcywgbG9jYWxfX2NyZWF0ZUxvY2FsKG5vdykpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9uZSAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTW9tZW50KHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQWZ0ZXIgKGlucHV0LCB1bml0cykge1xuICAgICAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogbG9jYWxfX2NyZWF0ZUxvY2FsKGlucHV0KTtcbiAgICAgICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyghaXNVbmRlZmluZWQodW5pdHMpID8gdW5pdHMgOiAnbWlsbGlzZWNvbmQnKTtcbiAgICAgICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPiBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbElucHV0LnZhbHVlT2YoKSA8IHRoaXMuY2xvbmUoKS5zdGFydE9mKHVuaXRzKS52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0JlZm9yZSAoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBsb2NhbF9fY3JlYXRlTG9jYWwoaW5wdXQpO1xuICAgICAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKCFpc1VuZGVmaW5lZCh1bml0cykgPyB1bml0cyA6ICdtaWxsaXNlY29uZCcpO1xuICAgICAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0JldHdlZW4gKGZyb20sIHRvLCB1bml0cywgaW5jbHVzaXZpdHkpIHtcbiAgICAgICAgaW5jbHVzaXZpdHkgPSBpbmNsdXNpdml0eSB8fCAnKCknO1xuICAgICAgICByZXR1cm4gKGluY2x1c2l2aXR5WzBdID09PSAnKCcgPyB0aGlzLmlzQWZ0ZXIoZnJvbSwgdW5pdHMpIDogIXRoaXMuaXNCZWZvcmUoZnJvbSwgdW5pdHMpKSAmJlxuICAgICAgICAgICAgKGluY2x1c2l2aXR5WzFdID09PSAnKScgPyB0aGlzLmlzQmVmb3JlKHRvLCB1bml0cykgOiAhdGhpcy5pc0FmdGVyKHRvLCB1bml0cykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU2FtZSAoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBsb2NhbF9fY3JlYXRlTG9jYWwoaW5wdXQpLFxuICAgICAgICAgICAgaW5wdXRNcztcbiAgICAgICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyB8fCAnbWlsbGlzZWNvbmQnKTtcbiAgICAgICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPT09IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5wdXRNcyA9IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5zdGFydE9mKHVuaXRzKS52YWx1ZU9mKCkgPD0gaW5wdXRNcyAmJiBpbnB1dE1zIDw9IHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTYW1lT3JBZnRlciAoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNBZnRlcihpbnB1dCx1bml0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTYW1lT3JCZWZvcmUgKGlucHV0LCB1bml0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NhbWUoaW5wdXQsIHVuaXRzKSB8fCB0aGlzLmlzQmVmb3JlKGlucHV0LHVuaXRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaWZmIChpbnB1dCwgdW5pdHMsIGFzRmxvYXQpIHtcbiAgICAgICAgdmFyIHRoYXQsXG4gICAgICAgICAgICB6b25lRGVsdGEsXG4gICAgICAgICAgICBkZWx0YSwgb3V0cHV0O1xuXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0ID0gY2xvbmVXaXRoT2Zmc2V0KGlucHV0LCB0aGlzKTtcblxuICAgICAgICBpZiAoIXRoYXQuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgem9uZURlbHRhID0gKHRoYXQudXRjT2Zmc2V0KCkgLSB0aGlzLnV0Y09mZnNldCgpKSAqIDZlNDtcblxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgICAgICBpZiAodW5pdHMgPT09ICd5ZWFyJyB8fCB1bml0cyA9PT0gJ21vbnRoJyB8fCB1bml0cyA9PT0gJ3F1YXJ0ZXInKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCk7XG4gICAgICAgICAgICBpZiAodW5pdHMgPT09ICdxdWFydGVyJykge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCAvIDM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVuaXRzID09PSAneWVhcicpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgLyAxMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbHRhID0gdGhpcyAtIHRoYXQ7XG4gICAgICAgICAgICBvdXRwdXQgPSB1bml0cyA9PT0gJ3NlY29uZCcgPyBkZWx0YSAvIDFlMyA6IC8vIDEwMDBcbiAgICAgICAgICAgICAgICB1bml0cyA9PT0gJ21pbnV0ZScgPyBkZWx0YSAvIDZlNCA6IC8vIDEwMDAgKiA2MFxuICAgICAgICAgICAgICAgIHVuaXRzID09PSAnaG91cicgPyBkZWx0YSAvIDM2ZTUgOiAvLyAxMDAwICogNjAgKiA2MFxuICAgICAgICAgICAgICAgIHVuaXRzID09PSAnZGF5JyA/IChkZWx0YSAtIHpvbmVEZWx0YSkgLyA4NjRlNSA6IC8vIDEwMDAgKiA2MCAqIDYwICogMjQsIG5lZ2F0ZSBkc3RcbiAgICAgICAgICAgICAgICB1bml0cyA9PT0gJ3dlZWsnID8gKGRlbHRhIC0gem9uZURlbHRhKSAvIDYwNDhlNSA6IC8vIDEwMDAgKiA2MCAqIDYwICogMjQgKiA3LCBuZWdhdGUgZHN0XG4gICAgICAgICAgICAgICAgZGVsdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzRmxvYXQgPyBvdXRwdXQgOiBhYnNGbG9vcihvdXRwdXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbnRoRGlmZiAoYSwgYikge1xuICAgICAgICAvLyBkaWZmZXJlbmNlIGluIG1vbnRoc1xuICAgICAgICB2YXIgd2hvbGVNb250aERpZmYgPSAoKGIueWVhcigpIC0gYS55ZWFyKCkpICogMTIpICsgKGIubW9udGgoKSAtIGEubW9udGgoKSksXG4gICAgICAgICAgICAvLyBiIGlzIGluIChhbmNob3IgLSAxIG1vbnRoLCBhbmNob3IgKyAxIG1vbnRoKVxuICAgICAgICAgICAgYW5jaG9yID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiwgJ21vbnRocycpLFxuICAgICAgICAgICAgYW5jaG9yMiwgYWRqdXN0O1xuXG4gICAgICAgIGlmIChiIC0gYW5jaG9yIDwgMCkge1xuICAgICAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgLSAxLCAnbW9udGhzJyk7XG4gICAgICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvciAtIGFuY2hvcjIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgKyAxLCAnbW9udGhzJyk7XG4gICAgICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvcjIgLSBhbmNob3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jaGVjayBmb3IgbmVnYXRpdmUgemVybywgcmV0dXJuIHplcm8gaWYgbmVnYXRpdmUgemVyb1xuICAgICAgICByZXR1cm4gLSh3aG9sZU1vbnRoRGlmZiArIGFkanVzdCkgfHwgMDtcbiAgICB9XG5cbiAgICB1dGlsc19ob29rc19faG9va3MuZGVmYXVsdEZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzWic7XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLmRlZmF1bHRGb3JtYXRVdGMgPSAnWVlZWS1NTS1ERFRISDptbTpzc1taXSc7XG5cbiAgICBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkubG9jYWxlKCdlbicpLmZvcm1hdCgnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzIFtHTVRdWlonKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb21lbnRfZm9ybWF0X190b0lTT1N0cmluZyAoKSB7XG4gICAgICAgIHZhciBtID0gdGhpcy5jbG9uZSgpLnV0YygpO1xuICAgICAgICBpZiAoMCA8IG0ueWVhcigpICYmIG0ueWVhcigpIDw9IDk5OTkpIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgIC8vIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBpcyB+NTB4IGZhc3RlciwgdXNlIGl0IHdoZW4gd2UgY2FuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXQgKGlucHV0U3RyaW5nKSB7XG4gICAgICAgIGlmICghaW5wdXRTdHJpbmcpIHtcbiAgICAgICAgICAgIGlucHV0U3RyaW5nID0gdGhpcy5pc1V0YygpID8gdXRpbHNfaG9va3NfX2hvb2tzLmRlZmF1bHRGb3JtYXRVdGMgOiB1dGlsc19ob29rc19faG9va3MuZGVmYXVsdEZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3V0cHV0ID0gZm9ybWF0TW9tZW50KHRoaXMsIGlucHV0U3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLnBvc3Rmb3JtYXQob3V0cHV0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmcm9tICh0aW1lLCB3aXRob3V0U3VmZml4KSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgICAgICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8XG4gICAgICAgICAgICAgICAgIGxvY2FsX19jcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlX19jcmVhdGVEdXJhdGlvbih7dG86IHRoaXMsIGZyb206IHRpbWV9KS5sb2NhbGUodGhpcy5sb2NhbGUoKSkuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmcm9tTm93ICh3aXRob3V0U3VmZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZyb20obG9jYWxfX2NyZWF0ZUxvY2FsKCksIHdpdGhvdXRTdWZmaXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvICh0aW1lLCB3aXRob3V0U3VmZml4KSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgICAgICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8XG4gICAgICAgICAgICAgICAgIGxvY2FsX19jcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlX19jcmVhdGVEdXJhdGlvbih7ZnJvbTogdGhpcywgdG86IHRpbWV9KS5sb2NhbGUodGhpcy5sb2NhbGUoKSkuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b05vdyAod2l0aG91dFN1ZmZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy50byhsb2NhbF9fY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG4gICAgfVxuXG4gICAgLy8gSWYgcGFzc2VkIGEgbG9jYWxlIGtleSwgaXQgd2lsbCBzZXQgdGhlIGxvY2FsZSBmb3IgdGhpc1xuICAgIC8vIGluc3RhbmNlLiAgT3RoZXJ3aXNlLCBpdCB3aWxsIHJldHVybiB0aGUgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbiAgICAvLyB2YXJpYWJsZXMgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgZnVuY3Rpb24gbG9jYWxlIChrZXkpIHtcbiAgICAgICAgdmFyIG5ld0xvY2FsZURhdGE7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3TG9jYWxlRGF0YSA9IGxvY2FsZV9sb2NhbGVzX19nZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgICAgIGlmIChuZXdMb2NhbGVEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2NhbGUgPSBuZXdMb2NhbGVEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGFuZyA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ21vbWVudCgpLmxhbmcoKSBpcyBkZXByZWNhdGVkLiBJbnN0ZWFkLCB1c2UgbW9tZW50KCkubG9jYWxlRGF0YSgpIHRvIGdldCB0aGUgbGFuZ3VhZ2UgY29uZmlndXJhdGlvbi4gVXNlIG1vbWVudCgpLmxvY2FsZSgpIHRvIGNoYW5nZSBsYW5ndWFnZXMuJyxcbiAgICAgICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVEYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydE9mICh1bml0cykge1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBzd2l0Y2ggaW50ZW50aW9uYWxseSBvbWl0cyBicmVhayBrZXl3b3Jkc1xuICAgICAgICAvLyB0byB1dGlsaXplIGZhbGxpbmcgdGhyb3VnaCB0aGUgY2FzZXMuXG4gICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgIHRoaXMubW9udGgoMCk7XG4gICAgICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlKDEpO1xuICAgICAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5ob3VycygwKTtcbiAgICAgICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICB0aGlzLm1pbnV0ZXMoMCk7XG4gICAgICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZHMoMCk7XG4gICAgICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICB0aGlzLm1pbGxpc2Vjb25kcygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlZWtzIGFyZSBhIHNwZWNpYWwgY2FzZVxuICAgICAgICBpZiAodW5pdHMgPT09ICd3ZWVrJykge1xuICAgICAgICAgICAgdGhpcy53ZWVrZGF5KDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bml0cyA9PT0gJ2lzb1dlZWsnKSB7XG4gICAgICAgICAgICB0aGlzLmlzb1dlZWtkYXkoMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBxdWFydGVycyBhcmUgYWxzbyBzcGVjaWFsXG4gICAgICAgIGlmICh1bml0cyA9PT0gJ3F1YXJ0ZXInKSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoKE1hdGguZmxvb3IodGhpcy5tb250aCgpIC8gMykgKiAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZE9mICh1bml0cykge1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgaWYgKHVuaXRzID09PSB1bmRlZmluZWQgfHwgdW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gJ2RhdGUnIGlzIGFuIGFsaWFzIGZvciAnZGF5Jywgc28gaXQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgc3VjaC5cbiAgICAgICAgaWYgKHVuaXRzID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgIHVuaXRzID0gJ2RheSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zdGFydE9mKHVuaXRzKS5hZGQoMSwgKHVuaXRzID09PSAnaXNvV2VlaycgPyAnd2VlaycgOiB1bml0cykpLnN1YnRyYWN0KDEsICdtcycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvX3R5cGVfX3ZhbHVlT2YgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZC52YWx1ZU9mKCkgLSAoKHRoaXMuX29mZnNldCB8fCAwKSAqIDYwMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bml4ICgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkgLyAxMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0RhdGUgKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvQXJyYXkgKCkge1xuICAgICAgICB2YXIgbSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBbbS55ZWFyKCksIG0ubW9udGgoKSwgbS5kYXRlKCksIG0uaG91cigpLCBtLm1pbnV0ZSgpLCBtLnNlY29uZCgpLCBtLm1pbGxpc2Vjb25kKCldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvT2JqZWN0ICgpIHtcbiAgICAgICAgdmFyIG0gPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeWVhcnM6IG0ueWVhcigpLFxuICAgICAgICAgICAgbW9udGhzOiBtLm1vbnRoKCksXG4gICAgICAgICAgICBkYXRlOiBtLmRhdGUoKSxcbiAgICAgICAgICAgIGhvdXJzOiBtLmhvdXJzKCksXG4gICAgICAgICAgICBtaW51dGVzOiBtLm1pbnV0ZXMoKSxcbiAgICAgICAgICAgIHNlY29uZHM6IG0uc2Vjb25kcygpLFxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzOiBtLm1pbGxpc2Vjb25kcygpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgICAgICAgLy8gbmV3IERhdGUoTmFOKS50b0pTT04oKSA9PT0gbnVsbFxuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLnRvSVNPU3RyaW5nKCkgOiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbWVudF92YWxpZF9faXNWYWxpZCAoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZF9faXNWYWxpZCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzaW5nRmxhZ3MgKCkge1xuICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCBnZXRQYXJzaW5nRmxhZ3ModGhpcykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludmFsaWRBdCAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJzaW5nRmxhZ3ModGhpcykub3ZlcmZsb3c7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRpb25EYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXQ6IHRoaXMuX2ksXG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMuX2YsXG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgICAgIGlzVVRDOiB0aGlzLl9pc1VUQyxcbiAgICAgICAgICAgIHN0cmljdDogdGhpcy5fc3RyaWN0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydnZycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndlZWtZZWFyKCkgJSAxMDA7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ0dHJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMDtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4gKHRva2VuLCBnZXR0ZXIpIHtcbiAgICAgICAgYWRkRm9ybWF0VG9rZW4oMCwgW3Rva2VuLCB0b2tlbi5sZW5ndGhdLCAwLCBnZXR0ZXIpO1xuICAgIH1cblxuICAgIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2cnLCAgICAgJ3dlZWtZZWFyJyk7XG4gICAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZ2cnLCAgICAnd2Vla1llYXInKTtcbiAgICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHJywgICdpc29XZWVrWWVhcicpO1xuICAgIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0dHJywgJ2lzb1dlZWtZZWFyJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ3dlZWtZZWFyJywgJ2dnJyk7XG4gICAgYWRkVW5pdEFsaWFzKCdpc29XZWVrWWVhcicsICdHRycpO1xuXG4gICAgLy8gUFJJT1JJVFlcblxuICAgIGFkZFVuaXRQcmlvcml0eSgnd2Vla1llYXInLCAxKTtcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtZZWFyJywgMSk7XG5cblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ0cnLCAgICAgIG1hdGNoU2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCdnJywgICAgICBtYXRjaFNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbignR0cnLCAgICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2dnJywgICAgIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdHR0dHJywgICBtYXRjaDF0bzQsIG1hdGNoNCk7XG4gICAgYWRkUmVnZXhUb2tlbignZ2dnZycsICAgbWF0Y2gxdG80LCBtYXRjaDQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0dHR0dHJywgIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbiAgICBhZGRSZWdleFRva2VuKCdnZ2dnZycsICBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbiAgICBhZGRXZWVrUGFyc2VUb2tlbihbJ2dnZ2cnLCAnZ2dnZ2cnLCAnR0dHRycsICdHR0dHRyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMildID0gdG9JbnQoaW5wdXQpO1xuICAgIH0pO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oWydnZycsICdHRyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgd2Vla1t0b2tlbl0gPSB1dGlsc19ob29rc19faG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xuICAgIH0pO1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXIgKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKHRoaXMsXG4gICAgICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrKCksXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5KCksXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93LFxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRveSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0SVNPV2Vla1llYXIgKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKHRoaXMsXG4gICAgICAgICAgICAgICAgaW5wdXQsIHRoaXMuaXNvV2VlaygpLCB0aGlzLmlzb1dlZWtkYXkoKSwgMSwgNCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SVNPV2Vla3NJblllYXIgKCkge1xuICAgICAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIDEsIDQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFdlZWtzSW5ZZWFyICgpIHtcbiAgICAgICAgdmFyIHdlZWtJbmZvID0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWs7XG4gICAgICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgd2Vla0luZm8uZG93LCB3ZWVrSW5mby5kb3kpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldFdlZWtZZWFySGVscGVyKGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgICAgICB2YXIgd2Vla3NUYXJnZXQ7XG4gICAgICAgIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gd2Vla09mWWVhcih0aGlzLCBkb3csIGRveSkueWVhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdlZWtzVGFyZ2V0ID0gd2Vla3NJblllYXIoaW5wdXQsIGRvdywgZG95KTtcbiAgICAgICAgICAgIGlmICh3ZWVrID4gd2Vla3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB3ZWVrID0gd2Vla3NUYXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2V0V2Vla0FsbC5jYWxsKHRoaXMsIGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRXZWVrQWxsKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgICAgICB2YXIgZGF5T2ZZZWFyRGF0YSA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpLFxuICAgICAgICAgICAgZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoZGF5T2ZZZWFyRGF0YS55ZWFyLCAwLCBkYXlPZlllYXJEYXRhLmRheU9mWWVhcik7XG5cbiAgICAgICAgdGhpcy55ZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgICAgIHRoaXMubW9udGgoZGF0ZS5nZXRVVENNb250aCgpKTtcbiAgICAgICAgdGhpcy5kYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ1EnLCAwLCAnUW8nLCAncXVhcnRlcicpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdxdWFydGVyJywgJ1EnKTtcblxuICAgIC8vIFBSSU9SSVRZXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ3F1YXJ0ZXInLCA3KTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ1EnLCBtYXRjaDEpO1xuICAgIGFkZFBhcnNlVG9rZW4oJ1EnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W01PTlRIXSA9ICh0b0ludChpbnB1dCkgLSAxKSAqIDM7XG4gICAgfSk7XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRTZXRRdWFydGVyIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IE1hdGguY2VpbCgodGhpcy5tb250aCgpICsgMSkgLyAzKSA6IHRoaXMubW9udGgoKGlucHV0IC0gMSkgKiAzICsgdGhpcy5tb250aCgpICUgMyk7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ0QnLCBbJ0REJywgMl0sICdEbycsICdkYXRlJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ2RhdGUnLCAnRCcpO1xuXG4gICAgLy8gUFJJT1JPSVRZXG4gICAgYWRkVW5pdFByaW9yaXR5KCdkYXRlJywgOSk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdEJywgIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignREQnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignRG8nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gaXNTdHJpY3QgPyBsb2NhbGUuX29yZGluYWxQYXJzZSA6IGxvY2FsZS5fb3JkaW5hbFBhcnNlTGVuaWVudDtcbiAgICB9KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydEJywgJ0REJ10sIERBVEUpO1xuICAgIGFkZFBhcnNlVG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICBhcnJheVtEQVRFXSA9IHRvSW50KGlucHV0Lm1hdGNoKG1hdGNoMXRvMilbMF0sIDEwKTtcbiAgICB9KTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIHZhciBnZXRTZXREYXlPZk1vbnRoID0gbWFrZUdldFNldCgnRGF0ZScsIHRydWUpO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ0RERCcsIFsnRERERCcsIDNdLCAnREREbycsICdkYXlPZlllYXInKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnZGF5T2ZZZWFyJywgJ0RERCcpO1xuXG4gICAgLy8gUFJJT1JJVFlcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2RheU9mWWVhcicsIDQpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignREREJywgIG1hdGNoMXRvMyk7XG4gICAgYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XG4gICAgYWRkUGFyc2VUb2tlbihbJ0RERCcsICdEREREJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcbiAgICB9KTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldERheU9mWWVhciAoaW5wdXQpIHtcbiAgICAgICAgdmFyIGRheU9mWWVhciA9IE1hdGgucm91bmQoKHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKSAtIHRoaXMuY2xvbmUoKS5zdGFydE9mKCd5ZWFyJykpIC8gODY0ZTUpICsgMTtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyBkYXlPZlllYXIgOiB0aGlzLmFkZCgoaW5wdXQgLSBkYXlPZlllYXIpLCAnZCcpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDJdLCAwLCAnbWludXRlJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ21pbnV0ZScsICdtJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdtaW51dGUnLCAxNCk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdtJywgIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignbW0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUGFyc2VUb2tlbihbJ20nLCAnbW0nXSwgTUlOVVRFKTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIHZhciBnZXRTZXRNaW51dGUgPSBtYWtlR2V0U2V0KCdNaW51dGVzJywgZmFsc2UpO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ3MnLCBbJ3NzJywgMl0sIDAsICdzZWNvbmQnKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnc2Vjb25kJywgJ3MnKTtcblxuICAgIC8vIFBSSU9SSVRZXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ3NlY29uZCcsIDE1KTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ3MnLCAgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdzcycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRQYXJzZVRva2VuKFsncycsICdzcyddLCBTRUNPTkQpO1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgdmFyIGdldFNldFNlY29uZCA9IG1ha2VHZXRTZXQoJ1NlY29uZHMnLCBmYWxzZSk7XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignUycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIH5+KHRoaXMubWlsbGlzZWNvbmQoKSAvIDEwMCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIH5+KHRoaXMubWlsbGlzZWNvbmQoKSAvIDEwKTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnU1NTJywgM10sIDAsICdtaWxsaXNlY29uZCcpO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnU1NTUycsIDRdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDtcbiAgICB9KTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTJywgNV0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDtcbiAgICB9KTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTUycsIDZdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwO1xuICAgIH0pO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTUycsIDddLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDtcbiAgICB9KTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1NTJywgOF0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwMDtcbiAgICB9KTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1NTUycsIDldLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDAwO1xuICAgIH0pO1xuXG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ21pbGxpc2Vjb25kJywgJ21zJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdtaWxsaXNlY29uZCcsIDE2KTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ1MnLCAgICBtYXRjaDF0bzMsIG1hdGNoMSk7XG4gICAgYWRkUmVnZXhUb2tlbignU1MnLCAgIG1hdGNoMXRvMywgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdTU1MnLCAgbWF0Y2gxdG8zLCBtYXRjaDMpO1xuXG4gICAgdmFyIHRva2VuO1xuICAgIGZvciAodG9rZW4gPSAnU1NTUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICAgICAgYWRkUmVnZXhUb2tlbih0b2tlbiwgbWF0Y2hVbnNpZ25lZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNcyhpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbTUlMTElTRUNPTkRdID0gdG9JbnQoKCcwLicgKyBpbnB1dCkgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBmb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgICAgIGFkZFBhcnNlVG9rZW4odG9rZW4sIHBhcnNlTXMpO1xuICAgIH1cbiAgICAvLyBNT01FTlRTXG5cbiAgICB2YXIgZ2V0U2V0TWlsbGlzZWNvbmQgPSBtYWtlR2V0U2V0KCdNaWxsaXNlY29uZHMnLCBmYWxzZSk7XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbigneicsICAwLCAwLCAnem9uZUFiYnInKTtcbiAgICBhZGRGb3JtYXRUb2tlbignenonLCAwLCAwLCAnem9uZU5hbWUnKTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFpvbmVBYmJyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ1VUQycgOiAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRab25lTmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1VUQyA/ICdDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZScgOiAnJztcbiAgICB9XG5cbiAgICB2YXIgbW9tZW50UHJvdG90eXBlX19wcm90byA9IE1vbWVudC5wcm90b3R5cGU7XG5cbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmFkZCAgICAgICAgICAgICAgID0gYWRkX3N1YnRyYWN0X19hZGQ7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5jYWxlbmRhciAgICAgICAgICA9IG1vbWVudF9jYWxlbmRhcl9fY2FsZW5kYXI7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5jbG9uZSAgICAgICAgICAgICA9IGNsb25lO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uZGlmZiAgICAgICAgICAgICAgPSBkaWZmO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uZW5kT2YgICAgICAgICAgICAgPSBlbmRPZjtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmZvcm1hdCAgICAgICAgICAgID0gZm9ybWF0O1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uZnJvbSAgICAgICAgICAgICAgPSBmcm9tO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uZnJvbU5vdyAgICAgICAgICAgPSBmcm9tTm93O1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8udG8gICAgICAgICAgICAgICAgPSB0bztcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLnRvTm93ICAgICAgICAgICAgID0gdG9Ob3c7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5nZXQgICAgICAgICAgICAgICA9IHN0cmluZ0dldDtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmludmFsaWRBdCAgICAgICAgID0gaW52YWxpZEF0O1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uaXNBZnRlciAgICAgICAgICAgPSBpc0FmdGVyO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uaXNCZWZvcmUgICAgICAgICAgPSBpc0JlZm9yZTtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmlzQmV0d2VlbiAgICAgICAgID0gaXNCZXR3ZWVuO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uaXNTYW1lICAgICAgICAgICAgPSBpc1NhbWU7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5pc1NhbWVPckFmdGVyICAgICA9IGlzU2FtZU9yQWZ0ZXI7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5pc1NhbWVPckJlZm9yZSAgICA9IGlzU2FtZU9yQmVmb3JlO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uaXNWYWxpZCAgICAgICAgICAgPSBtb21lbnRfdmFsaWRfX2lzVmFsaWQ7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5sYW5nICAgICAgICAgICAgICA9IGxhbmc7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5sb2NhbGUgICAgICAgICAgICA9IGxvY2FsZTtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmxvY2FsZURhdGEgICAgICAgID0gbG9jYWxlRGF0YTtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLm1heCAgICAgICAgICAgICAgID0gcHJvdG90eXBlTWF4O1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8ubWluICAgICAgICAgICAgICAgPSBwcm90b3R5cGVNaW47XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5wYXJzaW5nRmxhZ3MgICAgICA9IHBhcnNpbmdGbGFncztcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLnNldCAgICAgICAgICAgICAgID0gc3RyaW5nU2V0O1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uc3RhcnRPZiAgICAgICAgICAgPSBzdGFydE9mO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uc3VidHJhY3QgICAgICAgICAgPSBhZGRfc3VidHJhY3RfX3N1YnRyYWN0O1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8udG9BcnJheSAgICAgICAgICAgPSB0b0FycmF5O1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8udG9PYmplY3QgICAgICAgICAgPSB0b09iamVjdDtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLnRvRGF0ZSAgICAgICAgICAgID0gdG9EYXRlO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8udG9JU09TdHJpbmcgICAgICAgPSBtb21lbnRfZm9ybWF0X190b0lTT1N0cmluZztcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLnRvSlNPTiAgICAgICAgICAgID0gdG9KU09OO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8udG9TdHJpbmcgICAgICAgICAgPSB0b1N0cmluZztcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLnVuaXggICAgICAgICAgICAgID0gdW5peDtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLnZhbHVlT2YgICAgICAgICAgID0gdG9fdHlwZV9fdmFsdWVPZjtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmNyZWF0aW9uRGF0YSAgICAgID0gY3JlYXRpb25EYXRhO1xuXG4gICAgLy8gWWVhclxuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8ueWVhciAgICAgICA9IGdldFNldFllYXI7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5pc0xlYXBZZWFyID0gZ2V0SXNMZWFwWWVhcjtcblxuICAgIC8vIFdlZWsgWWVhclxuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8ud2Vla1llYXIgICAgPSBnZXRTZXRXZWVrWWVhcjtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmlzb1dlZWtZZWFyID0gZ2V0U2V0SVNPV2Vla1llYXI7XG5cbiAgICAvLyBRdWFydGVyXG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5xdWFydGVyID0gbW9tZW50UHJvdG90eXBlX19wcm90by5xdWFydGVycyA9IGdldFNldFF1YXJ0ZXI7XG5cbiAgICAvLyBNb250aFxuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8ubW9udGggICAgICAgPSBnZXRTZXRNb250aDtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmRheXNJbk1vbnRoID0gZ2V0RGF5c0luTW9udGg7XG5cbiAgICAvLyBXZWVrXG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by53ZWVrICAgICAgICAgICA9IG1vbWVudFByb3RvdHlwZV9fcHJvdG8ud2Vla3MgICAgICAgID0gZ2V0U2V0V2VlaztcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmlzb1dlZWsgICAgICAgID0gbW9tZW50UHJvdG90eXBlX19wcm90by5pc29XZWVrcyAgICAgPSBnZXRTZXRJU09XZWVrO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8ud2Vla3NJblllYXIgICAgPSBnZXRXZWVrc0luWWVhcjtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmlzb1dlZWtzSW5ZZWFyID0gZ2V0SVNPV2Vla3NJblllYXI7XG5cbiAgICAvLyBEYXlcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmRhdGUgICAgICAgPSBnZXRTZXREYXlPZk1vbnRoO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uZGF5ICAgICAgICA9IG1vbWVudFByb3RvdHlwZV9fcHJvdG8uZGF5cyAgICAgICAgICAgICA9IGdldFNldERheU9mV2VlaztcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLndlZWtkYXkgICAgPSBnZXRTZXRMb2NhbGVEYXlPZldlZWs7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5pc29XZWVrZGF5ID0gZ2V0U2V0SVNPRGF5T2ZXZWVrO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uZGF5T2ZZZWFyICA9IGdldFNldERheU9mWWVhcjtcblxuICAgIC8vIEhvdXJcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmhvdXIgPSBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmhvdXJzID0gZ2V0U2V0SG91cjtcblxuICAgIC8vIE1pbnV0ZVxuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8ubWludXRlID0gbW9tZW50UHJvdG90eXBlX19wcm90by5taW51dGVzID0gZ2V0U2V0TWludXRlO1xuXG4gICAgLy8gU2Vjb25kXG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5zZWNvbmQgPSBtb21lbnRQcm90b3R5cGVfX3Byb3RvLnNlY29uZHMgPSBnZXRTZXRTZWNvbmQ7XG5cbiAgICAvLyBNaWxsaXNlY29uZFxuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8ubWlsbGlzZWNvbmQgPSBtb21lbnRQcm90b3R5cGVfX3Byb3RvLm1pbGxpc2Vjb25kcyA9IGdldFNldE1pbGxpc2Vjb25kO1xuXG4gICAgLy8gT2Zmc2V0XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by51dGNPZmZzZXQgICAgICAgICAgICA9IGdldFNldE9mZnNldDtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLnV0YyAgICAgICAgICAgICAgICAgID0gc2V0T2Zmc2V0VG9VVEM7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5sb2NhbCAgICAgICAgICAgICAgICA9IHNldE9mZnNldFRvTG9jYWw7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5wYXJzZVpvbmUgICAgICAgICAgICA9IHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0O1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uaGFzQWxpZ25lZEhvdXJPZmZzZXQgPSBoYXNBbGlnbmVkSG91ck9mZnNldDtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmlzRFNUICAgICAgICAgICAgICAgID0gaXNEYXlsaWdodFNhdmluZ1RpbWU7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5pc0xvY2FsICAgICAgICAgICAgICA9IGlzTG9jYWw7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5pc1V0Y09mZnNldCAgICAgICAgICA9IGlzVXRjT2Zmc2V0O1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uaXNVdGMgICAgICAgICAgICAgICAgPSBpc1V0YztcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmlzVVRDICAgICAgICAgICAgICAgID0gaXNVdGM7XG5cbiAgICAvLyBUaW1lem9uZVxuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8uem9uZUFiYnIgPSBnZXRab25lQWJicjtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLnpvbmVOYW1lID0gZ2V0Wm9uZU5hbWU7XG5cbiAgICAvLyBEZXByZWNhdGlvbnNcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLmRhdGVzICA9IGRlcHJlY2F0ZSgnZGF0ZXMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIGRhdGUgaW5zdGVhZC4nLCBnZXRTZXREYXlPZk1vbnRoKTtcbiAgICBtb21lbnRQcm90b3R5cGVfX3Byb3RvLm1vbnRocyA9IGRlcHJlY2F0ZSgnbW9udGhzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb250aCBpbnN0ZWFkJywgZ2V0U2V0TW9udGgpO1xuICAgIG1vbWVudFByb3RvdHlwZV9fcHJvdG8ueWVhcnMgID0gZGVwcmVjYXRlKCd5ZWFycyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgeWVhciBpbnN0ZWFkJywgZ2V0U2V0WWVhcik7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by56b25lICAgPSBkZXByZWNhdGUoJ21vbWVudCgpLnpvbmUgaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudCgpLnV0Y09mZnNldCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL3pvbmUvJywgZ2V0U2V0Wm9uZSk7XG4gICAgbW9tZW50UHJvdG90eXBlX19wcm90by5pc0RTVFNoaWZ0ZWQgPSBkZXByZWNhdGUoJ2lzRFNUU2hpZnRlZCBpcyBkZXByZWNhdGVkLiBTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9kc3Qtc2hpZnRlZC8gZm9yIG1vcmUgaW5mb3JtYXRpb24nLCBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQpO1xuXG4gICAgdmFyIG1vbWVudFByb3RvdHlwZSA9IG1vbWVudFByb3RvdHlwZV9fcHJvdG87XG5cbiAgICBmdW5jdGlvbiBtb21lbnRfX2NyZWF0ZVVuaXggKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBsb2NhbF9fY3JlYXRlTG9jYWwoaW5wdXQgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb21lbnRfX2NyZWF0ZUluWm9uZSAoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbF9fY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5wYXJzZVpvbmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVQYXJzZVBvc3RGb3JtYXQgKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cblxuICAgIHZhciBwcm90b3R5cGVfX3Byb3RvID0gTG9jYWxlLnByb3RvdHlwZTtcblxuICAgIHByb3RvdHlwZV9fcHJvdG8uY2FsZW5kYXIgICAgICAgID0gbG9jYWxlX2NhbGVuZGFyX19jYWxlbmRhcjtcbiAgICBwcm90b3R5cGVfX3Byb3RvLmxvbmdEYXRlRm9ybWF0ICA9IGxvbmdEYXRlRm9ybWF0O1xuICAgIHByb3RvdHlwZV9fcHJvdG8uaW52YWxpZERhdGUgICAgID0gaW52YWxpZERhdGU7XG4gICAgcHJvdG90eXBlX19wcm90by5vcmRpbmFsICAgICAgICAgPSBvcmRpbmFsO1xuICAgIHByb3RvdHlwZV9fcHJvdG8ucHJlcGFyc2UgICAgICAgID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xuICAgIHByb3RvdHlwZV9fcHJvdG8ucG9zdGZvcm1hdCAgICAgID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xuICAgIHByb3RvdHlwZV9fcHJvdG8ucmVsYXRpdmVUaW1lICAgID0gcmVsYXRpdmVfX3JlbGF0aXZlVGltZTtcbiAgICBwcm90b3R5cGVfX3Byb3RvLnBhc3RGdXR1cmUgICAgICA9IHBhc3RGdXR1cmU7XG4gICAgcHJvdG90eXBlX19wcm90by5zZXQgICAgICAgICAgICAgPSBsb2NhbGVfc2V0X19zZXQ7XG5cbiAgICAvLyBNb250aFxuICAgIHByb3RvdHlwZV9fcHJvdG8ubW9udGhzICAgICAgICAgICAgPSAgICAgICAgbG9jYWxlTW9udGhzO1xuICAgIHByb3RvdHlwZV9fcHJvdG8ubW9udGhzU2hvcnQgICAgICAgPSAgICAgICAgbG9jYWxlTW9udGhzU2hvcnQ7XG4gICAgcHJvdG90eXBlX19wcm90by5tb250aHNQYXJzZSAgICAgICA9ICAgICAgICBsb2NhbGVNb250aHNQYXJzZTtcbiAgICBwcm90b3R5cGVfX3Byb3RvLm1vbnRoc1JlZ2V4ICAgICAgID0gbW9udGhzUmVnZXg7XG4gICAgcHJvdG90eXBlX19wcm90by5tb250aHNTaG9ydFJlZ2V4ICA9IG1vbnRoc1Nob3J0UmVnZXg7XG5cbiAgICAvLyBXZWVrXG4gICAgcHJvdG90eXBlX19wcm90by53ZWVrID0gbG9jYWxlV2VlaztcbiAgICBwcm90b3R5cGVfX3Byb3RvLmZpcnN0RGF5T2ZZZWFyID0gbG9jYWxlRmlyc3REYXlPZlllYXI7XG4gICAgcHJvdG90eXBlX19wcm90by5maXJzdERheU9mV2VlayA9IGxvY2FsZUZpcnN0RGF5T2ZXZWVrO1xuXG4gICAgLy8gRGF5IG9mIFdlZWtcbiAgICBwcm90b3R5cGVfX3Byb3RvLndlZWtkYXlzICAgICAgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzO1xuICAgIHByb3RvdHlwZV9fcHJvdG8ud2Vla2RheXNNaW4gICAgPSAgICAgICAgbG9jYWxlV2Vla2RheXNNaW47XG4gICAgcHJvdG90eXBlX19wcm90by53ZWVrZGF5c1Nob3J0ICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c1Nob3J0O1xuICAgIHByb3RvdHlwZV9fcHJvdG8ud2Vla2RheXNQYXJzZSAgPSAgICAgICAgbG9jYWxlV2Vla2RheXNQYXJzZTtcblxuICAgIHByb3RvdHlwZV9fcHJvdG8ud2Vla2RheXNSZWdleCAgICAgICA9ICAgICAgICB3ZWVrZGF5c1JlZ2V4O1xuICAgIHByb3RvdHlwZV9fcHJvdG8ud2Vla2RheXNTaG9ydFJlZ2V4ICA9ICAgICAgICB3ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgcHJvdG90eXBlX19wcm90by53ZWVrZGF5c01pblJlZ2V4ICAgID0gICAgICAgIHdlZWtkYXlzTWluUmVnZXg7XG5cbiAgICAvLyBIb3Vyc1xuICAgIHByb3RvdHlwZV9fcHJvdG8uaXNQTSA9IGxvY2FsZUlzUE07XG4gICAgcHJvdG90eXBlX19wcm90by5tZXJpZGllbSA9IGxvY2FsZU1lcmlkaWVtO1xuXG4gICAgZnVuY3Rpb24gbGlzdHNfX2dldCAoZm9ybWF0LCBpbmRleCwgZmllbGQsIHNldHRlcikge1xuICAgICAgICB2YXIgbG9jYWxlID0gbG9jYWxlX2xvY2FsZXNfX2dldExvY2FsZSgpO1xuICAgICAgICB2YXIgdXRjID0gY3JlYXRlX3V0Y19fY3JlYXRlVVRDKCkuc2V0KHNldHRlciwgaW5kZXgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlW2ZpZWxkXSh1dGMsIGZvcm1hdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdE1vbnRoc0ltcGwgKGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0c19fZ2V0KGZvcm1hdCwgaW5kZXgsIGZpZWxkLCAnbW9udGgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgb3V0ID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBvdXRbaV0gPSBsaXN0c19fZ2V0KGZvcm1hdCwgaSwgZmllbGQsICdtb250aCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgLy8gKClcbiAgICAvLyAoNSlcbiAgICAvLyAoZm10LCA1KVxuICAgIC8vIChmbXQpXG4gICAgLy8gKHRydWUpXG4gICAgLy8gKHRydWUsIDUpXG4gICAgLy8gKHRydWUsIGZtdCwgNSlcbiAgICAvLyAodHJ1ZSwgZm10KVxuICAgIGZ1bmN0aW9uIGxpc3RXZWVrZGF5c0ltcGwgKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgZmllbGQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsb2NhbGVTb3J0ZWQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBsb2NhbGVTb3J0ZWQ7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGxvY2FsZVNvcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsb2NhbGUgPSBsb2NhbGVfbG9jYWxlc19fZ2V0TG9jYWxlKCksXG4gICAgICAgICAgICBzaGlmdCA9IGxvY2FsZVNvcnRlZCA/IGxvY2FsZS5fd2Vlay5kb3cgOiAwO1xuXG4gICAgICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdHNfX2dldChmb3JtYXQsIChpbmRleCArIHNoaWZ0KSAlIDcsIGZpZWxkLCAnZGF5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBvdXRbaV0gPSBsaXN0c19fZ2V0KGZvcm1hdCwgKGkgKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdHNfX2xpc3RNb250aHMgKGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsICdtb250aHMnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0c19fbGlzdE1vbnRoc1Nob3J0IChmb3JtYXQsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCAnbW9udGhzU2hvcnQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0c19fbGlzdFdlZWtkYXlzIChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXMnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0c19fbGlzdFdlZWtkYXlzU2hvcnQgKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c1Nob3J0Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdHNfX2xpc3RXZWVrZGF5c01pbiAobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzTWluJyk7XG4gICAgfVxuXG4gICAgbG9jYWxlX2xvY2FsZXNfX2dldFNldEdsb2JhbExvY2FsZSgnZW4nLCB7XG4gICAgICAgIG9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXG4gICAgICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwLFxuICAgICAgICAgICAgICAgIG91dHB1dCA9ICh0b0ludChudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVyICsgb3V0cHV0O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLmxhbmcgPSBkZXByZWNhdGUoJ21vbWVudC5sYW5nIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlIGluc3RlYWQuJywgbG9jYWxlX2xvY2FsZXNfX2dldFNldEdsb2JhbExvY2FsZSk7XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLmxhbmdEYXRhID0gZGVwcmVjYXRlKCdtb21lbnQubGFuZ0RhdGEgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGVEYXRhIGluc3RlYWQuJywgbG9jYWxlX2xvY2FsZXNfX2dldExvY2FsZSk7XG5cbiAgICB2YXIgbWF0aEFicyA9IE1hdGguYWJzO1xuXG4gICAgZnVuY3Rpb24gZHVyYXRpb25fYWJzX19hYnMgKCkge1xuICAgICAgICB2YXIgZGF0YSAgICAgICAgICAgPSB0aGlzLl9kYXRhO1xuXG4gICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IG1hdGhBYnModGhpcy5fbWlsbGlzZWNvbmRzKTtcbiAgICAgICAgdGhpcy5fZGF5cyAgICAgICAgID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcbiAgICAgICAgdGhpcy5fbW9udGhzICAgICAgID0gbWF0aEFicyh0aGlzLl9tb250aHMpO1xuXG4gICAgICAgIGRhdGEubWlsbGlzZWNvbmRzICA9IG1hdGhBYnMoZGF0YS5taWxsaXNlY29uZHMpO1xuICAgICAgICBkYXRhLnNlY29uZHMgICAgICAgPSBtYXRoQWJzKGRhdGEuc2Vjb25kcyk7XG4gICAgICAgIGRhdGEubWludXRlcyAgICAgICA9IG1hdGhBYnMoZGF0YS5taW51dGVzKTtcbiAgICAgICAgZGF0YS5ob3VycyAgICAgICAgID0gbWF0aEFicyhkYXRhLmhvdXJzKTtcbiAgICAgICAgZGF0YS5tb250aHMgICAgICAgID0gbWF0aEFicyhkYXRhLm1vbnRocyk7XG4gICAgICAgIGRhdGEueWVhcnMgICAgICAgICA9IG1hdGhBYnMoZGF0YS55ZWFycyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHVyYXRpb25fYWRkX3N1YnRyYWN0X19hZGRTdWJ0cmFjdCAoZHVyYXRpb24sIGlucHV0LCB2YWx1ZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZV9fY3JlYXRlRHVyYXRpb24oaW5wdXQsIHZhbHVlKTtcblxuICAgICAgICBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9taWxsaXNlY29uZHM7XG4gICAgICAgIGR1cmF0aW9uLl9kYXlzICAgICAgICAgKz0gZGlyZWN0aW9uICogb3RoZXIuX2RheXM7XG4gICAgICAgIGR1cmF0aW9uLl9tb250aHMgICAgICAgKz0gZGlyZWN0aW9uICogb3RoZXIuX21vbnRocztcblxuICAgICAgICByZXR1cm4gZHVyYXRpb24uX2J1YmJsZSgpO1xuICAgIH1cblxuICAgIC8vIHN1cHBvcnRzIG9ubHkgMi4wLXN0eWxlIGFkZCgxLCAncycpIG9yIGFkZChkdXJhdGlvbilcbiAgICBmdW5jdGlvbiBkdXJhdGlvbl9hZGRfc3VidHJhY3RfX2FkZCAoaW5wdXQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBkdXJhdGlvbl9hZGRfc3VidHJhY3RfX2FkZFN1YnRyYWN0KHRoaXMsIGlucHV0LCB2YWx1ZSwgMSk7XG4gICAgfVxuXG4gICAgLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgc3VidHJhY3QoMSwgJ3MnKSBvciBzdWJ0cmFjdChkdXJhdGlvbilcbiAgICBmdW5jdGlvbiBkdXJhdGlvbl9hZGRfc3VidHJhY3RfX3N1YnRyYWN0IChpbnB1dCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uX2FkZF9zdWJ0cmFjdF9fYWRkU3VidHJhY3QodGhpcywgaW5wdXQsIHZhbHVlLCAtMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWJzQ2VpbCAobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnViYmxlICgpIHtcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcbiAgICAgICAgdmFyIGRheXMgICAgICAgICA9IHRoaXMuX2RheXM7XG4gICAgICAgIHZhciBtb250aHMgICAgICAgPSB0aGlzLl9tb250aHM7XG4gICAgICAgIHZhciBkYXRhICAgICAgICAgPSB0aGlzLl9kYXRhO1xuICAgICAgICB2YXIgc2Vjb25kcywgbWludXRlcywgaG91cnMsIHllYXJzLCBtb250aHNGcm9tRGF5cztcblxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbWl4IG9mIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB2YWx1ZXMsIGJ1YmJsZSBkb3duIGZpcnN0XG4gICAgICAgIC8vIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjE2NlxuICAgICAgICBpZiAoISgobWlsbGlzZWNvbmRzID49IDAgJiYgZGF5cyA+PSAwICYmIG1vbnRocyA+PSAwKSB8fFxuICAgICAgICAgICAgICAgIChtaWxsaXNlY29uZHMgPD0gMCAmJiBkYXlzIDw9IDAgJiYgbW9udGhzIDw9IDApKSkge1xuICAgICAgICAgICAgbWlsbGlzZWNvbmRzICs9IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRocykgKyBkYXlzKSAqIDg2NGU1O1xuICAgICAgICAgICAgZGF5cyA9IDA7XG4gICAgICAgICAgICBtb250aHMgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGJ1YmJsZXMgdXAgdmFsdWVzLCBzZWUgdGhlIHRlc3RzIGZvclxuICAgICAgICAvLyBleGFtcGxlcyBvZiB3aGF0IHRoYXQgbWVhbnMuXG4gICAgICAgIGRhdGEubWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmRzICUgMTAwMDtcblxuICAgICAgICBzZWNvbmRzICAgICAgICAgICA9IGFic0Zsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgICAgICBkYXRhLnNlY29uZHMgICAgICA9IHNlY29uZHMgJSA2MDtcblxuICAgICAgICBtaW51dGVzICAgICAgICAgICA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgICAgIGRhdGEubWludXRlcyAgICAgID0gbWludXRlcyAlIDYwO1xuXG4gICAgICAgIGhvdXJzICAgICAgICAgICAgID0gYWJzRmxvb3IobWludXRlcyAvIDYwKTtcbiAgICAgICAgZGF0YS5ob3VycyAgICAgICAgPSBob3VycyAlIDI0O1xuXG4gICAgICAgIGRheXMgKz0gYWJzRmxvb3IoaG91cnMgLyAyNCk7XG5cbiAgICAgICAgLy8gY29udmVydCBkYXlzIHRvIG1vbnRoc1xuICAgICAgICBtb250aHNGcm9tRGF5cyA9IGFic0Zsb29yKGRheXNUb01vbnRocyhkYXlzKSk7XG4gICAgICAgIG1vbnRocyArPSBtb250aHNGcm9tRGF5cztcbiAgICAgICAgZGF5cyAtPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHNGcm9tRGF5cykpO1xuXG4gICAgICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICAgICAgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gICAgICAgIG1vbnRocyAlPSAxMjtcblxuICAgICAgICBkYXRhLmRheXMgICA9IGRheXM7XG4gICAgICAgIGRhdGEubW9udGhzID0gbW9udGhzO1xuICAgICAgICBkYXRhLnllYXJzICA9IHllYXJzO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRheXNUb01vbnRocyAoZGF5cykge1xuICAgICAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXG4gICAgICAgIC8vIDQwMCB5ZWFycyBoYXZlIDEyIG1vbnRocyA9PT0gNDgwMFxuICAgICAgICByZXR1cm4gZGF5cyAqIDQ4MDAgLyAxNDYwOTc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9udGhzVG9EYXlzIChtb250aHMpIHtcbiAgICAgICAgLy8gdGhlIHJldmVyc2Ugb2YgZGF5c1RvTW9udGhzXG4gICAgICAgIHJldHVybiBtb250aHMgKiAxNDYwOTcgLyA0ODAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFzICh1bml0cykge1xuICAgICAgICB2YXIgZGF5cztcbiAgICAgICAgdmFyIG1vbnRocztcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcblxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgICAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgICAgICAgZGF5cyAgID0gdGhpcy5fZGF5cyAgICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XG4gICAgICAgICAgICBtb250aHMgPSB0aGlzLl9tb250aHMgKyBkYXlzVG9Nb250aHMoZGF5cyk7XG4gICAgICAgICAgICByZXR1cm4gdW5pdHMgPT09ICdtb250aCcgPyBtb250aHMgOiBtb250aHMgLyAxMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGhhbmRsZSBtaWxsaXNlY29uZHMgc2VwYXJhdGVseSBiZWNhdXNlIG9mIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIChpc3N1ZSAjMTg2NylcbiAgICAgICAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgTWF0aC5yb3VuZChtb250aHNUb0RheXModGhpcy5fbW9udGhzKSk7XG4gICAgICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnd2VlaycgICA6IHJldHVybiBkYXlzIC8gNyAgICAgKyBtaWxsaXNlY29uZHMgLyA2MDQ4ZTU7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGF5JyAgICA6IHJldHVybiBkYXlzICAgICAgICAgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgICAgICAgICAgICBjYXNlICdob3VyJyAgIDogcmV0dXJuIGRheXMgKiAyNCAgICArIG1pbGxpc2Vjb25kcyAvIDM2ZTU7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWludXRlJyA6IHJldHVybiBkYXlzICogMTQ0MCAgKyBtaWxsaXNlY29uZHMgLyA2ZTQ7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2Vjb25kJyA6IHJldHVybiBkYXlzICogODY0MDAgKyBtaWxsaXNlY29uZHMgLyAxMDAwO1xuICAgICAgICAgICAgICAgIC8vIE1hdGguZmxvb3IgcHJldmVudHMgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgaGVyZVxuICAgICAgICAgICAgICAgIGNhc2UgJ21pbGxpc2Vjb25kJzogcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDg2NGU1KSArIG1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdW5pdCAnICsgdW5pdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogVXNlIHRoaXMuYXMoJ21zJyk/XG4gICAgZnVuY3Rpb24gZHVyYXRpb25fYXNfX3ZhbHVlT2YgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzICtcbiAgICAgICAgICAgIHRoaXMuX2RheXMgKiA4NjRlNSArXG4gICAgICAgICAgICAodGhpcy5fbW9udGhzICUgMTIpICogMjU5MmU2ICtcbiAgICAgICAgICAgIHRvSW50KHRoaXMuX21vbnRocyAvIDEyKSAqIDMxNTM2ZTZcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlQXMgKGFsaWFzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcyhhbGlhcyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGFzTWlsbGlzZWNvbmRzID0gbWFrZUFzKCdtcycpO1xuICAgIHZhciBhc1NlY29uZHMgICAgICA9IG1ha2VBcygncycpO1xuICAgIHZhciBhc01pbnV0ZXMgICAgICA9IG1ha2VBcygnbScpO1xuICAgIHZhciBhc0hvdXJzICAgICAgICA9IG1ha2VBcygnaCcpO1xuICAgIHZhciBhc0RheXMgICAgICAgICA9IG1ha2VBcygnZCcpO1xuICAgIHZhciBhc1dlZWtzICAgICAgICA9IG1ha2VBcygndycpO1xuICAgIHZhciBhc01vbnRocyAgICAgICA9IG1ha2VBcygnTScpO1xuICAgIHZhciBhc1llYXJzICAgICAgICA9IG1ha2VBcygneScpO1xuXG4gICAgZnVuY3Rpb24gZHVyYXRpb25fZ2V0X19nZXQgKHVuaXRzKSB7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICByZXR1cm4gdGhpc1t1bml0cyArICdzJ10oKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlR2V0dGVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhW25hbWVdO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBtaWxsaXNlY29uZHMgPSBtYWtlR2V0dGVyKCdtaWxsaXNlY29uZHMnKTtcbiAgICB2YXIgc2Vjb25kcyAgICAgID0gbWFrZUdldHRlcignc2Vjb25kcycpO1xuICAgIHZhciBtaW51dGVzICAgICAgPSBtYWtlR2V0dGVyKCdtaW51dGVzJyk7XG4gICAgdmFyIGhvdXJzICAgICAgICA9IG1ha2VHZXR0ZXIoJ2hvdXJzJyk7XG4gICAgdmFyIGRheXMgICAgICAgICA9IG1ha2VHZXR0ZXIoJ2RheXMnKTtcbiAgICB2YXIgbW9udGhzICAgICAgID0gbWFrZUdldHRlcignbW9udGhzJyk7XG4gICAgdmFyIHllYXJzICAgICAgICA9IG1ha2VHZXR0ZXIoJ3llYXJzJyk7XG5cbiAgICBmdW5jdGlvbiB3ZWVrcyAoKSB7XG4gICAgICAgIHJldHVybiBhYnNGbG9vcih0aGlzLmRheXMoKSAvIDcpO1xuICAgIH1cblxuICAgIHZhciByb3VuZCA9IE1hdGgucm91bmQ7XG4gICAgdmFyIHRocmVzaG9sZHMgPSB7XG4gICAgICAgIHM6IDQ1LCAgLy8gc2Vjb25kcyB0byBtaW51dGVcbiAgICAgICAgbTogNDUsICAvLyBtaW51dGVzIHRvIGhvdXJcbiAgICAgICAgaDogMjIsICAvLyBob3VycyB0byBkYXlcbiAgICAgICAgZDogMjYsICAvLyBkYXlzIHRvIG1vbnRoXG4gICAgICAgIE06IDExICAgLy8gbW9udGhzIHRvIHllYXJcbiAgICB9O1xuXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcbiAgICBmdW5jdGlvbiBzdWJzdGl0dXRlVGltZUFnbyhzdHJpbmcsIG51bWJlciwgd2l0aG91dFN1ZmZpeCwgaXNGdXR1cmUsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLnJlbGF0aXZlVGltZShudW1iZXIgfHwgMSwgISF3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkdXJhdGlvbl9odW1hbml6ZV9fcmVsYXRpdmVUaW1lIChwb3NOZWdEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeCwgbG9jYWxlKSB7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGNyZWF0ZV9fY3JlYXRlRHVyYXRpb24ocG9zTmVnRHVyYXRpb24pLmFicygpO1xuICAgICAgICB2YXIgc2Vjb25kcyAgPSByb3VuZChkdXJhdGlvbi5hcygncycpKTtcbiAgICAgICAgdmFyIG1pbnV0ZXMgID0gcm91bmQoZHVyYXRpb24uYXMoJ20nKSk7XG4gICAgICAgIHZhciBob3VycyAgICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdoJykpO1xuICAgICAgICB2YXIgZGF5cyAgICAgPSByb3VuZChkdXJhdGlvbi5hcygnZCcpKTtcbiAgICAgICAgdmFyIG1vbnRocyAgID0gcm91bmQoZHVyYXRpb24uYXMoJ00nKSk7XG4gICAgICAgIHZhciB5ZWFycyAgICA9IHJvdW5kKGR1cmF0aW9uLmFzKCd5JykpO1xuXG4gICAgICAgIHZhciBhID0gc2Vjb25kcyA8IHRocmVzaG9sZHMucyAmJiBbJ3MnLCBzZWNvbmRzXSAgfHxcbiAgICAgICAgICAgICAgICBtaW51dGVzIDw9IDEgICAgICAgICAgICYmIFsnbSddICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgIG1pbnV0ZXMgPCB0aHJlc2hvbGRzLm0gJiYgWydtbScsIG1pbnV0ZXNdIHx8XG4gICAgICAgICAgICAgICAgaG91cnMgICA8PSAxICAgICAgICAgICAmJiBbJ2gnXSAgICAgICAgICAgfHxcbiAgICAgICAgICAgICAgICBob3VycyAgIDwgdGhyZXNob2xkcy5oICYmIFsnaGgnLCBob3Vyc10gICB8fFxuICAgICAgICAgICAgICAgIGRheXMgICAgPD0gMSAgICAgICAgICAgJiYgWydkJ10gICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgZGF5cyAgICA8IHRocmVzaG9sZHMuZCAmJiBbJ2RkJywgZGF5c10gICAgfHxcbiAgICAgICAgICAgICAgICBtb250aHMgIDw9IDEgICAgICAgICAgICYmIFsnTSddICAgICAgICAgICB8fFxuICAgICAgICAgICAgICAgIG1vbnRocyAgPCB0aHJlc2hvbGRzLk0gJiYgWydNTScsIG1vbnRoc10gIHx8XG4gICAgICAgICAgICAgICAgeWVhcnMgICA8PSAxICAgICAgICAgICAmJiBbJ3knXSAgICAgICAgICAgfHwgWyd5eScsIHllYXJzXTtcblxuICAgICAgICBhWzJdID0gd2l0aG91dFN1ZmZpeDtcbiAgICAgICAgYVszXSA9ICtwb3NOZWdEdXJhdGlvbiA+IDA7XG4gICAgICAgIGFbNF0gPSBsb2NhbGU7XG4gICAgICAgIHJldHVybiBzdWJzdGl0dXRlVGltZUFnby5hcHBseShudWxsLCBhKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IHRoZSByb3VuZGluZyBmdW5jdGlvbiBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG4gICAgZnVuY3Rpb24gZHVyYXRpb25faHVtYW5pemVfX2dldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nIChyb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByb3VuZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mKHJvdW5kaW5nRnVuY3Rpb24pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByb3VuZCA9IHJvdW5kaW5nRnVuY3Rpb247XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCBhIHRocmVzaG9sZCBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG4gICAgZnVuY3Rpb24gZHVyYXRpb25faHVtYW5pemVfX2dldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCAodGhyZXNob2xkLCBsaW1pdCkge1xuICAgICAgICBpZiAodGhyZXNob2xkc1t0aHJlc2hvbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJlc2hvbGRzW3RocmVzaG9sZF0gPSBsaW1pdDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaHVtYW5pemUgKHdpdGhTdWZmaXgpIHtcbiAgICAgICAgdmFyIGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xuICAgICAgICB2YXIgb3V0cHV0ID0gZHVyYXRpb25faHVtYW5pemVfX3JlbGF0aXZlVGltZSh0aGlzLCAhd2l0aFN1ZmZpeCwgbG9jYWxlKTtcblxuICAgICAgICBpZiAod2l0aFN1ZmZpeCkge1xuICAgICAgICAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbiAgICB9XG5cbiAgICB2YXIgaXNvX3N0cmluZ19fYWJzID0gTWF0aC5hYnM7XG5cbiAgICBmdW5jdGlvbiBpc29fc3RyaW5nX190b0lTT1N0cmluZygpIHtcbiAgICAgICAgLy8gZm9yIElTTyBzdHJpbmdzIHdlIGRvIG5vdCB1c2UgdGhlIG5vcm1hbCBidWJibGluZyBydWxlczpcbiAgICAgICAgLy8gICogbWlsbGlzZWNvbmRzIGJ1YmJsZSB1cCB1bnRpbCB0aGV5IGJlY29tZSBob3Vyc1xuICAgICAgICAvLyAgKiBkYXlzIGRvIG5vdCBidWJibGUgYXQgYWxsXG4gICAgICAgIC8vICAqIG1vbnRocyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgeWVhcnNcbiAgICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHRoZXJlIGlzIG5vIGNvbnRleHQtZnJlZSBjb252ZXJzaW9uIGJldHdlZW4gaG91cnMgYW5kIGRheXNcbiAgICAgICAgLy8gKHRoaW5rIG9mIGNsb2NrIGNoYW5nZXMpXG4gICAgICAgIC8vIGFuZCBhbHNvIG5vdCBiZXR3ZWVuIGRheXMgYW5kIG1vbnRocyAoMjgtMzEgZGF5cyBwZXIgbW9udGgpXG4gICAgICAgIHZhciBzZWNvbmRzID0gaXNvX3N0cmluZ19fYWJzKHRoaXMuX21pbGxpc2Vjb25kcykgLyAxMDAwO1xuICAgICAgICB2YXIgZGF5cyAgICAgICAgID0gaXNvX3N0cmluZ19fYWJzKHRoaXMuX2RheXMpO1xuICAgICAgICB2YXIgbW9udGhzICAgICAgID0gaXNvX3N0cmluZ19fYWJzKHRoaXMuX21vbnRocyk7XG4gICAgICAgIHZhciBtaW51dGVzLCBob3VycywgeWVhcnM7XG5cbiAgICAgICAgLy8gMzYwMCBzZWNvbmRzIC0+IDYwIG1pbnV0ZXMgLT4gMSBob3VyXG4gICAgICAgIG1pbnV0ZXMgICAgICAgICAgID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICAgICAgaG91cnMgICAgICAgICAgICAgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICAgICAgICBzZWNvbmRzICU9IDYwO1xuICAgICAgICBtaW51dGVzICU9IDYwO1xuXG4gICAgICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICAgICAgeWVhcnMgID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICAgICAgICBtb250aHMgJT0gMTI7XG5cblxuICAgICAgICAvLyBpbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZG9yZGlsbGUvbW9tZW50LWlzb2R1cmF0aW9uL2Jsb2IvbWFzdGVyL21vbWVudC5pc29kdXJhdGlvbi5qc1xuICAgICAgICB2YXIgWSA9IHllYXJzO1xuICAgICAgICB2YXIgTSA9IG1vbnRocztcbiAgICAgICAgdmFyIEQgPSBkYXlzO1xuICAgICAgICB2YXIgaCA9IGhvdXJzO1xuICAgICAgICB2YXIgbSA9IG1pbnV0ZXM7XG4gICAgICAgIHZhciBzID0gc2Vjb25kcztcbiAgICAgICAgdmFyIHRvdGFsID0gdGhpcy5hc1NlY29uZHMoKTtcblxuICAgICAgICBpZiAoIXRvdGFsKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBzYW1lIGFzIEMjJ3MgKE5vZGEpIGFuZCBweXRob24gKGlzb2RhdGUpLi4uXG4gICAgICAgICAgICAvLyBidXQgbm90IG90aGVyIEpTIChnb29nLmRhdGUpXG4gICAgICAgICAgICByZXR1cm4gJ1AwRCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHRvdGFsIDwgMCA/ICctJyA6ICcnKSArXG4gICAgICAgICAgICAnUCcgK1xuICAgICAgICAgICAgKFkgPyBZICsgJ1knIDogJycpICtcbiAgICAgICAgICAgIChNID8gTSArICdNJyA6ICcnKSArXG4gICAgICAgICAgICAoRCA/IEQgKyAnRCcgOiAnJykgK1xuICAgICAgICAgICAgKChoIHx8IG0gfHwgcykgPyAnVCcgOiAnJykgK1xuICAgICAgICAgICAgKGggPyBoICsgJ0gnIDogJycpICtcbiAgICAgICAgICAgIChtID8gbSArICdNJyA6ICcnKSArXG4gICAgICAgICAgICAocyA/IHMgKyAnUycgOiAnJyk7XG4gICAgfVxuXG4gICAgdmFyIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8gPSBEdXJhdGlvbi5wcm90b3R5cGU7XG5cbiAgICBkdXJhdGlvbl9wcm90b3R5cGVfX3Byb3RvLmFicyAgICAgICAgICAgID0gZHVyYXRpb25fYWJzX19hYnM7XG4gICAgZHVyYXRpb25fcHJvdG90eXBlX19wcm90by5hZGQgICAgICAgICAgICA9IGR1cmF0aW9uX2FkZF9zdWJ0cmFjdF9fYWRkO1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8uc3VidHJhY3QgICAgICAgPSBkdXJhdGlvbl9hZGRfc3VidHJhY3RfX3N1YnRyYWN0O1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8uYXMgICAgICAgICAgICAgPSBhcztcbiAgICBkdXJhdGlvbl9wcm90b3R5cGVfX3Byb3RvLmFzTWlsbGlzZWNvbmRzID0gYXNNaWxsaXNlY29uZHM7XG4gICAgZHVyYXRpb25fcHJvdG90eXBlX19wcm90by5hc1NlY29uZHMgICAgICA9IGFzU2Vjb25kcztcbiAgICBkdXJhdGlvbl9wcm90b3R5cGVfX3Byb3RvLmFzTWludXRlcyAgICAgID0gYXNNaW51dGVzO1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8uYXNIb3VycyAgICAgICAgPSBhc0hvdXJzO1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8uYXNEYXlzICAgICAgICAgPSBhc0RheXM7XG4gICAgZHVyYXRpb25fcHJvdG90eXBlX19wcm90by5hc1dlZWtzICAgICAgICA9IGFzV2Vla3M7XG4gICAgZHVyYXRpb25fcHJvdG90eXBlX19wcm90by5hc01vbnRocyAgICAgICA9IGFzTW9udGhzO1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8uYXNZZWFycyAgICAgICAgPSBhc1llYXJzO1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8udmFsdWVPZiAgICAgICAgPSBkdXJhdGlvbl9hc19fdmFsdWVPZjtcbiAgICBkdXJhdGlvbl9wcm90b3R5cGVfX3Byb3RvLl9idWJibGUgICAgICAgID0gYnViYmxlO1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8uZ2V0ICAgICAgICAgICAgPSBkdXJhdGlvbl9nZXRfX2dldDtcbiAgICBkdXJhdGlvbl9wcm90b3R5cGVfX3Byb3RvLm1pbGxpc2Vjb25kcyAgID0gbWlsbGlzZWNvbmRzO1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8uc2Vjb25kcyAgICAgICAgPSBzZWNvbmRzO1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8ubWludXRlcyAgICAgICAgPSBtaW51dGVzO1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8uaG91cnMgICAgICAgICAgPSBob3VycztcbiAgICBkdXJhdGlvbl9wcm90b3R5cGVfX3Byb3RvLmRheXMgICAgICAgICAgID0gZGF5cztcbiAgICBkdXJhdGlvbl9wcm90b3R5cGVfX3Byb3RvLndlZWtzICAgICAgICAgID0gd2Vla3M7XG4gICAgZHVyYXRpb25fcHJvdG90eXBlX19wcm90by5tb250aHMgICAgICAgICA9IG1vbnRocztcbiAgICBkdXJhdGlvbl9wcm90b3R5cGVfX3Byb3RvLnllYXJzICAgICAgICAgID0geWVhcnM7XG4gICAgZHVyYXRpb25fcHJvdG90eXBlX19wcm90by5odW1hbml6ZSAgICAgICA9IGh1bWFuaXplO1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8udG9JU09TdHJpbmcgICAgPSBpc29fc3RyaW5nX190b0lTT1N0cmluZztcbiAgICBkdXJhdGlvbl9wcm90b3R5cGVfX3Byb3RvLnRvU3RyaW5nICAgICAgID0gaXNvX3N0cmluZ19fdG9JU09TdHJpbmc7XG4gICAgZHVyYXRpb25fcHJvdG90eXBlX19wcm90by50b0pTT04gICAgICAgICA9IGlzb19zdHJpbmdfX3RvSVNPU3RyaW5nO1xuICAgIGR1cmF0aW9uX3Byb3RvdHlwZV9fcHJvdG8ubG9jYWxlICAgICAgICAgPSBsb2NhbGU7XG4gICAgZHVyYXRpb25fcHJvdG90eXBlX19wcm90by5sb2NhbGVEYXRhICAgICA9IGxvY2FsZURhdGE7XG5cbiAgICAvLyBEZXByZWNhdGlvbnNcbiAgICBkdXJhdGlvbl9wcm90b3R5cGVfX3Byb3RvLnRvSXNvU3RyaW5nID0gZGVwcmVjYXRlKCd0b0lzb1N0cmluZygpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgdG9JU09TdHJpbmcoKSBpbnN0ZWFkIChub3RpY2UgdGhlIGNhcGl0YWxzKScsIGlzb19zdHJpbmdfX3RvSVNPU3RyaW5nKTtcbiAgICBkdXJhdGlvbl9wcm90b3R5cGVfX3Byb3RvLmxhbmcgPSBsYW5nO1xuXG4gICAgLy8gU2lkZSBlZmZlY3QgaW1wb3J0c1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ1gnLCAwLCAwLCAndW5peCcpO1xuICAgIGFkZEZvcm1hdFRva2VuKCd4JywgMCwgMCwgJ3ZhbHVlT2YnKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ3gnLCBtYXRjaFNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbignWCcsIG1hdGNoVGltZXN0YW1wKTtcbiAgICBhZGRQYXJzZVRva2VuKCdYJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHBhcnNlRmxvYXQoaW5wdXQsIDEwKSAqIDEwMDApO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ3gnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUodG9JbnQoaW5wdXQpKTtcbiAgICB9KTtcblxuICAgIC8vIFNpZGUgZWZmZWN0IGltcG9ydHNcblxuXG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLnZlcnNpb24gPSAnMi4xNS4xJztcblxuICAgIHNldEhvb2tDYWxsYmFjayhsb2NhbF9fY3JlYXRlTG9jYWwpO1xuXG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLmZuICAgICAgICAgICAgICAgICAgICA9IG1vbWVudFByb3RvdHlwZTtcbiAgICB1dGlsc19ob29rc19faG9va3MubWluICAgICAgICAgICAgICAgICAgID0gbWluO1xuICAgIHV0aWxzX2hvb2tzX19ob29rcy5tYXggICAgICAgICAgICAgICAgICAgPSBtYXg7XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLm5vdyAgICAgICAgICAgICAgICAgICA9IG5vdztcbiAgICB1dGlsc19ob29rc19faG9va3MudXRjICAgICAgICAgICAgICAgICAgID0gY3JlYXRlX3V0Y19fY3JlYXRlVVRDO1xuICAgIHV0aWxzX2hvb2tzX19ob29rcy51bml4ICAgICAgICAgICAgICAgICAgPSBtb21lbnRfX2NyZWF0ZVVuaXg7XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLm1vbnRocyAgICAgICAgICAgICAgICA9IGxpc3RzX19saXN0TW9udGhzO1xuICAgIHV0aWxzX2hvb2tzX19ob29rcy5pc0RhdGUgICAgICAgICAgICAgICAgPSBpc0RhdGU7XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLmxvY2FsZSAgICAgICAgICAgICAgICA9IGxvY2FsZV9sb2NhbGVzX19nZXRTZXRHbG9iYWxMb2NhbGU7XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLmludmFsaWQgICAgICAgICAgICAgICA9IHZhbGlkX19jcmVhdGVJbnZhbGlkO1xuICAgIHV0aWxzX2hvb2tzX19ob29rcy5kdXJhdGlvbiAgICAgICAgICAgICAgPSBjcmVhdGVfX2NyZWF0ZUR1cmF0aW9uO1xuICAgIHV0aWxzX2hvb2tzX19ob29rcy5pc01vbWVudCAgICAgICAgICAgICAgPSBpc01vbWVudDtcbiAgICB1dGlsc19ob29rc19faG9va3Mud2Vla2RheXMgICAgICAgICAgICAgID0gbGlzdHNfX2xpc3RXZWVrZGF5cztcbiAgICB1dGlsc19ob29rc19faG9va3MucGFyc2Vab25lICAgICAgICAgICAgID0gbW9tZW50X19jcmVhdGVJblpvbmU7XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLmxvY2FsZURhdGEgICAgICAgICAgICA9IGxvY2FsZV9sb2NhbGVzX19nZXRMb2NhbGU7XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLmlzRHVyYXRpb24gICAgICAgICAgICA9IGlzRHVyYXRpb247XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLm1vbnRoc1Nob3J0ICAgICAgICAgICA9IGxpc3RzX19saXN0TW9udGhzU2hvcnQ7XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLndlZWtkYXlzTWluICAgICAgICAgICA9IGxpc3RzX19saXN0V2Vla2RheXNNaW47XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLmRlZmluZUxvY2FsZSAgICAgICAgICA9IGRlZmluZUxvY2FsZTtcbiAgICB1dGlsc19ob29rc19faG9va3MudXBkYXRlTG9jYWxlICAgICAgICAgID0gdXBkYXRlTG9jYWxlO1xuICAgIHV0aWxzX2hvb2tzX19ob29rcy5sb2NhbGVzICAgICAgICAgICAgICAgPSBsb2NhbGVfbG9jYWxlc19fbGlzdExvY2FsZXM7XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLndlZWtkYXlzU2hvcnQgICAgICAgICA9IGxpc3RzX19saXN0V2Vla2RheXNTaG9ydDtcbiAgICB1dGlsc19ob29rc19faG9va3Mubm9ybWFsaXplVW5pdHMgICAgICAgID0gbm9ybWFsaXplVW5pdHM7XG4gICAgdXRpbHNfaG9va3NfX2hvb2tzLnJlbGF0aXZlVGltZVJvdW5kaW5nID0gZHVyYXRpb25faHVtYW5pemVfX2dldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nO1xuICAgIHV0aWxzX2hvb2tzX19ob29rcy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQgPSBkdXJhdGlvbl9odW1hbml6ZV9fZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkO1xuICAgIHV0aWxzX2hvb2tzX19ob29rcy5jYWxlbmRhckZvcm1hdCAgICAgICAgPSBnZXRDYWxlbmRhckZvcm1hdDtcbiAgICB1dGlsc19ob29rc19faG9va3MucHJvdG90eXBlICAgICAgICAgICAgID0gbW9tZW50UHJvdG90eXBlO1xuXG4gICAgdmFyIF9tb21lbnQgPSB1dGlsc19ob29rc19faG9va3M7XG5cbiAgICByZXR1cm4gX21vbWVudDtcblxufSkpOyIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKmlzdGFuYnVsIGlnbm9yZSBuZXh0OmNhbnQgdGVzdCovXG4gIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgcm9vdC5vYmplY3RQYXRoID0gZmFjdG9yeSgpO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyXG4gICAgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIF9oYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSl7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpIGluIHZhbHVlKSB7XG4gICAgICAgIGlmIChfaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvU3RyaW5nKHR5cGUpe1xuICAgIHJldHVybiB0b1N0ci5jYWxsKHR5cGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpe1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHRvU3RyaW5nKHZhbHVlKSA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3RyaW5nKG9iail7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnIHx8IHRvU3RyaW5nKG9iaikgPT09IFwiW29iamVjdCBTdHJpbmddXCI7XG4gIH1cblxuICBmdW5jdGlvbiBpc09iamVjdChvYmope1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZyhvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBcnJheShvYmope1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PT0gJ251bWJlcicgJiYgdG9TdHJpbmcob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQm9vbGVhbihvYmope1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnYm9vbGVhbicgfHwgdG9TdHJpbmcob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0S2V5KGtleSl7XG4gICAgdmFyIGludEtleSA9IHBhcnNlSW50KGtleSk7XG4gICAgaWYgKGludEtleS50b1N0cmluZygpID09PSBrZXkpIHtcbiAgICAgIHJldHVybiBpbnRLZXk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXQob2JqLCBwYXRoLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKXtcbiAgICBpZiAoaXNOdW1iZXIocGF0aCkpIHtcbiAgICAgIHBhdGggPSBbcGF0aF07XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KHBhdGgpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHJldHVybiBzZXQob2JqLCBwYXRoLnNwbGl0KCcuJyksIHZhbHVlLCBkb05vdFJlcGxhY2UpO1xuICAgIH1cbiAgICB2YXIgY3VycmVudFBhdGggPSBnZXRLZXkocGF0aFswXSk7XG5cbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBvbGRWYWwgPSBvYmpbY3VycmVudFBhdGhdO1xuICAgICAgaWYgKG9sZFZhbCA9PT0gdm9pZCAwIHx8ICFkb05vdFJlcGxhY2UpIHtcbiAgICAgICAgb2JqW2N1cnJlbnRQYXRoXSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbDtcbiAgICB9XG5cbiAgICBpZiAob2JqW2N1cnJlbnRQYXRoXSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoaXNOdW1iZXIoY3VycmVudFBhdGgpKSB7XG4gICAgICAgIG9ialtjdXJyZW50UGF0aF0gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtjdXJyZW50UGF0aF0gPSB7fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2V0KG9ialtjdXJyZW50UGF0aF0sIHBhdGguc2xpY2UoMSksIHZhbHVlLCBkb05vdFJlcGxhY2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsKG9iaiwgcGF0aCkge1xuICAgIGlmIChpc051bWJlcihwYXRoKSkge1xuICAgICAgcGF0aCA9IFtwYXRoXTtcbiAgICB9XG5cbiAgICBpZiAoaXNFbXB0eShvYmopKSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cblxuICAgIGlmIChpc0VtcHR5KHBhdGgpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZihpc1N0cmluZyhwYXRoKSkge1xuICAgICAgcmV0dXJuIGRlbChvYmosIHBhdGguc3BsaXQoJy4nKSk7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRQYXRoID0gZ2V0S2V5KHBhdGhbMF0pO1xuICAgIHZhciBvbGRWYWwgPSBvYmpbY3VycmVudFBhdGhdO1xuXG4gICAgaWYocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChvbGRWYWwgIT09IHZvaWQgMCkge1xuICAgICAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgb2JqLnNwbGljZShjdXJyZW50UGF0aCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtjdXJyZW50UGF0aF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9ialtjdXJyZW50UGF0aF0gIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gZGVsKG9ialtjdXJyZW50UGF0aF0sIHBhdGguc2xpY2UoMSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgb2JqZWN0UGF0aCA9IHt9O1xuXG4gIG9iamVjdFBhdGguZW5zdXJlRXhpc3RzID0gZnVuY3Rpb24gKG9iaiwgcGF0aCwgdmFsdWUpe1xuICAgIHJldHVybiBzZXQob2JqLCBwYXRoLCB2YWx1ZSwgdHJ1ZSk7XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5zZXQgPSBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWx1ZSwgZG9Ob3RSZXBsYWNlKXtcbiAgICByZXR1cm4gc2V0KG9iaiwgcGF0aCwgdmFsdWUsIGRvTm90UmVwbGFjZSk7XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5pbnNlcnQgPSBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWx1ZSwgYXQpe1xuICAgIHZhciBhcnIgPSBvYmplY3RQYXRoLmdldChvYmosIHBhdGgpO1xuICAgIGF0ID0gfn5hdDtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgYXJyID0gW107XG4gICAgICBvYmplY3RQYXRoLnNldChvYmosIHBhdGgsIGFycik7XG4gICAgfVxuICAgIGFyci5zcGxpY2UoYXQsIDAsIHZhbHVlKTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmVtcHR5ID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgaWYgKGlzRW1wdHkocGF0aCkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KG9iaikpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlLCBpO1xuICAgIGlmICghKHZhbHVlID0gb2JqZWN0UGF0aC5nZXQob2JqLCBwYXRoKSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9iamVjdFBhdGguc2V0KG9iaiwgcGF0aCwgJycpO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIG9iamVjdFBhdGguc2V0KG9iaiwgcGF0aCwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gb2JqZWN0UGF0aC5zZXQob2JqLCBwYXRoLCAwKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5sZW5ndGggPSAwO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBmb3IgKGkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBpKSkge1xuICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2JqZWN0UGF0aC5zZXQob2JqLCBwYXRoLCBudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgb2JqZWN0UGF0aC5wdXNoID0gZnVuY3Rpb24gKG9iaiwgcGF0aCAvKiwgdmFsdWVzICovKXtcbiAgICB2YXIgYXJyID0gb2JqZWN0UGF0aC5nZXQob2JqLCBwYXRoKTtcbiAgICBpZiAoIWlzQXJyYXkoYXJyKSkge1xuICAgICAgYXJyID0gW107XG4gICAgICBvYmplY3RQYXRoLnNldChvYmosIHBhdGgsIGFycik7XG4gICAgfVxuXG4gICAgYXJyLnB1c2guYXBwbHkoYXJyLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpKTtcbiAgfTtcblxuICBvYmplY3RQYXRoLmNvYWxlc2NlID0gZnVuY3Rpb24gKG9iaiwgcGF0aHMsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXRocy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKCh2YWx1ZSA9IG9iamVjdFBhdGguZ2V0KG9iaiwgcGF0aHNbaV0pKSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZ2V0ID0gZnVuY3Rpb24gKG9iaiwgcGF0aCwgZGVmYXVsdFZhbHVlKXtcbiAgICBpZiAoaXNOdW1iZXIocGF0aCkpIHtcbiAgICAgIHBhdGggPSBbcGF0aF07XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KHBhdGgpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAoaXNFbXB0eShvYmopKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgIHJldHVybiBvYmplY3RQYXRoLmdldChvYmosIHBhdGguc3BsaXQoJy4nKSwgZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudFBhdGggPSBnZXRLZXkocGF0aFswXSk7XG5cbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmIChvYmpbY3VycmVudFBhdGhdID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpbY3VycmVudFBhdGhdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3RQYXRoLmdldChvYmpbY3VycmVudFBhdGhdLCBwYXRoLnNsaWNlKDEpLCBkZWZhdWx0VmFsdWUpO1xuICB9O1xuXG4gIG9iamVjdFBhdGguZGVsID0gZnVuY3Rpb24ob2JqLCBwYXRoKSB7XG4gICAgcmV0dXJuIGRlbChvYmosIHBhdGgpO1xuICB9O1xuXG4gIHJldHVybiBvYmplY3RQYXRoO1xufSk7IiwidmFyIG9iamVjdFBhdGggPSByZXF1aXJlKCdvYmplY3QtcGF0aCcpO1xudmFyIHNvcnRCeTtcbnZhciBzb3J0O1xuXG4vKipcbiAqIFJldHVybiBhIGNvbXBhcmF0b3IgZnVuY3Rpb25cbiAqIEBwYXJhbSAge1N0cmluZ30gcHJvcGVydHkgVGhlIGtleSB0byBzb3J0IGJ5XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gICAgICAgIFJldHVybnMgdGhlIGNvbXBhcmF0b3IgZnVuY3Rpb25cbiAqL1xuc29ydCA9IGZ1bmN0aW9uIHNvcnQocHJvcGVydHkpIHtcbiAgICB2YXIgc29ydE9yZGVyID0gMTtcbiAgICB2YXIgZm47XG5cbiAgICBpZiAocHJvcGVydHlbMF0gPT09IFwiLVwiKSB7XG4gICAgICAgIHNvcnRPcmRlciA9IC0xO1xuICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gZm4oYSxiKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIGlmIChvYmplY3RQYXRoLmdldChhLCBwcm9wZXJ0eSkgPCBvYmplY3RQYXRoLmdldChiLCBwcm9wZXJ0eSkpIHJlc3VsdCA9IC0xO1xuICAgICAgICBpZiAob2JqZWN0UGF0aC5nZXQoYSwgcHJvcGVydHkpID4gb2JqZWN0UGF0aC5nZXQoYiwgcHJvcGVydHkpKSByZXN1bHQgPSAxO1xuICAgICAgICBpZiAob2JqZWN0UGF0aC5nZXQoYSwgcHJvcGVydHkpID09PSBvYmplY3RQYXRoLmdldChiLCBwcm9wZXJ0eSkpIHJlc3VsdCA9IDA7XG4gICAgICAgIHJldHVybiByZXN1bHQgKiBzb3J0T3JkZXI7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBjb21wYXJhdG9yIGZ1bmN0aW9uIHRoYXQgc29ydHMgYnkgbXVsdGlwbGUga2V5c1xuICogQHJldHVybiB7RnVuY3Rpb259IFJldHVybnMgdGhlIGNvbXBhcmF0b3IgZnVuY3Rpb25cbiAqL1xuc29ydEJ5ID0gZnVuY3Rpb24gc29ydEJ5KCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gYXJndW1lbnRzO1xuICAgIHZhciBmbjtcblxuICAgIHJldHVybiBmdW5jdGlvbiBmbihvYmoxLCBvYmoyKSB7XG4gICAgICAgIHZhciBudW1iZXJPZlByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmxlbmd0aCxcbiAgICAgICAgICAgIHJlc3VsdCA9IDAsXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAvKiB0cnkgZ2V0dGluZyBhIGRpZmZlcmVudCByZXN1bHQgZnJvbSAwIChlcXVhbClcbiAgICAgICAgICogYXMgbG9uZyBhcyB3ZSBoYXZlIGV4dHJhIHByb3BlcnRpZXMgdG8gY29tcGFyZVxuICAgICAgICAgKi9cbiAgICAgICAgd2hpbGUocmVzdWx0ID09PSAwICYmIGkgPCBudW1iZXJPZlByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHNvcnQocHJvcGVydGllc1tpXSkob2JqMSwgb2JqMik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYHNvcnRCeWBcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBzb3J0Qnk7IiwiY29uc3QgRVggPSByZXF1aXJlKFwiLi4vdmRvbV9lczZcIik7XG5jb25zdCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcbmxldCBnb0JhY2tMaXN0ID0gKCkgPT4ge1xuXG4gICBFWC5TZXRTdGF0ZSh7XG4gICAgICBjb21wRGlzcGxheTogXCJsaXN0XCJcbiAgIH0pO1xuXG59O1xuXG5jb25zdCBEZXRhaWxzID0gRVguY29tcG9uZW50KHtcbiAgIGNvbXBvbmVudE5hbWU6ICdkZXRhaWxzJyxcbiAgIHN0YXRlOiB7fSxcbiAgIGNvbXBvbmVudFJlbmRlcjogKHByb3BzKSA9PiB7XG4gICAgICBsZXQgZXhfZnJhbWV3b3JrID0gcHJvcHMuZXhfZnJhbWV3b3JrO1xuICAgICAgaWYgKCFleF9mcmFtZXdvcmspIHtcbiAgICAgICAgIHJldHVybiAoRVgubm9kZSgnZGl2Jywge2NsYXNzOiBcImNvbC14cy0xMlwifSwgW1wiTm8gRGF0YVwiXSkpO1xuICAgICAgfVxuICAgICAgbGV0IGcgPSBwcm9wcy5leF9kYXRhLmdlbmVyYWw7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICBFWC5ub2RlKCdkaXYnLCB7Y2xhc3M6IFwiY29sLXhzLTEyXCJ9LCBbXG4gICAgICAgICBFWC5ub2RlKCdkaXYnLCB7Y2xhc3M6IFwidG9wLWhlYWRsaW5lIGZ3LWhlYWRcIn0sIFtcbiAgICAgICAgICBleF9mcmFtZXdvcmtcbiAgICAgICAgIF0pLFxuICAgICAgICAgIEVYLm5vZGUoJ2RpdicsIHtjbGFzczogXCJyb3dcIn0sIFtcbiAgICAgICAgICBFWC5ub2RlKCdkaXYnLCB7Y2xhc3M6IFwiY29sLXhzLTJcIn0sIFtcbiAgICAgICAgICAgICAgRVgubm9kZSgnaW1nJywge2NsYXNzOiBcImRldGFpbHMtaW1nXCIsIHNyYzogZy5vd25lci5hdmF0YXJfdXJsfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICAgIEVYLm5vZGUoJ2RpdicsIHtjbGFzczogXCJjb2wteHMtOFwifSwgW1xuICAgICAgICAgICAgICBFWC5ub2RlKCd0YWJsZScsIHtjbGFzczogXCJ0YWJsZVwifSwgW1xuICAgICAgICAgICAgICAgICBFWC5ub2RlKCd0aGVhZCcsIG51bGwsIFtcbiAgICAgICAgICAgICAgRVgubm9kZSgndHInLCBudWxsLCBbXG4gICAgICAgICAgICAgICAgRVgubm9kZSgndGgnLCBudWxsLCBbXCJTdWJzY3JpYmVyc1wiXSksXG4gICAgICAgICAgICAgICAgRVgubm9kZSgndGgnLCBudWxsLCBbXCJGb3Jrc1wiXSksXG4gICAgICAgICAgICAgICAgRVgubm9kZSgndGgnLCBudWxsLCBbXCJXYXRjaGluZ1wiXSksXG4gICAgICAgICAgICAgICAgRVgubm9kZSgndGgnLCBudWxsLCBbXCJPcGVuIElzc3Vlc1wiXSksXG4gICAgICAgICAgICAgICAgRVgubm9kZSgndGgnLCBudWxsLCBbXCJGaXJzdCBDb21taXRcIl0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBFWC5ub2RlKCd0Ym9keScsIG51bGwsIFtcbiAgICAgICAgICAgICAgICAgIEVYLm5vZGUoJ3RyJywgbnVsbCwgW1xuICAgICAgICAgICAgICAgICAgICBFWC5ub2RlKCd0ZCcsIHtjbGFzczogXCJib2xkLWdyZWVuXCJ9LCBbXCIgXCIsICBnLnN1YnNjcmliZXJzX2NvdW50XSksXG4gICAgICAgICAgICAgICAgICAgICBFWC5ub2RlKCd0ZCcsIHtjbGFzczogXCJib2xkLWdyZWVuXCJ9LCBbIGcuZm9ya3NdKSxcbiAgICAgICAgICAgICAgICAgICAgICBFWC5ub2RlKCd0ZCcsIHtjbGFzczogXCJib2xkLWdyZWVuXCJ9LCBbIGcud2F0Y2hlcnNdKSxcbiAgICAgICAgICAgICAgICAgICAgICBFWC5ub2RlKCd0ZCcsIHtjbGFzczogXCJib2xkLXJlZFwifSwgW2cub3Blbl9pc3N1ZXNdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgRVgubm9kZSgndGQnLCB7Y2xhc3M6IFwiYm9sZC1ibGFja1wifSwgW21vbWVudChnLmNyZWF0ZWRfYXQpLmZvcm1hdCgnTEwnKV0pXG4gICAgICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcblxuICAgICAgICAgIF0pXG4gICAgICBdKSxcblxuXG4gICAgIEVYLm5vZGUoJ2RpdicsIHtjbGFzczogXCJyb3cgaGlkZS1lbG1cIn0sIFtcblxuICAgICBFWC5ub2RlKCdkaXYnLCB7Y2xhc3M6IFwiY29sLXhzLTQgY2VudGVyLXRleHRcIn0sIFtcIiBDdXJyZW50IElzc3VlIENvdW50OiBcIiwgZy5vcGVuX2lzc3Vlc10pXG4gICAgIF0pLFxuICAgICBFWC5ub2RlKCdkaXYnLCB7Y2xhc3M6IFwiYmxvY2stYnV0dG9uXCJ9LCBbXG4gICAgICAgIEVYLm5vZGUoJ2RpdicsIHtvbkNsaWNrOiBnb0JhY2tMaXN0LCBjbGFzczogXCJiaWctYnV0dCBjb29sLWJ1dHRvblwifSwgW1wiQmFjayB0byBMaXN0XCJdKVxuICAgICBdKVxuICAgICBdKVxuICAgICAgKVxuICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGV0YWlsczsiLCJjb25zdCBFWCA9IHJlcXVpcmUoXCIuLi92ZG9tX2VzNlwiKTtcbmNvbnN0IEdpdFJlcG8gPSByZXF1aXJlKFwiLi9naXRsaXN0LmpzXCIpO1xuY29uc3Qgc29ydEJ5ID0gcmVxdWlyZSgnc29ydC1ieScpO1xuXG5jb25zdCBnZXRBdmF0YXIgPSAoZGF0YSwgbG9hZGVkLCBhcHAsIHNvcnR3aXRoKSA9PiB7XG4gICBpZiAoIWxvYWRlZCkgcmV0dXJuIFtdO1xuXG4gICByZXR1cm4gT2JqZWN0LmtleXMoYXBwLmZ3TGlzdCkubWFwKChpdG0pID0+IHtcbiAgICAgIGxldCB3ID0gYXBwLmZ3TGlzdFtpdG1dO1xuICAgICAgdy5mcmFtZXdvcmsgPSBpdG07XG4gICAgICByZXR1cm4gdztcblxuICAgfSkuc29ydChzb3J0Qnkoc29ydHdpdGgpKS5tYXAoKG9iKSA9PiB7XG4gICAgICBsZXQgdyA9IGRhdGFbb2IuZnJhbWV3b3JrXTtcbiAgICAgIHcuc3RhdHMgPSBvYjtcbiAgICAgIHJldHVybiBHaXRSZXBvKHtleF9kYXRhOiB3LCBleF9hcHA6IGFwcCwgZXhfc3RhcnM6IHcuZ2VuZXJhbC5zdGFyZ2F6ZXJzX2NvdW50LCBleF9mcmFtZXdvcms6IG9iLmZyYW1ld29ya30pXG4gICB9KTtcbn1cbmxldCBzb3J0TGlzdCA9IChudW0pID0+IHtcbiAgIHJldHVybiAoKSA9PiB7XG4gICAgICBFWC5TZXRTdGF0ZSh7XG4gICAgICAgICBsaXN0OiB7XG4gICAgICAgICAgICBvcmRlcjogbnVtXG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgIH1cbn07XG5cbmNvbnN0IEZXbGlzdCA9IEVYLmNvbXBvbmVudCh7XG4gICBjb21wb25lbnROYW1lOiAnZndsaXN0JyxcbiAgIHN0YXRlOiB7fSxcbiAgIGNvbXBvbmVudFJlbmRlcjogKHByb3BzKSA9PiB7XG4gICAgICBsZXQge1xuICAgICAgICAgZXhfZGF0YSxcbiAgICAgICAgIGV4X2xvYWRlZCxcbiAgICAgICAgIGV4X2FwcFxuICAgICAgfSA9IHByb3BzO1xuICAgICAgZXhfZGF0YSA9IGV4X2RhdGEgPyBleF9kYXRhIDoge307XG5cblxuICAgICAgbGV0IGdpdFJlcG9zID0gZ2V0QXZhdGFyKGV4X2RhdGEsIGV4X2xvYWRlZCwgZXhfYXBwLCBleF9hcHAubGlzdC5vcmRlcik7XG4gICAgICBjb25zb2xlLmxvZygnZ2l0UmVwb3MnLCBnaXRSZXBvcylcbiAgICAgIHJldHVybiAoXG4gICAgICAgICBFWC5ub2RlKCdkaXYnLCB7Y2xhc3M6IFwiY29sLXhzLTEyXCJ9LCBbXG4gICAgICAgICBFWC5ub2RlKCdkaXYnLCB7Y2xhc3M6IFwidG9wLWhlYWRsaW5lXCJ9LCBbXG4gICAgICAgICBcIkZyYW1ld29ya3NcIlxuICAgICAgICAgXSksXG4gICAgICAgICBFWC5ub2RlKCdkaXYnLCB7Y2xhc3M6IFwibGlzdC1ieVwifSwgW1xuICAgICAgICAgRVgubm9kZSgnZGl2Jywge29uQ2xpY2s6IHNvcnRMaXN0KCdjcmVhdGVkJyksIGNsYXNzOiAgZXhfYXBwLmxpc3Qub3JkZXIgPT09ICdjcmVhdGVkJyA/IFwic29ydC1ieSBzZWxlY3RlZFwiIDogXCJzb3J0LWJ5XCJ9LCBbXG4gICAgICAgICAgXCJPbGRlc3RcIlxuICAgICAgICAgXSksXG4gICAgICAgICBFWC5ub2RlKCdkaXYnLCB7b25DbGljazogc29ydExpc3QoJy1jcmVhdGVkJyksIGNsYXNzOiAgZXhfYXBwLmxpc3Qub3JkZXIgPT09ICctY3JlYXRlZCcgPyBcInNvcnQtYnkgc2VsZWN0ZWRcIiA6IFwic29ydC1ieVwifSwgW1xuICAgICAgICAgIFwiTmV3ZXN0XCJcbiAgICAgICAgIF0pLFxuICAgICAgICAgRVgubm9kZSgnZGl2Jywge29uQ2xpY2s6IHNvcnRMaXN0KCctc3RhcnMnKSwgY2xhc3M6ICBleF9hcHAubGlzdC5vcmRlciA9PT0gJy1zdGFycycgPyBcInNvcnQtYnkgc2VsZWN0ZWRcIiA6IFwic29ydC1ieVwifSwgW1xuICAgICAgICAgIFwiU3RhcnNcIlxuICAgICAgICAgXSksXG4gICAgICAgICBFWC5ub2RlKCdkaXYnLCB7b25DbGljazogc29ydExpc3QoJy1zaXplJyksIGNsYXNzOiAgZXhfYXBwLmxpc3Qub3JkZXIgPT09ICctc2l6ZScgPyBcInNvcnQtYnkgc2VsZWN0ZWRcIiA6IFwic29ydC1ieVwifSwgW1xuICAgICAgICAgIFwiTGFyZ2VzdCBGaXJzdFwiXG4gICAgICAgICBdKSxcbiAgICAgICAgICBFWC5ub2RlKCdkaXYnLCB7b25DbGljazogc29ydExpc3QoJ3NpemUnKSwgY2xhc3M6ICBleF9hcHAubGlzdC5vcmRlciA9PT0gJ3NpemUnID8gXCJzb3J0LWJ5IHNlbGVjdGVkXCIgOiBcInNvcnQtYnlcIn0sIFtcbiAgICAgICAgICBcIlNtYWxsZXN0IEZpcnN0XCJcbiAgICAgICAgIF0pLFxuICAgICAgICAgIEVYLm5vZGUoJ2RpdicsIHtvbkNsaWNrOiBzb3J0TGlzdCgncGVyZicpLCBjbGFzczogIGV4X2FwcC5saXN0Lm9yZGVyID09PSAncGVyZicgPyBcInNvcnQtYnkgc2VsZWN0ZWRcIiA6IFwic29ydC1ieVwifSwgW1xuICAgICAgICAgIFwiUGVyZm9ybWFuY2VcIlxuICAgICAgICAgXSlcbiAgICAgICAgIF0pLFxuICAgICAgICAgRVgubm9kZSgndWwnLCB7Y2xhc3M6IFwibmljZS1saXN0IGJveGVkLWxpc3RcIn0sIFtcbiAgICAgICAgICAgZ2l0UmVwb3NcbiAgICAgICAgXSlcbiAgICAgXSlcbiAgICAgIClcbiAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZXbGlzdDsiLCJjb25zdCBFWCA9IHJlcXVpcmUoXCIuLi92ZG9tX2VzNlwiKTtcbmNvbnN0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xuXG5sZXQgZGV0YWlsc0NsaWNrID0gKGZyYW1ld29yaywgZGF0YSwgYXBwZGF0YSkgPT4ge1xuICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxldCBwYXlMb2FkID0gT2JqZWN0LmFzc2lnbih7fSwgYXBwZGF0YSwge1xuICAgICAgICAgY29tcERpc3BsYXk6IFwiZGV0YWlsc1wiLFxuICAgICAgICAgZGV0YWlsczoge1xuICAgICAgICAgICAgb252aWV3OiBmcmFtZXdvcmssXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIEVYLlNldFN0YXRlKHBheUxvYWQpO1xuICAgfVxufTtcblxuY29uc3QgR2l0UmVwbyA9IEVYLmNvbXBvbmVudCh7XG4gICBjb21wb25lbnROYW1lOiAnbGlzdDInLFxuICAgc3RhdGU6IHtcblxuICAgfSxcbiAgIGNvbXBvbmVudFJlbmRlcjogKHByb3BzKSA9PiB7XG4gICAgICBsZXQge1xuICAgICAgICAgZXhfZnJhbWV3b3JrLFxuICAgICAgICAgZXhfZGF0YSxcbiAgICAgICAgIGV4X2FwcCxcbiAgICAgICAgIGV4X3N0YXJzXG4gICAgICB9ID0gcHJvcHM7XG4gICAgICBsZXQgc2hvdyA9IGV4X2FwcC5hY3RpdmVmdyA9PT0gZXhfZnJhbWV3b3JrO1xuXG4gICAgICBsZXQgZyA9IGV4X2RhdGEuZ2VuZXJhbDtcbiAgICAgIGxldCB0aGVGdW5jID0gKCkgPT4ge1xuICAgICAgICAgbGV0IGNoYW5nZSA9IGV4X2FwcC5hY3RpdmVmdyA9PT0gZXhfZnJhbWV3b3JrID8gXCJub25lXCIgOiBleF9mcmFtZXdvcms7XG4gICAgICAgICBsZXQgcGF5TG9hZCA9IE9iamVjdC5hc3NpZ24oe30sIGV4X2FwcCwge1xuICAgICAgICAgICAgYWN0aXZlZnc6IGNoYW5nZVxuICAgICAgICAgfSk7XG4gICAgICAgICBFWC5TZXRTdGF0ZShwYXlMb2FkKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBnZXREZXRhaWxzID0gZGV0YWlsc0NsaWNrKGV4X2ZyYW1ld29yaywgZXhfZGF0YSwgZXhfYXBwKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgIEVYLm5vZGUoJ2xpJywge2NsYXNzOiBcInlpa2VzXCJ9LCBbXG4gICAgRVgubm9kZSgnZGl2Jywge2NsYXNzOiBcImluZm8tYmxvY2tcIiwgb25DbGljazogdGhlRnVuY30sIFtcbiAgICAgIEVYLm5vZGUoJ2ltZycsIHtjbGFzczogXCJsaS1pbWdcIiwgc3JjOiBnLm93bmVyLmF2YXRhcl91cmx9KSxcbiAgICAgIEVYLm5vZGUoJ3N0cm9uZycsIHtjbGFzczogXCJmdy1oZWFkZXJcIn0sIFtleF9mcmFtZXdvcmtdKSxcbiAgICAgIEVYLm5vZGUoJ3NwYW4nLCB7Y2xhc3M6IFwiZmxvYXQtcmlnaHRcIn0sIFtFWC5ub2RlKCdpJywge2NsYXNzOiBcImZhIGZhLXN0YXIgeWVsbG93LXN0YXJcIiwgJ2FyaWEtaGlkZGVuJzogXCJ0cnVlXCJ9KV0pLFxuICAgICAgRVgubm9kZSgnc3BhbicsIHtjbGFzczogXCJmbG9hdC1yaWdodFwifSwgW2V4X3N0YXJzLnRvU3RyaW5nKCldKVxuICAgIF0pLFxuICAgIEVYLm5vZGUoJ2RpdicsIHtjbGFzczogc2hvdyA/IFwiZGV0YWlscy1ibG9jayBoZWlnaHQtYXV0b1wiIDogXCJkZXRhaWxzLWJsb2NrIGhlaWdodC16ZXJvXCJ9LCBbXG4gICAgICBFWC5ub2RlKCdkaXYnLCB7Y2xhc3M6IFwiY29sLXhzLTYgY2VudGVyLXRleHRcIn0sIFtcbiAgICAgICBFWC5ub2RlKCdwJywge2NsYXNzOiBcInAtaGVhZGluZ1wifSwgW1wiRnJhbWV3b3JrIEFnZTpcIl0pLFxuICAgICAgICBtb21lbnQoZy5jcmVhdGVkX2F0LCBcIllZWVlNTUREXCIpLmZyb21Ob3coKVxuICAgICAgIF0pLFxuICAgICAgRVgubm9kZSgnZGl2Jywge2NsYXNzOiBcImNvbC14cy02IGNlbnRlci10ZXh0XCJ9LCBbXG4gICAgICAgIEVYLm5vZGUoJ3AnLCB7Y2xhc3M6IFwicC1oZWFkaW5nXCJ9LCBbXCJGcmFtZXdvcmsgSG9tZVBhZ2U6XCJdKSxcbiAgICAgIEVYLm5vZGUoJ2EnLCB7aHJlZjogIGcuaG9tZXBhZ2V9LCBbIGcuaG9tZXBhZ2VdKVxuICAgICAgXSksXG5cbiAgICAgRVgubm9kZSgnZGl2Jywge2NsYXNzOiBcInJvdyBjZW50ZXItdGV4dFwifSwgW1xuICAgICAgRVgubm9kZSgnc3Ryb25nJywge29uQ2xpY2s6IGdldERldGFpbHMsIGNsYXNzOiBcIm1vcmUtaW5mb1wifSwgW1wiTW9yZSBpbmZvIG9uIFwiLCBleF9mcmFtZXdvcmtdKVxuICAgICBdKVxuICAgIF0pXG4gICAgXSlcblxuICAgICAgKVxuICAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IEdpdFJlcG87IiwiY29uc3QgRVggPSByZXF1aXJlKFwiLi4vdmRvbV9lczZcIik7XG5jb25zdCBmcmFtZVdvcmtQcmVmcyA9IHJlcXVpcmUoXCIuL3BlcmZfZGF0YS5qc1wiKTtcbmNvbnN0IEdyYXBoSU5URVJGQUNFID0gcmVxdWlyZShcIi4uL2dyYXBocy9ncmFwaHMuanNcIik7XG5jb25zb2xlLmxvZygnZnJhbWVXb3JrUHJlZnMnLCBmcmFtZVdvcmtQcmVmcyk7XG5cbmNvbnN0IEdyYXBoID0gRVguY29tcG9uZW50KHtcbiAgIGNvbXBvbmVudE5hbWU6ICdncmFwaCcsXG4gICBzdGF0ZToge30sXG4gICBjb21wb25lbnRSZW5kZXI6IChwcm9wcykgPT4ge1xuXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICBFWC5ub2RlKCdkaXYnLCB7Y2xhc3M6IFwiY29sLXhzLTEyXCJ9XG5cblxuICAgICApXG4gICAgICApXG4gICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBHcmFwaDsiLCJjb25zdCBFWCA9IHJlcXVpcmUoXCIuLi92ZG9tX2VzNlwiKTtcbmNvbnN0IEFwcFN0YXRlID0gcmVxdWlyZShcIi4uL2RhdGEuanNcIik7XG5jb25zdCBGV2xpc3QgPSByZXF1aXJlKFwiLi9md2xpc3QuanNcIik7XG5jb25zdCBHcmFwaCA9IHJlcXVpcmUoXCIuL2dyYXBoLmpzXCIpO1xuY29uc3QgRGV0YWlscyA9IHJlcXVpcmUoXCIuL2RldGFpbHMuanNcIik7XG5cblxuY29uc3QgTGF5b3V0ID0ge1xuICAgc3RhdGU6IEFwcFN0YXRlLFxuICAgZ2l0aHViSG9vazogKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ+aIkOm+jeWkp+WTpScpO1xuICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlQWhvbGljJywgcmVzKTtcbiAgICAgIEVYLlNldFN0YXRlKHtcbiAgICAgICAgIGRhdGE6IHJlcyxcbiAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgIGZyYW1ld29ya3M6IFsnUmVhY3QnLCAnQW5ndWxhcicsICdWdWUnLCAnSW5mZXJubycsICdFbWJlciddXG4gICAgICB9KTtcblxuICAgfSxcbiAgIHJlbmRlcjogKCkgPT4ge1xuICAgICAgbGV0IHtcbiAgICAgICAgIGZyYW1ld29ya3MsXG4gICAgICAgICBkYXRhLFxuICAgICAgICAgbG9hZGVkLFxuICAgICAgICAgYWN0aXZlZncsXG4gICAgICAgICBkZXRhaWxzLFxuICAgICAgICAgY29tcERpc3BsYXlcbiAgICAgIH0gPSBMYXlvdXQuc3RhdGU7XG5cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgIEVYLm5vZGUoJ2RpdicsIG51bGwsIFtcbiAgICAgICAgRVgubm9kZSgnZGl2Jywge2NsYXNzOiAgbG9hZGVkID8gXCJoaWRlLWVsbVwiIDogXCJsb2FkZXJcIn0sIFtcIkdldHRpbmcgRGF0YS4uLlwiXSksXG4gICAgICAgICBFWC5ub2RlKCdkaXYnLCB7Y2xhc3M6ICAobG9hZGVkICYmICBjb21wRGlzcGxheSA9PT0gXCJsaXN0XCIgKSA/IFwib2tcIiA6IFwiaGlkZS1lbG1cIn0sIFtcbiAgICAgICAgICBGV2xpc3Qoe2V4X2RhdGE6IGRhdGEsIGV4X2FwcDogTGF5b3V0LnN0YXRlLCBleF9sb2FkZWQ6IGxvYWRlZH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgRVgubm9kZSgnZGl2Jywge2NsYXNzOiAgY29tcERpc3BsYXkgPT09IFwiZGV0YWlsc1wiID8gXCJmYWRlaW50b1wiIDogXCJoaWRlLWVsbVwifSwgW1xuICAgICAgICAgICAgRGV0YWlscyh7ZXhfZGF0YTogZGV0YWlscy5kYXRhLCBleF9mcmFtZXdvcms6IGRldGFpbHMub252aWV3fSlcbiAgICAgICAgICBdKVxuICAgICAgXSlcbiAgICAgIClcbiAgIH1cbn07XG5FWC5yb290Q29tcG9uZW50ID0gTGF5b3V0O1xuRVguU2V0U3RhdGUgPSAoKCkgPT4ge1xuICAgcmV0dXJuIChwYXlsb2FkKSA9PiB7XG4gICAgICBMYXlvdXQuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBMYXlvdXQuc3RhdGUsIHBheWxvYWQpO1xuICAgICAgRVgub2JqZWN0Q2hhbmdlKExheW91dC5yZW5kZXIoKSk7XG4gICAgICBjb25zb2xlLmxvZyhMYXlvdXQuc3RhdGUpO1xuICAgfVxufSkoKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0OyIsImNvbnN0IHBhcnNlRmxvYXRzID0gKG9iYikgPT4ge1xuICAgbGV0IG5ld09iamVjdCA9IHt9O1xuICAgT2JqZWN0LmtleXMob2JiKS5mb3JFYWNoKChpdG0pID0+IHtcbiAgICAgIGxldCBoID0gb2JiW2l0bV07XG4gICAgICBuZXdPYmplY3RbaXRtXSA9IHtcbiAgICAgICAgIHY6IHBhcnNlRmxvYXQoaC52KSxcbiAgICAgICAgIHNkOiBwYXJzZUZsb2F0KGguc2QpXG4gICAgICB9O1xuICAgfSk7XG4gICByZXR1cm4gbmV3T2JqZWN0O1xufVxuXG5sZXQgZnJhbWVXb3JrUHJlZnMgPSB7fTtcbmZyYW1lV29ya1ByZWZzWydFbWJlciddID0gcGFyc2VGbG9hdHMoSlNPTi5wYXJzZSgne1wiY3JlYXRlIHJvd3NcIjp7XCJ2XCI6XCI3NDcuMDFcIixcInNkXCI6XCIxMy4wNVwifSxcInJlcGxhY2UgYWxsIHJvd3NcIjp7XCJ2XCI6XCI1ODMuOTlcIixcInNkXCI6XCIxNS45OVwifSxcInBhcnRpYWwgdXBkYXRlXCI6e1widlwiOlwiMzcuNjdcIixcInNkXCI6XCIwLjgzXCJ9LFwic2VsZWN0IHJvd1wiOntcInZcIjpcIjQyLjI0XCIsXCJzZFwiOlwiMC45M1wifSxcInN3YXAgcm93c1wiOntcInZcIjpcIjc0LjY5XCIsXCJzZFwiOlwiMS44M1wifSxcInJlbW92ZSByb3dcIjp7XCJ2XCI6XCI5Mi45NVwiLFwic2RcIjpcIjEuNDNcIn0sXCJjcmVhdGUgbWFueSByb3dzXCI6e1widlwiOlwiNTkwNS4xXCIsXCJzZFwiOlwiMTkxLjM0XCJ9LFwiYXBwZW5kIHJvd3MgdG8gbGFyZ2UgdGFibGVcIjp7XCJ2XCI6XCIxMjExLjVcIixcInNkXCI6XCIxMi4wMlwifSxcImNsZWFyIHJvd3NcIjp7XCJ2XCI6XCIxMTgyLjk3XCIsXCJzZFwiOlwiMTIuODRcIn0sXCJjbGVhciByb3dzIGEgMm5kIHRpbWVcIjp7XCJ2XCI6XCIxNjE3LjY5XCIsXCJzZFwiOlwiMTQuMTJcIn19JykpO1xuZnJhbWVXb3JrUHJlZnNbJ0FuZ3VsYXIxJ10gPSBwYXJzZUZsb2F0cyhKU09OLnBhcnNlKCd7XCJjcmVhdGUgcm93c1wiOntcInZcIjpcIjI0OS41NlwiLFwic2RcIjpcIjYuMjlcIn0sXCJyZXBsYWNlIGFsbCByb3dzXCI6e1widlwiOlwiMjYyLjkxXCIsXCJzZFwiOlwiMTQuMDNcIn0sXCJwYXJ0aWFsIHVwZGF0ZVwiOntcInZcIjpcIjE2LjQxXCIsXCJzZFwiOlwiMC4xN1wifSxcInNlbGVjdCByb3dcIjp7XCJ2XCI6XCI3Ljg1XCIsXCJzZFwiOlwiMS40XCJ9LFwic3dhcCByb3dzXCI6e1widlwiOlwiNTAuNTNcIixcInNkXCI6XCIxLjVcIn0sXCJyZW1vdmUgcm93XCI6e1widlwiOlwiNzAuNzJcIixcInNkXCI6XCIxLjlcIn0sXCJjcmVhdGUgbWFueSByb3dzXCI6e1widlwiOlwiMjU3My4wMVwiLFwic2RcIjpcIjEwNS4yXCJ9LFwiYXBwZW5kIHJvd3MgdG8gbGFyZ2UgdGFibGVcIjp7XCJ2XCI6XCI4MjYuODhcIixcInNkXCI6XCIxNy44NVwifSxcImNsZWFyIHJvd3NcIjp7XCJ2XCI6XCI4NDAuNjNcIixcInNkXCI6XCI2Ljk0XCJ9LFwiY2xlYXIgcm93cyBhIDJuZCB0aW1lXCI6e1widlwiOlwiMTY0NC41OVwiLFwic2RcIjpcIjIyLjg2XCJ9fScpKTtcbmZyYW1lV29ya1ByZWZzWydBbmd1bGFyMiddID0gcGFyc2VGbG9hdHMoSlNPTi5wYXJzZSgne1wiY3JlYXRlIHJvd3NcIjp7XCJ2XCI6XCIxOTIuMzhcIixcInNkXCI6XCI0LjUxXCJ9LFwicmVwbGFjZSBhbGwgcm93c1wiOntcInZcIjpcIjIxMC42NFwiLFwic2RcIjpcIjUuNTFcIn0sXCJwYXJ0aWFsIHVwZGF0ZVwiOntcInZcIjpcIjExLjg3XCIsXCJzZFwiOlwiMC40NFwifSxcInNlbGVjdCByb3dcIjp7XCJ2XCI6XCI1LjA4XCIsXCJzZFwiOlwiMC4yOVwifSxcInN3YXAgcm93c1wiOntcInZcIjpcIjUxLjc2XCIsXCJzZFwiOlwiMS41XCJ9LFwicmVtb3ZlIHJvd1wiOntcInZcIjpcIjEzMy41MlwiLFwic2RcIjpcIjIuNTNcIn0sXCJjcmVhdGUgbWFueSByb3dzXCI6e1widlwiOlwiMTg0MlwiLFwic2RcIjpcIjkuNDlcIn0sXCJhcHBlbmQgcm93cyB0byBsYXJnZSB0YWJsZVwiOntcInZcIjpcIjY3OS42N1wiLFwic2RcIjpcIjE0LjA3XCJ9LFwiY2xlYXIgcm93c1wiOntcInZcIjpcIjQzNi41NFwiLFwic2RcIjpcIjI3Ljc4XCJ9LFwiY2xlYXIgcm93cyBhIDJuZCB0aW1lXCI6e1widlwiOlwiNDExLjU5XCIsXCJzZFwiOlwiMzEuMzRcIn19JykpO1xuZnJhbWVXb3JrUHJlZnNbJ0luZmVybm8nXSA9IHBhcnNlRmxvYXRzKEpTT04ucGFyc2UoJ3tcImNyZWF0ZSByb3dzXCI6e1widlwiOlwiMTUzLjZcIixcInNkXCI6XCI0LjA1XCJ9LFwicmVwbGFjZSBhbGwgcm93c1wiOntcInZcIjpcIjE2MC4xOFwiLFwic2RcIjpcIjIuMjFcIn0sXCJwYXJ0aWFsIHVwZGF0ZVwiOntcInZcIjpcIjEzLjdcIixcInNkXCI6XCIwLjQxXCJ9LFwic2VsZWN0IHJvd1wiOntcInZcIjpcIjYuMzFcIixcInNkXCI6XCIwLjg4XCJ9LFwic3dhcCByb3dzXCI6e1widlwiOlwiNDguMDlcIixcInNkXCI6XCIwLjk2XCJ9LFwicmVtb3ZlIHJvd1wiOntcInZcIjpcIjYxLjkxXCIsXCJzZFwiOlwiMC40MlwifSxcImNyZWF0ZSBtYW55IHJvd3NcIjp7XCJ2XCI6XCIxNDg4Ljk2XCIsXCJzZFwiOlwiMjEuM1wifSxcImFwcGVuZCByb3dzIHRvIGxhcmdlIHRhYmxlXCI6e1widlwiOlwiMjg1LjQxXCIsXCJzZFwiOlwiMTMuNDhcIn0sXCJjbGVhciByb3dzXCI6e1widlwiOlwiMjI3LjE2XCIsXCJzZFwiOlwiMi4yNlwifSxcImNsZWFyIHJvd3MgYSAybmQgdGltZVwiOntcInZcIjpcIjIyNy45N1wiLFwic2RcIjpcIjMuMTVcIn19JykpO1xuZnJhbWVXb3JrUHJlZnNbJ1JlYWN0J10gPSBwYXJzZUZsb2F0cyhKU09OLnBhcnNlKCd7XCJjcmVhdGUgcm93c1wiOntcInZcIjpcIjE4NC40OFwiLFwic2RcIjpcIjIuMjZcIn0sXCJyZXBsYWNlIGFsbCByb3dzXCI6e1widlwiOlwiMTk3LjgyXCIsXCJzZFwiOlwiNFwifSxcInBhcnRpYWwgdXBkYXRlXCI6e1widlwiOlwiMTguNzhcIixcInNkXCI6XCIwLjY2XCJ9LFwic2VsZWN0IHJvd1wiOntcInZcIjpcIjcuMDdcIixcInNkXCI6XCIwLjYzXCJ9LFwic3dhcCByb3dzXCI6e1widlwiOlwiNTMuMDVcIixcInNkXCI6XCIxLjAyXCJ9LFwicmVtb3ZlIHJvd1wiOntcInZcIjpcIjY0Ljg5XCIsXCJzZFwiOlwiMi4xNlwifSxcImNyZWF0ZSBtYW55IHJvd3NcIjp7XCJ2XCI6XCIxODU4LjA4XCIsXCJzZFwiOlwiMjQuNTJcIn0sXCJhcHBlbmQgcm93cyB0byBsYXJnZSB0YWJsZVwiOntcInZcIjpcIjMyNi40MVwiLFwic2RcIjpcIjE4LjMzXCJ9LFwiY2xlYXIgcm93c1wiOntcInZcIjpcIjIwMDAuODVcIixcInNkXCI6XCIxOC41NlwifSxcImNsZWFyIHJvd3MgYSAybmQgdGltZVwiOntcInZcIjpcIjQxMTcuOTFcIixcInNkXCI6XCIyMy40MVwifX0nKSk7XG5mcmFtZVdvcmtQcmVmc1snVnVlJ10gPSBwYXJzZUZsb2F0cyhKU09OLnBhcnNlKCd7XCJjcmVhdGUgcm93c1wiOntcInZcIjpcIjI1OS43N1wiLFwic2RcIjpcIjkuNDZcIn0sXCJyZXBsYWNlIGFsbCByb3dzXCI6e1widlwiOlwiMjYxLjg0XCIsXCJzZFwiOlwiOC41MlwifSxcInBhcnRpYWwgdXBkYXRlXCI6e1widlwiOlwiMTUuNzZcIixcInNkXCI6XCIwLjU2XCJ9LFwic2VsZWN0IHJvd1wiOntcInZcIjpcIjcuMzNcIixcInNkXCI6XCIwLjQ4XCJ9LFwic3dhcCByb3dzXCI6e1widlwiOlwiNTIuOTZcIixcInNkXCI6XCIxLjAyXCJ9LFwicmVtb3ZlIHJvd1wiOntcInZcIjpcIjcwLjYxXCIsXCJzZFwiOlwiMC44NVwifSxcImNyZWF0ZSBtYW55IHJvd3NcIjp7XCJ2XCI6XCIyNzA1Ljg2XCIsXCJzZFwiOlwiMTQ4LjQ3XCJ9LFwiYXBwZW5kIHJvd3MgdG8gbGFyZ2UgdGFibGVcIjp7XCJ2XCI6XCI3NDMuNDRcIixcInNkXCI6XCIxNC45NVwifSxcImNsZWFyIHJvd3NcIjp7XCJ2XCI6XCI0MzQuNThcIixcInNkXCI6XCIxMi40N1wifSxcImNsZWFyIHJvd3MgYSAybmQgdGltZVwiOntcInZcIjpcIjQzNS4zM1wiLFwic2RcIjpcIjcuMzNcIn19JykpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnJhbWVXb3JrUHJlZnM7IiwiY29uc3QgQXBwU3RhdGUgPSB7XG4gICBkYXRhOiB7fSxcbiAgIGxvYWRlZDogZmFsc2UsXG4gICBmcmFtZXdvcmtzOiBbXSxcbiAgIGNvbXBEaXNwbGF5OiBcImxpc3RcIixcbiAgIGxpc3Q6IHtcbiAgICAgIG9yZGVyOiAnLXN0YXJzJ1xuICAgfSxcbiAgIGRldGFpbHM6IHtcbiAgICAgIG9udmlldzogbnVsbCxcbiAgICAgIGRhdGE6IHt9XG4gICB9LFxuICAgYWN0aXZlZnc6IFwibm9uZVwiLFxuICAgZndMaXN0OiB7XG4gICAgICBSZWFjdDoge1xuICAgICAgICAgY3JlYXRlZDogMTM2OTQxMjE1NDAwMCxcbiAgICAgICAgIHN0YXJzOiAnNDk0NTcnLFxuICAgICAgICAgc2l6ZTogMTMzLFxuICAgICAgICAgcGVyZjogM1xuICAgICAgfSxcbiAgICAgIEFuZ3VsYXI6IHtcbiAgICAgICAgIGNyZWF0ZWQ6IDEyNjI3MzgwNzcwMDAsXG4gICAgICAgICBzdGFyczogJzUyMjY0JyxcbiAgICAgICAgIHNpemU6IDc2NixcbiAgICAgICAgIHBlcmY6IDRcbiAgICAgIH0sXG4gICAgICBWdWU6IHtcbiAgICAgICAgIGNyZWF0ZWQ6IDEzNzUwNjgyOTEwMDAsXG4gICAgICAgICBzdGFyczogJzI3NTU4JyxcbiAgICAgICAgIHNpemU6IDc4LFxuICAgICAgICAgcGVyZjogMlxuICAgICAgfSxcbiAgICAgIEluZmVybm86IHtcbiAgICAgICAgIGNyZWF0ZWQ6IDE0MjI4Mjg0NTgwMDAsXG4gICAgICAgICBzdGFyczogJzM4ODUnLFxuICAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgIHBlcmY6IDFcbiAgICAgIH0sXG4gICAgICBFbWJlcjoge1xuICAgICAgICAgY3JlYXRlZDogMTMwNjM2Njc4MDAwMCxcbiAgICAgICAgIHN0YXJzOiAnMTY4MjInLFxuICAgICAgICAgc2l6ZTogNzQ2LFxuICAgICAgICAgcGVyZjogNVxuICAgICAgfVxuICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwU3RhdGU7IiwiLy9jb25zdCBDYW52YXNKUyA9IHJlcXVpcmUoJy4uL3ZlbmRvci9jYW52YXNqcy5taW4uanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gICByZXR1cm4gKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENhbnZhc0pTLkNoYXJ0KFwiY2hhcnRDb250YWluZXJcIiwge1xuICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiQmFzaWMgQ29sdW1uIENoYXJ0XCJcbiAgICAgICAgIH0sXG4gICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgdHlwZTogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGRhdGFQb2ludHM6IFt7XG4gICAgICAgICAgICAgICB5OiA0NSxcbiAgICAgICAgICAgICAgIGxhYmVsOiBcIkFwcGxlXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgIHk6IDMxLFxuICAgICAgICAgICAgICAgbGFiZWw6IFwiTWFuZ29cIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgeTogNTIsXG4gICAgICAgICAgICAgICBsYWJlbDogXCJQaW5lYXBwbGVcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgeTogMTAsXG4gICAgICAgICAgICAgICBsYWJlbDogXCJHcmFwZXNcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgeTogNDYsXG4gICAgICAgICAgICAgICBsYWJlbDogXCJMZW1vblwiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICB5OiAzMCxcbiAgICAgICAgICAgICAgIGxhYmVsOiBcIkJhbmFuYVwiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICB5OiA1MCxcbiAgICAgICAgICAgICAgIGxhYmVsOiBcIldhdGVybWVsb25cIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgeTogMjgsXG4gICAgICAgICAgICAgICBsYWJlbDogXCJDb2NvbnV0XCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgIHk6IDQ1LFxuICAgICAgICAgICAgICAgbGFiZWw6IFwiTHljaGVlXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgIHk6IDE1LFxuICAgICAgICAgICAgICAgbGFiZWw6IFwiUGFsbVwiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICB5OiA0OCxcbiAgICAgICAgICAgICAgIGxhYmVsOiBcIk9yYW5nZVwiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICB5OiAzOCxcbiAgICAgICAgICAgICAgIGxhYmVsOiBcIk11c2ttZWxvblwiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICB5OiA0MSxcbiAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0cmF3YmVycnlcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgeTogMjUsXG4gICAgICAgICAgICAgICBsYWJlbDogXCJLaXdpXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgIHk6IDUwLFxuICAgICAgICAgICAgICAgbGFiZWw6IFwiR3VhdmFcIlxuICAgICAgICAgICAgfSwgXVxuICAgICAgICAgfV1cbiAgICAgIH0pO1xuICAgICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgIH1cbn1cbiIsIi8vY29uc3QgQ2FudmFzSlMgPSByZXF1aXJlKCcuLi92ZW5kb3IvY2FudmFzanMubWluLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuICAgcmV0dXJuIChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjaGFydCA9IG5ldyBDYW52YXNKUy5DaGFydChcImNoYXJ0Q29udGFpbmVyXCIsIHtcbiAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBcIkNvbXBhcmlzb24gYW1vbmcgQ291bnRyaWVzIG9uIEZlcnRpbGl0eSBSYXRlIFZzIExpZmUgRXhwZWN0YW5jeSBpbiAyMDA5XCJcbiAgICAgICAgIH0sXG4gICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgdHlwZTogXCJidWJibGVcIixcbiAgICAgICAgICAgIGRhdGFQb2ludHM6IFt7XG4gICAgICAgICAgICAgICAgICB4OiA2NC44LFxuICAgICAgICAgICAgICAgICAgeTogMi42NixcbiAgICAgICAgICAgICAgICAgIHo6IDEyMDc0LjQsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIkluZGlhXCJcbiAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHg6IDczLjEsXG4gICAgICAgICAgICAgICAgICB5OiAxLjYxLFxuICAgICAgICAgICAgICAgICAgejogMTMzMTMuOCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hpbmFcIlxuICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgeDogNzguMSxcbiAgICAgICAgICAgICAgICAgIHk6IDIuMDAsXG4gICAgICAgICAgICAgICAgICB6OiAzMDYuNzcsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIlVTXCJcbiAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHg6IDY4LjUsXG4gICAgICAgICAgICAgICAgICB5OiAyLjE1LFxuICAgICAgICAgICAgICAgICAgejogMjM3LjQxNCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSW5kb25lc2lhXCJcbiAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHg6IDcyLjUsXG4gICAgICAgICAgICAgICAgICB5OiAxLjg2LFxuICAgICAgICAgICAgICAgICAgejogMTkzLjI0LFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJCcmF6aWxcIlxuICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgeDogNzYuNSxcbiAgICAgICAgICAgICAgICAgIHk6IDIuMzYsXG4gICAgICAgICAgICAgICAgICB6OiAxMTIuMjQsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIk1leGljb1wiXG4gICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB4OiA1MC45LFxuICAgICAgICAgICAgICAgICAgeTogNS41NixcbiAgICAgICAgICAgICAgICAgIHo6IDE1NC40OCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTmlnZXJpYVwiXG4gICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB4OiA2OC42LFxuICAgICAgICAgICAgICAgICAgeTogMS41NCxcbiAgICAgICAgICAgICAgICAgIHo6IDE0MS45MSxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUnVzc2lhXCJcbiAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHg6IDgyLjksXG4gICAgICAgICAgICAgICAgICB5OiAxLjM3LFxuICAgICAgICAgICAgICAgICAgejogMTI3LjU1LFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYXBhblwiXG4gICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB4OiA3OS44LFxuICAgICAgICAgICAgICAgICAgeTogMS4zNixcbiAgICAgICAgICAgICAgICAgIHo6IDgxLjkwLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJBdXN0cmFsaWFcIlxuICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgeDogNzIuNyxcbiAgICAgICAgICAgICAgICAgIHk6IDIuNzgsXG4gICAgICAgICAgICAgICAgICB6OiA3OS43MSxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRWd5cHRcIlxuICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgeDogODAuMSxcbiAgICAgICAgICAgICAgICAgIHk6IDEuOTQsXG4gICAgICAgICAgICAgICAgICB6OiA2MS44MSxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVUtcIlxuICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgeDogNTUuOCxcbiAgICAgICAgICAgICAgICAgIHk6IDQuNzYsXG4gICAgICAgICAgICAgICAgICB6OiAzOS4yNCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiS2VueWFcIlxuICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgeDogODEuNSxcbiAgICAgICAgICAgICAgICAgIHk6IDEuOTMsXG4gICAgICAgICAgICAgICAgICB6OiAyMS45NSxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQXVzdHJhbGlhXCJcbiAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHg6IDY4LjEsXG4gICAgICAgICAgICAgICAgICB5OiA0Ljc3LFxuICAgICAgICAgICAgICAgICAgejogMzEuMDksXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIklyYXFcIlxuICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgeDogNDcuOSxcbiAgICAgICAgICAgICAgICAgIHk6IDYuNDIsXG4gICAgICAgICAgICAgICAgICB6OiAzMy40MixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQWZnYW5pc3RhblwiXG4gICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB4OiA1MC4zLFxuICAgICAgICAgICAgICAgICAgeTogNS41OCxcbiAgICAgICAgICAgICAgICAgIHo6IDE4LjU1LFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJBbmdvbGFcIlxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgfV1cbiAgICAgIH0pO1xuXG4gICAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgfVxufVxuIiwiY29uc3QgYnViYmxlID0gcmVxdWlyZShcIi4vYnViYmxlY2hhcnQuanNcIik7XG5jb25zdCBiYXIgPSByZXF1aXJlKFwiLi9iYXJncmFwaC5qc1wiKTtcbmNvbnN0IHBpZSA9IHJlcXVpcmUoXCIuL3BpZWdyYXBoLmpzXCIpO1xuXG5jb25zdCBHcmFwaElOVEVSRkFDRSA9IHtcblx0YnViYmxlOiBidWJibGUoKSxcblx0YmFyOiBiYXIoKSxcblx0cGllOiBwaWUoKVxufVxubW9kdWxlLmV4cG9ydHMgPSBHcmFwaElOVEVSRkFDRTtcblxuIiwiLy9jb25zdCBDYW52YXNKUyA9IHJlcXVpcmUoJy4uL3ZlbmRvci9jYW52YXNqcy5taW4uanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gICByZXR1cm4gKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNoYXJ0ID0gbmV3IENhbnZhc0pTLkNoYXJ0KFwiY2hhcnRDb250YWluZXJcIiwge1xuICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHRleHQ6IFwiR2FtaW5nIENvbnNvbGVzIFNvbGQgaW4gMjAxMlwiXG4gICAgICAgICB9LFxuICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogMzUwLFxuICAgICAgICAgICAgaXRlbVdpZHRoOiAxMjBcbiAgICAgICAgIH0sXG4gICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgICAgICAgIHNob3dJbkxlZ2VuZDogdHJ1ZSxcbiAgICAgICAgICAgIGxlZ2VuZFRleHQ6IFwie2luZGV4TGFiZWx9XCIsXG4gICAgICAgICAgICBkYXRhUG9pbnRzOiBbe1xuICAgICAgICAgICAgICAgeTogNDE4MTU2MyxcbiAgICAgICAgICAgICAgIGluZGV4TGFiZWw6IFwiUGxheVN0YXRpb24gM1wiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICB5OiAyMTc1NDk4LFxuICAgICAgICAgICAgICAgaW5kZXhMYWJlbDogXCJXaWlcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgeTogMzEyNTg0NCxcbiAgICAgICAgICAgICAgIGluZGV4TGFiZWw6IFwiWGJveCAzNjBcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgeTogMTE3NjEyMSxcbiAgICAgICAgICAgICAgIGluZGV4TGFiZWw6IFwiTmludGVuZG8gRFNcIlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgeTogMTcyNzE2MSxcbiAgICAgICAgICAgICAgIGluZGV4TGFiZWw6IFwiUFNQXCJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgIHk6IDQzMDMzNjQsXG4gICAgICAgICAgICAgICBpbmRleExhYmVsOiBcIk5pbnRlbmRvIDNEU1wiXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICB5OiAxNzE3Nzg2LFxuICAgICAgICAgICAgICAgaW5kZXhMYWJlbDogXCJQUyBWaXRhXCJcbiAgICAgICAgICAgIH1dXG4gICAgICAgICB9XVxuICAgICAgfSk7XG4gICAgICBjaGFydC5yZW5kZXIoKTtcbiAgIH1cblxufSIsImNvbnN0IGZsYXR0ZW4gPSAoYSwgYikgPT4ge1xuICAgcmV0dXJuIGEuY29uY2F0KEFycmF5LmlzQXJyYXkoYikgPyBiLnJlZHVjZShmbGF0dGVuLCBbXSkgOiBiKTtcbn1cbmZ1bmN0aW9uIGZsYXR0ZW5JdGVyYXRpb24gKGFyciwgZmxhdEFycikge1xuXHRmbGF0QXJyID0gZmxhdEFyciB8fCBbXTtcblxuXHR2YXIgbGVuZ3RoICA9IGFyci5sZW5ndGh8MDtcblxuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCA9IGluZGV4ICsgMSl7XG5cdFx0dmFyIGl0ZW0gPSBhcnJbaW5kZXhdO1xuXHRcdGl0ZW0uY29uc3RydWN0b3IgPT09IEFycmF5ID8gZmxhdHRlbihpdGVtLCBmbGF0QXJyKSA6IGZsYXRBcnJbZmxhdEFyci5sZW5ndGhdID0gaXRlbTtcblx0fVxuXG5cdHJldHVybiBmbGF0QXJyO1xufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICBzbW9vdGhBcnJheTogKCkgPT4ge1xuICAgICAgcmV0dXJuIChuZXN0ZWQpID0+IHtcbiAgICAgICAgIHJldHVybiBuZXN0ZWQucmVkdWNlKGZsYXR0ZW4sIFtdKS5maWx0ZXIoKG5lKSA9PiBuZSAhPT0gbnVsbCAmJiBuZSAhPT0gdW5kZWZpbmVkICYmIG5lICE9PSAnJylcbiAgICAgIH1cbiAgIH1cbn0iLCJjb25zdCB0aGVYSFJzdHVmZiA9IHJlcXVpcmUoJy4veGhyUmVxdWVzdHMuanMnKTtcblxuY29uc3QgRVggPSByZXF1aXJlKFwiLi92ZG9tX2VzNlwiKTtcbmNvbnN0IExheW91dCA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbGF5b3V0LmpzXCIpO1xuXG5FWC5jcmVhdGVDb21wb25lbnQoXG4gICBMYXlvdXQucmVuZGVyKCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKSk7XG5cblxuRVgudmlld09iamVjdHMoKTtcblxuXG50aGVYSFJzdHVmZihMYXlvdXQuZ2l0aHViSG9vayk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChzZWxmLCBjcmVhdGVFbGVtKSA9PiB7XG4gICBsZXQgcmUgPSBuZXcgUmVnRXhwKC9eZXhfL2kpXG5cbiAgIGZ1bmN0aW9uIHJlbW92ZVByb3AoZWxlbWVudCwgYXR0cikge1xuICAgICAgaWYgKCFzZWxmLmV2ZW50c1thdHRyXSAmJiAhcmUudGVzdChhdHRyKSkge1xuICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5yZXBsYWNlKC9bQS1aXS9nLCAnLSQmJykpO1xuICAgICAgfVxuICAgfVxuXG4gICBmdW5jdGlvbiBjaGFuZ2VQcm9wKGVsZW1lbnQsIGF0dHIsIHZhbCkge1xuICAgICAgaWYgKCFzZWxmLmV2ZW50c1thdHRyXSAmJiAhcmUudGVzdChhdHRyKSB8fCBhdHRyID09PSAnc3JjJykge1xuICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ci5yZXBsYWNlKC9bQS1aXS9nLCAnLSQmJyksIHZhbCk7XG4gICAgICB9XG4gICB9XG5cblxuXG4gICBmdW5jdGlvbiB1cGRhdGVQcm9wKGVsZW1lbnQsIG5hbWUsIG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgICAgcmVtb3ZlUHJvcChlbGVtZW50LCBuYW1lKTtcbiAgICAgIH0gZWxzZSBpZiAoIW9sZFZhbCB8fCBuZXdWYWwgIT09IG9sZFZhbCkge1xuICAgICAgICAgY2hhbmdlUHJvcChlbGVtZW50LCBuYW1lLCBuZXdWYWwpO1xuICAgICAgfVxuICAgfVxuXG4gICBmdW5jdGlvbiB1cGRhdGVQcm9wcyhlbGVtZW50LCBuZXdQcm9wcywgb2xkUHJvcHMgPSB7fSkge1xuICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBuZXdQcm9wcywgb2xkUHJvcHMpO1xuICAgICAgLy8gT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goIChuYW1lKSA9PiB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHByb3BzKSB7XG4gICAgICAgICB1cGRhdGVQcm9wKGVsZW1lbnQsIG5hbWUsIG5ld1Byb3BzW25hbWVdLCBvbGRQcm9wc1tuYW1lXSk7XG4gICAgICB9O1xuICAgfVxuXG4gICBmdW5jdGlvbiBjaGFuZ2VkKG5vZGUxLCBub2RlMikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBub2RlMSAhPT0gdHlwZW9mIG5vZGUyIHx8XG4gICAgICAgICB0eXBlb2Ygbm9kZTEgPT09ICdzdHJpbmcnICYmIG5vZGUxICE9PSBub2RlMiB8fFxuICAgICAgICAgbm9kZTEudHlwZSAhPT0gbm9kZTIudHlwZVxuICAgfVxuXG4gICBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KHBhcmVudCwgbmV3Tm9kZSwgb2xkTm9kZSwgaW5kZXggPSAwKSB7XG4gICAgICBpZiAodHlwZW9mIG5ld05vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBuZXdOb2RlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICBsZXQgdmRvbWlkID0gcGFyZW50LnByb3BzLnRyYWNlICsgJy4nICsgaW5kZXg7XG4gICAgICAgICBpZiAoY2hhbmdlZChuZXdOb2RlLCBvbGROb2RlKSkge1xuICAgICAgICAgICAgcGFyZW50LmRvbUVsZW1lbnQucmVwbGFjZUNoaWxkKFxuICAgICAgICAgICAgICAgY3JlYXRlRWxlbShuZXdOb2RlLCB2ZG9taWQsIHBhcmVudC50cmFjZSksXG4gICAgICAgICAgICAgICBwYXJlbnQuZG9tRWxlbWVudC5jaGlsZE5vZGVzW2luZGV4XVxuICAgICAgICAgICAgKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoIW9sZE5vZGUpIHtcbiAgICAgICAgIGxldCB2ZG9taWQgPSBwYXJlbnQucHJvcHMudHJhY2UgKyAnLicgKyBpbmRleDtcbiAgICAgICAgIG5ld05vZGUuZG9tRWxlbWVudCA9IGNyZWF0ZUVsZW0obmV3Tm9kZSwgdmRvbWlkLCBwYXJlbnQudHJhY2UpO1xuICAgICAgICAgcGFyZW50LmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBuZXdOb2RlLmRvbUVsZW1lbnRcbiAgICAgICAgICk7XG4gICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICghbmV3Tm9kZSkge1xuICAgICAgICAgcGFyZW50LmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGROb2Rlc1tpbmRleF1cbiAgICAgICAgICk7XG4gICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkKG5ld05vZGUsIG9sZE5vZGUpKSB7XG4gICAgICAgICBuZXdOb2RlLmRvbUVsZW1lbnQgPSBjcmVhdGVFbGVtKG5ld05vZGUsIG5ld05vZGUudHJhY2UsIG5ld05vZGUucGFyZW50KTtcbiAgICAgICAgIHBhcmVudC5kb21FbGVtZW50LnJlcGxhY2VDaGlsZChcbiAgICAgICAgICAgIG5ld05vZGUuZG9tRWxlbWVudCxcbiAgICAgICAgICAgIHBhcmVudC5kb21FbGVtZW50LmNoaWxkTm9kZXNbaW5kZXhdXG4gICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKG5ld05vZGUudHlwZSkge1xuXG4gICAgICAgICBuZXdOb2RlLmRvbUVsZW1lbnQgPSBvbGROb2RlLmRvbUVsZW1lbnQgPyBvbGROb2RlLmRvbUVsZW1lbnQgOiBjcmVhdGVFbGVtKG5ld05vZGUsIG5ld05vZGUudHJhY2UsIG5ld05vZGUucGFyZW50KTtcbiAgICAgICAgIHVwZGF0ZVByb3BzKFxuICAgICAgICAgICAgbmV3Tm9kZS5kb21FbGVtZW50LFxuICAgICAgICAgICAgbmV3Tm9kZS5wcm9wcyxcbiAgICAgICAgICAgIG9sZE5vZGUucHJvcHNcbiAgICAgICAgICk7XG4gICAgICAgICBjb25zdCBuZXdMZW5ndGggPSBuZXdOb2RlLm5lc3RlZCA/IG5ld05vZGUubmVzdGVkLmxlbmd0aCA6IDA7XG4gICAgICAgICBpZiAodHlwZW9mIG9sZE5vZGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvbGROb2RlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgdXBkYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIG5ld05vZGUsXG4gICAgICAgICAgICAgICAgICBuZXdOb2RlLm5lc3RlZFtpXSxcbiAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICB9XG4gICAgICAgICBvbGROb2RlLm5lc3RlZCA9IG9sZE5vZGUubmVzdGVkID8gb2xkTm9kZS5uZXN0ZWQgOiBbXTtcbiAgICAgICAgIGNvbnN0IG9sZExlbmd0aCA9IG9sZE5vZGUubmVzdGVkLmxlbmd0aDtcblxuICAgICAgICAgLy8gY29uc29sZS5sb2coJ3BhcmVudCcsIHtwYXJlbnQ6IHBhcmVudCwgbmV3Tm9kZTogbmV3Tm9kZSwgb2xkTm9kZTogb2xkTm9kZX0pO1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdMZW5ndGggfHwgaSA8IG9sZExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB1cGRhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgbmV3Tm9kZSxcbiAgICAgICAgICAgICAgIG5ld05vZGUubmVzdGVkW2ldLFxuICAgICAgICAgICAgICAgb2xkTm9kZS5uZXN0ZWRbaV0sXG4gICAgICAgICAgICAgICBpXG4gICAgICAgICAgICApO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuICAgcmV0dXJuIHVwZGF0ZUVsZW1lbnQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID1bXG5cIm9uQ29weVwiLFxuXCJvbkN1dFwiLFxuXCJvblBhc3RlXCIsXG5cIm9uS2V5RG93blwiLFxuXCJvbktleVByZXNzXCIsXG5cIm9uS2V5VXBcIixcblwib25Gb2N1c1wiLFxuXCJvbkJsdXJcIixcblwib25DaGFuZ2VcIixcblwib25JbnB1dFwiLFxuXCJvblN1Ym1pdFwiLFxuXCJvbkNsaWNrXCIsXG5cIm9uQ29udGV4dE1lbnVcIixcblwib25Eb3VibGVDbGlja1wiLFxuXCJvbkRyYWdcIixcblwib25EcmFnRW5kXCIsXG5cIm9uRHJhZ0VudGVyXCIsXG5cIm9uRHJhZ0V4aXRcIixcblwib25EcmFnTGVhdmVcIixcblwib25EcmFnT3ZlclwiLFxuXCJvbkRyYWdTdGFydFwiLFxuXCJvbkRyb3BcIixcblwib25Nb3VzZURvd25cIixcblwib25Nb3VzZUVudGVyXCIsXG5cIm9uTW91c2VMZWF2ZVwiLFxuXCJvbk1vdXNlTW92ZVwiLFxuXCJvbk1vdXNlT3V0XCIsXG5cIm9uTW91c2VPdmVyXCIsXG5cIm9uTW91c2VVcFwiLFxuXCJvblNlbGVjdFwiLFxuXCJvblNjcm9sbFwiLFxuXCJvbkFib3J0XCIsXG5cIm9uQ2FuUGxheVwiLFxuXCJvbkNhblBsYXlUaHJvdWdoXCIsXG5cIm9uRHVyYXRpb25DaGFuZ2VcIixcblwib25FbXB0aWVkXCIsXG5cIm9uRW5kZWRcIixcblwib25FcnJvclwiLFxuXCJvbkxvYWRlZERhdGFcIixcblwib25Mb2FkZWRNZXRhZGF0YVwiLFxuXCJvbkxvYWRTdGFydFwiLFxuXCJvblBhdXNlXCIsXG5cIm9uUGxheVwiLFxuXCJvblBsYXlpbmdcIixcblwib25Qcm9ncmVzc1wiLFxuXCJvblJhdGVDaGFuZ2VcIixcblwib25TZWVrZWRcIixcblwib25TZWVraW5nXCIsXG5cIm9uV2FpdGluZ1wiLFxuXCJvbkxvYWRcIixcblwib25FcnJvclwiLFxuXCJvbkFuaW1hdGlvblN0YXJ0XCIsXG5cIm9uQW5pbWF0aW9uRW5kXCIsXG5cIm9uQW5pbWF0aW9uSXRlcmF0aW9uXCIsXG5cIm9uVHJhbnNpdGlvbkVuZFwiXSIsImNvbnN0IEV2ZW50bGlzdCA9IHJlcXVpcmUoXCIuL2V2ZW50bGlzdC5qc1wiKTtcblxuZnVuY3Rpb24gZXh0cmFjdEV2ZW50TmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRsaXN0LnJlZHVjZSgob2IsaXRtKSA9PiB7XG5cdG9iW2l0bV0gPSB7cmVnaXN0ZXJlZDogZmFsc2UsIGV2ZW50TmFtZTogZXh0cmFjdEV2ZW50TmFtZShpdG0pLCBldmVudE5TOiBpdG19O1xuXHRyZXR1cm4gb2I7XG59LCB7fSk7IiwiY29uc3QgZXZlbnRzID0gcmVxdWlyZShcIi4vdmRvbS9ldmVudHMuanNcIik7XG5jb25zdCBzZXREaWZmID0gcmVxdWlyZShcIi4vdmRvbS9kaWZmaW5nLmpzXCIpO1xuY29uc3QgaGFuZHlIZWxwZXJzID0gcmVxdWlyZShcIi4vaGFuZHlfZnVuY3MuanNcIik7XG5jb25zdCBzbW9vdGhOZXN0ZWQgPSBoYW5keUhlbHBlcnMuc21vb3RoQXJyYXkoKTtcblxuZnVuY3Rpb24gTm9kZU1hcChhcHBUaXRsZSA9ICdkZWZhdWx0Jykge1xuICAgdGhpcy5hcHBUaXRsZSA9IGFwcFRpdGxlO1xuICAgdGhpcy5kb21Db21wb25lbnRzID0ge307XG4gICB0aGlzLnJvb3RDb21wb25lbnQgPSBudWxsO1xuICAgdGhpcy5hcHBSb290RG9tID0ge1xuICAgICAgZG9tRWxlbWVudDogbnVsbCxcbiAgICAgIG5lc3RlZDogW11cbiAgIH07XG4gICB0aGlzLmFwcFJvb3QgPSBudWxsO1xuICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG5cbiAgIHRoaXMuY3JlYXRlVWRpZCA9ICgpID0+IHtcbiAgICAgIHJldHVybiAoXCIwMDAwXCIgKyAoTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDM2LCA0KSA8PCAwKS50b1N0cmluZygzNikpLnNsaWNlKC00KVxuICAgfTtcblxuICAgdGhpcy5nZXRFbGVtZW50ID0gKGRvbUVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChkb21FbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgIHRoaXMuYXBwUm9vdCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgICB0aGlzLmFwcFJvb3REb20uZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkb21FbGVtZW50KTtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICB0aGlzLmFwcFJvb3QgPSBlbGVtO1xuICAgICAgICAgdGhpcy5hcHBSb290RG9tLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmVycm9yKFwiRWxlbWVudDogXCIgKyBkb21FbGVtZW50ICsgXCIgbm90IGZvdW5kXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgfTtcbiAgIHRoaXMuc2V0TGlzdGVuZXIgPSAobGlzdGVuZXIsIHR5cGUpID0+IHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKCdhcHBSb290JywgdGhpcy5hcHBSb290KVxuICAgICAgdGhpcy5hcHBSb290LmFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXIsIChlKSA9PiB7XG4gICAgICAgICBzZWxmLmxvb2tVcFJlZ2lzdHJ5KGUudGFyZ2V0LCB0eXBlKTtcbiAgICAgIH0pO1xuXG4gICB9XG4gICB0aGlzLmFwcGx5TGlzdGVuZXIgPSAobGlzdGVuZXIpID0+IHtcblxuICAgICAgbGV0IGV2ZW50SW5mbyA9IHRoaXMuZXZlbnRzW2xpc3RlbmVyXTtcbiAgICAgIGlmICghZXZlbnRJbmZvLnJlZ2lzdGVyZWQpIHtcbiAgICAgICAgIGV2ZW50SW5mby5yZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICAgICAgIHRoaXMuc2V0TGlzdGVuZXIoZXZlbnRJbmZvLmV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgfVxuICAgdGhpcy5sb29rVXBSZWdpc3RyeSA9ICh0YXJnZXQsIGV2ZW50TmFtZSkgPT4ge1xuICAgICAgLy9zcGxpdCgvXFwuKD89W14uXSokKS8pXG4gICAgICBsZXQgdGdUcmFjZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RyYWNlJyk7XG4gICAgICBsZXQgdHJhY2VBcnJheSA9IHRnVHJhY2Uuc3BsaXQoJy4nKTtcbiAgICAgIGNvbnNvbGUubG9nKCd0cmFjZUFycmF5JywgdHJhY2VBcnJheSk7XG4gICAgICBsZXQgdkRvbSA9IHRoaXMuZG9tQ29tcG9uZW50cztcbiAgICAgIGNvbnNvbGUubG9nKCd2RG9tJywgdkRvbSk7XG4gICAgICB0cmFjZUFycmF5LnNoaWZ0KClcbiAgICAgIHRyYWNlQXJyYXkubWFwKChpdG0sIGkpID0+IHtcbiAgICAgICAgIGlmICghdkRvbS5uZXN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgICAgIGxldCBuZXN0ID0gdkRvbS5uZXN0ZWRbaXRtXTtcbiAgICAgICAgIHZEb20gPSBuZXN0O1xuICAgICAgICAgcmV0dXJuIG5lc3Q7XG4gICAgICB9KS5mb3JFYWNoKChpdG0sIGlpKSA9PiB7XG4gICAgICAgICBpZiAoaXRtKSB7XG4gICAgICAgICAgICBsZXQgaGFzQWN0aW9uID0gaXRtLnByb3BzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICBpZiAoaGFzQWN0aW9uKSB7XG4gICAgICAgICAgICAgICBoYXNBY3Rpb24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSlcblxuICAgfVxuICAgdGhpcy5vYmplY3RDaGFuZ2UgPSAobmV3UmVuZGVyKSA9PiB7XG4gICAgICBsZXQgbmV3T2IgPSB0aGlzLnJlcmVuZGVyKG5ld1JlbmRlciwgJ1Jvb3QnKTtcbiAgICAgIGNvbnNvbGUubG9nKCduZXdSZW5kZXInLCBuZXdPYik7XG4gICAgICB0aGlzLnVwZGF0ZUVsZW1lbnQodGhpcy5kb21Db21wb25lbnRzLCBuZXdPYilcbiAgIH07XG4gICB0aGlzLmNyZWF0ZUNvbXBvbmVudCA9IChvYmosIGNvbnRhaW5lckVsZW1lbnQpID0+IHtcblxuICAgICAgaWYgKHRoaXMuZ2V0RWxlbWVudChjb250YWluZXJFbGVtZW50KSkge1xuICAgICAgICAgb2JqLmRvbUVsZW1lbnQgPSB0aGlzLmFwcFJvb3Q7XG4gICAgICAgICB0aGlzLm1vdW50QXBwKG9iaik7XG4gICAgICB9O1xuICAgfTtcblxuICAgdGhpcy52aWV3T2JqZWN0cyA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdhcHBSb290RG9tJywgdGhpcy5hcHBSb290RG9tKTtcbiAgICAgIGNvbnNvbGUubG9nKCdkb21CcmFuY2hlcycsIHRoaXMuZG9tQ29tcG9uZW50cyk7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5ldmVudHMnLCB0aGlzLmV2ZW50cyk7XG5cbiAgIH07XG4gICB0aGlzLm1vdW50QXBwID0gKG9iaikgPT4ge1xuICAgICAgdGhpcy5kb21Db21wb25lbnRzID0gb2JqO1xuICAgICAgdGhpcy5hcHBSb290RG9tLm5lc3RlZC5wdXNoKHRoaXMuZG9tQ29tcG9uZW50cyk7XG4gICAgICB0aGlzLmFwcFJvb3QuYXBwZW5kQ2hpbGQodGhpcy5odG1sQnVpbGQob2JqLCBcIlJvb3RcIikpO1xuICAgfTtcblxuICAgY29uc3Qgb2dDcmVhdGVFbGVtZW50ID0gRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQ7XG4gICBjb25zdCBvZ2NyZWF0ZUVsZW1lbnROUyA9IERvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlM7XG5cbiAgIGxldCBzZWxmID0gdGhpcztcbiAgIGxldCByZSA9IG5ldyBSZWdFeHAoL15leF8vaSlcbiAgIERvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudChuYW1lLCBhdHRycykge1xuICAgICAgdmFyIGVsZW1lbnQgPSBvZ0NyZWF0ZUVsZW1lbnQuY2FsbCh0aGlzLCBTdHJpbmcobmFtZSkpO1xuXG4gICAgICBpZiAoIWF0dHJzKSByZXR1cm4gZWxlbWVudDtcblxuICAgICAgZm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuICAgICAgICAgaWYgKCFzZWxmLmV2ZW50c1thdHRyXSAmJiAhcmUudGVzdChhdHRyKSB8fCBhdHRyID09PSAnc3JjJykge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ci5yZXBsYWNlKC9bQS1aXS9nLCAnLSQmJyksIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgfTtcbiAgIERvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlMgPSBmdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZSwgYXR0cnMpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gb2djcmVhdGVFbGVtZW50TlMuY2FsbCh0aGlzLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBTdHJpbmcobmFtZSkpO1xuXG4gICAgICBpZiAoIWF0dHJzKSByZXR1cm4gZWxlbWVudDtcblxuICAgICAgZm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuICAgICAgICAgaWYgKCFzZWxmLmV2ZW50c1thdHRyXSAmJiAhcmUudGVzdChhdHRyKSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBhdHRyLnJlcGxhY2UoL1tBLVpdL2csICctJCYnKSwgYXR0cnNbYXR0cl0pO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICB9O1xuICAgY29uc3QgY3JlYXRlRWxlbSA9IChub2RlLCBncm91cCwgcGFyZW50KSA9PiB7XG5cbiAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG5vZGUgPT09ICdudW1iZXInIHx8ICh0eXBlb2Ygbm9kZSAhPT0gXCJvYmplY3RcIiAmJiBub2RlICE9PSBudWxsICYmIG5vZGUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlKTtcbiAgICAgIH1cbiAgICAgIG5vZGUucHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBub2RlLnByb3BzLCB7XG4gICAgICAgICB0cmFjZTogZ3JvdXAsXG4gICAgICAgICBwYXJlbnQ6IHBhcmVudFxuICAgICAgfSlcbiAgICAgIE9iamVjdC5rZXlzKG5vZGUucHJvcHMpLmZvckVhY2goKGl0bSwgaWkpID0+IHtcbiAgICAgICAgIGlmIChzZWxmLmV2ZW50c1tpdG1dICYmIGl0bSAhPT0gJ3NyYycpIHtcbiAgICAgICAgICAgIHNlbGYuYXBwbHlMaXN0ZW5lcihpdG0pO1xuICAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlLnR5cGUsIG5vZGUucHJvcHMpO1xuICAgICAgbm9kZS5kb21FbGVtZW50ID0gZWw7XG4gICAgICBub2RlLm5lc3RlZCA9IG5vZGUubmVzdGVkID8gbm9kZS5uZXN0ZWQgOiBbXTtcbiAgICAgIGlmIChub2RlLm5lc3RlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICAgIG5vZGUubmVzdGVkXG4gICAgICAgICAubWFwKChlbG0sIGlpKSA9PiB7XG4gICAgICAgICAgICBsZXQgZWxtSWQgPSBncm91cCArICcuJyArIGlpO1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW0oZWxtLCBlbG1JZCwgZ3JvdXApO1xuICAgICAgICAgfSkuZm9yRWFjaChlbC5hcHBlbmRDaGlsZC5iaW5kKGVsKSk7XG4gICAgICByZXR1cm4gZWw7XG5cbiAgIH07XG5cblxuICAgY29uc3QgcmVSZW5kZXJFbGVtID0gKG5vZGUsIGdyb3VwLCBwYXJlbnQpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG5vZGUgPT09ICdudW1iZXInIHx8ICh0eXBlb2Ygbm9kZSAhPT0gXCJvYmplY3RcIiAmJiBub2RlICE9PSBudWxsICYmIG5vZGUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuXG4gICAgICBub2RlLm5lc3RlZCA9IG5vZGUubmVzdGVkID8gbm9kZS5uZXN0ZWQgOiBbXTtcbiAgICAgIG5vZGUucHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBub2RlLnByb3BzLCB7XG4gICAgICAgICB0cmFjZTogZ3JvdXAsXG4gICAgICAgICBwYXJlbnQ6IHBhcmVudFxuICAgICAgfSlcbiAgICAgIG5vZGUubmVzdGVkXG4gICAgICAgICAubWFwKChlbG0sIGlpKSA9PiB7XG4gICAgICAgICAgICBsZXQgZWxtSWQgPSBncm91cCArICcuJyArIGlpO1xuICAgICAgICAgICAgcmV0dXJuIHJlUmVuZGVyRWxlbShlbG0sIGVsbUlkLCBncm91cCk7XG4gICAgICAgICB9KTtcbiAgICAgIHJldHVybiBub2RlO1xuXG4gICB9O1xuICAgdGhpcy5odG1sQnVpbGQgPSAobm9kZSwgZ3JvdXApID0+IHtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtKG5vZGUsIGdyb3VwLCAnUm9vdCcpO1xuICAgfTtcbiAgIHRoaXMucmVyZW5kZXIgPSAobm9kZSwgZ3JvdXApID0+IHtcbiAgICAgIHJldHVybiByZVJlbmRlckVsZW0obm9kZSwgZ3JvdXAsICdSb290Jyk7XG4gICB9O1xuICAgdGhpcy5kaWZmRWxlbWVudHMgPSBzZXREaWZmKHNlbGYsIGNyZWF0ZUVsZW0pO1xuICAgdGhpcy51cGRhdGVFbGVtZW50ID0gKG9sZE5vZGUsIG5ld05vZGUpID0+IHtcbiAgICAgIHRoaXMuZGlmZkVsZW1lbnRzKHRoaXMuYXBwUm9vdERvbSwgbmV3Tm9kZSwgb2xkTm9kZSk7XG4gICAgICB0aGlzLmRvbUNvbXBvbmVudHMgPSBuZXdOb2RlO1xuICAgfVxuICAgdGhpcy5TZXRTdGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnbm90IHlldCBzZXQnKTtcbiAgIH1cblxuXG59O1xuXG5Ob2RlTWFwLnByb3RvdHlwZS5jb21wb25lbnQgPSAob2JqKSA9PiB7XG4gICBpZiAoIShvYmogaW5zdGFuY2VvZiBBcnJheSkgJiYgb2JqIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICBpZiAoIW9ialtcImNvbXBvbmVudE5hbWVcIl0gfHwgIW9ialtcImNvbXBvbmVudFJlbmRlclwiXSkge1xuICAgICAgICAgY29uc29sZS5lcnJvcihcIk9iamVjdCBtdXN0IGhhdmUgYSBicmFuY2hOYW1lIGFuZCBicmFuY2hPYmplY3RcIik7XG4gICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIG9iai52ZG9tSWQgPSAnQCcgKyBvYmouY29tcG9uZW50TmFtZTtcbiAgICAgIHJldHVybiAob3B0cykgPT4ge1xuICAgICAgICAgcmV0dXJuIG9iai5jb21wb25lbnRSZW5kZXIob3B0cyk7XG4gICAgICB9XG4gICB9XG59O1xuXG5cbk5vZGVNYXAucHJvdG90eXBlLm5vZGUgPSAodHlwZSwgcHJvcHMgPSB7fSwgWy4uLm5lc3RlZF0gPSBbXSkgPT4ge1xuICAgbmVzdGVkID0gc21vb3RoTmVzdGVkKG5lc3RlZCk7XG4gICByZXR1cm4ge1xuICAgICAgdHlwZSxcbiAgICAgIHByb3BzLFxuICAgICAgbmVzdGVkXG4gICB9O1xufVxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOb2RlTWFwKCdleGFtcGxlJyk7IiwibW9kdWxlLmV4cG9ydHMgPSAoY2FsbEJhY2spID0+IHtcbiAgIGlmICh0cnVlKSB7XG4gICAgICBmdW5jdGlvbiBnZXRSZXBvRGF0YSh1cmwsIGZyYW1ld29yaywgaW5mb1R5cGUpIHtcbiAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzOiBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbzogZnJhbWV3b3JrLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaW5mb1R5cGVcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXM6IG5ldyBFcnJvcih4aHIuc3RhdHVzVGV4dCksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvOiBmcmFtZXdvcmssXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpbmZvVHlwZVxuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgIHJlczogbmV3IEVycm9yKHhoci5zdGF0dXNUZXh0KSxcbiAgICAgICAgICAgICAgICAgIHJlcG86IGZyYW1ld29yayxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IGluZm9UeXBlXG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgfSk7XG5cbiAgICAgIH07XG5cblxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgZ2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvdnVlanMvdnVlL2V2ZW50cycsICdWdWUnLCAnZXZlbnRzJyksXG4gICAgICAgICBnZXRSZXBvRGF0YSgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy92dWVqcy92dWUnLCAnVnVlJywgJ2dlbmVyYWwnKSxcbiAgICAgICAgIGdldFJlcG9EYXRhKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3Z1ZWpzL3Z1ZS9jb250cmlidXRvcnMnLCAnVnVlJywgJ2NvbnRyaWJ1dG9ycycpLFxuICAgICAgICAgZ2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvZmFjZWJvb2svcmVhY3QvZXZlbnRzJywgJ1JlYWN0JywgJ2V2ZW50cycpLFxuICAgICAgICAgZ2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvZmFjZWJvb2svcmVhY3QnLCAnUmVhY3QnLCAnZ2VuZXJhbCcpLFxuICAgICAgICAgZ2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvZmFjZWJvb2svcmVhY3QvY29udHJpYnV0b3JzJywgJ1JlYWN0JywgJ2NvbnRyaWJ1dG9ycycpLFxuICAgICAgICAgZ2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvYW5ndWxhci9hbmd1bGFyLmpzL2V2ZW50cycsICdBbmd1bGFyJywgJ2V2ZW50cycpLFxuICAgICAgICAgZ2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvYW5ndWxhci9hbmd1bGFyLmpzJywgJ0FuZ3VsYXInLCAnZ2VuZXJhbCcpLFxuICAgICAgICAgZ2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvYW5ndWxhci9hbmd1bGFyLmpzL2NvbnRyaWJ1dG9ycycsICdBbmd1bGFyJywgJ2NvbnRyaWJ1dG9ycycpLFxuICAgICAgICAgZ2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvdHJ1ZWFkbS9pbmZlcm5vL2V2ZW50cycsICdJbmZlcm5vJywgJ2V2ZW50cycpLFxuICAgICAgICAgZ2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvdHJ1ZWFkbS9pbmZlcm5vJywgJ0luZmVybm8nLCAnZ2VuZXJhbCcpLFxuICAgICAgICAgZ2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvdHJ1ZWFkbS9pbmZlcm5vL2NvbnRyaWJ1dG9ycycsICdJbmZlcm5vJywgJ2NvbnRyaWJ1dG9ycycpLFxuICAgICAgICAgZ2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvZW1iZXJqcy9lbWJlci5qcy9ldmVudHMnLCAnRW1iZXInLCAnZXZlbnRzJyksXG4gICAgICAgICBnZXRSZXBvRGF0YSgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9lbWJlcmpzL2VtYmVyLmpzJywgJ0VtYmVyJywgJ2dlbmVyYWwnKSxcbiAgICAgICAgIGdldFJlcG9EYXRhKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2VtYmVyanMvZW1iZXIuanMvY29udHJpYnV0b3JzJywgJ0VtYmVyJywgJ2NvbnRyaWJ1dG9ycycpXG4gICAgICBdKS50aGVuKChyZXNwb25zZXMpID0+IHtcbiAgICAgICAgIGxldCByZXNwb25zZUFob2xpYyA9IHJlc3BvbnNlcy5yZWR1Y2UoKG9iLCByZXMpID0+IHtcbiAgICAgICAgICAgIG9iW3Jlcy5yZXBvXVtyZXMudHlwZV0gPSByZXMucmVzO1xuICAgICAgICAgICAgcmV0dXJuIG9iO1xuICAgICAgICAgfSwge1xuICAgICAgICAgICAgVnVlOiB7fSxcbiAgICAgICAgICAgIFJlYWN0OiB7fSxcbiAgICAgICAgICAgIEFuZ3VsYXI6IHt9LFxuICAgICAgICAgICAgSW5mZXJubzoge30sXG4gICAgICAgICAgICBFbWJlcjoge31cbiAgICAgICAgIH0pO1xuICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc3BvbnNlQWhvbGljJyxyZXNwb25zZUFob2xpYyk7XG4gICAgICAgICBjYWxsQmFjayhyZXNwb25zZUFob2xpYyk7XG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdpdGh1YmRhdGFcIiwgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VBaG9saWMpKTtcblxuICAgICAgfSk7XG4gICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgIGNhbGxCYWNrKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnaXRodWJkYXRhXCIpKSk7XG4gICAgICB9LCAzMDAwKTtcbiAgIH1cbn0iXX0=
