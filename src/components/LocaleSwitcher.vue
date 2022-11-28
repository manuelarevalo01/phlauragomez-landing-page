<template>
  <div>
    <select name="locale" id="locale" v-model="$i18n.locale">
      <option v-for="locale in locales" :key="locale.key" :value="locale.key">
        {{ locale.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data: () => ({
    locales: [
      { key: 'es', label: 'Español' },
      { key: 'en', label: 'English' },
    ],
  }),
};
</script>
