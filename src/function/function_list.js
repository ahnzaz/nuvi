{
  functionList: {
    'moveTo'          : nuvi.function.moveto.FunctionFactory,

    'panTo'           : nuvi.function.panto.FunctionFactory,

    'setCenter'       : nuvi.function.setcenter.FunctionFactory,

    /**
     * Switch map type among Plain, Street, 3D map. <br />
     * @since 0.1
     * @created 2015-07-23
     */
    'switchMapType'   : nuvi.function.switchmaptype.FunctionFactory,

    'setBound'        : nuvi.function.setbound.FunctionFactory,

    'setMapType'      : nuvi.function.setmaptype.FunctionFactory


    /**
     * Draw simple overlay to display minimal information and icon. <br />
     * @since 1.0
     * @created 2015-07-23
     * Marker is child of Overlay. <br />
     */
    'drawMarker'      : nuvi.function.drawmarker.FunctionFactory,

    'drawLine'        : nuvi.function.drawline.FunctionFactory,

    'drawCircle'      : nuvi.function.drawcircle.FunctionFactory,

    'drawPoly'        : nuvi.functino.drawpoly.FunctionFactory,

    'addControl'      : nuvi.function.addcontrol.FunctionFactory,


  }
}
