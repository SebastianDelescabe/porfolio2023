import React, { useRef, useContext } from 'react';
import { useFormik } from 'formik';
import { LanguageContext } from "../../context/LanguageContext";
import { ThemeContext } from '../../context/ThemeContext';

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Contact.css';

export const Contact = () => {

    const { english } = useContext(LanguageContext)
    const { theme } = useContext(ThemeContext)

    const form = useRef();

    const initialValues = {
        email: '',
        request: '',
    }

    const onSubmit = async (values, { resetForm }) => {
        emailjs.sendForm('service_h2zusuy', 'template_j37jt3p', form.current, 'x6-8LVIrjwT2UXfe-')
            .then(() => {
                toast.success("Email enviado correctamente");
                resetForm({ company: "", email: "" })
            }, (error) => {
                toast.error("Error al enviar la consulta");
            });
    }
    const formik = useFormik({ initialValues, onSubmit });

    const { handleSubmit, handleChange, values } = formik

    if (english) {
        return (
            <div className={theme == 'dark' ? 'contact app__black ' : 'contact app__white '} id='contact'>
                <svg className='contact__svg-upper' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill-opacity="1" d="M0,32L60,32C120,32,240,32,360,58.7C480,85,600,139,720,133.3C840,128,960,64,1080,74.7C1200,85,1320,171,1380,213.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

                <ToastContainer
                    position="bottom-center"
                    theme="colored"
                    autoClose={1000}
                />
                <div className='contact__text'>
                    <h1>Send me a message</h1>
                    <div></div>
                </div>
                <div className='contact__container'>
                    <form onSubmit={handleSubmit} ref={form} className='contact__container-form'>
                        <div className='contact__container-form-label'>
                            <input
                                type="text"
                                placeholder='Your mail'
                                name="email"
                                values={values.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='contact__container-form-label'>
                            <textarea
                                placeholder='Your message.'
                                name="request"
                                values={values.request}
                                onChange={handleChange}
                                cols="30"
                                rows="5"
                                required
                                maxLength={1000}
                            />
                        </div>
                        <button>
                            <span>Send</span>
                        </button>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div className={theme == 'dark' ? 'contact app__black ' : 'contact app__white '} id='contact'>
                <svg className='contact__svg-upper' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill-opacity="1" d="M0,32L60,32C120,32,240,32,360,58.7C480,85,600,139,720,133.3C840,128,960,64,1080,74.7C1200,85,1320,171,1380,213.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

                <ToastContainer
                    position="top-center"
                    theme="colored"
                    autoClose={1000}
                />
                <div className='contact__text'>
                    <h1>Envíame un mensaje</h1>
                    <div></div>
                </div>
                <div className='contact__container'>
                    <form onSubmit={handleSubmit} ref={form} className='contact__container-form'>
                        <div className='contact__container-form-label'>
                            <input
                                type="text"
                                placeholder='Email'
                                name="email"
                                values={values.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='contact__container-form-label'>
                            <textarea
                                placeholder='Mensaje.'
                                name="request"
                                values={values.request}
                                onChange={handleChange}
                                cols="30"
                                rows="5"
                                required
                                maxLength={1000}
                            />
                        </div>
                        <button>
                            <span>Enviar</span>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
