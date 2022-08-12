export const getOutputAccount = (account) => {
    return {
        'account': { 
            'active-card': account.activeCard,
            'available-limit': account.availableLimit
        } ,
        'violations': account.violations
    }
}