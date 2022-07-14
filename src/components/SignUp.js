import { Button, Container, Grid, Input, InputLabel, TextField, Typography } from '@mui/material'

import React, { useState } from 'react'

const SignUp = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameErr, setNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)


    const sty = () => {
        return ({
            margin: '0.5em',
            width: '50%'
        })
    }

    const handleSubmit = () => {
        if (name) {
            setNameErr(false)
        } else {
            setNameErr(true)
        }

        if (email) {
            setEmailErr(false)
        } else {
            setEmailErr(true)
        }

        if (password) {
            setPasswordErr(false)
        } else {
            setPasswordErr(true)
        }

        console.log(name, email, password)
    }



    return (
        <Container>
            <form sx={{ width: '50%' }}>
                <Typography variant='h3' sx={{ padding: '0.5em' }}>Register</Typography>
                <Grid container direction={'column'} >
                    <Grid item >
                        <TextField variant='outlined' error={nameErr} type={'text'} value={name} onChange={(e) => { setName(e.target.value) }} label='Name' sx={sty} required />
                    </Grid>
                    <Grid item >
                        <TextField variant='outlined' error={emailErr} type={'email'} value={email} onChange={(e) => { setEmail(e.target.value) }} label='Email' sx={sty} required />
                    </Grid>
                    <Grid item >
                        <TextField variant='outlined' error={passwordErr} type={'password'} value={password} onChange={(e) => { setPassword(e.target.value) }} label='Password' sx={sty} required />
                    </Grid>
                    <Grid item>
                        <Button size='large' variant='contained' onClick={handleSubmit} sx={{ margin: '1em' }}>Submit</Button>
                    </Grid>
                </Grid>
            </form >
        </Container>


    )
}

export default SignUp