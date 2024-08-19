import { Button, Table, TableColumnsType, TableProps } from 'antd';
import { TAcademicSemester } from '../../../types/academicManagement.type';
import { TQueryParam } from '../../../types';
import { useGetAllSemestersQuery } from '../academicManagement/CourseManagement';

export type TTableData = Pick<
    TAcademicSemester,
    'name' | 'status' | 'startDate' | 'endDate'
>;

const RegisteredSemester = () => {

    const { data: semesterData, isLoading, isFeatching } = useGetAllSemestersQuery(undefined)


    const tableData = semesterData?.data?.map(
        ({ _id, academicSemester, startDate, endDate, status }) => ({
            key: _id,
            name: `${academicSemester.name} ${academicSemester.year}`,
            startDate,
            endDate,
            status,
        })
    );

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Status',
                    value: 'status',
                    dataIndex: 'status'
                },
                {
                    text: 'Star Date',
                    value: 'starDate',
                    dataIndex: 'startDate'
                },
                {
                    text: 'End Date',
                    value: 'endDate',
                    dataIndex: 'endDate'
                },
                {
                    title: 'Action',
                    key: 'x',
                    render: (item) => (
                        <div>
                            <Button onClick={() => trigger = { ['click']}}>Update</Button>
                        </div>
                    )
                }
            ],
        },

    ];

    const onChange: TableProps<TTableData>['onChange'] = (
        _pagination,
        filters,
        _sorter,
        extra
    ) => {
        if (extra.action === 'filter') {
            const queryParams: TQueryParam[] = [];

            filters.name?.forEach((item) =>
                queryParams.push({ name: 'name', value: item })
            );

            filters.year?.forEach((item) =>
                queryParams.push({ name: 'year', value: item })
            );

            setParams(queryParams);
        }
    };

    return (
        <Table
            loading={isFetching}
            columns={columns}
            dataSource={tableData}
            onChange={onChange}
        />
    );
};

export default RegisteredSemester;
