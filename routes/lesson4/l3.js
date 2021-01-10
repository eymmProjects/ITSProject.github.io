var express = require('express');
var router = express.Router();

// let jsFunction = require(__dirname + '/public/js/index.js');
let jsFunction = require('../../public/js/index');
let lessons = {
  lesson3: {
    //l2
    l3Title: '<P>',
    l3Content: [
      'Use paragraph tags to define a paragraph. Include both a start and end tag <p> </p>',
      '<!DOCTYPE html',
      '<html>',
      '<head>',
      '<title>',
      'Some text here',
      '</title>',
      '</head>',
      '<body>',
      '<p>',
      ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nostrum utcorporis deleniti Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nostrum utcorporis deleniti',
      '</p>',
      '</body>',
      '</html>',
    ],
    l3Activity: [
      'After each heading tag set, add a <p> tag set for a total of 3 sets',
      'Add 2 sentences in each <p> set',
    ],
    l3ActivityHint: [
      '<!DOCTYPE html',
      '<html>',
      '<head>',
      '<title>',
      'Some text here',
      '</title>',
      '</head>',
      '<body>',
      '<p>',
      '</p>',
      '</body>',
      '</html>',
    ],
    l3ActivityText: [
      '<!DOCTYPE html>',
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
    l3Next: 'les3/l4',
    l3Prev: 'l3',
  },
};

router.get('/les3/l3', function (req, res) {
  res.render('lessons/lesson3/lesson3-3', {
    l1Title: lessons.lesson3.l3Title,
    l1Content: lessons.lesson3.l3Content,
    l1Activity: lessons.lesson3.l3Activity,
    l1ActivityHint: lessons.lesson3.l3ActivityHint,
    l1ActivityText: lessons.lesson3.l3ActivityText,
  });
});

router.post('/les3/l3', (req, res) => {
  let inputmsg = req.body.inputMsg;
  let checker = jsFunction.checkedMsgl3l3(inputmsg);

  res.write(inputmsg);
  res.write('<br>');
  res.write(checker);
  if (checker === 'You can now proceed to the next lesson.') {
    res.write(`<button><a href=' /les3/l4 '> Next </a></button>`);
  } else {
    res.write(
      `HINT: ${lessons.lesson3.l1ActivityHint}
          <br>
      <button
            class="btn btn-primary btn-submit"
            type="submit"
            name="button"
          >
          <a href="/les3/l3">
          Back
          </a>
          </button>
          `
    );
  }

  res.send();
});

// router.post('/les3/l3', (req, res) => {
//   let inputmsg = req.body.inputMsg;

//   // console.log(inputmsg);
//   let preview = res.write(inputmsg);
//   let checker = jsFunction.checkedMsgl3l3(inputmsg);
//   res.render('lessons/lesson3/lesson3-Post', {
//     checker: checker,
//     l1ActivityHint: lessons.lesson3.l2ActivityHint,
//     l1Next: lessons.lesson3.l2Next,
//     l1Prev: lessons.lesson3.l2Prev,
//   });
// });

module.exports = router;
