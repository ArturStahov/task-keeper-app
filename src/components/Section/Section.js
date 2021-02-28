import React from 'react';
import { Section, Title } from './StyledComponent';

export default function SectionBlock({ title, children }) {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
}
