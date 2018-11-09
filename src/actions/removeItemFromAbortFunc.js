
 let removeItemFromAbortFunc = (id, state) => {
   let newcopyOfArr = [...state.aborted]
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
       done:  state.done,
       aborted: [...newcopyOfArr],
       addFieldIsActive: state.addFieldIsActive,
     }
   )
}

export default removeItemFromAbortFunc
