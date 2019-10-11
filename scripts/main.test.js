QUnit.module('Main', {})

QUnit.test( "Test Time", function( assert ) {
    assert.equal(calc_time(299792458), 1, "The speed of light");
    assert.equal(calc_time(1000000000000), 3335.6409519815206, "Time it takes light to travel 1 billion kilometers");
    assert.equal(calc_time(0), 0, "Light should travel 0 meters in 0 seconds");
});

QUnit.test( "Test Distance", function( assert ) {
    assert.equal(calc_dist(3), 899377374, "Light travels ~900 Thousand Kilometers in 3 seconds");
    assert.equal(calc_dist(1), 299792458, "Light travels ~300 Thousand Kilometers in 1 seconds");
    assert.equal(calc_dist(0), 0, "Light should travel 0 meters in 0 seconds");
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
