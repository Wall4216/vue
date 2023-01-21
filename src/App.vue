<template>
<div class="app">

  <h1 style="">Страница с постами</h1>
  <my-button style="margin-left: 20px" @click="showDialog">Создать пост</my-button>
  <my-dialog v-model:show="dialogVisiable"><PostForm @create="createPost"> </PostForm></my-dialog>

<PostList v-bind:posts="posts" v-if="!isPostsLoading" @remove = "removePost"></PostList>
<div v-else>Идет загрузка</div>
</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostItem from "@/components/PostItem";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from "axios"
export default {
  components: {
    MyButton,
    MyDialog,
    PostList, PostForm, PostItem
  },
  data() {
    return {
      posts: [],
      dialogVisiable: false,
      isPostsLoading: false,
    }
  },
  name: "App",
  methods: {

    createPost(post)
    {
      this.posts.push(post);
      this.dialogVisiable = true;
    },
    removePost(post)
    {
      this.posts = this.posts.filter(p=>p.id !== post.id)
    },
    showDialog()
    {
      this.dialogVisiable = true;
    },
    async fetchsPosts()
    {
      try {
        this.isPostsLoading = true;
        setTimeout( async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          this.posts = response.data
          this.isPostsLoading = false;
        }, 500)

      }
      catch (e)
      {
        alert('Ошибка')
      } finally {

      }
    }
  },
  mounted() {
    this.fetchsPosts();
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}




</style>