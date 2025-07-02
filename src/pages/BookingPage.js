import React, { useReducer } from "react";
import styled from "styled-components";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  department: "",
  message: "",
  isSubmitting: false,
  submitSuccess: false,
  submitError: null,
};


const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_SUBMITTING":
      return { ...state, isSubmitting: action.value };
    case "SET_SUCCESS":
      return { ...state, submitSuccess: action.value };
    case "SET_ERROR":
      return { ...state, submitError: action.value };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const BookingPage = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (field) => (e) => {
    dispatch({ type: "SET_FIELD", field, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_ERROR", value: null });
    dispatch({ type: "SET_SUCCESS", value: false });
    dispatch({ type: "SET_SUBMITTING", value: true });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch({ type: "SET_SUCCESS", value: true });
      dispatch({ type: "RESET_FORM" });

      setTimeout(() => {
        dispatch({ type: "SET_SUCCESS", value: false });
      }, 5000);
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        value: "Failed to submit appointment request. Please try again.",
      });
    } finally {
      dispatch({ type: "SET_SUBMITTING", value: false });
    }
  };
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Book Your Appointment</HeroTitle>
          <HeroSubtitle>
            Schedule your visit with our expert medical team.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <FormSection>
        {formState.submitSuccess && (
          <MessageBox success>
            <CheckCircle size={20} />
            Appointment successfully submitted!
          </MessageBox>
        )}
        {formState.submitError && (
          <MessageBox>
            <AlertCircle size={20} />
            {formState.submitError}
          </MessageBox>
        )}

        <Form onSubmit={handleSubmit}>
          <Row>
            <InputBox>
              <label>
                <User size={16} /> First Name
              </label>
              <input
                required
                value={formState.firstName}
                onChange={handleInputChange("firstName")}
              />
            </InputBox>
            <InputBox>
              <label>
                <User size={16} /> Last Name
              </label>
              <input
                required
                value={formState.lastName}
                onChange={handleInputChange("lastName")}
              />
            </InputBox>
          </Row>

          <Row>
            <InputBox>
              <label>
                <Mail size={16} /> Email
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={handleInputChange("email")}
              />
            </InputBox>
            <InputBox>
              <label>
                <Phone size={16} /> Phone
              </label>
              <input
                type="tel"
                required
                value={formState.phone}
                onChange={handleInputChange("phone")}
              />
            </InputBox>
          </Row>

          <Row>
            <InputBox>
              <label>
                <Calendar size={16} /> Preferred Date
              </label>
              <input
                type="date"
                required
                value={formState.preferredDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={handleInputChange("preferredDate")}
              />
            </InputBox>
            <InputBox>
              <label>
                <Clock size={16} /> Preferred Time
              </label>
              <select
                required
                value={formState.preferredTime}
                onChange={handleInputChange("preferredTime")}
              >
                <option value="">Select time</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </InputBox>
          </Row>

          <InputBox>
            <label>Department</label>
            <select
              required
              value={formState.department}
              onChange={handleInputChange("department")}
            >
              <option value="">Select department</option>
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Pediatrics</option>
              <option>Orthopedics</option>
              <option>Dermatology</option>
            </select>
          </InputBox>

          <InputBox>
            <label>
              <MessageSquare size={16} /> Message
            </label>
            <textarea
              value={formState.message}
              onChange={handleInputChange("message")}
              placeholder="Describe your concern (optional)"
            />
          </InputBox>

          <SubmitButton type="submit" disabled={formState.isSubmitting}>
            {formState.isSubmitting ? "Submitting..." : "Request Appointment"}
          </SubmitButton>
        </Form>
      </FormSection>
    </Container>
  );
};

export default BookingPage;



const Container = styled.div`
  font-family: sans-serif;
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
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const FormSection = styled.section`
  padding: 60px 20px;
  max-width: 800px;
  margin: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const InputBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;

  input,
  select,
  textarea {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  border: none;
  padding: 16px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const MessageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-radius: 8px;
  background: ${(props) => (props.success ? "#d1fae5" : "#fee2e2")};
  color: ${(props) => (props.success ? "#065f46" : "#991b1b")};
  border: 1px solid ${(props) => (props.success ? "#10b981" : "#ef4444")};
`;
