import React from 'react';
import { useGetAllSemisterQuery } from '../../../redux/features/academicSemister/academicSemisterApi';

const AcademicSemister = () => {

    const { data } = useGetAllSemisterQuery(undefined)
    console.log(data)
    return (
        <div>

        </div>
    );
};

export default AcademicSemister;