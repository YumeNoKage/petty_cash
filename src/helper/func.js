import dateFormat from "dateformat";
// let dateFormat = require("dateformat")

let helperFunc = {
    methods: {

        // helper format to rupiah
        helperToRupiah(value){
            if(value != null && value != '' && value != undefined){
                var numberString = value.toString(),
                isMin = numberString.includes("-")

                if(isMin) numberString = numberString.replace('-', '')
                
                var split = numberString.split(","),
                sisa = split[0].length % 3,
                rupiah = split[0].substr(0, sisa),
                ribuan = split[0].substr(sisa).match(/\d{3}/gi),
                separator = null
             
                if (ribuan) {
                    separator = sisa ? "." : ""
                    rupiah += separator + ribuan.join(".")
                }
             
                rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah
                if(isMin) return '- Rp. '+rupiah
                else return 'Rp. '+rupiah
            } else if(value === 0 || value === '0'){return 'Rp. 0'}
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