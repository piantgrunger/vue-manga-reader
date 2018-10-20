<template>
    <div id='app'>
    <h1>{{title}}</h1>
    <Manga        />
    </div>
    </div>
</template>
<script>
    import Manga  from './component/Manga.vue'
    export default {
        name: 'app',
        data() {
            return {
                title: 'Manga List',
           
            }
        },
        methods: {
          
        },
        components:{
            Manga
        }
    }
</script>