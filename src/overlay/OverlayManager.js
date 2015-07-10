(function (_window) {

    /**
     }
     * OverlayManager class. <br />
     * @since 1.0
     * @added 2015-07-10
     * @constructor
     */
    function OverlayManagerClass(_obj) {
        this.mapContext     = _obj.mapContext;

        this.overlayList    = _obj.overlayList;

        this.overlayDeliver = _obj.deliver;

        this.container      = null;

        this.level          = _obj.level;
    }

    OverlayManagerClass.prototype.hideAll = function () {
        this.container.display = "none";
    };

    _window.nuvi,overlay.OverlayManager = OverlayManagerClass;
}(window);
