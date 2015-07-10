/**
 * MapContext class. <br />
 * @since 1.0
 * @added 2015-07-10
 */
function(_obj)
{
    this.mapProvider    = null;
    this.mapInstance    = null;
    this.overlayList    = new Array();
    this.mapContainer   = _obj.container;
}
