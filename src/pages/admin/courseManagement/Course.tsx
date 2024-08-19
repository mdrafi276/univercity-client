import React from 'react';

const Course = () => {
    return (
        <div>
            <Table
                loading={isFetching}
                columns={columns}
                dataSourse={tableData}

            />


        </div>
    );
};

const AddFacultyModal = () => {
    return
}

export default Course;