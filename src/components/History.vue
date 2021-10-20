<template>
    <div class="space-y-3">
        <div class="rounded bg-white_transparent flex w-full h-24" v-for="item in 6" :key="item">
            <div class="flex w-full">
                <div class="p-2 w-3/5 justify-between flex flex-col">
                    <div class="flex text-grey">
                        <p class="text-xs mb-0">
                            Title
                        </p>
                    </div>
                    <div class="title sm:text-lg md:text-xl lg:text-xl text-white">
                        Testing Aja ...
                    </div>
                </div>
                <div class="p-2 w-2/5 justify-between flex flex-col">
                    <div class="flex text-grey">
                        <p class="text-xs mb-0">
                            Date
                        </p>
                    </div>
                    <div class="title sm:text-lg md:text-xl lg:text-xl text-white">
                        20 Oct 2021
                    </div>
                </div>
                <div class="p-2 w-2/5 justify-between flex flex-col">
                    <div class="flex text-grey">
                        <p class="text-xs mb-0">
                            Last {{ item % 2 == 0 ? "Expenses" : "Income"}}
                        </p>
                    </div>
                    <div class="cash sm:text-lg md:text-xl lg:text-xl font-roboto-mono text-white">
                        <span class="font-medium mr-1">Rp</span> 
                        <span class="tracking-tightest">{{ item }}
                            <span v-for="cash in item" :key="cash">{{ cash }}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div :class="`icon-wallet bg-${item % 2 == 0 ? 'red' : 'blue' } rounded-r w-24 relative`">
                <div class="px-2 sm:px-1 absolute top-2/4 transform -translate-y-2/4 w-full">
                    <div class="sm:w-full">
                        <img v-if="item % 2 == 0"  src="@/assets/icons/expenses.svg" class="lg:w-12 md:w-10 mx-auto" alt="wallet">
                        <img v-else src="@/assets/icons/income.svg" class="lg:w-12 md:w-10 mx-auto" alt="wallet">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:{
            type: Object,
            default: null,
        }
    }
}
</script>