import React, { FC } from 'react';
import './CustomButton.scss';
// Bootstrap
import Button from 'react-bootstrap/Button';

interface CustomButtonProps {}

const CustomButton: FC<CustomButtonProps> = () => (
    <Button variant="secondary">Texto</Button>
);

export default CustomButton;
