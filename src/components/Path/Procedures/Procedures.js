import React, {useEffect, useState} from 'react';
import DataGrid, { Column, FilterRow, HeaderFilter, Editing, Popup, Form, MasterDetail, Selection } from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import axios from 'axios';
import ProceduresDetail from '../../MasterDetail/MD_ProceduresDetail/ProceduresDetail';

const Procedures = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/MvSysSjJob`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
    },[])
    const putRow = data => axios.put(`${process.env.REACT_APP_BASE_URL}/MvSysSjJob/put/${data.key}`, data.data).catch(e => console.log(e));
    const deleteRow = data => axios.delete(`${process.env.REACT_APP_BASE_URL}/MvSysSjJob/delete/${data.key}`).catch(e => console.log(e));
    const postRow = data => axios.post(`${process.env.REACT_APP_BASE_URL}/MvSysSjJob`, data.data).catch(e => console.log(e));
    const selectRow = data => ProceduresDetail(data)
 
  return(
      <div> 
        <span className="pageTitle">
        <strong>Procedures</strong>
        </span>
        <DataGrid 
        id="gridContainer"
          noDataText='No data to display. Please check with Support team'
          dataSource={posts}
          keyExpr="sjProcedureName"
          filterSyncEnabled={true}
          repaintChangesOnly={true}
          highlightChanges={true}
          showBorders={true}
          columnAutoWidth={true}
          onRowInserted={postRow}
          onRowUpdated={putRow}
          onRowRemoved={deleteRow}
    >
            <FilterRow visible={true}/>
            <HeaderFilter visible={true} />     
            <Editing
            mode="popup"
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true}
            useIcons={true}>
            <Popup title="Editing Row from Procedures" showTitle={true} width={700} height={525} />
            <Form>
                <Item dataField="sjProcedureName" caption="Procedure Name"/> 
                <Item dataField="sjDescription" caption="Description"/> 
            </Form>
            </Editing> 
                <Column dataField="sjProcedureName" caption="Procedure Name"/> 
                <Column dataField="sjDescription" caption="Description"/> 
                <Selection mode="single"/>
                <MasterDetail enabled={true} component={selectRow}  /> 
                
                    </DataGrid>
      </div>       
  )
  
}

export default Procedures ;