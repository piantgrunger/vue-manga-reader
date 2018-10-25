
<template>
<div class="container">
      <div     v-for="data in allEpisode">
          {{data[0]}} - {{data[2]}}

                    
        </div>


    </div>    
</template>

<script>
import axios from 'axios'
export default {
           name:'Episode',
           props:['mangaId'],
     
        data() {
            return {
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

          
                methods: {
                          fetchepisode(){
                    axios('https://www.mangaeden.com/api/manga/'+this.mangaId)
                    .then( ({ data }) =>{
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
