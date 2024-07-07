import { Row } from 'antd';
import { ReactNode } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
type PhFormProps = {
    onSubmit: SubmitHandler<FieldValues>,
    children: ReactNode,

} & TFormConfig;

type TFormConfig = {
    defaultValues: Record<string, any>;
}

const PhForm = ({ onSubmit, children, defaultValues }: PhFormProps) => {
    const formConfig: TFormConfig = {};
    if (defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }
    const methods = useForm(formConfig);
    return (
        <Row justify={'center'} align={'middle'} >
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </Row>









    );
};









export default PhForm;