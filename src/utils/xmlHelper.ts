import { parseString } from 'xml2js'

export function str2xml(str: string): XMLDocument {
  if(document.all){
    var xmlDom = new ActiveXObject("Microsoft.XMLDOM");
    xmlDom.loadXML(str);
    return xmlDom;
  } else {
    return new DOMParser().parseFromString(str, "text/xml");
  }
}

export function xml2obj(xml: string): Promise<Object> {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if(err) {
        reject(err)
      }else {
        resolve(result)
      }
    })
  })
}

export function getPersistenceXML(): string {
  return localStorage.getItem('xml') || '';
}
