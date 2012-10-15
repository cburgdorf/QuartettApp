Ext.define("QuartettApp.view.GameView", {
    extend: 'Ext.Container',
    xtype: 'gameview',
    requires: [
        'Ext.Container',
        'QuartettApp.helper.Helper'
    ],
    config: {
        cardTemplate: new Ext.XTemplate(
            '<p>Kids: ',
            '<tpl for=".">',       // process the data.kids node
            '<p>{#}. {name}</p>',  // use current array index to autonumber
            '</tpl></p>'
        ),
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Running Game...'
            }

        ]
    },
    initialize: function(){

        QuartettApp.helper.Helper.toArrayOfKeyValuePairs();

        this._propertyBox = this.add({
            html: 'This is our running game, showing the topmost card'
        });

        this.showCard();
    },
    showCard: function(card){
        var data = {
            name: 'Don Griffin',
            title: 'Senior Technomage',
            company: 'Sencha Inc.'
        };

        var template = this.getCardTemplate();
        var html = template.apply(data);
        this._propertyBox.setHtml(html);
    }

});
