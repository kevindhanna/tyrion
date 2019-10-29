Describe('toBe', function() {
  It('returns true', function() {
    Demand(4).toBe(4)
  })
  It('returns false', function() {
    Demand(4).toBe(5)
  })
})
Describe('notToBe', function() {
  It('returns True', function() {
    Demand(4).notToBe(5)
  })
  It('returns False', function() {
    Demand(4).notToBe(4)
  })
})
Describe('toBeAVassalOf', function() {
  It('bends the knee', function() {
    Demand('Tyrells').toBeAVassalOf('Tyrells bend the knee to the Lannisters')
  })
  It('returns false', function() {
    Demand(4).toBeAVassalOf([1,2,3])
  })
})
Describe('toHaveBeenSummoned', function() {
  It('returns True', function() {
    johnSnow = {}
    LittleBird(johnSnow, 'knowingThings')
    johnSnow.knowingThings()
    Demand(johnSnow.knowingThings).toHaveBeenSummoned()
  })
  It('returns false', function() {
    johnSnow = {}
    LittleBird(johnSnow, 'knowingThings')
    Demand(johnSnow.knowingThings).toHaveBeenSummoned()
  })
})
Describe('toHaveBeenSummonedWith', function() {
  It('returns True', function() {
    johnSnow = {}
    LittleBird(johnSnow, 'knowingThings')
    johnSnow.knowingThings('Nothing')
    Demand(johnSnow.knowingThings).toHaveBeenSummoned('Nothing')
  })
  It('returns False', function() {
    johnSnow = {}
    LittleBird(johnSnow, 'knowingThings')
    johnSnow.knowingThings('Something')
    Demand(johnSnow.knowingThings).toHaveBeenSummonedWith('Nothing')
  })
})

