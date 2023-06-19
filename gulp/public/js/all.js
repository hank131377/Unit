var newFunction = function () {
    console.log('6')
  },
  oldFunction = function () {
    console.log('8')
  },
  newFu =
    (newFunction(),
    function () {
      console.log('19')
    })
newFu()
//# sourceMappingURL=all.js.map
