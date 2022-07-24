import React, { useEffect, useState } from 'react'
import { IconButton, Table, TableBody, TableContainer, TableHead, TableCell, TableRow, Paper, Container, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    })


    const getProducts = async () => {
        let data = await fetch('http://127.0.0.1:6969/products')
        let result = await data.json()
        setProducts(result)
    }

    const deleteItem = async (pid) => {
        let data = await fetch('http://127.0.0.1:6969/product/' + pid, {
            method: "DELETE"
        })
        let result = await data.json()
        if (result.deletedCount) {
            alert('Deleted')
        } else {
            alert('Error deleting')
        }
    }

    return (
        <Container>
            <Typography variant={'h5'} sx={{ marginTop: '5em' }}>Products Available</Typography>
            <TableContainer component={Paper} sx={{ marginTop: '2em' }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name of Product</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(e => {
                            return (
                                <TableRow key={e._id}>
                                    <TableCell>{e.name}</TableCell>
                                    <TableCell>{e.price}</TableCell>
                                    <TableCell>{e.company}</TableCell>
                                    <TableCell width={50} onClick={() => deleteItem(e._id)}><IconButton><DeleteOutlineIcon sx={{ cursor: 'pointer' }} /></IconButton></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Products