import React, {useEffect, useState} from 'react';
import DataGrid, { Column, FilterRow, HeaderFilter, Editing, Popup, Form, Selection, Lookup } from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import axios from 'axios';


const ExchangeHosts = () => {
 const companies = [
    {company_id: '11'},
    {company_id: '99'}
  ]
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/MvSysSehExhangeHost`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
    },[])
 
  const putRow = data =>{
    data.data['sehCompany'] = data.data.sehCompany.company_id;
    delete delete data.data.sehDateAlt;
    delete delete data.data.sehUserAlt;
    console.log(data.data)
    axios.put(`${process.env.REACT_APP_BASE_URL}/MvSysSehExhangeHost/put/${data.data.sehCompany}/${data.data.sehHost}/${data.data.sehUsername}`, data.data).catch(e => console.log(e));
  }
  
  const deleteRow = data => axios.delete(`${process.env.REACT_APP_BASE_URL}/MvSysSehExhangeHost/delete/${data.data.sehCompany}/${data.data.sehHost}/${data.data.sehUsername}`).catch(e => console.log(e));
  
  const postRow = data => {
    
    data.data['sehCompany'] = data.data.sehCompany.company_id;
    console.log(data.data)
    delete delete data.data.__KEY__;
    delete delete data.data.sehDateAlt;
    delete delete data.data.sehUserAlt;
    axios.post(`${process.env.REACT_APP_BASE_URL}/MvSysSehExhangeHost`, data.data).catch(e => console.log(e));
  }
 
  return(
      <div> 
        <span className="pageTitle">
        <strong>Hosts do Exchange Files Service</strong>
        </span>
        <DataGrid 
        id="gridContainer"
          noDataText='No data to display. Please check with Support team'
          dataSource={posts}
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
            <Popup title={`Editing Row From Exchange Archives Hosts`} showTitle={true} width={700} height={525} />
            <Form>
                <Item dataField="sehCompany" caption="Emp"/> 
                <Item dataField="sehHost" caption="Host" allowAdding={false}/> 
                <Item dataField="sehPortFtp" dataType="number" caption="Porta"/>
                <Item dataField="sehUsername" caption="Usuário"/> 
                <Item dataField="sehPassword" caption="Senha"/> 
                <Item dataField="sehFileProtocol" caption="Prot."/>
            </Form>
            </Editing>
                <Column dataField="sehCompany" caption="Emp">
                   <Lookup
                    dataSource={companies}
                    displayExpr="company_id"/></Column> 
                <Column dataField="sehHost" caption="Host"/> 
                <Column dataField="sehPortFtp" dataType="number" caption="Porta"/>
                <Column dataField="sehUsername" caption="Usuário"/> 
                <Column dataField="sehPassword" caption="Senha"/> 
                <Column dataField="sehFileProtocol" caption="Prot."/> 
                <Column dataField="sehUserAlt" caption="User Alt."/> 
                <Column dataField="sehDateAlt" dataType="datetime" format="dd/MM/yyyy HH:mm" caption="Data Alt."/>
                <Selection mode="single"/>
        </DataGrid>
      </div>       
  )
  
}

export default ExchangeHosts ;