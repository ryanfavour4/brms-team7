import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Papa from "papaparse";
import ToastProp from  "../common/modal/Toast"
import Button from "../common/Button/Button"
import { setStoreTable } from "../../store/slices/routesSlice";

export default function CsvToJson() {
  const { handleUpload, handleSubmit, success } = useCsvToJson();

  return (
    <div className="border-2 bg-brand-orange p-4 rounded-lg mb-20">
      {success && <ToastProp success={success} />}
      <div className="flex">
        <div className="flex gap-4 items-center">
          <input
            type="file"
            name="csv-upload"
            accept=".csv"
            className="border rounded-md min-w-[400px] p-2"
            onChange={(e) => handleUpload(e)}
            id="csv-upload"
          />
          <Button disabled={success} onClick={() => handleSubmit()}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}




// ??? === CONVERTS CSV TO JSON OBJECTS AND UPDATES STORE CONTROLLER
// !!! === CONVERTS CSV TO JSON OBJECTS AND UPDATES STORE CONTROLLER
export function useCsvToJson() {
  const dispatch = useDispatch();
  const REQUIRED_TABLE_COLUMN = [
    "id",
    "name",
    "locationTitle",
    "busStop",
    "status",
    "title",
    "description"
  ];
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [success, setSuccess] = useState(false);
  const [formattedCsv, setFormattedCsv] = useState(null);

  const handleUpload = (event) => {
    setSuccess(false);
    if (event.target.files[0]) {
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (result) {
          const valuesArray = [];

          result.data.map((data) => {
            valuesArray.push(Object.values(data));
            setColumns(Object.keys(result.data[0]));
            return setFormattedCsv(result.data);
          });
          setRows(valuesArray);
        }
      });
    }
  };

  const handleSubmit = () => {
    if (!columns.length) {
      alert("SELECT A FILE BEFORE UPLOADING");
      return;
    }
    if (
      JSON.stringify(REQUIRED_TABLE_COLUMN).trim() !==
      JSON.stringify(columns).trim()
    ) {
      alert('THIS CSV DON"T MATCH BRMS REQUIREMENTS');
      return;
    }
    dispatch(setStoreTable({ storeColumn: columns, storeRow: rows }));
    console.log(success);
    setSuccess(true);
  };

  return { formattedCsv, columns, success, rows, handleUpload, handleSubmit };
}
