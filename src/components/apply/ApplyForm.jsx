import { useState } from 'react'; 

export default function ApplyForm({ t }) {
  const [file, setFile] = useState(null);
  const [errorSize, setErrorSize] = useState(false);
  const [state, setState] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
    submit: false,
  });
  const inputCahnge = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className='contact-form'>
      <div id='message'>
        {state.submit && (
          <>
            {state.submit &&
            state.name !== '' &&
            state.email !== '' &&
            state.phoneNumber !== '' &&
            state.message !== '' ? (
              <div className='alert alert-success'>{t('submit_success')}</div>
            ) : (
              <div className='alert alert-danger'>{t('submit_error')}</div>
            )}
          </>
        )}
      </div>
      <form id='contactForm'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <div className='input-group'>
              <input
                type='text'
                id='name'
                name='fullName'
                value={state.fullName}
                onChange={(e) => {
                  inputCahnge(e);
                }}
                className='form-control'
                placeholder={t('placeholder_FullName')}
              />
              {state.submit && state.fullName == '' && (
                <span className='contact-form-error'>{t('require')}</span>
              )}
            </div>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                id='email'
                name='email'
                value={state.email}
                onChange={(e) => {
                  inputCahnge(e);
                }}
                placeholder={t('placeholder_Email')}
              />
              {state.submit && state.email == '' && (
                <span className='contact-form-error'>{t('require')}</span>
              )}
            </div>
            <div className='input-group'>
              <input
                type='text'
                id='tel'
                name='phoneNumber'
                value={state.phoneNumber}
                onChange={(e) => {
                  inputCahnge(e);
                }}
                className='form-control'
                placeholder={t('placeholder_Number')}
              />
              {state.submit && state.phoneNumber == '' && (
                <span className='contact-form-error'>{t('require')}</span>
              )}
            </div>
          </div>
          <div className='form-group col-md-6 col-sm-12'>
            <div className='input-group input_group_full_width'>
              <textarea
                name='message'
                id='message'
                value={state.message}
                onChange={(e) => {
                  inputCahnge(e);
                }}
                rows='6'
                className='form-control'
                placeholder={t('placeholder_Message')}></textarea>
            </div>
            {state.submit && state.message == '' && (
              <span className='contact-form-error' style={{ marginLeft: 20 }}>
                {t('require')}
              </span>
            )}
          </div>
          <div className='col-sm-12'>
            <div id='simple-msg'></div>
          </div>
        </div>
        <span style={{display: 'flex', alignItems: 'center'}}>
        <div className='input-group'>
          <label htmlFor='file' className='submit-button btn btn-chos' style={{marginTop: 5}}>
            {t("UploadBtn")}
          </label>
          <input
            type='file'
            accept='image/* , application/pdf, .xls, .xlsx, .docx, .zip'
            name='file'
            id='file'
            style={{ display: 'none', }}
            onChange={(e) => {
              if (e.target?.files[0]?.size > 67108864) {
                setErrorSize(true);
                setFile(null);
              }
              setFile(e.target.files[0]);
            }}
          />
          {!errorSize ? (
            <span style={{ padding: 15 }}>{file?.name}</span>
          ) : (
            <span style={{ padding: 15, color: 'red' }}>
              {t("fileSizeError")}
            </span>
          )}
        </div>
		
        <div className='input-group input_group_full_width'>
          <button
            type='button'
            name='send'
            onClick={() =>
              setState((prevState) => ({ ...prevState, submit: true }))
            }
            className='submit-button btn btn-chos submit-right'
            value='Submit'>
            {t('placeholder_Submit')}
          </button>
        </div>
        </span>
      </form>
    </div>
  );
}
