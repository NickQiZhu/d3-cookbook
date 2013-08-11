function BarChart(p) {
    var that = {};

    var _parent = p, _width = 500, _height = 350,
        _margins = {top: 10, left: 30, right: 10, bottom: 30},
        _data;

    that.render = function () {
        var svg = _parent
            .append("svg")
            .attr("height", _height)
            .attr("width", _width);

        var body = svg.append("g")
            .attr("class", 'body')
            .attr("transform", "translate(" + _margins.left + "," + _margins.top + ")")

        if(_data){
            body.selectAll('rect.bar')
                .data(_data).enter()
            .append('rect')
                .attr("class", 'bar');
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

    return that;
}