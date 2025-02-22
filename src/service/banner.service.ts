import axios from "@/lib/axios";


export const getBanner = async (
    // query: any
): Promise<any> => {
    try {
        const response = await axios.get(`/banner`);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};