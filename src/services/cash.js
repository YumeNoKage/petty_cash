import axios from 'axios'

const accept = 'application/json'

export const getData = async data => {
    const url = 'http://localhost:4000/' + data.point
    try {
        const response = await axios.get(url, data.params, {
            headers: {
                'Content-Type': accept
            }
        })
    return response
    } catch (error) {
        console.log(error);
    }
}

export const addData = async data => {
    const url = 'http://localhost:4000/add'
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': accept
            }
        })

        return response
    } catch (error) {
        console.log(error);
    }
}

export const editData = async data => {
    const url = 'http://localhost:4000/update/' + data.point
    try {
        const response = await axios.put(url, data.params, {
            headers: {
                'Content-Type': accept,
            }
        })

        return response
    } catch (error) {
        console.log(error);
    }
}