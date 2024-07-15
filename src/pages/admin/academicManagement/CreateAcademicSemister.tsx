import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import { Button, Col, Flex } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PhSelect from '../../../components/form/PhSelect';
import { useAddAcademicSemisterMutation } from '../AcademicSemisterManagementApi';

const nameOptions = [
    {
        value: "01",
        label: "Autum"
    },
    {
        value: "02",
        label: "Summer"
    },
    {
        value: "03",
        label: "Fall"
    }

];
const currentYear = new Date().getFullYear()
const yearOptions = [0, 1, 2, 3, 4, 5,].map(number => ({
    value: String(currentYear + number),
    label: String(currentYear + number),
}));

const CreateAcademicSemister = () => {

    const [AddAcademicSemister] = useAddAcademicSemisterMutation();
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const name = nameOptions[Number(data.name) - 1]?.label
        const semssterData = {
            name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth,
        }
        try {
            console.log(semssterData)
            const res = await AddAcademicSemister(semesterData);
            if (res.error) {
                toast.error('Something went wrong!')
            } else {
                toast.success("Something created")
            }
        } catch (err) {
            toast.error("Something went wrong!")

        }



    }

    const academicSemisterSchema = z.object({
        name: z.string({ required_error: 'Please select a name' }),
        year: z.string({ required_error: 'Please select a Year' }),
        startMonth: z.string({ required_error: 'Please select a Start Month' }),
        endMonth: z.string({ required_error: 'Please select a End Month' }),
    })

    return (
        <Flex justify='center' align='center'>
            <Col span={6}>
                <PHForm onSubmit={onsubmit} resolver={zodResolver(academicSemisterSchema)}>
                    <PHInput type='text' name="name" label='name' />
                    <PHInput type='text' name="name" label='year' />
                    <PhSelect label="name" options={nameOptions} />
                    <PhSelect label="Year" options={yearOptions} />
                    <PhSelect label="Start Month" options={startMonthOptions} />
                    <PhSelect label="End Month" options={nameOptions} />
                    <Button htmlType='submit'>Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemister;