AFRAME.registerComponent("colorcar",{
    schema: {
        radius:{ type:"number", default:8},
        height:{ type:"number", default:0.4}
    },

    init: function(){
        this.el.setAttribute("geometry", {
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height
        })
        this.el.setAttribute("material", {color:"#31ff72"})
    }
})