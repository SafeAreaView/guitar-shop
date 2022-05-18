class Catalog {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, img, price }) => {
      htmlCatalog += `
            <li class="catalog-element" >
            <span class="catalog-element__name">${name}</span>
            <img class="catalog-element__img" src="${img}">
            <span class="catalog-element__price">
            ₴ ${price.toLocaleString()} UAH
            </span>
            <button class="catalog-element__btn">Добавить в корзину</button>
            </li>
            `;
    });
    const html = `
        <ul class="catalog-container" >
        ${htmlCatalog};
        </ul>
        `;

    ROOT_CATALOG.innerHTML = html;
  }
}

const productsPage = new Catalog();
productsPage.render();
