import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";


const SelectCountry = () => {
    // handle events 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // handle submit 
    const onSubmit = data => alert(JSON.stringify(data));

    const [countries, setCountries] = useState([])

    useEffect(() =>{
        const data = require('./CountryData.json')
        console.log(data)
        setCountries(data)

    },[])
    
    return (
        <React.Fragment>
            <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="bg-white w-auto h-96 mx-5 mt-20 rounded-lg sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto ">
                       {/* header section */}
                       <div className='h-28 flex justify-center items-center shadow'>
                           <p className='uppercase font-bold text-4xl'>Select country input</p>
                       </div>


                       {/* body section */}
                       <div className='grid justify-center mt-14'>
                           <div>
                               <select 
                               className={`w-96 rounded-lg text-3xl ${ errors.country &&
                                " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                               {...register("country", { required: 'Country is required' })}
                               >
                                   <option value=''>--Select Country--</option>
                                   {
                                       countries.map((item) =>{
                                           return(
                                               <option key={item.country}>
                                                   {item.country}
                                               </option>
                                           )
                                       })
                                   }
                                   
                               </select>
                           </div>
                           <div>
                           {errors.country && <span className='text-sm text-red-500'>{errors.country.message}</span>}
                           </div>
                       </div>

                       {/* btn section */}
                       <div className='flex justify-center items-center mt-14'>
                           <input
                           type='submit'
                           value='Submit'
                           className='w-2/5 h-10 bg-yellow-700 text-white rounded-lg'
                           />
                       </div>
                   </div>
               </form>
            </section>
        </React.Fragment>
    )
}

export default SelectCountry
