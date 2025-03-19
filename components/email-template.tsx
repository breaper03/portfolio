import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  body: string;
  email: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName, body, email
}) => (
  <div>
    <h4>Hi im, {firstName} | {email}</h4>
    <p>{body}</p>
  </div>
);