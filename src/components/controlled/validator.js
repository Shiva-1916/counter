import { mobileNumber } from "./regex";

export const usernameValidator = (value) => {
    if (!value) {
        return 'Please enter your name';
    } else if (value.length > 20) {
        return 'Length exceeded';
    }
    return '';
};

export const mobileValidator = (num) => {
    const mobileRegex = /^[6-9]\d{9}$/; // Added '$' to ensure the string ends after 10 digits
    if (!num) {
        return 'Please enter the mobile number';
    } else if (!mobileRegex.test(num)) {
        return 'Please enter a valid mobile number';
    }
    return '';
};

export const CustomValidator=(value)=>{
    let errorObj={
        usernameErr:'',
        mobileNumberErr:''
    }

    if(value.username.length==0){
        errorObj.usernameErr="Username can't be zero characters"
    }else if(value.username.length>25){
        errorObj.usernameErr="Username can't be more that 25 characters"
    }

    if(value.mobileNumber.length==0){
        errorObj.mobileNumberErr="mobile number can't be zero in length"
    }else if(!mobileNumber.test(value.mobileNumber)){
        errorObj.mobileNumberErr="please enter valid mobile number"
    }

return errorObj
}