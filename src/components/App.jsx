class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {videos: window.exampleVideoData, video: window.exampleVideoData[0] };
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  
  handleSearchChange(e) {
    // debugger;
    var context = this;
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        q: e.target.value,
        key: 'AIzaSyAdj5AsN5xfAdb3qLqNS-3bYtU2RSVVkmU',
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true
      },
      dataType: 'json',
      success: function(data) {
        console.log(data);
        // debugger;
        this.setState({videos: data});
      },
      error: function(err) {
        console.log('ERROR ', err);
      }
    });
  }
  
  searchSuccess(data) {
    // debugger;
    this.setState({videos: data});
  }
  
  handleTitleClick(e, video) {
    // console.log(e);
    this.setState({video: video});
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchChange={this.handleSearchChange} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList handleTitleClick={this.handleTitleClick} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;