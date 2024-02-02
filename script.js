// Получите все кнопки с классом add-to-cart
let buttons = document.querySelectorAll(".add-to-cart");

// Добавьте обработчик события click на каждую кнопку
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Получите карточку, в которой находится кнопка
    let card = button.parentElement;
    // Получите название, описание, цену и изображение жидкости
    let title = card.querySelector("h3").innerText;
    let description = card.querySelector("p").innerText;
    let price = card.querySelector("p").innerText;
    let image = card.querySelector("img").src;
    // Добавьте жидкость в корзину
    addToCart(title, description, price, image);
  });
});

// Функция для добавления жидкости в корзину
function addToCart(title, description, price, image) {
  let item = document.createElement("div");
  item.className = "item";
  // Добавьте внутрь элемента div содержимое карточки жидкости
  item.innerHTML = `
      <img src="${image}" alt="${title}">
      <h3>${title}</h3>
      <p>${description}</p>
      <p>${price}</p>
      <button class="remove-from-cart">Удалить из корзины</button>`;
  let right = document.querySelector(".right");
  right.appendChild(item);
  item.querySelector(".remove-from-cart").addEventListener("click", function() {
      right.removeChild(item);
  });
}
