
<template>

    <div id='app'>
        <b-navbar toggleable="md" type="dark" variant="danger" sticky="true">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
<router-link to="/">
  <b-navbar-brand >Piant Manga Reader</b-navbar-brand>
</router-link>
  <b-collapse is-nav id="nav_collapse">


    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" v-model="search" v-on:change= "searchData"/>
       </b-nav-form>


      
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

<router-view></router-view>
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
                search:''
             
           
            }
        },
        methods: {
            searchData(){
                this.$router.push({name:'searchManga' ,params :{searchWord : this.search }})

            }
          
        },
        components:{
            Manga
        }
    }
</script>