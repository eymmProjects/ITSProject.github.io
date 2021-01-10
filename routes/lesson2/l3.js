var express = require('express');
var router = express.Router();

// let jsFunction = require(__dirname + '/public/js/index.js');
let jsFunction = require('../../public/js/index');
let lessons = {
  lesson2: {
    // l3
    l3Title: 'HEAD',
    l3Content: [
      'The text between <head> and </head> contains information about the document and it is often referred to as metadata. Tags and content inside the <head> tag may not be visible',
      'The <title> tag is an example of a tag that belongs inside the <head> tags. The <title> tag sets the document title.',
    ],
    l3Activity: [
      'Between the <html> tag set, insert a <head> tag set on separate lines',
      'Add a <title> tag set inside the <head> tags',
      'Between the <title> tags, add your title text',
    ],
    l3ActivityText: ['<!DOCTYPE html>', '<html>', '</html>'],
    l3ActivityHint: [
      '<!DOCTYPE html>',
      '<html>',
      '<head>',
      '<title>',
      'Some text here',
      '</title>',
      '</head>',
      '</html>',
    ],
    l3Next: 'les2/l4',
    l3Prev: 'l3',
  },
};

// router.get('/les2/l2', function (req, res) {
//   res.render(__dirname + '/views/lessons/lesson2/lesson2-2', {
//     l1Title: lessons.lesson2.l2Title,
//     l1Content: lessons.lesson2.l2Content,
//     l1Activity: lessons.lesson2.l2Activity,
//     l1ActivityHint: lessons.les  son2.l2ActivityHint,
//   });
// });

router.get('/les2/l3', function (req, res) {
  res.render('lessons/lesson2/lesson2-3', {
    l1Title: lessons.lesson2.l3Title,
    l1Content: lessons.lesson2.l3Content,
    l1Activity: lessons.lesson2.l3Activity,
    // l1ActivityHint: lessons.lesson2.l3ActivityHint,
    l1ActivityText: lessons.lesson2.l3ActivityText,
  });
});

router.post('/les2/l3', (req, res) => {
  let inputmsg = req.body.inputMsg;

  // console.log(inputmsg);
  let checker = jsFunction.checkedMsgl2l3(inputmsg);

  res.render('lessons/lesson2/lesson2-Post', {
    checker: checker,
    l1ActivityHint: lessons.lesson2.l3ActivityHint,
    l1Next: lessons.lesson2.l3Next,
    l1Prev: lessons.lesson2.l3Prev,
  });
});
module.exports = router;
