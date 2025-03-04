import React, { useState } from 'react';
import ChatBox from '../JavaScript/ChatBox';
import emailjs from '@emailjs/browser';
import { Send, User, Mail, MessageSquare, Phone, MapPin, Clock, Globe, Check, ChartBar } from 'lucide-react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirement: '',
    message: '',
    preferredContact: 'email',
    newsletter: false
  });
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('contact');
  const [focused, setFocused] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Send email using EmailJS
    try {
      await emailjs.send(
        'service_fj0i8mg', // Replace with your EmailJS Service ID
        'template_nkp9an9', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          requirement: formData.requirement,
          message: formData.message,
          newsletter: formData.newsletter ? 'Yes' : 'No'
        },
        'deevNwLcjx2B8vJd1' // Replace with your EmailJS Public Key
      );
      setLoading(false);
      setActiveSection('success');
    } catch (error) {
      console.error('Failed to send message:', error);
      setLoading(false);
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      requirement: '',
      message: '',
      preferredContact: 'email',
      newsletter: false
    });
    setActiveSection('contact');
  };

  const ContactInfo = () => (
    <div className="row mb-5">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="card h-100 shadow-sm hover-shadow">
          <div className="card-body text-center">
            <div className="d-inline-flex justify-content-center align-items-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="h5 mb-2">Our Location</h3>
            <p className="text-muted mb-0">Capital High Street, Jagatpura, Jaipur, 302022</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4 mb-md-0">
        <div className="card h-100 shadow-sm hover-shadow">
          <div className="card-body text-center">
            <div className="d-inline-flex justify-content-center align-items-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
              <Clock className="text-primary" size={24} />
            </div>
            <h3 className="h5 mb-2">Business Hours</h3>
            <p className="text-muted mb-0">Mon - Fri: 9:00 AM - 6:00 PM<br />Weekend: Closed</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card h-100 shadow-sm hover-shadow">
          <div className="card-body text-center">
            <div className="d-inline-flex justify-content-center align-items-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
              <Globe className="text-primary" size={24} />
            </div>
            <h3 className="h5 mb-2">Global Support</h3>
            <p className="text-muted mb-0">24/7 Online Support<br />support@developerkites.in</p>
          </div>
        </div>
      </div>
    </div>
  );

  const SuccessMessage = () => (
    <div className="card shadow">
      <div className="card-body text-center p-5">
        <div className="d-inline-flex justify-content-center align-items-center bg-success bg-opacity-10 p-3 rounded-circle mb-4">
          <Check className="text-success" size={32} />
        </div>
        <h3 className="h3 mb-3">Thank You!</h3>
        <p className="text-muted mb-4">
          Your message has been successfully sent. We'll get back to you shortly!
        </p>
        <button
          onClick={resetForm}
          className="btn btn-primary btn-lg"
        >
          Send Another Message
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 mb-3">
            <span className="text-primary">Get in Touch</span> With Us
          </h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>
            Have questions or need assistance? We're here to help! Our team of experts
            is ready to address your inquiries and provide the support you need.
          </p>
        </div>

        <ContactInfo />

        {activeSection === 'contact' ? (
          <div className="card shadow">
            <div className="card-body p-4 p-md-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <User size={18} className={focused === 'name' ? 'text-primary' : 'text-muted'} />
                        </span>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused('')}
                          required
                          className="form-control"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <Mail size={18} className={focused === 'email' ? 'text-primary' : 'text-muted'} />
                        </span>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused('')}
                          required
                          className="form-control"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <Phone size={18} className={focused === 'phone' ? 'text-primary' : 'text-muted'} />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocused('phone')}
                          onBlur={() => setFocused('')}
                          className="form-control"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Requirement Type</label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <MessageSquare size={18} className={focused === 'requirement' ? 'text-primary' : 'text-muted'} />
                        </span>
                        <select
                          name="requirement"
                          value={formData.requirement}
                          onChange={handleChange}
                          onFocus={() => setFocused('requirement')}
                          onBlur={() => setFocused('')}
                          required
                          className="form-select"
                        >
                          <option value="">Select requirement</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="sales">Sales Inquiry</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused('')}
                        required
                        rows={4}
                        className="form-control"
                        placeholder="Please describe your requirements or message..."
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="form-check-input"
                        id="newsletter"
                      />
                      <label className="form-check-label" htmlFor="newsletter">
                        Subscribe to our newsletter for updates
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary w-100 btn-lg"
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="me-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <SuccessMessage />
        )}
      </div>
    <ChartBar/>
    </div>
  );
};

export default ContactForm;