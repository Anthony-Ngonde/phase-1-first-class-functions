function receivesAFunction(cb) {
    cb()
  }
  
  function returnsANamedFunction() {
    return function named() {
      console.log("The cat's name is Rose.")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('The cat has no name.')
    }
  }