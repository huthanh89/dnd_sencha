

Ext.application({

    launch: function() {

        var cpu = Ext.create('View.Item', Ext.get('cpu'), 'cpuGroup', {});
        cpu.addToGroup("inventoryGroup");

        var ram = Ext.create('View.Item', Ext.get('ram'), 'ramGroup', {});
        ram.addToGroup("inventoryGroup");

        //we set the drop targets
        Ext.create('View.Target', 'inventory', 'inventoryGroup', {});
        Ext.create('View.Target', 'cpu-area',  'cpuGroup',       {});
        Ext.create('View.Target', 'ram-area',  'ramGroup',       {});

    }
});