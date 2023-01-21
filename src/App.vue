<template>
<div>
  <h1 style="margin-left: 20px">Страница с постами</h1>
  <my-button style="margin-left: 20px" @click="showDialog">Создать пост</my-button>
  <my-dialog v-model:show="dialogVisiable"><PostForm @create="createPost"> </PostForm></my-dialog>

<PostList v-bind:posts="posts" @remove = "removePost"></PostList>

</div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostItem from "@/components/PostItem";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
export default {
  components: {
    MyButton,
    MyDialog,
    PostList, PostForm, PostItem
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'JS', body: 'Описание'},
        {id: 2, title: 'TS', body: 'Описание'},
        {id: 3, title: 'PHP', body: 'Описание'},
      ],
      dialogVisiable: false
    }
  },
  name: "App",
  methods: {

    createPost(post)
    {
      this.posts.push(post);
      this.dialogVisiable = false;
    },
    removePost(post)
    {
      this.posts = this.posts.filter(p=>p.id !== post.id)
    },
    showDialog()
    {
      this.dialogVisiable = true;
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