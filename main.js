const papercontainer = document.getElementById("paper-container");
const boxcontainer = document.getElementById("box-container");

const FLOW_FLAG = "FLOW";
const OPEN_FLAG = "OPEN";
const POWER_FLAG = "POWER";

class solventVapor extends dia.Element{
    defaults(){
        return{
            type:"solventVapor",
            size:{
                width: 150,
                height: 200
            },
            attrs:{
                root:{
                    magnetSelector: "body"
                },
                body:{
                        stroke:"gray",
                        strokewidth: 2,
                        x:0,
                        y:0,
                        rx:75,
                        ry:10,
                        fill:{
                            type:"gray" 
                        }
                            },
                label:{
                    text: "Solvent Vapor",
                    textAnchor:"middle",
                    fontsize:14,
                }
            }
        }
    }


 preinitialize() {
   this.markup = util.svg/* xml */ `
           <rect @selector="body"/>
        <text @selector="label" />
            ` ;} }

             
  var solventVapor2 = solventVapor.clone() ;

 class solventPreheater extends dia.Element{
    defaults() {
        return {
          ...super.defaults,
          type: "solventPreheater",
          size: {
            width: 50,
            height:100
          },
          power: 0,
          attrs: {
            root: {
              magnetSelector: "body"
            },
            body: {
              rx: 25,
              ry: 50,
              cx: 25,
              cy: 50,
              stroke: "gray",
              strokeWidth: 2,
              fill: "lightgray"
            },
            label: {
              text: "Solvent Preheater",
              textAnchor: "middle",
              textVerticalAnchor: "top",
              fontSize: 14,
              fontFamily: "sans-serif",
              fill: "#350100"
            },
          },        

        };
      }
    
      preinitialize() {
        this.markup = util.svg/* xml */ `
                <ellipse @selector="body" />
                <text @selector="label" />
            `;
      }
    
get power() {
    return this.get("power") || 0;
  }

  set power(value) {
    this.set("power", value);
  }
 }
 const solventPreheaterView = dia.ElementView.extend({
    presentationAttributes: dia.ElementView.addPresentationAttributes({
      open: [OPEN_FLAG]
    }),
  
    initFlag: [dia.ElementView.Flags.RENDER, OPEN_FLAG],
  
    framePadding: 6,
  
    liquidAnimation: null,
  
    confirmUpdate(...args) {
      let flags = dia.ElementView.prototype.confirmUpdate.call(this, ...args);
      this.animateLiquid();
      if (this.hasFlag(flags, OPEN_FLAG)) {
        this.updateCover();
        flags = this.removeFlag(flags, OPEN_FLAG);
      }
      return flags; 
    
  
var solventCooler = solventPreheater.clone();


class condensate extends dia.Element{
    defaults() {
        return {
          ...super.defaults,
          type: "solventPreheater",
          size: {
            width: 40,
            height:70
          },
          attrs: {
            root: {
              magnetSelector: "body"
            },
            body: {
              rx: 20,
              ry: 35,
              cx: 20,
              cy: 35,
              stroke: "blue",
              strokeWidth: 2,
              fill: "lightgray"
            },
            label: {
              text: "Condensate",
              textAnchor: "middle",
              textVerticalAnchor: "top",
              fontSize: 14,
              fontFamily: "sans-serif",
              fill: "#350100"
            },
          },        

        };
      }
    
      preinitialize() {
        this.markup = util.svg/* xml */ `
                <ellipse @selector="body" />
                <text @selector="label" />
            `;
      }
    
}

class separator extends dia.Element{
    defaults() {
        return {
          ...super.defaults,
          type: "Separator",
          size: {
            width: 50,
            height: 50
          },
          attrs: {
            root: {
              magnetSelector: "body"
            },
            body: {
             length: 25,
             width: 25,
              stroke: "gray",
              strokeWidth: 2,
              fill: "lightgray"
            },
            label: {
              text: "Separator",
              textAnchor: "middle",
              textVerticalAnchor: "top",
              fontSize: 14,
              fontFamily: "sans-serif",
              fill: "#350100"
            },
        }}}
    
      preinitialize() {
        this.markup = util.svg/* xml */ `
                <rect @selector="body" />
                <text @selector="label" />
            `;
      }
    
}

// class steamValve extends dia.Element{}
//class pipe extends dia.link {}
   
