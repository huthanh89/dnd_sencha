

Ext.application({

    launch: function() {

        var cpu = Ext.create('View.Item', Ext.get('cpu'), 'cpuGroup', {
            isTarget: false
        });
        cpu.addToGroup("inventoryGroup");

        var ram = Ext.create('View.Item', Ext.get('ram'), 'ramGroup', {
            isTarget: false
        });
        ram.addToGroup("inventoryGroup");

        //we set the drop targets
        Ext.create('View.Target', 'inventory', 'inventoryGroup', {});
        Ext.create('View.Target', 'cpu-area',  'cpuGroup', {});
        Ext.create('View.Target', 'ram-area',  'ramGroup', {});

    }
});