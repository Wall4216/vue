<template>
  <div>
    <form style="padding: 20px" @submit.prevent>
      <h4>Создание поста</h4>
      <input @input="title=$event.target.value" v-bind:value="title" class="input" type="text" placeholder="Название">
      <input @input="body=$event.target.value" v-bind:value="body" class="input" type="text" placeholder="Описание">
      <button class="btn" @click="createPost">Создать</button>
    </form>
    <div class="post">
      <div class="post" v-for="post in posts">
        <div><strong>Название:</strong>{{ post.title }}</div>
        <div><strong>Описание:</strong>{{ post.body }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
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

.post{
  padding: 15px;
  border: 2px black solid;
  margin-top: 15px;
}

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