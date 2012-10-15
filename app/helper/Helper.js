Ext.define("QuartettApp.helper.Helper", {
    singleton: true,
    xtype: "helper",
    toArrayOfKeyValuePairs: function(value){
        var tempArray = [];
        Ext.Object.each(value, function(key, val){
            tempArray.push({
                key: key,
                value: val
            });
        });
        return tempArray;
    }
});
