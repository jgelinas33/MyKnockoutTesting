function MyGridViewModel() {

    var self = this;
    
    self.chosenDetail = ko.observable();
    self.masterItems = ko.observableArray();
    self.detailItems = ko.observableArray();
    self.chosenMasterItem = ko.observable();

    
    self.ItemChosen = function (masterItem) {

        var chosenDetail = self.detailItems().filter(function (detailItem) { return detailItem.masterid() === masterItem.id() });
        if(chosenDetail.length > 0)
        {
            self.chosenDetail(chosenDetail[0]);
        }

    };
    
}