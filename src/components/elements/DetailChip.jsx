import React from 'react';
import { Box, Stack, Typography, Paper, Rating, Checkbox, FormControlLabel, Button } from '@mui/material';

const DetailChip = ({ icon, label }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.65)',
            borderRadius: '8px',
            padding: '4px 10px',
            fontSize: '0.875rem',
        }}
    >
        {icon && React.cloneElement(icon, { sx: { fontSize: 18, mr: 1, color: '#fff' } })}
        {label}
    </Box>
);

export default DetailChip;