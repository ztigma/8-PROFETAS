Libro Comic Web en desarrollo:

https://ztigma.github.io/8-PROFETAS/

function OnStart()
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
