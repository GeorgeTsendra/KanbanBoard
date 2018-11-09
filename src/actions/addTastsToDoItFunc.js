
 let addTastsToDoItFunc = (value, doIt ) => {
   let copyOfDoIt = [...doIt, value];
   let doitNormal = []
   let doitLow = []
   let doitHight = []
   copyOfDoIt.forEach((value)=>{
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

 window.localStorage.setItem(value.id, JSON.stringify(value));
  return (
     [...doitHight, ...doitNormal, ...doitLow]
 )
}

export default addTastsToDoItFunc
