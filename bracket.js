const checkBalancedBracket = (input) => {
  const dict = {
    curly: {
      open: '{', close: '}',
    },
    parent: {
      open: '(', close: ')',
    },
    block: {
      open: '[', close: ']',
    },
  };

  const data = [];

  // hilangin spasi
  const arr = input.split('').filter(x => x !== ' ');

  // Simple check aja dulu: gak seimbang
  if (arr.length % 2 !== 0) {
    console.log('simple check: jumlah bracket kemungkinan tidak sesuai');
    console.log('input: ',input);
    return 'NO';
  }

  for (let s of arr) {
    // cek open bracket
    if (s === dict.curly.open || s === dict.parent.open || s === dict.block.open) {
      data.push(s);
    } 
    // cek klo ada close bracket
    else if (s === dict.curly.close || s === dict.parent.close || s === dict.block.close) {
      if (data.length === 0) {
      	// gak ada open bracket, tapi ada close nya aja berarti NO
        console.log('input: ',input);
        return 'NO';
      }

      const last = data.pop();
      
      // Nyamain bracket tutup dengan open bracket
      if (
        (s === dict.curly.close && last !== dict.curly.open) ||
        (s === dict.parent.close && last !== dict.parent.open) ||
        (s === dict.block.close && last !== dict.block.open)
      ) {
      	// bracket tutup gak sama dengan buka
      	console.log('input: ',input);
        return 'NO';
      }
    }
  }

	// Kalo gak ada data di temp data maka sudah di pastikan udah cocok
  console.log('input: ',input);
  return data.length === 0 ? "YES" : "NO";
}

console.log(checkBalancedBracket('{([ ])}'));
console.log(checkBalancedBracket('{([]})'));
console.log(checkBalancedBracket('{([ (] )})'));
