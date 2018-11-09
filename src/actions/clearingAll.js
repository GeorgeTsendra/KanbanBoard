
 let removeFieldHeandler = () => {
  window.localStorage.clear()
  return (
    {
      doIt : [],
      doing:  [],
      done:  [],
      aborted:  [],
    }
  )

}

export default removeFieldHeandler
