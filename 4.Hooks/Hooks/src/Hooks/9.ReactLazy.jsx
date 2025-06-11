// This is a separate component file
export  function MyComponent() {
  return <h2>I was lazy-loaded!</h2>;
}

import React, { Suspense, useState } from 'react';

const MyComponent = React.lazy(() => import('./MyComponent'));

function Apped() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Main App</h1>
      <button onClick={() => setShow(true)}>Load Component</button>

      {/* Suspense is needed to wrap lazy-loaded component */}
      <Suspense fallback={<p>Loading...</p>}>
        {show && <MyComponent />}
      </Suspense>
    </div>
  );
}

// export  Apped;
