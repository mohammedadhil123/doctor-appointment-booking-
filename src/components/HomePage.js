import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Award,
  Clock,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import axios from "axios";
import DoctorCard from "../components/doctors/DoctorCard";


const HomeContainer = styled.div`
  width: 100%;
`;
const HeroSection = styled.section`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="rgba(255,255,255,0.05)"><polygon points="0,0 1000,0 1000,100"/></svg>');
    background-size: 200px 100px;
  }
`;
const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;
const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 40px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #2563eb;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
`;

const StatsSection = styled.section`
  background: #f8fafc;
  padding: 80px 20px;
`;
const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
`;
const StatCard = styled.div`
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;
const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
`;
const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 10px;
`;
const StatLabel = styled.div`
  color: #6b7280;
  font-weight: 500;
`;

const DoctorsSection = styled.section`
  padding: 80px 20px;
  background: white;
`;
const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 60px;
`;
const DoctorsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;
const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #6b7280;
  font-size: 1.1rem;
`;
const ErrorMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #dc2626;
  font-size: 1.1rem;
`;

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


const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const transformedDoctors = response.data
          .slice(0, 6)
          .map((user, index) => ({
            id: user.id,
            name: `Dr. ${user.name}`,
            specialty: [
              "Cardiologist",
              "Pediatrician",
              "Neurologist",
              "Orthopedist",
              "Dermatologist",
              "General Medicine",
            ][index % 6],
            experience: Math.floor(Math.random() * 15) + 5,
            rating: (Math.random() * 1.5 + 3.5).toFixed(1),
            image: `https://randomuser.me/api/portraits/med/men/${
              index + 10
            }.jpg`,
            available: Math.random() > 0.3,
            phone: user.phone,
            email: user.email,
          }));
        setDoctors(transformedDoctors);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError("Failed to load doctors. Please try again later.");
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Your Health, Our Priority</HeroTitle>
          <HeroSubtitle>
            Experience world-class healthcare with our team of expert doctors.
            Book your appointment today and take the first step towards better
            health.
          </HeroSubtitle>
          <CTAButton to="/contact">
            Book Appointment Now <ChevronRight size={20} />
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <StatsSection>
        <StatsContainer>
          <StatCard>
            <StatIcon>
              <Users size={30} />
            </StatIcon>
            <StatNumber>10,000+</StatNumber>
            <StatLabel>Happy Patients</StatLabel>
          </StatCard>
          <StatCard>
            <StatIcon>
              <Award size={30} />
            </StatIcon>
            <StatNumber>50+</StatNumber>
            <StatLabel>Expert Doctors</StatLabel>
          </StatCard>
          <StatCard>
            <StatIcon>
              <Calendar size={30} />
            </StatIcon>
            <StatNumber>15+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatCard>
          <StatCard>
            <StatIcon>
              <Clock size={30} />
            </StatIcon>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Emergency Care</StatLabel>
          </StatCard>
        </StatsContainer>
      </StatsSection>

      <DoctorsSection>
        <SectionTitle>Meet Our Expert Doctors</SectionTitle>
        {loading && (
          <LoadingMessage>Loading our amazing doctors...</LoadingMessage>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!loading && !error && (
          <DoctorsGrid>
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </DoctorsGrid>
        )}
      </DoctorsSection>

      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <h3>MediCare Plus</h3>
            <p style={{ color: "#d1d5db", lineHeight: "1.6" }}>
              Your trusted healthcare partner providing comprehensive medical
              services with compassion and excellence. We're here for your
              health journey.
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
                <div>Mon - Fri: 8:00 AM - 8:00 PM</div>
                <div>Sat - Sun: 9:00 AM - 5:00 PM</div>
                <div style={{ marginTop: "10px", color: "#fbbf24" }}>
                  Emergency: 24/7
                </div>
              </div>
            </ContactItem>
          </FooterSection>

          <FooterSection>
            <h3>Services</h3>
            <div style={{ color: "#d1d5db" }}>
              <div style={{ marginBottom: "8px" }}>• General Medicine</div>
              <div style={{ marginBottom: "8px" }}>• Pediatrics</div>
              <div style={{ marginBottom: "8px" }}>• Cardiology</div>
              <div style={{ marginBottom: "8px" }}>• Orthopedics</div>
              <div style={{ marginBottom: "8px" }}>• Emergency Care</div>
            </div>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          <p>
            &copy; 2024 MediCare Plus. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </FooterBottom>
      </FooterContainer>
    </HomeContainer>
  );
};

export default HomePage;
