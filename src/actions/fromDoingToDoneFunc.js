
 let fromDoingToDoneFunc = (id, state) => {
   let itemToChangePlacement = JSON.parse(localStorage.getItem(id))
   localStorage.removeItem(id)
   itemToChangePlacement.placement = "done"
   localStorage.setItem(id, JSON.stringify(itemToChangePlacement))

   let elementToPush = []
   let copyOfArr = [...state.doing]
   let indexToRemove = "";

   copyOfArr.forEach((value,index,arr)=>{
     if (value.id === id) {
       elementToPush = value
       indexToRemove = index;
     }

   })
   copyOfArr.splice(indexToRemove, 1)

   let done = [...state.done, elementToPush]
   let doneNormal = []
   let doneLow = []
   let doneHight = []
   done.forEach((value)=>{
     if (value.priority == 3) {
       doneLow = [...doneLow, value]
     }else if (value.priority == 2) {
       doneHight = [...doneHight, value]
     }else {
       doneNormal = [...doneNormal, value]
     }
   })

 doneNormal.sort((a,b)=>{
   if (a.date > b.date) return 1;
   if (a.date < b.date) return -1;
   })
   doneLow.sort((a,b)=>{
     if (a.date > b.date) return 1;
     if (a.date < b.date) return -1;
   })
   doneHight.sort((a,b)=>{
     if (a.date > b.date) return 1;
     if (a.date < b.date) return -1;
   })
   return (
     {
       doIt: state.doIt,
       doing: copyOfArr,
       done:  [...doneHight, ...doneNormal, ...doneLow],
       aborted:  state.aborted,
       addFieldIsActive: state.addFieldIsActive,
     }
   )
}

export default fromDoingToDoneFunc
