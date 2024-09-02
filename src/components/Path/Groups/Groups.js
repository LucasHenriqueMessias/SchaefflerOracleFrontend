import React, {useEffect, useState} from 'react';
import DataGrid, { Column, FilterRow, HeaderFilter, Editing, Popup, Form, MasterDetail, Selection, Lookup } from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import axios from 'axios';
import GroupsDetail from '../../MasterDetail/MD_GroupsDetail/GroupsDetail';

const Groups = () => {

    const companies = [
    {company_id: '11'},
    {company_id: '51'}
  ]


    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/MvSysSegEmailGroup`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
    },[])

const deleteRow = data =>{
console.log(data.key)
  axios.delete(`${process.env.REACT_APP_BASE_URL}/MvSysSegEmailGroup/delete/${data.key}`).catch(error => console.log(error))
}
const postRow = data =>{
    data.data['segCompany'] = data.data.segCompany.company_id;
  axios.post(`${process.env.REACT_APP_BASE_URL}/MvSysSegEmailGroup`, data.data)
}  
const updateRow = data =>{
  console.log(data.key)
  axios.put(`${process.env.REACT_APP_BASE_URL}/MvSysSegEmailGroup/put/${data.key}`, data.data).catch(error => console.log(error))
} 
const selectRow = data => GroupsDetail(data)

  return(
      <div> 
        <span className="pageTitle">
        <strong>Grupos de E-mail</strong>
        </span>
        <DataGrid 
        id="gridContainer"
          noDataText='No data to display. Please check with Support team'
          dataSource={posts}
          keyExpr="segGroupName"
          filterSyncEnabled={true}
          repaintChangesOnly={true}
          highlightChanges={true}
          showBorders={true}
          columnAutoWidth={true}
          onRowInserted={postRow}
          onRowUpdated={updateRow}
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
            <Popup title="Editing Row from Groups" showTitle={true} width={700} height={525} />
            <Form>
                <Item dataField="segCompany" caption="Emp."/> 
                <Item dataField="segGroupName" caption="Nome Grupo"/> 
                <Item dataField="segDescription"/>
            </Form>
            </Editing>      
            <Column dataField="segCompany"caption="Empresa">
                   <Lookup
                    dataSource={companies}
                    displayExpr="company_id"/></Column> 
                <Column dataField="segGroupName" caption="Nome Grupo"/> 
                <Column dataField="segDescription" caption="Descrição Grupo"/>
                <MasterDetail enabled={true} component={selectRow}  /> 
                <Selection mode="single"/>
                
        </DataGrid>
        
      </div>       
  )
}
export default Groups ;