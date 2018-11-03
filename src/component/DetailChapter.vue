<template>
<div>
    TeSS
<div  v-for="data in chapterList">
  {{data[1]}}
                    

   

</div>
</div>
    
</template>
<script>
import axios from 'axios'
export default {
           name:'DetailChapter',
           props:['chapterId'],
           data() {
               chapterList :[]
           },
        
           method:{
               fetchEpisode(){
                        axios('https://www.mangaeden.com/api/chapter/'+this.chapterId)
                    .then( ({ data }) =>{
                       this.chapterList = data.images
                  })

           }
           },
           created(){
               this.fetchEpisode();
           }
           
}
    
</script>
<style>

</style>
