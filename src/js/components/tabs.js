export default function initTabs() {
    const tabsLinks = document.querySelectorAll('.js-tabs > ul > li');
    const tabContents = document.querySelectorAll('.js-tab-content');
    const tabsBtns = document.querySelectorAll('.js-tabs button[type=button]');

    function hendlerClickTabLink(event) {
        event.preventDefault();
        let currentTarget = event.currentTarget;
        let anchorReference = event.target;
        let activeTabContentId = anchorReference.getAttribute('href');
        let activeTabContent = document.querySelector(activeTabContentId);
        
        tabsLinks.forEach(link => {
            link.classList.remove('is-active');
        });

        currentTarget.classList.add('is-active');

        tabContents.forEach(content => {
            content.classList.remove('is-active');
        });

        activeTabContent.classList.add('is-active');
    }

    function hendlerClickTabBtn(event) {
        let currentLinkNumber;
        let target = event.target
        tabsLinks.forEach(link => {
            if ( link.classList.contains('is-active') ) {
                currentLinkNumber = link.querySelector('a').getAttribute('data');
            }
        })

        if ( target.getAttribute('data-direction') === 'next' && +currentLinkNumber < tabsLinks.length ) {
            currentLinkNumber = +currentLinkNumber + 1
        } else if ( target.getAttribute('data-direction') === 'prev' && +currentLinkNumber > 1 ) {
            currentLinkNumber = +currentLinkNumber - 1
        }

        let currentTarget = document.querySelector(`a[data="${currentLinkNumber}"]`).parentElement
        let activeTabContentId = currentTarget.children[0].hash
        let currentContent = document.querySelector(activeTabContentId)

        tabsLinks.forEach(link => {
            link.classList.remove('is-active');
        });

        tabContents.forEach(content => {
            content.classList.remove('is-active');
        });

        currentTarget.classList.add('is-active')
        currentContent.classList.add('is-active')
    }


    tabsLinks.forEach(link => {
        link.addEventListener('click', hendlerClickTabLink)
    })

    tabsBtns.forEach(btn => {
        btn.addEventListener('click', hendlerClickTabBtn)
    })

}

