const {response} = require('express');
var express = require('express');
var router = express.Router();
var https = require('https');
// let jsFunction = require(__dirname + '/public/js/index.js');
let jsFunction = require('../../public/js/index');
let lessons = {
  lesson3: {
    //l1
    l1Title: 'Recap',
    l1Content: [
      'This is a recap of the Framework lesson.',
      '<!DOCTYPE html>',
      '<html>',
      '<head>',
      '<title> Input text here </title>',
      '</head>',
      '<body>',
      '</body>',
      '</html>',
    ],
    l1Activity: [
      'Add the <!DOCTYPE html> tag and tag pairs of <html>,<head>, <title>, and <body>',
      'Each pair must include an end tag',
      'Type My Favorites between the title tag start and end.',
    ],
    l1ActivityHint: [
      '<!DOCTYPE html',
      '<html>',
      '<head>',
      '<title>',
      'Some text here',
      '</title>',
      '</head>',
      '<body>',
      'Some text here',
      '</body>',
      '</html>',
    ],
    l1Next: 'les3/l2',
    l1Prev: 'l1',
  },
};

router.get('/les3/l1', function (req, res) {
  // const url = 'https://validator.w3.org/#validate_by_input';
  // https.get(url, function (response) {
  //   console.log(response.statusCode);
  //   response.on('data', function (data) {
  //     const validatorApi = JSON.parse(data);
  //     console.log(validatorApi);
  //     res.send(validatorApi);
  //   });
  // });

  res.render('lessons/lesson3/lesson3-1', {
    l1Title: lessons.lesson3.l1Title,
    l1Content: lessons.lesson3.l1Content,
    l1Activity: lessons.lesson3.l1Activity,
    // l1ActivityHint: lessons.lesson3.l1ActivityHint,
  });
});

router.post('/les3/l1', (req, res) => {
  let inputmsg = req.body.inputMsg;
  let checker = jsFunction.checkedMsgl3l1(inputmsg);

  res.write(inputmsg);
  res.write('<br>');
  res.write(checker);
  if (checker === 'You can now proceed to the next lesson.') {
    res.write(`<button><a href='/les3/l2 '> Next </a></button>`);
  } else {
    res.write(
      `HINT: ${lessons.lesson3.l1ActivityHint}
          <br>
      <button
            class="btn btn-primary btn-submit"
            type="submit"
            name="button"
          >
          <a href="/les3/l1">
          Back
          </a>
          </button>
          `
    );
  }

  res.send();
});

// router.post('/les3/l1', (req, res) => {
//   let inputmsg = req.body.inputMsg;

//   let checker = jsFunction.checkedMsgl3l1(inputmsg);
//   // res.write(`<h1> ${checker} </h1>`);
//   // if (checker === 'You can now proceed to the next lesson') {
//   //   res.write(`<button
//   //           class="btn btn-primary btn-submit"
//   //           type="submit"
//   //           name="button"
//   //         >
//   //         <a href="/les2/l2">
//   //         Next
//   //         </a>
//   //         </button>`);
//   // } else {
//   //   res.write(
//   //     `HINT: ${lessons.lesson2.l1ActivityHint}
//   //         <br>
//   //     <button
//   //           class="btn btn-primary btn-submit"
//   //           type="submit"
//   //           name="button"
//   //         >
//   //         <a href="/les2/l1">
//   //         Back
//   //         </a>
//   //         </button>
//   //         `
//   //   );
//   // }

//   // res.send();

//   res.render('lessons/lesson3/lesson3-Post', {
//     checker: checker,
//     l1ActivityHint: lessons.lesson3.l1ActivityHint,
//     l1Next: lessons.lesson3.l1Next,
//     l1Prev: lessons.lesson3.l1Prev,
//   });
// });

module.exports = router;
