window.__tcfapi('addEventListener', 2, (tcData, success) => {
    console.log(tcData, success)

    if (success && tcData.eventStatus === 'useractioncomplete') {
        console.log('curr href is', window.location.href)
        const href = window.location.href
        //redirect to the /acknowledgement page
        window.location.href = `${href}acknowledgement`
        //window.history.pushState({}, '', '/acknowledgement')
    }
})