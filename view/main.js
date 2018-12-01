//----------------------------------------------------------------------------//
// Main View
//----------------------------------------------------------------------------//

Ext.define('View.Main', {
    extend: 'Ext.Container',
    items:[
        Ext.create('view.Motherboard', {
            id: 'motherboard-container'
        }),
        Ext.create('view.Inventory', {
            id: 'inventory'
        }),
    ]
});

//----------------------------------------------------------------------------//