(function() {
    "use strict";

    var arrLang = {
        'pt': {
            'welcome_message': 'Welcome',
            'hero_download': 'Play now!',
            'featured_title': 'A universe for you to <br/> <span>explore</span> and <span>make new friends!</span>',
            'tips_title': 'What to do at FantasyLane?',
            'download_title': 'Start playing right now!',
            'download_description': 'Select the version compatible with your operating system (Windows, Mac, or Linux) and download FantasyLane to enjoy the full experience on your computer.',
            'ads': 'Advertising',
            'follow_us': 'Follow us on our <span>social media</span>',
            'badge_new': 'New!',
            'privacy_policy': 'Privacy Policy',
            'terms_of_service': 'Terms of Service',
            'code_of_conduct': 'Code of Conduct',
            'parents_guide': 'Parents guide',
            'company': 'OUR COMPANY',
            'careers': 'Careers',
            'about_solarwish':'About Solarwish Games',
            'rights': '© 2024, Kunhuma Games. All rights reserved. Fantasy Lane features content from SmallWorlds (2023-2024), Outsmart © 2022. All rights reserved to their respective owners and licensors.',
            'trademark': 'Fantasy Lane is a registered trademark of Kunhuma Games',
        },
        'en': {
            'welcome_message': 'Welcome',
            'hero_download': 'Play now!',
            'featured_title': 'A universe for you to <br/> <span>explore</span> and <span>make new friends!</span>',
            'tips_title': 'What to do at FantasyLane?',
            'download_title': 'Start playing right now!',
            'download_description': 'Select the version compatible with your operating system (Windows, Mac, or Linux) and download FantasyLane to enjoy the full experience on your computer.',
            'ads': 'Advertising',
            'follow_us': 'Follow us on our <span>social media</span>',
            'badge_new': 'New!',
            'privacy_policy': 'Privacy Policy',
            'terms_of_service': 'Terms of Service',
            'code_of_conduct': 'Code of Conduct',
            'parents_guide': 'Parents guide',
            'company': 'OUR COMPANY',
            'careers': 'Careers',
            'about_solarwish':'About Solarwish Games',
            'rights': '© 2024, Kunhuma Games. All rights reserved. Fantasy Lane features content from SmallWorlds (2023-2024), Outsmart © 2022. All rights reserved to their respective owners and licensors.',
            'trademark': 'Fantasy Lane is a registered trademark of Kunhuma Games',
        },
        'es': {
            'welcome_message': 'Welcome',
            'hero_download': 'Play now!',
            'featured_title': 'A universe for you to <br/> <span>explore</span> and <span>make new friends!</span>',
            'tips_title': 'What to do at FantasyLane?',
            'download_title': 'Start playing right now!',
            'download_description': 'Select the version compatible with your operating system (Windows, Mac, or Linux) and download FantasyLane to enjoy the full experience on your computer.',
            'ads': 'Advertising',
            'follow_us': 'Follow us on our <span>social media</span>',
            'badge_new': 'New!',
            'privacy_policy': 'Privacy Policy',
            'terms_of_service': 'Terms of Service',
            'code_of_conduct': 'Code of Conduct',
            'parents_guide': 'Parents guide',
            'company': 'OUR COMPANY',
            'careers': 'Careers',
            'about_solarwish':'About Solarwish Games',
            'rights': '© 2024, Kunhuma Games. All rights reserved. Fantasy Lane features content from SmallWorlds (2023-2024), Outsmart © 2022. All rights reserved to their respective owners and licensors.',
            'trademark': 'Fantasy Lane is a registered trademark of Kunhuma Games',
        },
    };

    function translateLang(lang) {
        $('.lang').each(function(index, item) {
            var key = $(this).attr('key');
            var text = arrLang[lang][key];
            $(this).html(text);
        });

// Objeto com os nomes das imagens para as dicas
var images = {
    'en': 'en1.png',
    'es': 'en1.png',
    'pt': 'en1.png'
};

// Seleciona a imagem de dica
var tipImage = document.querySelector('.tip_card_image');
var lang = 'en'; // Defina o idioma atual aqui
var imageName = images[lang];
var imagePath = 'baixar/' + imageName; // Caminho para a pasta "baixar"

// Cria uma nova imagem para garantir que o tamanho esteja correto
var newTipImage = new Image();
newTipImage.src = imagePath;
newTipImage.classList.add('small_image'); // Adiciona uma classe para ajustar o tamanho

// Substitui a imagem original pela nova imagem carregada
tipImage.parentNode.replaceChild(newTipImage, tipImage);

// Objeto com os nomes das imagens para os bônus
var bonusImages = {
    'en': 'REN1.png',
    'es': 'REN1.png',
    'pt': 'REN1.png'
};

// Seleciona a imagem de bônus
var bonusImage = document.querySelector('.reg_bonus_image');
var bonusImageName = bonusImages[lang];
var bonusImagePath = 'baixar/' + bonusImageName; // Caminho para a pasta "baixar"

// Cria uma nova imagem para garantir que o tamanho esteja correto
var newBonusImage = new Image();
newBonusImage.src = bonusImagePath;
newBonusImage.classList.add('small_image'); // Adiciona uma classe para ajustar o tamanho

// Substitui a imagem original pela nova imagem carregada
bonusImage.parentNode.replaceChild(newBonusImage, bonusImage);

    
        var bonusImages = document.querySelectorAll('.reg_bonus_image');
        bonusImages.forEach(function(image, index) {
            var imageNameBonus = imagesBonus[lang][index];
            image.src = 'assets/images/rewards/' + imageNameBonus;
        });

        if (lang === 'pt') {
            $('.footer_links li a').each(function(index, item) {
                var newHref = $(this).attr('href')
                    .replace('Privacy Policy.pdf', 'Política de Privacidade.pdf')
                    .replace('Terms of Service.pdf', 'Termos de Serviço.pdf')
                    .replace('[EN] FantasyLane Code of Conduct.pdf', '[PT] Código de Conduta do FantasyLane.pdf')
                    .replace('Guide for Parents.pdf', 'Guia para os Pais.pdf');
                $(this).attr('href', newHref);
            });
        } else if (lang === 'es') {
            $('.footer_links li a').each(function(index, item) {
                var newHref = $(this).attr('href')
                    .replace('Política de Privacidade.pdf', 'Privacy Policy.pdf')
                    .replace('Termos de Serviço.pdf', 'Terms of Service.pdf')
                    .replace('[PT] Código de Conduta do FantasyLane.pdf', '[EN] FantasyLane Code of Conduct.pdf')
                    .replace('Guia para os Pais.pdf', 'Guide for Parents.pdf');
                $(this).attr('href', newHref);
            });
        } else {
            $('.footer_links li a').each(function(index, item) {
                var newHref = $(this).attr('href')
                    .replace('Política de Privacidade.pdf', 'Privacy Policy.pdf')
                    .replace('Termos de Serviço.pdf', 'Terms of Service.pdf')
                    .replace('[PT] Código de Conduta do FantasyLane.pdf', '[EN] FantasyLane Code of Conduct.pdf')
                    .replace('Guia para os Pais.pdf', 'Guide for Parents.pdf');
                $(this).attr('href', newHref);
            });
        }
        
        

    }


    function updateSelectedLanguage(language) {
        localStorage.setItem("stored_lang", language);
        translateLang(language);
        var selectedLanguageElements = document.querySelectorAll('.selectedLanguage');
        selectedLanguageElements.forEach(function(element) {
            switch (language) {
                case 'en':
                    element.innerHTML = '<img src="assets/images/bandeira_en.png" alt="English" class="me-2" style="width: 20px;"> ';
                    break;
                default:
                    element.innerText = 'Language';
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        var storedLang = localStorage.getItem("stored_lang");
        if (storedLang !== null && storedLang !== undefined) {
            translateLang(storedLang);
            updateSelectedLanguage(storedLang);
        } else {
            var defaultLang = 'pt';
            translateLang(defaultLang);
            updateSelectedLanguage(defaultLang);
        }
    });

    var dropdownItems = document.querySelectorAll('.translate');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var lang = this.id;
            updateSelectedLanguage(lang);
        });
    });
})();
