//----------------------------------------------------------------------------//
// Component models
//----------------------------------------------------------------------------//

Ext.define('view.storage.Cpu', {
    extend: 'Ext.app.ViewModel',
    alias:  'viewmodel.cpu',
    data: {
        image: 'cpu',
        name:  'CPU, Socket AM3',
        type:  'Processor'
    }
});

Ext.define('view.storage.Ram', {
    extend: 'Ext.app.ViewModel',
    alias:  'viewmodel.ram',
    data: {
        image: 'ram',
        name:  'DDR3 GB, DDR3 1600',
        type:  'Ram'
    }
});

Ext.define('view.storage.GCard', {
    extend: 'Ext.app.ViewModel',
    alias:  'viewmodel.gcard',
    data: {
        image: 'graphic_card',
        name:  'Radion RX 550',
        type:  'Graphic Card'
    }
});

Ext.define('view.storage.power', {
    extend: 'Ext.app.ViewModel',
    alias:  'viewmodel.power',
    data: {
        image: 'powersupply',
        name:  'Power Supply, ATX 20+4pin, PCIe',
        type:  'Power Supply'
    }
});

//----------------------------------------------------------------------------//
// Storage View
//----------------------------------------------------------------------------//

Ext.define('view.storage.Image',{
    extend: 'Ext.Img', 
    bind: {
        src: './asset/{image}.png',
    },
    xtype: 'storageImage',
    style:  'padding: 20px 0 0 10px;',
    height: 75,
    width:  75
});

Ext.define('view.storage.Description',{
    extend: 'Ext.Container',
    xtype:  'storageDescription',
    flex:    3,
    style:  'padding-left: 20px; fontSize:18px;',
    bind: {
        html: 
        `
            <p>{name}</p>
            <p>{type}</p>
        `
    }
});

Ext.define('view.storage.Button', {
    extend: 'Ext.Button',
    xtype:  'storageButton',
    flex:    1,
    margin:  30,
    height:  30,
    html:   'Select',
    onClick: function(){
        Ext.getCmp('mainPanel').setActiveItem(2);
    }
});

Ext.define('view.storage.Component', {
    extend: 'Ext.Panel',
    width:  '100%',
    height:  100,
    style:  'border: 1px solid black',
    layout: {
        type: 'hbox',
    },
    items: [
        {
            xtype: 'storageImage',
        },
        {
            xtype: 'storageDescription'
        },
        {
            xtype: 'storageButton'
        }
    ]
});

Ext.define('view.storage.Storage', {
    extend: 'Ext.Container',
    layout: {
        type: 'vbox',
    },
    
    items: [
        Ext.create('view.storage.Component', {
            viewModel: {
                type: 'cpu'
            }
        }),
        Ext.create('view.storage.Component', {
            viewModel: {
                type: 'gcard'
            }
        }),
        Ext.create('view.storage.Component', {
            viewModel: {
                type: 'ram'
            }
        }),
        Ext.create('view.storage.Component', {
            viewModel: {
                type: 'power'
            }
        })
    ]
});

//----------------------------------------------------------------------------//