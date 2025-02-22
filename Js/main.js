document.addEventListener('DOMContentLoaded', function() {
    const cases = Array.from({ length: 7 }, (_, i) => document.querySelector(`#case${i + 1}`));
    const prices = ['$17.45', '$34.91', '$52.36', '$31.07', '$23.39', '$43.28', '$25.48'];

    function createPriceBox(price) {
        let priceBox = document.createElement('div');
        priceBox.textContent = price;
        priceBox.classList.add('priceBox');
        
        const baseStyles = {
            color: 'white',
            backgroundColor: 'hsl(25, 47%, 15%)',
            borderRadius: '7.5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        };

        Object.assign(priceBox.style, baseStyles);

        function updateStyles() {
            if (window.innerWidth >= 350 && window.innerWidth <= 750) {
                
                Object.assign(priceBox.style, {
                    width: '40px',
                    height: '25px',
                    fontSize: '12px',
                    transform: 'translateY(-1.7rem)'
                });
            } else {
                
                Object.assign(priceBox.style, {
                    width: '75px',
                    height: '35px',
                    fontSize: '18px',
                    transform: 'translateY(-2.5rem)'
                });
            }
        }

        updateStyles();

        window.addEventListener('resize', updateStyles);

        return priceBox;
    }

    cases.forEach((caseElement, index) => {
        caseElement.addEventListener('click', () => {
            if (!caseElement.querySelector('.priceBox')) {
                const priceBox = createPriceBox(prices[index]);
                caseElement.appendChild(priceBox);
            }
        });
    });
});