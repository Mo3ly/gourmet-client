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
        <div class="container px-5 lg:w-1/2 py-5 mx-auto text-center">
            <div class="mt-3 w-full sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-500 mb-4">
                    Fill the below form to book your table.
                </h3>

                <!-- <div class="col-span-12 mb-3">
                    <SelectMenu></SelectMenu>
                </div> -->

                <div class="col-span-12 mb-3">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-12 mb-3">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                
                <div class="col-span-12 mb-3">
                    <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone number</label>
                    <input type="text" name="phone-number" id="phone-number" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-12 mb-3">
                    <label for="date-time" class="block text-sm font-medium text-gray-700">Date / Time</label>
                    <input type="text" name="date-time" id="date-time" class="mt-1 focus:ring-pink-500 focus:border-pink-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                    Comment
                    </label>
                    <div class="mt-1">
                    <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-pink-500 focus:border-pink-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="" />
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                    Brief description.
                    </p>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-4 text-center w">
                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm">
                Confirm
                </button>
                <NuxtLink :to="localePath('/')" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                </NuxtLink>
            </div>
        </div>
    </div>
</template>