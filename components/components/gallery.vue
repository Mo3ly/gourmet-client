<template>
  <div class="max-w-screen-lg mx-auto font-body">
    <section class=" bg-white rounded-lg p-8 shadow-lg m-5">
      <section>
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
            src: "https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new1.jpg",
            description: "GD Gallery Desc.",
            alt: "GD Gallery.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new2.jpg",
            description: "GD Gallery Desc.",
            alt: "GD Gallery.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new3.jpg",
            description: "GD Gallery Desc.",
            alt: "GD Gallery.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new4.jpg",
            description: "GD Gallery Desc.",
            alt: "GD Gallery.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new5.jpg",
            description: "GD Gallery Desc.",
            alt: "GD Gallery.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new6.jpg",
            description: "GD Gallery Desc.",
            alt: "GD Gallery.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new7.jpg",
            description: "GD Gallery Desc.",
            alt: "GD Gallery.",
            thumbnailWidth: "220px",
          },
          {
            src: "https://www.g-d.qa/wp-content/uploads/2021/07/gallery_new8.jpg",
            description: "GD Gallery Desc.",
            alt: "GD Gallery.",
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
