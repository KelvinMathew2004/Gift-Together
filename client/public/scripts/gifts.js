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

            const imageContainer = document.createElement('div')
            imageContainer.classList.add('display-image')

            const image = document.createElement('img')
            image.src = gift.image
            image.alt = gift.name
            imageContainer.appendChild(image)
            topContainer.appendChild(imageContainer)

            const name = document.createElement('h3')
            name.textContent = gift.name
            topContainer.appendChild(name)

            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + gift.pricepoint
            topContainer.appendChild(pricePoint)

            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + gift.audience
            topContainer.appendChild(audience)

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
