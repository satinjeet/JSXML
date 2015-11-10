function xmlP(xml) {
    this.xml = xml;
}

xmlP.prototype.parseToJSON = function(options) {
    
    function digDeep(node) {
        var obj = {};
        var children = node.children;
        for (var i = 0; i < children.length; i++) {
            var currentChild = children[i];
            if (currentChild.children.length > 0 ) {
                obj[currentChild.tagName] = digDeep(currentChild);
            } else {
                obj[currentChild.tagName] = currentChild.innerHTML;
            }
        }
        
        return obj;
    }
    
    var domParser = new DOMParser();
    var doc = domParser.parseFromString(this.xml, 'text/xml');
    
    var finalObject = digDeep(doc);
    if (options && options.stringify) {
        finalObject = JSON.stringify(finalObject);
    }
    return finalObject;
}

window.xmlP = xmlP;