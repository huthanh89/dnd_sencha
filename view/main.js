//----------------------------------------------------------------------------//
// Item
//----------------------------------------------------------------------------//

Ext.define('view.img', {
    extend: 'Ext.Img',
    src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
    xtype: 'myimage',
    height: 75,
    width: 75
});

var myImage = Ext.create('view.img', {
    draggable : true,
    id: 'asdf',
    listeners : {
        afterrender : function(stick){
            console.log('after render', stick.el.dom.id);
            stick.dd = new Ext.dd.DDProxy(stick.el.dom.id, 'group');
        }
    }
});

//----------------------------------------------------------------------------//
// Drop Zone
//----------------------------------------------------------------------------//

Ext.define('view.target', {
    extend: 'Ext.Panel',
    flex: 1,
    html: "drop here",
    id: 'mytarget',
    cls: 'album'
});

var targetZone = Ext.create('view.target');


//----------------------------------------------------------------------------//
// Main View
//----------------------------------------------------------------------------//

Ext.define('view.main', {
    extend: 'Ext.Panel',
    title: 'some title',
    layout: {
        type:   'hbox',
        align : 'stretch',
    },
    items: [
        targetZone,
        myImage,
    ]
});

//----------------------------------------------------------------------------//