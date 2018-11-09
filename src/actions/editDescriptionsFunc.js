
 let editDescriptionsFunc = (id, state ) => {
   let itemToChangeDescription = JSON.parse(localStorage.getItem(id))
   let newDesk = prompt("Please, change desctiptions here", itemToChangeDescription.descriprion )
   localStorage.removeItem(id)
   itemToChangeDescription.descriprion = newDesk
   localStorage.setItem(id, JSON.stringify(itemToChangeDescription))
   let itemsInstate = [...state.doIt]
     itemsInstate.forEach((value)=>{
       if (value.id === id) {
         value.descriprion = newDesk
       }
     })
  return (
     [...itemsInstate]
 )
}

export default editDescriptionsFunc
