		
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.


//#region region1
// var Vehicle = Backbone.Model.extend({

// 	idAttribute: "registrationNumber",

// 	urlRoot: "/api/vehicles",

// 	validate: function(attrs){
// 		if (!attrs.registrationNumber)
// 			return "Vehicle is not valid.";
// 	},

// 	start: function(){
// 		console.log("Vehicle started.");
// 	}
// });

// var Vehicles = Backbone.Collection.extend({
// 	Model: Vehicle
// });

// var Car = Vehicle.extend({
// 	start: function(){
// 		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
// 	}
// });

// var VehicleView = Backbone.View.extend({
// 	tagName: "li",

// 	className: "vehicle",

// 	initialize: function(options){
// 		this.bus = options.bus;

// 		// this.bus.on('addVehicle', this.addVehicle, this);
// 	},

// 	// addVehicle: function(vehicle){
// 	// 	if(vehicle)
// 	// 	{
// 	// 		console.log('Attempting to add vehicle with ');
// 	// 		console.log('registration number: '+vehicle.get('registerationNumber'));
// 	// 		this.render;
// 	// 	}
		
// 	// },

// 	events: {
// 		"click .delete": "onDelete",
// 	},

// 	render: function() {
// 		var source = $("#vehicleTemplate").html();
// 		var template = _.template(source);

// 		this.$el.html(template(this.model.toJSON()));
// 		this.$el.attr("data-color", this.model.get("color"));

// 		return this;
// 	},

// 	onDelete: function(){
// 		this.remove();
// 	}
// });

// var VehiclesView = Backbone.View.extend({
// 	tagName: "ul",

// 	initialize: function(options){
// 		this.bus = options.bus;

// 		this.bus.on('addVehicle', this.onAddVehicle, this);
// 	},

// 	onAddVehicle: function(registrationNumber){
// 		// if(registrationNumber)
// 		// {
// 			var car = new Car({registrationNumber : registrationNumber});
// 			var vehicleView = new VehicleView({model : car});

// 			this.$el.prepend(vehicleView.render().$el);
// 		// }
// 	},

// 	render: function(){
// 		this.$el.empty();
// 		console.log('into rendering of vehiclesView');
// 		this.collection.each(function(vehicle){
// 			var vehicleView = new VehicleView({ model: vehicle , bus:bus});
// 			this.$el.append(vehicleView.render().$el);
// 		}, this); // note the reference to this here. When you set
// 		// the "this" pointer here (as the second argument to the 
// 	    // each method, you'll be able to access "this" inside the 
// 	    // callback function in the each method:
// 	    //
// 	    // this.$el.append(...)

// 		return this;
// 	}
// });

// var NewVehicleView = Backbone.View.extend({
// 	initialize : function(){
// 		console.log('newVehicleView : initialized');
		
// 	},

// 	model: Vehicle,

// 	render: function(){
// 		var source = $('#newVehicleTemplate').html();
// 		var myTemplate = _.template(source);

// 		this.$el.html(myTemplate());
// 		console.log('returning from the rendering function of newVehicleView');
// 		return this;
// 	},
	
// 	events: {
// 		'click .addVehicle': 'onClick'
// 	},

// 	onClick: function(){
// 		console.log('in onClick ()');
// 		// var rNumber = document.getElementById('addText').value;

// 		// this.model.set('registrationNumber', rNumber);
// 		// document.getElementById('addText').value = '';

// 		var inputTag = this.$el.find('#addText');
// 		var registerationNumber = inputTag.val();
// 		//publishing the event.
// 		bus.trigger('addVehicle', registerationNumber);

// 		//clearing the textbox is job of NewVehicleTemplate
// 		inputTag.val('');
// 	}
	
// });

// var vehicles = new Vehicles([
// 	new Car({ registrationNumber: "XLI887", color: "Blue" }),
// 	new Car({ registrationNumber: "ZNP123", color: "Blue" }),
// 	new Car({ registrationNumber: "XUV456", color: "Gray" })
// ]);
// var bus = _.extend({}, Backbone.Events);
// var vehiclesView = new VehiclesView({ collection: vehicles , bus:bus});
// $("#container").append(new NewVehicleView().render().$el)
// 				.append(vehiclesView.render().$el);

