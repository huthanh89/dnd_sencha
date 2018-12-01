//----------------------------------------------------------------------------//
// Main View
//----------------------------------------------------------------------------//

Ext.define('View.Main', {
    extend: 'Ext.container.Viewport',
    items:[
        Ext.create('Ext.tab.Panel', {
            width: 600,

            activeTab: 1,
            items: [
                {

                    title: 'Instructions',
                    items:[
                        Ext.create('view.instruction.Instruction')
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