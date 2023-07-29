// Bloco 1
window.addEventListener('beforeunload', function() {
  // Rola a página para o topo antes da atualização
  window.scrollTo(0, 0);
});

// Bloco 2
document.addEventListener('DOMContentLoaded', function() {
  // Animar imagem com delay de 1 segundo
  var img = document.querySelector('.IMGP img');
  img.style.animationDelay = '1s';

  // Função chamada ao rolar a página
  window.onscroll = function() {
    scrollFunction();
    checkScrollEnd();
  };

  function scrollFunction() {
    // Exibir botão de rolagem para o topo ao rolar a página
    var btnScrollToTop = document.getElementById("btnScrollToTop");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnScrollToTop.style.display = "block";
    } else {
      btnScrollToTop.style.display = "none";
    }
  }

  function checkScrollEnd() {
    // Exibir botão de rolagem para o topo ao atingir o fim da página
    var btnScrollToTop = document.getElementById("btnScrollToTop");
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - clientHeight <= document.documentElement.scrollTop) {
      btnScrollToTop.style.display = "block";
      btnScrollToTop.style.zIndex = "9999";
    } else {
      btnScrollToTop.style.display = "none";
    }
  }

  function scrollToTop() {
    // Função para rolar a página para o topo
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  var btnScrollToTop = document.getElementById("btnScrollToTop");
  btnScrollToTop.addEventListener("click", scrollToTop);
});

// Bloco 3
window.onload = function() {
  // Rolar para o topo da página ao carregar
  window.scrollTo(0, 0);
};

// Bloco 4
gsap.to("h1", {
  // Animação do título h1
  duration: 2,
  color: ["#ffffff", "#3bb4fa"],
  repeat: 1,
  repeatDelay: 1,
  yoyo: true,
  ease: "power1.inOut"
});

// Bloco 5: H3
document.addEventListener('DOMContentLoaded', function(event) {
  var textToType = "Bibliotecas em Nuvem, Frameworks e Plataformas";
  var h3Element = document.querySelector("h3");

  // Oculta o elemento h3 inicialmente
  h3Element.style.visibility = "hidden";

  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      h3Element.textContent = text.substring(0, i + 1);

      if (i === 5 || i === 11) {
        // Adicione um atraso maior após a digitação
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback);
        }, 200); // Atraso de 200 milissegundos
      } else {
        // Aumente um pouco o tempo de espera para 15 milissegundos (0.015 segundos)
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback);
        }, 15);
      }
    } else if (typeof fnCallback === 'function') {
      setTimeout(fnCallback, 700);
    }
  }

  function startTypingAnimation() {
    function checkScrollPosition() {
      var h3Position = h3Element.getBoundingClientRect();
      var h3Top = h3Position.top;
      var h3Bottom = h3Position.bottom;
      var windowHeight = window.innerHeight;

      if (h3Top >= 0 && h3Bottom <= windowHeight) {
        // Mostra o elemento h3 antes do início do efeito
        h3Element.style.visibility = "visible";
        typeWriter(textToType, 0, null);
        window.removeEventListener('scroll', checkScrollPosition);
      }
    }

    window.addEventListener('scroll', checkScrollPosition);
  }

  startTypingAnimation();
});

// Bloco 7
$(document).ready(function() {
  // Estilizar barra de rolagem personalizada
  var divBackgroundColor = $('.custom-scrollbar').css('background-color');
  var scrollbarStyle = `
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${divBackgroundColor};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
    ::-webkit-scrollbar-track {
      background-color: #f2f2f2;
    }
  `;
  $('head').append(`<style>${scrollbarStyle}</style>`);
});

// Bloco 8
$(document).ready(function() {
  // Animação do elemento após 5 segundos
  setTimeout(function() {
    $('.header-before').css('width', '0');
    $('.header-before').animate({ width: '50%' }, 1100);
  }, 5000); // 5000 milissegundos = 5 segundos
});

// Bloco 9
// JavaScript para criar a animação nas barras com GSAP
const bars = document.querySelectorAll('.barra-item');

// Função para animar as barras com GSAP
function animateBars() {
  gsap.to(bars, {
    scaleY: 1,
    duration: 6,
    ease: "elastic.out(1, 2)",
    onComplete: function () {
      gsap.to(bars, {
        scaleY: 0,
        duration: 1.5,
        ease: "power1.inOut",
        onComplete: animateBars // Chama a função novamente após a animação ser concluída
      });
    }
  });
}

