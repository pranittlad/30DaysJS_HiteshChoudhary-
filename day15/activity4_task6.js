const ItemManager = (function() {

    let items = [];

    return {
        
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added.`);
        },
      
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },
       
        listItems: function() {
            if (items.length > 0) {
                console.log('Items:', items);
            } else {
                console.log('No items found.');
            }
        }
    };
})();


ItemManager.addItem('Apple');
ItemManager.addItem('Banana');
ItemManager.listItems();
ItemManager.removeItem('Apple');
ItemManager.listItems();
ItemManager.removeItem('Orange');
