"use client"
import ChartLine from "@/components/display/charts/lineChart";
import CustomTable from "@/components/display/table";
import { Box, Container } from "@mui/material";

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
      <Container maxWidth="lg" sx={{display:"flex",justifyContent:"center",alignContent:"center", flexDirection:"column", gap:2 }}>
          <CustomTable
            //   columns={columns}
            //   data={data}
        url='https://jsonplaceholder.typicode.com/users'
      />
      <Box sx={{ width:"100%", height:"100%"}}>
      <ChartLine />


      </Box>
     </Container>
  )
}