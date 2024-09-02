import React, {useEffect, useState} from 'react';
import DataGrid, { Column, FilterRow, HeaderFilter, Editing, Popup, Form, Selection, Lookup } from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import axios from 'axios';

const ExchangeOperations = () => {
  const companies = [
    {company_id: '11'},
    {company_id: '99'}
  ]

    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/MvSysSeoExchangeOperation`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
    },[])
 
  const putRow = data =>
  {
    delete delete data.data.seoUserAlt;
    delete delete data.data.seoDateAlt;
     axios.put(`${process.env.REACT_APP_BASE_URL}/MvSysSeoExchangeOperation/put/${data.data.seoCompany}/${data.data.seoSourceHost}/${data.data.seoSourceFtpUser}/${data.data.seoDestHost}/${data.data.seoDestFtpUser}/${data.data.seoOperation}`, data.data).catch(e => console.log(e));
  }
  const deleteRow = data => axios.delete(`${process.env.REACT_APP_BASE_URL}/MvSysSeoExchangeOperation/delete/${data.data.seoCompany}/${data.data.seoSourceHost}/${data.data.seoSourceFtpUser}/${data.data.seoDestHost}/${data.data.seoDestFtpUser}/${data.data.seoOperation}`).catch(e => console.log(e));
  const postRow = data =>{

    data.data['seoCompany'] = data.data.seoCompany.company_id;
    delete delete data.data.seoUserAlt;
    delete delete data.data.seoDateAlt;
     axios.post(`${process.env.REACT_APP_BASE_URL}/MvSysSeoExchangeOperation`, data.data).catch(e => console.log(e));
  }
  return(
      <div> 
        <span className="pageTitle">
        <strong>Operações do Exchange Files Service</strong>
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
            allowUpdating={false}
            allowDeleting={true}
            allowAdding={true}
            useIcons={true}>
            <Popup title="Editing Row from Exchange Operations" showTitle={true} width={700} height={525} />
            <Form>
                
                <Item dataField="seoCompany" caption="Emp"/>
                <Item dataField="seoOperation" caption="Op."/>
                <Item dataField="seoSourceHost" caption="Host Origem"/>
                <Item dataField="seoDestHost" caption="Host Destino"/>
                <Item dataField="seoSourceFtpUser" caption="User Ftp Orig."/>
                <Item dataField="seoDestFtpUser" caption="User Ftp Dest."/>
                <Item dataField="seoDescription" caption="Descrição"/>
            </Form>
            </Editing>
            <Column dataField="seoCompany"caption="Empresa">
                   <Lookup
                    dataSource={companies}
                    displayExpr="company_id"/></Column> 
                <Column dataField="seoOperation" caption="Op."/> 
                <Column dataField="seoDescription" caption="Descrição"/> 
                <Column dataField="seoSourceHost" caption="Host Origem"/> 
                <Column dataField="seoSourceFtpUser" caption="Usr. Ftp. Orig."/> 
                <Column dataField="seoDestHost" caption="Host Destino"/> 
                <Column dataField="seoDestFtpUser" caption="Usr. Ftp. Dest."/> 
                <Column dataField="seoUserAlt" caption="Usr. Alt."/> 
                <Column dataField="seoDateAlt" dataType="datetime" format="dd/MM/yyyy HH:mm" caption="Data Alt."/>
                <Selection mode="single"/>
        </DataGrid>
      </div>       
  )
  
}
/*
                <Item dataField="seoCompany" caption="Emp"/> 
                <Item dataField="seoOperation" caption="Op."/>
                <Item dataField="seoDescription" caption="Descrição"/> 
                <Item dataField="seoSourceHost" caption="Host Origem"/> 
                <Item dataField="seoSourceFtpUser" caption="Usr. Ftp. Orig."/> 
                <Item dataField="seoDestHost" caption="Host Destino"/>  
                <Item dataField="seoDestFtpUser" caption="Usr. Ftp. Dest."/>  
*/
export default ExchangeOperations ;