

Ext.application({
    requires: [
        'View.Main'
    ],
    
    mainView: 'View.Main',

    launch: function() {

        // Enable draggable items.
        
        Ext.create('View.Item', Ext.get('cpu'), 'cpuGroup')
        .addToGroup('inventoryGroup');

        Ext.create('View.Item', Ext.get('ram'), 'ramGroup')
        .addToGroup('inventoryGroup');
        
        Ext.create('View.Item', Ext.get('powersupply'), 'inventoryGroup')
        .addToGroup('inventoryGroup');
        
        Ext.create('View.Item', Ext.get('graphiccard'), 'inventoryGroup')
        .addToGroup('inventoryGroup');

        // Enable droppable zone.
        
        Ext.create('View.Target', 'hotspot-cpu', 'cpuGroup');
        Ext.create('View.Target', 'hotspot-ram', 'ramGroup');
        Ext.create('View.Target', 'inventory', 'inventoryGroup');

    }
});