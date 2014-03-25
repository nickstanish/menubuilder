function AppModel() {
	var self = this;
 	self.ids = 1;
    self.sections = ko.observableArray([
            { title: 'title1', text: 'text1' , id: self.ids++},
            { title: 'title2', text: 'text2' , id: self.ids++},
            { title: 'title3', text: 'text3' , id: self.ids++}
        ]
    );
 
    self.addSection = function() {
        self.sections.push({ title: "title" + self.ids, text: "text" + self.ids, id: self.ids++ });
    };
 
    self.removeSection = function(section) {
        self.sections.remove(section);
    }
}

$(document).ready(function() {
    ko.applyBindings( new AppModel());
});
