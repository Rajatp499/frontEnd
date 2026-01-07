import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdPerson, MdEmail, MdMessage, MdPhone } from 'react-icons/md';
import HeroSection from '../../components/layout/HeroSection';
import { FeatureTextCard } from '../../components/ui/card';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const contacts=[{
        id:1,
        icon: FaMapMarkerAlt,
        title:'Visit us',
        text:'Dharan-12, Bhotepul Nepal',
    },{
        id:2,
        icon: FaPhoneAlt,
        title:'Call us',
        text:`+977 9824367429  +977 9824367429`,
    },{
        id:3,
        icon: FaEnvelope,
        title:'Email us',
        text:'besteggcoop@gmail.com',
    }
]

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<boolean>(false);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setSubmitStatus(true);
            setIsSubmitting(false);

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(false), 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <HeroSection heading='Get In Touch' subHeading={`We'd love to hear from you. Send us a message and we'll respond as soon as possible.`} />

            {/* Main Content */}
            <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-32 py-12 sm:py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Contact Information Cards */}
                    {contacts.map((c)=>
                    <div key={c.id}>
                    <FeatureTextCard icon={c.icon} title={c.title} text={c.text} index={c.id} />
                    </div>
                    )}
                
                </div>

                {/* Contact Form and Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-White rounded-2xl shadow-lg p-8 sm:p-10">
                        <h2 className="text-3xl font-bold text-Black mb-6">Send Us a Message</h2>

                        {submitStatus && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                Thank you! Your message has been sent successfully. We'll get back to you soon.
                            </div>
                        )}

                        <div className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-secHeader mb-2">
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <MdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-secHeader text-xl" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full pl-12 pr-4 py-3 border border-secheadertext-secHeader rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            {/* Email and Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-secHeader mb-2">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-secHeader text-xl" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            className="w-full pl-12 pr-4 py-3 border border-secheadertext-secHeader rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-secHeader mb-2">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <MdPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-secHeader text-xl" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+977 XXXXXXXXXX"
                                            className="w-full pl-12 pr-4 py-3 border border-secheadertext-secHeader rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-secHeader mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 border border-secheadertext-secHeader rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-secHeader mb-2">
                                    Message *
                                </label>
                                <div className="relative">
                                    <MdMessage className="absolute left-4 top-4 text-secHeader text-xl" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell us more about your inquiry..."
                                        className="w-full pl-12 pr-4 py-3 border border-secheadertext-secHeader rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-linear-to-br from-primary to-primaryDark text-White font-semibold py-4 px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </div>

                    {/* Map and Additional Info */}
                    <div className="space-y-8">
                        {/* Map */}
                        <div className="bg-White rounded-2xl shadow-lg overflow-hidden h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.8826156839744!2d87.28264931501436!3d26.812143283170994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef41c74e000001%3A0x5c5f1e8f8f8f8f8f!2sDharan!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                // allowFullScreen=" "
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Best Egg COOP Location"
                            ></iframe>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-White rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-secHeader mb-6">Business Hours</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-secheadertext-secHeader">
                                    <span className="font-semibold text-secHeader">Monday - Friday</span>
                                    <span className="text-secHeader">9:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-secheadertext-secHeader">
                                    <span className="font-semibold text-secHeader">Saturday</span>
                                    <span className="text-secHeader">10:00 AM - 3:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="font-semibold text-secHeader">Sunday</span>
                                    <span className="text-red-500 font-semibold">Closed</span>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-8 pt-6 border-t border-secheadertext-secHeader">
                                <h4 className="font-semibold text-secHeader mb-4">Follow Us</h4>
                                <div className="flex gap-4">
                                    <a
                                        href="#facebook"
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-primaryDark/70  transform hover:-translate-y-1 transition-all duration-300"
                                        aria-label="Facebook"
                                    >
                                        <FaFacebookF className="text-xl" />
                                    </a>
                                    <a
                                        href="#instagram"
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-primaryDark/70  transform hover:-translate-y-1 transition-all duration-300"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram className="text-xl" />
                                    </a>
                                    <a
                                        href="#twitter"
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-primaryDark/70  transform hover:-translate-y-1 transition-all duration-300"
                                        aria-label="Twitter"
                                    >
                                        <FaTwitter className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;