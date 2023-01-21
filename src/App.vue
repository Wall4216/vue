<template>
<div>
<PostForm @create="createPost"> </PostForm>
<PostList v-bind:posts="posts" ></PostList>

</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostList, PostForm, PostItem
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JS', body: 'Описание'},
        {id: 2, title: 'TS', body: 'Описание'},
        {id: 3, title: 'PHP', body: 'Описание'},
      ],

    }
  },
  name: "App",
  methods: {

    createPost(post)
    {
      this.posts.push(post);
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