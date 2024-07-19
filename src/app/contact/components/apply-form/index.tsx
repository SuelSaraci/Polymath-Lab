'use client';

import React, { ChangeEvent } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReusableButton from '@/components/button';
import { formItems } from './helper';
import { FormItem } from '@/types/form-item-types';

const ApplyForm: React.FC = () => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value);
    };

    const renderFormItem = (item: FormItem, index: number) => {
        const Component = item.component;
        const commonProps = {
            key: index,
            label: item.label,
            placeholder: item.placeholder || item.label,
            value: item.value || '',
            onChange: handleChange,
        };

        switch (item.type) {
            case 'input':
            case 'phone':
            case 'textarea':
                return (
                    <Col xs={12} md={6} className='mb-3' key={index}>
                        <Component {...commonProps} />
                    </Col>
                );
            case 'checkbox':
                return (
                    <Col xs={12} className='mb-3' key={index}>
                        <Component
                            {...commonProps}
                            checked={item.checked || false}
                            onChange={handleChange}
                        />
                    </Col>
                );
            case 'dropdown':
                return (
                    <Col xs={12} md={6} className='mb-3' key={index}>
                        <Component
                            {...commonProps}
                            options={item.options || []}
                            onChange={(e: ChangeEvent<any>) => console.log(e)}
                        />
                    </Col>
                );
            case 'recaptcha':
                return (
                    <Col xs={12} md={6} className='mb-3' key={index}>
                        <Component
                            sitekey={item.sitekey || 'test'}
                            onChange={(value: string | null) => {
                                console.log(value);
                            }}
                        />
                    </Col>
                );
            default:
                return null;
        }
    };

    return (
        <Container>
            <form className='mb-5 mt-5'>
                <Row>
                    {/* Render all form fields */}
                    {formItems.map((item, index) => renderFormItem(item, index))}
                </Row>
                <Row>
                    <Col xs={12} className='mt-3'>
                        <ReusableButton text='SEND MESSAGE >' variant='secondary' />
                    </Col>
                </Row>
            </form>
        </Container>
    );
};

export default ApplyForm;
