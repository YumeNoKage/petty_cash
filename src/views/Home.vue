<template>
    <div class="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:space-x-4 md:space-y-3 lg:space-y-0 space-y-3 text-white">

        <!-- FOR MAIN TRON -->
        <div class="main-tron" v-if="total">
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
                        <p class="mb-0 text-xs ml-auto">
                            From, {{ helperFormatDate(total.create_at, 'dd mmm yyyy') }}
                        </p>
                    </div>
                    <div class="cash lg:text-5xl md:text-4xl text-2xl font-roboto-mono items-end flex">
                        <span class="tracking-tightest font-medium">{{ helperToRupiah(total.nominal) }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOR MINI TRON -->
        <div class="mini-tron space-y-3 " v-if="total">
            <div class="rounded bg-white_transparent flex w-full h-24" v-for="item in 2" :key="item">
                <div class="p-2 w-full justify-between flex flex-col">
                    <div class="flex text-grey">
                        <p class="text-xs mb-0">
                            Last {{ item == 1 ? "Expenses" : "Income"}}
                        </p>
                        <p class="mb-0 text-xs ml-auto">
                            {{ helperFormatDate(item == 1 ? total.expend_update_at : total.income_update_at, 'dd mmm yyyy') }}
                        </p>
                    </div>
                    <div class="cash sm:text-lg md:text-xl lg:text-xl font-roboto-mono">
                        <span class="tracking-tightest">{{ helperToRupiah(item == 1 ? total.last_expend : total.last_income ) }}</span>
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

    <!-- LIST HISTORY -->
    <div class=" mt-20">
        <div class="flex mb-10">
            <h1 class="sm:text-xl md:text-2xl lg:text-3xl text-grey">History</h1>
            <div class="ml-auto flex">
                <div class="lg:mr-10 mb:mr-10 sm:mr-5">
                    <Modal :title="'Add Income'" :btn_name="'Add Income'" :colors="'blue'" id_btn="add_income"/>
                </div>
                <div>
                    <Modal :title="'Add Expend'" :btn_name="'Add Expend'" :colors="'red'" id_btn="add_expend"/>
                </div>
            </div>
        </div>
        <History :datas="data"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Modal from '@/components/Modal.vue'
import History from '@/components/History.vue'

export default {
	name: "Home",
    components: {
        Modal,
        History,
    },
    data(){
        return {
            total: null,
            data: null,
        }
    },

    methods: {
        ...mapActions({
            listCash: 'listCash'
        }),

        async toGetList(){
            let data = {
                params: null,
                point: 'list-cash?limit=5&page=1'
            }
            try {
                const response = await this.listCash(data);
                this.data = response.data;
            } catch (error) {
                console.log(error);
            }
        },

        async toGetTotal(){
            let data = {
                params: null,
                point: 'total-cash'
            }
            try {
                const response = await this.listCash(data);
                this.total = response.data;
            } catch (error) {
                console.log(error);
            }
        },

    },

    mounted(){
        this.toGetList()
        this.toGetTotal()
    }
};
</script>
