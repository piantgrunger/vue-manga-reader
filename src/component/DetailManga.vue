<template>
<div>
  
  <router-link :to="{name:'chapter' ,params :{mangaId : this.data.i}}" >
<img :src="imageManga" class="card-img-top"  >
</router-link>
  <div class="card-body">

<h3 class="card-title">{{data.t}}</h3>
<p class="card-text">alias : {{data.a}}</p>

<p class="card-text">category : {{data.c}}</p>
</div>
</div>

</template>
<script>
    export default{
        name: "DetailManga",
        props :["data"],
        computed:{
                       imageManga(){
                         if (this.data.im !== null)
                         {
                              return  'http://cdn.mangaeden.com/mangasimg/'+this.data.im
                         } else {
                              return '/assets/image_not_found.jpg'
                         }

                       }  
    
        },
       
methods: {


  async getLink(){
    let response = await PostsService.downloadURL({
      imgURL : this.imageManga
    })
    console.log(response.data)
    this.link = response.data
  }
},
created() {
  // when the instance ist create call the method
  this.getLink();
},
       

    }
</script>