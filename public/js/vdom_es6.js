const events = require("./vdom/events.js");
const setDiff = require("./vdom/diffing.js");
const handyHelpers = require("./handy_funcs.js");
const smoothNested = handyHelpers.smoothArray();

function NodeMap(appTitle = 'default') {
   this.appTitle = appTitle;
   this.domComponents = {};
   this.rootComponent = null;
   this.appRootDom = {
      domElement: null,
      nested: []
   };
   this.appRoot = null;
   this.mountedCallbacks = [];
   this.events = events;

   this.createUdid = () => {
      return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
   };

   this.getElement = (domElement) => {
      if (domElement instanceof HTMLElement) {
         this.appRoot = domElement;
         this.appRootDom.domElement = domElement;
         return true;
      }
      let elem = document.querySelector(domElement);
      if (elem) {
         this.appRoot = elem;
         this.appRootDom.domElement = domElement;
         return true;
      }
      console.error("Element: " + domElement + " not found");
      return false;
   };
   this.setListener = (listener, type) => {
      let self = this;
      console.log('appRoot', this.appRoot)
      this.appRoot.addEventListener(listener, (e) => {
         self.lookUpRegistry(e.target, type);
      });

   }
   this.applyListener = (listener) => {

      let eventInfo = this.events[listener];
      if (!eventInfo.registered) {
         eventInfo.registered = true;
         this.setListener(eventInfo.eventName, listener);
      }
   }
   this.lookUpRegistry = (target, eventName) => {
      //split(/\.(?=[^.]*$)/)
      let tgTrace = target.getAttribute('trace');
      let traceArray = tgTrace.split('.');
      console.log('traceArray', traceArray);
      let vDom = this.domComponents;
      console.log('vDom', vDom);
      traceArray.shift()
      traceArray.map((itm, i) => {
         if (!vDom.nested) {
            return false;
         }
         let nest = vDom.nested[itm];
         vDom = nest;
         return nest;
      }).reverse().forEach((itm, ii) => {
         if (itm) {
            let hasAction = itm.props[eventName];
            if (hasAction) {
               hasAction()
            }
         }
      })

   }
   this.WhenMounted = (afterMountCB) => {
      this.mountedCallbacks.push(afterMountCB);
   };
   this.objectChange = (newRender) => {
      let newOb = this.rerender(newRender, 'Root');
      console.log('newRender', newOb);
      this.updateElement(this.domComponents, newOb)
      this.mountedCallbacks.forEach((cb) => {
         cb();
      });
      this.mountedCallbacks = [];
   };
   this.createComponent = (obj, containerElement) => {

      if (this.getElement(containerElement)) {
         obj.domElement = this.appRoot;
         this.mountApp(obj);
      };
   };

   this.viewObjects = () => {
      console.log('appRootDom', this.appRootDom);
      console.log('domBranches', this.domComponents);
      console.log('this.events', this.events);

   };
   this.mountApp = (obj) => {
      this.domComponents = obj;
      this.appRootDom.nested.push(this.domComponents);
      this.appRoot.appendChild(this.htmlBuild(obj, "Root"));
   };

   const ogCreateElement = Document.prototype.createElement;
   const ogcreateElementNS = Document.prototype.createElementNS;

   let self = this;
   let re = new RegExp(/^ex_/i)
   let isSVG = new RegExp(/(circle|clipPath|defs|ellipse|g|image|line|linearGradient|mask|path|pattern|polygon|polyline|radialGradient|rect|stop|svg|text|tspan)/i);
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
      var element = ogcreateElementNS.call(this, 'http://www.w3.org/2000/svg', name);

      if (!attrs) return element;

      for (var attr in attrs) {
         if (!self.events[attr] && !re.test(attr)) {
            element.setAttributeNS('http://www.w3.org/2000/svg', attr.replace(/[A-Z]/g, '-$&'), attrs[attr]);
         }
      }
      return element;
   };
   
   const createElem = (node, group, parent) => {

      if (typeof node === 'string' || typeof node === 'number' || (typeof node !== "object" && node !== null && node !== undefined)) {
  
         return document.createTextNode(node);
      }
      node.props = Object.assign({}, node.props, {
         trace: group,
         parent: parent
      })
      Object.keys(node.props).forEach((itm, ii) => {
         if (self.events[itm]) {
            self.applyListener(itm);
         }
      });

      //const el = isSVG.test(node.type) ? document.createElementNS(node.type, node.props) : document.createElement(node.type, node.props);
      const el = document.createElement(node.type, node.props);
      node.domElement = el;
      node.nested = node.nested ? node.nested : [];
      if (node.nested.length === 0) {
         return el;
      }
      node.nested
         .map((elm, ii) => {
            let elmId = group + '.' + ii;
            return createElem(elm, elmId, group);
         }).forEach(el.appendChild.bind(el));
      return el;

   };
   const createElemSingle = (node, group, parent) => {

      if (typeof node === 'string' || typeof node === 'number' || (typeof node !== "object" && node !== null && node !== undefined)) {
         return document.createTextNode(node);
      }
      node.props = Object.assign({}, node.props, {
         trace: group,
         parent: parent
      })
      Object.keys(node.props).forEach((itm, ii) => {
         if (self.events[itm] ) {
            self.applyListener(itm);
         }
      });

      const el = document.createElement(node.type, node.props);
      node.domElement = el;
      node.nested = node.nested ? node.nested : [];
      return el;

   };


   const reRenderElem = (node, group, parent) => {
      if (typeof node === 'string' || typeof node === 'number' || (typeof node !== "object" && node !== null && node !== undefined)) {
         return node;
      }

      node.nested = node.nested ? node.nested : [];
      node.props = Object.assign({}, node.props, {
         trace: group,
         parent: parent
      })
      node.nested
         .map((elm, ii) => {
            let elmId = group + '.' + ii;
            return reRenderElem(elm, elmId, group);
         });
      return node;

   };
   this.htmlBuild = (node, group) => {
      return createElem(node, group, 'Root');
   };
   this.rerender = (node, group) => {
      return reRenderElem(node, group, 'Root');
   };
   this.diffElements = setDiff(self, createElem);
   this.updateElement = (oldNode, newNode) => {
      this.diffElements(this.appRootDom, newNode, oldNode);
      this.domComponents = Object.assign({},oldNode,newNode);
   }
   this.SetState = (data) => {
      console.log('not yet set');
   }


};
NodeMap.prototype.component = (obj) => {
   if (!(obj instanceof Array) && obj instanceof Object) {
      if (!obj["componentName"] || !obj["componentRender"]) {
         console.error("Object must have a branchName and branchObject");
         return false;
      }

      obj.vdomId = '@' + obj.componentName;
      return (opts) => {
      
         return obj.componentRender(opts);
      }
   }
};

NodeMap.prototype.node = (type, props = {}, [...nested] = []) => {
   nested = smoothNested(nested);
   return {
      type,
      props,
      nested
   };
}

 


module.exports = new NodeMap('example');