import React from 'react';
import DataGrid, { Column, Editing, Popup, FilterRow, HeaderFilter, Selection, FormItem} from 'devextreme-react/data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';

function GroupsDetail(dado){
const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/MvSysSemEmailGroupMember/get/${dado.data.data.segGroupName}/`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
    },[ dado.data.data.segCompany,dado.data.data.segGroupName])


    const postRow = data => {
        delete delete data.data.__KEY__;
        data.data['semCompany'] = `${dado.data.data.segCompany}`;
        data.data['semGroupName'] = `${dado.data.data.segGroupName}`;
        //data.data['peName'] = 'Teste de envio';
        var newjson = data.data;
        console.log(newjson)
        axios.post(`${process.env.REACT_APP_BASE_URL}/TbSysSemEmailGroupMember`, newjson).catch(e => console.log(e));
    }
   const putRow = data => {
    console.log(data.data)
    delete data.data.__KEY__;
    axios.put(`${process.env.REACT_APP_BASE_URL}/TbSysSemEmailGroupMember/put/${data.data.semCompany}/${data.data.semGroupName}/${data.data.semGroupMember}`, data.data).catch(e => console.log(e));}
    const deleteRow = data =>  { console.log(data);
    axios.delete(`${process.env.REACT_APP_BASE_URL}/TbSysSemEmailGroupMember/delete/${data.data.semCompany}/${data.data.semGroupName}/${data.data.semGroupMember}`)}


    return(
        <div className='master-detail-caption'>
            <DataGrid
            dataSource={posts}
            columnAutoWidth={true}
            filterSyncEnabled={true}
            repaintChangesOnly={true}
            highlightChanges={true}
            showBorders={true}
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
            useIcons={true}/>
            <Popup title="Editing Row from Exchange Operations" showTitle={true} width={700} height={525} />
                
                <Column dataField="semGroupMember" caption="Membro"/>
                <Column dataField="peName" caption="Nome" ><FormItem visible={false}></FormItem></Column>
                <Column dataField="semMemberDomain" caption="Domínio (sem @)"/>
                <Selection mode="single"/>             
            </DataGrid>
        </div>
    )
}
export default GroupsDetail;

/*const semCompany = [
    {companyID: 11},
    {companyID: 19},
    {companyID: 99}
]
<Column dataField="semCompany" caption="Empr" visible={false}>
                    <Lookup
                    dataSource={semCompany}
                    valueExpr="companyID"
                    displayExpr="companyID"
                    />
                </Column> */