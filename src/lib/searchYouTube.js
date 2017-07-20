// var searchYouTube = (options, callback) => {
//   fetch('',options);
// };

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    dataType: 'json',
    success: callback,
    error: function(err) {
      console.log('ERROR ', err);
    }
  });
};

window.searchYouTube = searchYouTube;
