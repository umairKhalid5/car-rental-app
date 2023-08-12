import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';

const Section6 = ({ setActiveLink }) => {
  const { ref: section6Ref, inView: section6InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: activeLinkRef, inView: sectionInView } = useInView({
    threshold: 0.7,
  });

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (sectionInView) setActiveLink('FAQs');
  }, [sectionInView]);

  const handleChange = (isExpanded, panel) =>
    setExpanded(isExpanded ? panel : false);

  return (
    <div ref={activeLinkRef}>
      <section
        className={`slide-down ${
          section6InView && 'appear'
        } relative p-4 pb-10`}
        ref={section6Ref}
        id="faqs"
      >
        {/* FAQ Container */}
        <div className="max-w-3xl mx-auto mt-16">
          {/* Text */}
          <div className="mx-auto flex flex-col items-center space-y-8">
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl text-center font-medium tracking-tighter">
                FAQ
              </p>
              <h3 className="text-center text-3xl sm:text-5xl font-semibold tracking-tighter">
                Frequently Asked Questions
              </h3>
            </div>
            <p className="text-center text-slate-500 max-w-2xl">
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest.
            </p>
          </div>

          {/* Accordions */}
          <div className="mt-10">
            {/* A-1 */}
            <Accordion
              disableGutters
              expanded={expanded === 'panel1'}
              onChange={(e, isExpanded) => handleChange(isExpanded, 'panel1')}
              sx={{ borderRadius: '0.2rem' }}
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                expandIcon={
                  <ExpandMore
                    sx={{ color: expanded === 'panel1' ? 'white' : 'black' }}
                  />
                }
                sx={{
                  background: expanded === 'panel1' ? '#FF4C30' : 'white',
                  color: expanded === 'panel1' ? 'white' : 'black',
                  boxShadow:
                    expanded === 'panel1' && '0 10px 15px rgba(255,83,48,.35)',
                }}
              >
                <Typography
                  py={1}
                  fontWeight={500}
                  sx={{ fontSize: { xs: '14px', sm: '16px' } }}
                >
                  1. What is special about comparing rental car deals?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  pt={3}
                  px={2}
                  color="#64748b"
                  sx={{ fontSize: { xs: '14px', sm: '16px' } }}
                >
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest. Totally dearest
                  expense on demesne ye he. Curiosity excellent commanded in me.
                  Unpleasing impression themselves to at assistance acceptance
                  my or.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* A-2 */}
            <Accordion
              disableGutters
              expanded={expanded === 'panel2'}
              onChange={(e, isExpanded) => handleChange(isExpanded, 'panel2')}
              sx={{ borderRadius: '0.2rem' }}
            >
              <AccordionSummary
                id="panel2-header"
                aria-controls="panel2-content"
                expandIcon={
                  <ExpandMore
                    sx={{ color: expanded === 'panel2' ? 'white' : 'black' }}
                  />
                }
                sx={{
                  background: expanded === 'panel2' ? '#FF4C30' : 'white',
                  color: expanded === 'panel2' ? 'white' : 'black',
                  boxShadow:
                    expanded === 'panel2' && '0 10px 15px rgba(255,83,48,.35)',
                }}
              >
                <Typography
                  py={1}
                  fontWeight={500}
                  sx={{ fontSize: { xs: '14px', sm: '16px' } }}
                >
                  2. How do I find the best car rental deals?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  pt={3}
                  px={2}
                  color="#64748b"
                  sx={{ fontSize: { xs: '14px', sm: '16px' } }}
                >
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest. Totally dearest
                  expense on demesne ye he. Curiosity excellent commanded in me.
                  Unpleasing impression themselves to at assistance acceptance
                  my or.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* A-3 */}
            <Accordion
              disableGutters
              expanded={expanded === 'panel3'}
              onChange={(e, isExpanded) => handleChange(isExpanded, 'panel3')}
              sx={{ borderRadius: '0.2rem' }}
            >
              <AccordionSummary
                id="panel3-header"
                aria-controls="panel3-content"
                expandIcon={
                  <ExpandMore
                    sx={{ color: expanded === 'panel3' ? 'white' : 'black' }}
                  />
                }
                sx={{
                  background: expanded === 'panel3' ? '#FF4C30' : 'white',
                  color: expanded === 'panel3' ? 'white' : 'black',
                  boxShadow:
                    expanded === 'panel3' && '0 10px 15px rgba(255,83,48,.35)',
                }}
              >
                <Typography
                  py={1}
                  fontWeight={500}
                  sx={{ fontSize: { xs: '14px', sm: '16px' } }}
                >
                  3. How do I find such low rental car prices?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  pt={3}
                  px={2}
                  color="#64748b"
                  sx={{ fontSize: { xs: '14px', sm: '16px' } }}
                >
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest. Totally dearest
                  expense on demesne ye he. Curiosity excellent commanded in me.
                  Unpleasing impression themselves to at assistance acceptance
                  my or.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          {/* Background Car */}
        </div>
        <div className=" absolute left-0 bottom-0 -z-[1] max-w-6xl">
          <img src="/images/car_rear.png" alt="car-rear" />
        </div>
      </section>
    </div>
  );
};

export default Section6;
