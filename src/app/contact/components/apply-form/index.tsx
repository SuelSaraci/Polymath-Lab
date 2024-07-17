'use client';
import { FormItem } from '@/types/form-item-types';
import React, { ChangeEvent } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { formItems } from './helper';
import ReusableButton from '@/components/button';
import ReCaptchaComponent from '@/components/re-captcha';

const ApplyForm: React.FC = () => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value);
    };

    // Render form components based on type
    const renderFormItem = (item: FormItem, index: number) => {
        const Component = item.component;
        switch (item.type) {
            case 'input':
            case 'phone':
            case 'textarea':
                return (
                    <Component
                        key={index}
                        label={item.label}
                        placeholder={item.placeholder || item.label}
                        value={item.value || ''}
                        onChange={
                            item.type === 'phone'
                                ? (value: string) => console.log(value)
                                : handleChange
                        }
                    />
                );
            case 'checkbox':
                return (
                    <Component
                        key={index}
                        label={item.label}
                        checked={item.checked || false}
                        onChange={handleChange}
                    />
                );
            case 'dropdown':
                return (
                    <Component
                        key={index}
                        label={item.label}
                        options={item.options || []}
                        value={item.value || ''}
                        onChange={(e: ChangeEvent<any>) => console.log(e)}
                    />
                );

            default:
                return null;
        }
    };

    // Render two items per row
    const renderFormRows = () => {
        const rows: JSX.Element[] = [];
        for (let i = 0; i < formItems.length; i += 2) {
            const item1 = formItems[i];
            const item2 = formItems[i + 1];
            rows.push(
                <Row key={i}>
                    <Col>{renderFormItem(item1, i)}</Col>
                    <Col>{item2 && renderFormItem(item2, i + 1)}</Col>
                </Row>,
            );
        }
        return rows;
    };

    return (
        <form>
            <Container>
                {renderFormRows()}
                <ReCaptchaComponent
                    sitekey={'test'}
                    onChange={function (value: string | null): void {
                        console.log(value);
                    }}
                />
                <ReusableButton text='SEND MESSAGE' />
            </Container>
        </form>
    );
};

export default ApplyForm;
