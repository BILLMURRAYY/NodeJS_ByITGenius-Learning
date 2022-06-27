const scores = [55, 65, 82]
const [s1, s2] = scores //55 65
const [S1,, S3] = scores //55 82
console.log(s1, s2);
console.log(S1, S3);

//last element
const {[scores.length-1]: last} = scores
console.log(last);