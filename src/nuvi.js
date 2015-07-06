(function(_window)
{
    var nuvi = function()
    {

    };

    _window['nuvi'] = nuvi;

    /**
     * License key string for map provider.
     * @since 1.0
     * @create 2015-07-06
     * @type {null}
     */
    var strLicenseKey = null;

    // Default google map provider.
    var mapProvider = mapProviderCls.GOOGLE_MAP;

    /**
     * Controller instance for each Map Provider.
     * @since 1.0
     * @create 2015-07-06
     * @type {null}
     */
    var mapController = null;

    var context = nuvi.NuviContext = function()
    {

    };
    context.setContext = function(_obj)
    {
        if(!'LicenseKey' in _obj)
        {
            // Throw no license key exception.
        }
    };

    /**
     * MapProvider Class. <br />
     * @since 1.0
     * @create 2015-07-06
     */
    var mapProviderCls = nuvi.MapProvider = {
        GOOGLE_MAP  : 0,
        DAUM_MAP    : 1,
        NAVER_MAP   : 2
    };


}(window));
