import CustomTable from "@/components/display/table";
import { Box, Container } from "@mui/material";

export default function TestPage() {
         // Sample column headers
         const data = [
           {
             id: 1,
             name: 'John Smith',
             email: 'john.smith@example.com',
             department: 'Engineering',
             status: 'Active',
             joinDate: '2024-01-15'
           },
           {
             id: 2,
             name: 'Sarah Johnson',
             email: 'sarah.j@example.com',
             department: 'Marketing',
             status: 'Active',
             joinDate: '2024-02-01'
           },
           {
             id: 3,
             name: 'Michael Brown',
             email: 'm.brown@example.com',
             department: 'Sales',
             status: 'On Leave',
             joinDate: '2023-11-20'
           },
           {
             id: 4,
             name: 'Emma Wilson',
             email: 'e.wilson@example.com',
             department: 'HR',
             status: 'Active',
             joinDate: '2024-01-05'
           }
         ];
    
  type DataType = typeof data[number]
  const columns: Array<{ id: keyof DataType; label: string }> = [
    { id: 'id', label: 'ID'},
    { id: 'name', label: 'Full Name'},
    { id: 'email', label: 'Email Address'},
    { id: 'department', label: 'Department'},
    { id: 'status', label: 'Status'},
    { id: 'joinDate', label: 'Join Date'}
  ];
    
  return (
      <Container maxWidth="lg" sx={{display:"flex",justifyContent:"center",alignContent:"center"}}>
          <CustomTable columns={columns} data={data}/>
     </Container>
  )
}