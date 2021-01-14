const defaultState = {
    isLoading:false,
    theme:'light',
    activeItem: 'About-Me'
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
            case 'TOGGLE_THEME':
                const newTheme = state.theme === 'light'?'dark':'light';
                return {
                    ...state,
                    theme:newTheme
                }
            default:
                return state;
        }
};
export default defaultReducer;