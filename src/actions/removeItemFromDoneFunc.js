
 let removeItemFromDoneFunc = (id, state) => {
   let newcopyOfArr = [...state.done]
   let indexToRemoveById = "";


   localStorage.removeItem(id)

   newcopyOfArr.forEach((value,index,arr)=>{
     if (value.id === id) {
       indexToRemoveById = index;
     }
   })

   newcopyOfArr.splice(indexToRemoveById, 1)
   return (
     {
       doIt: state.doIt,
       doing: state.doing,
       done: [...newcopyOfArr],
       aborted:  state.aborted,
       addFieldIsActive: state.addFieldIsActive,
     }
   )
}

export default removeItemFromDoneFunc
