(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var EX = require("../vdom_es6");
function alertIt() {
  alert("sup dude");
}
var Yo = EX.component({
  componentName: 'list1',
  state: {},
  componentRender: function componentRender(props) {
    return EX.node('ul', { class: "nice-list boxed-list" }, EX.node('li', { 'data-stuff': "88", 'data-what': "http://www.imdb.com/title/tt0078748/?ref_=nv_sr_2" }, "Hey", EX.node('span', { class: "float-right" }, "大姐")), EX.node('li', { 'data-stuff': props.u, onClick: alertIt }, props.say), EX.node('li', null, "Hey3"));
  }
});

module.exports = Yo;

},{"../vdom_es6":5}],2:[function(require,module,exports){
"use strict";

var theXHRstuff = require('./xhrRequests.js');

var EX = require("./vdom_es6");
var Yo = require("./components/list.js");
var whenItArrives = function whenItArrives(res) {
  console.log('成龍大哥');
  console.log('responseAholic', res);
};

var appSet = {
  state: {
    yoArray: [{ u: '爆拉肚子', say: "mudButt" }, { u: 344, say: "scooby Doo" }],
    bool: 1
  },
  render: function render() {
    var _appSet$state = appSet.state;
    var yoArray = _appSet$state.yoArray;
    var bool = _appSet$state.bool;

    var theclass = bool ? "ok-cool" : "bold-yikes";
    /* let heyaRARY = (arr) => {arr.map((itm) => {
    	return <Yo u={itm.u} say={itm.say} />
    	})
    };*/
    //console.log('heyaRARY', heyaRARY)
    return EX.node('div', null, EX.node('h2', { class: theclass }, "yo yo yo"), Yo({ u: 333, say: "ok" }));
  }
};

EX.createComponent(appSet.render(), document.getElementById('container'));

EX.viewObjects();
var ok = { yoArray: [{ u: '爆拉肚子', say: "mudButt" }, { u: 344, say: "scooby Doo" }, { u: 'tangy', say: 'theThird' }], bool: 0 };
appSet.state = Object.assign({}, appSet.state, ok);
EX.objectChange(appSet.render());
theXHRstuff(whenItArrives);
console.log('event list', EX.events);

},{"./components/list.js":1,"./vdom_es6":5,"./xhrRequests.js":6}],3:[function(require,module,exports){
"use strict";

module.exports = ["onCopy", "onCut", "onPaste", "onKeyDown", "onKeyPress", "onKeyUp", "onFocus", "onBlur", "onChange", "onInput", "onSubmit", "onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onSelect", "onScroll", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEnded", "onError", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onWaiting", "onLoad", "onError", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd"];

},{}],4:[function(require,module,exports){
"use strict";

var Eventlist = require("./eventlist.js");

function extractEventName(name) {
	return name.slice(2).toLowerCase();
}

module.exports = Eventlist.reduce(function (ob, itm) {
	ob[itm] = { registered: false, eventName: extractEventName(itm), eventNS: itm };
	return ob;
}, {});

},{"./eventlist.js":3}],5:[function(require,module,exports){
"use strict";

var events = require("./vdom/events.js");
function NodeMap() {
   var _this = this;

   var appTitle = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];

   this.appTitle = appTitle;
   this.domComponents = {};
   this.rootDomElement = null;
   this.appRoot = null;
   this.mountedObject = null;
   this.events = events;
   this.appEventRegistry = {};
   this.domContainers = {};

   this.createUdid = function () {
      return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
   };

   this.getElement = function (domElement) {
      if (domElement instanceof HTMLElement) {
         _this.appRoot = domElement;
         return true;
      }
      var elem = document.querySelector(domElement);
      if (elem) {
         _this.appRoot = elem;
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
      var vDom = _this.domComponents[traceArray[0]];
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
            var hasClick = itm.props[eventName];
            if (hasClick) {
               hasClick();
            }
         }
      });
   };
   this.objectChange = function (newRender) {
      console.log('this.mountedObject', _this.mountedObject);
      console.log('newRender', newRender);
   };
   this.createComponent = function (obj, containerElement) {

      if (_this.getElement(containerElement)) {
         obj.domElement = _this.appRoot;
         _this.mountedObject = obj;
         _this.mountApp(obj);
      };
   };

   this.viewObjects = function () {
      console.log('domContainers', _this.domContainers);
      console.log('domBranches', _this.domComponents);
   };
   this.mountApp = function (obj) {
      _this.domComponents["@App"] = obj;
      _this.appRoot.appendChild(_this.htmlBuild(obj, "@App"));
   };

   var ogCreateElement = Document.prototype.createElement;
   var ogcreateElementNS = Document.prototype.createElementNS;

   var self = this;
   Document.prototype.createElement = function createElement(name, attrs) {
      var element = ogCreateElement.call(this, String(name));

      if (!attrs) return element;

      for (var attr in attrs) {
         if (!self.events[attr]) {
            element.setAttribute(attr.replace(/[A-Z]/g, '-$&'), attrs[attr]);
         }
      }
      return element;
   };
   Document.prototype.createElementNS = function createElementNS(name, attrs) {
      var element = ogcreateElementNS.call(this, 'http://www.w3.org/2000/svg', String(name));

      if (!attrs) return element;

      for (var attr in attrs) {

         elementsetAttributeNS('http://www.w3.org/2000/svg', attr.replace(/[A-Z]/g, '-$&'), attrs[attr]);
      }
      return element;
   };

   var createElem = function createElem(node, group, parent) {

      if (typeof node === 'string') {

         return document.createTextNode(node);
      }
      node.props = node.props ? node.props : {};
      node.props.parent = parent;
      node.props.trace = group;
      Object.keys(node.props).forEach(function (itm, ii) {
         if (self.events[itm]) {
            self.applyListener(itm);
         }
      });

      var el = document.createElement(node.type, node.props);
      node.domElement = el;
      node.nested = node.nested ? node.nested : [];
      node.nested.map(function (elm, ii) {
         var elmId = group + '.' + ii;
         return createElem(elm, elmId, group);
      }).forEach(el.appendChild.bind(el));
      return el;
   };
   var reRenderElem = function reRenderElem(node, group, parent) {

      if (typeof node === 'string') {
         return document.createTextNode(node);
      }

      node.props = node.props ? node.props : {};
      node.props.parent = parent;
      node.props.trace = group;

      node.nested.map(function (elm, ii) {
         var elmId = group + '.' + ii;
         return createElem(elm, elmId, group);
      }).forEach(el.appendChild.bind(el));
      return el;
   };
   this.htmlBuild = function (node, group) {
      return createElem(node, group, 'Root');
   };
   this.rerender = function (node, group) {
      return reRenderElem(node, group, 'Root');
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

NodeMap.prototype.node = function (type, props) {
   for (var _len = arguments.length, nested = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      nested[_key - 2] = arguments[_key];
   }

   return {
      type: type,
      props: props,
      nested: nested
   };
};

module.exports = new NodeMap('example');

},{"./vdom/events.js":4}],6:[function(require,module,exports){
'use strict';

module.exports = function (callBack) {
	function getRepoData(url, framework, infoType) {
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

	Promise.all([getRepoData('https://api.github.com/repos/vuejs/vue/events', 'Vue', 'events'), getRepoData('https://api.github.com/repos/vuejs/vue', 'Vue', 'general'), getRepoData('https://api.github.com/repos/vuejs/vue/contributors', 'Vue', 'contributors'), getRepoData('https://api.github.com/repos/facebook/react/events', 'React', 'events'), getRepoData('https://api.github.com/repos/facebook/react', 'React', 'general'), getRepoData('https://api.github.com/repos/facebook/react/contributors', 'React', 'contributors'), getRepoData('https://api.github.com/repos/angular/angular.js/events', 'Angular', 'events'), getRepoData('https://api.github.com/repos/angular/angular.js', 'Angular', 'general'), getRepoData('https://api.github.com/repos/angular/angular.js/contributors', 'Angular', 'contributors'), getRepoData('https://api.github.com/repos/trueadm/inferno/events', 'Inferno', 'events'), getRepoData('https://api.github.com/repos/trueadm/inferno', 'Inferno', 'general'), getRepoData('https://api.github.com/repos/trueadm/inferno/contributors', 'Inferno', 'contributors'), getRepoData('https://api.github.com/repos/emberjs/ember.js/events', 'Ember', 'events'), getRepoData('https://api.github.com/repos/emberjs/ember.js', 'Ember', 'general'), getRepoData('https://api.github.com/repos/emberjs/ember.js/contributors', 'Ember', 'contributors')]).then(function (responses) {
		var responseAholic = responses.reduce(function (ob, res) {
			ob[res.repo][res.type] = res.res;
			return ob;
		}, { Vue: {}, React: {}, Angular: {}, Inferno: {}, Ember: {} });
		// console.log('responseAholic',responseAholic);
		callBack(responseAholic);
	});
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvanMvY29tcG9uZW50cy9saXN0LmpzIiwicHVibGljL2pzL2luZGV4LmpzIiwicHVibGljL2pzL3Zkb20vZXZlbnRsaXN0LmpzIiwicHVibGljL2pzL3Zkb20vZXZlbnRzLmpzIiwicHVibGljL2pzL3Zkb21fZXM2LmpzIiwicHVibGljL2pzL3hoclJlcXVlc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLEtBQUssUUFBUSxhQUFSLENBQVg7QUFDQSxTQUFTLE9BQVQsR0FBa0I7QUFDaEIsUUFBTSxVQUFOO0FBQ0Q7QUFDRCxJQUFNLEtBQUssR0FBRyxTQUFILENBQWE7QUFDdEIsaUJBQWUsT0FETztBQUV0QixTQUFPLEVBRmU7QUFHdEIsbUJBQWlCLHlCQUFDLEtBQUQsRUFBVztBQUMzQixXQUNDLEdBQUcsSUFBSCxDQUFRLElBQVIsRUFBYyxFQUFDLE9BQU8sc0JBQVIsRUFBZCxFQUNGLEdBQUcsSUFBSCxDQUFRLElBQVIsRUFBYyxFQUFDLGNBQWMsSUFBZixFQUFxQixhQUFhLG1EQUFsQyxFQUFkLEVBQXNHLEtBQXRHLEVBQTZHLEdBQUcsSUFBSCxDQUFRLE1BQVIsRUFBZ0IsRUFBQyxPQUFPLGFBQVIsRUFBaEIsRUFBd0MsSUFBeEMsQ0FBN0csQ0FERSxFQUVGLEdBQUcsSUFBSCxDQUFRLElBQVIsRUFBYyxFQUFDLGNBQWUsTUFBTSxDQUF0QixFQUF5QixTQUFTLE9BQWxDLEVBQWQsRUFBMEQsTUFBTSxHQUFoRSxDQUZFLEVBR0YsR0FBRyxJQUFILENBQVEsSUFBUixFQUFjLElBQWQsRUFBb0IsTUFBcEIsQ0FIRSxDQUREO0FBUUE7QUFacUIsQ0FBYixDQUFYOztBQWVBLE9BQU8sT0FBUCxHQUFpQixFQUFqQjs7Ozs7QUNuQkEsSUFBTSxjQUFjLFFBQVEsa0JBQVIsQ0FBcEI7O0FBRUEsSUFBTSxLQUFLLFFBQVEsWUFBUixDQUFY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QUFQLEVBQWEsSUFBSSxJQUFqQixJQUF5QixJQUFJLEdBQTdCO0FBQ0EsVUFBTyxFQUFQO0FBQ0EsR0FIb0IsRUFHbEIsRUFBQyxLQUFLLEVBQU4sRUFBVSxPQUFPLEVBQWpCLEVBQXFCLFNBQVMsRUFBOUIsRUFBa0MsU0FBUyxFQUEzQyxFQUErQyxPQUFPLEVBQXRELEVBSGtCLENBQXJCOztBQUtFLFdBQVMsY0FBVDtBQUNILEVBdkJEO0FBeUJDLENBNUREIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IEVYID0gcmVxdWlyZShcIi4uL3Zkb21fZXM2XCIpO1xuZnVuY3Rpb24gYWxlcnRJdCgpe1xuICBhbGVydChcInN1cCBkdWRlXCIpXG59XG5jb25zdCBZbyA9IEVYLmNvbXBvbmVudCh7XG4gIGNvbXBvbmVudE5hbWU6ICdsaXN0MScsXG4gIHN0YXRlOiB7fSxcbiAgY29tcG9uZW50UmVuZGVyOiAocHJvcHMpID0+IHtcbiAgXHRyZXR1cm4gKFxuXHQgIFx0RVgubm9kZSgndWwnLCB7Y2xhc3M6IFwibmljZS1saXN0IGJveGVkLWxpc3RcIn0sXG5cdFx0RVgubm9kZSgnbGknLCB7J2RhdGEtc3R1ZmYnOiBcIjg4XCIsICdkYXRhLXdoYXQnOiBcImh0dHA6Ly93d3cuaW1kYi5jb20vdGl0bGUvdHQwMDc4NzQ4Lz9yZWZfPW52X3NyXzJcIn0sIFwiSGV5XCIsIEVYLm5vZGUoJ3NwYW4nLCB7Y2xhc3M6IFwiZmxvYXQtcmlnaHRcIn0sIFwi5aSn5aeQXCIpKSxcblx0XHRFWC5ub2RlKCdsaScsIHsnZGF0YS1zdHVmZic6ICBwcm9wcy51LCBvbkNsaWNrOiBhbGVydEl0fSwgcHJvcHMuc2F5KSxcblx0XHRFWC5ub2RlKCdsaScsIG51bGwsIFwiSGV5M1wiKVxuXHQpXG5cbiAgXHQpXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFlvOyIsImNvbnN0IHRoZVhIUnN0dWZmID0gcmVxdWlyZSgnLi94aHJSZXF1ZXN0cy5qcycpO1xuXG5jb25zdCBFWCA9IHJlcXVpcmUoXCIuL3Zkb21fZXM2XCIpO1xuY29uc3QgWW8gPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2xpc3QuanNcIik7XG52YXIgd2hlbkl0QXJyaXZlcyA9IChyZXMpID0+IHtcblx0Y29uc29sZS5sb2coJ+aIkOm+jeWkp+WTpScpO1xuXHQgY29uc29sZS5sb2coJ3Jlc3BvbnNlQWhvbGljJyxyZXMpO1xufVxuXG5sZXQgYXBwU2V0ID0ge1xuICBzdGF0ZToge1xuICBcdHlvQXJyYXk6IFt7dTon54iG5ouJ6IKa5a2QJywgc2F5OlwibXVkQnV0dFwifSAse3U6IDM0NCwgc2F5Olwic2Nvb2J5IERvb1wifSBdLFxuICBcdGJvb2w6IDFcbiAgfSxcbiAgcmVuZGVyOiAoKSA9PiB7XG4gIFx0bGV0IHt5b0FycmF5LCAgYm9vbH0gPSBhcHBTZXQuc3RhdGU7XG4gIFx0bGV0IHRoZWNsYXNzID0gYm9vbCA/IFwib2stY29vbFwiIDogXCJib2xkLXlpa2VzXCI7XG4gICAvKiBsZXQgaGV5YVJBUlkgPSAoYXJyKSA9PiB7YXJyLm1hcCgoaXRtKSA9PiB7XG4gIFx0XHRyZXR1cm4gPFlvIHU9e2l0bS51fSBzYXk9e2l0bS5zYXl9IC8+XG4gIFx0XHR9KVxuXHR9OyovXG4gIFx0Ly9jb25zb2xlLmxvZygnaGV5YVJBUlknLCBoZXlhUkFSWSlcbiAgXHRyZXR1cm4gKFxuICBcdEVYLm5vZGUoJ2RpdicsIG51bGwsXG4gICAgXHRFWC5ub2RlKCdoMicsIHtjbGFzczogdGhlY2xhc3N9LCBcInlvIHlvIHlvXCIpLFxuXHRcdFlvKHt1OiAzMzMsIHNheTogXCJva1wifSlcblxuXHQpXG4gIFx0XHQpXG4gIH1cbn07XG5cblxuRVguY3JlYXRlQ29tcG9uZW50KFxuICAgIGFwcFNldC5yZW5kZXIoKVxuXHQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKSk7XG5cblxuRVgudmlld09iamVjdHMoKTtcbnZhciBvayA9IHt5b0FycmF5OiBbe3U6J+eIhuaLieiCmuWtkCcsIHNheTpcIm11ZEJ1dHRcIn0gLHt1OiAzNDQsIHNheTpcInNjb29ieSBEb29cIn0sIHt1OiAndGFuZ3knLCBzYXk6ICd0aGVUaGlyZCd9XSwgYm9vbDogMH07XG5hcHBTZXQuc3RhdGUgPSAgT2JqZWN0LmFzc2lnbih7fSwgYXBwU2V0LnN0YXRlLCBvayk7XG5FWC5vYmplY3RDaGFuZ2UoYXBwU2V0LnJlbmRlcigpKTtcbnRoZVhIUnN0dWZmKHdoZW5JdEFycml2ZXMpO1xuY29uc29sZS5sb2coJ2V2ZW50IGxpc3QnLCBFWC5ldmVudHMpIiwibW9kdWxlLmV4cG9ydHMgPVtcblwib25Db3B5XCIsXG5cIm9uQ3V0XCIsXG5cIm9uUGFzdGVcIixcblwib25LZXlEb3duXCIsXG5cIm9uS2V5UHJlc3NcIixcblwib25LZXlVcFwiLFxuXCJvbkZvY3VzXCIsXG5cIm9uQmx1clwiLFxuXCJvbkNoYW5nZVwiLFxuXCJvbklucHV0XCIsXG5cIm9uU3VibWl0XCIsXG5cIm9uQ2xpY2tcIixcblwib25Db250ZXh0TWVudVwiLFxuXCJvbkRvdWJsZUNsaWNrXCIsXG5cIm9uRHJhZ1wiLFxuXCJvbkRyYWdFbmRcIixcblwib25EcmFnRW50ZXJcIixcblwib25EcmFnRXhpdFwiLFxuXCJvbkRyYWdMZWF2ZVwiLFxuXCJvbkRyYWdPdmVyXCIsXG5cIm9uRHJhZ1N0YXJ0XCIsXG5cIm9uRHJvcFwiLFxuXCJvbk1vdXNlRG93blwiLFxuXCJvbk1vdXNlRW50ZXJcIixcblwib25Nb3VzZUxlYXZlXCIsXG5cIm9uTW91c2VNb3ZlXCIsXG5cIm9uTW91c2VPdXRcIixcblwib25Nb3VzZU92ZXJcIixcblwib25Nb3VzZVVwXCIsXG5cIm9uU2VsZWN0XCIsXG5cIm9uU2Nyb2xsXCIsXG5cIm9uQWJvcnRcIixcblwib25DYW5QbGF5XCIsXG5cIm9uQ2FuUGxheVRocm91Z2hcIixcblwib25EdXJhdGlvbkNoYW5nZVwiLFxuXCJvbkVtcHRpZWRcIixcblwib25FbmRlZFwiLFxuXCJvbkVycm9yXCIsXG5cIm9uTG9hZGVkRGF0YVwiLFxuXCJvbkxvYWRlZE1ldGFkYXRhXCIsXG5cIm9uTG9hZFN0YXJ0XCIsXG5cIm9uUGF1c2VcIixcblwib25QbGF5XCIsXG5cIm9uUGxheWluZ1wiLFxuXCJvblByb2dyZXNzXCIsXG5cIm9uUmF0ZUNoYW5nZVwiLFxuXCJvblNlZWtlZFwiLFxuXCJvblNlZWtpbmdcIixcblwib25XYWl0aW5nXCIsXG5cIm9uTG9hZFwiLFxuXCJvbkVycm9yXCIsXG5cIm9uQW5pbWF0aW9uU3RhcnRcIixcblwib25BbmltYXRpb25FbmRcIixcblwib25BbmltYXRpb25JdGVyYXRpb25cIixcblwib25UcmFuc2l0aW9uRW5kXCJdIiwiY29uc3QgRXZlbnRsaXN0ID0gcmVxdWlyZShcIi4vZXZlbnRsaXN0LmpzXCIpO1xuXG5mdW5jdGlvbiBleHRyYWN0RXZlbnROYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUuc2xpY2UoMikudG9Mb3dlckNhc2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudGxpc3QucmVkdWNlKChvYixpdG0pID0+IHtcblx0b2JbaXRtXSA9IHtyZWdpc3RlcmVkOiBmYWxzZSwgZXZlbnROYW1lOiBleHRyYWN0RXZlbnROYW1lKGl0bSksIGV2ZW50TlM6IGl0bX07XG5cdHJldHVybiBvYjtcbn0sIHt9KTsiLCJjb25zdCBldmVudHMgPSByZXF1aXJlKFwiLi92ZG9tL2V2ZW50cy5qc1wiKTtcbmZ1bmN0aW9uIE5vZGVNYXAoYXBwVGl0bGUgPSAnZGVmYXVsdCcpIHtcbiAgIHRoaXMuYXBwVGl0bGUgPSBhcHBUaXRsZTtcbiAgIHRoaXMuZG9tQ29tcG9uZW50cyA9IHt9O1xuICAgdGhpcy5yb290RG9tRWxlbWVudCA9IG51bGw7XG4gICB0aGlzLmFwcFJvb3QgPSBudWxsO1xuICAgdGhpcy5tb3VudGVkT2JqZWN0ID0gbnVsbDtcbiAgIHRoaXMuZXZlbnRzID0gIGV2ZW50cztcbiAgIHRoaXMuYXBwRXZlbnRSZWdpc3RyeSA9IHt9O1xuICAgdGhpcy5kb21Db250YWluZXJzID0ge307XG5cblxuICAgdGhpcy5jcmVhdGVVZGlkID0gKCkgPT4ge1xuICAgIHJldHVybiAoXCIwMDAwXCIgKyAoTWF0aC5yYW5kb20oKSpNYXRoLnBvdygzNiw0KSA8PCAwKS50b1N0cmluZygzNikpLnNsaWNlKC00KVxuICAgfTtcblxuICAgdGhpcy5nZXRFbGVtZW50ID0gKGRvbUVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChkb21FbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgIHRoaXMuYXBwUm9vdCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGxldCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkb21FbGVtZW50KTtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICB0aGlzLmFwcFJvb3QgPSBlbGVtO1xuICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmVycm9yKFwiRWxlbWVudDogXCIgKyBkb21FbGVtZW50ICsgXCIgbm90IGZvdW5kXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgfTtcbiAgIHRoaXMuc2V0TGlzdGVuZXIgPSAobGlzdGVuZXIsIHR5cGUpID0+IHtcbiAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgY29uc29sZS5sb2coJ2FwcFJvb3QnLCB0aGlzLmFwcFJvb3QgKVxuICAgICAgICB0aGlzLmFwcFJvb3QuYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lciwgKGUpID0+IHtcbiAgICAgICAgICAgIHNlbGYubG9va1VwUmVnaXN0cnkoZS50YXJnZXQsIHR5cGUpO1xuICAgICAgICB9KTtcblxuICAgfVxuICAgdGhpcy5hcHBseUxpc3RlbmVyID0gKGxpc3RlbmVyKSA9PiB7XG5cbiAgICAgIGxldCBldmVudEluZm8gPSB0aGlzLmV2ZW50c1tsaXN0ZW5lcl07XG4gICAgICBpZiAoIWV2ZW50SW5mby5yZWdpc3RlcmVkKSB7XG4gICAgICAgICAgZXZlbnRJbmZvLnJlZ2lzdGVyZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc2V0TGlzdGVuZXIoZXZlbnRJbmZvLmV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgfVxuICAgdGhpcy5sb29rVXBSZWdpc3RyeSA9ICh0YXJnZXQsIGV2ZW50TmFtZSkgPT4ge1xuICAgIC8vc3BsaXQoL1xcLig/PVteLl0qJCkvKVxuICAgIGxldCB0Z1RyYWNlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgndHJhY2UnKTtcbiAgICBsZXQgdHJhY2VBcnJheSA9IHRnVHJhY2Uuc3BsaXQoJy4nKTtcbiAgICAgY29uc29sZS5sb2coJ3RyYWNlQXJyYXknLCB0cmFjZUFycmF5KTtcbiAgICBsZXQgdkRvbSA9IHRoaXMuZG9tQ29tcG9uZW50c1t0cmFjZUFycmF5WzBdXTtcbiAgICBjb25zb2xlLmxvZygndkRvbScsIHZEb20pO1xuICAgIHRyYWNlQXJyYXkuc2hpZnQoKVxuICAgIHRyYWNlQXJyYXkubWFwKChpdG0sIGkpID0+IHtcbiAgICAgIGlmICghdkRvbS5uZXN0ZWQpeyByZXR1cm4gZmFsc2U7fVxuICAgICAgbGV0IG5lc3QgPSB2RG9tLm5lc3RlZFtpdG1dO1xuICAgICAgdkRvbSA9IG5lc3Q7XG4gICAgICByZXR1cm4gbmVzdDtcbiAgICB9KS5mb3JFYWNoKChpdG0sIGlpKSA9PntcbiAgICAgIGlmKGl0bSkge1xuICAgICAgICBsZXQgaGFzQ2xpY2sgPSBpdG0ucHJvcHNbZXZlbnROYW1lXTtcbiAgICAgICAgaWYoaGFzQ2xpY2speyBoYXNDbGljaygpIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICB9XG4gICB0aGlzLm9iamVjdENoYW5nZSA9IChuZXdSZW5kZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZygndGhpcy5tb3VudGVkT2JqZWN0Jyx0aGlzLm1vdW50ZWRPYmplY3QpO1xuICAgIGNvbnNvbGUubG9nKCduZXdSZW5kZXInLG5ld1JlbmRlcik7XG4gICB9O1xuICAgdGhpcy5jcmVhdGVDb21wb25lbnQgPSAob2JqLCBjb250YWluZXJFbGVtZW50KSA9PiB7XG5cbiAgICAgICAgIGlmICh0aGlzLmdldEVsZW1lbnQoY29udGFpbmVyRWxlbWVudCkpe1xuICAgICAgICAgIG9iai5kb21FbGVtZW50ID0gIHRoaXMuYXBwUm9vdDtcbiAgICAgICAgICB0aGlzLm1vdW50ZWRPYmplY3QgPSBvYmo7XG4gICAgICAgICAgICAgdGhpcy5tb3VudEFwcChvYmopO1xuICAgICAgICAgfTtcbiAgIH07XG5cbiAgIHRoaXMudmlld09iamVjdHMgPSAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZG9tQ29udGFpbmVycycsIHRoaXMuZG9tQ29udGFpbmVycyk7XG4gICAgICBjb25zb2xlLmxvZygnZG9tQnJhbmNoZXMnLCB0aGlzLmRvbUNvbXBvbmVudHMpO1xuXG4gICB9O1xuICAgdGhpcy5tb3VudEFwcCA9IChvYmopID0+IHtcbiAgICAgIHRoaXMuZG9tQ29tcG9uZW50c1tcIkBBcHBcIl0gPSBvYmo7XG4gICAgICB0aGlzLmFwcFJvb3QuYXBwZW5kQ2hpbGQodGhpcy5odG1sQnVpbGQob2JqLCBcIkBBcHBcIikpO1xuICAgfTtcblxuICAgY29uc3Qgb2dDcmVhdGVFbGVtZW50ID0gRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQ7XG4gIGNvbnN0IG9nY3JlYXRlRWxlbWVudE5TID0gRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnROUztcblxuICBsZXQgc2VsZiA9IHRoaXM7XG4gIERvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudChuYW1lLCBhdHRycykge1xuICAgICB2YXIgZWxlbWVudCA9IG9nQ3JlYXRlRWxlbWVudC5jYWxsKHRoaXMsIFN0cmluZyhuYW1lKSk7XG5cbiAgICAgaWYgKCFhdHRycykgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgICAgZm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuICAgICAgICBpZiAoIXNlbGYuZXZlbnRzW2F0dHJdKSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ci5yZXBsYWNlKC9bQS1aXS9nLCAnLSQmJyksIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgfVxuICAgICB9XG4gICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuICBEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudE5TID0gZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKG5hbWUsIGF0dHJzKSB7XG4gICAgIHZhciBlbGVtZW50ID0gb2djcmVhdGVFbGVtZW50TlMuY2FsbCh0aGlzLCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIFN0cmluZyhuYW1lKSk7XG5cbiAgICAgaWYgKCFhdHRycykgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgICAgZm9yICh2YXIgYXR0ciBpbiBhdHRycykge1xuXG4gICAgICAgIGVsZW1lbnRzZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBhdHRyLnJlcGxhY2UoL1tBLVpdL2csICctJCYnKSwgYXR0cnNbYXR0cl0pO1xuICAgICB9XG4gICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG5cblxuXG5jb25zdCBjcmVhdGVFbGVtID0gIChub2RlLCBncm91cCwgcGFyZW50KSA9PiB7XG5cbiAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIG5vZGUucHJvcHMgPSBub2RlLnByb3BzID8gbm9kZS5wcm9wcyA6IHt9O1xuICAgICAgICAgICBub2RlLnByb3BzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgbm9kZS5wcm9wcy50cmFjZSA9IGdyb3VwO1xuICAgICAgICAgICBPYmplY3Qua2V5cyhub2RlLnByb3BzKS5mb3JFYWNoKChpdG0sIGlpKSA9PntcbiAgICAgICAgICAgICBpZiAoc2VsZi5ldmVudHNbaXRtXSkge1xuICAgICAgICAgICAgICAgc2VsZi5hcHBseUxpc3RlbmVyKGl0bSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcblxuICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZS50eXBlLCBub2RlLnByb3BzKTtcbiAgICAgICAgICAgbm9kZS5kb21FbGVtZW50ID0gZWw7XG4gICAgICAgICAgIG5vZGUubmVzdGVkID0gbm9kZS5uZXN0ZWQgPyBub2RlLm5lc3RlZCA6IFtdO1xuICAgICAgICAgICBub2RlLm5lc3RlZFxuICAgICAgICAgICAgIC5tYXAoKGVsbSwgaWkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGVsbUlkID0gZ3JvdXAgKycuJysgaWk7XG4gICAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtKGVsbSwgZWxtSWQsIGdyb3VwKTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goZWwuYXBwZW5kQ2hpbGQuYmluZChlbCkpO1xuICAgICAgICAgICByZXR1cm4gZWw7XG5cbiAgICAgIH07XG5jb25zdCByZVJlbmRlckVsZW0gPSAgKG5vZGUsIGdyb3VwLCBwYXJlbnQpID0+IHtcblxuICAgICAgICAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUpO1xuICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgIG5vZGUucHJvcHMgPSBub2RlLnByb3BzID8gbm9kZS5wcm9wcyA6IHt9O1xuICAgICAgICAgICBub2RlLnByb3BzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgbm9kZS5wcm9wcy50cmFjZSA9IGdyb3VwO1xuXG4gICAgICAgICAgIG5vZGUubmVzdGVkXG4gICAgICAgICAgICAgLm1hcCgoZWxtLCBpaSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgZWxtSWQgPSBncm91cCArJy4nKyBpaTtcbiAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW0oZWxtLCBlbG1JZCwgZ3JvdXApO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChlbC5hcHBlbmRDaGlsZC5iaW5kKGVsKSk7XG4gICAgICAgICAgIHJldHVybiBlbDtcblxuICAgICAgfTtcbiAgdGhpcy5odG1sQnVpbGQgPSAobm9kZSwgZ3JvdXApID0+IHtcbiAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtKG5vZGUsIGdyb3VwLCAnUm9vdCcpO1xuICB9O1xuICB0aGlzLnJlcmVuZGVyID0gKG5vZGUsIGdyb3VwKSA9PiB7XG4gICAgICAgICByZXR1cm4gcmVSZW5kZXJFbGVtKG5vZGUsIGdyb3VwLCAnUm9vdCcpO1xuICB9O1xuXG5cbn07XG5cbk5vZGVNYXAucHJvdG90eXBlLmNvbXBvbmVudCA9IChvYmopID0+IHtcbiAgICBpZiAoIShvYmogaW5zdGFuY2VvZiBBcnJheSkgJiYgb2JqIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICBpZiAoIW9ialtcImNvbXBvbmVudE5hbWVcIl0gfHwgIW9ialtcImNvbXBvbmVudFJlbmRlclwiXSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk9iamVjdCBtdXN0IGhhdmUgYSBicmFuY2hOYW1lIGFuZCBicmFuY2hPYmplY3RcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG5cbiAgICAgICAgICBvYmoudmRvbUlkID0gJ0AnICsgb2JqLmNvbXBvbmVudE5hbWU7XG4gIHJldHVybiAob3B0cykgPT4ge1xuICAgcmV0dXJuIG9iai5jb21wb25lbnRSZW5kZXIob3B0cyk7XG4gIH1cbiB9XG59O1xuXG5cbk5vZGVNYXAucHJvdG90eXBlLm5vZGUgPSAodHlwZSwgcHJvcHMsIC4uLm5lc3RlZCkgPT4ge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBwcm9wcyxcbiAgICAgIG5lc3RlZFxuICAgfTtcbn1cblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOb2RlTWFwKCdleGFtcGxlJyk7IiwiXG5tb2R1bGUuZXhwb3J0cyA9IChjYWxsQmFjaykgPT4ge1xuZnVuY3Rpb24gZ2V0UmVwb0RhdGEodXJsLCBmcmFtZXdvcmssIGluZm9UeXBlKXtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblx0XHR4aHIub25sb2FkID0gKGUpID0+IHtcblx0XHQgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuXHRcdCAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0ICAgICAgcmVzb2x2ZSh7XG5cdFx0ICAgICAgXHRyZXM6IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCksXG5cdFx0ICAgICAgXHRyZXBvOmZyYW1ld29yayxcblx0XHQgICAgICBcdHR5cGU6IGluZm9UeXBlXG5cdFx0ICAgICAgfSk7XG5cdFx0ICAgIH0gZWxzZSB7XG5cdFx0ICAgIFx0cmVqZWN0KHtcblx0XHQgICAgXHRcdHJlczogIG5ldyBFcnJvcih4aHIuc3RhdHVzVGV4dCksXG5cdFx0ICAgIFx0XHRyZXBvOmZyYW1ld29yayxcblx0XHQgICAgICBcdFx0dHlwZTogaW5mb1R5cGVcblx0XHQgICAgICB9KTtcblx0XHQgICAgfVxuXHRcdCAgfVxuXHRcdH07XG5cdFx0eGhyLm9uZXJyb3IgPSAoZSkgPT4gIHtcblx0XHQgIHJlamVjdCh7XG5cdFx0ICAgIFx0cmVzOiAgbmV3IEVycm9yKHhoci5zdGF0dXNUZXh0KSxcblx0XHQgICAgXHRyZXBvOmZyYW1ld29yayxcblx0XHQgICAgICBcdHR5cGU6IGluZm9UeXBlXG5cdFx0ICAgICAgfSk7XG5cdFx0fTtcblx0XHR4aHIuc2VuZCgpO1xuXHR9KTtcblxufTtcblxuXG5Qcm9taXNlLmFsbChbXG5cdGdldFJlcG9EYXRhKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3Z1ZWpzL3Z1ZS9ldmVudHMnLCAnVnVlJywgJ2V2ZW50cycpLFxuXHRnZXRSZXBvRGF0YSgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy92dWVqcy92dWUnLCAnVnVlJywgJ2dlbmVyYWwnKSxcblx0Z2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvdnVlanMvdnVlL2NvbnRyaWJ1dG9ycycsICdWdWUnLCAnY29udHJpYnV0b3JzJyksXG5cdGdldFJlcG9EYXRhKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2ZhY2Vib29rL3JlYWN0L2V2ZW50cycsICdSZWFjdCcsICdldmVudHMnKSxcblx0Z2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvZmFjZWJvb2svcmVhY3QnLCAnUmVhY3QnLCAnZ2VuZXJhbCcpLFxuXHRnZXRSZXBvRGF0YSgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9mYWNlYm9vay9yZWFjdC9jb250cmlidXRvcnMnLCAnUmVhY3QnLCAnY29udHJpYnV0b3JzJyksXG5cdGdldFJlcG9EYXRhKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2FuZ3VsYXIvYW5ndWxhci5qcy9ldmVudHMnLCAnQW5ndWxhcicsICdldmVudHMnKSxcblx0Z2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvYW5ndWxhci9hbmd1bGFyLmpzJywgJ0FuZ3VsYXInLCAnZ2VuZXJhbCcpLFxuXHRnZXRSZXBvRGF0YSgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9hbmd1bGFyL2FuZ3VsYXIuanMvY29udHJpYnV0b3JzJywgJ0FuZ3VsYXInLCAnY29udHJpYnV0b3JzJyksXG5cdGdldFJlcG9EYXRhKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3RydWVhZG0vaW5mZXJuby9ldmVudHMnLCAnSW5mZXJubycsICdldmVudHMnKSxcblx0Z2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvdHJ1ZWFkbS9pbmZlcm5vJywgJ0luZmVybm8nLCAnZ2VuZXJhbCcpLFxuXHRnZXRSZXBvRGF0YSgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy90cnVlYWRtL2luZmVybm8vY29udHJpYnV0b3JzJywgJ0luZmVybm8nLCAnY29udHJpYnV0b3JzJyksXG5cdGdldFJlcG9EYXRhKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2VtYmVyanMvZW1iZXIuanMvZXZlbnRzJywgJ0VtYmVyJywgJ2V2ZW50cycpLFxuXHRnZXRSZXBvRGF0YSgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9lbWJlcmpzL2VtYmVyLmpzJywgJ0VtYmVyJywgJ2dlbmVyYWwnKSxcblx0Z2V0UmVwb0RhdGEoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvZW1iZXJqcy9lbWJlci5qcy9jb250cmlidXRvcnMnLCAnRW1iZXInLCAnY29udHJpYnV0b3JzJylcblx0XSkudGhlbigocmVzcG9uc2VzKSA9PiB7XG5cdFx0bGV0IHJlc3BvbnNlQWhvbGljID0gcmVzcG9uc2VzLnJlZHVjZSgob2IscmVzKSA9PiB7XG5cdFx0XHRvYltyZXMucmVwb11bcmVzLnR5cGVdID0gcmVzLnJlcztcblx0XHRcdHJldHVybiBvYjtcblx0XHR9LCB7VnVlOiB7fSwgUmVhY3Q6IHt9LCBBbmd1bGFyOiB7fSwgSW5mZXJubzoge30sIEVtYmVyOiB7fSB9KTtcblx0ICAvLyBjb25zb2xlLmxvZygncmVzcG9uc2VBaG9saWMnLHJlc3BvbnNlQWhvbGljKTtcblx0ICAgY2FsbEJhY2socmVzcG9uc2VBaG9saWMpO1xufSk7XG5cbn1cbiJdfQ==
