

export class Api {

    getGoods() {
        return fetch('/api/goods')
        .then(r => {
            if (r.ok) {
                return r.json()
            }
            
        })
       
      
    }
    getСategories() {
        return fetch('/api/categories').then(r => {
            if (r.ok) {
                return r.json()
            }
        })
        
    }
   
}