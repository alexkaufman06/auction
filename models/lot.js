Auction.Lot = DS.Model.extend({
  name: DS.attr(),
  type: DS.attr(),
  items: DS.hasMany('item', {async: true})
});
