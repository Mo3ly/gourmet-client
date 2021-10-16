<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-bold">
      Bookings
      <span class="inline-flex items-center justify-center h-5 pt-1 text-xs font-medium text-white bg-pink-500 px-2 rounded-sm">{{ pagination.total }}</span>
    </h3>

    <audio type="audio/mpeg" ref="audio" src="http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3"></audio>
    <!-- Search bar -->
    <div class="pb-3 pt-4">
      <div class="bg-white  dark:bg-dark-surface flex items-center rounded-md shadow">
        <input type="text" id="search" v-model="searchQuery" :placeholder="$t('common.search')" class="rounded-l-md w-full py-4 px-6 dark:bg-dark-surface dark:text-gray-100 text-gray-700 leading-tight border-none focus:outline-none focus:ring-0" autocomplete="off" />
        <div class="p-3">
          <button @click="searchQuery != null ? (searchQuery = null) : null" class="bg-pink-500 text-white dark:bg-dark-surface  rounded-full p-2 hover:bg-pink-400 focus:outline-none w-7 h-7 flex items-center justify-center">
            <i v-if="searchQuery" class="gd-icons icon-simple-remove"></i>
            <i v-else class="gd-icons icon-zoom-split"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col mt-8">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Booking
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="booking in resultQuery" :key="booking.id">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="text-sm leading-5 font-medium text-gray-900">#{{ booking.id }}</div>
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  {{ booking.name }}
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  {{ booking.email }}
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  {{ booking.phone }}
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  {{ booking.date }}
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  {{ booking.notes }}
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span :class="[booking.status == 'delivered' ? 'bg-gray-100 text-gray-800' : booking.status == 'seen' ? 'bg-yellow-100 text-yellow-800' : booking.status == 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']" class="px-2 uppercase inline-flex text-xs leading-5 font-semibold rounded-full">{{ booking.status }}</span>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex item-center justify-center">
                    <div @click="bookingEdit(booking)" class="w-4 mr-2 transform hover:text-pink-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <div @click="bookingDelete(booking)" class="w-4 mr-2 transform hover:text-pink-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Pagination -->
          <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="flex-1 flex justify-between sm:hidden">
              <a @click="previousPage" class="relative inline-flex cursor-pointer items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </a>
              <a @click="nextPage" class="ml-3 relative inline-flex cursor-pointer items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </a>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p class="text-sm text-gray-700">
                  Showing
                  <span class="font-bold">{{ pagination.from }}</span>
                  to
                  <span class="font-bold">{{ pagination.to }}</span>
                  of
                  <span class="font-bold">{{ pagination.total }}</span>
                  orders
                </p>
              </div>
              <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a @click="previousPage" class="relative cursor-pointer inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Previous</span>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a v-for="page in pagination.last_page" :key="page" @click.stop="loadPage(page)" :class="[currentPage == page ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50']" class="relative inline-flex cursor-pointer items-center px-4 py-2 border text-sm font-medium">
                    {{ page }}
                  </a>
                  <a @click="nextPage" class="relative inline-flex cursor-pointer items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span class="sr-only">Next</span>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
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
        api: process.env.API,
        currentPage: 1,
        offset: 4,
        pages: [],
        bookings: [],
        pagination: [],
        searchQuery: null,
      };
    },
    methods: {
      bookingBuzz() {
        this.$refs.audio.play();
      },

      async bookingEdit(booking) {
        const { value: bookingStatus } = await this.$swal.fire({
          title: "Select booking status",
          input: "select",
          inputOptions: {
            delivered: "delivered",
            seen: "seen",
            cancelled: "cancelled",
            confirmed: "confirmed",
          },
          inputPlaceholder: "Select a status",
          showCancelButton: true,
          inputValidator: (result) => {
            return !result && "You have to select a status";
          },
        });

        if (bookingStatus) {
          booking.status = bookingStatus;
          this.$axios
            .post("/api/bookings/update", {
              booking_id: booking.id,
              status: bookingStatus,
            })
            .then((r) => {
              if (r.data.success) {
                this.$swal.fire(`Booking #${booking.id} status has chaged to: ${bookingStatus}`);
                this.$router.app.refresh();
              }
            })
            .catch((e) => {
              if (e.response.status == 422) {
                this.$swal.fire({ icon: "error", text: e.response.data.message });
              }
            });
        }
      },

      bookingDelete(booking) {
        this.$swal
          .fire({
            title: `Do you want to delete this booking #${booking.id}?`,
            showCancelButton: true,
            confirmButtonText: "Delete",
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.$axios
                .post("/api/bookings/destroy", {
                  booking_id: booking.id,
                })
                .then((r) => {
                  if (r.data.success) {
                    this.$swal.fire({ icon: "success", text: r.data.success });
                    this.$router.app.refresh();
                  }
                })
                .catch((e) => {
                  if (e.response.status == 422) {
                    this.$swal.fire({ icon: "error", text: e.response.data.message });
                  }
                });
            }
          });
      },

      async nextPage() {
        if (this.pagination.has_more_pages) {
          this.currentPage++;
          this.$router.app.refresh();
        }
      },

      async loadPage(page) {
        this.currentPage = page;
        this.$router.app.refresh();
      },

      async previousPage() {
        if (this.currentPage > 0) {
          this.currentPage--;
          this.$router.app.refresh();
        }
      },
    },
    computed: {
      resultQuery() {
        if (this.searchQuery) {
          return this.bookings.filter((booking) => {
            return this.searchQuery
              .toLowerCase()
              .split(" ")
              .every((v) => booking.name.includes(v) || booking.id == v);
          });
        } else {
          return this.bookings;
        }
      },
      pages() {
        if (!this.pagination.to) {
          return null;
        }
        let from = this.pagination.current_page - this.offset;
        if (from < 1) {
          from = 1;
        }
        let to = from + this.offset * 2;
        if (to >= this.pagination.last_page) {
          to = this.pagination.last_page;
        }
        let pages = [];
        for (let page = from; page <= to; page++) {
          pages.push(page);
        }
        return pages;
      },
    },
    mounted() {
      this.$echo.channel("gourmet-bookings").listen("BookingReceived", (response) => {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 10000,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          html: `New booking #<b>${response.id}</b> for Client ${response.name}.`,
        });
        if (this.currentPage == 1) this.$router.app.refresh();
        else this.bookings.unshift(response);
        this.bookingBuzz();
      });
    },
    activated() {
      if (this.$fetchState.timestamp <= Date.now() - 30000) {
        this.$fetch();
        console.log("refetched the bookings data");
      }
    },
    async fetch() {
      await this.$axios
        .get("/api/bookings/paginated?page=" + this.currentPage)
        .then((response) => {
          this.bookings = response.data["bookings"];
          this.pagination = response.data["pagination"];
        })
        .catch((e) => console.log(e));
      console.log("fetched bookings data");
    },
  };
</script>
