import { observer } from "mobx-react-lite";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./MainEntryPointWrapper.styles";
// import MultiContext from "contexts";
// const ApiBrowserApp = React.lazy(() => import());

export const MainEntryPointWrapper: React.FC = observer(() => {
  React.useEffect(() => {
    if (!window.location.href.endsWith("/")) {
      window.location.replace(`${window.location.href}/`);
    }
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Router>
        {/* TODO */}
        {/* <MultiContext.Provider> */}
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
        {/* </MultiContext.Provider> */}
      </Router>
    </div>
  );
});
