export class Api {
  getGoods() {
    return fetch("/api/goods").then((r) => {
      if (r.ok) {
        return r.json();
      }
    });
  }
  getСategories(id) {
    return fetch("/api/categories").then((r) => {
      if (r.ok) {
        return r.json();
      }
    });
  }
  getPopularGoods() {
    return fetch(`/api/popular_categories`).then((r) => {
      if (r.ok) {
        return r.json();
      }
    });
  }
  changeCart(data, method) {
    return fetch("/api/cart", {
      method: method,
      // body: JSON.stringify(data),
      data: data
    });
  }
}