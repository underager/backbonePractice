var Venue = Backbone.Model.extend({

});

var Venues = Backbone.Collection.extend({
    model: Venue
});

var VenueView = Backbone.View.extend({
    tagName : 'li',

    initialize: function(options){
        this.bus = options.bus;
    },

    events: {
        "click" : "onClick"
    },

    onClick: function(){
        this.bus.trigger('venueSelected', this.model);
    },

    render: function(){
        this.$el.html(this.model.get('name'));

        return this;
    }
});

var VenuesView = Backbone.View.extend({
    tagName: 'ul',

    id: "venues",

    initialize: function(options){
        this.bus = options.bus;
    },

    render: function(){
        var self = this;

        this.model.each(function(venue){
            var venueView = new VenueView({model : venue, bus : self.bus });
            self.$el.append(venueView.render().$el);
        });

        return this;
    }
});

var MapView = Backbone.View.extend({
    el: '#map-container',

    initialize: function(options){
        this.bus = options.bus;

        this.bus.on('venueSelected', this.onVenueSelected, this);
    },

    onVenueSelected: function(venue){
        this.model = venue;
        this.render();
    },

    render: function(){
        if(this.model)
            this.$('#venue-name').html(this.model.get('name'));

            return this;
    }
});

var venues = new Venues([
    new Venue({name : 'Venue HillTon' }),
    new Venue({ name: 'Paradice DIce' }),
    new Venue({ name : 'Oceans Galore' })
]);

var bus = _.extend({}, Backbone.Events);

var venuesView = new VenuesView({ model : venues, bus : bus });
$('#venues-container').html(venuesView.render().$el);

var mapView = new MapView({bus : bus});
mapView.render();