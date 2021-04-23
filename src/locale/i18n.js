import Vue from 'vue';
import i18next from 'i18next';
import Locize from 'i18next-locize-backend';
import VueI18Next from '@panter/vue-i18next';

Vue.use(VueI18Next);

const i18nextOptions = {
	backend: {
		projectId: '2c0a136a-e84b-4380-bbdd-8c7e033c41a3',
		apiKey: '5e9e1de2-bf79-4fbd-a74e-05772a0a1d12',
		referenceLng: 'en-US'
	},
	lng: 'en-US',
	fallbackLng: 'en-US',
	ns: [
		'common',
    'backlog',

	],
	defaultNS: 'common',
	saveMissing: true,

	missingKeyHandler: (lng, ns, key, fallbackValue) => {
		// eslint-disable-next-line
		// console.error('Missing key in translations', lng, ns, key, fallbackValue);
	},
};

i18next
	.use(Locize)
	.init(i18nextOptions, error => {
    if (error) {
      // eslint-disable-next-line
      // console.error('Error loading i18next', error);
      throw error;
    }
  });

export default new VueI18Next(i18next);
