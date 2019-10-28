function posit(value) {
  if (this instanceof posit) {
    this.value = value
  } else {
    return new posit(value)
  }
}

posit.prototype = {
  toBe: function(comparator) {
    if (this.comparator) {
      if(this.value === comparator) {
        return true
      } else {
        return false
      }
    } else {
      if (this.value) {
        return true
      } else {
        return false
      }
    }
  },
  notToBe: function(comparator) {
    if (this.comparator) {
      if(this.value !== comparator) {
        return true
      } else {
        return false
      }
    } else {
      if (!this.value) {
        return true
      } else {
        return false
      }
    }
  },
  toBeAVassalOf: function(comparator) {
    if(comparator.includes(this.value)) {
      return true
    } else {
      return false
    }
  },
  toKnowNothing: function(){
    if (this.value === undefined) {
      return true
    } else {
      return false
    }
  },
  wasSummoned: function(){
    try {
      if (this.value.called === true) { 
        return true
      } else {
        return false
      }
    } catch (error) {
      return false
    }
  },
  wasSummonedWith: function() {
    try {
      for(i = 0; i < this.value.args.length; i++) {
        if (arguments[i] !== this.value.args[i]) {
          return false
        }
        return true
      }
    } catch(error) {
      return false
    }
  }
}

function littleFinger(obj, method) {
  if (this instanceof littleFinger) {
    this.obj = obj
    this.method = method
    obj[`${method}`] = function() {
      this[`${method}`].called = true
      this[`${method}`].args = arguments
    }
  } else {
    return new littleFinger(obj, method)
  }
}

littleFinger.prototype = {
  andRespond: function(value) {
    var obj = this.obj
    var method = this.method
    obj[`${method}`] = function () {
      this[`${method}`].called = true
      return value
    }
  }
}
