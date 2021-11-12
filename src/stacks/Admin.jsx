import { Button } from 'native-base';
import  React , {useContext, useState} from 'react';
import { DataTable } from 'react-native-paper';
import { AuthContext } from '../contexts/Auth/auth';
const optionsPerPage = [2, 3, 4];

const Admin = () =>{
    const [page, setPage] = useState(0);
    const {user,setUser} = useContext(AuthContext)
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
      }, [itemsPerPage]);
const changeStatus = (key) =>{
    
    
    setUser(user.map((val)=>{
      if(val.id === key){
        console.log({idsss : val.id})
        console.log(val.isAdmin)
        return {...val, isAdmin : !val.isAdmin}
      }else{
        return val;
      }
    })
    )
    
}
    return <>
   <DataTable>
      <DataTable.Header>
        <DataTable.Title>#id</DataTable.Title>
        <DataTable.Title numeric>Fname</DataTable.Title>
        <DataTable.Title numeric>Status</DataTable.Title>
        <DataTable.Title numeric></DataTable.Title>
      </DataTable.Header>

{user?.map((val, id)=>{
    return <DataTable.Row key={id}>
        <DataTable.Cell>{val.id}</DataTable.Cell>
        <DataTable.Cell numeric>{val.fname}</DataTable.Cell>
        <DataTable.Cell numeric>{val.isAdmin ? "Admin" : "user"}</DataTable.Cell>
        <DataTable.Cell numeric><Button bg="#6200ee" onPress={() =>{changeStatus(val.id)}}>Promote</Button></DataTable.Cell>
      </DataTable.Row>

})}
      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
    </>

}

export default Admin ;