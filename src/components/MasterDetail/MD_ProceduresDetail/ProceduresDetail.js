import React from 'react';
import DataGrid, { Column, Editing, Popup, FilterRow, HeaderFilter, Selection, Lookup, Item, Form } from 'devextreme-react/data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProceduresDetail =(data) => {
    const dataType = [
        {data_type: 'TIMESTAMP'},
        {data_type: 'VARCHAR'},
        {data_type: 'VARCHAR2'},
        {data_type: 'BLOB'},
        {data_type: 'BOOLEAN'},
        {data_type: 'NUMBER'},
        {data_type: 'CHAR'},
        {data_type: 'DATE'},
        {data_type: 'DATETIME'},
        {data_type: 'DEC'},
        {data_type: 'DECIMAL'},
        {data_type: 'DOUBLE'},
        {data_type: 'DOUBLE PRECISION'},
        {data_type: 'FLOAT'},
        {data_type: 'INT'},
        {data_type: 'INTEGER'},
        {data_type: 'LONG'},
        {data_type: 'LONG RAW'},
        {data_type: 'BINARY_INTEGER'},
        {data_type: 'CHAR VARYING'},
        {data_type: 'CHARACTER'},
        {data_type: 'CHARACTER VARYING'},
        {data_type: 'CLOB'},
        {data_type: 'LONG VARCHAR'},
        {data_type: 'NATURAL'},
        {data_type: 'NCHAR'},
        {data_type: 'NCLOB'},
        {data_type: 'NVARCHAR2'},
        {data_type: 'NUMERIC'},
        {data_type: 'PLS_INTEGER'},
        {data_type: 'RAW'},
        {data_type: 'SAMLLINT'}

    ]
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/TbSysSjpJobParameter/list/${data.data.data.sjProcedureName}`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
    },[data.data.data.sjProcedureName])


    const postRow = data => {
        
    data.data['sjpDataType'] = data.data.sjpDataType.data_type;
        delete data.data.__KEY__
        console.log(data.data)
        axios.post(`${process.env.REACT_APP_BASE_URL}/TbSysSjpJobParameter`, data.data).catch(e => console.log(e));}
    const putRow = data =>  {
        delete data.data.__KEY__;
        axios.put(`${process.env.REACT_APP_BASE_URL}/TbSysSjpJobParameter/put/${data.data.sjpProcedureName}/${data.data.sjpParameterName}`, data.data).catch(e => console.log(e));
    }
    const deleteRow = data => {
        console.log(data.data.sjpProcedureName)
        console.log(data.data.sjpParameterName)
        axios.delete(`${process.env.REACT_APP_BASE_URL}/TbSysSjpJobParameter/delete/${data.data.sjpProcedureName}/${data.data.sjpParameterName}`).catch(e => console.log(e));
    }

    return(
        <div className='master-detail-caption'>
            <DataGrid
            noDataText='Procedures does not have params'
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
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true}
            useIcons={true}>

            <Popup title="Editing Row from Exchange Operations" showTitle={true} width={700} height={525} />
            <Form>
                <Item dataField="sjpDatatype"caption="DataType"/>
            </Form>
            </Editing>
            <Column dataField="sjpDatatype"caption="Data Type">
                   <Lookup
                    dataSource={dataType}
                    displayExpr="data_type"/></Column>
                <Column dataField="sjpParameterName" caption="Parameter Name"/>
                <Column dataField="sjpDescription" caption="Description"/>
                <Column dataField="sjpSequence" caption="Sequence"/>
                <Column dataField="sjpProcedureName" caption="Procedure Name" visible={false}/>
                <Column dataField="sjpUserCreated" caption="User Created" visible={false}/>
                <Selection mode="single"/>
            </DataGrid>
        </div>
    )
}
export default ProceduresDetail;
/* <Column dataField="sjpDatatype" caption="DataType"/> */