class ticket {
    constructor(v, c) {
        this.value = v;
        this.quantity = c;
    }
}

function deliverMoney() {
    var t = document.getElementById("money");
    money = parseInt(t.value);

    for (var bi of box) {

        if (money > 0) {
            div = Math.floor(money / bi.value);

            if (div > bi.quantity) {
                papers = bi.quantity;
            } else {
                papers = div;
            }

            delivered.push(new ticket(bi.value, papers));
            money = money - (bi.value * papers);
        }

    }

    if (money > 0) {
        result.innerHTML = "No tengo esa cantidad de dinero";
    } else {
        for (var e of delivered) {
            if (e.quantity > 0) {
                result.innerHTML += e.quantity + " tickets of $" + e.value + "<br />";
            }
        }
    }
}

var box = [];
var delivered = [];
box.push(new ticket(100, 5));
box.push(new ticket(50, 10));
box.push(new ticket(20, 5));
box.push(new ticket(10, 10));
box.push(new ticket(5, 5));
var money = 0;
var div = 0;
var papers = 0;

var result = document.getElementById("result")
var b = document.getElementById("Retirar");
b.addEventListener("click", deliverMoney);
