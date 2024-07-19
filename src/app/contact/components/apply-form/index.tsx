'use client';
import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useFormik, FormikProps } from 'formik';
import ReusableButton from '@/components/button';
import { formItems, initialValues } from './helper';
import { FormItem } from '@/types/form-item-types';
import { FormValues } from '@/types/form-values-types';

const ApplyForm: FC = () => {
    const formik: FormikProps<FormValues> = useFormik<FormValues>({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const renderFormItem = (item: FormItem, index: number) => {
        const Component = item.component;

        switch (item.type) {
            case 'input':
            case 'phone':
            case 'textarea':
                return (
                    <Col xs={12} md={6} className='mb-3' key={index}>
                        <Component
                            name={item.name}
                            label={item.label}
                            placeholder={item.placeholder || item.label}
                            value={formik.values[item.name] || ''}
                            onChange={(event: { target: { value: any } }) =>
                                formik.setFieldValue(item.name, event.target.value)
                            }
                        />
                    </Col>
                );
            case 'checkbox':
                return (
                    <Col xs={12} className='mb-3' key={index}>
                        <Component
                            name={item.name}
                            label={item.label}
                            checked={formik.values[item.name] || false}
                            onChange={(event: { target: { value: any } }) =>
                                formik.setFieldValue(item.name, event.target.value)
                            }
                        />
                    </Col>
                );
            case 'dropdown':
                return (
                    <Col xs={12} md={6} className='mb-3' key={index}>
                        <Component
                            name={item.name}
                            label={item.label}
                            options={item.options || []}
                            value={formik.values[item.name] || ''}
                            onChange={(event: { target: { value: any } }) =>
                                formik.setFieldValue(item.name, event.target.value)
                            }
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
            <form className='mb-5 mt-5' onSubmit={formik.handleSubmit}>
                <Row>
                    {/* Render all form fields */}
                    {formItems.map((item, index) => renderFormItem(item, index))}
                </Row>
                <Row>
                    <Col xs={12} className='mt-3'>
                        <ReusableButton type='submit' text='SEND MESSAGE >' variant='secondary' />
                    </Col>
                </Row>
            </form>
        </Container>
    );
};

export default ApplyForm;
