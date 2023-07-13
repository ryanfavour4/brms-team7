import React from "react";
import { admins } from "../store/slices/adminsSlice"
import { routesTable } from "../store/slices/routesSlice"
import { useSelector } from "react-redux";
import Table from "../components/app/Table";
import CsvToJson from "../components/app/CsvToJson";

export default function Page1() {
  const adminsData = useSelector(admins);
  const routeTable = useSelector(routesTable);
  console.log(routeTable);
  console.log(adminsData);

  return (
    <div className="min-h-screen p-6">
      <CsvToJson />
      <Table />
    </div>
  );
}
