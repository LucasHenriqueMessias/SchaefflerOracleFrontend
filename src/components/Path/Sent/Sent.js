import React, {useEffect, useState} from 'react';
import DataGrid, { Column, FilterRow, HeaderFilter, Editing, Popup, Selection, Paging } from 'devextreme-react/data-grid';
//import { Item } from 'devextreme-react/form';
import axios from 'axios';

const Sent = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
      fetch(`${process.env.REACT_APP_BASE_URL}/QvSysSsmSystemMail/list/0/0`)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error))
  },[])
  
  const recall = data => 
  {
    axios.get(`${process.env.REACT_APP_BASE_URL}/QvSysSsmSystemMail/list/0/${data}`).then(response => setPosts(response.data))
        .catch(error => console.log(error));
  };

  return(
      <div> 
        <span className="pageTitle">
        <strong>E-mails Enviados Pelo Sistema</strong>
        </span>
        <DataGrid 
          id="gridContainer"
          noDataText='No data to display. Please check with Support team'
          dataSource={posts}
          keyexpr={data => `${data.ssmUsername}-${data.ssmSentDatetime}-${data.ssmSubject}-${data.ssmMessage}`}
          filterSyncEnabled={true}
          repaintChangesOnly={true}
          highlightChanges={true}
          showBorders={true} 
          columnAutoWidth={true}
          >
          <FilterRow visible={true}/>
          <HeaderFilter visible={true} /> 
          <Editing
            mode="popup"
            allowUpdating={false}
            allowDeleting={false}
            allowAdding={false}
            useIcons={false}>
          <Popup title="Editing Row from E-mail Sent" showTitle={true} width={700} height={525} />
          </Editing>    
              <Column dataField="ssmUsername" caption="Usuário"/> 
              <Column dataField="ssmSentDatetime" dataType="datetime" format="dd/MM/yyyy HH:mm" caption="Data/Hora de envio"/>
              <Column dataField="ssmSubject" caption="Assunto"/> 
              <Column dataField="ssmMessage" caption="Mensagem"/>
              <Selection mode="single"/>
              <Paging  onPageIndexChange={recall}  />
        </DataGrid>
      </div>         
  )
}
export default Sent ;