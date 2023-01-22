
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)

    function hideTabContent() {
        content.forEach((item) => {
            item.style.display = 'none'
        });
        tab.forEach((item) => {
            item.classList.remove((activeClass))
        })
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'flex';
        tab[i].classList.add(activeClass);

    }

    header.addEventListener('click', (e) => {

        const target = e.target

        tab.forEach((item, i) => {
            if (target == item || target.parentNode == item) {

                hideTabContent();
                showTabContent(i)
            }
        })

    })
    hideTabContent();
    showTabContent();

}
tabs('.tabs-wrapper', '.reviews__tab-subtitle', '.tabContent', 'after-click')
