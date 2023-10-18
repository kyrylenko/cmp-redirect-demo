window.__tcfapi('addEventListener', 2, (tcData, success) => {
    console.log(tcData, success)

    if (success && tcData.eventStatus === 'useractioncomplete') {
        //window.location.href = 'https://id-ward.github.io/cmp-redirect-demo'
        window.location.href = location.hostname === 'localhost'
            ? `${location.href}acknowledgement`
            : 'https://id-ward.github.io/cmp-redirect-demo'
        //window.history.pushState({}, '', '/acknowledgement')
    }
})