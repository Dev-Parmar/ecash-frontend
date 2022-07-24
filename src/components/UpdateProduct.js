import { Button, Container, TextField, Box } from '@mui/material'
import { IconButton, Table, TableBody, TableContainer, TableHead, TableCell, TableRow, Paper, Typography } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React, { useState } from 'react'



const UpdateProduct = () => {
    const [key, setKey] = useState('')
    const [err, setErr] = useState(false)
    const [products, setProducts] = useState([])


    const searchProduct = async () => {

        if (key.length === 0) {
            setErr(true)
        } else {
            let data = await fetch('http://127.0.0.1:6969/search/' + key, {
                method: "POST"
            })
            let result = await data.json()
            if (result.result) {
                setProducts(result)
            } else {
                setProducts(result)
            }
        }
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
            <Box sx={{ display: 'flex' }}>
                <TextField variant='outlined' onChange={(e) => { if (e === '') { setErr(true) } else { setKey(e.target.value); setErr(false) } }} label={err ? 'Enter a valid product to search...' : 'Search...'} error={err} sx={{ width: '50%' }} value={key} />
                <Button onClick={searchProduct} variant='contained'>Search Product</Button>
            </Box>
            {products.result ?
                <Box>
                    <Typography variant={'h5'} sx={{ marginTop: '2em' }}>No items found...</Typography>
                </Box>
                :
                <Box>
                    <Typography variant={'h5'} sx={{ marginTop: '2em' }}>Search Results ({products.length} items found)...</Typography>
                    <TableContainer component={Paper} sx={{ marginTop: '2em' }}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>Name of Product</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Company</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((e, index) => {
                                    return (
                                        <TableRow key={e._id}>
                                            <TableCell>{index + 1}</TableCell>
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
                </Box>}
        </Container >
    )
}

export default UpdateProduct