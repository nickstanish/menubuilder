ko.validation.init( {
	decorateInputElement: true,
	errorElementClass: 'invalid',
	insertMessages: true

});
function MenuItem(){
	var self = this;
	self.serviceType        = ko.observable("Haircut").extend({ required: true });
	self.title              = ko.observable("Men's Haircut").extend({ 
									required: true,
									maxLength: 100
								});
	self.description        = ko.observable("The best haircuts for men on the planet!").extend({ 
									required: true,
									maxLength: 500
								});
	self.regularPrice       = ko.observable(50.00).extend( { 
									required: true,
									pattern:{
										message: 'Invalid required field. Enter a price between 0.01 and 9999.99',
										params: /^(\d){1,4}(\.\d\d)?$/
									}
									
								});
	self.appointmentLength  = ko.observable(90).extend({ 
									required: false,
									min: 1
								});
	self.isValid	= function(){
			return self.serviceType.isValid() && self.title.isValid() && self.description.isValid() && self.regularPrice.isValid() && self.appointmentLength.isValid();
		}

}
function Section(id){
	var self        = this;
	self.title      = ko.observable("Hair Services").extend({ 
							required: true,
							maxLength: 50
						 });
	self.id         = id;
	self.menuItems  = ko.observableArray();

	self.addMenuItem = function(){
			self.menuItems.push( new MenuItem());
		}

	self.removeMenuItem = function(item){
			self.menuItems.remove(item);
		}

	self.addMenuItem(); // add one item to list by default

}
/**
*	Highest level model for entire app
*/
function AppModel() {
	var self              = this;
	self.ids              = 1;     // change to unique id later, need different ids in accordian display so that it will work
	self.dataStatus       = ko.observable(0); // enums available?
	self.statusSection    = 1;
	self.statusItem       = 2;
	self.selectionSection = ko.observable(undefined);   // used to display current item in form
	self.selectionItem    = ko.observable(undefined);   // used to display current item in form
	self.sections 		  = ko.observableArray();
	/**
	* add a new default section to model
	*/
	self.addSection = function() { 
			self.sections.push(new Section(self.ids++));
		};

	self.addSection();
	self.addSection();
	/**
	* remove a section from model
	*/
	self.removeSection = function(section) {
			self.dataStatus(0);
			self.sections.remove(section);
		};

	/** 
	* used to alter items displayed on right part of page
	*
	*/
	self.setStatusSection = function(item){
			self.dataStatus(self.statusSection);
			self.selectionItem(undefined);
			self.selectionSection(item);
		};
	/**
	*   used to alter items displayed on right part of page
	*   
	*/
	self.setStatusItem = function(item){
			self.dataStatus(self.statusItem);
			self.selectionSection(undefined);
			self.selectionItem(item);
		};
	self.isValid = function(){
		var valid = true;
		self.sections().forEach(function(entry) {
			if(!entry.title.isValid()){
				valid = false;
				return false;
			}
			entry.menuItems().forEach(function(item){
				if(!item.isValid()){
					valid = false;
					return false;
				}
			});
		});
		return valid;
	};
	/**
	*   Validate and publish entire model to server using ajax post
	*   
	*/
	self.publish = function(){
			//first validate whole model
			if(!self.isValid()){
				alert("Validation failed");
				return false;
			}
			//convert to json string
			jsonString = ko.toJSON(self, null, 2);
			$.post('/',{message: jsonString}) 
				.done(function() {
				    	alert( "Submitted" );
					})
				.fail(function() {
						alert( "Error submitting" );
					});
		};

}

$(document).ready(function() {
	ko.applyBindings( new AppModel());
});

