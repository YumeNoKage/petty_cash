import dateFormat from "dateformat";
// let dateFormat = require("dateformat")

let helperFunc = {
    methods: {

        // helper format to rupiah
        helperToRupiah(value){
            // if(value != null && value != '' && value != undefined){
                return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value)
            // } else if(value === 0 || value === '0'){return 'Rp. 0'}
        },
        
        // helper date format
        helperFormatDate(dates, format){
            if(dates != null){
                return dateFormat(dates, format)
            }
        },
    }
}

export default helperFunc