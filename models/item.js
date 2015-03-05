Auction.Item = DS.Model.extend({
  name: DS.attr(),
  photo: DS.attr(),
  estimate: DS.attr(),
  backstory: DS.attr(),
  yearacquired: DS.attr(),
  owner: DS.attr(),
  description: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