// Inicie a animação das barras
animateBars();

  
// Bloco 10
function isElementInViewport(element) {
  // Verifica se o elemento está visível no viewport
  var rect = element.getBoundingClientRect();
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= viewportHeight && rect.bottom >= 0;
}

// Bloco 11
// Função para verificar se 75% do elemento está visível no viewport
function isElement75PercentVisible(element) {
  var rect = element.getBoundingClientRect();
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  var elementHeight = rect.bottom - rect.top;
  var visibleThreshold = 0.75 * elementHeight;
  return rect.top <= viewportHeight - visibleThreshold && rect.bottom >= visibleThreshold;
}

// Bloco 12
function fadeInImage() {
  var imagem = document.querySelector('.palestra');
  if (isElement75PercentVisible(imagem)) {
    imagem.classList.add('visible');
  }
}

window.addEventListener('scroll', fadeInImage);
window.addEventListener('resize', fadeInImage);
window.addEventListener('load', fadeInImage);

// Bloco 13
function fadeInRect() {
  // Aplica animação de fade-in no retângulo quando visível
  var retangulo2 = document.querySelector('.retangulo2');

  if (isElementInViewport(retangulo2)) {
    retangulo2.style.opacity = '1';
    retangulo2.style.transform = 'translateX(-50%) translateY(0)';
  }
}

window.addEventListener('scroll', fadeInRect);
window.addEventListener('resize', fadeInRect);
window.addEventListener('load', fadeInRect);


// Bloco 14
function fadeInDiv1() {
  var div1 = document.querySelector('.div1');
  var rect = div1.getBoundingClientRect();
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top <= viewportHeight && rect.bottom >= 0) {
    div1.style.opacity = '1'; /* Quando a div1 estiver visível, definimos a opacidade como 1 */
  }
}

window.addEventListener('scroll', fadeInDiv1);
window.addEventListener('resize', fadeInDiv1);
window.addEventListener('load', fadeInDiv1);

// Bloco 15
var rotateImages = document.querySelectorAll('.rotate-image');

rotateImages.forEach(function(image) {
  image.addEventListener('mouseover', function() {
    this.style.transform = 'rotate(360deg)';
  });

  image.addEventListener('mouseout', function() {
    this.style.transform = 'rotate(0deg)';
  });
});

// Bloco 16
// Seletor da div palestra
const palestraDiv = document.querySelector('.palestra');
const palestraContent = document.querySelector('.palestra-content');
const div2 = document.querySelector('.div2');

// Função para verificar a largura da janela e executar a animação se necessário
function checkWindowSize() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 499) {
    const desiredPosition = div2.getBoundingClientRect().top - palestraDiv.offsetHeight - 20;
    const currentPosition = palestraContent.getBoundingClientRect().top;

    if (currentPosition > desiredPosition) {
      // Animação usando GSAP
      gsap.to(palestraContent, { y: desiredPosition - currentPosition, duration: 1 });
    }
  }
}

// Executa a verificação quando a janela é redimensionada
window.addEventListener('resize', checkWindowSize);

// Executa a verificação inicialmente
checkWindowSize();

// Bloco 17
$(document).ready(function() {
  $(window).scroll(function() {
    var curvaOffset = $('.curva').offset().top;
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scrollTop + windowHeight > curvaOffset) {
      $('.curva').addClass('active');
    }
  });
});

// Bloco 18
function scrollToSection(target) {
  // Função para rolar a página até a seção alvo com efeito suave
  gsap.to(window, {
    scrollTo: {
      y: target,
      offsetY: 50 // Ajuste opcional para o deslocamento vertical desejado
    },
    duration: 1, // Duração da animação em segundos
    ease: "power2.inOut" // Easing utilizado na animação
  });
}

// Bloco 19
function scrollToSection(target) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}


// Bloco 20 a 25
function changeLanguage(language, selectedOption) {
  var languageOptions = document.querySelectorAll('.language-options li a');

  // Verificar se o idioma selecionado é diferente do idioma atualmente selecionado
  var languageCode = document.querySelector('.language-code');
  if (languageCode.textContent === language) {
    return; // Não faz nada se o idioma selecionado for o mesmo que já está selecionado
  }

  // Armazenar o texto original
  var originalText = document.documentElement.innerHTML;

  // Atualizar o código do idioma selecionado
  languageCode.textContent = language;

  // Atualizar a bandeira do idioma selecionado
  var languageFlag = document.querySelector('.language-flag');
  var selectedFlag = selectedOption.querySelector('img').src;
  languageFlag.style.backgroundImage = 'url("' + selectedFlag + '")';

  // Fechar o menu de idiomas após selecionar uma opção
  var languageOptionsContainer = document.querySelector('.language-options');
  languageOptionsContainer.style.display = 'none';

  // Remover a classe "selected" de todos os itens do menu de idiomas
  languageOptions.forEach(function(option) {
    option.classList.remove('selected');
  });

  // Adicionar a classe "selected" ao item do menu de idiomas correspondente ao idioma selecionado
  selectedOption.classList.add('selected');

  // Traduzir o conteúdo do site
  if (language === 'pt') {
    // Caso o idioma selecionado seja português, restaurar o texto original diretamente
    document.documentElement.innerHTML = originalText;
  } else {
    // Caso contrário, utilizar o Google Translate para traduzir o conteúdo
    var translator = new google.translate.TranslateElement({
      pageLanguage: 'pt',
      includedLanguages: language,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
      gaTrack: true, // Adicionar essa linha para habilitar o acompanhamento do Google Analytics
      gaId: 'UA-12345678-1' // Substituir 'UA-12345678-1' pelo seu ID do Google Analytics
    }, 'gtranslate_element');

    // Restaurar o texto original após a tradução
    translator.showTranslation(originalText);
  }
}

function toggleLanguageOptions() {
  var languageOptionsContainer = document.querySelector('.language-options');
  languageOptionsContainer.style.display = languageOptionsContainer.style.display === 'block' ? 'none' : 'block';
}


// Bloco 25
function changeLanguage(language, selectedOption) {
  var languageOptions = document.querySelectorAll('.language-options li a');

  // Verificar se o idioma selecionado é diferente do idioma atualmente selecionado
  var languageCode = document.querySelector('.language-code');
  if (languageCode.textContent === language) {
    return; // Não faz nada se o idioma selecionado for o mesmo que já está selecionado
  }

  // Armazenar o texto original
  var originalText = document.documentElement.innerHTML;

  // Atualizar o código do idioma selecionado
  languageCode.textContent = language;

  // Atualizar a bandeira do idioma selecionado
  var languageFlag = document.querySelector('.language-flag');
  var selectedFlag = selectedOption.querySelector('img').src;
  languageFlag.style.backgroundImage = 'url("' + selectedFlag + '")';

  // Fechar o menu de idiomas após selecionar uma opção
  var languageOptionsContainer = document.querySelector('.language-options');
  languageOptionsContainer.style.display = 'none';

  // Remover a classe "selected" de todos os itens do menu de idiomas
  languageOptions.forEach(function(option) {
    option.classList.remove('selected');
  });

  // Adicionar a classe "selected" ao item do menu de idiomas correspondente ao idioma selecionado
  selectedOption.classList.add('selected');

  // Verificar se o idioma selecionado é diferente de 'pt' (português)
  if (language !== 'pt') {
    // Utilizar o Google Translate para traduzir o conteúdo
    var translator = new google.translate.TranslateElement({
      pageLanguage: 'pt',
      includedLanguages: language,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
      gaTrack: true, // Adicionar essa linha para habilitar o acompanhamento do Google Analytics
      gaId: 'UA-12345678-1' // Substituir 'UA-12345678-1' pelo seu ID do Google Analytics
    }, 'gtranslate_element');

    // Restaurar o texto original após a tradução
    translator.showTranslation(originalText);
  }
}

function toggleLanguageOptions() {
  var languageOptionsContainer = document.querySelector('.language-options');
  languageOptionsContainer.style.display = languageOptionsContainer.style.display === 'block' ? 'none' : 'block';
}

// Bloco 26
// Função para rolar suavemente até a seção desejada
function scrollToSection(target) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Bloco 27
// Seleciona todos os links de seção
var sectionLinks = document.querySelectorAll('.seçoes a');

// Adiciona um evento de clique a cada link de seção
sectionLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    var target = link.getAttribute('href'); // Obtém o valor do atributo href do link
    scrollToSection(target); // Chama a função para rolar suavemente até a seção

    // Fecha o menu de seções após selecionar uma opção (se necessário)
    var sectionsContainer = document.querySelector('.sections-menu');
    sectionsContainer.style.display = 'none';
  });
});

// Bloco 28
window.addEventListener('DOMContentLoaded', () => {
  const logos = document.querySelectorAll('.logos img');
  const threshold = Math.floor(logos.length * 0.7); // 70% das imagens

  let count = 0;

  const checkAllImagesLoaded = () => {
    count++;

    if (count >= threshold) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('fade-in');

            observer.unobserve(img);
          }
        });
      });

      logos.forEach(img => {
        observer.observe(img);
      });
    }
  };

  logos.forEach(img => {
    if (img.complete) {
      checkAllImagesLoaded();
    } else {
      img.addEventListener('load', checkAllImagesLoaded);
    }
  });
});


// Bloco 29
$(document).ready(function() {
  $('.line').hide();
  $('.language-options').hide(); // Ocultar inicialmente as opções de idioma

  $('.menu-icon').click(function() {
    $('.line').toggle(function() {
      if ($('.line').is(':visible')) {
        $('.language-options').hide().fadeIn(500); // Mostrar as opções de idioma com um efeito de fading de 0,5 segundos quando a animação estiver concluída e a seção do menu estiver visível
      } else {
        $('.language-options').fadeOut(); // Ocultar as opções de idioma com um efeito de fading quando a animação estiver concluída e a seção do menu estiver oculta
      }
    });
  });
});

$(document).ready(function() {
  var $carousel = $('#carousel');
  var $projs = $carousel.find('.proj');
  var currentIndex = 0;
  
  // Esconder todos os projetos, exceto o primeiro
  $projs.not(':first').hide();

  // Função para mostrar o próximo projeto
  function showNextProject() {
    $projs.eq(currentIndex).hide();
    currentIndex = (currentIndex + 1) % $projs.length;
    $projs.eq(currentIndex).fadeIn();
  }

  // Função para mostrar o projeto anterior
  function showPrevProject() {
    $projs.eq(currentIndex).hide();
    currentIndex = (currentIndex - 1 + $projs.length) % $projs.length;
    $projs.eq(currentIndex).fadeIn();
  }

  // Função para configurar os cliques nas setas
  function setupClickHandler() {
    $('.next-arrow').off('click').on('click', function() {
      showNextProject();
    });

    $('.prev-arrow').off('click').on('click', function() {
      showPrevProject();
    });
  }

  // Mostrar o primeiro projeto
  $projs.eq(currentIndex).show();

  // Configurar os cliques para avançar e voltar
  setupClickHandler();
});

// Bloco 30

 function enviarFormulario() {
      var form = document.querySelector('form');
      var formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          mostrarMensagem(data.message, true);
        } else {
          mostrarMensagem(data.message, false);
        }
      })
      .catch(error => {
        mostrarMensagem('Houve um problema ao enviar o formulário. Por favor, tente novamente mais tarde.', false);
      });

      return false; // Evita que o formulário seja submetido normalmente
    }

    function mostrarMensagem(mensagem, sucesso) {
      var mensagemDiv = document.createElement('div');
      mensagemDiv.classList.add('mensagem');

      if (sucesso) {
        mensagemDiv.classList.add('sucesso');
      } else {
        mensagemDiv.classList.add('erro');
      }

      mensagemDiv.innerText = mensagem;

      var formularioDiv = document.querySelector('.formulario');
      formularioDiv.appendChild(mensagemDiv);

      // Remover a mensagem após alguns segundos (opcional)
      setTimeout(function() {
        mensagemDiv.remove();
      }, 5000);
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Para ter uma animação suave ao rolar para cima
      });
    }
// Função que será chamada quando o elemento entrar na área visível do usuário
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Se o elemento estiver visível no viewport, adicionamos a classe 'slide-in-right'
      entry.target.classList.add('slide-in-right');
      // E paramos de observá-lo para evitar executar a animação novamente
      observer.unobserve(entry.target);
    }
  });
}

// Criação do Intersection Observer
const options = {
  root: null, // Usando a viewport como o elemento raiz
  rootMargin: '0px',
  threshold: 0.5 // A animação será disparada quando pelo menos 50% do elemento estiver visível
};

const observer = new IntersectionObserver(handleIntersection, options);

// Obtem o elemento que queremos observar
const triangleElement = document.querySelector('.triangle');

// Iniciamos a observação do elemento
observer.observe(triangleElement);




