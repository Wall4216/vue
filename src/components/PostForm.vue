<template>
  <div>
    <form style="padding: 20px" @submit.prevent>
      <h4>Создание поста</h4>
      <my-input v-model:value="post.title"    type="text" placeholder="Название"></my-input>
      <my-input v-model:value="post.body"  type="text" placeholder="Описание"></my-input>
      <my-button  @click="createPost" class="btn" >Создать</my-button>
    </form>


  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";
export default {
  components: {MyInput, MyButton},
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