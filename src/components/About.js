// components/AboutUs.js
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const AboutUs = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                color: '#333',
                padding: '40px 0',
            }}
        >
            <Container>
                <Grid container spacing={3} alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                            About Us
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                            Welcome to our book store! At Book Haven, we are passionate about providing a diverse
                            collection of books to cater to every reader's taste. Whether you're a literature enthusiast,
                            a science fiction buff, or a history lover, we've got something for everyone.
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                            Our mission is to inspire and foster a love for reading in our community. We believe in the
                            transformative power of books and aim to make the literary world accessible to all.
                        </Typography>
                        <Typography variant="body1">
                            Thank you for being a part of our journey. Happy reading!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            src="https://images.unsplash.com/photo-1686205705363-a266f03b2d04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
                            alt="Bookstore Interior"
                            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutUs;
