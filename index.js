// Seleciona todos os elementos com a classe 'deadpool'
let deadpools = document.querySelectorAll('.deadpool');
let deadpoolImage = document.querySelector('.deadpoolImage');
let wolverineImage = document.querySelector('.wolverineImage');
let dogpool = document.querySelector('.dogpool');

deadpools.forEach(deadpool => {
    let abouttextbox = deadpool.querySelector('.about-textbox');
    let abouttextboxtext = abouttextbox.querySelector('.about-textbox-text');
    let cborder = deadpool.querySelector('.Cborder');

    cborder.addEventListener('click', (event) => {
        // Alterna a largura e opacidade da .about-textbox
        if (abouttextbox.style.width === '80%') {
            // Se estiver visível, esconde e remove o delay na transição do texto
            abouttextbox.style.width = '0%';
            abouttextbox.style.opacity = '0';
            abouttextbox.style.paddingLeft = '0rem';
            abouttextboxtext.style.transitionDelay = '0s';
            abouttextboxtext.style.opacity = '0';

        } else {
            // Se estiver oculto, mostra e adiciona o delay na transição do texto
            abouttextbox.style.width = '80%';
            abouttextbox.style.opacity = '1';
            abouttextbox.style.paddingLeft = '7rem';
            abouttextboxtext.style.transitionDelay = '1s';
            abouttextboxtext.style.opacity = '1';

        }
    });

    // Adiciona um clique fora para fechar a caixa de texto
    document.addEventListener('click', (event) => {
        if (!deadpool.contains(event.target)) {
            // Fecha a .about-textbox se o clique for fora do .deadpool
            abouttextbox.style.width = '0%';
            abouttextbox.style.opacity = '0';
            abouttextbox.style.paddingLeft = '0rem';
            abouttextboxtext.style.transitionDelay = '0s';
            abouttextboxtext.style.opacity = '0';
            
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const topImages = document.querySelectorAll('.deadpool .top-image');
    const bottomImages = document.querySelectorAll('.deadpool .bottom-image');
    const dogpool = document.getElementById('dogpool'); // Certifique-se de selecionar o elemento dogpool

    function resetImages() {
        bottomImages.forEach(bottomImage => {
            bottomImage.classList.add('hidden');
            bottomImage.classList.remove('visible');
            const imageContainer = bottomImage.closest('.image-container');
            const topImage = imageContainer.querySelector('.top-image');
            topImage.classList.add('visible');
            topImage.classList.remove('hidden');

            dogpool.style.zIndex = "1000";
        });
    }

    topImages.forEach(topImage => {
        topImage.addEventListener('click', () => {
            resetImages(); // Restaura o estado das imagens

            // Encontra o contêiner da imagem
            const imageContainer = topImage.closest('.image-container');
            // Seleciona a imagem de baixo dentro do contêiner
            const bottomImage = imageContainer.querySelector('.bottom-image');

            // Alterna a visibilidade das imagens
            topImage.classList.add('hidden');
            topImage.classList.remove('visible');
            bottomImage.classList.add('visible');
            bottomImage.classList.remove('hidden');

            // Verifica se o id do topImage é 'Cassandra'
            if (topImage.id === 'cassandra') {
                dogpool.style.zIndex = "0"; // Troca o z-index do dogpool
            }
        });
    });

    bottomImages.forEach(bottomImage => {
        bottomImage.addEventListener('click', () => {
            const imageContainer = bottomImage.closest('.image-container');
            const topImage = imageContainer.querySelector('.top-image');

            // Alterna a visibilidade das imagens
            bottomImage.classList.add('hidden');
            bottomImage.classList.remove('visible');
            topImage.classList.add('visible');
            topImage.classList.remove('hidden');

            dogpool.style.zIndex = "1000";
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.deadpool')) {
            resetImages(); // Restaura o estado das imagens se clicar fora
        }
    });
});

const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    moveCircle(circle);
});

function moveCircle(circle) {
    const moveInterval = setInterval(() => {
        const x = Math.random() * (window.innerWidth - circle.clientWidth);
        const y = Math.random() * (window.innerHeight - circle.clientHeight);

        circle.style.transform = `translate(${x}px, ${y}px)`;
    }, 2000); // Muda a posição a cada 1 segundo
}


/////////////////

const iframe = document.querySelector('.iframe');
const fakelogan = document.querySelector('.fakeLogan');
const fakedead = document.querySelector('.fakedead');

iframe.addEventListener('mouseover', () => {
    iframe.style.zIndex = '3';
    fakelogan.style.opacity = '0';
    fakedead.style.opacity = '0';
});

iframe.addEventListener('mouseout', () => {
    iframe.style.zIndex = '1';
    fakelogan.style.opacity = '1';
    fakedead.style.opacity = '1';
});

function toggleAudio() {
  var audio = document.getElementById("myAudio");
  var musictext = document.querySelector('.music-textbox');
  if (audio.paused) {
    audio.play();
    musictext.classList.add('music-textbox-animation');
  } else {
    audio.pause();
    musictext.classList.remove('music-textbox-animation');
  }
}


document.addEventListener('scroll', function() {
    var audio = document.getElementById("myAudio");
    var scrollTop = window.scrollY || window.pageYOffset;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
  
    // Defina as distâncias e volumes desejados
    var startVolumeChangeAt = 1000;  // Distância (em pixels) onde o volume começa a mudar
    var maxVolume = 1;             // Volume máximo
    var minVolume = 0;           // Volume mínimo
    var endVolumeChangeAt = 1800;   // Distância (em pixels) onde o volume começa a aumentar
  
    // Calcule o volume com base na posição de rolagem
    if (scrollTop < startVolumeChangeAt) {
      // Volume não muda
      audio.volume = maxVolume;
    } else if (scrollTop >= startVolumeChangeAt && scrollTop <= endVolumeChangeAt) {
      // Diminui o volume até o mínimo
      var volumeRange = maxVolume - minVolume;
      var scrollRange = endVolumeChangeAt - startVolumeChangeAt;
      var scrollProgress = (scrollTop - startVolumeChangeAt) / scrollRange;
      audio.volume = Math.max(minVolume, maxVolume - (scrollProgress * volumeRange));
    } else {
      // Aumenta o volume até o máximo
      var volumeRange = maxVolume - minVolume;
      var scrollProgress = (scrollTop - endVolumeChangeAt) / (documentHeight - endVolumeChangeAt);
      audio.volume = Math.min(maxVolume, minVolume + (scrollProgress * volumeRange));
    }
  });
  