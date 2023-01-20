<template>
  <div>
    <div>
      <button v-on:click="addLikes">Like</button>
      <button v-on:click="addDislike"> Dislike</button>
    </div>
    <div>Кол-во лайков: {{ likes }}</div>
    <div>Кол-во дизлайков: {{ dislikes }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 5,
    }
  },
  name: "App",
  methods: {
    addLikes(){
      this.likes +=1;
    },
    addDislike(){
      this.dislikes +=1;
    }
  }
}
</script>

<style scoped>

</style>