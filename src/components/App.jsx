class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {videos: window.exampleVideoData, video: window.exampleVideoData[0] };
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }
  handleTitleClick(e, video) {
    console.log(e);
    this.setState({video: video});
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div>*/}
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            {/*<div><h5><em>videoList</em> view goes here</h5></div>*/}
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
