import { useFormContext } from 'react-hook-form';

const PhInput = () => {
    const { register } = useFormContext()

    return (
        <>
            {label ? label : null}
            <input type="text" name="" id="" />
        </>
    )
};

export default PhInput;