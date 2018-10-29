<template>
<div>
      <div class="mt-5">
    <div class="container">
      <div class="card-columns">
        <div class="card"    v-for="data in manga">
                   <DetailManga 
                
                   :data = "data"

                   />  

                    
        </div>
        </div>
        </div>
        </div>
            <button class="btn btn-primary btn-more" @click="loadMore">Load More</button>

</div>
</template>
<script>
import DetailManga from './DetailManga.vue'
import axios from 'axios'

    export default {
        name:'Manga',
        props :['searchWord'],
        data(){
            return{
               allManga: [],
              manga:[],
              current :12
            }
        },
          watch: { 
      	searchWord: function(newVal, oldVal) { // watch it
           console.log('searchWord changed: ', newVal, ' | was: ', oldVal);
           if (newVal!=='' ||  oldVal!==''){
                 this.loadMore();
           } 
        }
          },

      computed:{
          filteredManga(){
              let self = this;
              return this.allManga.filter(manga => {
                  let search = self.searchWord;
                  if (search===undefined)
                  {
                      search = '' ;
                   }

                  return manga.t.toLowerCase().includes(search.toLowerCase()) || search === ""
              })
          }
      },
        methods: {
           
    loadMore () {
      this.manga = []
      this.current += 9
      this.filteredManga.map((item, key) =>  this.manga.length < this.current ? this.manga.push(item) : '')
    },
    
                fetchmanga(){
                    axios('https://www.mangaeden.com/api/list/0/'
                    
                    )
                    .then( ({ data }) =>{
                        this.allManga = data.manga;
                      
                              this.filteredManga.map((item, key) => {
                                  if(this.manga.length<this.current)
                                  {
                                    this.manga.push(item);
                                  }
                                 
                           })  
              
                    })
                }
                    /*
                fetch(`https://www.mangaeden.com/api/list/0/` ,{
                    method: 'GET'
                }).then(response =>response.json())
              
                .then(json =>this.allManga=json.manga)
              
            },
            */
         
      },
      mounted() {
          this.fetchmanga()
      },
  
      components: {
          DetailManga
      }

    }   

</script>
<style lang="scss" scoped>
/*
 * Card Columns Masonry - Bootstrap 4
 * https://codepen.io/JacobLett/pen/oZmWdd
 */
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) {  
  .card-columns {column-count: 3;}
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
 .card-columns {column-count: 3;}
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
   .card-columns {column-count: 3;} 
}
</style>