import axios from "axios";


export const baseUrl ="https://bayut.p.rapidapi.com"



export const fetchApi = async (url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '80318ae477mshf8881391df45e78p1cc80cjsn80ef4407a6ed',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
        
    })
    return data;
}