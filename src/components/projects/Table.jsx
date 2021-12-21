import React from "react";


  class Table extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        data:this.props.data,
        selectedAll: false,
        selectedData:[]
      };
      this.onMasterCheck = this.onMasterCheck.bind(this);
      this.onItemCheck = this.onItemCheck.bind(this);
      this.getSelectedRows = this.getSelectedRows.bind(this);
      this.requestSort = this.requestSort.bind(this);
      this.submit = this.submit.bind(this);
    }
    
    submit = (e) =>{
      //submit this.states.selectedData
      console.log(this.state.selectedData)
    }

    requestSort =() =>{
      let projectData = this.props.data;
      const sortedDates = projectData.sort((a, b) => {
        var dateA = new Date(a.postedDate), 
            dateB = new Date(b.postedDate);
        return dateA - dateB;
      });
      this.setState({data:sortedDates})
    }
    // Select/ UnSelect Table rows
    onMasterCheck(e) {
      let tempList = this.state.data;
      // Check/ UnCheck All Items
      tempList.map((row) => (row.selected = e.target.checked));

      //Update State
      this.setState({
        MasterChecked: e.target.checked,
        data: tempList,
        selectedData: this.state.data.filter((e) => e.selected),
      });
      console.log(this.state)
    }
    onItemCheck(e, item) {
      let tempList = this.state.data;
      tempList.map((row) => {
        if (row.name === item.name) {
          row.selected = e.target.checked;
        }
        return row;
      });

      const totalItems = this.state.data.length;
      const totalCheckedItems = tempList.filter((e) => e.selected).length;

      // Update State
      this.setState({
        MasterChecked: totalItems === totalCheckedItems,
        data: tempList,
        selectedData: this.state.data.filter((e) => e.selected),
      });
    }

    getSelectedRows() {
      this.setState({
        selectedData: this.state.data.filter((e) => e.selected),
      });
    }
    render () {
      return (
        <div>
          <h3>Projects:</h3>
          <table>
            <thead>
              <tr>
                <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                </th>
                <th>
                    Name
                </th>
                <th>
                    Type
                </th>
                <th>
                    Casting Director
                </th>
                <th onClick={this.requestSort}>
                    Posted Date
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item) => (
                <tr key={item.name} className={item.selected ? "selected" : ""}> 
                  <th scope="row">
                      <input
                        type="checkbox"
                        checked={item.selected}
                        className="form-check-input"
                        id="rowcheck{item.name}"
                        onChange={(e) => this.onItemCheck(e, item)}
                      />
                  </th>
                  <td> {item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.castingDirector}</td>
                  <td>{item.postedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={this.submit}>Submit</button>
        </div>
    );
  }
};

export default Table
