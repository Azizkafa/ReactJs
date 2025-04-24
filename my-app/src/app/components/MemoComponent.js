"use client";
import React, {useState, lazy, Suspense, useMemo} from 'react'

const ExpensiveWorkComponent = React.memo(({ data }) => {
    console.log('Ini Expensive Work, datanya', data);
  
    let result = 0;
    for (let i = 0; i < 100; i++) {
      result += data;
    }
    return <div className='p-4 border rounded'>Expensive Component Result : {result}</div>;
  });

  const LazyComponent = lazy(() => import('./LazyComponent'))
  const MemoLazy = () => {
    const [data, setData] = useState(1);

    const memoizeData = useMemo(() => data, [data]);
    const updateData = () => setData(Math.random());

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Memoization and Lazy Loading</h1>
        <button onClick={updateData} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Update Data</button>
        <h2 className='text-xl font-semibold mt-4 mb-2'>Memoization</h2>
        <ExpensiveWorkComponent data={memoizeData} />

        <h2 className='text-xl font-semibold mt-4 mb-2'>Lazy Loading</h2>
        <Suspense fallback={<div>Loading ......</div>}>
        <LazyComponent />
        </Suspense>
        
      </div>
    );
  };
  
  export default MemoLazy;
  