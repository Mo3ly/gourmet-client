<template>
  <div>
    <layout-banner>
      <template v-slot:breadcrumb>
        <span class="ps-3">Booking</span>
      </template>
      <template v-slot:content>
        Book your table immediately
      </template>
    </layout-banner>

    <div class="container px-5 lg:w-1/2 py-5 mx-auto">
      <div class="mt-3 w-full">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Booking</h3>
              <p class="mt-1 text-sm text-gray-600">
                Fill the below form to book your table.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="col-span-12 mb-3">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" v-model="name" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Name" />
                  </div>

                  <div class="col-span-12 mb-3">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="text" name="email-address" id="email-address" autocomplete="email" v-model="email" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Email address" />
                  </div>

                  <div class="col-span-12 mb-3">
                    <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone number</label>
                    <input type="text" name="phone-number" id="phone-number" v-model="phone" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Phone number" />
                  </div>

                  <div class="col-span-12 mb-3">
                    <label for="date-time" class="block text-sm font-medium text-gray-700">Date / Time</label>
                    <input type="datetime-local" name="date-time" id="date-time" v-model="dateTime" min="2011-02-20T20:20" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

                  <div>
                    <label for="notes" class="block text-sm font-medium text-gray-700">
                      Note(s)
                    </label>
                    <div class="mt-1">
                      <textarea id="notes" name="notes" rows="3" v-model="notes" class="shadow-sm focus:ring-pink-500 focus:border-pink-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Any notes" />
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Brief description of your requirements.
                    </p>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button @click.prevent="book" class="w-full sm:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm sm:text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    Confirm
                  </button>
                  <NuxtLink :to="localePath('/')" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                  </NuxtLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        phone: "",
        dateTime: "",
        notes: "",
      };
    },
    mounted() {
      this.$axios.$get("/sanctum/csrf-cookie");
    },
    methods: {
      async book() {
        this.$axios
          .post("/api/bookings/store", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            dateTime: this.dateTime,
            notes: this.notes,
          })
          .then((r) => {
            if (r.data.success) {
              this.$swal.fire({ icon: "success", text: this.$i18n.locale == "ar" ? "تم إرسال طلب الحجز بنجاح وسيتم التواصل معكم للتأكيد." : r.data.success, timer: 3000, timerProgressBar: true });
              this.name = "";
              this.email = "";
              this.phone = "";
              this.dateTime = "";
              this.notes = "";
            }
          })
          .catch((e) => this.$swal.fire({ icon: "error", text: e.response.data.message, timer: 3000, timerProgressBar: true }));
      },
    },
  };
</script>
