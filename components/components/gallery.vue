<template>
  <div class="max-w-screen-sm mx-auto font-body">
    <section id="root" class=" bg-white rounded-lg p-8 shadow-lg m-5">
      <section id="silentbox-gallery">
        <h2 class="text-3xl font-bold mb-2">Gallery</h2>
        <p class="font-light mb-3">Items could be merged into groups that make galleries.</p>
        <silent-box :gallery="gallery"></silent-box>
      </section>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gallery: [
          {
            src: "https://silentbox.rocek.dev/images/image001.jpg",
            description: "Star Night Sky Ravine by Mark Basarab, from Unsplash.",
            alt: "Blue starry night photo.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://silentbox.rocek.dev/images/image002.jpg",
            description: "Corno Nero, Italy by Luca Zanon, from Unsplash.",
            alt: "Landscape photo of mountain with fog.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://silentbox.rocek.dev/images/image003.jpg",
            description: "Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.",
            alt: "Low angle photo of pine trees.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://silentbox.rocek.dev/images/image001.jpg",
            description: "Star Night Sky Ravine by Mark Basarab, from Unsplash.",
            alt: "Blue starry night photo.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://silentbox.rocek.dev/images/image002.jpg",
            description: "Corno Nero, Italy by Luca Zanon, from Unsplash.",
            alt: "Landscape photo of mountain with fog.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://silentbox.rocek.dev/images/image003.jpg",
            description: "Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.",
            alt: "Low angle photo of pine trees.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://silentbox.rocek.dev/images/image001.jpg",
            description: "Star Night Sky Ravine by Mark Basarab, from Unsplash.",
            alt: "Blue starry night photo.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://silentbox.rocek.dev/images/image002.jpg",
            description: "Corno Nero, Italy by Luca Zanon, from Unsplash.",
            alt: "Landscape photo of mountain with fog.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://silentbox.rocek.dev/images/image003.jpg",
            description: "Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.",
            alt: "Low angle photo of pine trees.",
            thumbnailWidth: "220px",
          },
        ],
      };
    },
  };
</script>

<style>
  .silentbox-item {
    max-height: 145px;
    border-radius: 0.5rem;
    margin-right: 1rem;
    overflow: hidden;
    cursor: pointer;
    display: inline-block;
    text-decoration: underline;
  }
</style>
