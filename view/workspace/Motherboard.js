//----------------------------------------------------------------------------//
// ITE Components
//----------------------------------------------------------------------------//

var hotspotCPU = Ext.create('Ext.Container', {
    id:     'hotspot-cpu',
    cls:    'hotspot',
    width:   100,
    height:  100,
    layout: 'absolute',
    x:       340,
    y:       160
});

var hotspotRam = Ext.create('Ext.Container', {
    id:     'hotspot-ram',
    cls:    'hotspot',
    width:   280,
    height:  20,
    layout: 'absolute',
    x:       160,
    y:       260
});

Ext.define('view.workspace.Motherboard', {
    extend: 'Ext.Container',
    width:   500,
    height:  500,
    items:[
        hotspotCPU,
        hotspotRam
    ]
});

//----------------------------------------------------------------------------//