import { Button } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";


const CreateStudent = () => {
    const { data: sData, isLoading: sIsLoading } = useGetAllSemestersQuery(undefined);
    const semisterOptions = sData?.data?.map((item) => {
        value: item._id
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));
        //! this is for developement
        //? just for checking 
        console.log(Object.fromEntries(formData));
    }
    return (
        <PHForm onSubmit={onsubmit}>
            <PHInput type="text" name="name" label='name' />
            <Button htmlType="submit">Submit</Button>
        </PHForm>
    );
};

export default CreateStudent;