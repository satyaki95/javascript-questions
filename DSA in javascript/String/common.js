function findCommonChars(strArray) {
    let commonChars = [];
    let firstStr = strArray[0];
    for (let i = 0; i < firstStr.length; i++) {
      let char = firstStr.charAt(i);
      let charExistsInAll = true;
      for (let j = 1; j < strArray.length; j++) {
        if (strArray[j].indexOf(char) === -1) {
          charExistsInAll = false;
          break;
        }
      }
      if (charExistsInAll && commonChars.indexOf(char) === -1) {
        commonChars.push(char);
      }
    }
    return commonChars;
  }
  
  // Example usage:
  let strArray = ["wellness", "Awesome"];
  let commonChars = findCommonChars(strArray);
  console.log(commonChars.join(","));