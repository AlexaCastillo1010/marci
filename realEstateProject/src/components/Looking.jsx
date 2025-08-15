import { useEffect, useRef, useState } from "react";
import "../components/CSS/looking.css";

export default function Looking() {
    const [formClass, setFormClass] = useState("fade-up-hidden");
    const [imageClass, setImageClass] = useState("fade-up-hidden");

    const formRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Image observer
        const observerImage = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setImageClass("fade-up-visible");
                } else {
                    setImageClass("fade-up-hidden");
                }
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -20% 0px"
            }
        );

        // Form observer
        const observerForm = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setFormClass("fade-up-visible");
                    }, 300);
                } else {
                    setFormClass("fade-up-hidden");
                }
            },
            {
                threshold: 0.3,
                rootMargin: "0px 0px -5% 0px"
            }
        );

        if (imageRef.current) observerImage.observe(imageRef.current);
        if (formRef.current) observerForm.observe(formRef.current);

        return () => {
            observerImage.disconnect();
            observerForm.disconnect();
        };
    }, []);

    return (
        <div className="looking">
            <div ref={imageRef} className={`imageLooking ${imageClass}`}>
                <img className="actualImage" src="/looking.jpg" alt="" />
            </div>

            <div ref={formRef} className={`formlooking ${formClass}`}>
                <div className="labelsAndInput">
                    <div className="labelandInput1">
                        <label className="labelName" htmlFor="name1">Looking for..</label>
                        <input className="inputsinform" type="text" id="name1" placeholder="What are you looking for..." />
                    </div>
                    <div className="labelandInput1">
                        <label className="labelName" htmlFor="name2">Type:</label>
                        <input className="inputsinform" type="text" id="name2" placeholder="Property type.." />
                    </div>
                    <div className="labelandInput1">
                        <label className="labelName" htmlFor="name3">Price Range:</label>
                        <input className="inputsinform" type="text" id="name3" placeholder="Price.." />
                    </div>
                    <div className="labelandInput1">
                        <label className="labelName" htmlFor="name4">Location:</label>
                        <input className="inputsinform" type="text" id="name4" placeholder="Los Angeles.." />
                    </div>
                </div>

                <div className="buttonlooking">
                    <button className="submitButton">Submit</button>
                </div>
            </div>
        </div>
    );
}
