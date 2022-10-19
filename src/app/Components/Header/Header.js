import React from 'react';
import { Icon,Box, IconButton, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography  } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';

import firebase from '../../../firebase';
import Utils from '../../Utils/Utils';

import './Header.scss';

const Header = (props) => {

    const [open, setOpen] = React.useState(false);
    const [phoneNumber, setPhoneNumber] = React.useState(0);
    const [validPhoneNumber, setValidPhoneNumber] = React.useState(true);
    const [isUserSignedIn, setIsUserSignedIn] = React.useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleGoToHome=()=>{
        navigate("/home");
    }

    const handleOtpTrigget=()=>{
        var textInput = document.getElementById("phone").value;
        setPhoneNumber(textInput);
        var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        if (regex.test(textInput)) {
            handleOtpClick(textInput);
            setValidPhoneNumber(true);
        } else {
            console.log('Invalid international phone number');
            setValidPhoneNumber(false);
        }
    }

    const handleOtpClick =(num)=>{
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        firebase.auth().signInWithPhoneNumber(num,recaptcha).then(function(e){
            let code = prompt('Enter The OTP','');
            if(code == null) return;
            e.confirm(code).then(function(result){
                setIsUserSignedIn(true)
                document.querySelector('label').textContent = 'you are successfully signed in';
            }).catch((error)=>{
                setIsUserSignedIn(false)
                console.log(error);
            })
        })
    }
    

    return (
        <Box className="header-container">
            <Paper elevation={0} x className="row sticky-thc gx-0">
                <Box className='col-1'>
                <img src={Utils.getResource("logo.png", "images")} alt="Photograph of a chocolate cupcake." className="media" width="140" height="60" onClick={handleGoToHome} />

                </Box>
                <Box className='col-9'>
                   
                </Box>
                <Box className='d-flex col-2 header-third-col'>
                    <Box className="icon-container"><IconButton><Icon>search</Icon></IconButton></Box>
                    <Box className='login-button' onClick={handleClickOpen}>
                        Login
                    </Box>
                    <Box className="icon-container"><IconButton><LocalMallOutlinedIcon/></IconButton></Box>
                </Box>
            </Paper>
            <Box id="page-content" className="page-content">
                <>{props.children}</>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="login-title"
                aria-describedby="login-body"
                className='login-dialog'
            >
                <DialogTitle id="login-title">
                {"Login"}
                </DialogTitle>
                <DialogContent>
                {!isUserSignedIn &&
                    <DialogContentText id="login-body">
                        use your phone number to login / signin
                    </DialogContentText>
                }
                    {!isUserSignedIn &&
                    <Box>
                        <input placeholder="Enter Phone Number" className='otp-number-enter' type="tel" id="phone" name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required>
                        </input>
                        {!validPhoneNumber &&
                            <Typography className='error-message'>Please enter valid phone number with country code</Typography>
                        }
                        <Box className='otp-button-wrap'>
                            <Button className='otp-button' onClick={handleOtpTrigget}>
                                otp
                            </Button>
                        </Box>
                    </Box>
                    }
                    <Box>
                        <label>
                        {isUserSignedIn &&
                            <DoneIcon />
                        }
                        </label>
                    </Box>
                    {!isUserSignedIn &&
                        <div id='recaptcha'></div>
                    }
                </DialogContent>
            </Dialog>
        </Box>
        );
}

export default Header;