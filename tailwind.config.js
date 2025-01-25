export default {
  content: [
    "./index.html",  // Garante que o HTML seja processado
    "./src/*/.{js,ts,jsx,tsx}"  // Inclui arquivos JS e TS dentro de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

