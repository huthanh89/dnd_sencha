//----------------------------------------------------------------------------//
// Main View
//----------------------------------------------------------------------------//

Ext.define('View.Main', {
    extend: 'Ext.container.Viewport',
    items:[
        Ext.create('Ext.tab.Panel', {
            activeTab: 2,
            width:     600,
            id: 'mainPanel',
            items: [
                {

                    title: 'Instructions',
                    items:[
                        Ext.create('view.instruction.Instruction')
                    ]
                },
                {

                    title: 'Storage',
                    items:[
                        Ext.create('view.storage.Storage')
                    ]
                },
                {
                    title: 'Workspace',
                    items:[
                        Ext.create('view.workspace.Motherboard', {
                            id: 'motherboard-container'
                        }),
                        Ext.create('view.workspace.Inventory', {
                            id: 'inventory'
                        })
                    ]
                }
            ]
        })
    ]
});

//----------------------------------------------------------------------------//