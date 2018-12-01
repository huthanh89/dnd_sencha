

Ext.application({
    requires: [
        'View.Main'
    ],
    
    mainView: 'View.Main',

    launch: function() {

        // Enable draggable items.
        
        Ext.create('View.Item', Ext.get('cpu'), 'cpuGroup', {});
        Ext.create('View.Item', Ext.get('ram'), 'ramGroup', {});
        Ext.create('View.Item', Ext.get('powersupply'), 'inventoryGroup', {});
        Ext.create('View.Item', Ext.get('graphiccard'), 'inventoryGroup', {});

        // Enable droppable zone.
        
        Ext.create('View.Target', 'hotspot-cpu', 'cpuGroup', {});
        Ext.create('View.Target', 'hotspot-ram', 'ramGroup', {});

    }
});