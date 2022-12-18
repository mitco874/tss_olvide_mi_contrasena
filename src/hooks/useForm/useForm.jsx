import { useState } from 'react';

export const useForm = (structure={}) => {
    const [form,setForm]=useState(structure);


    const onFormUpdate=({target})=>{
        const {name,value}=target;
        console.log(`name: ${name} value: ${value}`)
        setForm({
            ...form,
            [name] : value}
        );       
    }


  return{form,onFormUpdate,setForm}
}
