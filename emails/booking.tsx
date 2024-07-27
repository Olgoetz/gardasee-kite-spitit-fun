import { BookingEmailTemplate } from "@/components/booking/email-template";

export default function Email() {
  return (
    <BookingEmailTemplate
      name="test"
      email="test@test.com"
      packageName="Early Bird"
      numberOfPersons={2}
    />
  );
}
