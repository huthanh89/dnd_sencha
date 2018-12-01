//----------------------------------------------------------------------------//
// Draggable Class
//----------------------------------------------------------------------------//

Ext.define('view.common.Draggable', {

    extend: 'Ext.dd.DDProxy',

    startDrag: function(e) {
        this.el.addCls('selected');
        this.initialPosition = this.el.getXY();
    },

    onDrag: function(e) {
    },

    onDragEnter: function(e, targetID) {
        Ext.fly(targetID).addCls('valid-zone');
    },

    onDragOver: function(e, targetID) {
    },

    onDragOut: function(e, targetID) {
        Ext.fly(targetID).removeCls('valid-zone');
    },

    // Handle valid drop.

    onDragDrop: function(e, targetID) {
        Ext.fly(`${targetID}-innerCt`).el.append(this.el);
    },

    // Handle invalid drop.

    onInvalidDrop: function() {
        this.el.removeCls('valid-zone');
        this.el.setX(this.initialPosition[0]);
        this.el.setY(this.initialPosition[1]);
    },

    endDrag: function(e, targetID) {
        this.el.removeCls('selected');
        this.el.highlight();
    }
});

//----------------------------------------------------------------------------//