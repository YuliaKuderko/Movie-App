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
                        <Accordion id="accordion" sx={{ backgroundColor: "rgb(24, 24, 24)", color: "white" }} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography id='accordion-title' sx={{ fontFamily: "Montserrat, sans-serif" }}>What is Movie App?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography id='accordion-details' sx={{ fontFamily: "Montserrat, sans-serif" }}>
                                    A one-stop destination to view movies and TV shows. Available on almost any device such as computers, mobile, etc. Movie app offers looking at trending movies list, top rated tv shows with the ability to easily search any title ever made, no matter which year it was first introduced. In addition, you can watch trailers and other movie details, for instance duration, genre, real time ratings and more.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id="accordion" sx={{ backgroundColor: "rgb(24, 24, 24)", color: "white" }} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography id='accordion-title' sx={{ fontFamily: "Montserrat, sans-serif" }}>In which language did you write the app's code?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography id='accordion-details' sx={{ fontFamily: "Montserrat, sans-serif" }}>
                                    JavaScript.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id="accordion" sx={{ backgroundColor: "rgb(24, 24, 24)", color: "white" }} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography id='accordion-title' sx={{ fontFamily: "Montserrat, sans-serif" }}>Which technologies did you use while creating this app?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography id='accordion-details' sx={{ fontFamily: "Montserrat, sans-serif" }}>
                                    React.js, jsx, scss, material-ui, restful API.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id="accordion" sx={{ backgroundColor: "rgb(24, 24, 24)", color: "white" }} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography id='accordion-title' sx={{ fontFamily: "Montserrat, sans-serif" }}>Which API did you incorporate?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography id='accordion-details' sx={{ fontFamily: "Montserrat, sans-serif" }}>
                                    The movie data base.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id="accordion" sx={{ backgroundColor: "rgb(24, 24, 24)", color: "white" }} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography id='accordion-title' sx={{ fontFamily: "Montserrat, sans-serif" }}>Is the site responsive and mobile-friendly?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography id='accordion-details' sx={{ fontFamily: "Montserrat, sans-serif" }}>
                                    Yes. It is compatible with desktops, tablets and mobile.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id="accordion" sx={{ backgroundColor: "rgb(24, 24, 24)", color: "white" }} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography id='accordion-title' sx={{ fontFamily: "Montserrat, sans-serif" }}>How did you come up with the idea of a movie's app?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography id='accordion-details' sx={{ fontFamily: "Montserrat, sans-serif" }}>
                                    I'm a frequent visitor at the movie theaters, so I thought it would be nice if I had a website, where I could see reviews of movies and tv series, watch trailers and get more information about the recommended movies in one centralized place.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion id="accordion" sx={{ backgroundColor: "rgb(24, 24, 24)", color: "white" }} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography id='accordion-title' sx={{ fontFamily: "Montserrat, sans-serif" }}>How can I get in touch with the developer of the website?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography id='accordion-details' sx={{ fontFamily: "Montserrat, sans-serif" }}>
                                    You can send an email to Yulia Kuderko via the "contact" link below located at the footer section of the page.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}