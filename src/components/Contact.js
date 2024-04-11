import React, { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const Contact = () => {
    const [state, handleSubmit] = useForm("moqgpnzn"); // Replace "yourFormID" with your actual Formspree form ID
    // Assuming you have a language context or a similar setup
    // const { language } = useLanguage();
    const language = "EN"; // Placeholder for the language logic

    useEffect(() => {
        if (state.succeeded) {
            // Check the language and show a success message accordingly
            toast.success(language === "DE" ? "Danke für Ihre Nachricht!" : "Thanks for your message!");
        }
    }, [state.succeeded, language]);

    return _jsx("section", {
        id: "contact",
        children: _jsxs(React.Fragment, { 
            children: [
                _jsx("p", { 
                    style: { textAlign: 'center', margin: '20px 0', fontSize: '18px' },
                    children: "It's an ugly form, but your message will be received! I'll make it prettier later... XD"
                }),
                _jsx("form", { 
                    onSubmit: handleSubmit,
                    className: "your-form-classname", 
                    style: { maxWidth: '500px', margin: 'auto', backgroundColor: 'rgba(242, 242, 242, 0.5)', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
                    children: _jsxs(React.Fragment, { 
                        children: [
                            _jsxs("div", { 
                                style: { marginBottom: '20px' },
                                children: [
                                    _jsx("label", { 
                                        htmlFor: "email",
                                        style: { display: 'block', marginBottom: '5px' },
                                        children: "Email Address"
                                    }),
                                    _jsx("input", { 
                                        id: "email",
                                        type: "email",
                                        name: "email",
                                        style: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }
                                    }),
                                    _jsx(ValidationError, { 
                                        prefix: "Email",
                                        field: "email",
                                        errors: state.errors,
                                    })
                                ]
                            }),
                            _jsxs("div", { 
                                style: { marginBottom: '20px' },
                                children: [
                                    _jsx("label", { 
                                        htmlFor: "message",
                                        style: { display: 'block', marginBottom: '5px' },
                                        children: "Message"
                                    }),
                                    _jsx("textarea", { 
                                        id: "message",
                                        name: "message",
                                        style: { width: '100%', height: '100px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }
                                    }),
                                    _jsx(ValidationError, { 
                                        prefix: "Message",
                                        field: "message",
                                        errors: state.errors,
                                    })
                                ]
                            }),
                            _jsx("button", { 
                                type: "submit",
                                disabled: state.submitting,
                                style: { background: '#ff6a3d', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
                                children: "Submit"
                            })
                        ]
                    })
                }),
                _jsx(ToastContainer, {}) 
            ]
        })
    });
    

    
};

export default Contact;
