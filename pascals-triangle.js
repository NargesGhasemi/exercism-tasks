//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
 var element =  [];
 var i;
 var j;
 for (i = 0; i < n; i++) 
 {
  element[i] = new Array(i + 1);
   for (j = 0; j < i+1; j++) 
   {
    if (j === 0 || j === i) 
     {
      element[i][j] = 1;
     }
    else
     {
      element[i][j] = element[i-1][j-1] + element[i-1][j+1];
     } 
   }
 }
 return element;
};
