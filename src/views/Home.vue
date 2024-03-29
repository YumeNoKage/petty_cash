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
                        <p class="mb-0 text-xs ml-auto">
                            From, {{ total ? helperFormatDate(total.create_at, 'dd mmm yyyy') : '-' }}
                        </p>
                    </div>
                    <div class="cash lg:text-5xl md:text-4xl text-2xl font-roboto-mono items-end flex">
                        <span class="tracking-tightest font-medium">{{ total ? helperToRupiah(total.nominal) : '-' }}</span>
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
                            Last {{ item == 1 ? "Expenses" : "Income"}}
                        </p>
                        <p class="mb-0 text-xs ml-auto">
                            {{ total ? helperFormatDate(item == 1 ? total.expend_update_at : total.income_update_at, 'dd mmm yyyy') : '-' }}
                        </p>
                    </div>
                    <div class="cash sm:text-lg md:text-xl lg:text-xl font-roboto-mono">
                        <span class="tracking-tightest">{{ total ? helperToRupiah(item == 1 ? total.last_expend : total.last_income ) : '-' }}</span>
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
    <div class=" mt-20" >
        <div class="flex mb-10">
            <h1 class="sm:text-xl md:text-2xl lg:text-3xl text-grey">History</h1>
            <div class="ml-auto flex">
                <div class="lg:mr-10 mb:mr-10 sm:mr-5">
                    <Modal :title="'Add Income'" :idTotal="total ? total.id : null" :btn_name="'Add Income'" :colors="'blue'" idBtn="add_income" statusCash="income" @update:ParentData="toGetTotal(), toGetList()"/>
                </div>
                <div>
                    <Modal :title="'Add Expend'" :idTotal="total ? total.id : null" :btn_name="'Add Expend'" :colors="'red'" idBtn="add_expend" statusCash="expend" @update:ParentData="toGetTotal(), toGetList()"/>
                </div>
            </div>
        </div>
        <History :datas="data" @update:ParentData="toGetList(), toGetTotal()"/>

        <!-- pagination -->
        <div v-if="data">
            <div class="flex justify-center" v-if="data.pagination.totalPage > 1">
                <div class="text-white p-1 rounded-md mx-1 cursor-pointer bg-red" @click="page = data.pagination.prevPage, toGetTotal(), toGetList()" v-if="data.pagination.prevPage">&laquo;</div>
                <div class="text-white p-1 rounded-md mx-1 bg-yellow">{{data.pagination.currentPage}}</div>
                <div class="text-white p-1 rounded-md mx-1 cursor-pointer bg-blue" @click="page = data.pagination.nextPage, toGetTotal(), toGetList()" v-if="data.pagination.nextPage">&raquo;</div>
            </div>
        </div>

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
            page: 1,
        }
    },

    methods: {
        ...mapActions({
            listCash: 'listCash'
        }),

        async toGetList(){
            let data = {
                params: null,
                point: `list-cash?limit=5&page=${this.page}`
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

                localStorage.id_total = response.data.id
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
