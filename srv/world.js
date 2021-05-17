module.exports = class say {
 
  hello(req) { 
      var greetings = "Deine Mudda"
      if (req.data.to == 'Marco') { 

        var greetings = "Hallo"  
    }
    else {
        var greetings = "Ola"  
    }
    return `${greetings} ${req.data.to}!` }
}


/*module.exports = class calc {
    square(req) {
        sq = req.data.b * req.data.b ;
        return sq;
    }
}*/


