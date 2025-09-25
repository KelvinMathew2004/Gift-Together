const renderGifts = async () => {
    
    const response = await fetch('/gifts')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(gift => {
            const card = document.createElement('article')
            card.classList.add('card')

            const topContainer = document.createElement('header')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('footer')
            bottomContainer.classList.add('bottom-container')

            const cardText = document.createElement('div')
            cardText.classList.add('card-text')

            topContainer.style.backgroundImage = `url(${gift.image})`

            const name = document.createElement('h3')
            name.textContent = gift.name
            cardText.appendChild(name)

            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gift.pricePoint
            cardText.appendChild(pricePoint)

            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gift.audience
            cardText.appendChild(audience)

            bottomContainer.appendChild(cardText)

            const link = document.createElement('a')
            link.textContent = 'Read More'
            link.setAttribute('role', 'button')
            link.href = `/gifts/${gift.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderGifts()
}
