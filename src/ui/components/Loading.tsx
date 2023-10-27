import * as React from 'react'
Go ahead and fix these. Some hints:

This comment

/**
 * @type {React.FC<React.PropsWithChildren<any>>} param0 
 */

const Loading = ({ message = 'Loading...', children }) => (
  <h1>
    {message}...
    {children}
  </h1>
)
export default Loading
