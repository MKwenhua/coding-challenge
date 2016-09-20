module.exports = (self, createElem) => {
   function removeProp(element, attr) {
      if (!self.events[attr]) {
         element.removeAttribute(attr.replace(/[A-Z]/g, '-$&'));
      }
   }

   function changeProp(element, attr, val) {
      if (!self.events[attr]) {
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

   function updateProps(element, newProps, oldProps = {}) {
      const props = Object.assign({}, newProps, oldProps);
      Object.keys(props).forEach( (name) => {
         updateProp(element, name, newProps[name], oldProps[name]);
      });
   }

   function changed(node1, node2) {
      return typeof node1 !== typeof node2 ||
         typeof node1 === 'string' && node1 !== node2 ||
         node1.type !== node2.type
   }

   function updateElement(parent, newNode, oldNode, index = 0) {
      if (typeof newNode === 'string') {
         if (changed(newNode, oldNode)) {
            parent.domElement.replaceChild(
               document.createTextNode(newNode),
               parent.domElement.childNodes[index]
            );
         }

         return
      }
      if (!oldNode) {
         newNode.domElement = createElem(newNode, newNode.trace, newNode.parent);
         parent.domElement.appendChild(
            newNode.domElement
         );
      }
      if (!newNode) {
         parent.domElement.removeChild(
            parent.childNodes[index]
         );
      }
      if (changed(newNode, oldNode)) {
         newNode.domElement = createElem(newNode, oldNode.trace, oldNode.parent);
         parent.domElement.replaceChild(
            newNode.domElement,
            parent.domElement.childNodes[index]
         );
      }
      if (newNode.type) {
         newNode.domElement = oldNode.domElement;
         updateProps(
            oldNode.domElement,
            newNode.props,
            oldNode.props
         );
         const newLength = newNode.nested.length;
         const oldLength = oldNode.nested.length;
         for (let i = 0; i < newLength || i < oldLength; i++) {
            updateElement(
               parent.nested[index],
               newNode.nested[i],
               oldNode.nested[i],
               i
            );
         }
      }
   }
   return updateElement;
};