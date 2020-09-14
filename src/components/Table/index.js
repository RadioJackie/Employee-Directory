import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import API from '../../utils/API'

//const TablePage = (props) => {
class TablePage extends Component {
  state = {
    data: {
      columns: [
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
      rows: [],
    }
  };

  componentDidMount() {
    API.randomUsers().then((res) => {
      console.log(res.data.results);
      const rows = [];
      for (let i = 0; i < res.data.results.length; i++) {
        const image = res.data.results[i].picture.thumbnail;
        const name = res.data.results[i].name.first + " " + res.data.results[i].name.last;
        const phone = res.data.results[i].phone;
        const email = res.data.results[i].email;
        const dob = new Date(res.data.results[i].dob.date).toLocaleDateString('en-US');

        const person = {
          'Image': image,
          'Name': name,
          'Phone': phone,
          'Email': email,
          'D.O.B': dob,
        };
        console.log(person);
        rows.push(person);
      };
      console.log(rows);
      this.setState({ data: { ...this.state.data, rows: rows } });
    });
  }

  render() {
    return (
      <MDBTable responsive>
        <MDBTableHead columns={this.state.data.columns} />
        <MDBTableBody rows={this.state.data.rows} />
      </MDBTable >
    );
  }
};

export default TablePage;