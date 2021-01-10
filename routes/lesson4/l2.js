var express = require('express');
var router = express.Router();

// let jsFunction = require(__dirname + '/public/js/index.js');
let jsFunction = require('../../public/js/index');
let lessons = {
  lesson3: {
    //l2
    l2Title: '<H1>',
    l2Content: [
      'Use heading tags to introduce divisions of a webpage. Sex total heading levels can ve portrayed using <h1>,</h1> to <h6>,</h6>',
      'There are a total of 6 header tags the browsers displays in sequentially smaller font sized',
      'The font sizes are base on the number of the tags. If the tags is equal to <h1> the more the font size is bigger.',
    ],
    l2Activity: [
      'Between the <body> tag set, insert different 3 sets of header tags on separate lines',
      'Add <h1> your favorite tv shows</h1>',
      'Add <h3> another favorite tv shows</h3>',
      'Add <h6> another favorite tv shows</h6>',
    ],
    l2ActivityHint: [
      '<!DOCTYPE html',
      '<html>',
      '<head>',
      '<title>',
      'Some text here',
      '</title>',
      '</head>',
      '<body>',
      '<h1>',
      '</h1>',
      '<h3>',
      '</h3>',
      '<h6>',
      '</h6>',
      '</body>',
      '</html>',
    ],
    l2ActivityText: [
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
    l2Next: 'les3/l3',
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

router.get('/les3/l2', function (req, res) {
  res.render('lessons/lesson3/lesson3-2', {
    l1Title: lessons.lesson3.l2Title,
    l1Content: lessons.lesson3.l2Content,
    l1Activity: lessons.lesson3.l2Activity,
    l1ActivityHint: lessons.lesson3.l2ActivityHint,
    l1ActivityText: lessons.lesson3.l2ActivityText,
  });
});

router.post('/les3/l2', (req, res) => {
  let inputmsg = req.body.inputMsg;
  let checker = jsFunction.checkedMsgl3l2(inputmsg);

  res.write(inputmsg);
  res.write('<br>');
  res.write(checker);
  if (checker === 'You can now proceed to the next lesson.') {
    res.write(`<button><a href='/les3/l3 '> Next </a></button>`);
  } else {
    res.write(
      `HINT: ${lessons.lesson3.l1ActivityHint}
          <br>
      <button
            class="btn btn-primary btn-submit"
            type="submit"
            name="button"
          >
          <a href="/les3/l2">
          Back
          </a>
          </button>
          `
    );
  }

  res.send();
});

// router.post('/les3/l2', (req, res) => {
//   let inputmsg = req.body.inputMsg;

//   // console.log(inputmsg);
//   let checker = jsFunction.checkedMsgl3l2(inputmsg);
//   res.render('lessons/lesson3/lesson3-Post', {
//     checker: checker,
//     l1ActivityHint: lessons.lesson3.l2ActivityHint,
//     l1Next: lessons.lesson3.l2Next,
//     l1Prev: lessons.lesson3.l2Prev,
//   });
// });
module.exports = router;
