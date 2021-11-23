import { useState,useEffect } from "react";

const useForm = (callback,validate) => {
    const [values,setValues] = useState({
        name:'',
        email:'',
        comment:''
    })
    const [errors,setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };

    const handleSubmit = async e =>{
        e.preventDefault()
        setErrors(validate(values))  
        if(Object.keys(errors).length ===0)
            setIsSubmitting(true)
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
            setValues({
                name:'',
                email:'',
                comment:''
            })
        }
    },[errors,callback,isSubmitting])
    return {handleChange, values, handleSubmit,errors}
}

export default useForm
