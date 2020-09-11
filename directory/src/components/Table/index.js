import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TablePage = (props) => {
const data = {
columns: [
{
label: '#',
field: 'id',
sort: 'asc'
},
{
label: 'Image',
field: 'heading0',
sort: 'asc'
},
{
label: 'Name',
field: 'heading1',
sort: 'asc'
},
{
label: 'Phone',
field: 'heading2',
sort: 'asc'
},
{
label: 'Email',
field: 'heading3',
sort: 'asc'
},
{
label: 'D.O.B',
field: 'heading4',
sort: 'asc'
},
],
rows: [
{
'id': 1,
'Image': 'Cell',
'Name': 'Cell',
'Phone': 'Cell',
'Email': 'Cell',
'D.O.B': 'Cell',

},
{
'id': 2,
'heading0': 'Cell',
'heading1': 'Cell',
'heading2': 'Cell',
'heading3': 'Cell',
'heading4': 'Cell',
},
{
'id': 3,
'heading0': 'Cell',
'heading1': 'Cell',
'heading2': 'Cell',
'heading3': 'Cell',
'heading4': 'Cell',
}
]
};

return (
<MDBTable responsive>
  <MDBTableHead columns={data.columns} />
  <MDBTableBody rows={data.rows} />
</MDBTable>
);
};

export default TablePage;