<template>
  <h3>Список</h3>
  <post-item
      :post="post"
      v-for="post in posts">
  </post-item>
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