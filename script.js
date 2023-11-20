const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
    let keys = Object.keys(sampleObject);
  // console.log(keys.indexOf(key));
  if (keys.indexOf(key) !== -1) {
    return true;
  } else {
    return false;
  }
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
