const Wishlist = function (elementId) {
    // This array will contain the items present in the wishlist
    this.items = []

    // We keep a reference to the element associated to the whishlist
    this.element = document.getElementById(elementId);
};

// TO IMPLEMENT
Wishlist.prototype.contains = function (itemId) {
    // This method should check in the `items` array if there's any item with the specified `itemId``, if yes, it should return true, otherwise it will return false;
   var found = "false";
    if(this.items.length == 0){
        return found;
    } else if(this.items.length > 0){
     this.items.forEach(ele =>{
    
        if(ele.id == itemId){
            found = "true";
        }
        })
        return found;
    }
    
    
}

// TO IMPLEMENT
Wishlist.prototype.add = function (item) {
    // This method should add the item to the `items` array, then call the `render` method. You need to make sure that the item can't be added twice.

    console.log(item);
    var itemsVal = this.contains(item.id);
    if(itemsVal == "true"){
        alert("item already added");
    } else {
        this.items.push(item);
        this.render();
    }


}
// TO IMPLEMENT
Wishlist.prototype.remove = function (itemId) {
    // This method should remove the item specified by `itemId` from the `items` array. Then, you need to call the render method
    console.log(itemId);
    this.items.splice(itemId,1);
    this.render();
};

Wishlist.prototype.render = function () {
    this.clear();

    this.items.forEach((i,index) => {
        const li = document.createElement('li');
        const remove = document.createElement('button');
        remove.innerHTML = 'Remove from wishlist';

        remove.addEventListener('click', (e) => {
        this.remove(index);
        //console.log(this.element.removeChild(li));
        
        });

        li.innerHTML = i.name;
        li.appendChild(remove);

        this.element.appendChild(li);
    });
}

Wishlist.prototype.clear = function () {
    this.element
        .querySelectorAll('li')
        .forEach((li) => {
            this.element.removeChild(li);
        });
}

const wishlist = new Wishlist('wishlist');

document
    .querySelectorAll('.add-to-wishlist')
    .forEach((e) => {
        e.addEventListener('click', (ev) => {
            const element = ev.target;
            wishlist.add({
                id: element.dataset.id,
                name: element.dataset.name
            });
        })
    });