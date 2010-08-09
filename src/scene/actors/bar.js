// Bar
// =============================================================================

uv.Bar = function(properties) {
  // super call
  uv.Actor.call(this, _.extend({
    width: 30,
    height: 50,
    strokeWeight: 2,
    strokeStyle: '#000',
    fillStyle: '#ccc',
    bounds: function() {
      return [
        {x: 0, y: 0},
        {x: this.p('width'), y: 0},
        {x: this.p('width'), y: this.p('height')},
        {x: 0, y: this.p('height')}
      ];
    }
  }, properties));
};

uv.Bar.prototype = Object.extend(uv.Actor);

uv.Bar.prototype.draw = function(ctx) {
  ctx.fillStyle = this.prop('fillStyle');
  ctx.fillRect(0, 0, this.prop('width'), this.prop('height'));
};
