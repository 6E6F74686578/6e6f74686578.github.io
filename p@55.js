function xorStrings(str1, str2) {
    const result = [];
    for (let i = 0; i < str1.length; i++) {
      result.push(String.fromCharCode(str1.charCodeAt(i) ^ str2.charCodeAt(i % 10)));
    }
    return result.join('');
  }
  const passwordofnotebin = "your_key_here";
  const haha = "bksecbkseccutecutehehehehehehehehehehe";
  const expectedOutput = "V]FWPSYFVPZ_GRPP\GSQUSFSTTY@QPV_DW[U_KWTVXFSQW_@]PT\";
  const encrypted = xorStrings(passwordofnotebin , haha);
  if (encrypted === expectedOutput) {
    console.log("NB2HI4DTHIXS63TPORSWE2LOFZSGKLZ7GFRDIZRTMUYWMMJVGJTDSOLDMYRUE42IKFYG2TRTIM2EORDRPI4XSULHMQZTKS3ZPA4TOVLUO5IECZTILBTG23KMJBQVM4RTM4======");
  } else {
    console.log("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }