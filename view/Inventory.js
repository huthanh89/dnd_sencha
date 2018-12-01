//----------------------------------------------------------------------------//
// Draggable Items
//----------------------------------------------------------------------------//

var style = `
    width:  75px; 
    height: 75px; 
    cursor: pointer;
`
var cpu = Ext.create('Ext.Img', {
    src:  './asset/cpu.png',
    id:   'cpu',
    style: style
});

var ram = Ext.create('Ext.Img', {
    src:  './asset/ram.png',
    id:   'ram',
    cls:  'drag-item',
    style: style
});

//----------------------------------------------------------------------------//
// Container
//----------------------------------------------------------------------------//

Ext.define('view.Inventory', {
    extend: 'Ext.Container',
    style: {
        borderColor:'#000000', 
        borderStyle:'solid', 
        borderWidth:'12px'
    },
    items:[
        cpu,
        ram
    ]
});

//----------------------------------------------------------------------------//