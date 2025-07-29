// components/DropZone.tsx
import {Accept, useDropzone } from "react-dropzone";

interface DropZoneProps {
  accept: Accept;
  multiple: boolean;
  onFiles: (files: File[]) => void;
  label: string;
}

export function DropZone({ accept, multiple, onFiles, label }: DropZoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    multiple,
    onDrop: onFiles,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed p-6 rounded-md text-center cursor-pointer transition ${
        isDragActive ? "bg-blue-100 border-blue-400" : "bg-gray-50"
      }`}
    >
      <input {...getInputProps()} />
      <p className="text-sm text-muted-foreground">
        {label} (Drag & drop or click to upload)
      </p>
    </div>
  );
}
