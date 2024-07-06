import { useForm } from 'react-hook-form';

const PhForm = ({ onSubmit, children }) => {
    const methods = useForm()
    return (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            {children}
        </form>
    );
};






export default PhForm;