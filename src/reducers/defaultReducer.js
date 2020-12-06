const defaultState = {
    isLoading:false,
    activeItem: 'home'
};

const defaultReducer = (state = defaultState, action) =>{

        switch (action.type) {
            case 'PAGE_LOADING':
                return {
                    ...state,
                    isLoading:true
                };
            case 'PAGE_RENDERING':
                return {
                    ...state,
                    isLoading:false,
                    activeItem:action.payload
                };
            default:
                return state;
        }
};
export default defaultReducer;