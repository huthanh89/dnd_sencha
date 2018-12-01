//----------------------------------------------------------------------------//
// Draggable Items
//----------------------------------------------------------------------------//

var style = `
    width:  100px; 
    height: 100px; 
`
var cpu = Ext.create('Ext.Img', {
    src:  './asset/cpu.png',
    id:   'cpu',
    style: style
});

var ram = Ext.create('Ext.Img', {
    src:  './asset/ram.png',
    id:   'ram',
    style: style
});

var power = Ext.create('Ext.Img', {
    src:  './asset/powersupply.png',
    id:   'powersupply',
    style: style
});

var gCard = Ext.create('Ext.Img', {
    src:  './asset/graphic_card.png',
    id:   'graphiccard',
    style: style
});

//----------------------------------------------------------------------------//
// Container
//----------------------------------------------------------------------------//

Ext.define('view.workspace.Inventory', {
    extend: 'Ext.Container',
    height: 200,
    style: {
        borderColor:'#000000', 
        borderStyle:'solid', 
        borderWidth:'1px',
        background: 'grey'
    },
    items:[
        cpu,
        ram,
        power,
        gCard
    ]
});

//----------------------------------------------------------------------------//