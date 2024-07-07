import { Input } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

type TInputProps = {
    type: string;
    name: string;
    label?: string
}

const PhInput = ({ type, name, label }: TInputProps) => {
    const { register } = useFormContext()

    return (
        <>
            {label ? label : null}
            <Controller name={name} render={(field) => {
                <Input {...field} type={type} id={name} {...register(name)} />
            }} />
        </>
    )
};

export default PhInput;