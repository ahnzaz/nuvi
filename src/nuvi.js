/**
 * Created by SDS on 2015-07-06.
 */
(function(_window)
{
    var nuviRootPackage = function()
    {

    };

    _window['nuvi'] = nuviRootPackage;

    /**
     * License key string for map provider.
     * @since 1.0
     * @create 2015-07-06
     * @type {null}
     */
    var strLicenseKey = null;



    /**
     * Controller instance for each Map Provider.
     * @since 1.0
     * @create 2015-07-06
     * @type {null}
     */
    var mapController = null;

    var nuviRoot = nuviRootPackage.Nuvi = function()
    {

    };

    // Default google map provider.
    var mapProvider = nuviRoot.mapProvider = mapProviderCls.GOOGLE_MAP;
    nuviRoot.initialize = function (_obj) {
        if (licenseKey in _obj) {
            nuviRoot.licenseKey = _obj.licenseKey

        }else{
            // Throw no license key exception.
        }

        if (provider in _obj) {
            nuviRoot.mapProvider = _obj.provider;
        }
        else {
            // Throw no provider exception.
        }
    };

    /**
     * MapContext class. <br />
     * @since 1.0
     * @added 2015-07-08
     * @type {Class}
     */
    var mapContextCls = nuviRootPackage.MapContext = function MapContext(_obj)
    {
      this.overlayList = new Array();
      this.mapContainer = null;
    };
    mapContextCls.prototype.addOverlay = function (_overlay) {
        this.overlayList.add(_overlay);
    };
    mapContextCls.prototype.setContainer = function(_div){

    };

    /**
     * MapProvider Class. <br />
     * @since 1.0
     * @create 2015-07-06
     */
    var mapProviderCls = nuviRootPackage.MapProvider = function MapProvider(_obj){
        this.loadUrl    = _obj.url;
        this.coord      = _obj.coord;
    };
    mapProviderCls.GOOGLE_MAP   = 0;
    mapProviderCls.DAUM_MAP     = 0;
    mapProviderCls.NAVER_MAP    = 0;
    {
        GOOGLE_MAP  : 0,
        DAUM_MAP    : 1,
        NAVER_MAP   : 2
    };

    /**
     * nuvi.function package.
     * @since 1.0
     * @added 2015-07-06
     */
    var functionPkg = nuviRootPackage.function = {
    };

    /**
     * Function define list
     * @since 1.0
     * @create 2017-07-07
     * @type {{moveTo: *, setCenter: *}}
     */
    var functionList = {
        'moveTo'    : nuviRootPackage.function.moveto,
        'setCenter' : nuviRootPackage.function.setcenter
    }

    /**
     * Event define list.
     * @since 1.0
     * @create 2017-07-07
     * @type {{onCenterChanged: null}}
     */
    var eventList = {
        'onCenterChanged' : null
    }

    /**
     * Overlay package. <br />
     * @since 1.0
     * @added 2015-07-08
     */
    nuviRootPackage.overlay = function(){};

    /**
     * Overlay interface. <br />
     * @since 1.0
     * @added 2017-07-08
     * @param _obj : {
     *      coord : Coordinate instance,
     *      element : HTTPElement,
     *
     * }
     */
    var overlayCls = nuviRootPackage.overlay.Overlay = function Overlay(_obj) {
        if(coord in _obj) {
            this.coord = _obj.coord;
        }

        if (element in _obj) {
            this.element = _obj.element;
        }
    };

    /**
     * Change coordinate of overlay's center point. <br />
     * @since 1.0
     * @added 2015-07-08
     * @param _coordinate
     */
    overLayCls.prototype.setCoordinate = function(_coordinate)
    {
        this.coord = _coordinate;
    };
    overLayCls.prototype.show = function () {
        // Show this overlay.
    }
}(window));
