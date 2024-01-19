import { Column, ColumnOrderState, Header, Table, flexRender } from '@tanstack/react-table';
import { useDrag, useDrop } from 'react-dnd';
import { Dropdown, MenuProps, Checkbox } from 'antd';
import { IoMdSettings } from 'react-icons/io';

import { TiArrowUnsorted, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { MdOutlineInsertPageBreak } from 'react-icons/md';
import { useEffect, useState } from 'react';
import './Table.scss';
type Props = {
  header: Header<any, unknown>;
  table: Table<any>;
};

const reorderColumn = (
  draggedColumnId: string,
  targetColumnId: string,
  columnOrder: Array<string>
): ColumnOrderState => {
  columnOrder.splice(
    columnOrder.indexOf(targetColumnId),
    0,
    columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0] as string
  );
  return [...columnOrder];
};

const DraggableColumnHeader = ({ header, table }: Props) => {
  const { getState, setColumnOrder } = table;
  const { columnOrder } = getState();
  const { column } = header;
  const [listShow, setListShow] = useState<MenuProps['items']>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [render, setRender] = useState<boolean>(true);
  const handleDropdownVisibleChange = (visible: boolean) => {
    setIsDropdownVisible(visible);
  };
  // {(header.column.columnDef as any).headerContent}
  useEffect(() => {
    const array: MenuProps['items'] = [];
    table.getAllLeafColumns().forEach((columnm, index) => {
      array.push({
        key: index + 1,
        label: (
          <div
            key={index}
            className='px-1'
            style={{
              display: columnm.id !== 'func' ? 'flex' : 'none',
              height: '18px',
              alignItems: 'center',
            }}
            onClick={() => setRender((prev) => !prev)}
          >
            <Checkbox
              {...{
                checked: columnm.getIsVisible(),
                onChange: columnm.getToggleVisibilityHandler(),
                style: { fontSize: '13px', fontWeight: 'bold' },
              }}
            >
              {(columnm.columnDef as any).header}
            </Checkbox>
          </div>
        ),
      });
    });
    setListShow(array);
  }, [render]);

  const [, dropRef] = useDrop({
    accept: 'column',
    drop: (draggedColumn: Column<any>) => {
      const newColumnOrder = reorderColumn(draggedColumn.id, column.id, columnOrder);
      setColumnOrder(newColumnOrder);
    },
  });
  const [{ isDragging }, dragRef] = useDrag({
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    item: () => column,
    type: 'column',
  });
  // console.log(previewRef);

  return (
    <th
      ref={dropRef}
      colSpan={header.colSpan}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: header.getSize(),
        position: 'relative',
        backgroundColor: '#e3e2ec',
        color: '#1d2129',
      }}
      key={header.id}
    >
      <div
        ref={dragRef}
        onClick={(e) => {
          e.stopPropagation;
          header.column.getToggleSortingHandler();
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        {header.isPlaceholder ? null : (
          <>
            {header.id !== 'func' ? (
              <div
                {...{
                  className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                  onClick: header.column.getToggleSortingHandler(),
                }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
                {{
                  asc: <TiArrowSortedUp style={{ marginLeft: '10px' }} />,
                  desc: <TiArrowSortedDown style={{ marginLeft: '10px' }} />,
                }[header.column.getIsSorted() as string] ?? null}
                {!(header.column.getIsSorted() as string) && <TiArrowUnsorted style={{ marginLeft: '10px' }} />}
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Dropdown
                  menu={{ items: listShow }}
                  placement='bottom'
                  arrow={{ pointAtCenter: true }}
                  visible={isDropdownVisible}
                  onVisibleChange={handleDropdownVisibleChange}
                >
                  <IoMdSettings style={{ marginRight: '5px' }} />
                </Dropdown>
                <MdOutlineInsertPageBreak
                // onClick={()=>{cam=!cam}}
                // className={cam?"cam-true":"cam-false"}
                />
              </div>
            )}
          </>
        )}
        {/* {(header.column.columnDef as any).id !== 'func' && (
          <button ref={previewRef} style={{ height: '20px', cursor: 'grab' }} />
        )} */}
        <div
          {...{
            onMouseDown: (e) => {
              e.preventDefault();
              header.getResizeHandler()(e);
            },
            onTouchStart: (e) => {
              e.preventDefault();
              header.getResizeHandler()(e);
            },
            style: {
              position: 'absolute',
              top: 0,
              right: 0,
              width: '10px',
              height: '100%',
              transform: 'translate(80%,0)',
              cursor: 'col-resize',
              zIndex: 1,
            },
            className: 'Table_DraggableColumnHeader',
          }}
        />
        {/* <div>
          {header.column.getIsSorted() === "asc" && (
            <span>
              <IoCaretUpOutline />
            </span>
          )}
          {header.column.getIsSorted() === "desc" && (
            <span>
              <IoCaretDownOutline />
            </span>
          )}
        </div> */}
      </div>
    </th>
  );
};

export default DraggableColumnHeader;
