import Vue from 'vue';
import VueHtmlToPaper from 'vue-html-to-paper';

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css',
  ],
  timeout: 1000,
  autoClose: true,
  windowTitle: "QR Code"
}

Vue.use(VueHtmlToPaper, options);
