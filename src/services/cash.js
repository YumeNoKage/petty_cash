import axios from 'axios'

const accept = 'application/json'


export const getData = async data => {
  const url = 'http://localhost:4000/' + data.point
    try {
        const response = await axios.get(url, data, {
            headers: {
                'Content-Type': accept
            }
        })
    return response
    } catch (error) {
        console.log(error);
    }
}