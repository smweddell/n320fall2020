Vue.component("book-view", {
    props: ["book"],
    template: "<h1>{{ book }} 📕😊</h1>"
})

let app = new Vue ({
    el:"#app",
    data: {
        
    }
})