describe('BarChart', function(){
    describe('render', function(){
        describe('svg', function(){
            it('should generate svg', function(){
                var chart = BarChart();
                chart.render();
                expect(d3.select('body svg').empty()).not.toBe(true);
            });
        })
    });
});