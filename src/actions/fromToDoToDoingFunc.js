
 let fromToDoToDoingFunc = (id, state) => {

   let itemToChangePlacement = JSON.parse(localStorage.getItem(id))
   localStorage.removeItem(id)
   itemToChangePlacement.placement = "doing"
   localStorage.setItem(id, JSON.stringify(itemToChangePlacement))

   let elementToPushToDoing = []
   let copyOfDoIt = [...state.doIt]
   let indexToRemove = "";

   copyOfDoIt.forEach((value,index,arr)=>{
     if (value.id === id) {
       elementToPushToDoing = value
       indexToRemove = index
     }

   })
   copyOfDoIt.splice(indexToRemove, 1)
   let doing = [...state.doing, elementToPushToDoing]
   let doingNormal = []
   let doingLow = []
   let doingHight = []
   doing.forEach((value)=>{
     if (value.priority == 3) {
       doingLow = [...doingLow, value]
     }else if (value.priority == 2) {
         doingHight = [...doingHight, value]
     }else {
       doingNormal = [...doingNormal, value]
     }
   })

   doingNormal.sort((a,b)=>{
     if (a.date > b.date) return 1;
     if (a.date < b.date) return -1;
   })
   doingLow.sort((a,b)=>{
     if (a.date > b.date) return 1;
     if (a.date < b.date) return -1;
   })
   doingHight.sort((a,b)=>{
     if (a.date > b.date) return 1;
     if (a.date < b.date) return -1;
   })
   return (
     {
       doIt: [...copyOfDoIt],
       doing: [...doingHight,...doingNormal, ...doingLow],
       done:  state.done,
       aborted:  state.aborted,
       addFieldIsActive: state.addFieldIsActive,
     }
   )
}

export default fromToDoToDoingFunc
