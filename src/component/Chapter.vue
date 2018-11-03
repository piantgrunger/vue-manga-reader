
<template>
<div class="container">

   <div class="text-center">
           <h1>{{manga.title}}</h1>
           <h2>Author: {{manga.author}}</h2>
           
           <br>
           <br>
    <img :src="imageManga" class="rounded" >
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    <br>
    <br>
  
    
    <p>{{manga.description}}</p>
    </div> 
    Chapter List:
      <div     v-for="data in episode">
      <router-link :to="{name:'detailChapter' ,params :{mangaId : data[2]}}" >      {{data[0]}} - {{data[2]}}
      </router-link>

                    
        </div>
        <br>
                    <button class="btn btn-primary btn-more" @click="loadMore">Load More Episode</button>


    </div>    
</template>

<script>
import axios from 'axios'
export default {
           name:'Chapter',
           props:['mangaId'],
     
        data() {
            return {
                manga :[],
                allEpisode: [],
             episode:[],
              current :10,

            }
            },
                 watch: { 
      	mangaId: function(newVal, oldVal) { // watch it
           console.log('mangaId changed: ', newVal, ' | was: ', oldVal);
                       this.fetchepisode();
         
        }
          },
           computed:{
                       imageManga(){
                         if (this.manga.image !== null)
                         {
                              return  'http://cdn.mangaeden.com/mangasimg/'+this.manga.image
                         } else {
                              return '/assets/image_not_found.jpg'
                         }

                       }  
    
        },
       

          
                methods: {
                      loadMore () {
      this.episode = []
      this.current += 10
      this.allEpisode.map((item, key) =>  this.episode.length < this.current ? this.episode.push(item) : '')
    },
                          fetchepisode(){
                    axios('https://www.mangaeden.com/api/manga/'+this.mangaId)
                    .then( ({ data }) =>{
                        this.manga = data
                        this.allEpisode = data.chapters
                         this.allEpisode.map((item, key) => {
                                  if(this.episode.length<this.current)
                                  {
                                    this.episode.push(item);
                                  }
                                 
                           })  
              
                    })
          
                }
                } ,
                mounted(){
                  
                    this.fetchepisode();
                }     

}
</script>

<style>

</style>
