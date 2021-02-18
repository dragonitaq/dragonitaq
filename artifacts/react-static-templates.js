

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/src/pages/404/404.component.jsx'), universalOptions)
      t_0.template = '__react_static_root__/src/pages/404/404.component.jsx'
      
const t_1 = universal(import('__react_static_root__/src/pages/Home/Home.component.jsx'), universalOptions)
      t_1.template = '__react_static_root__/src/pages/Home/Home.component.jsx'
      

// Template Map
export default {
  '__react_static_root__/src/pages/404/404.component.jsx': t_0,
'__react_static_root__/src/pages/Home/Home.component.jsx': t_1
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/src/pages/404/404.component.jsx"

