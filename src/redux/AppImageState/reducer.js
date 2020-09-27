import { AppImage } from "./action";

const defaultState = {
    isLoading:false,
    imageList:[]
};

AppImageState = (state = defaultState, action) => {
    switch (action.type) {
        case AppImage.isLoading:
            return{
                ...state,
                isLoading:action.data
            }
        case AppImage.getImageSuccess:
            return{
                ...state,
                imageList:action.data
            }

        default:
            return state;
    }
}

export default AppImageState;
