

Ext.application({
    requires: [
        'View.Main'
    ],
    
    mainView: 'View.Main',

    launch: function() {

        // Enable draggable items.
        var item = Ext.create('View.Item', Ext.get('cpu'), 'cpuGroup', {});
        var item = Ext.create('View.Item', Ext.get('ram'), 'cpuGroup', {});

        // Enable droppable zone.
        
        Ext.create('View.Target', 'hotspot-cpu', 'cpuGroup', {});
        Ext.create('View.Target', 'hotspot-ram', 'cpuGroup', {});

    }
});