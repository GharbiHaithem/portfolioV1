import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
      const form = useRef();
      const [formValues, setFormValues] = useState({
            user_email: '',
            user_name: '',
            message: ''
          });
          const [errors, setErrors] = useState({});
          const handleChange = (e) => {
            setFormValues({ ...formValues, [e.target.name]: e.target.value });
            setErrors({ ...errors, [e.target.name]: '' }); // Clear error as user types
          };
          const validate = () => {
            const newErrors = {};
            if (!formValues.user_email) newErrors.user_email = 'Email requis';
            if (!formValues.user_name) newErrors.user_name = 'Nom requis';
            if (!formValues.message) newErrors.message = 'Message requis';
            return newErrors;
          };
          const[pending,setPending] = useState(false)
          const sendEmail = (e) => {
            e.preventDefault();
            setPending(true)
            const validationErrors = validate();
            if (Object.keys(validationErrors).length > 0) {
              setErrors(validationErrors);
              return;
            }
        
            emailjs.sendForm(
              'service_oz9ookf',
              'template_2sucuzt',
              form.current,
              'KGSW8sASR5-Dr64tp'
            )
            .then((result) => {
                  setPending(false)
              console.log('Message envoyé:', result.text);
              toast.success('Email Envoyé ', {
                  duration: 4000,
                  position: 'top-center',
                
                  // Styling
                  style: {},
                  className: '',
                
                  // Custom Icon
                  icon: '👏',
                
                  // Change colors of success/error/loading icon
                  iconTheme: {
                    primary: '#000',
                    secondary: '#fff',
                  },
                
                  // Aria
                  ariaProps: {
                    role: 'status',
                    'aria-live': 'polite',
                  },
                
                  // Additional Configuration
                  removeDelay: 1000,
                });
            }, (error) => {
              console.log('Erreur:', error.text);
            });
        
            e.target.reset();
            setFormValues({ user_email: '', user_name: '', message: '' });
            setErrors({});
          };
console.log(Object.keys(errors).length)
  return (
      <div className='my-10'>
       <h1  className='md:text-6xl text-3xl font-bold my-10'  style={{
  background: 'linear-gradient(to right, #d7dde3, #97a5bb, #616f93, #363b6a, #12093f)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent'
}}> Contact</h1>
          <div  className='flex justify-between relative flex-row-reverse items-center'>
   {pending &&  <div className='absolute bg-[#ffffffe3] inset-0 flex items-center justify-center w-full h-full top-0 left-0'>
      

<div class="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
   
    <p class="font-normal text-gray-700 dark:text-gray-400 opacity-20">Votre Message et en cours d'etre envoyer ! Patientez quelque secondes.</p>
    <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>

      </div>}
          <form ref={form} onSubmit={sendEmail} className="md:w-[55%] w-[90%] mx-auto">
      <label htmlFor="user_email" className="block mb-2 text-sm font-medium">Votre Email</label>
      <input
        type="email"
        name="user_email"
        value={formValues.user_email}
        onChange={handleChange}
        className="w-full p-2 border rounded bg-transparent"
        placeholder="email@exemple.com"
      />
      {errors.user_email && <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>}

      <label htmlFor="user_name" className="block mb-2 text-sm font-medium mt-4">Nom</label>
      <input
        type="text"
        name="user_name"
        value={formValues.user_name}
        onChange={handleChange}
        className="w-full p-2 border rounded bg-transparent"
        placeholder="Votre nom"
      />
      {errors.user_name && <p className="text-red-500 text-xs mt-1">{errors.user_name}</p>}

      <label htmlFor="message" className="block mb-2 text-sm font-medium mt-4">Message</label>
      <textarea
        name="message"
        value={formValues.message}
        onChange={handleChange}
        rows="4"
        className="w-full p-2 border rounded bg-transparent"
        placeholder="Votre message ici"
      ></textarea>
      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}

      <button type="submit" disabled={
  !formValues.user_email || !formValues.user_name || !formValues.message
} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Envoyer
      </button>
    </form>
<div className='md:w-[45%] hidden md:block'>
<DotLottieReact
      src="https://lottie.host/c3bc032c-06b0-4ccd-9c55-90cdb851e04e/qVfHTd3obu.lottie"
      loop
      autoplay
    />
</div>
    </div>
    </div>

  )
}

export default Contact