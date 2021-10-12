<template>
    <div class="py-6 px-4 ">
        <button v-for="locale in availableLocales" :key="locale.code" @click="$i18n.setLocale(locale.code)" class="-m-2 p-2 flex items-center">
            <img :src="require(`~/static/images/flags/${locale.icon}.svg`)" alt="" class="w-6 h-5 block flex-shrink-0 shadow" />       
            <!-- &nbsp; {{ locale.name }} -->
            <span class="sr-only">, change the language</span>
        </button>
    </div>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>