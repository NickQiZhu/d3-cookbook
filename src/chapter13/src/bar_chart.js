function BarChart(p) {
    var that = {};

    var parent = p, width, height;

    that.render = function () {
        parent
            .append("svg")
            .attr("height", height)
            .attr("width", width);
    };

    that.width = function (w) {
        if (!arguments.length) return width;
        width = w;
        return that;
    };

    that.height = function (h) {
        if (!arguments.length) return height;
        height = h;
        return that;
    };

    return that;
}