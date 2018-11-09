
 let changePriorityInDoItFunc = (id, newPriority ,state ) => {
   let itemToChange =  JSON.parse(window.localStorage.getItem(id));
   itemToChange.priority = newPriority;
   localStorage.setItem(id, JSON.stringify(itemToChange))
   let dataDoIt = [...state.doIt];
    dataDoIt.forEach((value)=>{
      if (value.id == id) {

        value.priority = newPriority;

      }
    })
    let doitNormal = []
    let doitLow = []
    let doitHight = []
    dataDoIt.forEach((value)=>{
      if (value.priority == 3) {
        doitLow = [...doitLow, value]
      }else if (value.priority == 2) {
          doitHight = [...doitHight, value]
      }else {
        doitNormal = [...doitNormal, value]
      }
    })

    doitNormal.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    doitLow.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
    doitHight.sort((a,b)=>{
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;
    })
  return (
     [...doitHight, ...doitNormal,...doitLow]
 )
}

export default changePriorityInDoItFunc
