import { useState } from "react";


export const Count = () => {
    const [count, setcount] = useState(0);
    return(<>
      <h1>{count}</h1>
      <button onClick={() => { setcount(count + 1) }}>+1</button>
      <button onClick={() => { setcount(count - 1) }}>-1</button>
      </>
    )
  }