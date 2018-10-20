<template>
<div class="row">
<div class="col-md-2">
<img :src="imageManga" class="img-fluid img-thumbnail">
</div>
<div class="col-md-2">
<h3>{{data.t}}</h3>
<p>alias : {{data.a}}</p>

<p>category : {{data.c}}</p>


</div>
</div>
</template>
<script>
    export default{
        name: "DetailManga",
        props :["data"],
       data(){
           return {
               imageManga :  'http://cdn.mangaeden.com/mangasimg/'+this.data.im,
            
            
          
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