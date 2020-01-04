/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-01-04 15:58:47
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-01-04 20:48:50
 */
import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";

import NotFound from "./containers/NotFound";

// export default function Routes() {
//   return (
//     <Switch>
//       <Route path="/" exact component={Home} />
//       <Route path="/login" exact component={Login} />
//       <Route component={NotFound} />
//     </Switch>
//   );
// }

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute
        path="/signup"
        exact
        component={Signup}
        appProps={appProps}
      />
      <AuthenticatedRoute path="/settings" exact component={Settings} appProps={appProps} />
      <AuthenticatedRoute
        path="/notes/new"
        exact
        component={NewNote}
        appProps={appProps}
      />
      <AuthenticatedRoute
        path="/notes/:id"
        exact
        component={Notes}
        appProps={appProps}
      />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
