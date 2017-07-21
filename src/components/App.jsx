
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {videos: [], video: window.exampleVideoData[0], autoplay: ''};
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.searchSuccess = this.searchSuccess.bind(this);
    this.handleKeyPressSearch = this.handleKeyPressSearch.bind(this);
    this.handleAutoPlay = this.handleAutoPlay.bind(this);
  }
  
  handleSearchChange(e) {
    searchYouTube({
      q: e.target.value || 'Dr Dre',
      key: 'AIzaSyAdj5AsN5xfAdb3qLqNS-3bYtU2RSVVkmU',
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true
    }, this.searchSuccess);
  }
  
  componentDidMount () {
    searchYouTube({
      q: 'Dr Dre',
      key: 'AIzaSyAdj5AsN5xfAdb3qLqNS-3bYtU2RSVVkmU',
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true
    }, this.searchSuccess);
  }
  
  searchSuccess (data) {
    // console.log(data);
    this.setState({videos: data.items});
  }
  
  handleKeyPressSearch(e, videos) {
    if (e.key === 'Enter') {
      this.setState({video: videos[0]});
    }
  }
  
  handleTitleClick(e, video) {
    this.setState({video: video});
  }
  
  handleAutoPlay(e) {
    if (e.target.checked === true) {
      this.setState({autoplay: '?autoplay=1&cc_load_policy=1'});
    } else {
      this.setState({autoplay: ''});
    }
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchChange={this.handleSearchChange} handleKeyPressSearch={this.handleKeyPressSearch} videos={this.state.videos}/>
            <ToggleAutoPlay handleAutoPlay={this.handleAutoPlay} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} autoplay={this.state.autoplay}/>
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