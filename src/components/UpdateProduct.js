import { Button, Container, TextField, Box } from '@mui/material'
import { IconButton, Table, TableBody, TableContainer, TableHead, TableCell, TableRow, Paper, Typography } from '@mui/material'
import Collapse from '@mui/material/Collapse';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import React, { Fragment, useState } from 'react'



const UpdateProduct = () => {
    const [key, setKey] = useState('')
    const [err, setErr] = useState(false)
    const [products, setProducts] = useState([])
    const [showRes, setShowRes] = useState(false)
    const [open, setOpen] = useState(false);
    const [rowNo, setRowNo] = useState()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [company, setCompany] = useState('')


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
                setShowRes(true)
            } else {
                setProducts(result)
                setShowRes(true)
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

    const sty = () => {
        return ({
            margin: '0.5em',
            width: '30%'
        })
    }

    const showEditForm = async (id) => {
        let data = await fetch('http://127.0.0.1:6969/search-id/' + id, {
            method: "POST"
        })
        let result = await data.json()
        if (result.result) {
            alert('Something went wrong')
        } else {
            setName(result[0].name)
            setPrice(result[0].price)
            setCompany(result[0].company)
        }
    }


    const updateProduct = async (id) => {
        let data = await fetch('http://127.0.0.1:6969/update-product/' + id, {
            method: "POST",
            body: JSON.stringify({ name, price, company }),
            headers: {
                "Content-type": "application/json"
            }
        })
        let result = await data.json()
        if (result.modifiedCount) {
            searchProduct()
            alert('Updated')
        }
    }


    const showCom = () => {
        return (products.result ?
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
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((e, index) => {
                                return (<Fragment key={e._id}>
                                    <TableRow  >
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{e.name}</TableCell>
                                        <TableCell>{e.price}</TableCell>
                                        <TableCell>{e.company}</TableCell>
                                        <TableCell width={50} ><IconButton onClick={() => { setOpen(!open); setRowNo(index); showEditForm(e._id) }} color='secondary'><EditIcon size='large' sx={{ cursor: 'pointer' }} /></IconButton></TableCell>
                                        <TableCell width={50} ><IconButton onClick={() => deleteItem(e._id)} color='error'><DeleteOutlineIcon size='large' sx={{ cursor: 'pointer' }} /></IconButton></TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                            <Collapse in={open && rowNo === index} timeout="auto" unmountOnExit>
                                                <Box sx={{ margin: 1, textAlign: 'center' }}>
                                                    <Typography variant="h6" gutterBottom component="div" color='secondary'>
                                                        Edit The Product
                                                    </Typography>
                                                    <TextField variant='outlined' color='secondary' type={'text'} onChange={(e) => setName(e.target.value)} value={name} label='Product Name' sx={sty} required />
                                                    <TextField variant='outlined' color='secondary' type={'text'} onChange={(e) => setPrice(e.target.value)} value={price} label='Product Price' sx={sty} required />
                                                    <TextField variant='outlined' color='secondary' type={'text'} onChange={(e) => setCompany(e.target.value)} value={company} label='Company' sx={sty} required />
                                                    <Button variant='contained' onClick={() => updateProduct(e._id)} color='secondary' size='large' sx={{ float: 'right', width: '10%', margin: '2em 0', marginRight: '5em' }}>Update</Button>
                                                </Box>
                                            </Collapse>
                                        </TableCell>
                                    </TableRow>
                                </Fragment>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box >
        )
    }


    return (
        <Container>
            <Box sx={{ display: 'flex' }}>
                <TextField onKeyPress={(ev) => ev.key === 'Enter' ? searchProduct() : null} variant='outlined' onChange={(e) => { if (e === '') { setErr(true) } else { setKey(e.target.value); setErr(false) } }} label={err ? 'Enter a valid product to search...' : 'Search...'} error={err} sx={{ width: '50%' }} value={key} />
                <IconButton onClick={searchProduct} size='large' ><SearchIcon fontSize='large' color='primary' /></IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Button onClick={() => { setShowRes(false); setKey('') }}>Clear Search</Button>
            </Box>
            <Box>
                {showRes ? showCom() : null}
            </Box>
        </Container >
    )
}

export default UpdateProduct