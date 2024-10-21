/**
The alphabet, from 'a' to 'z', is assigned weights corresponding to their ordinal positions. For instance, 'a' has a weight of 1, 'b' has a weight of 2, and so on, with 'z' having a weight of 26. The weight of a string is calculated by summing the weights of all its characters. Consider the string "gits" > gits = 7 + 9 + 20 + 19 = 55.

Example:
Input:
Given a string "abbcccd" and an array of queries "[1, 3, 9, 8]". The queries are used to determine the status of the numbers in the queries based on the following rules:
1. If a number in the queries is equal to the weight of a character or substring, return "Yes".
2. If a number in the queries is different from the weight of a character or substring, return "No".
a = 1
b = 2
bb = 4
c = 3
cc = 6
ccc = 9
d = 4 
Output: [Yes, Yes, Yes, No]
Explanation: 
1. 1=> Yes, 3 => Yes, 9 => Yes, and 8 => No.
2. Based on the character and substring weighting of "abbcccd", the status of the queries "[1, 3, 9, 8]" is "[Yes, Yes, Yes, No]".

Rule:
For repeated and consecutive characters, the weighting should be specified for each substring from the first occurrence to the n-th occurrence. Example: bbccc => b, bb, c, cc, ccc.

Task: 
Create a function to solve the Weighted Strings problem!
*/

const weighted = (string, query) => {
  // di kecilin dulu semua string nya biar enak ngecek di dictionary nya
	const inArray = string.toLowerCase().split('');
  // ini untuk set dictionary nya
	const dict = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, 
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, 
    s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  };
  
  const temp = [];
  const data = {};
  const checkQuery = [];
  
  // ini untuk nge define karakter nya
  for(let i = 0; i < inArray.length; i++) {
    const cursorCount = temp.filter((x) => x === inArray[i]).length;
    if (!cursorCount) {
      temp.push(inArray[i]);
      data[inArray[i]] = dict[inArray[i]];
    } else {
      let temp_ = '';
      for(let a = 0; a <= cursorCount; a++) {
        temp_ += inArray[i];
      }
      temp.push(inArray[i]);
      data[temp_] = dict[inArray[i]] * (cursorCount+1);
    }
  }
  
  console.log('temp final:', temp, data);
  
  // ini untuk ngecek nilai yang exist di query
  for(let i = 0; i < query.length; i++) {
    const checking = Object.values(data).map((x) => {
      if (x === query[i]) return true
      return false;
    });
    const finalCheck = checking.reduce((acc, current) => {
      if (!acc && current) return true;
      if (!acc && !current) return false;
      if (acc && current) return true;
      if (acc && !current) return acc;
    });
    checkQuery.push(finalCheck);
  }
  
  console.log('check query', query, checkQuery);
}

weighted('abbccacdz', [1,3,9,8]);
weighted('prabowo', [1,16,10,3]);
weighted('milklife', [9,3,5,8]);
weighted('nasdang', [1,14,8,15]);