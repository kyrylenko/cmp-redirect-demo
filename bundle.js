window.__tcfapi('addEventListener', 2, (tcData, success) => {
    console.log(tcData, success)

    if (success && tcData.eventStatus === 'useractioncomplete') {
        //redirect to the /acknowledgement page
        window.location.href = '/acknowledgement'
    }
})