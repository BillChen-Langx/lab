'use strict';

var product = {
    'name': 'car',
    'model': 'm1',
    'serial': 213
};

var test = function(){
    var property;
    for(property in product)
    {
        if(typeof product[property] === 'string' ){
          document.write(product[property]);
        };
    }
};
