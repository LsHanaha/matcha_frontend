import { observer } from "mobx-react-lite";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { MultiContext } from "contexts";
// const ApiBrowserApp = React.lazy(() => import());

export const MainEntryPointWrapper: React.FC = observer(() => {
  React.useEffect(() => {
    if (!window.location.href.endsWith("/")) {
      window.location.replace(`${window.location.href}/`);
    }
  }, []);

  return <div />;
});
