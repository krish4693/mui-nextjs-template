// filepath: components/FileInput.js
import React, { useState } from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { Box, Button, List, ListItem, ListItemText, IconButton, ButtonProps } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CloudUpload } from '@mui/icons-material';

interface FileInputProps<T extends FieldValues>
  extends UseControllerProps<T>{
    label?: string;
    buttonProps?: ButtonProps
}

const FileInput = <T extends FieldValues>({
    name,
    control,
    label = "upload file",
    buttonProps = { variant: 'contained', color: 'primary' },
}: FileInputProps<T>) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onChange([...(value??[]), ...newFiles]);
  };

  const handleRemoveFile = (index:number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onChange(newFiles);
  };

  return (
    <Box sx={{mt:2}}>
        <Button variant="contained" component="label" startIcon={<CloudUpload />} {...buttonProps}>
        {label}
        <input
          type="file"
          hidden
          accept="image/*"
          multiple
          onChange={handleFileChange}
          onBlur={onBlur}
        />
      </Button>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
      <List>
        {files.map((file, index) => (
          <ListItem key={index}>
            <ListItemText primary={file.name} />
            <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFile(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FileInput;