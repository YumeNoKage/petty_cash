<template>
    <div class="space-y-3">
        <div class="rounded bg-white_transparent flex w-full" v-for="item in 6" :key="item">
            <div class="card-history overflow-hidden">
                <div class="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 w-full">
                    <div class="p-2 justify-between flex flex-col">
                        <div class="flex text-grey">
                            <p class="text-xs mb-0">
                                Title
                            </p>
                        </div>
                        <div class="title sm:text-lg md:text-lg lg:text-xl text-white">
                            Testing Aja ...
                        </div>
                    </div>
                    <div class="p-2 justify-between flex flex-col">
                        <div class="flex text-grey">
                            <p class="text-xs mb-0">
                                Date
                            </p>
                        </div>
                        <div class="title sm:text-lg md:text-lg lg:text-xl text-white">
                            20 Oct 2021
                        </div>
                    </div>
                    <div class="p-2 justify-between flex flex-col">
                        <div class="flex text-grey">
                            <p class="text-xs mb-0">
                                Nominal
                            </p>
                        </div>
                        <div class="cash sm:text-lg md:text-lg lg:text-xl font-roboto-mono text-white">
                            <span class="font-medium mr-1">Rp</span> 
                            <span class="tracking-tightest">{{ item }}
                                <span v-for="cash in item" :key="cash">{{ cash }}</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="drop-item max-h-0 duration-300 ease-in-out">
                    <div class="p-2 justify-between flex flex-col">
                        <div class="flex text-grey">
                            <p class="text-xs mb-0">
                                Description
                            </p>
                        </div>
                        <div class="title sm:text-lg md:text-lg lg:text-xl text-white">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eligendi fugit repudiandae accusantium culpa voluptas tenetur ducimus dolores quia iste?
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative edit-modal">
                <div class="h-full w-full absolute">
                    <div @click="openModal(item)" class="text-white w-full pointed text-center absolute top-2/4 -translate-y-2/4 transform">
                        Edit
                    </div>
                </div>
                <div class="h-full ">
                    <div :class="`bg-${item % 2 == 0 ? 'red' : 'blue' } rounded-r w-24 has-tooltip transform duration-200 ease-in-out h-full`">
                        <span class='tooltip rounded-small shadow-md p-1 bg-grey text-white -mt-8'>{{ item % 2 == 0 ? "Expenses" : "Income" }}</span>
                        <div class="px-2 sm:px-1 absolute top-2/4 transform -translate-y-2/4 w-full">
                            <div class="sm:w-full ">
                                <img v-if="item % 2 == 0"  src="@/assets/icons/expenses.svg" class="lg:w-12 md:w-10 mx-auto" alt="Expenses">
                                <img v-else src="@/assets/icons/income.svg" class="lg:w-12 md:w-10 mx-auto" alt="Income">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal :title="data_modal.modal_name" :colors="data_modal.color" :btn_show="false"></Modal>
    </div>
</template>

<script>
import Modal from "./Modal"

export default {
    props:{
        datas:{
            type: Object,
            default: null,
        }
    },

    components:{
        Modal
    },

    data(){
        return{
            data_modal: {
                modal_name: "",
                data: null,
                color: null,
            }
        }
    },

    methods:{
        openModal(item) {
            this.data_modal.modal_name = 'Edit Income'
            this.data_modal.data = item
            this.data_modal.color = 'blue'

            document.getElementById('btn-modal').click()
        }
    }
}
</script>

<style scoped>

.card-history:hover .drop-item{
    max-height: 100vh !important;
}

.edit-modal:hover .has-tooltip{
    transform: translateX(-100%)
}

.pointed{  
    cursor: pointer;
}
</style>