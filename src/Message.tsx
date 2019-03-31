import React, {ReactNode} from "react";

export default function Panel({children}: { children: ReactNode }) {
  return <div style={{border: '1px solid red'}}>{children}</div>
};
