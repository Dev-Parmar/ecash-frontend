import React, { useState } from 'react'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)



    const navigate = useNavigate()

    const sty = () => {
        return ({
            margin: '0.5em',
            width: '50%'
        })
    }

    const handleSubmit = async () => {

        email ? setEmailErr(false) : setEmailErr(true)
        password ? setPasswordErr(false) : setPasswordErr(true)

        if (email && password) {

            let data = await fetch('http://127.0.0.1:6969/login', {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            let final = await data.json()
            if (final) {
                localStorage.setItem("user", JSON.stringify(final))
                navigate('/')
            } else {
                console.log('Error signing up')
            }

        } else {
            console.log('Please fill the fields')
        }


    }



    return (
        <Container>
            <form sx={{ width: '50%' }}>
                <Typography variant='h3' sx={{ padding: '0.5em' }}>Login</Typography>
                <Grid container direction={'column'} >
                    <Grid item >
                        <TextField variant='outlined' error={emailErr} type={'email'} value={email} onChange={(e) => { setEmail(e.target.value); if (e.target.value === '' || e.target.value === null) { setEmailErr(true) } else { setEmailErr(false) } }} label='Email' sx={sty} required />
                    </Grid>
                    <Grid item >
                        <TextField variant='outlined' error={passwordErr} type={'password'} value={password} onChange={(e) => { setPassword(e.target.value); if (e.target.value === '' || e.target.value === null) { setPasswordErr(true) } else { setPasswordErr(false) } }} label='Password' sx={sty} required />
                    </Grid>
                    <Grid item>
                        <Button size='large' variant='contained' onClick={handleSubmit} sx={{ margin: '1em' }}>Submit</Button>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6' sx={{ margin: '0.5em' }}>Don't have an Account! <Link to={'/signup'}>Create Here</Link></Typography>
                    </Grid>
                </Grid>
            </form >
        </Container>
    )
}

export default Login