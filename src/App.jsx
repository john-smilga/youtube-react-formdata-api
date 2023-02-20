import { useState } from 'react';
import getFormValues from './getFormValues';
function Register() {
  const [isMember, setIsMember] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const { isEmpty, data } = getFormValues(e.currentTarget);

    if (isEmpty) {
      console.log('please provide all values');
      return;
    }

    // do something
    console.log(data);

    // clear inputs
    e.currentTarget.reset();
  };

  return (
    <section className='register-page full-page'>
      <form className='form' onSubmit={onSubmit}>
        <h3>{isMember ? 'Login' : 'Register'}</h3>
        {/* name field */}
        {!isMember && (
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input id='name' type='text' name='name' className='form-input' />
          </div>
        )}

        {/* email field */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input id='email' type='email' name='email' className='form-input' />
        </div>
        {/* password field */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className='form-input'
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>

        <p>
          {isMember ? 'Not a member yet?' : 'Already a member?'}
          <button
            type='button'
            onClick={() => setIsMember(!isMember)}
            className='member-btn'
          >
            {isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </section>
  );
}
export default Register;
