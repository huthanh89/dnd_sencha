//----------------------------------------------------------------------------//
// Application
//----------------------------------------------------------------------------//

Ext.application({

    requires: [
        'View.Main'
    ],
    
    launch: function() {
        
        //this.setMainView('View.Main');
        Ext.create('View.Main');

        // Create draggable items.
        Ext.create('View.Item', Ext.get('cpu'), 'cpuGroup');
        Ext.create('View.Item', Ext.get('ram'), 'ramGroup');
        Ext.create('View.Item', Ext.get('powersupply'), 'powerGroup');
        Ext.create('View.Item', Ext.get('graphiccard'), 'graphicGroup');
        
        // Create droppable zones.
        
        Ext.create('View.Target', 'hotspot-cpu', 'cpuGroup');
        Ext.create('View.Target', 'hotspot-ram', 'ramGroup');
        Ext.create('View.Target', 'inventory', 'inventoryGroup');
        
    }
});

//----------------------------------------------------------------------------//