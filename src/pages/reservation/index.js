import { useState } from 'react'
import { useForm } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import {
    Wrapper,
    BlockStarts,
    Address,
    BlockPerson,
    ItemPerson,
} from './styled'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import ImageStart from '../../asset/images/stars.png'
import TemplatePage from '../../components/TemplatePage';

const numberOfPerson = [1, 2, 3, 4, 5, 6, "+7"];

export default function PageReservation() {
    const [person, setPerson] = useState(2);
    const [birthday, setBirthDay] = useState();
    const [isBirthdayError, setIsBirthdayError] = useState(false);
    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors }
    } = useForm({
        // mode: "onTouched",
        // reValidateMode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues: {
            fullname: "",
            birthday: "",
            email: "",
            phone: "",
            promotion: true,
        },
    });

    const handleClickNumberOfPerson = (value) => {
        setPerson(value)
    };

    const onSubmit = (values) => {
        console.log({
            ...values,
            birthday
        })
    };

    const onError = (error) => {
        console.log(error)
    };

    const handleClickToSubmit = () => {
        setIsBirthdayError(!birthday)
    };

    return (
        <TemplatePage
            imgBanner="https://cdn-global-website.superhi-cdn.com/website/image/0688568204954d4592b3703cc4e50daf-1920-490.jpg"
        >
            <Wrapper className='p-lg-4 p-3'>
                <Container>
                    <Row>
                        <Col className='col-lg-4 col-12 border-right mt-lg-0 mt-4'>
                            <h2 className='text-dark'>Haidilao Hot Pot - Irvine</h2>
                            <BlockStarts>
                                <img src={ImageStart} alt="starts.png" />
                                <span>1692 reviews</span>
                            </BlockStarts>
                            <Address className='my-4'>2710 Alton Pkwy Ste 215 Irvine, CA 92606</Address>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.815673543521!2d-117.83675678856491!3d33.687836736772525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde9cfd1461df%3A0xd85eda25ade458e9!2s2710%20Alton%20Pkwy%20%23215%2C%20Irvine%2C%20CA%2092606%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1691859876149!5m2!1svi!2s"
                                width="100%"
                                height="200"
                                style={{border: 0}}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            />
                        </Col>
                        <Col className='col-lg-8 col-12 mt-lg-0 mt-4'>
                            <h4>Select your party size</h4>
                            <BlockPerson>
                                {numberOfPerson.map(item =>
                                    <ItemPerson
                                        key={item}
                                        onClick={() => handleClickNumberOfPerson(item)}
                                        className={person === item ? 'active' : ''}
                                    >
                                        {item}
                                    </ItemPerson>
                                )}
                            </BlockPerson>

                            <h4 className='mt-5 mb-3'>Your Information</h4>
                            <Form onSubmit={handleSubmit(onSubmit, onError)}>
                                <Row className='g-2'>
                                    <Col className='col-lg-6 col-12'>
                                        <Form.Group className='mb-2' controlId="formBasicText">
                                            <Form.Control
                                                type="text"
                                                placeholder="Full name"
                                                {...register("fullname", { required: "Please enter your full name" })}
                                            />
                                            {errors.fullname && (
                                                <Form.Text className="text-danger">
                                                    {errors.fullname.message}
                                                </Form.Text>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col className='col-lg-6 col-12 mb-1'>
                                        <DatePicker
                                            showIcon
                                            selected={birthday}
                                            onChange={(date) => {
                                                setBirthDay(date);
                                                setIsBirthdayError(false)
                                            }}
                                            placeholderText="Birthday"
                                            maxDate={new Date()}
                                        />
                                        {isBirthdayError && (
                                            <Form.Text className="text-danger">
                                                Please choose your birthday
                                            </Form.Text>
                                        )}
                                    </Col>
                                    <Col className='col-lg-6 col-12'>
                                        <Form.Group className='mb-2' controlId="formBasicEmail">
                                            <Form.Control
                                                type="text"
                                                placeholder="Email"
                                                {...register("email", {
                                                    required: "Please enter your email", 
                                                    pattern: {
                                                        value: /\S+@\S+\.\S+/,
                                                        message: "Entered value does not match email format"
                                                    }
                                                })}
                                            />
                                            {errors.email && (
                                                <Form.Text className="text-danger">
                                                {errors.email.message}
                                                </Form.Text>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col className='col-lg-6 col-12'>
                                        <Form.Group className='mb-2' controlId="formBasicPhoneNumber">
                                            <Form.Control
                                                type=""
                                                placeholder="Phone number"
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                    event.preventDefault();
                                                    }
                                                }}
                                                {...register("phone", { required: "Please enter your phone number" })}
                                            />
                                            {errors.phone && (
                                                <Form.Text className="text-danger">
                                                {errors.phone.message}
                                                </Form.Text>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col className='col-12'>
                                        <Form.Group className='mb-2' controlId="formBasicCheckbox">
                                            <Form.Check
                                                type="checkbox"
                                                label="We can send a text for your birthday promotion"
                                                {...register("promotion", {
                                                })}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col className='col-12 text-end'>
                                        <Button variant="danger" type="submit" className='px-4 mt-4' onClick={handleClickToSubmit}>
                                            <strong>Confirm</strong>
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </TemplatePage>
    )
}