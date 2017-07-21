
var ToggleAutoPlay = (props) => (
  <div className="toggle-auto-play slideThree">
    <input id="slideThree" type="checkbox" onChange={(e)=>{ props.handleAutoPlay(e); }}/>
    <label for="slideThree">AutoPlay</label>
  </div>
);

window.ToggleAutoPlay = ToggleAutoPlay;