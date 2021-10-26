<template>
  <div class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true"></div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-pink-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Detect your table number
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Scan the QR Code next to you in order to detect the table number.
                </p>

                <div class="mt-4">
                  <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
                    <div v-if="validationSuccess" class="validation-success">
                      <span class=" drop-shadow">Table: #{{ result }} has been detected</span>
                    </div>

                    <div v-if="validationFailure" class="validation-failure">
                      This is NOT a valid QR-CODE!
                    </div>

                    <div v-if="validationPending" class="validation-pending">
                      Detecting your table number...
                    </div>
                  </qrcode-stream>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm">
            Detect
          </button>
          <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    data() {
      return {
        isValid: undefined,
        camera: "auto",
        result: null,
      };
    },

    computed: {
      validationPending() {
        return this.isValid === undefined && this.camera === "off";
      },

      validationSuccess() {
        return this.isValid === true;
      },

      validationFailure() {
        return this.isValid === false;
      },
    },

    methods: {
      ...mapActions(["setTable"]),
      onInit(promise) {
        promise.catch(console.error).then(this.resetValidationState);
      },

      resetValidationState() {
        this.isValid = undefined;
      },

      async onDecode(content) {
        this.turnCameraOff();

        await this.timeout(1000);

        if (content.startsWith("https://g-d.app/")) {
          const tableNumber = content.split("=").pop();
          if (this.inRange(tableNumber, 1, 50)) {
            this.result = tableNumber;
            this.isValid = true;
            await this.timeout(1000);
            this.setTable(tableNumber);

            this.$swal.fire({
              title: "Your table is set: #" + tableNumber,
              text: "Discover and order from our menu.",
              timer: 4000,
              timerProgressBar: true,
            });
          } else this.isValid = false;
        } else this.isValid = false;

        await this.timeout(1000);

        this.turnCameraOn();
      },

      turnCameraOn() {
        this.camera = "auto";
      },

      turnCameraOff() {
        this.camera = "off";
      },

      inRange(x, min, max) {
        return (x - min) * (x - max) <= 0;
      },

      timeout(ms) {
        return new Promise((resolve) => {
          window.setTimeout(resolve, ms);
        });
      },
    },
  };
</script>

<style scoped>
  .validation-success,
  .validation-failure,
  .validation-pending {
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: rgba(36, 36, 36, 0.5);
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
    padding: 10px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
  .validation-success {
    color: rgb(77, 255, 77);
  }
  .validation-failure {
    color: red;
  }
</style>
