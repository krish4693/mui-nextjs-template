import CustomTable from "@/components/display/table";
import { Container } from "@mui/material";

export default function TestPage() {
    
  // type DataType = typeof data[number]
  // const columns: Array<{ id: keyof DataType; label: string }> = [
  //   { id: 'id', label: 'ID'},
  //   { id: 'name', label: 'Full Name'},
  //   { id: 'email', label: 'Email Address'},
  //   { id: 'department', label: 'Department'},
  //   { id: 'status', label: 'Status'},
  //   { id: 'joinDate', label: 'Join Date'}
  // ];
    
  return (
      <Container maxWidth="lg" sx={{display:"flex",justifyContent:"center",alignContent:"center"}}>
          <CustomTable
            //   columns={columns}
            //   data={data}
              url='https://jsonplaceholder.typicode.com/users' />
     </Container>
  )
}