// jshint v6

//***functions
// phrase convert to array
//   var w = 'hello    my brothers    ;';
//   w.split(/(\s+)/).filter(function (e) {
//     return e.trim().length > 0;
//   });

function phraseArrConverter(inputmsg) {
  let arrContainer = [];
  let word;

  // arrContainer = inputmsg.match(/\S+/g);
  arrContainer = inputmsg.match(/(<([^>]+)>)/g);
  // console.log(arrContainer);
  return arrContainer;
}

//*** */ check using regex
function checkUserInput(input) {
  const re = /[a-zA-Z]/g;
  let flag = false;
  if (re.test(input)) {
    flag = true;
  } else {
    flag = false;
  }
  console.log(`checkuser input ${flag}`);
  return flag;
}

//****function GETTAGCONTENT */
// check name in title
function getTagContent(input, startTag, endTag) {
  // return input.id.charAt(0).toUpperCase() + input.id.slice(1);

  let startTagTitle = input.indexOf(startTag);
  let startTagLen = startTag.length;
  let endTagTitle = input.indexOf(endTag);
  let content;

  if (startTag.slice(1) === endTag.slice(2)) {
    content = input.substring(startTagTitle + startTagLen, endTagTitle);
  }

  // console.log(input.substring(startTagTitle + startTagLen, endTagTitle));
  // console.log(`getTagcontent ${startTag}, ${endTag}`);
  // console.log(startTag.slice(1) === endTag.slice(2));
  return content;
}

// *** comparing array
function compareArr(arr1, arr2) {
  let flag;
  console.log(JSON.stringify(arr1));
  console.log(JSON.stringify(arr2));
  if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
    flag = true;
  } else {
    flag = false;
  }
  // console.log(flag);
  return flag;
}

function headers(msg) {
  var flag = false;
  if (msg.includes('<h1>') && msg.includes('</h1')) {
    flag = true;
  }
  if (msg.includes('<h2>') && msg.includes('</h2')) {
    flag = true;
  }
  if (msg.includes('<h3>') && msg.includes('</h3')) {
    flag = true;
  }
  if (msg.includes('<h4>') && msg.includes('</h4')) {
    flag = true;
  }
  if (msg.includes('<h5>') && msg.includes('</h5')) {
    flag = true;
  }
  if (msg.includes('<h6>') && msg.includes('</h6')) {
    flag = true;
  }

  return flag;
}

// *****************************************************************end functions
module.exports.checkedMsgl2l1 = function (inputmsg) {
  let feedBack;
  let ans = '<!DOCTYPE html>';
  if (inputmsg.trim() === ans) {
    feedBack = 'You can now proceed to the next lesson.';
  } else if (inputmsg.trim() === '') {
    feedBack = 'Invalid! text required';
  } else {
    feedBack = 'try again, Checked your code';
  }

  return feedBack;
};

module.exports.checkedMsgl2l2 = function (inputmsg) {
  let l2ArrContainer = ['<!DOCTYPE html>', '<html>', '</html>'];
  let feedBack;
  // compareArr(l2ArrContainer, phraseArrConverter(inputmsg));
  // console.log(compareArr);
  if (compareArr(l2ArrContainer, phraseArrConverter(inputmsg))) {
    feedBack = 'You can now proceed to the next lesson.';
  } else if (inputmsg.trim() === '') {
    feedBack = 'Invalid! text required.';
  } else {
    feedBack = 'try again, Checked your code.';
  }
  return feedBack;
};

//###################################### l2l3
module.exports.checkedMsgl2l3 = function (inputmsg) {
  let feedBack;
  let l2ArrContainer = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<title>',
    '</title>',
    '</head>',
    '</html>',
  ];
  // console.log(compareArr(l2ArrContainer, phraseArrConverter(inputmsg)));
  console.log(checkUserInput(getTagContent(inputmsg, '<title>', '</title>')));
  if (
    compareArr(l2ArrContainer, phraseArrConverter(inputmsg)) &&
    checkUserInput(getTagContent(inputmsg, '<title>', '</title>'))
  ) {
    feedBack = 'You can now proceed to the next lesson.';
  } else if (inputmsg.trim() === '') {
    feedBack = 'Invalid! text required.';
  } else {
    feedBack = 'try again, Checked your code.';
  }
  return feedBack;
};

