const addMoneyMain = document.getElementById("add_money_section");
const cashOutMain = document.getElementById("cash_out_section");
const transactionsMain = document.getElementById("Transactions_section");
const addCard = document.getElementById("addCard");
const cashCard = document.getElementById("cashCard");
const transCard = document.getElementById("transCard");
const main_balance = document.getElementById("main_balance");
const add_amount = document.getElementById("add_amount");
const out_amount = document.getElementById("out_amount");
const inputPin = document.getElementById("inputPin");
const cash_pin = document.getElementById("cash_pin");
const btn_add = document.getElementById("btn_add");
const btn_cash = document.getElementById("btn_cash");
const log_out = document.getElementById("log_out");
//Log out section starts
log_out.addEventListener('click',function(event)
    {
        event.preventDefault();
        window.location.href = "./index.html";
    }
)
//Log out section ends
//button color starts
addMoneyMain.style.color = "rgba(17,17,17,0.6)";
cashOutMain.style.color = "rgba(17,17,17,0.6)";
transactionsMain.style.color = "rgba(17,17,17,0.6)";
//button color ends
addMoneyMain.addEventListener('click',function(event)
    {
        event.preventDefault();
        reload('blankAmount','blankAmount2','wp1','wp2');
        removeElse(addMoneyMain,addCard);
        btn_add.addEventListener('click',function(event)
            {
                event.preventDefault();
                let mainBalance = getInputTextValueById('main_balance');
                let addAmountBalance = getInputValueById('add_amount');
                let pinNumber = getInputValueById('inputPin')
                let balance = addMoney(mainBalance,addAmountBalance,pinNumber);
                if(!isNaN(balance))
                    {
                        main_balance.innerText = balance;
                        //transactions
                        let time = new Date();
                        let div = document.createElement('div');
                        div.classList.add('bg-green-400','rounded-2xl','mb-1');
                        let h3 = document.createElement('h3');
                        h3.classList.add('text-xl','font-bold','text-center');
                        h3.innerText = `Added: ${addAmountBalance} Taka. Total Balance: ${balance}`;
                        let p = document.createElement('p');
                        p.classList.add('text-base','text-center');
                        p.innerText = `Date: ${time}`;
                        div.appendChild(h3);
                        div.appendChild(p);
                        transCard.appendChild(div);
                        //transactions
                        document.getElementById("wp1").classList.add('hidden');
                        add_show.showModal();
                        refresh(addCard,cashCard,addMoneyMain,cashOutMain);
                    }
                else
                    {
                        add_amount.value = "";
                        inputPin.value = "";
                    }
                add_amount.value = "";
                inputPin.value = "";
            })
    })
cashOutMain.addEventListener('click',function(event)
    {
        event.preventDefault();
        reload('blankAmount','blankAmount2','wp1','wp2');
        removeElse(cashOutMain,cashCard);
        btn_cash.addEventListener('click',function(event)
            {
                event.preventDefault();
                let mainBalance = getInputTextValueById('main_balance');
                let outAmountBalance = getInputValueById('out_amount');
                let pinNumber = getInputValueById('cash_pin')
                let balance = cashOut(mainBalance,outAmountBalance,pinNumber);
                if(!isNaN(balance))
                    {
                        main_balance.innerText = balance;
                        //transactions
                        let time = new Date();
                        let div = document.createElement('div');
                        div.classList.add('bg-amber-400','rounded-2xl','mb-1');
                        let h3 = document.createElement('h3');
                        h3.classList.add('text-xl','font-bold','text-center');
                        h3.innerText = `Cashed out: ${outAmountBalance} Taka. Balance: ${balance}`;
                        let p = document.createElement('p');
                        p.classList.add('text-base','text-center');
                        p.innerText = `Date: ${time}`;
                        div.appendChild(h3);
                        div.appendChild(p);
                        transCard.appendChild(div);
                        //transactions
                        document.getElementById("wp2").classList.add('hidden');
                        cash_show.showModal();
                        refresh(addCard,cashCard,addMoneyMain,cashOutMain);
                    }
                else
                    {
                        out_amount.value = "";
                        cash_pin.value = "";
                    }
                out_amount.value = "";
                cash_pin.value = "";
            })
    })
//Transactions
transactionsMain.addEventListener('click',function(event)
    {
        event.preventDefault();
        removeElse(transactionsMain,transCard);
        transCard.classList.remove('hidden');
    })