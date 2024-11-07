<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">togglePosts</button>
    <button @click="posts.pop()">delete posts</button>
  </div>
</template>


<script>
  import { ref } from 'vue'

  // component imports
  import PostList from '../components/PostList.vue'

  export default {
    name: 'Home',
    components: { PostList },
    setup() {  
      const posts = ref([
        { title: 'welcome to the blog', body: 'Lorem ipsum', id: 1 },
        { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2 },
      ])s

      const showPosts = ref(true)
      
      return { posts, showPosts }
    },
  }
</script>
   