 let componentWillMountFunc = (id, state ) => {
let dataInStorege = [];
let doit = [];
let doing = [];
let done = [];
let aborted = [];

for ( var i = 0, len = localStorage.length; i < len; ++i ) {
dataInStorege = [...dataInStorege, JSON.parse(localStorage.getItem( localStorage.key( i )) )] ;
}
dataInStorege.forEach((value,index,arr)=>{
if (value.placement === "doit") {
  doit = [...doit, value]
}else if (value.placement === "doing") {
  doing = [...doing, value]
} else if (value.placement === "done") {
  done = [...done, value]
} else if (value.placement === "aborted") {
  aborted = [...aborted, value]
}
})

// ________________________________________________DOIT SORT ________________________________________
let doitNormal = []
let doitLow = []
let doitHight = []
doit.forEach((value)=>{
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
// _________________________________________________________DOING SORT___________________________________________

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

// ______________________________________________________DONE SORT___________________________________________
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
// ______________________________________________________ABORT SORT___________________________________________
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
return {
 doIt : [...doitHight, ...doitNormal, ...doitLow],
 doing: [...doingHight,...doingNormal, ...doingLow],
 done:  [...doneHight, ...doneNormal, ...doneLow],
 aborted: [...abortedHight, ...abortedNormal, ...abortedLow],
}
}

export default componentWillMountFunc
