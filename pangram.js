//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  var result ;
  var i;
  var alphabetPattern = [/[a]/,/[b]/,/[c]/,/[d]/,/[e]/,/[f]/,/[g]/,/[h]/,
 /[i]/,/[j]/,/[k]/,/[l]/,/[m]/,/[n]/,/[o]/,/[p]/,/[q]/,/[r]/,/[s]/,/[t]/,
 /[u]/,/[v]/,/[w]/,/[x]/,/[y]/, /[z]/];

 result = alphabetPattern.forEach(myFunction);

 function myFunction(value){
  result = str.toLowerCase().match(alphabetPattern[i]);
  if (!result)
  { 
    return false;
    break;
  }
else
    return true;
 }
}
