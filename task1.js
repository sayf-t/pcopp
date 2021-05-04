// getTLD('http://www.google.de/something');
// => de

// getTLD('http://www.amazon.co.uk/something');
// => uk

// Create function getTLD
// when given a string, get top level domain
// Obtain origin url with 'new URL' object
// split the url on the '.'
// call the last element of the array

function getTLD(url_string) {
  const url_input = new URL(url_string);
  const origin_url = url_input.origin;
  const split_array = origin_url.split('.');
  return split_array[split_array.length - 1];
}

console.log(getTLD('http://www.google.de/something'));
console.log(getTLD('http://www.amazon.co.uk/something'));