//###################################### l2l4
module.exports.checkedMsgl2l4 = function (inputmsg) {
  let feedBack;
  let l2ArrContainer = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<title>',
    '</title>',
    '</head>',
    '<body>',
    '</body>',
    '</html>',
  ];

  if (
    compareArr(l2ArrContainer, phraseArrConverter(inputmsg)) &&
    checkUserInput(getTagContent(inputmsg, '<title>', '</title>')) === true &&
    checkUserInput(getTagContent(inputmsg, '<body>', '</body>')) === true
  ) {
    feedBack = 'You can now proceed to the next lesson.';
  } else if (inputmsg.trim() === '') {
    feedBack = 'Invalid! text required.';
  } else {
    feedBack = 'try again, Checked your code.';
  }
  return feedBack;
};

//
//
//

//***###################################### l3l1
module.exports.checkedMsgl3l1 = function (inputmsg) {
  let feedBack;
  let ArrContainer = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<title>',
    '</title>',
    '</head>',
    '<body>',
    '</body>',
    '</html>',
  ];
  // console.log(compareArr(l2ArrContainer, phraseArrConverter(inputmsg)));
  // console.log(checkUserInput(getTagContent(inputmsg, '<title>', '</title>')));

  if (
    compareArr(ArrContainer, phraseArrConverter(inputmsg)) &&
    checkUserInput(getTagContent(inputmsg, '<title>', '</title>')) === true
  ) {
    feedBack = 'You can now proceed to the next lesson.';
  } else if (inputmsg.trim() === '') {
    feedBack = 'Invalid! text required.';
  } else {
    feedBack = 'try again, Checked your code.';
  }
  return feedBack;
};

//l3l2
module.exports.checkedMsgl3l2 = function (inputmsg) {
  let feedBack;
  let ArrContainer = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<title>',
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
  ];
  // console.log(compareArr(l2ArrContainer, phraseArrConverter(inputmsg)));
  // console.log(checkUserInput(getTagContent(inputmsg, '<title>', '</title>')));

  if (
    compareArr(ArrContainer, phraseArrConverter(inputmsg)) &&
    checkUserInput(getTagContent(inputmsg, '<title>', '</title>')) === true &&
    headers(inputmsg)
  ) {
    feedBack = 'You can now proceed to the next lesson.';
  } else if (inputmsg.trim() === '') {
    feedBack = 'Invalid! text required.';
  } else {
    feedBack = 'try again, Checked your code.';
  }
  return feedBack;
};
//l3l3
module.exports.checkedMsgl3l3 = function (inputmsg) {
  let feedBack;
  let ArrContainer = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<title>',
    '</title>',
    '</head>',
    '<body>',
    '<p>',
    '</p>',
    '<p>',
    '</p>',
    '<p>',
    '</p>',
    '</body>',
    '</html>',
  ];
  if (
    (compareArr(ArrContainer, phraseArrConverter(inputmsg)) &&
      checkUserInput(getTagContent(inputmsg, '<title>', '</title>')) ===
        true) ||
    headers(inputmsg)
  ) {
    feedBack = 'You can now proceed to the next lesson.';
  } else if (inputmsg.trim() === '') {
    feedBack = 'Invalid! text required.';
  } else {
    feedBack = 'try again, Checked your code.';
  }
  return feedBack;
};

//l3l4
module.exports.checkedMsgl3l4 = function (inputmsg) {
  let feedBack;
  let ArrContainer = [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<title>',
    '</title>',
    '</head>',
    '<body>',
    '<br>',
    '<br>',
    '<br>',
    '</body>',
    '</html>',
  ];
  if (
    (compareArr(ArrContainer, phraseArrConverter(inputmsg)) &&
      checkUserInput(getTagContent(inputmsg, '<title>', '</title>')) ===
        true) ||
    (headers(inputmsg) && inputmsg.includes('<br>'))
  ) {
    feedBack = 'You can now proceed to the next lesson.';
  } else if (inputmsg.trim() === '') {
    feedBack = 'Invalid! text required.';
  } else {
    feedBack = 'try again, Checked your code.';
  }
  return feedBack;
};
