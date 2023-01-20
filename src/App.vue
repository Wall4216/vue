<template>
<div>
<PostForm></PostForm>
<PostList v-bind:posts="posts"></PostList>
</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JS', body: 'Описание'},
        {id: 2, title: 'TS', body: 'Описание'},
        {id: 3, title: 'PHP', body: 'Описание'},
      ],
      title: '',
      body: '',
    }
  },
  name: "App",
  methods: {

    createPost()
    {
      const newPost =
          {
            id: Date.now(),
            title: this.title,
            body: this.body
          }
          this.posts.push(newPost);
          this.body = '';
          this.title = '';
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}




</style>