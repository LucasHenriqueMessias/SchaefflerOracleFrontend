/*
##########################################
Author: Lucas Henrique Messias Goncalves
##########################################
Lucas H. M. Goncalves - 16/03/2023 - 12:31
 --> Necessário Verificar o uso de keyexpr como ID e o motivo de estar sendo exportado sempre o mesmo dado.
##########################################
*/

import React, {useEffect, useState} from 'react';
import DataGrid, { Column, FilterRow, HeaderFilter, Editing, Popup, Form, Selection, Lookup } from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import axios from 'axios';



const Exceptions = () => {
const companies = [
    {company_id: '11'},
    {company_id: '20'},
    {company_id: '51'}
  ]

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/MvSysSxException`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
    },[])
 
  const putRow = data => axios.put(`${process.env.REACT_APP_BASE_URL}/MvSysSxException/put/${data}`, data.data).catch(e => console.log(e));
  const deleteRow = data => axios.delete(`${process.env.REACT_APP_BASE_URL}/MvSysSxException/delete/${data}`).catch(e => console.log(e));
  const postRow = data => axios.post(`${process.env.REACT_APP_BASE_URL}/MvSysSxException`, data.data).catch(e => console.log(e));
 console.log(posts)
  return(
      <div> 
        <span className="pageTitle">
        <strong>Exceções</strong>
        </span>
        <DataGrid 
        id="gridContainer"
          noDataText='No data to display. Please check with Support team'
          dataSource={posts}
          keyExpr="sxCompany"
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
            <Popup title="Editing Row from Exceptions" showTitle={true} width={700} height={525} />
            <Form>
                <Item dataField="sxCompany" caption="Emp."/> 
                <Item dataField="sxDescription" caption="Descrição"/>
                <Item dataField="sxModule" caption="Módulo"/> 
                <Item dataField="sxTable" caption="Tabela"/> 
                <Item dataField="sxItem" caption="Coluna"/> 
                <Item dataField="sxComparison" caption="Comp."/> 
                <Item dataField="sxValue" caption="Valor"/>  
                <Item dataField="sxNote" caption="Observação"/> 
            </Form>
            </Editing>   
                <Column dataField="sxCompany" caption="Emp.">
                  <Lookup dataSource={companies}
                  displayExpr="company_id"/>
                </Column>
                <Column dataField="sxException" caption="Exceção"/>
                <Column dataField="sxDescription" caption="Descrição"/>
                <Column dataField="sxModule" caption="Módulo"/> 
                <Column dataField="sxTable" caption="Tabela"/> 
                <Column dataField="sxColumn" caption="Coluna"/> 
                <Column dataField="sxComparison" caption="Comp."/> 
                <Column dataField="sxValue" caption="Valor"/>  
                <Column dataField="sxNote" caption="Observação"/>
                <Selection mode="single"/>
        </DataGrid>
      </div>       
  )
  
}

export default Exceptions ;