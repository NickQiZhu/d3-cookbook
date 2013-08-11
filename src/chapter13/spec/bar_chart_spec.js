describe('BarChart', function () {
    var div;

    beforeEach(function () {
        div = d3.select('body').append('div');
    });

    afterEach(function () {
        div.remove();
    });

    describe('render', function () {
        var chart;

        beforeEach(function () {
            chart = BarChart(div);
        });

        describe('svg', function () {
            it('should generate svg', function () {
                chart.render();
                expect(svg()).not.toBeEmpty();
            });

            it('should set default svg height and width', function () {
                chart.render();
                expect(svg().attr('width')).toBe('500');
                expect(svg().attr('height')).toBe('350');
            });

            it('should allow changing svg height and width', function () {
                chart.width(200).height(150).render();
                expect(svg().attr('width')).toBe('200');
                expect(svg().attr('height')).toBe('150');
            });
        });

        describe('chart body', function () {
            it('create body g', function () {
                chart.render();
                expect(svg().select('g.body')).not.toBeEmpty();
            });

            it('should translate to (left, top)', function () {
                chart.render();
                expect(svg().select('g.body').attr('transform')).toBe('translate(30,10)')
            });
        });
    });

    function svg() {
        return div.select('svg');
    }
});