
//Let's derive from the card and do some transformation for displayValue and displayName
quartett.CarCard = function(options) {
    quartett.Card.prototype.constructor.call(this, options);
};

quartett.CarCard.prototype = Object.create(quartett.Card.prototype);

quartett.CarCard.prototype.getDisplayValueFor = function(property, value){

    if(property === 'price'){
        return value + ' €';
    }
    return value;
};

quartett.CarCard.prototype.getDisplayNameFor = function(property){
    return property.charAt(0).toUpperCase() + property.slice(1);
};


quartett.data = {
    getCards: function(){
        return [
            new quartett.CarCard([
                { name: { value: 'Continental GT'}},
                { carmaker: { value: 'Bentley' }},
                { horsepower: { value: 610 }},
                { speed: { value: 326 } },
                { gasoline: { value: 16.6 }},
                { price: { value: 205751 }},
                { _image: { value: 'Bentley_Continental_GT_Speed_20090720_front.JPG' }}
            ]),
            new quartett.CarCard([
                { name: { value: 'Gallardo Spyder'}},
                { carmaker: { value: 'Lamborghini' }},
                { horsepower: { value: 520 }},
                { speed: { value: 314 } },
                { gasoline: { value: 17 }},
                { price: { value: 181475 }},
                { _image: { value: 'Yellow_Lamborghini_Gallardo_edit2.jpg' }}
            ]),
            new quartett.CarCard([
                { name: { value: '300C SRT8 6.1'}},
                { carmaker: { value: 'Chrysler' }},
                { horsepower: { value: 431 }},
                { speed: { value: 265 } },
                { gasoline: { value: 14 }},
                { price: { value: 61290 }},
                { _image: { value: 'Chrysler-300C.jpg' }}
            ]),
            new quartett.CarCard([
                { name: { value: 'IS F'}},
                { carmaker: { value: 'Lexus' }},
                { horsepower: { value: 423 }},
                { speed: { value: 270 } },
                { gasoline: { value: 11.4 }},
                { price: { value: 69600 }},
                { _image: { value: '09_Lexus_IS-F_Mercury_Metallic.jpg' }}
            ]),
            new quartett.CarCard([
                { name: { value: '612 Scaglietti' }},
                { carmaker: { value: 'Ferrari' }},
                { horsepower: { value: 540 }},
                { speed: { value: 320 } },
                { gasoline: { value: 20.7 }},
                { price: { value: 268300 }},
                { _image: { value: 'Ferrari_612_Scaglietti_Meilenwerk.jpg' }}
            ]),
            new quartett.CarCard([
                { name: { value: '750 Li' }},
                { carmaker: { value: 'BMW' }},
                { horsepower: { value: 407 }},
                { speed: { value: 250 } },
                { gasoline: { value: 11.4 }},
                { price: { value: 93000 }},
                { _image: { value: 'BMW-7-Series-Wallpaper-05-1600x1200.jpg' }}
            ]),
            new quartett.CarCard([
                { name: { value: 'Roadster V6' }},
                { carmaker: { value: 'Morgan' }},
                { horsepower: { value: 226 }},
                { speed: { value: 216 } },
                { gasoline: { value: 9.8 }},
                { price: { value: 56833 }},
                { _image: { value: 'morgan-v6-roadster-photo11.jpg' }}
            ]),
            new quartett.CarCard([
                { name: { value: '207 75' }},
                { carmaker: { value: 'Peugeot' }},
                { horsepower: { value: 73 }},
                { speed: { value: 170 } },
                { gasoline: { value: 6.3 }},
                { price: { value: 12400 }},
                { _image: { value: 'peugeot-207-peu_207_09_5t_1.jpg' }}
            ])
        ]
    }
}