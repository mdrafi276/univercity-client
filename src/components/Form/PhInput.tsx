import { Input } from 'antd';
import { useFormContext } from 'react-hook-form';

const PhInput = () => {
    const { register } = useFormContext()

    return (
        <>
            {label ? label : null}
            <Controller name={name} render={(field) => {
                <Input type={type} id={name} {...register(name)} />
            }} />
        </>
    )
};

export default PhInput;