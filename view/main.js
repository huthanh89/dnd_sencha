//----------------------------------------------------------------------------//
// Main View
//----------------------------------------------------------------------------//

Ext.define('View.Main', {
    extend: 'Ext.container.Viewport',
    items:[
        Ext.create('Ext.tab.Panel', {
            activeTab: 1,
            width:     600,
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