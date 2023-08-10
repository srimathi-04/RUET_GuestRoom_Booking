import Modal from 'react-bootstrap/Modal';

const TaC = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1> Terms and Conditions for RUET Guestroom Booking</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol>
          <li>
            <b>Acceptance of Terms:</b> By accessing and using the RUET
            Guestroom Booking website, you agree to comply with and be bound by
            the following terms and conditions.
          </li>
          <li>
            Booking Process: The RUET Guestroom Booking website allows users to
            make reservations for guestrooms at RUET. Reservations are subject
            to availability and are confirmed only after successful payment.
          </li>
          <li>
            User Responsibility: Users are responsible for providing accurate
            and complete information during the booking process. Any false or
            misleading information may result in the cancellation of the
            reservation without refund.
          </li>
          <li>
            Payment: Payment for guestroom reservations must be made through the
            authorized payment methods provided on the website. All payments are
            subject to the terms and conditions of the payment gateway. RUET
            Guestroom Booking website does not store any payment information.
          </li>
          <li>
            Cancellation and Refunds: Cancellations are subject to the
            cancellation policy displayed during the booking process. Refunds,
            if applicable, will be processed as per the stated policy. Any
            applicable fees or charges will be deducted from the refund amount.
          </li>
          <li>
            Guestroom Policies: Users must adhere to the guestroom policies set
            by RUET. Failure to comply with these policies may result in
            eviction from the guestroom without refund.
          </li>
          <li>
            Privacy and Data Protection: The RUET Guestroom Booking website
            respects user privacy and complies with applicable data protection
            laws. User data will only be used for the purpose of completing the
            reservation and will not be shared with third parties without
            consent, except as required by law.
          </li>
          <li>
            Intellectual Property: The content and design of the RUET Guestroom
            Booking website are protected by intellectual property laws. Users
            are prohibited from reproducing, distributing, or modifying any part
            of the website without explicit permission.
          </li>
          <li>
            Limitation of Liability: The RUET Guestroom Booking website and its
            operators shall not be liable for any direct, indirect, incidental,
            or consequential damages arising out of the use or inability to use
            the website or any services provided through it.
          </li>
          <li>
            Governing Law and Jurisdiction: These terms and conditions shall be
            governed by and construed in accordance with the laws of the
            jurisdiction where RUET is located. Any disputes arising from the
            use of the website shall be subject to the exclusive jurisdiction of
            the competent courts in that jurisdiction.
          </li>
          <li>
            Modifications: RUET Guestroom Booking website reserves the right to
            modify or update these terms and conditions at any time without
            prior notice. Users are encouraged to review the terms periodically
            for any changes.
          </li>
        </ol>
        <p>
          By using the RUET Guestroom Booking website, you acknowledge that you
          have read, understood, and agreed to the above terms and conditions.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default TaC;
