import React, { useState } from 'react';
import { useMappedState } from 'redux-react-hook';
import { IState } from 'services/common/redux/reducers/interfaces/IState';

const mapError = (state: IState) => state.error;

export default function ErrorBasket(props: unknown) {
  const [isCollapseVisible, setCollapse] = useState(false);

  const error = useMappedState(mapError);

  function reportHandler() {
    /* tslint:disable-next-line */
    console.info('Error report');
  }

  function getStackTrace() {
    return (error && error.stackTrace) ? { __html: error.stackTrace } : { __html: '' };
  }

  function getHeader() {
    return [error.code, error.title].join(': ');
  }

  const errorElement = (
    <div className='container alert alert-danger mt-3 text-left'>
      <h5>{getHeader()}</h5>
      <p style={{ whiteSpace: 'pre-line' }}>{error && error.description}</p>

      <div className='row align-items-center'>
        {error.stackTrace &&
          <div className='col'>
            <a href='#' onClick={() => setCollapse(!isCollapseVisible)}>
              Show details
            </a>
          </div>
        }
        <div className='col text-right'>
          <button type='button' className='btn btn-warning m-1' onClick={reportHandler}>Report error</button>
          <a role='button' className='btn btn-warning m-1' href={error && error.infoUrl}
          target='_blank'>{error && error.code}</a>
        </div>
      </div>

      {isCollapseVisible &&
        <div id='collapseStacktrace'>
          <hr />
          <p><strong>Stacktrace</strong></p>
          <div className='stacktrace small' dangerouslySetInnerHTML={getStackTrace()}></div>
        </div>
      }

    </div>
  );

  return !!Object.keys(error).length ? errorElement : null;
}
