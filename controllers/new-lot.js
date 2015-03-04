Auction.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('name'),
        type: this.get('type')
      });
      newLot.save();
      this.transitionToRoute('lots');
    }
  }
});
