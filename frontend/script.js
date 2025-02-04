const { createApp } = Vue;

createApp({
    data() {
        return {
            posts: [],
            formData: {
                title: '',
                content: ''
            }
        };
    },
    methods: {
        
    },
    mounted() {
    }
}).mount('#app');