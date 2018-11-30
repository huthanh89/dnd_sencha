

var dd = Ext.define('View.Item', {
    extend:  'Ext.dd.DD',
    isTarget: false,
    startDrag: function(e) {
        //add a css class to add some transparency to our div
        this.el.addCls('selected');
        //when we drop our item on an invalid place  we need to return it to its initial position
        this.initialPosition = this.el.getXY();
    },
    onDrag: function(e) {
        //console.log(e);
       // this.el.setX(e.pageX - 132);
        //this.el.setY(e.pageY - 132);
    },
    onDragEnter: function(e, id) {
        Ext.fly(id).addCls('valid-zone');
    },
    onDragOver: function(e, id) {
    //     console.log('onDragOver');
    },
    onDragOut: function(e, id) {
        Ext.fly(id).removeCls('valid-zone');
    },
    /*
    onDragDrop: function(e, id) {
        // change the item position to absolute
        this.el.dom.style.position = 'absolute';
        //move the item to the mouse position
        this.el.moveTo(e.getPageX() - 32, e.getPageY() - 32);
        Ext.fly(id).removeCls('valid-zone');
    },
    */
    onInvalidDrop: function() {
        console.log('invalid drop', this.el, this.initialPosition);
        this.el.removeCls('valid-zone');
        this.el.setX(this.initialPosition[0]);
        this.el.setY(this.initialPosition[1]);
    },
    endDrag: function(e, id) {
        console.log('end drop');
        this.el.removeCls('selected');
        //Ext.fly(id).removeCls('drop-target');
        this.el.highlight();
    }
});
