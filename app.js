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

        // Create DragDrop items.

        function createDDItem(id){
            Ext.create('view.common.Draggable', Ext.get(id), `${id}Group`, {
                isTarget: false
            })
            .addToGroup('inventoryGroup');
            Ext.create('view.common.Target', `hotspot-${id}`, `${id}Group`);
        };

        createDDItem('cpu');
        createDDItem('ram');
        createDDItem('powersupply');
        createDDItem('graphiccard');
        
        // Create droppable inventory zone.
        
        Ext.create('view.common.Target', 'inventory', 'inventoryGroup');
        
    }
});

//----------------------------------------------------------------------------//