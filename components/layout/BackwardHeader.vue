<template>  
    <div>
        <header>
            <div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 sticky top-0 left-0 right-0 z-30">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center">
                        <button class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-pink-500 -bg-pink-600 border-pink-500 hover:text-pink-400 focus:outline-none" @click="backward">
                            <i class="gd-icons icon-double-left"/>
                        </button>
                    </div>

                    <div class="flex-1 flex items-center justify-center">
                        <div class="flex-shrink-0 flex items-center">
                            <router-link :to="'/'">
                                <img class="block  w-20" src="~/static/images/logo/logo-text.svg" alt="Gouremnt logo" />
                            </router-link>
                        </div>    
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <uiLanguageSwitcher/>
                    </div>
                </div>
            </div>
        </header>  
    </div>
</template>

<script>
export default {
methods: {
      backward() {
         window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },
    },
};
</script>