export const changePage = (page)=>async dispatch=>{
    try {
        dispatch({
            type:'PAGE_RENDERING',
            payload:page
        })
        
    } catch (error) {
        dispatch({
            type:'PAGE_RENDERING_FAIL'
        })
    }
}
export const changeTheme = (theme)=>async dispatch=>{
    try{
        dispatch({
            type:'TOGGLE_THEME',
            payload:theme
        })
    }catch{
        dispatch({
            type:'TOGGLE_THEME_FAIL'
        })
    }
}