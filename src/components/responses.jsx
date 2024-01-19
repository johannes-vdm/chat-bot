const defaultClass = 'bg-light rounded p-3 shadow';

const responseData = {
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
  'I have a question': {
    content: (
      <div className={defaultClass}>
        <p>The wise listens when the fool speaks <br/> ~ Yoda</p>
      </div>
    ),
    options: [],
  },
};

export { responseData };