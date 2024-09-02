import React, {useEffect, useState} from 'react';
import DataGrid, { Column, FilterRow, HeaderFilter, Editing, Popup, Form, Selection, Paging, Lookup } from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import axios from 'axios';

const Value = () => {
  const companies = [
    {company_id: '11'},
    {company_id: '20'},
    {company_id: '51'}
  ]

    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/MvSysSvxValueException/list/0/0`)
        .then(response => response.json())
        .then(data => setPosts(data))
        ;//.catch(error => console.log(error))
    },[])
    const putRow = data => axios.put(`${process.env.REACT_APP_BASE_URL}/MvSysSvxValueException/put/${data.key}`, data.data);//.catch(e => console.log(e));
    const deleteRow = data => axios.delete(`${process.env.REACT_APP_BASE_URL}/MvSysSvxValueException/delete/${data.key}`);//.catch(e => console.log(e));
    const postRow = data => axios.post(`${process.env.REACT_APP_BASE_URL}/MvSysSvxValueException`, data.data);//.catch(e => console.log(e));
    const convertToBool = (data) => { 
      //console.log(data)
      data.forEach(element => {
        if(element.svxActive === "Y"){
          element.svxActive = false;
        }else{
          element.svxActive = true;
        } 
      });
      return data;
    }
  const recall = data => 
  {
    axios.get(`${process.env.REACT_APP_BASE_URL}/MvSysSvxValueException/list/0/${data}`).then(response => setPosts(response.data));
        //.catch(error => console.log(error));
    //console.log(posts)
  };
  return(
      <div> 
        <span className="pageTitle">
        <strong>Exceção x Valor</strong>
        </span>
        <DataGrid 
        id="gridContainer"
          noDataText='No data to display. Please check with Support team'
          dataSource={convertToBool(posts)}
          keyExpr="svxCompany"
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
            <Popup title="Editing Row from Exceptions x Values" showTitle={true} width={700} height={525} />
            <Form>
                <Item dataField="svxException" dataType="number"/>
                <Item dataField="svxCompany"/>
                <Item dataField="svxAlphanumericValue"/> 
                <Item dataField="svxNumericValue"/> 
                <Item dataField="svxDatetimeValue" dataType="datetime" format="dd/MM/yyyy HH:mm"/>
                <Item dataField="svxUserCreated"/> 
                <Item dataField="svxDatetimeCreated" dataType="datetime" format="dd/MM/yyyy HH:mm"/> 
                <Item dataField="svxUserAltered"/> 
                <Item dataField="svxDatetimeAltered" dataType="datetime" format="dd/MM/yyyy HH:mm"/>   
                <Item dataField="svxActive"/> 
            </Form>
            </Editing>
                <Column dataField="svxException" dataType="number" caption="tipo"/>
                <Column dataField="svxCompany" caption="Emp.">
                  <Lookup
                  dataSource={companies}
                  displayExpr="company_id"
                  />
                  </Column> 
                <Column dataField="sxDescription" caption="Descrição"/> 
                <Column dataField="svxAlphanumericValue" caption="Valor Alfanumérico"/> 
                <Column dataField="svxNumericValue" caption="Valor Numérico"/> 
                <Column dataField="svxDatetimeValue" dataType="datetime" format="dd/MM/yyyy HH:mm" caption="Valor Data"/> 
                <Column dataField="svxUserCreated"/> 
                <Column dataField="svxDatetimeCreated" dataType="datetime" format="dd/MM/yyyy HH:mm"/> 
                <Column dataField="svxUserAltered"/> 
                <Column dataField="svxDatetimeAltered" dataType="datetime" format="dd/MM/yyyy HH:mm"/>
                <Column dataField="svxActive" caption="Ativo"/>
                <Selection mode="single"/>
                <Paging  onPageIndexChange={recall}  />
        </DataGrid>
      </div>       
  )
}

export default Value ;