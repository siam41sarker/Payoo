function refresh(a,b,c,d)
    {
        a.classList.add('hidden');
        b.classList.add('hidden');
        c.classList.remove('clickStyle');
        d.classList.remove('clickStyle');
    }
function reload(m,n,x,z)
    {
        document.getElementById(m).classList.add('hidden');
        document.getElementById(n).classList.add('hidden');
        document.getElementById(x).classList.add('hidden');
        document.getElementById(z).classList.add('hidden');
    }
function removeElse(style,card)
    {
        cashOutMain.classList.remove('clickStyle');
        addMoneyMain.classList.remove('clickStyle');
        transactionsMain.classList.remove('clickStyle');
        cashCard.classList.add('hidden');
        addCard.classList.add('hidden');
        transCard.classList.add('hidden');
        style.classList.add('clickStyle');
        card.classList.remove('hidden');
    }