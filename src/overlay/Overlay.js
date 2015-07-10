/**
 * Overlay entity class. <br />
 * @since 1.0
 *
 * @constructor
 */
(function (_window) {
    function OverlayClass(_obj) {
        this.center     = _obj.center;
        this.element    = _obj.element;
        this.container  = null;
    }

    OverlayClass.prototype.show = function () {
        this.constainer.display = 'none';
    };

    OverlayClass.prototype.hide = function(){
        this.container.display  = 'box';
    }
}(window)());
