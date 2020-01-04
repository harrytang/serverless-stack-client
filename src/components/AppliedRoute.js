/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-01-04 16:26:01
 * @Last Modified by:   Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-01-04 16:26:01
 */

import React from "react";
import { Route } from "react-router-dom";

export default function AppliedRoute({ component: C, appProps, ...rest }) {
  return <Route {...rest} render={props => <C {...props} {...appProps} />} />;
}
