function MenuItem(){ // default model
    var self = this;
    this.serviceType        = "Haircut";
    this.title              = "Men's Haircut";
    this.description        = "The best haircuts for men on the planet!";
    this.regularPrice       = 50;
    this.appointmentLength  = 90;

}
function AppModel() {
	var self = this;
 	self.ids = 1;
    self.selection = ko.observable();   // used in form
    self.sections = ko.observableArray([ // switch up later
            { title: 'title1', text: 'text1' , id: self.ids++, menuItems: ko.observableArray([new MenuItem(),new MenuItem(),new MenuItem()]) },
            { title: 'title2', text: 'text2' , id: self.ids++, menuItems: ko.observableArray([new MenuItem()]) },
            { title: 'title3', text: 'text3' , id: self.ids++, menuItems: ko.observableArray([new MenuItem()]) }
        ]
    );
 
    self.addSection = function() { 
        self.sections.push({ title: "title" + self.ids, text: "text" + self.ids, id: self.ids++, menuItems: ko.observableArray([new MenuItem()]) });
    };
    self.removeSection = function(section) {
        self.sections.remove(section);
    }
    self.setSelection = function(item){
        self.selection(item);
    }
}

$(document).ready(function() {
    ko.applyBindings( new AppModel());
});
