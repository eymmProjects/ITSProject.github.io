const {response} = require('express');
var express = require('express');
var router = express.Router();
var https = require('https');
// let jsFunction = require(__dirname + '/public/js/index.js');
let jsFunction = require('../../public/js/index');
let lessons = {
  lesson2: {
    //l1
    l1Title: 'Doctype',
    l1Content: [
      'A <!DOCTYPE html> tag is declaration that tells a browser which type of html document are creating',
      'While not absolutely required by most browsers, it is highly recommended that a <!DOCTYPE html> tag is included in all HTML document so they know the best way to parse your page. HTML validators will require a <!DOCTYPE html> tag',
    ],
    l1Activity:
      'Start a new HTML document by adding a <!DOCTYPE html> tag on the first line.',
    l1ActivityHint: [
      'In the textarea add the <!DOCTYPE html> tag on the first line',
    ],
    l1Next: 'les2/l2',
    l1Prev: 'l1',
  },
};

router.get('/les2/l1', function (req, res) {
  // const url = 'https://validator.w3.org/#validate_by_input';
  // https.get(url, function (response) {
  //   console.log(response.statusCode);
  //   response.on('data', function (data) {
  //     const validatorApi = JSON.parse(data);
  //     console.log(validatorApi);
  //     res.send(validatorApi);
  //   });
  // });

  res.render('lessons/lesson2/lesson2-1', {
    l1Title: lessons.lesson2.l1Title,
    l1Content: lessons.lesson2.l1Content,
    l1Activity: lessons.lesson2.l1Activity,
    l1ActivityHint: lessons.lesson2.l1ActivityHint,
  });
});

router.post('/les2/l1', (req, res) => {
  let inputmsg = req.body.inputMsg;

  let checker = jsFunction.checkedMsgl2l1(inputmsg);
  // res.write(`<h1> ${checker} </h1>`);
  // if (checker === 'You can now proceed to the next lesson') {
  //   res.write(`<button
  //           class="btn btn-primary btn-submit"
  //           type="submit"
  //           name="button"
  //         >
  //         <a href="/les2/l2">
  //         Next
  //         </a>
  //         </button>`);
  // } else {
  //   res.write(
  //     `HINT: ${lessons.lesson2.l1ActivityHint}
  //         <br>
  //     <button
  //           class="btn btn-primary btn-submit"
  //           type="submit"
  //           name="button"
  //         >
  //         <a href="/les2/l1">
  //         Back
  //         </a>
  //         </button>
  //         `
  //   );
  // }

  // res.send();

  res.render('lessons/lesson2/lesson2-Post', {
    checker: checker,
    l1ActivityHint: lessons.lesson2.l1ActivityHint,
    l1Next: lessons.lesson2.l1Next,
    l1Prev: lessons.lesson2.l1Prev,
  });
});

module.exports = router;
