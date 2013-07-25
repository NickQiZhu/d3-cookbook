function BarChart(p) {
    var BAR_PADDING = 2;

    var that = {};

    var _parent = p, _width = 500, _height = 350,
        _margins = {top: 10, left: 30, right: 10, bottom: 30},
        _data,
        _x = d3.scale.linear(),
        _y = d3.scale.linear();

    that.render = function () {
        var svg = _parent
            .append("svg")
            .attr("height", _height)
            .attr("width", _width);

        var body = svg.append("g")
            .attr("class", 'body')
            .attr("transform", "translate(" + _margins.left + "," + _margins.top + ")")

        if (_data) {
            _x.range([0, quadrantWidth()]);
            _y.range([quadrantHeight(), 0]);

            body.selectAll('rect.bar')
                .data(_data).enter()
                .append('rect')
                .attr("class", 'bar')
                .attr("width", function () {
                    return quadrantWidth() / _data.length - BAR_PADDING;
                })
                .attr("x", function (d) {
                    return _x(d.x);
                })
                .attr("y", function (d) {
                    return _y(d.y);
                })
                .attr("height", function (d) {
                    return _height - _margins.bottom - _y(d.y);
                });
        }
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

    that.data = function (d) {
        if (!arguments.length) return _data;
        _data = d;
        return that;
    };

    that.x = function (x) {
        if (!arguments.length) return _x;
        _x = x;
        return that;
    };

    that.y = function (y) {
        if (!arguments.length) return _y;
        _y = y;
        return that;
    };

    function quadrantWidth() {
        return _width - _margins.left - _margins.right;
    }

    function quadrantHeight() {
        return _height - _margins.top - _margins.bottom;
    }

    return that;
}