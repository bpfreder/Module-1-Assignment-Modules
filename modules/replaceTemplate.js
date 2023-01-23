module.exports = (htmlStr, loan)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%CUSTOMERNAME%}/g, loan.customerName);
    output = output.replace(/{%PHONENUMBER%}/g, loan.phoneNumber);
    output = output.replace(/{%ADDRESS%}/g, loan.address);
    output = output.replace(/{%LOANAMOUNT%}/g, loan.loanAmount);
    output = output.replace(/{%INTEREST%}/g, (loan.interest * 100).toFixed(0));
    output = output.replace(/{%LOANTERMYEARS%}/g, loan.loanTermYears);
    output = output.replace(/{%LOANTYPE%}/g, loan.loanType);
    output = output.replace(/{%DESCRIPTION%}/g, loan.description);
    output = output.replace(/{%ID%}/g, loan.id);
    let interest = loan.interest;
    let payment = loan.loanAmount;
    let months = (loan.loanTermYears * 12);
    let presentValue = payment * ( (1 - ( 1 /(( 1 + interest ) ** months))) / interest );
    output = output.replace(/{%PRESENTVALUE%}/g, presentValue.toFixed(2));
    return output;
}