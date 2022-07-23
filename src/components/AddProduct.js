import React, { useState, useEffect } from 'react'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const AddProduct = () => {



    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [company, setCompany] = useState('')
    const [nameErr, setNameErr] = useState(false)
    const [priceErr, setPriceErr] = useState(false)
    const [companyErr, setCompanyErr] = useState(false)


    const sty = () => {
        return ({
            margin: '0.5em',
            width: '50%'
        })
    }




    return (
        <Container>
            <form sx={{ width: '50%' }}>
                <Typography variant='h3' sx={{ padding: '0.5em' }}>Add Product</Typography>
                <Grid container direction={'column'} >
                    <Grid item >
                        <TextField variant='outlined' error={nameErr} type={'text'} value={name} onChange={(e) => { setName(e.target.value); if (e.target.value === '' || e.target.value === null) { setNameErr(true) } else { setNameErr(false) } }} label='Product Name' sx={sty} required />
                    </Grid>
                    <Grid item >
                        <TextField variant='outlined' error={priceErr} type={'text'} value={price} onChange={(e) => { setPrice(e.target.value); if (e.target.value === '' || e.target.value === null) { setPriceErr(true) } else { setPriceErr(false) } }} label='Product Price' sx={sty} required />
                    </Grid>
                    <Grid item >
                        <TextField variant='outlined' error={companyErr} type={'text'} value={company} onChange={(e) => { setCompany(e.target.value); if (e.target.value === '' || e.target.value === null) { setCompanyErr(true) } else { setCompanyErr(false) } }} label='Company' sx={sty} required />
                    </Grid>
                    <Grid item>
                        <Button size='large' variant='contained' sx={{ margin: '1em' }}>Add Product</Button>
                    </Grid>
                </Grid>
            </form >
        </Container>
    )
}

export default AddProduct