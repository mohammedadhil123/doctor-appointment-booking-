
import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const ContactContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
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

const FormSection = styled.section`
  padding: 80px 20px;
  background: #f8fafc;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const FormCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const FormHeader = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  padding: 40px;
  text-align: center;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FormSubtitle = styled.p`
  opacity: 0.9;
  font-size: 1.1rem;
`;

const FormBody = styled.div`
  padding: 40px;
`;

const Form = styled.form`
  display: grid;
  gap: 30px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 15px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:invalid {
    border-color: #ef4444;
  }
`;

const Select = styled.select`
  padding: 15px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  border: none;
  padding: 18px 40px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(5, 150, 105, 0.3);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled.div`
  background: #d1fae5;
  border: 2px solid #10b981;
  color: #065f46;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.div`
  background: #fee2e2;
  border: 2px solid #ef4444;
  color: #991b1b;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

// Form state management with useReducer
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  department: string;
  message: string;
  isSubmitting: boolean;
  submitSuccess: boolean;
  submitError: string | null;
}

type FormAction = 
  | { type: 'SET_FIELD'; field: keyof FormState; value: string | boolean }
  | { type: 'SET_SUBMITTING'; value: boolean }
  | { type: 'SET_SUCCESS'; value: boolean }
  | { type: 'SET_ERROR'; value: string | null }
  | { type: 'RESET_FORM' };

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: '',
  department: '',
  message: '',
  isSubmitting: false,
  submitSuccess: false,
  submitError: null
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_SUBMITTING':
      return { ...state, isSubmitting: action.value };
    case 'SET_SUCCESS':
      return { ...state, submitSuccess: action.value };
    case 'SET_ERROR':
      return { ...state, submitError: action.value };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const Contact = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: 'SET_FIELD', field, value: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous states
    dispatch({ type: 'SET_ERROR', value: null });
    dispatch({ type: 'SET_SUCCESS', value: false });
    dispatch({ type: 'SET_SUBMITTING', value: true });

    try {
      // Simulate API call
      console.log('Submitting appointment request:', formState);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful submission
      dispatch({ type: 'SET_SUCCESS', value: true });
      dispatch({ type: 'RESET_FORM' });
      
      // Show success message for 5 seconds
      setTimeout(() => {
        dispatch({ type: 'SET_SUCCESS', value: false });
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      dispatch({ type: 'SET_ERROR', value: 'Failed to submit appointment request. Please try again.' });
    } finally {
      dispatch({ type: 'SET_SUBMITTING', value: false });
    }
  };

  return (
    <ContactContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Book Your Appointment</HeroTitle>
          <HeroSubtitle>
            Schedule your visit with our expert medical team. We're here to provide 
            you with the best healthcare experience possible.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <FormSection>
        <Container>
          <FormCard>
            <FormHeader>
              <FormTitle>Appointment Request Form</FormTitle>
              <FormSubtitle>
                Fill out the form below and we'll contact you to confirm your appointment
              </FormSubtitle>
            </FormHeader>

            <FormBody>
              {formState.submitSuccess && (
                <SuccessMessage>
                  <CheckCircle size={24} />
                  <div>
                    <strong>Appointment request submitted successfully!</strong>
                    <br />
                    We'll contact you within 24 hours to confirm your appointment.
                  </div>
                </SuccessMessage>
              )}

              {formState.submitError && (
                <ErrorMessage>
                  <AlertCircle size={24} />
                  <div>{formState.submitError}</div>
                </ErrorMessage>
              )}

              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <Label>
                      <User size={18} />
                      First Name *
                    </Label>
                    <Input
                      type="text"
                      value={formState.firstName}
                      onChange={handleInputChange('firstName')}
                      required
                      placeholder="Enter your first name"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>
                      <User size={18} />
                      Last Name *
                    </Label>
                    <Input
                      type="text"
                      value={formState.lastName}
                      onChange={handleInputChange('lastName')}
                      required
                      placeholder="Enter your last name"
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label>
                      <Mail size={18} />
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange('email')}
                      required
                      placeholder="Enter your email address"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>
                      <Phone size={18} />
                      Phone Number *
                    </Label>
                    <Input
                      type="tel"
                      value={formState.phone}
                      onChange={handleInputChange('phone')}
                      required
                      placeholder="Enter your phone number"
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <Label>
                      <Calendar size={18} />
                      Preferred Date *
                    </Label>
                    <Input
                      type="date"
                      value={formState.preferredDate}
                      onChange={handleInputChange('preferredDate')}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>
                      <Clock size={18} />
                      Preferred Time *
                    </Label>
                    <Select
                      value={formState.preferredTime}
                      onChange={handleInputChange('preferredTime')}
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </Select>
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label>Department *</Label>
                  <Select
                    value={formState.department}
                    onChange={handleInputChange('department')}
                    required
                  >
                    <option value="">Select a department</option>
                    <option value="general">General Medicine</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="neurology">Neurology</option>
                    <option value="emergency">Emergency Care</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label>
                    <MessageSquare size={18} />
                    Additional Message
                  </Label>
                  <TextArea
                    value={formState.message}
                    onChange={handleInputChange('message')}
                    placeholder="Please describe your symptoms or reason for visit (optional)"
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={formState.isSubmitting}>
                  {formState.isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      <Calendar size={20} />
                      Request Appointment
                    </>
                  )}
                </SubmitButton>
              </Form>
            </FormBody>
          </FormCard>
        </Container>
      </FormSection>
    </ContactContainer>
  );
};

export default Contact;
