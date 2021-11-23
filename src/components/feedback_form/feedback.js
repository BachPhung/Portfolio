import './feedback.css'
import React, {useState} from 'react'
import useForm from './useForm'
import validate from './validateInfo'
const Feedback = ({submitForm}) => {
    const {handleChange, values,handleSubmit,errors} =useForm(submitForm,validate)
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <h3>
                    It would be pleasure to receive a feedback from you!
                </h3>
                <div className='form-inputs'>
                <div className='name'>
                    <label className='form-label'>Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='name'
                        value={values.name}
                        placeholder='Enter your name'
                        onChange={handleChange}
                    />             
                    </div>
                    <div className='error-div'>{errors.name && <p className='error-text'>{errors.name}</p>}</div>
                    <div className='email'>
                    <label className='form-label'>Email</label>
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        value={values.email}
                        placeholder='Enter your email'
                        onChange={handleChange}
                    />
                    
                    </div>
                    <div className='error-div'>{errors.email && <p className='error-text'>{errors.email}</p>}</div>
                    <div className='comment'>
                    <label className='form-label'>Comment</label>
                    <input
                        className='form-input'
                        type='text'
                        name='comment'
                        value={values.comment}
                        onChange={handleChange}
                    />
                    </div>
                    <div className='error-div'>{errors.comment && <p className='error-text'>{errors.comment}</p>}</div>
                </div>
                <div className='btn-div'>
                <button className='btn' type='submit'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Feedback
