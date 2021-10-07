import React from 'react';
import {Bars, useLoading} from '@agney/react-loading';

export default function ErrorHandling({success, error, loading}) {
  const {containerProps, indicatorEl} = useLoading({
    loading,
    indicator: <Bars width="50" />,
  });
  return (
    <div className="w-100 h-50 d-flex align-items-center justify-content-center">
      {success ? (
        <p className="mt-5">There is no data here</p>
      ) : loading ? (
        <section {...containerProps} style={{color: '#034ea1'}}>
          {indicatorEl}
        </section>
      ) : error ? (
        <p className="mt-5">An error has been occured</p>
      ) : (
        <p className="mt-5">An error has been occured</p>
      )}
    </div>
  );
}
