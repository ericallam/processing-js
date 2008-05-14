Processing.test_example = function(actual, expected){
  return function($){
    jqUnit.test(actual, function(){
      // grab the toDataURL for the rendered canvas
  		actual = document.getElementById(actual).toDataURL();

      // create an image for the expected
      // image of a previously toDataURL'ed canvas
  		img = document.createElement('img');
  		img.setAttribute('src', expected);
  		img.setAttribute('class', 'expected')
  		main = document.getElementById('expected');
  		// throw the image in the main div
  		main.appendChild(img);

  		jqUnit.ok(expected == actual);
    }); 
  }
}