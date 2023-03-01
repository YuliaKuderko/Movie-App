import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PageHeader from '../../page-header/PageHeader';
import './faq.scss'

export default function FAQ() {
    return (
        <>
            <PageHeader>
                FAQ
            </PageHeader>
            <div className='container'>
                <div className='mb-3'>
                    <div className='faq'>
                    <Accordion id="accordion" sx={{backgroundColor: "rgb(24, 24, 24)",color: "white"}} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography id='accordion-title' sx={{fontFamily: "Montserrat, sans-serif"}}>In which language did you write the app's code?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography id='accordion-details' sx={{fontFamily: "Montserrat, sans-serif"}}>
                                    JavaScript.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id="accordion" sx={{backgroundColor: "rgb(24, 24, 24)",color: "white"}} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography id='accordion-title' sx={{fontFamily: "Montserrat, sans-serif"}}>Which technologies did you use while creating this app?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography id='accordion-details' sx={{fontFamily: "Montserrat, sans-serif"}}>
                                    React.js, jsx, scss, material-ui, restful API.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id="accordion" sx={{backgroundColor: "rgb(24, 24, 24)",color: "white"}} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography id='accordion-title' sx={{fontFamily: "Montserrat, sans-serif"}}>How did you come up with the idea of a movie's app?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography id='accordion-details' sx={{fontFamily: "Montserrat, sans-serif"}}>
                                    I'm a frequent visitor at the movie theaters, so I thought it would be nice if I had a website, where I could see reviews of movies and tv series, watch trailers and get more information about the recommended movies in one centralized place.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id="accordion" sx={{backgroundColor: "rgb(24, 24, 24)",color: "white"}} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography id='accordion-title' sx={{fontFamily: "Montserrat, sans-serif"}}>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography id='accordion-details' sx={{fontFamily: "Montserrat, sans-serif"}}>
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