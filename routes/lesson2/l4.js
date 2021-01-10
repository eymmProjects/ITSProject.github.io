var express = require('express');
var router = express.Router();

// let jsFunction = require(__dirname + '/public/js/index.js');
let jsFunction = require('../../public/js/index');
let lessons = {
  lesson2: {
    // l4
    l4Title: 'BODY',
    l4Content: [
      'The text between <body> and </body> contains information that you want displayed on your webpage. This pair has a start and an end tag',
    ],
    l4Activity: [
      'After the </head> tag, insert a <body> tag set on separate lines',
      'Insert a sentence or two inside the <body>',
    ],
    l4ActivityText: [
      '<!DOCTYPE html>',
      '<html>',
      '<head>',
      '<title>',
      'Some text here',
      '</title>',
      '</head>',
      '</html>',
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
    l4Next: '',
    l4Prev: 'l4',
  },
};

router.get('/les2/l4', function (req, res) {
  res.render('lessons/lesson2/lesson2-4', {
    l1Title: lessons.lesson2.l4Title,
    l1Content: lessons.lesson2.l4Content,
    l1Activity: lessons.lesson2.l4Activity,
    // l1ActivityHint: lessons.lesson2.l3ActivityHint,
    l1ActivityText: lessons.lesson2.l4ActivityText,
  });
});

router.post('/les2/l4', (req, res) => {
  let inputmsg = req.body.inputMsg;

  // console.log(inputmsg);
  let checker = jsFunction.checkedMsgl2l4(inputmsg);

  res.render('lessons/lesson2/lesson2-Post', {
    checker: checker,
    l1ActivityHint: lessons.lesson2.l4ActivityHint,
    l1Next: lessons.lesson2.l4Next,
    l1Prev: lessons.lesson2.l4Prev,
  });
});
module.exports = router;
