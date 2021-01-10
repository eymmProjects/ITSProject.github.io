var express = require('express');
var router = express.Router();

// let jsFunction = require(__dirname + '/public/js/index.js');
let jsFunction = require('../../public/js/index');
let lessons = {
  lesson3: {
    //l2
    l4Title: '<BR>',
    l4Content: [
      'Use the <br> tag to start a new line. <br> is an empty tag and there is no end tag',
      '<!DOCTYPE html>',
      '<html>',
      '<head>',
      '<title>',
      'Some text here',
      '</title>',
      '</head>',
      '<body>',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nostrum ut <br>',
      'corporis deleniti dolorum quibusdam magni blanditiis minus, ratione <br>',
      '</body>',
      '</html>',
    ],
    l4Activity: [
      'After the first sentence in each paragraph, add a <br> tag.',
      'Count your <br> tags. You should have three',
    ],
    l4ActivityHint: [
      '<!DOCTYPE html',
      '<html>',
      '<head>',
      '<title>',
      'Some text here',
      '</title>',
      '</head>',
      '<body>',
      '</body>',
      '</html>',
    ],
    l4ActivityText: [
      '<!DOCTYPE html>',
      '<html>',
      '<head>',
      '<title>',
      'Some text here',
      '</title>',
      '</head>',
      '<body>',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nostrum ut corporis deleniti dolorum quibusdam magni blanditiis minus, ratione praesentium culpa earum quis voluptas enim, nesciunt iure tenetur expedita voluptatum.',
      '</body>',
      '</html>',
    ],
    l4Next: 'les3/l3',
    l4Prev: 'l4',
  },
};

router.get('/les3/l4', function (req, res) {
  res.render('lessons/lesson3/lesson3-4', {
    l1Title: lessons.lesson3.l4Title,
    l1Content: lessons.lesson3.l4Content,
    l1Activity: lessons.lesson3.l4Activity,
    l1ActivityHint: lessons.lesson3.l4ActivityHint,
    l1ActivityText: lessons.lesson3.l4ActivityText,
  });
});

router.post('/les3/l4', (req, res) => {
  let inputmsg = req.body.inputMsg;
  let checker = jsFunction.checkedMsgl3l4(inputmsg);

  res.write(inputmsg);
  res.write('<br>');
  res.write(checker);
  if (checker === 'You can now proceed to the next lesson.') {
    res.write(`<button><a href=' /les4 '> Next </a></button>`);
  } else {
    res.write(
      `HINT: ${lessons.lesson3.l1ActivityHint}
          <br>
      <button
            class="btn btn-primary btn-submit"
            type="submit"
            name="button"
          >
          <a href="/les3/l4">
          Back
          </a>
          </button>
          `
    );
  }

  res.send();
});
module.exports = router;
