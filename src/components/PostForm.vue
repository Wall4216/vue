<template>
  <div>
    <form style="padding: 20px" @submit.prevent>
      <h4>Создание поста</h4>
      <input v-model="post.title"   class="input" type="text" placeholder="Название">
      <input v-model="post.body"  class="input" type="text" placeholder="Описание">
      <button  @click="createPost" class="btn" >Создать</button>
    </form>


  </div>
</template>

<script>
export default {
  data()
  {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {

    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      }
    }
  },
  name: "PostForm"
}
</script>

<style scoped>
.input
{
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>