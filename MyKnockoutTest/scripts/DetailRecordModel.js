function DetailRecordModel(id, title, masterid)
{
    var self = this;

    self.id = ko.observable();
    self.title = ko.observable();
    self.masterid = ko.observable();

    self.id(id);
    self.title(title);
    self.masterid(masterid);

    self.detailRecord = ko.computed(function () {
        return "ID: " + self.id() + " Title: " + self.title() + " MasterID: " + self.masterid();
    }, this);

};