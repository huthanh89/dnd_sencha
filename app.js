//----------------------------------------------------------------------------//
// Application
//----------------------------------------------------------------------------//

Ext.application({
    requires: [
        'View.Main'
    ],
    
    mainView: 'View.Main',
    
    launch: function() {
        
        // Create draggable items.
        
        Ext.create('View.Item', Ext.get('cpu'), 'cpuGroup');
        Ext.create('View.Item', Ext.get('ram'), 'ramGroup');
        Ext.create('View.Item', Ext.get('powersupply'), 'powerGroup');
        Ext.create('View.Item', Ext.get('graphiccard'), 'graphicGroup');
        
        // Create droppable zone.
        
        Ext.create('View.Target', 'hotspot-cpu', 'cpuGroup');
        Ext.create('View.Target', 'hotspot-ram', 'ramGroup');
        Ext.create('View.Target', 'inventory', 'inventoryGroup');
        
    }
});

//----------------------------------------------------------------------------//