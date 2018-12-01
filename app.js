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
        Ext.create('view.common.Draggable', Ext.get('cpu'), 'cpuGroup').addToGroup('inventoryGroup');
        Ext.create('view.common.Draggable', Ext.get('ram'), 'ramGroup').addToGroup('inventoryGroup');
        Ext.create('view.common.Draggable', Ext.get('powersupply'), 'powerGroup ').addToGroup('inventoryGroup');
        Ext.create('view.common.Draggable', Ext.get('graphiccard'), 'graphicGroup').addToGroup('inventoryGroup');
        
        // Create droppable zones.
        
        Ext.create('view.common.Target', 'hotspot-cpu', 'cpuGroup');
        Ext.create('view.common.Target', 'hotspot-ram', 'ramGroup');
        Ext.create('view.common.Target', 'inventory', 'inventoryGroup');
        
    }
});

//----------------------------------------------------------------------------//