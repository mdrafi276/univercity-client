import { Form, Select, Space } from 'antd';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
type IPHSelectProps = {
    label: string;
    name: string;
    options: { value: string, label: string, disabled?: boolean }[];
}
const PhSelect = ({ label, name, options }: IPHSelectProps) => {
    const handleChange = (value: string) => {

    }
    return (
        <Controller render={({ field, fieldState: { error } }) => (<Form.Item label={label}>
            <Select
                style={{ width: 120 }}
                {...field}
                options={[
                    { value: 'jack', label: 'jack' }
                ]}
            >

            </Select>

        </Form.Item>)}>
            {error && <small style={{ color: 'red' }}>{"Something went wrong"}</small>}

        </Controller>
    );
};

export default PhSelect;