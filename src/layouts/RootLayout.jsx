import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr) " bg="gray.50">
            <GridItem
            as="aside"
            colSpan={{base:6,lg:2,xl:1}}
            bg="purple.400"
            minH={{lg:"100vh"}}
            p="30px">

      <Sidebar/>
      </GridItem>

      <GridItem
      as="main"
      colSpan={{base:6,lg:4,xl:5}}
      padding="40px">
      <Navbar/>
      <Outlet />
      </GridItem>
    </Grid>
  )
}

export const TasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks")
  return res.json()
}