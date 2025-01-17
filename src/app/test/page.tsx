"use client"
import ChartBar from "@/components/display/charts/barchart";
import ChartLine from "@/components/display/charts/lineChart";
import ChartPie from "@/components/display/charts/piechart";
import CustomTable from "@/components/display/table";
import CustomModal from "@/components/modal/cutomModal";
import CustomizedSteppers from "@/components/stepper/customStepper";
import StepProgress from "@/components/stepper/stepper";
import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";

export default function TestPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
    
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
      <Container maxWidth="lg" sx={{display:"flex",justifyContent:"center",alignContent:"center", flexDirection:"column", gap:1 ,marginBottom:1}}>
          <CustomTable
            //   columns={columns}
            //   data={data}
        url='https://jsonplaceholder.typicode.com/users'
      />
      <Button variant="contained" onClick={handleOpen}>
        Open Modal
      </Button>
      {/* <StepProgress /> */}
      <CustomizedSteppers />
      <ChartBar />
      <ChartLine />
      <ChartPie />
      <CustomModal
        open={isOpen}
        onClose={handleClose}
        title="Example Modal"
        actions={
          <>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleClose}>
              Confirm
            </Button>
          </>
        }
        maxWidth="sm"
      >
        <Typography variant="body1">
          This is a reusable modal component with customizable content and
          actions.
        </Typography>
      </CustomModal>
     </Container>
  )
}