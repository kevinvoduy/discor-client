import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from './feed';
import People from './people';
import Inbox from './inbox';
import Settings from './settings';
import Premium from './premium';

import './content_switcher.sass';

const ContentSwitcher = () => (
  <div className="content__switcher">
    <Switch>
      <Route path="/people" component={People} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/chat" component={Inbox} />
      <Route path="/premium" component={Premium} />
      <Route path="/settings" component={Settings} />
      <Route path="/home" component={Feed} />
    </Switch>
  </div>
);

export default ContentSwitcher;
