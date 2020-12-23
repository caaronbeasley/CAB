const EXPANDABLE_SELECTOR = '.expandable';
const ABSTRACT_SELECTOR = '.abstract';
const EXPANDED_CLASS = 'expanded';

function addExpandableListeners() {
    const expandables = document.querySelectorAll(EXPANDABLE_SELECTOR);
    expandables.forEach(e => {
        e.addEventListener('click', ($event) => {
            const expandableHeader = $event.target;
            const expandable = expandableHeader.parentElement;
            const abstract = expandable.querySelector(ABSTRACT_SELECTOR);

            if (expandable.classList.contains(EXPANDED_CLASS)) {
                expandable.classList.remove(EXPANDED_CLASS);
                abstract.style.padding = '0';
                abstract.style.height = '0';
            } else {
                const expandedHeight = getExpandedHeight(abstract);

                expandable.classList.add(EXPANDED_CLASS);
                abstract.style.height = `${expandedHeight}px`;
                abstract.style.padding = '20px 0';
            }
        })
    })
}

function getExpandedHeight(abstract) {
    abstract.style.opacity = '0';
    abstract.style.padding = '20px 0';
    abstract.style.height = 'auto';

    const expandedHeight = abstract.offsetHeight;

    abstract.style.opacity = '1';
    abstract.style.height = '0';
    abstract.style.padding = '0';

    return expandedHeight;
}

addExpandableListeners();
