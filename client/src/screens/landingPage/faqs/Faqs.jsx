/* eslint-disable react/no-unescaped-entities */
import Modal from 'react-bootstrap/Modal';

const Faqs = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>Frequently Asked Questions</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="faq">
          <h2>Q: How can I make a reservation for a guestroom?</h2>
          <p>
            A: To make a reservation, visit our website and follow the booking
            process. Select your desired dates, choose the type of guestroom,
            and proceed with the payment.
          </p>
        </div>
        <div className="faq">
          <h2>Q: What payment methods are accepted?</h2>
          <p>
            A: We accept payments through credit cards, debit cards, and online
            payment platforms. You can select your preferred payment method
            during the booking process.
          </p>
        </div>
        <div className="faq">
          <h2>Q: Is there a cancellation policy?</h2>
          <p>
            A: Yes, we have a cancellation policy in place. The specific details
            can be found during the booking process. Please review the policy
            before making a reservation.
          </p>
        </div>
        <div className="faq">
          <h2>Q: Can I modify my reservation after it has been confirmed?</h2>
          <p>
            A: Modifying a reservation is subject to availability and our
            modification policy. Contact our customer support team for
            assistance with modifying your reservation.
          </p>
        </div>
        <div className="faq">
          <h2>Q: What happens if I don't show up for my reservation?</h2>
          <p>
            A: If you fail to show up for your reservation without prior notice,
            it may result in the cancellation of your reservation and no refund
            will be provided.
          </p>
        </div>
        <div className="faq">
          <h2>
            Q: Can I request additional amenities or services for my guestroom?
          </h2>
          <p>
            A: Yes, you can make special requests for additional amenities or
            services. However, these requests are subject to availability and
            additional charges may apply.
          </p>
        </div>
        <div className="faq">
          <h2>Q: How can I contact customer support?</h2>
          <p>
            A: For any inquiries or assistance, please reach out to our customer
            support team through the contact details provided on our website.
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Faqs;
