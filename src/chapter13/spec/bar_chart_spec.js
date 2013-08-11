describe('BarChart', function () {
    var div;

    beforeEach(function () {
        div = d3.select('body').append('div');
    });

    afterEach(function () {
        div.remove();
    });

    describe('render', function () {
        describe('svg', function () {
            var chart;

            beforeEach(function () {
                chart = BarChart(div);
            });

            it('should generate svg', function () {
                chart.render();
                expect(svg().empty()).not.toBe(true);
            });

            it('should set svg height and width', function () {
                chart.width(200).height(150).render();
                expect(svg().attr('width')).toBe('200');
                expect(svg().attr('height')).toBe('150');
            });
        })
    });

    function svg() {
        return div.select('svg');
    }
});