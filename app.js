//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
let path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname + '/public')));

let jsFunction = require(__dirname + '/public/js/index.js');

const React = require('react');
const ReactDom = require('react-dom');
// console.log(jsFunction);
const homeStartingContent =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit perferendis ea nostrum eligendi sit, harum asperiores tempore, iure vel amet a autem nam optio distinctio illum. Autem dolores in provident qui aspernatur laboriosam beatae, assumenda veritatis totam eveniet iure dicta saepe illum ea ipsam, voluptatibus ratione error. Nihil, possimus eveniet';

const aboutContent =
  'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.';
const contactContent =
  'Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.';

// lessons
// 1

let lessons = {
  lesson1: {
    l1Title: 'History of HTML?',
    l1Content:
      'HTML was created by Sir Tim Berners-Lee in late 1991 but was not released officially, published in 1995 as HTML 2.0. HTML 4.01 was published in late 1999 and was a major version of HTML. HTML is a very evolving markup language and has evolved with various versions updating. Long before its revised standards and specifications are carried in, each version has allowed its user to create web pages in a much easier and prettier way and make sites very efficient.',
    //
    l2Title: 'What is HTML?',
    l2Content: [
      'HTML is a language for describing web pages',
      'HTML stands for Hyper text Markup language',
      'HTML is not a programming language, it is a markup language, A markup language',
      'A markup language is a set of markup tags, The purpose of the tags are to describt page contents.',
    ],
    l2Content1: [
      'HTML5 is the newest version of HTML',
      'It incorporates all features from earlier versions of HTML including the stricter XHTML.',
      'It adds a divers set of new tools for teh web developer to use.',
      ' It is still a work in progress. Browser are still working toward full HTML5  support. It may be a few more years.',
    ],

    l3Title: 'Goal of HTML?',
    l3Content: [
      'Support all existing web pages. With HTML5, there is no requirement to go back and revise older websites.',
      'Reduce teh need for external plugins and scripts to show website content',
      'Improve the semantic definition (i.e meaning and purpose) of page elements.',
      'Make the rendering of web content universal and independent of the device being used.',
      'Handle web documents errors in a better and more consistent fashion',
    ],
    l4Title: 'HTML SYNTAX',
    l4Content: [
      'lowercase tags!',
      'close void elements! (img, meta, input, ... ).',
      'no empty attributes.',
      'always put attributes values in double quotes!.',
      'small degree of freedom, but very detailed rules for parsing.',
      'validation will matter.',
      "keep a clean coding style, you'll thank yourself for it later.",
      'Html 5 is designed so that old html4 browsers can safely ignore new html5 constructs.',
    ],
  },
  lesson2: {
    //l1
    l1Title: 'Doctype',
    l1Content: [
      'A <!doctype html> tag is declaration that tells a browser which type of html document are creating',
      'While not absolutely required by most browsers, it is highly recommended that a <!doctype html> tag is included in all HTML document so they know the best way to parse your page. HTML validators will require a <!doctype html> tag',
    ],
    l1Activity:
      'Start a new HTML document by adding a <!doctype html> tag on the first line.',
    l1ActivityHint:
      'In the textarea add the <!doctype html> tag on the first line',
  },
};

app.get('/', function (req, res) {
  res.render('home', {introContent: homeStartingContent});
});

app.get('/about', function (req, res) {
  res.render('about', {aboutContent: aboutContent});
});

app.get('/contact', function (req, res) {
  res.render('contact', {contactContent: contactContent});
});

// ############################## lesson 2

app.get('/les1', function (req, res) {
  res.render(__dirname + '/views/lessons/lesson1/lesson1');
});

// lesson 1
app.get('/les1/l1', function (req, res) {
  res.render(__dirname + '/views/lessons/lesson1/lesson1-1', {
    l1Title: lessons.lesson1.l1Title,
    l1Content: lessons.lesson1.l1Content,
  });
});

app.get('/les1/l2', function (req, res) {
  res.render(__dirname + '/views/lessons/lesson1/lesson1-2', {
    l1Title: lessons.lesson1.l2Title,
    l1Content: lessons.lesson1.l2Content,
    l2Content: lessons.lesson1.l2Content1,
  });
});
app.get('/les1/l3', function (req, res) {
  res.render(__dirname + '/views/lessons/lesson1/lesson1-3', {
    l1Title: lessons.lesson1.l3Title,
    l1Content: lessons.lesson1.l3Content,
  });
});

app.get('/les1/l4', function (req, res) {
  res.render(__dirname + '/views/lessons/lesson1/lesson1-4.ejs', {
    l1Title: lessons.lesson1.l4Title,
    l1Content: lessons.lesson1.l4Content,
  });
});

// ############################## lesson 2

app.get('/les2', function (req, res) {
  res.render(__dirname + '/views/lessons/lesson2/lesson2');
});

//l2l1
//set routes for l1
let l2l1 = require('./routes/lesson2/l1.js');
app.use('/', l2l1);

// l2l2
let l2l2 = require('./routes/lesson2/l2.js');
app.use('/', l2l2);

//l2l3
let l2l3 = require('./routes/lesson2/l3.js');
app.use('/', l2l3);

//l2l4
let l2l4 = require('./routes/lesson2/l4.js');
app.use('/', l2l4);

//########################## lesson 3

app.get('/les3', function (req, res) {
  res.render(__dirname + '/views/lessons/lesson3/lesson3');
});

//l3l1
//set routes for l1
let l3l1 = require('./routes/lesson3/l1.js');
app.use('/', l3l1);

//l3l2
//set routes for l2
let l3l2 = require('./routes/lesson3/l2.js');
app.use('/', l3l2);

//l3l3
//set routes for l2
let l3l3 = require('./routes/lesson3/l3.js');
app.use('/', l3l3);

//l3l4
//set routes for l2
let l3l4 = require('./routes/lesson3/l4.js');
app.use('/', l3l4);

//########################## lesson 3

app.get('/les4', function (req, res) {
  res.render(__dirname + '/views/lessons/lesson4/lesson4');
});


const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Server started on port 3000.');
});
