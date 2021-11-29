<template>
    <button :class="`modal-open bg-${colors} text-white hover:bg-${colors}-800 duration-200 ease-out font-bold rounded ${ !btn_show ? 'invisible' : 'py-1 px-3'}`" @click="toggleModal()" id="btn_modal">{{ btn_show ? btn_name : '' }} </button>
	<div class="fixed z-10 inset-0 ease-out duration-200 overflow-y-auto opacity-0 pointer-events-none" aria-labelledby="modal-title" role="dialog" aria-modal="true" :id="idBtn">
		<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" >
            <div class="fixed inset-0 bg-modal ease-out duration-200 transition-opacity" aria-hidden="true"></div>

			<!-- This element is to trick the browser into centering the modal contents. -->
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

			<div class="inline-block align-bottom rounded-large text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="p-4 bg-black">
                    <div class="modal-title mb-3 flex w-full">
                        <p :class="`text-3xl font-bold w-full text-center text-${colors}`">
                            {{ title }}
                        </p>
                        <span class="my-auto" @click="toggleModal()">
                            <img src="@/assets/icons/close.svg" alt="close" class="rounded-full hover:bg-white_transparent duration-200 ease-out">
                        </span> 
                    </div>
                    <div class="mb-3">
                        <div class="block">
                            <label for="title" class="block text-white mb-1">Title</label>
                            <input id="title" v-model="data.title" type="text" class="block bg-white_transparent rounded w-full py-2 px-3 font-2xl text-white" placeholder="Title">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="block">
                            <label for="nominal" class="block text-white mb-1">Nominal</label>
                            <input id="nominal" v-model="data.nominal" type="number" class="block bg-white_transparent rounded w-full py-2 px-3 font-2xl text-white" placeholder="Nominal">
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="block">
                            <label for="desc" class="block text-white mb-1">Description</label>
                            <textarea id="desc" type="text" v-model="data.description" class="block bg-white_transparent rounded w-full py-2 px-3 font-2xl text-white" placeholder="Some Description"></textarea>
                        </div>
                    </div>
                    <div class="sm:flex sm:flex-row-reverse">
                        <button @click="addCashData()" type="button" :class="`w-full inline-flex justify-center rounded border border-transparent ease-out duration-200 px-3 py-1 bg-${colors} text-current text-base font-medium text-white hover:bg-${colors}-800 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm`">
                            {{ title }}
                        </button>
                        <button @click="toggleModal()" type="button" class="mt-3 w-full inline-flex justify-center rounded ease-out duration-200 text-white_transparent-light bg-white_transparent transiti shadow-sm px-3 py-1 text-base font-medium hover:bg-white_transparent-dark hover:text-gray-500 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props:{
        title:{
            type: String,
            default: '',
        },
        colors:{
            type: String,
            default: '',
        },
        btn_name:{
            type: String,
            default: '',
        },
        idBtn:{
            type: String,
            default: 'btn_modal',
        },
        btn_show:{
            type: Boolean,
            default: true,
        },
        data_item:{
            type: Object,
            default: null,
        },
        statusCash:{
            type: String,
            default: null,
        },
        idTotal:{
            type: Number,
            default: null,
        },
    },

    emits:['update:ParentData'],

    data(){
        return {
            data:{
                title: '',
                nominal: null,
                description: '',
                status: null,
            }
        }
    },

    watch:{
        data_item(newValue, oldValue){
            this.data.title = newValue.title;
            this.data.nominal = newValue.nominal;
            this.data.description = newValue.description;
        },
    },

    created() {
        this.data.status = this.statusCash
    },

    methods: {
        ...mapActions({
            addCash: 'addCash'
        }),

        addCashData : async function(){
            let item = { ...this.data, total_id: this.idTotal }
            
            try {
                const response = await this.addCash(item)
                if(response.status){
                    this.toggleModal()
                    this.$emit('update:ParentData')
                    this.data = {
                        title: '',
                        nominal: null,
                        description: '',
                        status: null,
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },

        toggleModal () {
            // const body = document.querySelector('body')
            const modal = document.getElementById(`${this.idBtn}`)
            modal.classList.toggle('opacity-0')
            modal.classList.toggle('pointer-events-none')
            // body.classList.toggle('modal-active')
        }
    }
}
</script>

<style scoped>
.bg-modal{
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
}
</style>