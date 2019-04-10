import Vue from 'vue'
import {
  Time
} from './time';
import _ from 'lodash';

new Vue({
  el: '#app',
  data: {

    titulo: "hello word",

    arr: {
      nome: 'nicolas'
    },

    link: 'http://localhost:8080',

    order: {
      key: ['pontos', 'gm', 'gs'],
      sort: ['desc', 'desc', 'asc']
    },

    colunas: ['nome', 'pontos', 'gm', 'gs', 'saldo'],

    times: [
      new Time('Palmeiras', "src/assets/palmeiras_60x60.png"),
      new Time('Flamengo', "src/assets/flamengo_60x60.png"),
      new Time('Atlético-MG', "src/assets/atletico_mg_60x60.png"),
      new Time('Santos', "src/assets/santos_60x60.png"),
      new Time('Botafogo', "src/assets/botafogo_60x60.png"),
      new Time('Corinthians', "src/assets/corinthians_60x60.png"),
      new Time('Atlético-PR', "src/assets/atletico-pr_60x60.png"),
      new Time('Grêmio', "src/assets/gremio_60x60.png"),
      new Time('Fluminense', "src/assets/fluminense_60x60.png"),
      new Time('Ponte Preta', "src/assets/ponte_preta_60x60.png"),
      new Time('Chapecoense', "src/assets/chapecoense_60x60.png"),
      new Time('São Paulo', "src/assets/sao_paulo_60x60.png"),
      new Time('Cruzeiro', "src/assets/cruzeiro_60x60.png"),
      new Time('Sport', "src/assets/sport_60x60.png"),
    ],
    novoJogo: {

      casa: {
        time: null,
        gols: 0
      },

      fora: {
        time: null,
        gols: 0
      }
    },

    view: 'tabela'
  },

  methods: {
    fimJogo() {
      let timeAdversario = this.novoJogo.fora.time;
      let gols = +this.novoJogo.casa.gols;
      let golsAdversaio = +this.novoJogo.fora.gols;

      this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversaio);
      this.showView('tabela');
    },
    novo() {
      let indexCasa = Math.floor(Math.random() * 20);
      let indexFora = Math.floor(Math.random() * 20);

      this.novoJogo.casa.time = this.times[indexCasa];
      this.novoJogo.casa.gols = 0;

      this.novoJogo.fora.time = this.times[indexFora];
      this.novoJogo.fora.gols = 0;

      this.showView('novoJogo');
    },
    showView(view){
      this.view = view;
    }
  },
  filters: {
    saldo(time) {
      return time.gm - time.gs;
    },
    letraMaiscula(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
})
