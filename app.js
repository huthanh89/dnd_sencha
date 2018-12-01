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
        Ext.create('view.common.Draggable', Ext.get('cpu'), 'cpuGroup');
        Ext.create('view.common.Draggable', Ext.get('ram'), 'ramGroup');
        Ext.create('view.common.Draggable', Ext.get('powersupply'), 'powerGroup');
        Ext.create('view.common.Draggable', Ext.get('graphiccard'), 'graphicGroup');
        
        // Create droppable zones.
        
        Ext.create('view.common.Target', 'hotspot-cpu', 'cpuGroup');
        Ext.create('view.common.Target', 'hotspot-ram', 'ramGroup');
        Ext.create('view.common.Target', 'inventory', 'inventoryGroup');
        
    }
});

//----------------------------------------------------------------------------//