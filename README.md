# Tyrion

This is a tiny Game of Thrones themed Javascript testing framework developed as part of the Makers BnB challenge at Makers Academy - build an AirBnB clone in a week with no frameworks.

## Installation

`git clone` this repo into your project

## Usage

create a spec file under `/spec` and your file to be tested under `/src`  
There are some test examples in `spec/DemandSpec`. 

Add both files to the `TestCommencer.html` file and open it in a browser to see the results.
Passing tests are green, failing tests are red with a failure description underneath:
![Imgur](https://i.imgur.com/CVSuhTW.png)

## Examples

``` javascript
// Describe blocks act as a heading for the test results on the results page
// toBe checks that the given value === the expected value
Describe('toBe', function() {
  // It blocks are line items under their parent Describe block on the results page
  It('returns true', function() {
    Demand(4).toBe(4)
  })
  It('returns false', function() {
    Demand(4).toBe(5)
  })
})

// toBeAVassalOf checks that the given value is included in the given array/string
Describe('toBeAVassalOf', function() {
  It('bends the knee', function() {
    Demand('Tyrells').toBeAVassalOf('Tyrells bend the knee to the Lannisters')
  })
  It('returns false', function() {
    Demand(4).toBeAVassalOf([1,2,3])
  })
})

// toHaveBeenSummoned checks a LittleBird function has been called
Describe('toHaveBeenSummoned', function() {
  It('returns True', function() {
    johnSnow = {}
    // LitteBirds are used to double functions
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

// toHaveBeenSummonedWith checks that the LittleBird function received the expected Params when called
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

// LittleBirds can also return a given value if needed
var obj = {}
LittleBird(obj, 'someFunction').andRespond("The Spider sends his regards")
console.log(obj.someFunction())
=> "The Spider sends his regards"
```

### User Story 1
```
As a user,
so that I can test my pukka code,
I need an equally pukka testing framework
```
### User Story 2
```
As a user,
so that I can check behaviour of my code,
I want to be able to test if an output equals an expected value
```
### User Story 3
```
As a user,
so that I can check behaviour of my code,
I want to be able to test if an output does not equal an expected value
```
### User Story 4
```
As a user,
so that I can check behaviour of my code,
I want to be able to confirm a function was called
```
### User Story 5
```
As a user,
so that I can check behaviour of my code,
I want to be able to create object doppelgangers
```
### User Story 6
```
As a user,
so that I can check behaviour of my code,
I want to be able to test an output contains an expected value
```
