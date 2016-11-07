var shop = require('../../')

exports.init = function (workshopper) {
  this.problem = {
    file: path.join(__dirname, 'problem.{workshopper.lang}.txt')
  }
}

exports.verify = function (args, cb) {
  if (!shop.cwd()) return cb(false)

  var total = shop._adventures.length
  var completed = shop.state.completed.length
  var remain = total - completed

  // the 1 remaining would be this one, of course
  if (remain > 1) {
    console.log('It looks like you still have more work to do.')
    return cb(false)
  }

  console.log(function () { /*
There is SO MUCH MORE that npm can do.  Some of the things that we didn't
have time to cover in this modest little workshop include:

1. Splitting your app up into multiple modules
2. Sharing private code with teammates using scoped modules
3. Other fun npm commands, like `edit` and `bugs` and `explore`!

You can still learn more about all the fun you and npm can have together.
It all starts with the thought: "There should be a module that does this..."

Your adventure is awaiting you at https://www.npmjs.com/

See you on the internet!

  */ }.toString().split('\n').slice(1, -1).join('\n'))

  return cb(true)
}
