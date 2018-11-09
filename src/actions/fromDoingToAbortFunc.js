
 let fromDoingToAbortFunc = (id, state ) => {
   let itemToChangePlacement = JSON.parse(localStorage.getItem(id))
   localStorage.removeItem(id)
   itemToChangePlacement.placement = "aborted"
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
   // ________________________________________________ABORT from Doing SORT ________________________________________
   let aborted = [...state.aborted, elementToPush]
   let abortedNormal = []
   let abortedLow = []
   let abortedHight = []
   aborted.forEach((value)=>{
     if (value.priority == 3) {
       abortedLow = [...abortedLow, value]
     }else if (value.priority == 2) {
         abortedHight = [...abortedHight, value]
     }else {
       abortedNormal = [...abortedNormal, value]
     }
   })

   abortedNormal.sort((a,b)=>{
     if (a.date > b.date) return 1;
     if (a.date < b.date) return -1;
   })
   abortedLow.sort((a,b)=>{
     if (a.date > b.date) return 1;
     if (a.date < b.date) return -1;
   })
   abortedHight.sort((a,b)=>{
     if (a.date > b.date) return 1;
     if (a.date < b.date) return -1;
   })

 return (
   {
     doIt: state.doIt,
     doing: copyOfArr,
     done:  state.done,
     aborted:  [...abortedHight, ...abortedNormal, ...abortedLow],
     addFieldIsActive: state.addFieldIsActive,
   }
)
}

export default fromDoingToAbortFunc
