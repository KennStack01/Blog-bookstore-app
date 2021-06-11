import React from 'react'
// import { navigate } from 'gatsby'


// We're using a library for sending email message from our HTML form: https://formsubmit.co/

const ContactForm = () => {
    return (
        <div>

            <div className="mb-5">
                📩 <span className="underline font-sans font-semibold text-mirage-500"> Message Direct ici </span> 👇 <br/>   
            </div>
    
            <form 
                action="https://formsubmit.co/penielkatombe949@gmail.com"
                method="POST" 
                className="text-mirage-500 mx-4 md:w-96 md:mx-auto font-sans"
            >
                <p>
                    <input type="hidden" name="_subject" value="Message pour Vers et Chroniques 🎉✨"/>
                </p>
                <p>
                    <input type="hidden" name="_next" value="https://www.versetchroniques.blog/successForm"  />
                </p>
                <p>
                    <input type="hidden" name="_captcha" value="true"/>
                </p>
                <p className="my-2">
                    <label className="flex flex-col">
                        <h1 className="text-left">
                            Votre Nom 
                        </h1>
                        <input type="text" name="name" className="text-mirage-500 font-sans p-1 rounded border border-mirage-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required/>
                    </label>   
                </p>
                <p className="my-2">
                    <label className="flex flex-col">
                        <h1 className="text-left">
                            Votre Adresse e-mail 
                        </h1>
                        <input type="email" name="email" className="text-mirage-500 font-sans p-1 rounded border border-mirage-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required/>
                    </label>
                </p>
                <p className="my-2">
                    <label className="flex flex-col">
                        <h1 className="text-left">
                            Votre Message 
                        </h1>
                        <textarea name="message" className="text-mirage-500 font-sans p-2 rounded border border-mirage-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required></textarea>
                    </label>
                </p>
                <button type="submit" className="bg-mirage-500 hover:bg-mirage-700 py-2 w-36 rounded mb-5 font-sans">
                    <div className="flex flex-row justify-center text-mirage-500 font-semibold "> 
                        <h1 className="mr-1 mt-0 text-lg font-semibold text-white"> Envoyer </h1> 
                        <div className="text-3xl md:text-xl mb-2 animate-bounce w-3 h-3"> ✨ </div>
                    </div>
                </button>
            </form>
        </div>
    )
}    


export default ContactForm