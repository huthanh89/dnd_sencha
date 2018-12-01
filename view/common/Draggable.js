//----------------------------------------------------------------------------//
// Draggable Class
//----------------------------------------------------------------------------//

Ext.define('view.common.Draggable', {

    extend:  'Ext.dd.DDProxy',
    isTarget: false,

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

    onDragDrop: function(e, targetID) {
        let targetPosition = Ext.fly(targetID).el.getXY()
        this.el.setX(targetPosition[0]);
        this.el.setY(targetPosition[1]);
    },

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