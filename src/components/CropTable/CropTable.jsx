import {
  GridColDef,
  GridRowsProp,
  DataGrid,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  MuiEvent,
} from '@mui/x-data-grid';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CropTable () {

    const dispatch = useDispatch();
    const yields = useSelector(store => store.crop);   

    const rows: GridRowsProp = yields;

    useEffect(() => {
        dispatch({ type: 'FETCH_YIELDS' });
    }, []);

    const updateYield = (editedYield) => {
        dispatch({ type: 'UPDATE_YIELD', payload: editedYield});
        console.log("Updated yield fields:", Yield);
    };

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode='row'
        processRowUpdate={( updatedRow, originalRow) =>
            updateYield(updatedRow)
        }
        onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
          if (params.reason === GridCellEditStopReasons.cellFocusOut) {
            event.defaultMuiPrevented = true;
          }
        }}
      />
    </div>
  );
};

const columns: GridColDef[] = [
  { field: 'crop', headerName: 'Crop', width: 250, editable: true },
  {
    field: 'year',
    headerName: 'Year',
    type: 'string',
    editable: true,
    align: 'center',
    headerAlign: 'left',
  },
  {
    field: 'yield',
    headerName: 'Yield',
    type: 'number',
    width: 250,
    editable: true,
  },
];




export default CropTable;