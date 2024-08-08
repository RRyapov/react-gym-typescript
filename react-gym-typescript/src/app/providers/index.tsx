import compose from "compose-function";

import { observer } from "mobx-react-lite";
// import { withQuery } from "./with-query";

export const withProviders = compose(observer);
