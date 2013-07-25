beforeEach(function() {
  this.addMatchers({
    toBeEmpty: function() {
        return this.actual.empty();
    }
  });
});
