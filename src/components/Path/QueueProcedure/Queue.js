import React, {useEffect, useState} from 'react';
import DataGrid, { Column, FilterRow, HeaderFilter, Editing, Popup, Form, Selection, Lookup} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import axios from 'axios';

const Queue = () => {
  const Datetime_Scheduled = [
    {date_interval: 1, time: '5 minutos'},
    {date_interval: 2, time: '10 minutos'},
    {date_interval: 3, time: '15 minutos'},
    {date_interval: 4, time: '20 minutos'},
    {date_interval: 5, time: '25 minutos'},
    {date_interval: 6, time: '30 minutos'},
    {date_interval: 7, time: '35 minutos'},
    {date_interval: 8, time: '40 minutos'},
    {date_interval: 9, time: '45 minutos'},
    {date_interval: 10, time: '50 minutos'},
    {date_interval: 11, time: '55 minutos'},
    {date_interval: 12, time: '1 hora'},
    {date_interval: 13, time: '2 horas'},
    {date_interval: 14, time: '3 horas'},
    {date_interval: 15, time: '4 horas'},
    {date_interval: 16, time: '5 horas'},
    {date_interval: 17, time: '6 horas'},
    {date_interval: 18, time: '7 horas'},
    {date_interval: 19, time: '8 horas'},
    {date_interval: 20, time: '9 horas'},
    {date_interval: 21, time: '10 horas'},
    {date_interval: 22, time: '11 horas'},
    {date_interval: 23, time: '12 horas'},
    {date_interval: 24, time: '1 dia e 5 minutos'},
    {date_interval: 25, time: '1 dia e 10 minutos'},
    {date_interval: 26, time: '1 dia e 15 minutos'},
    {date_interval: 27, time: '1 dia e 20 minutos'},
    {date_interval: 28, time: '1 dia e 25 minutos'},
    {date_interval: 29, time: '1 dia e 30 minutos'},
    {date_interval: 30, time: '1 dia e 35 minutos'},
    {date_interval: 31, time: '1 dia e 40 minutos'},
    {date_interval: 32, time: '1 dia e 45 minutos'},
    {date_interval: 33, time: '1 dia e 50 minutos'},
    {date_interval: 34, time: '1 dia e 55 minutos'},
    {date_interval: 35, time: '1 dia e 1 hora'},
    {date_interval: 36, time: '1 dia e 2 horas'},
    {date_interval: 37, time: '1 dia e 3 horas'},
    {date_interval: 38, time: '1 dia e 4 horas'},
    {date_interval: 39, time: '1 dia e 5 horas'},
    {date_interval: 40, time: '1 mes'},
    {date_interval: 41, time: '2 meses'},
    {date_interval: 42, time: '1 minuto'},
];

    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BASE_URL}/MvSysSjqJobQueue`)
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.log(error))
    },[])
 
  const deleteRow = data => axios.delete(`${process.env.REACT_APP_BASE_URL}/MvSysSjqJobQueue/delete/${data.key}`).catch(e => console.log(e));

  const putRow = (data) => { 
    var element = data.data
    data.data = convertToString(element);
    data.data['sjqInterval'] = data.data.sjqInterval.date_interval
    console.log(data.data)
    //delete delete data.data.sjqMessage;
    //delete delete data.data.sjqDatetimeCreated;
    //delete delete data.data.sjqDatetimeUpdated;
    //delete delete data.data.sjqUserCreated;
    //delete delete data.data.sjqUserUpdated;
    //delete delete data.data.sjqStatus;
    //delete delete data.data.sjqJob
    console.log(data.data)
    //axios.put(`${process.env.REACT_APP_BASE_URL}/MvSysSjqJobQueue/put/${data.key}`, data.data).catch(e => console.log(e));
  }
  const postRow = data => {
    var element = data.data
    data.data = convertToString(element);
    console.log(data)
    console.log(data.data)
    axios.post(`${process.env.REACT_APP_BASE_URL}/MvSysSjqJobQueue`, data.data).catch(e => console.log(e));
  }

  //Convert Y to 1 and N to 0
  const convertToBool = (data) => { 

    data.forEach(element => {
      if(element.sjqSunday === "Y"){
        element.sjqSunday = true;
      }else if(element.sjqSunday === "N"){
        element.sjqSunday = false;
      }
      if(element.sjqMonday === "Y"){
        element.sjqMonday = true;
      }else if(element.sjqMonday === "N"){
        element.sjqMonday = false;
      }
      if(element.sjqTuesday === "Y"){
        element.sjqTuesday = true;
      }else if(element.sjqTuesday === "N"){
        element.sjqTuesday = false;
      }
      if(element.sjqWednesday === "Y"){
        element.sjqWednesday = true;
      }else if(element.sjqWednesday === "N"){
        element.sjqWednesday = false;
      }
      if(element.sjqThursday === "Y"){
        element.sjqThursday = true;
      }else if(element.sjqThursday === "N"){
        element.sjqThursday = false;
      }
      if(element.sjqFriday === "Y"){
        element.sjqFriday = true;
      }else if(element.sjqFriday === "N"){
        element.sjqFriday = false;
      }
      if(element.sjqSaturday === "Y"){
        element.sjqSaturday = true;
      }else if(element.sjqSaturday === "N"){
        element.sjqSaturday = false;
      }
      if(element.sjqFollowedByMail === "Y"){
        element.sjqFollowedByMail = true;
      }else if(element.sjqFollowedByMail === "N"){
        element.sjqFollowedByMail = false;
      }
      if(element.sjqStatus === "S"){
        element.sjqStatus = "Scheduled";
      }else if(element.sjqStatus === "C"){
        element.sjqStatus = "Completed";
      } else if (element.sjqStatus === "R"){
        element.sjqStatus = "Running";
      }
      if(element.sjqInterval ==="1"){ element.sjqInterval="5 minutos";}
      else if(element.sjqInterval ==="2"){ element.sjqInterval="10 minutos";}
      else if(element.sjqInterval ==="3"){ element.sjqInterval="15 minutos";}
      else if(element.sjqInterval ==="4"){ element.sjqInterval="20 minutos";}
      else if(element.sjqInterval ==="5"){ element.sjqInterval="25 minutos";}
      else if(element.sjqInterval ==="6"){ element.sjqInterval="30 minutos";}
      else if(element.sjqInterval ==="7"){ element.sjqInterval="35 minutos";}
      else if(element.sjqInterval ==="8"){ element.sjqInterval="40 minutos";}
      else if(element.sjqInterval ==="9"){ element.sjqInterval="45 minutos";}
      else if(element.sjqInterval ==="10"){ element.sjqInterval="50 minutos";}
      else if(element.sjqInterval ==="11"){ element.sjqInterval="55 minutos";}
      else if(element.sjqInterval ==="12"){ element.sjqInterval="1 hora";}
      else if(element.sjqInterval ==="13"){ element.sjqInterval="2 horas";}
      else if(element.sjqInterval ==="14"){ element.sjqInterval="3 horas";}
      else if(element.sjqInterval ==="15"){ element.sjqInterval="4 horas";}
      else if(element.sjqInterval ==="16"){ element.sjqInterval="5 horas";}
      else if(element.sjqInterval ==="17"){ element.sjqInterval="6 horas";}
      else if(element.sjqInterval ==="18"){ element.sjqInterval="7 horas";}
      else if(element.sjqInterval ==="19"){ element.sjqInterval="8 horas";}
      else if(element.sjqInterval ==="20"){ element.sjqInterval="9 horas";}
      else if(element.sjqInterval ==="21"){ element.sjqInterval="10 horas";}
      else if(element.sjqInterval ==="22"){ element.sjqInterval="11 horas";}
      else if(element.sjqInterval ==="23"){ element.sjqInterval="12 horas";}
      else if(element.sjqInterval ==="24"){ element.sjqInterval="1 dia e 5 minutos";}
      else if(element.sjqInterval ==="25"){ element.sjqInterval="1 dia e 10 minutos";}
      else if(element.sjqInterval ==="26"){ element.sjqInterval="1 dia e 15 minutos";}
      else if(element.sjqInterval ==="27"){ element.sjqInterval="1 dia e 20 minutos";}
      else if(element.sjqInterval ==="28"){ element.sjqInterval="1 dia e 25 minutos";}
      else if(element.sjqInterval ==="29"){ element.sjqInterval="1 dia e 30 minutos";}
      else if(element.sjqInterval ==="30"){ element.sjqInterval="1 dia e 35 minutos";}
      else if(element.sjqInterval ==="31"){ element.sjqInterval="1 dia e 40 minutos";}
      else if(element.sjqInterval ==="32"){ element.sjqInterval="1 dia e 45 minutos";}
      else if(element.sjqInterval ==="33"){ element.sjqInterval="1 dia e 50 minutos";}
      else if(element.sjqInterval ==="34"){ element.sjqInterval="1 dia e 55 minutos";}
      else if(element.sjqInterval ==="35"){ element.sjqInterval="1 dia e 1 hora";}
      else if(element.sjqInterval ==="36"){ element.sjqInterval="1 dia e 2 horas";}
      else if(element.sjqInterval ==="37"){ element.sjqInterval="1 dia e 3 horas";}
      else if(element.sjqInterval ==="38"){ element.sjqInterval="1 dia e 4 horas";}
      else if(element.sjqInterval ==="39"){ element.sjqInterval="1 dia e 5 horas";}
      else if(element.sjqInterval ==="40"){ element.sjqInterval="1 mes";}
      else if(element.sjqInterval ==="41"){ element.sjqInterval="2 meses";}
      else if(element.sjqInterval ==="42"){ element.sjqInterval="1 minuto";}
    });
    return data;
  }

  //Convert 1 to Y and 0 to N
  function convertToString(element){
     if(element.sjqSunday === true){
        element.sjqSunday = "Y";
      }else if(element.sjqSunday === false){
        element.sjqSunday = "N";
      }
      if(element.sjqMonday === true){
        element.sjqMonday = "Y";
      }else if(element.sjqMonday === false){
        element.sjqMonday = "N";
      }
      if(element.sjqTuesday === true){
        element.sjqTuesday = "Y";
      }else if(element.sjqTuesday === false){
        element.sjqTuesday = "N";
      }
      if(element.sjqWednesday === true){
        element.sjqWednesday = "Y";
      }else if(element.sjqWednesday === false){
        element.sjqWednesday = "N";
      }
      if(element.sjqThursday === true){
        element.sjqThursday = "Y";
      }else if(element.sjqThursday === false){
        element.sjqThursday = "N";
      }
      if(element.sjqFriday === true){
        element.sjqFriday = "Y";
      }else if(element.sjqFriday === false){
        element.sjqFriday = "N";
      }
      if(element.sjqSaturday === true){
        element.sjqSaturday = "Y";
      }else if(element.sjqSaturday === false){
        element.sjqSaturday = "N";
      }
      if(element.sjqFollowedByMail === true){
        element.sjqFollowedByMail = "Y";
      }else if(element.sjqFollowedByMail === false){
        element.sjqFollowedByMail = "N";
      }
      if(element.sjqStatus === "Scheduled"){
        element.sjqStatus = "S";
      }else if(element.sjqStatus === "Completed"){
        element.sjqStatus = "C";
      } else if(element.sjqStatus === "Running"){
        element.sjqStatus = "R";
      }
      return(element);
  }
  return(
      <div> <span className="pageTitle">
        <strong>Job Manager</strong>
        </span>
        <DataGrid 
        id="gridContainer"
          noDataText='No data to display. Please check with Support team'
          dataSource={convertToBool(posts)}
          keyExpr="sjqProcedureName"
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
            <Popup title="Editing Row from Queue" showTitle={true} width={700} height={525} />
            <Form>
                <Item dataField="sjqProcedureName"  caption="Procedure"/> 
                <Item dataField="sjDescription"/>
                <Item dataField="sjqDatetimeScheduled" dataType="datetime" format="yyyy-MM-dd'T'HH:mm:ss" caption="Datetime Scheduled"/>
                <Item dataField="sjqInterval" caption="Interval">
                  <Lookup
                    dataSource={Datetime_Scheduled}
                    valueExpr="sjqInterval"
                    displayExpr="time"/>
                  
                </Item>
                <Item dataField="sjqSunday" caption="Sunday"/>
                <Item dataField="sjqMonday" caption="Monday"/>
                <Item dataField="sjqTuesday" caption="Tuesday"/>
                <Item dataField="sjqWednesday" caption="Wednesday"/>
                <Item dataField="sjqThursday" caption="Thursday"/>
                <Item dataField="sjqFriday" caption="Friday"/>
                <Item dataField="sjqSaturday" caption="Saturday"/>
                <Item dataField="sjqFollowedByMail" caption="FollowedByMail"/>
            </Form>
            </Editing>
                <Column dataField="sjqProcedureName"  caption="Procedure" /> 
                <Column dataField="sjDescription"/>
                <Column dataField="sjqJob" dataType="number" caption="Job"/>
                <Column dataField="sjqDatetimeScheduled" dataType="datetime" format="yyyy-MM-dd'T'HH:mm:ss" caption="Datetime Scheduled"/>
                <Column dataField="sjqStatus" caption="Status"/>
                <Column dataField="sjqInterval" caption="Interval">
                 <Lookup
                    dataSource={Datetime_Scheduled}
                    //valueExpr="sjqInterval"
                    displayExpr="time"/>
                </Column>
                <Column dataField="sjqSunday" caption="Sunday"/>
                <Column dataField="sjqMonday" caption="Monday"/>
                <Column dataField="sjqTuesday" caption="Tuesday"/>
                <Column dataField="sjqWednesday" caption="Wednesday"/>
                <Column dataField="sjqThursday" caption="Thursday"/>
                <Column dataField="sjqFriday" caption="Friday"/>
                <Column dataField="sjqSaturday" caption="Saturday"/>
                <Column dataField="sjqMessage" caption="Message"/> 
                <Column dataField="sjqUserCreated" caption="UserCreated"/> 
                <Column dataField="sjqDatetimeCreated" dataType="datetime" format="yyyy-MM-dd'T'HH:mm:ss" caption="DateTime Created"/>
                <Column dataField="sjqUserUpdated" caption="User Updated"/> 
                <Column dataField="sjqDatetimeUpdated" dataType="datetime" format="yyyy-MM-dd'T'HH:mm:ss" caption="Datetime Updated"/>
                <Column dataField="sjqFollowedByMail" caption="FollowedByMail"/>
                <Selection mode="single"/>
                
        </DataGrid>
      </div>       
  )
}
export default Queue ;

/*
                <Item dataField="sjqTotalIteration" dataType="number" caption="Total Iteration"/>
                <Item dataField="sjqCurrentIteration" dataType="number" caption="Current Iteration"/>
                <Column dataField="sjqTotalIteration" dataType="number" caption="Total Iteration"/>
                <Column dataField="sjqCurrentIteration" dataType="number" caption="Current Iteration"/>
                
*/