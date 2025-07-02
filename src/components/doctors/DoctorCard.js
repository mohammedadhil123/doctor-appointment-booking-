import React from "react";
import styled from "styled-components";
import { Star, Phone, Mail, Calendar } from "lucide-react";



const CardContainer = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const DoctorImage = styled.div`
  height: 250px;
  background-position: center;
  background-size: cover;
  background-color: #e5e7eb;
  position: relative;
`;

const AvailabilityBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: white;
`;

const CardContent = styled.div`
  padding: 25px;
`;

const DoctorName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 8px;
`;

const Specialty = styled.p`
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 1.1rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Experience = styled.span`
  color: #6b7280;
  font-size: 14px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fbbf24;
  font-weight: 600;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: #6b7280;
  font-size: 14px;
`;

const BookButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const DoctorCard = ({ doctor }) => {
  const handleBookAppointment = () => {
    if (doctor.available) {
      alert(
        `Booking appointment with ${doctor.name}. Please fill out the contact form to complete your booking.`
      );
    }
  };

  return (
    <CardContainer>
      <DoctorImage style={{ backgroundImage: `url(${doctor.image})` }}>
        <AvailabilityBadge
          style={{ background: doctor.available ? "#10b981" : "#ef4444" }}
        >
          {doctor.available ? "Available" : "Busy"}
        </AvailabilityBadge>
      </DoctorImage>

      <CardContent>
        <DoctorName>{doctor.name}</DoctorName>
        <Specialty>{doctor.specialty}</Specialty>

        <InfoRow>
          <Experience>{doctor.experience} years experience</Experience>
          <Rating>
            <Star size={16} fill="currentColor" />
            {doctor.rating}
          </Rating>
        </InfoRow>

        <ContactInfo>
          <ContactItem>
            <Phone size={14} />
            {doctor.phone}
          </ContactItem>
          <ContactItem>
            <Mail size={14} />
            {doctor.email}
          </ContactItem>
        </ContactInfo>

        <BookButton
          onClick={handleBookAppointment}
          disabled={!doctor.available}
        >
          <Calendar size={16} />
          {doctor.available ? "Book Appointment" : "Currently Unavailable"}
        </BookButton>
      </CardContent>
    </CardContainer>
  );
};

export default DoctorCard;
