<template>
    <div class="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:space-x-4 md:space-y-3 lg:space-y-0 space-y-3 text-white">

        <!-- FOR MAIN TRON -->
        <div class="main-tron">
            <div class="rounded bg-white_transparent flex w-full lg:h-full md:h-36">
                <div class="icon-wallet bg-yellow rounded-l lg:w-60 md:w-52 w-28 relative">
                    <div class="px-2 sm:px-1 absolute top-2/4 transform -translate-y-2/4 w-full">
                        <div class="sm:w-full">
                            <img src="@/assets/icons/wallet.svg" class="lg:w-32 md:w-20 w-28 mx-auto" alt="wallet">
                        </div>
                    </div>
                </div>
                <div class="lg:p-3 md:p-2 p-2 w-full justify-between flex flex-col">
                    <div class="lg:flex md:flex sm:block text-grey">
                        <p class="lg:text-xl text-lg mb-0">
                            Your Cash
                        </p>
                        <p class="mb-0 sm:text-xs ml-auto">
                            16 oct 2021
                        </p>
                    </div>
                    <div class="cash lg:text-5xl md:text-3xl text-2xl font-roboto-mono items-end flex">
                        <span class="font-medium mr-1">Rp</span> 
                        <span class="tracking-tightest font-medium">1.500.000</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOR MINI TRON -->
        <div class="mini-tron space-y-3 ">
            <div class="rounded bg-white_transparent flex w-full h-24" v-for="item in 2" :key="item">
                <div class="p-2 w-full justify-between flex flex-col">
                    <div class="flex text-grey">
                        <p class="text-xs mb-0">
                            Last Expenses
                        </p>
                        <p class="mb-0 text-xs ml-auto">
                            16 oct 2021
                        </p>
                    </div>
                    <div class="cash text-lg font-roboto-mono">
                        <span class="font-medium mr-1">Rp</span> 
                        <span class="tracking-tightest">1.500.000</span>
                    </div>
                </div>
                <div :class="`icon-wallet bg-${item == 1 ? 'red' : 'blue' } rounded-r w-28 relative`">
                    <div class="px-2 sm:px-1 absolute top-2/4 transform -translate-y-2/4 w-full">
                        <div class="sm:w-full">
                            <img v-if="item == 1"  src="@/assets/icons/expenses.svg" class="lg:w-12 md:w-10 mx-auto" alt="wallet">
                            <img v-else src="@/assets/icons/income.svg" class="lg:w-12 md:w-10 mx-auto" alt="wallet">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <Modal title="Add Expenses" colors="red"/> -->
</template>

<script>
// @ is an alias to /src
import Modal from '@/components/Modal.vue'

export default {
	name: "Home",
	  components: {
	    Modal
	  }
};
</script>
