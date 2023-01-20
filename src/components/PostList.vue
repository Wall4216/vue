<template>
  <div class="post">

  </div>
</template>

<script>
export default {
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
.post{
  padding: 15px;
  border: 2px black solid;
  margin-top: 15px;
}
</style>