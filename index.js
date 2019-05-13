/* StyleSheet anatomy
  {
      index: @number, // access index for CSSOM
      selector: "", // related selector
      properties: {
        "@name": {
            //style: null, // bound stylesheet
            value: "@value",
            type: "@type",
            native: "true", // is real property, or just variable?
            reflection: null, // property reflection of real value
            importance: "",
        }
      }, 
      rules: [
        
      ]
  }
*/

class QProperty {
    constructor({value="",type="",native="",importance=""}){
        this.value = value, this.type = type, this.native = native, this.importance = importance;
    }
}

class QReflection {
    constructor(style,name,property){
        this.style = style;
        this.name = name;
        this.property = property;
    }
    set value(a){
        this.style.setPropertyValue(`--${this.name}`,this.property.value = a,this.property.importance);
    }
    get value(){
        return this.property.value;
    }
}

class QCore {
    constructor(){
        this.construction = {
            stylesheet: {},
            extensions: {}
        };
        this.sheet = null;
    }

    // 
    activate(){
        let style = document.createElement("style");
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        this.sheet = style.sheet;

        // planned create reflected rules
    }

    // editor can save previous result (TODO)
    loadFromCache(){
        
    }
    storeToCache(){
        
    }

    // will used by developer servers (is server can handle it)
    exportRequest(){
        
    }
}
