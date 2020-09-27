
import Axios from 'axios';
import { BASE_URL } from '../../utils/Constants';

export const AppImage = {
    getImageSuccess: 'getImageSuccess/AppImage',
    isLoading: 'isLoading/AppImage',
};

export const getImageSuccess = (data) => ({
    type: AppImage.getImageSuccess,
    data
})

export const isLoading = (data) => ({
    type: AppImage.isLoading,
    data
})

export function getImageData() {
    return (dispatch, getState) => {
        dispatch(isLoading(true));
        Axios.get(BASE_URL).then((resp)=>{
            dispatch(getImageSuccess(resp.data))
            dispatch(isLoading(false))
        }).catch((err) => {
            dispatch(isLoading(false));
        })
    }
}


