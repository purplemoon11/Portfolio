import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 7, text: 'Open Source Projects'},
  { number: 5, text: 'Courses', },
  { number: 1, text: 'Work Experience', },
  { number: 7, text: 'Github Projects', }
];

const Acomplishments = () => (
  <Section id="">
    <SectionTitle>
      Presonal Acomplishments
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
