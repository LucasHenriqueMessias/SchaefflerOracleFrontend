import React, {useEffect, useState} from 'react';
import '../../../index.css';
import DataGrid, {
  Column, FilterRow, HeaderFilter, Editing, Popup, Form, Selection, Lookup
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.common.css';
//import 'devextreme/dist/css/dx.light.css';
import axios from 'axios';
import { Item } from 'devextreme-react/form';

const ExchangeArchives = () => {
  const companies = [
    {company_id: '11'},
    {company_id: '99'}
  ]
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/MvSysSefExchangeFile`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
    },[])

   const DeleteField = data => axios.delete(`${process.env.REACT_APP_BASE_URL}/MvSysSefExchangeFile/delete/${data.key}`).catch(error => console.log(error))
    
     const convertToBool = (data) => {
      data.forEach(element => {
        if(element.sefDeleteSource === "Y"){
          element.sefDeleteSource = true;
        }else if(element.sefDeleteSource === "N"){
          element.sefDeleteSource = false;
        }
       if(element.sefAppend === "Y"){
          element.sefAppend = true;
        }else if(element.sefAppend === "N"){
          element.sefAppend = false;
        }
      });
      return data;
    }

  function convertToString(data){
    if(data.data.sefDeleteSource === true){
      data.data.sefDeleteSource = "Y";
   } else if(data.data.sefDeleteSource === false){
      data.data.sefDeleteSource = "N";
   }
   if (data.data.sefAppend === true){
      data.data.sefAppend = "Y";
   } else if(data.data.sefAppend === false){
      data.data.sefAppend = "N";
   }
   console.log(data.data)
   return(data);
  }

  const UpdateField = data =>{
    convertToString(data)
    delete delete data.data.sefID;
    delete delete data.data.sefDateAlt;
    delete delete data.data.sefUserAlt;
    console.log(data.data)
    axios.put(`${process.env.REACT_APP_BASE_URL}/MvSysSefExchangeFile/put/${data.key}`, data.data).catch(error => console.log(error))
  }

  const AddField = data =>{
    convertToString(data)
    
    data.data['sefCompany'] = data.data.sefCompany.company_id;
    delete data.data.sefId; 
    delete data.data.sefDateAlt;
    delete data.data.sefUserAlt;
    console.log(data.data)
    axios.post(`${process.env.REACT_APP_BASE_URL}/MvSysSefExchangeFile/`, data.data).catch(error => console.log(error))
  }
   return(
      <div> 
        <span className="pageTitle">
        <strong>Arquivos do Exchange Files</strong>
        </span>
        <DataGrid 
        id="gridContainer"
          noDataText='No data to display. Checking Connection With Database'
          dataSource={convertToBool(posts)}
          keyExpr="sefId"
          filterSyncEnabled={true}
          repaintChangesOnly={true}
          highlightChanges={true}
          showBorders={true}
          onRowInserted={AddField}
          onRowUpdated={UpdateField}
          onRowRemoved={DeleteField}
          columnAutoWidth={true}
          >
             <FilterRow visible={true}/>
            <HeaderFilter visible={true} />
            <Editing
            mode="popup" 
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true}
            useIcons={true} >
            <Popup title="Editing Row from Exchange Archives" showTitle={true} width={700} height={525} />
            <Form>
                <Item dataField="sefCompany"caption="Empresa"/>
                <Item dataField="sefOperation" caption="Operação"/> 
                <Item dataField="sefSourceHost" caption="Host Origem"/> 
                <Item dataField="sefSourceDir" caption="Diretório Origem"/> 
                <Item dataField="sefSourceFile" caption="Arquivo Origem"/> 
                <Item dataField="sefDestHost" caption="Host Destino"/> 
                <Item dataField="sefDestDir" caption="Diretório Destino"/> 
                <Item dataField="sefDestFile" caption="Arquivo Destino"/> 
                <Item dataField="sefBackupDir" caption="Diretório Backup"/> 
                <Item dataField="sefShare" caption="Share Origem"/> 
                <Item dataField="sefDestShare" caption="Share Destino"/> 
                <Item dataField="sefDeleteSource" caption="Del?"/> 
                <Item dataField="sefAppend" caption="App?"/> 
                <Item dataField="sefSourceFtpUser" caption="Usr. Ftp. Orig."/> 
                <Item dataField="sefDestFtpUser" caption="Usr. Ftp. Dest."/> 
                <Item dataField="sefModule" caption="Module"/> 
            </Form>
            </Editing>
                <Column dataField="sefCompany"caption="Empresa">
                   <Lookup
                    dataSource={companies}
                    displayExpr="company_id"/></Column> 
                <Column dataField="sefId" caption="ID" />
                <Column dataField="sefOperation" caption="Operação"/> 
                <Column dataField="sefSourceHost" caption="Host Origem"/> 
                <Column dataField="sefSourceDir" caption="Diretório Origem"/> 
                <Column dataField="sefSourceFile" caption="Arquivo Origem"/> 
                <Column dataField="sefDestHost" caption="Host Destino"/> 
                <Column dataField="sefDestDir" caption="Diretório Destino"/> 
                <Column dataField="sefDestFile" caption="Arquivo Destino"/> 
                <Column dataField="sefBackupDir" caption="Diretório Backup"/> 
                <Column dataField="sefShare" caption="Share Origem"/> 
                <Column dataField="sefDestShare" caption="Share Destino"/> 
                <Column dataField="sefUserAlt" caption="Nome Alt."/> 
                <Column dataField="sefDateAlt" dataType="datetime" format="dd/MM/yyyy HH:mm" caption="Data Alt."/> 
                <Column dataField="sefSourceFtpUser" caption="Usr. Ftp. Orig."/> 
                <Column dataField="sefDestFtpUser" caption="Usr. Ftp. Dest."/> 
                <Column dataField="sefModule" caption="Module"/> 
                <Column dataField="sefDeleteSource" caption="Del?"/> 
                <Column dataField="sefAppend" caption="App?"/> 
                <Selection mode="single"/>
                </DataGrid>
      </div>       
 )
}
export default ExchangeArchives ;