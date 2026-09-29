export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Gabriela Chumbinho',
  monogram: 'GC',
  headline: 'Sua beleza, na sua melhor expressão.',
  cro: 'CRO-RJ 47623',
  bio: 'Cirurgiã-dentista e especialista em harmonização facial em Cabo Frio. A Dra. Gabriela Chumbinho valoriza a escuta, o planejamento individual e a naturalidade para cuidar da expressão de cada paciente.',
  education: [] as string[],
  specialties: ['Harmonização orofacial', 'Estética facial', 'Planejamento individual'],
  phone: '+55 22 99852-2401',
  whatsapp: '5522998522401',
  whatsappUrl: 'https://wa.me/5522998522401',
  address: 'Cabo Frio, RJ',
  professionalPhilosophy: 'Valorizar a beleza que já é sua.',
  instagram: 'https://www.instagram.com/dra.gabrielachumbinho/',
  instagramHandle: '@dra.gabrielachumbinho',
  philosophy: ['SEUS TRAÇOS.', 'SUA HISTÓRIA.', 'SUA EXPRESSÃO.'],
  colors: { paper: '#f4eee9', ink: '#302624', taupe: '#926b6e', champagne: '#dec6a3', dark: '#221c1e', wine: '#2b1d24', muted: '#6f6260' },
  images: { hero: '/images/gabriela-hero.png', essence: '/images/gabriela-essencia.png', about: '/images/gabriela-sobre.png', beauty: '/images/gabriela-experiencia.png' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.png', label: 'Harmonia do olhar', alt: 'Registro de resultado facial em dois ângulos da mesma paciente.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1171 },
    { image: '/images/resultado-02.png', label: 'Delicadeza nos lábios', alt: 'Comparativo de antes e depois de lábios.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1166 },
    { image: '/images/resultado-03.png', label: 'Expressão em equilíbrio', alt: 'Comparativo facial lado a lado, antes e depois.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1289 },
    { image: '/images/resultado-04.png', label: 'Um olhar renovado', alt: 'Comparativo de antes e depois da região dos olhos.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1284 / 1276 },
    { image: '/images/resultado-05.png', label: 'Traços preservados', alt: 'Comparativo de antes e depois da região dos olhos e face.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1284 / 1252 },
    { image: '/images/resultado-06.png', label: 'Beleza em cada ângulo', alt: 'Comparativo facial da paciente em dois ângulos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1289 },
    { image: '/images/resultado-07.png', label: 'Naturalidade no detalhe', alt: 'Comparativo de antes e depois da região dos olhos.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1284 / 1265 },
    { image: '/images/resultado-08.png', label: 'Sorriso em evidência', alt: 'Comparativo de antes e depois do sorriso de uma paciente.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1283 / 1286 },
  ] },
  seo: { title: 'Dra. Gabriela Chumbinho | Harmonização Facial em Cabo Frio', description: 'Harmonização facial com planejamento individual e naturalidade em Cabo Frio. Conheça o cuidado da Dra. Gabriela Chumbinho e agende sua avaliação.', url: '' },
};

export const appointmentUrl = site.whatsappUrl;
