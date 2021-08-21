// Global Variables
const bestPrice = document.getElementById('best-price');

const memoryCost = document.getElementById('extra-memory-cost');
const storageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivery-charge');

const allCost = document.getElementById('total-price');
const total = document.getElementById('total');
const promoInput = document.getElementById('promo-input');

// function for Total Price
function totalPrice() {
  const totalCost =
    parseInt(bestPrice.innerText) +
    parseInt(memoryCost.innerText) +
    parseInt(storageCost.innerText) +
    parseInt(deliveryCharge.innerText);
  allCost.innerText = totalCost;
  return totalCost;
}

// memory price calculator
function memoryPrice(id, price) {
  document.getElementById(id).addEventListener('click', function () {
    memoryCost.innerText = price;
    totalPrice();
    total.innerText = totalPrice();
  });
}
memoryPrice('free-memory', '0');
memoryPrice('cost-memory', '180');

// storage price calculator
function storagePrice(id, price) {
  document.getElementById(id).addEventListener('click', function () {
    storageCost.innerText = price;
    totalPrice();
    total.innerText = totalPrice();
  });
}
storagePrice('ssd-256gb', '0');
storagePrice('ssd-512gb', '100');
storagePrice('ssd-1tb', '180');

// delivery charge calculator
function deliveryCostCalc(id, price) {
  document.getElementById(id).addEventListener('click', function () {
    deliveryCharge.innerText = price;
    totalPrice();
    total.innerText = totalPrice();
  });
}
deliveryCostCalc('free-delivery', '0');
deliveryCostCalc('cost-delivery', '20');

// total calculation with promo code
function promoCode() {
  const promoValue = promoInput.value;
  if (promoValue == 'stevekaku') {
    const discount = (parseInt(allCost.innerText) * 20) / 100;
    total.innerText = parseInt(allCost.innerText) - discount;
    promoInput.value = '';
  } else {
    alert('Please Enter Correct Promo Code');
  }
}
