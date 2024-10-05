function addMoney(balance,credit,pinNum)
    {
        if(pinNum !== parseFloat(authentication.pin))
            {
                document.getElementById("wp1").classList.remove('hidden');
            }
        else
            {
                if(isNaN(credit))
                    {
                        document.getElementById("blankAmount").classList.remove('hidden');
                        document.getElementById("wp1").classList.add('hidden');
                    }
               else
                    {
                        let newBalance = balance + credit;
                        return newBalance;
                    }
            }
    }
       
function cashOut(balance,debit,pinNum)
    {
        if(pinNum !== parseFloat(authentication.pin))
            {
                document.getElementById("wp2").classList.remove('hidden');
            }
        else
            {
                if(isNaN(debit))
                    {
                        document.getElementById("blankAmount2").classList.remove('hidden');
                        document.getElementById("wp2").classList.add('hidden');
                    }
               else
                    {
                        if(balance<debit)
                            {
                                alert('Insufficient Balance!')
                                document.getElementById("wp2").classList.add('hidden');
                            }
                        else
                            {
                                let newBalance = balance - debit;
                                return newBalance;
                            }
                    }
            }
    }