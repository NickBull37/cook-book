import React from 'react';
import { Box } from '@mui/material';

const DetailChip = ({ icon, label }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.65)',
            borderRadius: '8px',
            padding: '6px 10px',
            fontSize: '0.938rem',
        }}
    >
        {icon && React.cloneElement(icon, { sx: { fontSize: 16, mr: 0.75, color: '#fff' } })}
        {label}
    </Box>
);

export default DetailChip;