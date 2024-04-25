const papercontainer = document.getElementById("paper-container");
const boxcontainer = document.getElementById("box-container");

const FLOW_FLAG = "FLOW";
const OPEN_FLAG = "OPEN";
const POWER_FLAG = "POWER";

class solventVapor extends dia.Element {
  defaults() {
    return {
      type: "solventVapor",
      size: {
        width: 150,
        height: 200
      },
      attrs: {
        root: {
          magnetSelector: "body"
        },
        body: {
          stroke: "gray",
          strokewidth: 2,
          x: 0,
          y: 0,
          rx: 75,
          ry: 10,
          fill: {
            type: "gray"
          }
        },
        label: {
          text: "Solvent Vapor",
          textAnchor: "middle",
          fontsize: 14,
        }
      }
    }
  }


  preinitialize() {
    this.markup = util.svg/* xml */ `
           <rect @selector="body"/>
        <text @selector="label" />
            ` ;
  }
}

            get level() {
  return this.get("level") || 0;
}
          
            set level(level) {
  const newLevel = Math.max(0, Math.min(100, level));
  this.set("level", newLevel);
}
          

const LEVEL_FLAG = "LEVEl";

  initFlag: [dia.ElementView.Flags.RENDER, LEVEL_FLAG],

    updateLevel() {
    const { model } = this;
    const level = Math.max(0, Math.min(100, model.get("level") || 0));
    const color = model.get("color") || "red";
    const [liquidEl] = this.findBySelector("liquid");
    const [windowEl] = this.findBySelector("frame");
    const windowHeight = Number(windowEl.getAttribute("height"));
    const height = Math.round((windowHeight * level) / 100);
    liquidEl.animate(
      {
        height: [`${height}px`],
        fill: [color]
      },
      {
        fill: "forwards",
        duration: 1000
      }
    );
  }
;


var solventVapor2 = solventVapor.clone();

class solventPreheater extends dia.Element {
  defaults() {
    return {
      ...super.defaults,
      type: "solventPreheater",
      size: {
        width: 50,
        height: 100
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


    class condensate extends dia.Element {
      defaults() {
        return {
          ...super.defaults,
          type: "solventPreheater",
          size: {
            width: 40,
            height: 70
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

    class separator extends dia.Element {
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
          }
        }
      }

      preinitialize() {
        this.markup = util.svg/* xml */ `
                <rect @selector="body" />
                <text @selector="label" />
            `;
      }

    }


    class HandValve extends dia.Element {
      defaults() {
        return {
          ...super.defaults,
          type: "HandValve",
          size: {
            width: 50,
            height: 50
          },
          power: 0,
          attrs: {
            root: {
              magnetSelector: "body"
            },
            body: {
              rx: 25,
              ry: 25,
              cx: 25,
              cy: 25,
              stroke: "gray",
              strokeWidth: 2,
              fill: {
                type: "radialGradient",
                stops: [
                  { offset: "70%", color: "white" },
                  { offset: "100%", color: "gray" }
                ]
              }
            },
            handwheel: {
              width: 60,
              height: 10,
              x: "calc(w / 2 - 30)",
              y: -30,
              stroke: "#333",
              strokeWidth: 2,
              rx: 5,
              ry: 5,
              fill: "#666"
            },
          },
          ports: {
            groups: {
              pipes: {
                position: {
                  name: "absolute",
                  args: {
                    x: "calc(w / 2)",
                    y: "calc(h / 2)"
                  }
                },
                markup: util.svg`
                          <rect @selector="pipeBody" />
                          <rect @selector="pipeEnd" />
                      `,
                size: { width: 50, height: 30 },
                attrs: {
                  portRoot: {
                    magnetSelector: "pipeEnd"
                  },
                  pipeBody: {
                    width: 5,
                    height: 10,
                    y: 5,
                    fill: {
                      type: "linearGradient",
                      attrs: {
                        x1: "0%",
                        y1: "0%",
                        x2: "0%",
                        y2: "100%"
                      }
                    }
                  },
                  pipeEnd: {
                    width: 10,
                    height: 20,
                    y: 20,
                    stroke: "gray",
                    strokeWidth: 3,
                    fill: "white"
                  }
                }
              }
            },
          }
        }
      }

      preinitialize() {
        this.markup = util.svg/* xml */ `
          <rect @selector="handwheel" />
          <ellipse @selector="body" />
        `;
      }


