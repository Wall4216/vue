<template>
  <div v-if="posts.length > 0">
  <h3 style="margin-top: 9px">Список</h3>
  <post-item
      :post="post"
      v-for="post in posts" :key="post.id" @remove="$emit('remove', post)">
  </post-item>
  </div>
  <h2 v-else style="color: green">
    Список постов пуст
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },

  name: "PostList"
}
</script>

<style scoped>

</style>