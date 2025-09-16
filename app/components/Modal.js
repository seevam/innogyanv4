'use client';

import { useState, useEffect } from 'react';

export default function Modal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    parent_name: '',
    email: '',
    phone: '',
    child_name: '',
    child_age: '',
    product_interest: '',
    urgency: '',
    message: '',
    consent: false,
    priority: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ageRecommendation, setAgeRecommendation] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Focus first input when modal opens
      setTimeout(() => {
        const firstInput = document.getElementById('parent-name');
        if (firstInput) firstInput.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Show age-based recommendations
    if (name === 'child_age') {
      const age = parseInt(value);
      let recommendation = '';
      if (age >= 5 && age <= 12) {
        recommendation = 'Based on your child\'s age, innogyan Playbox would be perfect for building foundational creative skills!';
      } else if (age >= 13 && age <= 18) {
        recommendation = 'Club innogyan is ideal for your teenager to develop real-world projects and portfolios!';
      } else if (age >= 18 && age <= 25) {
        recommendation = 'innogyan Garage can help your young adult build ventures alongside their education!';
      }
      setAgeRecommendation(recommendation);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['parent_name', 'email', 'phone', 'child_name', 'child_age', 'product_interest'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0 || !formData.consent) {
      alert('Please fill in all required fields and accept the terms.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      // Track conversion
      console.log('Tracking form submission:', {
        event: 'modal_form_submission',
        child_age: formData.child_age,
        parent_email: formData.email,
        product_interest: formData.product_interest
      });
      
      // Reset form
      setFormData({
        parent_name: '',
        email: '',
        phone: '',
        child_name: '',
        child_age: '',
        product_interest: '',
        urgency: '',
        message: '',
        consent: false,
        priority: false
      });
      setAgeRecommendation('');
      
      // Show success
      onSuccess();
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
      <form className="modal-form" onSubmit={handleSubmit}>
        <button type="button" className="close-btn" onClick={onClose}>
          &times;
        </button>
        
        <div className="form-header">
          <div className="urgency-badge">⚡ Limited spots available this quarter</div>
          <h3 className="form-title">Start Your Child's Creative Journey</h3>
          <p className="form-subtitle">Join thousands of families building their children's creative future with innogyan</p>
        </div>
        
        <div className="form-group">
          <label htmlFor="parent-name">Parent/Guardian Name *</label>
          <input 
            type="text" 
            id="parent-name" 
            name="parent_name" 
            required 
            placeholder="Your full name"
            value={formData.parent_name}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="child-name">Child's Name *</label>
          <input 
            type="text" 
            id="child-name" 
            name="child_name" 
            required 
            placeholder="Child's first name"
            value={formData.child_name}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="child-age">Child's Age *</label>
          <select 
            id="child-age" 
            name="child_age" 
            required
            value={formData.child_age}
            onChange={handleInputChange}
          >
            <option value="">Select age</option>
            {[...Array(21)].map((_, i) => {
              const age = i + 5;
              return <option key={age} value={age}>{age} years</option>;
            })}
          </select>
          {ageRecommendation && (
            <div className="age-recommendation">
              {ageRecommendation}
            </div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="product-interest">Most Interested In *</label>
          <select 
            id="product-interest" 
            name="product_interest" 
            required
            value={formData.product_interest}
            onChange={handleInputChange}
          >
            <option value="">Select primary interest</option>
            <option value="playbox">innogyan Playbox (Ages 5-12)</option>
            <option value="club">Club innogyan (Ages 13-18)</option>
            <option value="garage">innogyan Garage (Ages 18-25)</option>
            <option value="multiple">Multiple products</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="urgency">How soon would you like to start?</label>
          <select 
            id="urgency" 
            name="urgency"
            value={formData.urgency}
            onChange={handleInputChange}
          >
            <option value="">Select timeline</option>
            <option value="this-week">This week</option>
            <option value="this-month">This month</option>
            <option value="next-month">Next month</option>
            <option value="next-quarter">Next quarter</option>
            <option value="exploring">Just exploring options</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Tell us about your child's interests</label>
          <textarea 
            id="message" 
            name="message" 
            rows="3" 
            placeholder="What does your child love to do? What are your hopes for their development?"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="checkbox-group">
          <input 
            type="checkbox" 
            id="consent" 
            name="consent" 
            required
            checked={formData.consent}
            onChange={handleInputChange}
          />
          <label htmlFor="consent">I agree to receive communications from innogyan and understand that my information will be used to provide relevant updates about programs for my child.</label>
        </div>
        
        <div className="checkbox-group">
          <input 
            type="checkbox" 
            id="priority" 
            name="priority"
            checked={formData.priority}
            onChange={handleInputChange}
          />
          <label htmlFor="priority">Priority contact - I'm ready to enroll and want immediate follow-up.</label>
        </div>
        
        <button 
          type="submit" 
          className="submit-btn" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Start The Creative Journey'}
        </button>
      </form>

      <style jsx>{`
        .modal-form {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          padding: 30px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          color: #ffffff;
          transform: scale(0.8) translateY(50px);
          transition: transform 0.3s ease;
        }

        .modal-overlay.active .modal-form {
          transform: scale(1) translateY(0);
        }

        .modal-form::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00ffff, #ff00ff);
          border-radius: 20px 20px 0 0;
        }

        .close-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          font-size: 24px;
          cursor: pointer;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ff4444;
          transform: rotate(90deg);
        }

        .form-header {
          margin-bottom: 25px;
          text-align: center;
          padding-right: 30px;
        }

        .form-title {
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 8px;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .form-subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        .urgency-badge {
          display: inline-block;
          background: linear-gradient(45deg, #ff4444, #ff00ff);
          color: #fff;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 15px;
          animation: modalPulse 2s infinite;
        }

        @keyframes modalPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 68, 68, 0.3); }
          50% { box-shadow: 0 0 20px rgba(255, 68, 68, 0.6); }
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          font-size: 14px;
        }

        input, select, textarea {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #ffffff;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #00ffff;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.08);
        }

        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        select option {
          background: #1a1a2e;
          color: #ffffff;
        }

        .checkbox-group {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 20px;
        }

        .checkbox-group input[type="checkbox"] {
          width: auto;
          margin: 0;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .checkbox-group label {
          margin: 0;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.4;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%);
          color: #000;
          border: none;
          padding: 14px 20px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 255, 255, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .age-recommendation {
          background: rgba(0,255,255,0.1);
          border: 1px solid rgba(0,255,255,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-top: 10px;
          font-size: 13px;
          color: #00ffff;
        }

        @media (max-width: 768px) {
          .modal-form {
            margin: 10px;
            padding: 20px;
            max-height: 95vh;
          }
          
          .form-title {
            font-size: 20px;
          }
        }

        .modal-form::-webkit-scrollbar {
          width: 6px;
        }

        .modal-form::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .modal-form::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 255, 0.5);
          border-radius: 3px;
        }

        .modal-form::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 255, 0.7);
        }
      `}</style>
    </div>
  );
}
