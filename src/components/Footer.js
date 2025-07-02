
import React from 'react';
import styled from 'styled-components';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const FooterContainer = styled.footer`
  background: #1f2937;
  color: white;
  padding: 50px 20px 20px;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FooterSection = styled.div`
  h3 {
    color: #60a5fa;
    margin-bottom: 20px;
    font-size: 20px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  color: #d1d5db;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  margin-top: 40px;
  padding-top: 20px;
  text-align: center;
  color: #9ca3af;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>MediCare Plus</h3>
          <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
            Your trusted healthcare partner providing comprehensive medical services 
            with compassion and excellence. We're here for your health journey.
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Contact Info</h3>
          <ContactItem>
            <MapPin size={18} />
            <span>123 Medical Center Dr, Health City, HC 12345</span>
          </ContactItem>
          <ContactItem>
            <Phone size={18} />
            <span>(555) 123-4567</span>
          </ContactItem>
          <ContactItem>
            <Mail size={18} />
            <span>info@medicareplus.com</span>
          </ContactItem>
        </FooterSection>

        <FooterSection>
          <h3>Office Hours</h3>
          <ContactItem>
            <Clock size={18} />
            <div>
              <div>Monday - Friday: 8:00 AM - 8:00 PM</div>
              <div>Saturday - Sunday: 9:00 AM - 5:00 PM</div>
              <div style={{ marginTop: '10px', color: '#fbbf24' }}>
                Emergency: 24/7
              </div>
            </div>
          </ContactItem>
        </FooterSection>

        <FooterSection>
          <h3>Services</h3>
          <div style={{ color: '#d1d5db' }}>
            <div style={{ marginBottom: '8px' }}>• General Medicine</div>
            <div style={{ marginBottom: '8px' }}>• Pediatrics</div>
            <div style={{ marginBottom: '8px' }}>• Cardiology</div>
            <div style={{ marginBottom: '8px' }}>• Orthopedics</div>
            <div style={{ marginBottom: '8px' }}>• Emergency Care</div>
          </div>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2024 MediCare Plus. All rights reserved. | Privacy Policy | Terms of Service</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
