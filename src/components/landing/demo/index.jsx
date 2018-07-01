import React from 'react';

import './demo.sass';

const Demo = () => (
  <div className="demo" id="demo">
    <div className="image">
      <img src="/assets/inbox.png" alt="" />
    </div>

    <div className="demo__highlights">
      <div className="detail">
        <img src="/assets/draw.png" alt="" />
        <h5>Send Messages</h5>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      </div>

      <div className="detail">
        <img src="/assets/delivery-man.png" alt="" />
        <h5>Create New Connections!</h5>
        <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
    </div>
  </div>
);

export default Demo;
