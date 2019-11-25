
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

//#region VehicleModel Assignment
var Vehicle = Backbone.Model.extend({
    validate: function(attrs){
        if(!attrs.registrationNumber)
            return 'Registeration Number is required';
    },

    urlRoot:'api/vehicles',

    start: function(){
        console.log('Vehicle started');
    }
});

var Car = Vehicle.extend({
    
    initialize: function(){
        console.log('New Car object created ');
    },

    start: function(){
        console.log('Car with registration number : '+this.attributes.registrationNumber+'  Started');
    }
});

var car1 = new Car({
    registrationNumber: 'XLI887',
    color: 'Blue'
});
car1.start();
car1.unset('registrationNumber');



car1.set('registrationNumber','XLI887');

if(car1.isValid())
{
    console.log(car1.validationError);
}


//#endregion


//#region ordersArray
// var BuySellModel = Backbone.Model.extend({

// });

// var BuySellView = Backbone.View.extend({
//     model: BuySellModel,

//     initialize: function(){
//         console.log('BuySellView : initialized');


//     },

//     render: function(){
//         var myTemplate = _.template($('scriptTemplate').html());
//         var myHtml = myTemplate(this.model.toJSON());
//         this.$dl.html(myHtml);

//         return this;
//     }
// });

// var buySellModel = new BuySellModel({
//     OrderType: ['OrderTYpe1', 'OrderTYpe2', 'OrderType3']
// });

// var buySellView = new BuySellView({ el: '#container', model: buySellModel });

//#endregion


//#region CountrieDropDown
// $(function () {
//     var Country = Backbone.Model.extend();
//     var Countries = Backbone.Collection.extend({
//         model: Country

//     });

//     var CountryView = Backbone.View.extend({
//         tagName: "option",

//         initialize: function () {
//             _.bindAll(this, 'render');
//         },
//         render: function () {
//             console.log("in render");
//             $(this.el).attr('value',
//   this.model.get('id')).html(this.model.get('name'));
//             return this;
//         }
//     });

//     var CountriesView = Backbone.View.extend({
//         initialize: function () {
//             _.bindAll(this, 'addOne', 'addAll');
//             this.collection.bind('reset', this.addAll);
//         },
//         addOne: function (country) {
//             $(this.el).append(
//   new CountryView({ model: country }).render().el);
//         },
//         addAll: function () {
//             this.collection.each(this.addOne);
//         }
//     });

//     var countries = new Countries();
//     var countriesview = new CountriesView({ el: $("#country"), collection: countries });
//        // I moved the act of populating the collection here,
//        // now your countries view will actually hear the `reset event`
//     countriesview.collection.reset([{
//         id: 'US',
//         name: 'US'
//     },
//         {
//             id: 'India',
//             name: 'India'
//         },
//         {
//             id: 'UK',
//             name: 'UK'
//         }]);
// });

//#endregion