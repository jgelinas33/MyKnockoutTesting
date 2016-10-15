/// <reference path="MyDisplayPage.html" />
(function () {
    'use strict';

    function initializeJean(demoData) {
        var container = document.getElementById('bindingcontainer');

        var gridViewModel = new MyGridViewModel();

        for (var f = 0; f < demoData.MasterData.length; f++) {
            var masterDataItem = demoData.MasterData[f];
            var masterDataModelItem = new MasterRecordModel(masterDataItem.Id, masterDataItem.Title);
            gridViewModel.masterItems.push(masterDataModelItem);
        }

        for (var f = 0; f < demoData.DetailData.length; f++) {
            var detailDataItem = demoData.DetailData[f];
            var detailDataModelItem = new DetailRecordModel(detailDataItem.Id, detailDataItem.Title, detailDataItem.MasterId);
            gridViewModel.detailItems.push(detailDataModelItem);
        }

        ko.applyBindings(gridViewModel, container);

    }
    
    initializeJean(jeanDemoData)
}
)();