//#endregion

//#region EventsProjectCode MyWork
// var NewVehicleView = Backbone.View.extend({
// 	el:"#newVehicleView",

// 	initialize: function(options){
// 		this.bus = options.bus;
		
		

// 	},

// 	events:{
// 		'click .addVehicle' : 'onAdd'
// 	},

// 	onAdd: function(){
// 		var newRegistration = document.getElementById('addText').value;
// 		console.log('newRegistration : '+newRegistration);
// 		this.model.set('registerationNumber', newRegistration);
// 		console.log('Attempting to add to the list');
// 		this.bus.trigger('addVehicle', this.model);
// 	},

// 	render: function(){
// 		console.log('rendering the newVehicle View');
// 	}


// });



// var newVehicle = new Vehicle({
	
// });

// var newVehicleView = new NewVehicleView({
// 	model: newVehicle,
// 	bus: bus
// });

//#endregion

//#region EventsProjectCOde myWorkAttempt2


// var newVehicle = new Vehicle({});

// var newVehicleView = new NewVehicleView({
// 	model : newVehicle,
// 	bus: bus
// });



//#endregion

//#region RouteProject
var IndexView = Backbone.View.extend({
	render: function(){
		this.$el.html('Index ');

		return this;
	}
});


var Car = Backbone.Model.extend({

});

var Boat = Backbone.Model.extend({});

var CarView = Backbone.View.extend({
	render: function(){
		this.$el.html('Car View');
		this.return;
	}
});

var BoatView = Backbone.View.extend({
	render: function(){
		this.$el.html('Boat VIew');
		
		return this;
	}
});


var AppRouter = Backbone.Router.extend({
	routes: {
		'index': 'showIndex',
		'cars':'showCars',
		'boats': 'showBoats'
	},

	showIndex : function(){
		console.log('Just Showing index');
	},

	showCar: function(){
		console.log('just showing car');
		var carView = new CarView({ el: '#container'});
		carView.render();
	},

	showBoats : function(){
		console.log('showing boats');
		var boatView = new BoatView({ el: '#container' });
		boatView.render();
	}
});

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
	event:{
		'click': 'onClick'
	},

	onClick: function(e){
		var $li = $(e.target);
		router.navigate($li.attr('data-url'), {trigger : true });
	}
});

var navView = new NavView({el : '#nav'});




//#endregion


//#region dropdownExperiment

// $(function () {
// 	var Country = Backbone.Model.extend();
// 	var Countries = Backbone.Collection.extend({
// 		model: Country

// 	});

// 	var CountryView = Backbone.View.extend({
// 		tagName: "option",

// 		initialize: function () {
// 			_.bindAll(this, 'render');
// 		},
// 		render: function () {
// 			console.log("in render");
// 			$(this.el).attr('value',
//   this.model.get('id')).html(this.model.get('name'));
// 			return this;
// 		}
// 	});

// 	var CountriesView = Backbone.View.extend({
// 		initialize: function () {
// 			_.bindAll(this, 'addOne', 'addAll');
// 			this.collection.bind('reset', this.addAll);
// 		},
// 		addOne: function (country) {
// 			$(this.el).append(
//   new CountryView({ model: country }).render().el);
// 		},
// 		addAll: function () {
// 			this.collection.each(this.addOne);
// 		}
// 	});

// 	var countries = new Countries();
// 	var countriesview = new CountriesView({ el: $("#country"), collection: countries });
// 	   // I moved the act of populating the collection here,
// 	   // now your countries view will actually hear the `reset event`
// 	countriesview.collection.reset([{
// 		id: 'US',
// 		name: 'US'
// 	},
// 		{
// 			id: 'India',
// 			name: 'India'
// 		},
// 		{
// 			id: 'UK',
// 			name: 'UK'
// 		}]);
// });
//#endregion


