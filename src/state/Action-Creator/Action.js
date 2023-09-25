export const depositMoney =(amount)=>{

    return (dispatch) =>{
        dispatch ({
            type:'deposit',
            payload:amount,
        })

        
    }
}
export const widthdrawMoney =(amount) =>{

    return (dispatch) =>{
        dispatch({
            type:'widthraw',
            payload:amount
        })
    }

}