<template>
<div class="app">

  <h1 style="">Страница с постами</h1>
  <my-input
      v-model="searchQuery">
      placeholder="Поиск"
  </my-input>
  <div class="app__btns">
    <my-button style="" @click="showDialog">Создать пост</my-button>
  </div>
<my-select v-model="selectedSord" :options="sortOptions"></my-select>
  <my-dialog v-model:show="dialogVisiable"><PostForm @create="createPost"> </PostForm></my-dialog>

  <PostList v-bind:posts="sortedAndSearchedPosts" v-if="!isPostsLoading" @remove = "removePost"></PostList>
<div v-else>Идет загрузка</div>
<!--  <div class="page__wrapper">
    <div class="page" v-for="pageNumber in totalpage" :key="pageNumber" :class="{'current-page': page === pageNumber}" @click="changePage(pageNumber)">{{pageNumber}}}</div>
  </div>-->
</div>
  <div ref="observer" class="observer"></div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostItem from "@/components/PostItem";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from "axios"
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
export default {
  components: {
    MyInput,
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
      searchQuery: '',
      page: 0,
      limit: 10,
      totalpage: 0,
      sortOptions: [
        {value: 'title', name: 'По название'},
        {value: 'body', name: 'По описанию'}
      ]
    }
  },
  name: "App",
  methods: {
    changePage() {
      this.page = pageNumber
      this.$refs(this.$refs.observer)
      this.fetchsPosts()
    },
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
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          })
          this.totalpage = Math.ceil(response.headers['x-total-count']/this.limit);
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
    async loadMorePosts()
    {
      try {
        this.isPostsLoading = true;
        setTimeout( async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit,
            }
          })
          this.totalpage = Math.ceil(response.headers['x-total-count']/this.limit);
          this.posts = [...this.posts]
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
    let options = {
      rootMargin: '0px',
      threshold: 1.0
    }

    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },
  computed: {
    sortedPosts()
    {
      return [...this.posts].sort((post1, post2) => post1(this.selectedSord)?.localeCompare(post[this.selectedSord]))
    },
    sortedAndSearchedPosts()
    {
      return this.sortedPosts().filter(post => post.title.toLowerCase().includes(this.sortedQuery.toLowerCase()))
    }
  },

  watch: {
   /* page() {
      this.fetchsPosts()
    }*/
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
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}


</style>