import { Alert } from "react-bootstrap";

const MessageBox = ({
  variant = "info",
  children,
}: {
  variant?: string;
  children: React.ReactNode;
}) => {
  return <Alert variant={variant || "info"}>{children}</Alert>;
};

export default MessageBox;
