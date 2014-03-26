function MenuItem(){ // default model
    var self = this;
    self.serviceType        = ko.observable("Haircut");
    self.title              = ko.observable("Men's Haircut");
    self.description        = ko.observable("The best haircuts for men on the planet!");
    self.regularPrice       = ko.observable(0);
    self.appointmentLength  = ko.observable(90);

}
function Section(id){
    var self = this;
    self.title = ko.observable("Hair Services");
    self.id = id
    self.menuItems = ko.observableArray();
    self.addMenuItem = function(){
            self.menuItems.push( new MenuItem());
        }
    self.removeMenuItem = function(item){
            self.menuItems.remove(item);
        }
    self.addMenuItem();

}
function AppModel() {
	var self = this;
 	self.ids = 1;
    self.dataStatus    = ko.observable(0); 
    self.statusSection = 1;
    self.statusItem    = 2;
    self.selection = ko.observable();   // used in form
    self.sections = ko.observableArray();
    self.addSection = function() { 
        self.sections.push(new Section(self.ids++));
    };
    self.addSection();
    self.addSection();
    self.removeSection = function(section) {
        self.dataStatus(0);
        self.sections.remove(section);
    }
    self.setStatusSection = function(item){
        self.dataStatus(self.statusSection);
        self.selection(item);
    }
    self.setStatusItem = function(item){
        self.dataStatus(self.statusItem);
        self.selection(item);
    }
    self.removeItem = function(item, parent){
        console.log(item);
        console.log(parent);
        parent.menuItems().remove(item);
        return false;
    }
}

$(document).ready(function() {
    ko.applyBindings( new AppModel());
});
