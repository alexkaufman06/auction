Auction.Router.map(function() {
  this.resource('lots', {path: '/'});
  this.resource('lot', {path: ':lot_id'}, function() {
    this.resource('new-item');
  });
  this.resource('new-lot');
  this.resource('about');
  this.resource('contact', function() {
    this.resource('email');
    this.resource('phone');
  });
});
