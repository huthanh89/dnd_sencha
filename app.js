//----------------------------------------------------------------------------//
// Application
//----------------------------------------------------------------------------//

Ext.application({

    requires: [
        'View.Main'
    ],
    
    launch: function() {
        
        // Create our main view.

        Ext.create('View.Main');

        // Create draggable items.

        function createDraggableItem(id){
            Ext.create('view.common.Draggable', Ext.get(id), `${id}Group`, {
                isTarget: false
            })
            .addToGroup('inventoryGroup');
        };

        createDraggableItem('cpu');
        createDraggableItem('ram');
        createDraggableItem('powersupply');
        createDraggableItem('graphiccard');
        
        // Create droppable zones.
        
        Ext.create('view.common.Target', 'hotspot-cpu', 'cpuGroup');
        Ext.create('view.common.Target', 'hotspot-ram', 'ramGroup');
        Ext.create('view.common.Target', 'inventory', 'inventoryGroup');
        
    }
});

//----------------------------------------------------------------------------//