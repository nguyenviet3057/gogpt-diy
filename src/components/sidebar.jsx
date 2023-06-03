import React from 'react';
import { Container } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <Container fluid className='w-100 h-100 position-relative'>
            <div className='w-100 h-100 side-bar'></div>
            <h1 className='w-100 h-100 position-absolute d-flex align-items-center justify-content-center' style={{ top:'0px', left:'0px', color: 'red', filter: 'blur(2px)' }}>Sidebar</h1>
        </Container>
    );
}

export default Sidebar;
