
 let changePriorityInDoigFunc = (id, newPriority ,state ) => {
   let itemToChange =  JSON.parse(window.localStorage.getItem(id));
   itemToChange.priority = newPriority;
   localStorage.setItem(id, JSON.stringify(itemToChange))
   let dataDoing = [...state.doing];
    dataDoing.forEach((value)=>{
      if (value.id == id) {
        value.priority = newPriority;
      }
    })
    let doingNormal = []
    let doingLow = []
    let doingHight = []
    dataDoing.forEach((value)=>{
      if (value.priority == 3) {
        doingLow = [...doingLow, value]
      }else if (value.priority == 2) {
          doingHight = [...doingHight, value]
      }else {
        doingNormal = [...doingNormal, value]
      }
    })

    doingNormal.sort((a,b) => {
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
    [...doingHight,...doingNormal,...doingLow]
 )
}

export default changePriorityInDoigFunc
