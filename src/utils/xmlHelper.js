export function str2xml(str) {
  if(document.all){
    var xmlDom = new ActiveXObject("Microsoft.XMLDOM");
    xmlDom.loadXML(str);
    return xmlDom;
  } else {
    return new DOMParser().parseFromString(str, "text/xml");
  }
}
