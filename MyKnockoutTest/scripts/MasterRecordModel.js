function MasterRecordModel(id, title)
{
    var self = this;

    self.id = ko.observable();
    self.title = ko.observable();

    self.id(id);
    self.title(title);

    self.masterRecordString = ko.computed(function () {
        return "ID: " + self.id() + " Title: " + self.title();
    }, this);

    

    
}