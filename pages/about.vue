<template>
  <div>
    <layout-banner>
      <template v-slot:breadcrumb>
        <span class="ps-3">{{ $t("about.about") }}</span>
      </template>
      <template v-slot:content>
        <span>{{ $t("about.bannerTitle") }}</span>
      </template>
    </layout-banner>

    <div class="container mx-auto px-4 mt-6">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ms-auto mr-auto px-4">
          <img alt="..." class="max-w-full rounded-lg shadow-lg" src="https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new2.jpg" />
        </div>
        <div class="w-full md:w-5/12 ms-auto mr-auto px-4">
          <div class="md:pr-12">
            <div class="text-pink-600 mt-3 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"><i class="gd-icons icon-book-bookmark gd-icons-lg"></i></div>
            <h3 class="text-3xl font-semibold">{{ $t("name") }}</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              {{ $t("about.description") }}
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 me-3"><i class="fas fa-fingerprint"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">{{ $t("about.point1") }}</h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 me-3"><i class="fab fa-html5"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">{{ $t("about.point2") }}</h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 me-3"><i class="far fa-paper-plane"></i></span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">{{ $t("about.point3") }}</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    head() {
      let name = this.$t("name");
      let title = this.$t("gallery.meta.title");
      let description = this.$t("gallery.meta.description");
      return {
        title: title,
        titleTemplate: "%s — " + name,
        meta: [
          {
            hid: "description",
            name: "description",
            content: description,
          },
          // Open Graph
          {
            hid: "og:site_name",
            property: "og:site_name",
            content: name,
          },
          {
            hid: "og:title",
            property: "og:title",
            content: title + " — " + name,
          },
          {
            hid: "og:description",
            property: "og:description",
            content: description,
          },
          // Twitter Card
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: title + " — " + name,
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: description,
          },
        ],
      };
    },
  };
</script>
