/**
 * 
 * @param {Object} attrs 
 */
Element.prototype.set_attrs = function(attrs)
{
    Object.entries(attrs).forEach
    (
        (n) =>
        {
            this.setAttribute(n[0], n[1]);
        }
    )
    return this;
}
/**
 * 
 * @param {Object} styles 
 */
Element.prototype.set_styles = function(styles)
{
    Object.entries(styles).forEach
    (
        (n) =>
        {
            this.style.setProperty(n[0],n[1]);        
        }
    )
    return this;
}
/**
 * 
 * @param {Array} styles 
 */
Element.prototype.set_childrens = function(childrens)
{
    childrens.forEach
    (
        (n) =>
        {
            this.append(n);       
        }
    )
    return this;
}
var pnow = 0;
Object.prototype.ID = function() 
{
	return pnow++;
}
class Vista
{
    constructor(tag)
    {
        var w = document.createElement(tag);
        w.set_attrs
        (
            {
                id: this.constructor.name + "_" + this.ID()
                ,
                _view: this.constructor.name
                ,
                _orientation: "vertical_center"
                ,
                onclick: "/*onclick*/"
                ,
                onchange: "/*onchange*/"
                ,
                _onloading: 'true'
            }
        )
        w.set_styles
        (
            {
                "--h": "auto"
                ,
                "--w": "auto"
                ,
                "--h_phone": "auto"
                ,
                "--w_phone": "auto"
                ,
                '--box_shadow': '2vw'
                ,
                '--box_shadow_color': 'black'
                ,
                '--border_radius':'0px'
                ,
                '--border_radius_phone':'0px'
                ,
                '--font_size':'1vw'
                ,
                '--padding':'0px'
                ,
                '--padding_phone':'0px'
                ,
                '--margin':'auto'
                ,
                '--margin_phone':'auto'
            }
        )
        return w;
    }
}
class Botonsito extends Vista
{
    constructor(tag = "button")
    {
        var w = super(tag);
        w.set_styles
        ({
            "color":"red"
        })
        return w;
    }
}
window.addEventListener('load', function() {
	OnStart();
});
function OnStart ()
{
    var w = new Vista("div");
    var boton = new Botonsito();

    w
    .set_attrs
    ({
        "_orientation":"horizontal_center"
    })
    .set_styles
    ({
        "color":"blue"
    })
    .set_childrens
    ([
        "SOY UN DIV"
    ])

    boton
    .set_childrens
    ([
        "soy un botonsito"
    ])
    document.body.set_childrens
    ([
        w
        ,
        boton
    ])
}