import { useState, useEffect } from "react";
import { FaGift, FaFacebook, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);   // show button
            } else {
                setShowTopBtn(false);  // hide button
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // EMAIL VALIDATION
    const handleSubscribe = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setMessage("Please enter your email");
            return;
        }

        if (!emailRegex.test(email)) {
            setMessage("Enter a valid email address");
            return;
        }

        setMessage("Subscribed successfully");
        setEmail("");

        // auto hide toast
        setTimeout(() => {
            setMessage("");
        }, 2000);
    };

    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-left">
                    <h2 className="footer-logo">
                        <FaGift className="hero-icon" /> GiftBuilder
                    </h2>

                    <p className="footer-desc">
                        Discover meaningful gifts that bring joy and love to every celebration!
                    </p>
                </div>

                <div className="footer-center">

                    <div className="newsletter">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSubscribe}>Subscribe</button>
                    </div>

                    {message && <p className="toast">{message}</p>}

                    <div className="footer-socials">
                        <div className="social-item">
                            <FaFacebook />
                            <span>Facebook</span>
                        </div>

                        <div className="social-item">
                            <FaInstagram />
                            <span>Instagram</span>
                        </div>

                        <div className="social-item">
                            <FaXTwitter />
                            <span>Twitter</span>
                        </div>

                        <div className="social-item">
                            <FaYoutube />
                            <span>YouTube</span>
                        </div>
                    </div>

                </div>

                <div className="footer-right">
                    <p>© 2026 GiftBuilder. All rights reserved.</p>
                </div>

            </div>

            {showTopBtn && (
                <button className="back-to-top" onClick={scrollTop}>
                    <FaArrowUp className="arrow-btn" />
                </button>
            )}
        </footer>
    );
}

export default Footer;
