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
  getPopularGoods(id) {
    return fetch(`/api/popular_categories??ids=${id}`).then((r) => {
      if (r.ok) {
        return r.json();
      }
    });
  }
}
