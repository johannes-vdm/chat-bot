import blue from '../assets/neo.gif';
import red from '../assets/agent-smith.gif';

const defaultClass = 'bg-light rounded p-3 shadow';

const ChatResponseData = {
  'I have a question': {
    content: (
      <div className={defaultClass}>
        <form>
          <div className="mb-3">
            <label className="form-label">Sure, what can we assist with?</label>
            <textarea className="form-control" id="exampleQuestion" rows="5" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    ),
    options: [],
  },
  'Make appointment': {
    content: (
      <div className={defaultClass}>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="email" className="form-control" id="exampleName" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="phone" className="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" />
            <div id="phoneHelp" className="form-text">Well never share your phone with anyone else.</div>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    ),
    options: [],
  },
  'Just looking': {
    content: (
      <div className={defaultClass}>
        <p><b>Guus</b> from Leadinfo<br /><br />Alright, feel free to ask if you have any questions in the future. Have a great day!</p>
      </div>
    ),
    options: [],
  },
  '🕶 Neo': {
    content: (
      <div className={defaultClass}>
        <p>Do you want to know what IT is? <br/> ~ Morpheus</p>
      </div>
    ),
    options: ['Yes','No'],
  },
  'Yes': {
    content: (
      <div className={defaultClass}>
        <p>This is your last chance, after this there is no turning back.</p>
        <p>You have two choices</p>
        <p>🔵 Take the blue pill, you wake up in your bed and believe what you want to.</p>
        <p>🔴 Take the red pill and I will show you how deep the rabbit hole goes.</p>
      </div>
    ),
    options: ['🔴 Red Pill', '🔵 Blue Pill'],
  },
  'No': {
    content: (
      <div className={defaultClass}>
        <p>Goodbye Neo...</p>
      </div>
    ),
    options: [],
  },
  '🔴 Red Pill': {
    content: (
      <div className={defaultClass}>
        <img src={blue} alt="" width={'100%'} />
      </div>
    ),
    options: [],
  },
  '🔵 Blue Pill': {
    content: (
      <div className={defaultClass}>
        <img src={red} alt=""  width={'100%'}/>
      </div>
    ),
    options: [],
  },
};

export { ChatResponseData };