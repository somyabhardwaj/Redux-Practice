export const depositMoney =(amount)=>{

    console.log("depositMoney Called")
    console.log(amount)
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
            type:'widthdraw',
            payload:amount
        })
    }

}