describe('BarChart', function () {
    var div,
        chart,
        data = [{x: 0, y: 0},{x: 1, y: 3},{x: 2, y: 6}];

    beforeEach(function () {
        div = d3.select('body').append('div');
        chart = BarChart(div);
    });

    afterEach(function () {
        div.remove();
    });

    describe('.data', function () {
        it('should allow setting and retrieve chart data', function(){
            expect(chart.data(data).data()).toBe(data);
        });
    });

    describe('.render', function () {
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

        describe('bars', function () {
        });
    });

    function svg() {
        return div.select('svg');
    }
});