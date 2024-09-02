import React, {useEffect, useState} from 'react';
import DataGrid, { Column, FilterRow, HeaderFilter, Editing, Popup, Form, Selection, Paging, Pager} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import axios from 'axios';

const ExchangeLogs = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/TbSysSelExchangeLog/list/0/1`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
    },[])
 /*
  const putRow = data => axios.put(`${process.env.REACT_APP_BASE_URL}/QvSysSelExchangeLog/put/${data.key}`, data.data).catch(e => console.log(e));
  const deleteRow = data => axios.delete(`${process.env.REACT_APP_BASE_URL}/QvSysSelExchangeLog/delete/${data.key}`).catch(e => console.log(e));
  const postRow = data => axios.post(`${process.env.REACT_APP_BASE_URL}/QvSysSelExchangeLog`, data.data).catch(e => console.log(e));
 */

const recall = data =>{
   axios.get(`${process.env.REACT_APP_BASE_URL}/TbSysSelExchangeLog/list/0/${data}`).then(response => setPosts(response.data));
   console.log(posts)
}
  return(
      <div> 
        <span className="pageTitle">
        <strong>Logs do Exchange Files Service</strong>
        </span>
        <DataGrid 
        id="gridContainer"
          noDataText='No data to display. Please check with Support team'
          dataSource={posts}
          keyExpr={'selId'}
          filterSyncEnabled={true}
          repaintChangesOnly={true}
          highlightChanges={true}
          showBorders={true}
          columnAutoWidth={true}
          /*
          onRowInserted={postRow}
          onRowUpdated={putRow}
          onRowRemoved={deleteRow}
          */
          >
            <FilterRow visible={true}/>
            <HeaderFilter visible={true} />
            <Editing
            mode="popup"
            allowUpdating={false}
            allowDeleting={false}
            allowAdding={false}
            useIcons={false}>
            <Popup title="Editing Row from Exchange Archives" showTitle={true} width={700} height={525} />
            <Form>
                <Item dataField="selCompany" caption="Emp"/> 
                <Item dataField="selId" dataType="number" caption="ID"/>
                <Item dataField="selType" caption="Tipo"/> 
                <Item dataField="selDate" dataType="datetime" format="dd/MM/yyyy HH:mm" caption="Data"/>
                <Item dataField="selMessage" caption="Mensagem"/> 
                <Item dataField="selUserAlt" caption="User Alt."/> 
                <Item dataField="selDateAlt" dataType="datetime" format="dd/MM/yyyy HH:mm" caption="Data Alt."/>
            </Form>
            </Editing>
                <Column dataField="selCompany" caption="Emp"/> 
                <Column dataField="selId" dataType="number" caption="ID"/>
                <Column dataField="selType" caption="Tipo"/> 
                <Column dataField="selDate" dataType="datetime" format="dd/MM/yyyy HH:mm" caption="Data"/>
                <Column dataField="selMessage" caption="Mensagem"/> 
                <Column dataField="selUserAlt" caption="User Alt."/> 
                <Column dataField="selDateAlt" dataType="datetime" format="dd/MM/yyyy HH:mm" caption="Data Alt."/>
                <Selection mode="single"/>
                <Paging onPageIndexChange={recall} pageSize={100}  />
                <Pager showNavigationButtons={true} Paginate={true}/>
        </DataGrid>
      </div>       
  )
 //<Paging onPageIndexChange={recall} pageSize={100}/>: 
}

export default ExchangeLogs ;