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