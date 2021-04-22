'use strict';

let o = {
  m: function() {
    this === o;
    
    const f =() => {
      this === o;
    }
    f();
  }
}

o.m();