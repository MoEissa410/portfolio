import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.scss";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_5zq7pk1",
                "template_ka1txvp",
                form.current,
                "kHcQIFSAu2nHNEqzz"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("🦄 email send success", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="query-form">
            <form
                id="queryForm"
                ref={form}
                onSubmit={sendEmail}
            >
                <div className="input-field">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        required
                    />
                </div>

                <div className="input-field">
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        required
                    />
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                    />
                </div>

                <div className="input-field full-width">
                    <textarea
                        className="textarea"
                        name="message"
                        placeholder="Your message"
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default Form;
