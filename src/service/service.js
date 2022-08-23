import axios from "axios";

export const getActors = async () => {
    try {
        const res = await axios.get('/api/actors');
        return res.data;
    } catch(err){
        console.error(err.message);
    }
};

export const setComment = async (body) => {
    try {
        await axios.post('/api/actors', body);
    } catch(err){
        console.error(err.message);
    }
};

export const deleteActor = async (id) => {
    try {
        await axios.delete('/api/actors', {
            data: {
                id: id
            }
        });
    } catch(err){
        console.error(err.message);
    }
}