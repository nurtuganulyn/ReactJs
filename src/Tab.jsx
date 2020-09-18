import React from 'react';

class Tab extends React.Component {
    state = {
      rows: [
             {name : "Nursultan", phone: "87761694143", address: "Kyzylorda"},
             {name : "Nurasyl", phone: "87761053443", address: "Kyzylorda"} 
            ]
    };
    handleChange = idx => e => {
      const { name, value } = e.target;
      const rows = [...this.state.rows];
      rows[idx] = {
        [name]: value
      };
      this.setState({
        rows
      });
    };
    handleAddRow = () => {
      const item = {
        name: "",
        phone: "",
        address: ""
      };
      this.setState({
        rows: [...this.state.rows, item]
      });
    };
    handleRemoveRow = () => {
      this.setState({
        rows: this.state.rows.slice(0, -1)
      });
    };
    render() {
      return (
        <div>
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-12 column">
                <table
                  className="table table-bordered table-hover"
                  id="tab_logic"
                >
                  <thead>
                    <tr>
                      <th className="text-center"> No </th>
                      <th className="text-center"> Name </th>
                      <th className="text-center"> Phone </th>
                      <th className="text-center"> Address </th>

                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rows.map((item, idx) => (
                      <tr id="addr0" key={idx}>
                        <td>{idx}</td>
                        <td>
                          <input
                            type="text"
                            name="name"
                            value={this.state.rows[idx].name}
                            onChange={this.handleChange(idx)}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="phone"
                            value={this.state.rows[idx].phone}
                            onChange={this.handleChange(idx)}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="adress"
                            value={this.state.rows[idx].address}
                            onChange={this.handleChange(idx)}
                            className="form-control"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  onClick={this.handleAddRow}
                  className="btn btn-default pull-left"
                >
                  Add
                </button>
                
                <button
                  onClick={this.handleRemoveRow}
                  className="pull-right btn btn-default"
                >
                  Delete 
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default Tab;