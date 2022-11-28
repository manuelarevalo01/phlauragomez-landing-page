<template>
  <div class="User">
    <div class="information">
      <LocaleSwitcher />
      <br/>
      <h1 v-html="$t('user.title')"></h1>
      <i class="ion ion-person-circle-outline"></i>
      <label for="name" v-html="$t('user.name')"></label>
      <input id="name" type="text" name="user" v-model="auth.name" readonly>
      <i class="ion ion-lock-open"></i>
      <label for="password" v-html="$t('user.password')"></label>
      <input type="text" name="password" v-model="auth.password" readonly>
      <h2> {{ $tc('user.hobby', likes.length ) }}</h2>
      <ul v-for="(like, index) in likes" :key="index">
        <li>{{ like }}</li>
      </ul>
      <h2>Usuarios</h2>
      <ul v-for="(user, index) in users" :key="index">
        <li>{{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import LocaleSwitcher from './LocaleSwitcher.vue';

export default {
  name: 'User',
  components: {
    LocaleSwitcher,
  },
  setup() {
    const store = useStore();
    const users = ref([]);

    onMounted(async () => {
      users.value = await store.dispatch('user/getUsers');
    });

    return {
      auth: computed(() => store.getters['user/auth']),
      likes: ['video juegos', 'Guitarra', 'futbol', 'lectura'],
      users,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
