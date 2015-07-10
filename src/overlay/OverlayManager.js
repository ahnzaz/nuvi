/**
 * OverlayManager class. <br />
 * @since 1.0
 * @added 2015-07-10
 * @constructor
 */
function OverlayManagerClass(_obj) {
    this.mapContext     = _obj.mapContext;

    this.overlayList    = _obj.overlayList;

    this.overlayFactory = _obj.factory;
}
