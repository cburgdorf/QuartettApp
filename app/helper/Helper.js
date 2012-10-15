Ext.define("QuartettApp.helper.Helper", {
    singleton: true,
    xtype: "helper",
    toArrayOfKeyValuePairs: function(object){
        var tempArray = [];
        Ext.Object.each(function(key, value){
            tempArray.push({
                key: key,
                value: value
            });
        });
        return tempArray;
    }
});
