import React, { useState } from 'react';
import { Input, Select } from 'antd';

import {
  ColumnDef,
  ColumnOrderState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  Row,
  useReactTable,
  SortingState,
} from '@tanstack/react-table';
import './Table.scss';
import data from '../../../mocks/dataTopLeft.json';
import { useVirtualizer } from '@tanstack/react-virtual';
// import { makeData, Person } from "../../utils/make-data";
import DraggableColumnHeader from './draggable-column-header';
// import { da } from "@faker-js/faker";
// const fetchSize = 100;
// const cam = false;

const defaultColumns: Array<ColumnDef<any>> | any = [
  {
    accessorKey: 'func',
    id: 'func',
    size: 60,
  },
  {
    accessorKey: '##',
    header: '##',
    id: '##',
    cell: () => '##',
    headerContent: (
      <Select
        defaultValue='all'
        style={{ width: '100%', boxSizing: 'border-box', borderRadius: 0 }}
        allowClear={true}
        options={[{ value: 'all', label: 'Tất Cả' }]}
      />
    ),
    size: 100,
  },
  {
    accessorKey: 'timeEx',
    header: 'Time Example',
    id: 'timeEx',
    cell: (info: any) => info.getValue(),
    size: 300,
  },
  {
    accessorKey: 'createTime',
    header: 'Record Time',
    id: 'createTime',
    cell: (info: any) => info.getValue(),
    size: 300,
  },
  {
    accessorKey: 'aproTime',
    header: 'Thời gian hẹn trả kết quả',
    id: 'aproTime',
    cell: (info: any) => info.getValue(),
    size: 300,
  },
  {
    accessorKey: 'xxx1',
    header: 'Thời gian duyệt',
    id: 'xxx1',
    cell: (info: any) => info.getValue(),
    size: 300,
  },
  {
    accessorKey: 'Modality',
    header: 'Modality',
    id: 'Modality',
    cell: (info: any) => info.getValue(),
    headerContent: (
      <Select
        defaultValue='all'
        style={{ width: '100%', boxSizing: 'border-box', borderRadius: 0 }}
        allowClear={true}
        options={[{ value: 'all', label: 'Tất Cả' }]}
      />
    ),
  },
  {
    accessorKey: 'pCode',
    header: 'Patient code',
    id: 'pCode',
    cell: (info: any) => info.getValue(),
    headerContent: <Input placeholder='Patient code' allowClear={true} style={{ borderRadius: '0' }} />,
  },
  {
    accessorKey: 'lsvv',
    header: 'visit code',
    id: 'lsvv',
    cell: (info: any) => info.getValue(),
    headerContent: <Input placeholder='visit code' allowClear={true} style={{ borderRadius: '0' }} />,
  },
  {
    accessorKey: 'pName',
    header: 'Patient Name',
    id: 'pName',
    cell: (info: any) => info.getValue(),
    size: 250,
    headerContent: <Input placeholder='Patient Name' allowClear={true} style={{ borderRadius: '0' }} />,
  },
  {
    id: 'pAge',
    accessorKey: 'pAge',
    header: 'Age',
    cell: (info: any) => info.getValue(),
    headerContent: <Input allowClear={true} style={{ borderRadius: '0' }} placeholder='age' />,
    size: 100,
  },
  {
    id: 'pBirthday',
    accessorKey: 'pBirthday',
    header: 'Ngày Sinh',
    cell: (info: any) => info.getValue(),
    size: 100,
  },
  {
    accessorKey: 'pGender',
    header: 'Gender',
    id: 'pGender',
    cell: (info: any) => {
      return info.getValue() === 'M' ? 'Male' : 'Female';
    },
    headerContent: (
      <Select
        defaultValue='all'
        style={{ width: '100%', boxSizing: 'border-box', borderRadius: 0 }}
        allowClear={true}
        options={[{ value: 'all', label: 'Tất Cả' }]}
      />
    ),
    size: 100,
  },
  {
    accessorKey: 'bodypart',
    header: 'Body Part',
    id: 'bodypart',
    cell: (info: any) => info.getValue(),
    headerContent: <Input placeholder='Body Part' allowClear={true} style={{ borderRadius: '0' }} />,
  },
  {
    accessorKey: 'seriCount',
    header: 'Serial Count/Image Count',
    id: 'seriCount',
    cell: (info: any) => info.getValue(),
    accessorKeyFn: 'imageCount',
  },
  {
    accessorKey: 'clinicalDiagnosis',
    header: 'Diagnose (CID)',
    id: 'clinicalDiagnosis',
    cell: (info: any) => info.getValue(),
    headerContent: <Input placeholder='Diagnose (CID)' allowClear={true} style={{ borderRadius: '0' }} />,
  },
  {
    accessorKey: 'result',
    header: 'Kết Luận',
    id: 'result',
    cell: (info: any) => <div dangerouslySetInnerHTML={{ __html: info.getValue() }} style={{ display: 'flex' }}></div>,
    headerContent: <Input placeholder='Kết Luận' allowClear={true} style={{ borderRadius: '0' }} />,
  },
  {
    accessorKey: 'assDepartment',
    header: 'Department',
    id: 'assDepartment',
    cell: (info: any) => info.getValue(),
    headerContent: <Input placeholder='Department' allowClear={true} style={{ borderRadius: '0' }} />,
  },

  {
    accessorKey: 'doctorAss',
    header: 'Doctor',
    id: 'doctorAss',
    cell: (info: any) => info.getValue(),
    headerContent: <Input placeholder='Doctor' allowClear={true} style={{ borderRadius: '0' }} />,
  },
  {
    accessorKey: 'editByDrName',
    header: 'Doctor edit/approve',
    id: 'editByDrName',
    cell: (info: any) => info.getValue(),
    headerContent: (
      <Select
        defaultValue='all'
        style={{ width: '100%', boxSizing: 'border-box', borderRadius: 0 }}
        allowClear={true}
        options={[{ value: 'all', label: 'Tất Cả' }]}
      />
    ),
  },
  {
    accessorKey: 'serviceName',
    header: 'indication',
    id: 'serviceName',
    cell: (info: any) => info.getValue(),
    headerContent: <Input placeholder='indication' allowClear={true} style={{ borderRadius: '0' }} />,
  },
  {
    accessorKey: 'executor',
    header: 'Executor',
    id: 'executor',
    cell: (info: any) => info.getValue(),
    headerContent: <Input placeholder='Executor' allowClear={true} style={{ borderRadius: '0' }} />,
  },
];
const Table = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowIdDam, setRowIdDam] = useState<string>('');
  // const [fetching, setFetching] = useState(false);
  const [columns] = useState(() => [...defaultColumns]);
  const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>(columns.map((column) => column.id as string));

  // useEffect(() => {
  //   const datas: any = makeData(fetchSize);
  //   setData(datas);
  // }, []);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnOrder,
      sorting,
    },
    columnResizeMode: 'onChange',
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    debugTable: true,
  });

  // const getData = async () => {
  //   setFetching(true);
  //   await setData(data.concat(makeData(fetchSize)));
  //   setTimeout(() => {
  //     setFetching(false);
  //   }, 30);
  // };

  const { rows } = table.getRowModel();

  const tableContainerRef = React.useRef<HTMLDivElement>(null);
  const hasNextPage = rows.length < 1000;
  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? rows.length + 1 : rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 30,
    overscan: 3,
  });
  // useEffect(() => {
  //   const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

  //   if (!lastItem) {
  //     return;
  //   }
  //   if (lastItem.index >= rows.length - 1 && hasNextPage && !fetching) {
  //     // getData();
  //   }
  // }, [fetching, rowVirtualizer.isScrolling]);

  return (
    <div className='PatientTopLeft_handle' style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <div
        className='container'
        ref={tableContainerRef}
        style={{
          overflow: 'auto',
          position: 'relative',
          height: '100%',
        }}
      >
        <table style={{ display: 'grid' }}>
          <thead
            style={{
              display: 'grid',
              position: 'sticky',
              top: 0,
              zIndex: 1,
            }}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <>
                <tr
                  key={headerGroup.id}
                  style={{
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  {headerGroup.headers.map((header) => {
                    return <DraggableColumnHeader key={header.id} table={table} header={header} />;
                  })}
                </tr>
              </>
            ))}
            {table.getHeaderGroups().map((headerGroup) => (
              <>
                <tr key={headerGroup.id} style={{ display: 'flex', width: '100%' }}>
                  {headerGroup.headers.map((header, index) => {
                    return (
                      <th
                        key={index}
                        style={{
                          width: header.getSize(),
                          margin: '0',
                          padding: '0',
                        }}
                      >
                        {(header.column.columnDef as any).headerContent}
                      </th>
                    );
                  })}
                </tr>
              </>
            ))}
          </thead>
          <tbody
            style={{
              display: 'grid',
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = rows[virtualRow.index] as Row<(typeof data)[0]>;
              if (!row) {
                return null;
              }
              return (
                <tr
                  data-index={virtualRow.index}
                  ref={(node) => rowVirtualizer.measureElement(node)}
                  key={row.id}
                  style={{
                    display: 'flex',
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`,
                    width: '100%',
                  }}
                  // onClick={() => {
                  //   if (!cam) setRowIdDam(row.id);
                  // }}
                  className={rowIdDam === row.id ? 'PatientTopLeft_Table-Trr' : 'PatientTopLeft_Table-Tr'}
                  onClick={() => setRowIdDam(row.id)}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        style={{
                          display: 'flex',
                          width: cell.column.getSize(),
                        }}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          {/* <tfoot
            style={{
              display: "grid",
              position: "sticky",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <tr>
              <td>({data.length} rows)</td>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};
export default Table;
