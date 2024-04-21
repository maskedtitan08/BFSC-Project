export const handleAccountChange = async(setState)=>{
    const accounts = await window.ethereum.request({
        method:"eth_requestAccounts"
    })
    const selectedAccount = accounts[0];
    console.log(selectedAccount)
                        // State ki baaki values ko same rhne do purane state ki trh aur sirf selected account ki value ko change krdo 
    setState(prevState=>({...prevState,selectedAccount}))
}