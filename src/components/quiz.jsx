import React, { useEffect, useRef, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { CgChevronDoubleUp, CgChevronDoubleDown } from 'react-icons/cg';

const Quiz = (props) => {
    const { isLoading, current, quest, ans } = props;
    const [isLong, setIsLong] = useState(false);
    const answerRef = useRef(null);
    const [isShortern, setIsShortern] = useState(false);
    const dataRef = useRef("");

    useEffect(() => {
        if (current != null) {
            setIsLong(false)
        }
        if (!isLoading) {
            checkLong();
        }
      
    }, [ans, isLoading]);

    const checkLong = () => {
        if (answerRef) {
            if (answerRef.current.offsetHeight > 200) {
                setIsLong(true);
            }
        }
    }

    const handleShort = () => {
        if (answerRef) {
            answerRef.current.style.maxHeight = 100 + "px";
            setIsShortern(true);
        }
    }

    const handleFull = () => {
        if (answerRef) {
            answerRef.current.style.maxHeight = "none";
            props.handleScroll();
            setIsShortern(false);
        }
    }

    return (
        <Card className='card-quiz'>
            <Row className='row-quiz'>
                <Col lg={{ span: 6, offset: 3 }}>{quest}</Col>
            </Row>
            <Row ref={answerRef} className='answer row-quiz'>
                <Col lg={{ span: 6, offset: 3 }} className={current}>{ans}</Col>
            </Row>
            {/* <Row className='answer shortern'>
                <Col lg={{ span: 6, offset: 3 }}>
                    {!isShortern ?
                    <Row onClick={handleShort} style={(isLong && !isShortern)? {display: 'block', cursor: 'pointer'} : {display: 'none'}} className='answer'>
                        <CgChevronDoubleUp className='short-answer'/>
                    </Row>
                    :
                    <Row onClick={handleFull} style={(isLong && isShortern)? {display: 'block', cursor: 'pointer'} : {display: 'none'}} className='answer answer-shortern'>
                        <CgChevronDoubleDown className='full-answer'/>
                    </Row>
                    }
                </Col>
                
            </Row> */}
            
        </Card>
    );
}

export default Quiz;
