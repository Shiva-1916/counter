import { TailSpin,DNA } from 'react-loader-spinner'

export const CustomSpinner = (props)=>{
    return(
        <TailSpin
  visible={true}
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  wrapperStyle={{}}
  wrapperClass=""
  {...props}
  />
    )
}

export const CustomDNASpinner =()=>{
    return(
        <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
    )
}