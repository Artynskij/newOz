export class Api {
  getGoods(id) {
    
    return fetch(`/api/goods?${id}`).then((r) => {
      if (r.ok) {
        return r.json();
      }
    });
  }
  getСategories(id) {
    return fetch(`/api/categories?${id}`).then((r) => {
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
  getСart() {
    return fetch("/api/cart")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      
  }
  changeCart(data, method) {
    return fetch("/api/cart", {
      method: method,
      body: JSON.stringify(data)
    });
  }
}