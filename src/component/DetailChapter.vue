<template>
<div>
  
                    
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
           }
           
}
    
</script>
<style>

</style>
