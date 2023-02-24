import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PageHeader from '../../page-header/PageHeader';
import './faq.scss'

export default function SimpleAccordion() {
    return (
        <>
            <PageHeader>
                FAQ
            </PageHeader>
            <div className='container'>
                <div className='mb-3'>
                    <div className='faq'>
                        <Accordion className='accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className='accordion-title'>Which technologies did you use while creating this app?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='accordion-details'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className='accordion-title'>How did you come up with the idea of a movies' app?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='accordion-details'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className='accordion-title'>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='accordion-details'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='accordion'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className='accordion-title'>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='accordion-details'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}