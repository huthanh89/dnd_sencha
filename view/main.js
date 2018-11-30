//----------------------------------------------------------------------------//
// Draggable Items
//----------------------------------------------------------------------------//

var cpu = Ext.create('Ext.Img', {
    src: './asset/cpu.png',
    id:  'cpu',
    cls: 'drag-item'
});

var ram = Ext.create('Ext.Img', {
    src: './asset/ram.png',
    id:  'ram',
    cls: 'drag-item'
});

//----------------------------------------------------------------------------//
// Droppable Zones
//----------------------------------------------------------------------------//

var inventory = Ext.create('Ext.Container', {
    id:    'inventory-area',
    flex: 1,
    items:[
        cpu,
        ram
    ]
});

var hotspotCPU = Ext.create('Ext.Container', {
    id:  'hotspot-cpu',
    cls: 'hotspot',
    width:  100,
    height: 100,
});

var hotspotRam = Ext.create('Ext.Container', {
    id:  'hotspot-ram',
    cls: 'hotspot',
    width:  100,
    height: 100,
});

var motherboard = Ext.create('Ext.Container', {
    id:    'motherboard-container',
    flex: 1,
    items:[
        hotspotCPU,
        hotspotRam
    ]
});


//----------------------------------------------------------------------------//
// Main View
//----------------------------------------------------------------------------//

Ext.define('View.Main', {
    extend: 'Ext.Panel',
    layout: {
        type:   'hbox',
        align : 'stretch',
    },
    items:[
        motherboard,
        inventory,
    ]
});

//----------------------------------------------------------------------------//