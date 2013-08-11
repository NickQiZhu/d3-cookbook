function BarChart(p) {
    var that = {};

    var _parent = p, _width = 500, _height = 350,
        _margins = {top: 10, left: 30, right: 10, bottom: 30};

    that.render = function () {
        var svg = _parent
            .append("svg")
            .attr("height", _height)
            .attr("width", _width);

        svg.append("g")
            .attr("class", 'body')
            .attr("transform", "translate(" + _margins.left + "," + _margins.top + ")");
    };

    that.width = function (w) {
        if (!arguments.length) return _width;
        _width = w;
        return that;
    };

    that.height = function (h) {
        if (!arguments.length) return _height;
        _height = h;
        return that;
    };

    return that;
}