<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-bold">Dashboard</h3>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
              <svg class="h-8 w-8 text-white" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z" fill="currentColor"></path>
                <path d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z" fill="currentColor"></path>
                <path d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z" fill="currentColor"></path>
                <path d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z" fill="currentColor"></path>
                <path d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z" fill="currentColor"></path>
                <path d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z" fill="currentColor"></path>
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{ dashboardData != null ? dashboardData.TotalBookings : 0 }}</h4>
              <div class="text-gray-500">Total Bookings</div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <div class="p-3 rounded-full bg-yellow-600 bg-opacity-75">
              <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z" fill="currentColor"></path>
                <path d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z" fill="currentColor"></path>
                <path d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z" fill="currentColor"></path>
              </svg>
            </div>
            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{ dashboardData != null ? dashboardData.TotalOrders : 0 }}</h4>
              <div class="text-gray-500">Total Orders</div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <div class="p-3 rounded-full bg-pink-600 bg-opacity-75">
              <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
                <path d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z" stroke="currentColor" stroke-width="2"></path>
              </svg>
            </div>
            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">{{ dashboardData != null ? dashboardData.TotalProducts : 0 }}</h4>
              <div class="text-gray-500">Available Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="py-8 mt-8">
        <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 class="text-2xl text-gray-700 font-semibold leading-tight">
            Latest bookings
          </h2>
          <div class="text-end">
            <button @click="$router.app.refresh()" class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200" type="submit">
              Refresh
            </button>
          </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
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
              <tbody v-if="dashboardData != null" class="bg-white">
                <tr v-for="booking in dashboardData.LatestBookings" :key="booking.id">
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
          </div>
        </div>
      </div>
    </div>

    <!-- latest orders table -->
    <div class="container">
      <div class="py-8">
        <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 class="text-2xl text-gray-700 font-semibold leading-tight">
            Latest Orders
          </h2>
          <div class="text-end">
            <button @click="$router.app.refresh()" class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200" type="submit">
              Refresh
            </button>
          </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Products
                  </th>
                  <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>
              <tbody v-if="dashboardData != null" class="bg-white">
                <tr v-for="order in dashboardData.LatestOrders" :key="order.id">
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10 bg-gray-300 text-gray-700 text-center text-sm rounded">Table {{ order.table }}</div>
                      <div class="ml-4">
                        <div class="text-sm leading-5 font-medium text-gray-900">#{{ order.id }}</div>
                        <div class="text-sm leading-5 text-gray-500">{{ order.name }}</div>
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="text-sm leading-5 text-gray-900">
                      <span v-if="order.products.length > 0">{{ order.products.map((el) => parseInt(el.total_price)).reduce((a, b) => a + b) }} {{ $t("common.currency") }}</span>
                      <span v-else>0</span>
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      <span v-if="order.products.length > 0">{{ order.products.map((el) => parseInt(el.quantity)).reduce((a, b) => a + b) }}</span>
                      <span v-else>0</span> items
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div v-if="order.products.length > 0" class="flex items-center justify-center">
                      <img v-for="product in order.products.slice(0, 5)" :key="product.id" :title="`(${product.data.resturant}) ${product.quantity}x ${product.data.name_en} - ${product.total_price} ${$t('common.currency')} - Notes: ${product.notes == null ? 'Nothing' : product.notes}`" class="w-8 h-8 rounded-full border-gray-200 border -m-1 transform hover:scale-125" :src="product.data.image" />
                      <div v-if="order.products.length > 5" class="w-8 h-8 rounded-full border-gray-200 border -m-1 transform hover:scale-125 text-xs font-semibold bg-gray-200 text-gray-800 text-center  flex items-center justify-center">+{{ order.products.length - 5 }}</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span :class="[order.status == 'received' ? 'bg-gray-100 text-gray-800' : order.status == 'approved' ? 'bg-yellow-100 text-yellow-800' : order.status == 'done' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']" class="px-2 uppercase inline-flex text-xs leading-5 font-semibold rounded-full">{{ order.status }}</span>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    {{ order.date }}
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div class="flex item-center justify-center">
                      <div v-if="order.products.length > 0" @click="orderDetails(order)" class="w-4 mr-2 transform hover:text-pink-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div @click="orderEdit(order)" class="w-4 mr-2 transform hover:text-pink-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </div>
                      <div @click="orderDelete(order)" class="w-4 mr-2 transform hover:text-pink-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- users table 
    <div class="container">
      <div class="py-8">
        <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 class="text-2xl text-gray-700 font-semibold leading-tight">
            Users
          </h2>
          <div class="text-end">
            <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div class=" relative ">
                <input type="text" id='"form-subscribe-Filter' class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="name" />
              </div>
              <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200" type="submit">
                Filter
              </button>
            </form>
          </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    User
                  </th>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Role
                  </th>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    Created at
                  </th>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                    status
                  </th>
                  <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Jean marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Admin
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                      12/09/2020
                    </p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full"> </span>
                      <span class="relative">
                        active
                      </span>
                    </span>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div class="flex items-center">
                <button type="button" class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                  <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                  1
                </button>
                <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                  2
                </button>
                <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                  3
                </button>
                <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                  4
                </button>
                <button type="button" class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                  <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dashboardData: null,
      };
    },
    methods: {
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
                this.$swal.fire({ icon: "error", text: e.response.data.message, timer: 3000, timerProgressBar: true });
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
                    this.$swal.fire({ icon: "success", text: r.data.success, timer: 3000, timerProgressBar: true });
                    this.$router.app.refresh();
                  }
                })
                .catch((e) => {
                  if (e.response.status == 422) {
                    this.$swal.fire({ icon: "error", text: e.response.data.message, timer: 3000, timerProgressBar: true });
                  }
                });
            }
          });
      },

      orderDetails(order) {
        let data = `
          <table class="min-w-full leading-normal mb-6">
              <tbody>
        `;

        order.products.forEach(
          (el) =>
            (data += `
              <tr class="text-gray-700">
                <td class="border-b-2 p-4 dark:border-dark-5">
                    <div class="text-xs mb-2">
                      ${el.data.resturant}
                    </div>
                      <img class="rounded-md inline w-16 h-16" src="${el.data.image}"/> 
                    <div>
                      <span class="text-pink-500 text-sm">${el.quantity}x &nbsp; </span>
                      <span class="text-sm font-bold">${el.data.name_en}</span> —
                      <span class="text-sm font-bold text-pink-500">${el.total_price} QR</span>
                    </div>
                    <div>
                      <span class="text-sm pl-3"> <b>NOTES:</b> ${el.notes == null ? "Nothing" : el.notes} </span>
                    </div>
                </td>
              </tr>
          `)
        );

        data += `
              </tbody>
            </table>
          Total: <b>${order.products.map((el) => parseInt(el.total_price)).reduce((a, b) => a + b)} QR</b> . <span class="px-2 bg-gray-200 text-gray-800 text-center text-base rounded-full">${order.products.map((el) => parseInt(el.quantity)).reduce((a, b) => a + b)} items </span>
        `;

        this.$swal.fire({
          title: `Order #${order.id} . <span class="text-base text-pink-500">Table: ${order.table}</span>`,
          html: data,
        });
      },

      async orderEdit(order) {
        const { value: orderStatus } = await this.$swal.fire({
          title: "Select order status",
          input: "select",
          inputOptions: {
            received: "received",
            approved: "approved",
            cancelled: "cancelled",
            done: "done",
          },
          inputPlaceholder: "Select a status",
          showCancelButton: true,
          inputValidator: (result) => {
            return !result && "You have to select a status";
          },
        });

        if (orderStatus) {
          order.status = orderStatus;
          this.$axios
            .post("/api/orders/update", {
              order_id: order.id,
              status: orderStatus,
            })
            .then((r) => {
              if (r.data.success) {
                this.$swal.fire(`Order #${order.id} status has chaged to: ${orderStatus}`);
                this.$router.app.refresh();
              }
            })
            .catch((e) => {
              if (e.response.status == 422) {
                this.$swal.fire({ icon: "error", text: e.response.data.message, timer: 3000, timerProgressBar: true });
              }
            });
        }
      },

      orderDelete(order) {
        this.$swal
          .fire({
            title: `Do you want to delete this order #${order.id}?`,
            showCancelButton: true,
            confirmButtonText: "Delete",
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.$axios
                .post("/api/orders/destroy", {
                  order_id: order.id,
                })
                .then((r) => {
                  if (r.data.success) {
                    this.$swal.fire({ icon: "success", text: r.data.success, timer: 3000, timerProgressBar: true });
                    this.$router.app.refresh();
                  }
                })
                .catch((e) => {
                  if (e.response.status == 422) {
                    this.$swal.fire({ icon: "error", text: e.response.data.message, timer: 3000, timerProgressBar: true });
                  }
                });
            }
          });
      },
    },
    activated() {
      if (this.$fetchState.timestamp <= Date.now() - 30000) {
        this.$fetch();
      }
    },
    async fetch() {
      await this.$axios
        .get("/api/admin/dashboard")
        .then((response) => {
          this.dashboardData = response.data;
        })
        .catch((e) => console.log(e));
    },
  };
</script>
