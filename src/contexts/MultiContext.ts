import React from "react";

import * as stores from "../stores";

const MultiContext = React.createContext({
  ...stores,
});

export default MultiContext;
