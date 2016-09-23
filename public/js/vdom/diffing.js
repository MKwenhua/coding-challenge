module.exports = (self, createElem, createElemSingle) => {
  let re = new RegExp(/^ex_/i)

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

  function updateProps(element, newProps, oldProps = {}) {
    const props = Object.assign({}, newProps, oldProps);
    // Object.keys(props).forEach( (name) => {
    for (var name in props) {
      updateProp(element, name, newProps[name], oldProps[name]);
    };
  }

  function changed(node1, node2) {
    return typeof node1 !== typeof node2 ||
      typeof node1 === 'string' && node1 !== node2 ||
      node1.type !== node2.type
  }

  function updateElement(parent, newNode, oldNode, index = 0) {
    if (typeof newNode === 'string' || typeof newNode === 'number') {
      //let vdomid = parent.props.trace + '.' + index;
      if (changed(newNode, oldNode)) {
        // parent.domElement.childNodes[index].nodeValue = newNode;
        parent.domElement.replaceChild(
          //createElem(newNode, vdomid, parent.trace),
          document.createTextNode(newNode),
          parent.domElement.childNodes[index]
        );
      }

      return
    }
    if (!oldNode) {
      let vdomid = parent.props.trace + '.' + index;
      newNode.domElement = createElem(newNode, vdomid, parent.trace);
      parent.domElement.appendChild(
        newNode.domElement
      );
      return
    }
    if (!newNode) {
      parent.domElement.removeChild(
        parent.childNodes[index]
      );
      return
    }
    if (changed(newNode, oldNode)) {
      if (newNode.type !== oldNode.type) {
        newNode.domElement = createElem(newNode, newNode.trace, newNode.parent);
        parent.domElement.replaceChild(
          newNode.domElement,
          parent.domElement.childNodes[index]
        );
      } else {
        updateProps(
          oldNode.domElement,
          newNode.props,
          oldNode.props
        );
      }
      return
    }
    if (newNode.type) {

      newNode.domElement = oldNode.domElement ? oldNode.domElement : createElem(newNode, newNode.trace, newNode.parent);
      updateProps(
        newNode.domElement,
        newNode.props,
        oldNode.props
      );
      const newLength = newNode.nested ? newNode.nested.length : 0;

      if (typeof oldNode === 'string' || typeof oldNode === 'number') {
        for (let i = 0; i < newLength; i++) {
          updateElement(
            newNode,
            newNode.nested[i],
            null,
            i
          );
        }
        return
      }
      oldNode.nested = oldNode.nested ? oldNode.nested : [];
      const oldLength = oldNode.nested.length;

      for (let i = 0; i < newLength || i < oldLength; i++) {
        updateElement(
          newNode,
          newNode.nested[i],
          oldNode.nested[i],
          i
        );
      }
    }
  }
  return updateElement;
};