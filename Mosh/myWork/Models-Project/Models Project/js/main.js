		
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

//#region model Collection Vehicle
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

// var Car = Vehicle.extend({
// 	start: function(){
// 		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
// 	}
// });

// var Vehicles = Backbone.Collection.extend({
// 	model : Vehicle
// });

// var vehicles = new Vehicles([
// 	new Vehicle({ registrationNumber: 'XLI887', color:'Blue' }),
// 	new Vehicle({ registrationNumber: 'ZNP123', color: 'Blue' }),
// 	new Vehicle({ registrationNumber: 'XUV456', color: 'Grey' })
// ]);



// var allBlueCars = vehicles.where({ color: "Blue" });
// console.log('Blue Cars : ',allBlueCars);

// var aParticularCar = vehicles.where({ registrationNumber : 'XLI887' });
// console.log("A Car with registeration Number XLI887 ", aParticularCar);

// vehicles.remove(vehicles.get('XLI887'));
// console.log(vehicles.toJSON());

//#endregion

//#region View Practical

// var Song = Backbone.Model.extend({

// });
// var SongView = Backbone.View.extend({
// 	tagName : 'li',

// 	render: function(){
// 		this.$el.html(this.model.get('title'));

// 		return this;
// 	}
// });

// var Songs = Backbone.Collection.extend({

// });

// var SongsView = Backbone.View.extend({
// 	render: function(){
// 		var self = this;
// 		this.model.each(function(song){
// 			var songView = new SongView({model: song});
// 			self.$el.append(songView.render().$el);
// 		});
// 	}
// });


// var songs = new Songs([
// 	new Song({title : 'Songl'}),
// 	new Song({title: 'Song2'}),
// 	new Song({title:'Song3'})
// ]);

// var songsView = new SongsView({el : '#songs', model: songs});
// songsView.render();

//#endregion


//#region changes in the model
// var Song = Backbone.Model.extend({
// 	default:{
// 		Listner : 0
// 	}
// });

// var SongView = Backbone.View.extend({
// 	initialize: function(){
// 		this.model.on("change",this.onModelChange, this);
// 	},

// 	onModelChange: function(){
// 		this.$el.addClass("someClass");
// 		this.render();
// 	},

// 	render : function(){
// 		this.$el.html(this.model.get('title')+ ' Listner : '+ this.model.get('Listner'));

// 		return this;
// 	}
// });

// var song = new Song({title: 'Echo', Listner: 12});

// var songView = new SongView({el: '#container', model: song });
// songView.render();
//#endregion

//#region template practice

// var Song = Backbone.Model.extend({
	
// });

// var SongView = Backbone.View.extend({
// 	render: function(){
// 		var myTemplate = _.template($("#songTemplate").html());
// 		var myHtml = myTemplate(this.model.toJSON());
// 		this.$el.html(myHtml); 

// 		return this;
// 	}
// });

// var song = new Song({title : 'Go Hello'})
// var songView = new SongView({el : '#container', model : song });
// songView.render();
//#endregion

//#region ViewsProject

var Vehicle = Backbone.Model.extend({

});

var Vehicles = Backbone.Collection.extend({

});

var VehicleView = Backbone.View.extend({

	tagName : 'li',

	className : 'vehicle',

	attributes:{
		'data-color' : '#34343e' 
	},

	events : {
		'click' : 'onDeleteClick' 
	},

	onDeleteClick: function(e){
		var targetElement = $(e.target);
		console.log('target : '+targetElement.id);
		console.log('delete button clicked !!!');
	var removedElement = 	this.remove();
	console.log('removed element : '+removedElement);
		
		// new VehiclesView().toRemove();
		this.model.on('change', this.render, this);
	},

	render: function(){
		this.$el.html(this.model.get('registrationNumber')+ ' <button>Delete </button>');
		this.$el.attr("id", this.model.id);
		
		return this;
	}
});

var VehiclesView = Backbone.View.extend({
	initialize: function(){
		// this.model.on("removed", this.toRemove, this);
	},

	toRemove: function(targetElement){
		console.log('Attempting to remove vehicle through VehiclesView');
		new VehiclesView().remove(targetElement.id);
	},

	render : function(){
		var self = this;
		
		this.model.each(function(vehicle){
			var vehicleView = new VehicleView({model : vehicle});
			console.log('about to use self');
			self.$el.append(vehicleView.render().$el);
			
		})
	}
});

var vehicles = new Vehicles([
	new Vehicle({id : 1, registrationNumber: '0001'}),
	new Vehicle({id : 2, registrationNumber: '0002'}),
	new Vehicle({id : 3, registrationNumber: '0003'})
]);

var vehiclesView = new VehiclesView({el: '#songs', model : vehicles});
vehiclesView.render();

//#endregion

