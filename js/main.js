/* Status Movelaria — interações da página */
(function () {
  'use strict';

  var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header compacto + botão flutuante ---------- */
  var cabecalho = document.getElementById('cabecalho');
  var zap = document.querySelector('.zap');
  var ultimoY = -1;

  function aoRolar() {
    var y = window.scrollY;
    if (y === ultimoY) return;
    ultimoY = y;
    cabecalho.classList.toggle('compacto', y > 40);
    if (zap) zap.classList.toggle('visivel', y > 520);
  }

  var agendado = false;
  window.addEventListener('scroll', function () {
    if (agendado) return;
    agendado = true;
    requestAnimationFrame(function () { aoRolar(); agendado = false; });
  }, { passive: true });
  aoRolar();

  /* ---------- Menu mobile ---------- */
  var botao = document.getElementById('hamburguer');
  var nav = document.getElementById('nav');

  function fecharMenu() {
    nav.classList.remove('aberto');
    botao.classList.remove('aberto');
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');
    document.body.style.overflow = '';
  }

  botao.addEventListener('click', function () {
    var aberto = nav.classList.toggle('aberto');
    botao.classList.toggle('aberto', aberto);
    botao.setAttribute('aria-expanded', String(aberto));
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    document.body.style.overflow = aberto ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', fecharMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('aberto')) {
      fecharMenu();
      botao.focus();
    }
  });

  /* ---------- Reveal ao rolar ---------- */
  var alvos = document.querySelectorAll('.reveal');

  if (semMovimento || !('IntersectionObserver' in window)) {
    alvos.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        obs.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    alvos.forEach(function (el) { obs.observe(el); });
  }

  /* ---------- FAQ ---------- */
  document.querySelectorAll('.faq__p').forEach(function (pergunta) {
    pergunta.addEventListener('click', function () {
      var item = pergunta.closest('.faq__item');
      var aberto = item.classList.contains('aberto');

      document.querySelectorAll('.faq__item.aberto').forEach(function (outro) {
        outro.classList.remove('aberto');
        outro.querySelector('.faq__p').setAttribute('aria-expanded', 'false');
      });

      if (!aberto) {
        item.classList.add('aberto');
        pergunta.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- Ano no rodapé ---------- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
