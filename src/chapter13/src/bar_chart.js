function BarChart(){
    var that = {};

    that.render = function(){
        d3.select("body")
            .append("svg");
    };

    return that;
}