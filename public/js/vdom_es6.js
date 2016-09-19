const events = require("./vdom/events.js");
function NodeMap(appTitle = 'default') {
   this.appTitle = appTitle;
   this.domComponents = {};
   this.rootDomElement = null;
   this.appRoot = null;
   this.mountedObject = null;
   this.events =  events;
   this.appEventRegistry = {};
   this.domContainers = {};

   
   this.createUdid = () => {
    return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)
   };
  
   this.getElement = (domElement) => {
      if (domElement instanceof HTMLElement) {
         this.appRoot = domElement;
         return true;
      }
      let elem = document.querySelector(domElement);
      if (elem) {
         this.appRoot = elem;
         return true;
      }
      console.error("Element: " + domElement + " not found");
      return false;
   };
   this.setListener = (listener, type) => {
       let self = this;
       console.log('appRoot', this.appRoot )
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
    let vDom = this.domComponents[traceArray[0]];
    console.log('vDom', vDom);
    traceArray.shift()
    traceArray.map((itm, i) => {
      if (!vDom.nested){ return false;}
      let nest = vDom.nested[itm];
      vDom = nest;
      return nest;
    }).forEach((itm, ii) =>{
      if(itm) {
        let hasClick = itm.props[eventName];
        if(hasClick){ hasClick() }
      }
    })

   }
   this.objectChange = (newRender) => {
    console.log('this.mountedObject',this.mountedObject);
    console.log('newRender',newRender);
   };
   this.createComponent = (obj, containerElement) => {
         
         if (this.getElement(containerElement)){
          obj.domElement =  this.appRoot;
          this.mountedObject = obj;
             this.mountApp(obj);
         };
   };

   this.viewObjects = () => {
      console.log('domContainers', this.domContainers);
      console.log('domBranches', this.domComponents);

   };
   this.mountApp = (obj) => {
      this.domComponents["@App"] = obj;
      this.appRoot.appendChild(this.htmlBuild(obj, "@App"));
   };

   const ogCreateElement = Document.prototype.createElement;
  const ogcreateElementNS = Document.prototype.createElementNS;

  let self = this;
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
     var element = ogcreateElementNS.call(this,'http://www.w3.org/2000/svg', String(name));
     
     if (!attrs) return element;

     for (var attr in attrs) {

        elementsetAttributeNS('http://www.w3.org/2000/svg', attr.replace(/[A-Z]/g, '-$&'), attrs[attr]);
     }
     return element;
  };
  
   


const createElem =  (node, group, parent) => {
           
           if (typeof node === 'string') {
     
             return document.createTextNode(node);
           }
           node.props = node.props ? node.props : {};
           node.props.parent = parent; 
           node.props.trace = group;
           Object.keys(node.props).forEach((itm, ii) =>{
             if (self.events[itm]) {
               self.applyListener(itm);
             }
           });   
        
           const el = document.createElement(node.type, node.props);
           node.domElement = el;
           node.nested = node.nested ? node.nested : [];
           node.nested
             .map((elm, ii) => { 
              let elmId = group +'.'+ ii;
              return createElem(elm, elmId, group);
            }).forEach(el.appendChild.bind(el));
           return el;
       
      };
const reRenderElem =  (node, group, parent) => {

           if (typeof node === 'string') {
             return document.createTextNode(node);
           }

           
           node.props = node.props ? node.props : {};
           node.props.parent = parent; 
           node.props.trace = group;
   
           node.nested
             .map((elm, ii) => { 
              let elmId = group +'.'+ ii;
              return createElem(elm, elmId, group);
            }).forEach(el.appendChild.bind(el));
           return el;
       
      };
  this.htmlBuild = (node, group) => {
         return createElem(node, group, 'Root');
  };
  this.rerender = (node, group) => {
         return reRenderElem(node, group, 'Root');
  };

 
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


NodeMap.prototype.node = (type, props, ...nested) => {
 
    return {
      type,
      props,
      nested
   };
}





module.exports = new NodeMap('example');