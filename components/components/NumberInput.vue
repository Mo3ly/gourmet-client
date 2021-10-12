<template>
<div class="custom-number-input h-6 w-12">
    <div class="flex flex-row h-6 w-full rounded-lg bg-transparent">
        <button data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-6 rounded-s cursor-pointer">
            <span class="m-auto text-sm font-bold">-</span>
        </button>
        <span class="text-center border-0 p-1 w-8 h-full bg-gray-200 text-sm font-normal focus:text-black text-gray-700">
            1
        </span>
        <button data-action="increment" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-6 rounded-e cursor-pointer">
            <span class="m-auto text-sm font-bold">+</span>
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: 'NumberInput',
    props: ['quantity'],
    data(){
        return {
            quantity: this.quantity
        }
    }
}
</script>

<style scoped>
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }
</style>

<script>
export default {
    method() {
        function decrement(e) {
            const btn = e.target.parentNode.parentElement.querySelector(
            'button[data-action="decrement"]'
            );
            const target = btn.nextElementSibling;
            let value = Number(target.value);
            value--;
            target.value = value;
        }

        function increment(e) {
            const btn = e.target.parentNode.parentElement.querySelector(
            'button[data-action="decrement"]'
            );
            const target = btn.nextElementSibling;
            let value = Number(target.value);
            value++;
            target.value = value;
        }

        const decrementButtons = document.querySelectorAll(
            `button[data-action="decrement"]`
        );

        const incrementButtons = document.querySelectorAll(
            `button[data-action="increment"]`
        );

        decrementButtons.forEach(btn => {
            btn.addEventListener("click", decrement);
        });

        incrementButtons.forEach(btn => {
            btn.addEventListener("click", increment);
        });
    }
}
</script>