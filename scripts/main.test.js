QUnit.module('Main', {})

QUnit.test( "Test calc_numitems", function( assert ) {
    assert.equal(calc_numitems(3, 4), 12, "3 items per bag, 4 bags, 12 total");
});


window.addEventListener('load', () => {
    const appURL = '../index.html'
    const openingTag = '<main class="container mt-5 flex-fill">'
    const closingTag = '</main>'
    fetch(appURL, { method: 'GET' })
      .then(response => {
        return response.text() // returns promise
      })
      .then(txt => {
        const start = txt.indexOf(openingTag)
        const end = txt.indexOf(closingTag) + closingTag.length
        const html = txt.substring(start, end)
        const qunitFixtureBody = document.getElementById('qunit-fixture')
        qunitFixtureBody.innerHTML = html
        console.info(qunitFixtureBody)
        QUnit.start()
      })
      .catch(error => {
        console.error('error:', error);
        QUnit.start()
      })
  })
