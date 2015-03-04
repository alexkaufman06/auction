Auction.Item = DS.Model.extend({
  name: DS.attr(),
  photo: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
