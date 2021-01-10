var express = require('express');
var router = express.Router();

// let jsFunction = require(__dirname + '/public/js/index.js');
let jsFunction = require('../../public/js/index');
let lessons = {
  lesson2: {
    //l2
    l2Title: 'HTML',
    l2Content:
      'The text between <html> and </html> describes a webpage all webpage content processed by a browser should be inside this pair of tags',
    l2Activity:
      'Insert an HTML  start tag <html> and an HTML end tag </html> on separate lines after your <!doctype html> tag',
    l2ActivityHint: [
      'Insert an HTML start tag <Html> and an HTML end tag </Html> on separate lines after your <!DOCTYPE html> tag',
    ],
    l2ActivityText: ['<!DOCTYPE html>'],
    l2Next: 'les2/l3',
    l2Prev: 'l2',
  },
};

// router.get('/les2/l2', function (req, res) {
//   res.render(__dirname + '/views/lessons/lesson2/lesson2-2', {
//     l1Title: lessons.lesson2.l2Title,
//     l1Content: lessons.lesson2.l2Content,
//     l1Activity: lessons.lesson2.l2Activity,
//     l1ActivityHint: lessons.lesson2.l2ActivityHint,
//   });
// });

router.get('/les2/l2', function (req, res) {
  res.render('lessons/lesson2/lesson2-2', {
    l1Title: lessons.lesson2.l2Title,
    l1Content: lessons.lesson2.l2Content,
    l1Activity: lessons.lesson2.l2Activity,
    l1ActivityHint: lessons.lesson2.l2ActivityHint,
    l1ActivityText: lessons.lesson2.l2ActivityText,
  });
});

router.post('/les2/l2', (req, res) => {
  let inputmsg = req.body.inputMsg;

  // console.log(inputmsg);
  let checker = jsFunction.checkedMsgl2l2(inputmsg);
  res.render('lessons/lesson2/lesson2-Post', {
    checker: checker,
    l1ActivityHint: lessons.lesson2.l2ActivityHint,
    l1Next: lessons.lesson2.l2Next,
    l1Prev: lessons.lesson2.l2Prev,
  });
});
module.exports = router;
