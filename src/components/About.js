
import React from 'react';
import styled from 'styled-components';
import { Award, Users, Heart, Shield, Clock, MapPin } from 'lucide-react';

const AboutContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e40af 0%, #3730a3 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const ContentSection = styled.section`
  padding: 80px 20px;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 60px;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 40px 30px;
  background: #f8fafc;
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  color: white;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 15px;
`;

const ValueDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

const StorySection = styled.section`
  padding: 80px 20px;
  background: #f8fafc;
`;

const StoryContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StoryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 30px;
`;

const StatsSection = styled.section`
  padding: 80px 20px;
  background: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 30px 20px;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #3b82f6;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  color: #6b7280;
  font-weight: 500;
  font-size: 1.1rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>About MediCare Plus</HeroTitle>
          <HeroSubtitle>
            Dedicated to providing exceptional healthcare services with compassion, 
            expertise, and cutting-edge medical technology for over 15 years.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle>Our Core Values</SectionTitle>
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>
                <Heart size={40} />
              </ValueIcon>
              <ValueTitle>Compassionate Care</ValueTitle>
              <ValueDescription>
                We treat every patient with empathy, respect, and genuine concern for their well-being. 
                Your comfort and peace of mind are our top priorities.
              </ValueDescription>
            </ValueCard>

            <ValueCard>
              <ValueIcon>
                <Award size={40} />
              </ValueIcon>
              <ValueTitle>Medical Excellence</ValueTitle>
              <ValueDescription>
                Our team of board-certified physicians and specialists are committed to delivering 
                the highest standard of medical care using the latest treatments and technologies.
              </ValueDescription>
            </ValueCard>

            <ValueCard>
              <ValueIcon>
                <Shield size={40} />
              </ValueIcon>
              <ValueTitle>Patient Safety</ValueTitle>
              <ValueDescription>
                We maintain the strictest safety protocols and quality standards to ensure every 
                patient receives safe, effective, and reliable medical care.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </ContentSection>

      <StorySection>
        <Container>
          <SectionTitle>Our Story</SectionTitle>
          <StoryContent>
            <StoryText>
              Founded in 2009 with a vision to transform healthcare delivery, MediCare Plus has grown 
              from a small clinic to a comprehensive medical center serving thousands of patients 
              across the region. Our journey began with a simple belief: everyone deserves access 
              to quality healthcare.
            </StoryText>
            <StoryText>
              Today, we're proud to house over 50 medical specialists across multiple disciplines, 
              state-of-the-art diagnostic equipment, and a dedicated team of healthcare professionals 
              who share our commitment to excellence. We continue to evolve and expand our services 
              to meet the changing needs of our community.
            </StoryText>
            <StoryText>
              Our patient-centered approach means we listen to your concerns, involve you in treatment 
              decisions, and provide the support you need throughout your healthcare journey. We're not 
              just your healthcare provider – we're your partners in health.
            </StoryText>
          </StoryContent>
        </Container>
      </StorySection>

      <StatsSection>
        <Container>
          <SectionTitle>Our Impact</SectionTitle>
          <StatsGrid>
            <StatCard>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years of Service</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>50+</StatNumber>
              <StatLabel>Medical Specialists</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>10,000+</StatNumber>
              <StatLabel>Patients Served</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Emergency Care</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>5</StatNumber>
              <StatLabel>Clinic Locations</StatLabel>
            </StatCard>
            
            <StatCard>
              <StatNumber>98%</StatNumber>
              <StatLabel>Patient Satisfaction</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>
    </AboutContainer>
  );
};

export default About;
