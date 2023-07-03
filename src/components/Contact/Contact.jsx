// import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from 'sweetalert2'

const Contact = () => {
    const form = useRef();
    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r91bdt9', 'template_sym3cde', form.current, 'hF7xhhZja0MOsAPh5')
          .then((result) => {
              console.log(result.text)
              if(result.text === "OK"){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thank you! Your message is sent to admin',
                    showConfirmButton: false,
                    timer: 1500
                  })
              };
          }, (error) => {
              console.log(error.text);
          });
      };
    // const onSubmit = (data) => {
    //     console.log(data);

    //     emailjs
    //         .sendForm(
    //             "service_r91bdt9",
    //             "template_sym3cde",
    //             form.current,
    //             "U1Xli0AtU16SAzbnG"
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //             }
    //         );
    // };
    return (
        <div id="contact" className="bg-base-200 my-16">
            <h1 className="text-5xl font-bold text-center my-10">
                <span className="border-b-2 text-cyan-500">Contact Me!</span>
            </h1>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-x-8">
                    <div className="text-center lg:text-left  border-r-2 border-cyan-500">
                        <p className="m-2">
                            Thank you for your interest in getting in touch with
                            me. I welcome your feedback, questions, and
                            suggestions. If you have a specific question or
                            comment, please feel free to email me directly at{" "}
                            <a
                                href="mailto:marufislamnadim@gmail.com"
                                className=" text-cyan-500"
                            >
                                marufislamnadim@gmail.com
                            </a>{" "}
                            or call me at{" "}
                            <a
                                href="tel:+8801762427733"
                                className=" text-cyan-500"
                            >
                                01762427733
                            </a>
                            . I make an effort to respond to all messages within
                            24 hours, although it may take me longer during busy
                            periods.
                        </p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <form
                            ref={form} 
                            onSubmit={sendEmail}
                            className="card-body"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    // {...register("name", { min: 3, max: 99 })}
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                    name="user_name"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    // {...register("email", { min: 3, max: 99 })}
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    name="user_email"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input
                                    // {...register("subject", {
                                    //     min: 3,
                                    //     max: 99,
                                    // })}
                                    type="text"
                                    placeholder="Subject"
                                    className="input input-bordered"
                                    name="subject"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input
                                    // {...register("message")}
                                    type="text"
                                    placeholder="write here ..."
                                    className="input input-bordered"
                                    name="message"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Send"
                                    className="btn btn-info bg-cyan-500 hover:bg-cyan-500"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;







// <form
//                             onSubmit={handleSubmit(onSubmit)}
//                             className="card-body"
//                         >
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input
//                                     {...register("name", { min: 3, max: 99 })}
//                                     type="text"
//                                     placeholder="Your Name"
//                                     className="input input-bordered"
//                                     name="user_name"
//                                 />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input
//                                     {...register("email", { min: 3, max: 99 })}
//                                     type="email"
//                                     placeholder="email"
//                                     className="input input-bordered"
//                                     name="user_email"
//                                 />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Subject</span>
//                                 </label>
//                                 <input
//                                     {...register("subject", {
//                                         min: 3,
//                                         max: 99,
//                                     })}
//                                     type="text"
//                                     placeholder="Subject"
//                                     className="input input-bordered"
//                                     name="subject"
//                                 />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Message</span>
//                                 </label>
//                                 <input
//                                     {...register("message")}
//                                     type="text"
//                                     placeholder="write here ..."
//                                     className="input input-bordered"
//                                     name="message"
//                                 />
//                             </div>
//                             <div className="form-control mt-6">
//                                 <input
//                                     type="submit"
//                                     value="Send"
//                                     className="btn btn-info bg-cyan-500 hover:bg-cyan-500"
//                                 />
//                             </div>
// </form>