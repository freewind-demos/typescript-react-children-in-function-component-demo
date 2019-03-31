import React from "react";

export default function Panel({children}: { children: any }) {
  return <div style={{border: '1px solid red'}}>{children}</div>
};
