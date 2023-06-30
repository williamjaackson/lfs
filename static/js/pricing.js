function calculatePrice() {
    var weight = parseFloat(document.getElementById('weight').value);
    var price;

    if (weight > 0 && weight <= 9.9) {
      price = 0.5;
    } else if (weight >= 10.0 && weight <= 24.9) {
      price = 1.0;
    } else if (weight >= 25.0 && weight <= 49.9) {
      price = 2.0;
    } else {
      price = "Cannot Ship";
      document.getElementById('priceDiv').style.display = "none";
      document.getElementById('error').style.display = "block";
      return
    }

    document.getElementById('price').innerText = price;
    document.getElementById('priceDiv').style.display = "block";
    document.getElementById('error').style.display = "none";
  }