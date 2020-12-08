//create a class for items - define a constructor
function item(id, name, price)
{
    this.id = id;
    this.name = name;
    this.price = price;
}

//create an array of items
var items = [];

items[0] = new item(1, "A.C.E Official Lightstick", 29.99);
items[1] = new item(5, "A.C.E 4th mini album HJZM: The Butterfly Phantasy", 25.99);
items[2] = new item(7, "Astro Official Lightstick Ver 2", 29.99);
items[3] = new item(11, "Astro 7th mini album Gateway [Random Ver]", 25.99);
items[4] = new item(12, "Ateez Official Lightstick", 29.99);

items[5] = new item(19, "Ateez 5th mini album Zero: Fever Pt. 1 [Random Ver]", 25.99);
items[6] = new item(20, "Blackpink Official Lightstick", 29.99);
items[7] = new item(24, "Blackpink 1st Full Album The Album [Random Ver]", 29.99);

items[8] = new item(26, "BTS Official Lightstick Map of the Soul Special Edition", 39.99);
items[9] = new item(33, "BTS 5th Full Album BE (Deluxe Edition)", 30.99);

items[10] = new item(34, "CIX Official Lightstick", 29.99);

items[11] = new item(37, "CIX 3rd mini album HELLO Chapter 3: Hello, Strange Time [Random Ver]", 25.99);
items[12] = new item(38, "EXO Official Lightstick Ver 3", 29.99);

items[13] = new item(43, "EXO 6th Full Album OBSESSION [Random Ver]", 25.99);
items[14] = new item(44, "(G)I-DLE Official Lightstick", 29.99);

items[15] = new item(47, "(G)I-DLE 3rd mini album I TRUST [Random Ver]", 25.99);
items[16] = new item(49, "GOT7 Official Lightstick Ver 2", 29.99);

items[17] = new item(53, "GOT7 4th Full Album Breath of Love: Last Piece [Random Ver]", 25.99);
items[18] = new item(54, "IKON Official Lightstick", 29.99);

items[19] = new item(58, "IKON 3rd mini album i DECIDE [Random Ver]", 25.99);
items[20] = new item(59, "ITZY Official Ring Light", 29.99);

items[21] = new item(62, "ITZY 3rd mini album Not Shy [Random Ver]", 25.99);

items[22] = new item(64, "Monsta X Official Lightstick Ver 2", 29.99);

items[23] = new item(70, "Monsta X 3rd Full Album Fatal Love [Random Ver]", 25.99);
items[24] = new item(71, "NCT Official Lightstick", 29.99);

items[25] = new item(73, "NCT 2020 Resonance Pt 1 [Random Ver]", 25.99);
items[26] = new item(73.1, "NCT 2020 Resonance Pt 2 [Random Ver]", 25.99);

items[27] = new item(76, "NCT 127 2nd Full Album Neo Zone [Random Ver]", 25.99);
items[28] = new item(79, "NCT DREAM 4th mini album Reload'[Random Ver]", 25.99);
items[29] = new item(80, "Red Velvet Official Lightstick", 29.99);


items[30] = new item(84, "Red Velvet 3rd Repackage Album The ReVe Festival: Finale [Random Ver]", 25.99)
items[31] = new item(85, "RV - Irene & Seulgi 1st mini album Monster [Random ver]", 25.99);

items[32] = new item(87, "Seventeen Official Lightstick Ver 2", 29.99);
items[33] = new item(93, "Seventeen 2nd Special mini album Semicolon [Random Ver]", 25.99);
items[34] = new item(94, "SHINee Official Lightstick", 29.99);

items[35] = new item(96, "SHINee 6th mini album The Story of Light EP. 1", 25.99);
items[36] = new item(97, "SHINee 6th Full Album The Story of Light EP. 2", 25.99);
items[37] = new item(98, "SHINee 6th Full Album The Story of Light EP. 3", 25.99);
items[38] = new item(100, "Twice Official Lightstick Ver 2", 29.99);

items[39] = new item(104, "Twice 2nd Full Album Eyes wide open [Random Ver]", 25.99);

items[40] = new item(105, "TXT Official Lightstick", 29.99);
items[41] = new item(109, "TXT 3rd mini album Minisode 1: Blue Hour [Random Ver]", 25.99);
items[42] = new item(110, "Victon Official Lightstick", 29.99);

items[43] = new item(113, "Victon 2nd Single Album MayDay [Random Ver]", 22.99);

items[44] = new item(120, "WayV Official Lightstick", 29.99);
items[45] = new item(122, "WayV 2nd mini album Take Over the Moon", 25.99);

items[46] = new item(123, "WayV 1st Full Album Awaken the World [Random Ver]", 25.99);

//function to update the number of items in our shopping cart
function updateCheckout()
{
    document.getElementById("cart-link").innerHTML = "Checkout (" + sessionStorage.length + ")";
}

//function to get the ID of the item
function getID(arg)
{
    var counter = 0;
    while( items[counter].name != arg)
    {
        counter++;
    }

    return items[counter].id;
}

//function to add items to shopping cart
function add(arg)
{
    sessionStorage.setItem(items[arg].name, items[arg].price);
    updateCheckout();
}

//function to remove items from cart
function remove(arg)
{
    sessionStorage.removeItem(arg);
    displayCart(); //display remaining items in cart
    updateCheckout(); //update number of items in cart
}

//function to display the cart
function displayCart()
{
    var total = 0;
    var output = "<table class='table table-hover'>";

    //check to see if the cart is empty
    if( sessionStorage.length == 0)
    {
        document.getElementById("cart").innerHTML = "<h3>Cart is empty!</h3>";
        document.getElementById("total").innerHTML = "<h3>TOTAL: " + total + "</h3>";
    }
    else
    {
        output += "<tr><th>Image</th><th>Name</th><th>Price</th><th>Delete</th>"; //header row

        for( var x = 0; x < sessionStorage.length; x++)
        {
            var key = sessionStorage.key(x); //get key
            output += "<tr><td><img src='images/img"+ getID(key) +".jpg' width= '70px' height= '60px'></td>"; //image of item
            output += "<td>" + key + "</td><td>" + sessionStorage.getItem(key) + "</td>"; //get the name and price of item
            output += "<td><input type='button' class='btn btn-primary' value='Delete' onclick='remove(\"" + key + "\") '></td></tr>"; //get delete button and configure arg for remove function
            total += parseFloat(sessionStorage.getItem(key));
        }

        //output
        document.getElementById("cart").innerHTML = output;
        document.getElementById("total").innerHTML = "<h3>TOTAL: " + total.toFixed(2) + "</h3>";
    }
    
}