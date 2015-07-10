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

        if(callback in _obj){
            nuviRoot.callback = _obj.callback;
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
        this.overlayList             = new Array();
        this.mapContainer            = _obj.container;
        this.mapContext              = null;

        // Map attributes
        this.zoom                       = _obj.zoom;
        this.tilt                       = _obj.tilt;
        this.center                     = _obj.center;
        this.mapMode                    = _obj.mapMode;
        this.size                       = _obj.size;

        // Naver Attributes
        this.activateTrafficMap         = _obj.activateTrafficMap;
        this.activateBicycleMap         = _obj.activateBicycleMap;

        // Map control flag
        this.enableWheelZoom            = _obj.enableWheelZoom;
        this.enableDragPan              = _obj.enableDragPan;
        this.enableDblClickZoom         = _obj.enableDblClickZoom;
    };
    mapContextCls.prototype.addOverlay = function (_overlay) {
        this.overlayList.add(_overlay);
    };
    mapContextCls.prototype.setContainer = function(_div){

    };

    mapContextCls.prototype.getNativeMapContext = function(){
        return mapContext;
    }

    /**
     * MapProvider Class. <br />
     * @since 1.0
     * @create 2015-07-06
     */
    var mapProviderCls = nuviRootPackage.MapProvider = function MapProvider(_obj){
        this.ordinal    = ++mapProviderCls.ordinal;
        this.loadUrl    = _obj.url;
        this.coord      = _obj.coord;
    };
    mapProviderCls.ordinal = 0;
    mapProviderCls.GOOGLE_MAP   = new MapProvider({
        url     : null,
        coord   : null
    });
    mapProviderCls.DAUM_MAP     = new MapProvider({
        url     : null,
        coord   : null
    });
    mapProviderCls.NAVER_MAP    = new MapProvider({
        url     : null,
        coord   : null
    });

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
