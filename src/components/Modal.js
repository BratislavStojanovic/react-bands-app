import React from 'react';

const Modal = ({ currentBand }) => {
  return (
    <div
      className='modal fade'
      id='exampleModal'
      role='dialog'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              {currentBand.name}
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <div className='row'>
              <div className='col-4'>
                <img
                  src={currentBand.thumb1}
                  alt=''
                  width='140px'
                  height='85px'
                />
              </div>
              <div className='col-4'>
                <img
                  src={currentBand.thumb2}
                  alt=''
                  width='140px'
                  height='85px'
                />
              </div>
              <div className='col-4'>
                <img
                  src={currentBand.thumb2}
                  alt=''
                  width='140px'
                  height='85px'
                />
              </div>
            </div>
            <div className='row'>
              <p className='p-2'>{currentBand.info}</p>
            </div>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
