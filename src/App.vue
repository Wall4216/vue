<template>
<div class="app">

  <h1 style="">Страница с постами</h1>
  <div class="app__btns">
    <my-button style="" @click="showDialog">Создать пост</my-button>
  </div>
<my-select v-model="selectedSord" :options="sortOptions"></my-select>
  <my-dialog v-model:show="dialogVisiable"><PostForm @create="createPost"> </PostForm></my-dialog>

  <PostList v-bind:posts="sortedPosts" v-if="!isPostsLoading" @remove = "removePost"></PostList>
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
import MySelect from "@/components/UI/MySelect";
export default {
  components: {
    MySelect,
    MyButton,
    MyDialog,
    PostList, PostForm, PostItem
  },
  data() {
    return {
      posts: [],
      dialogVisiable: false,
      isPostsLoading: false,
      selectedSord: '',
      sortOptions: [
        {value: 'title', name: 'По название'},
        {value: 'body', name: 'По описанию'}
      ]
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
    },

  },
  mounted() {
    this.fetchsPosts();
  },
  computed: {
    sortedPosts()
    {
      return [...this.posts].sort((post1, post2) => post1(this.selectedSord)?.localeCompare(post[this.selectedSord]))
    }
  },

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
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}


</style>