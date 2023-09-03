/* eslint-disable no-use-before-define */
import { mountScenario } from '../../__test__/utils';
import HomePage from './HomePage';
import { scenarios } from './HomePage.story';

// eslint-disable-next-line no-unused-vars
import Hero from '../../components/Hero';
import Listings from '../../components/listings';

import { Wrapper, Content } from './styles';

describe('pages/HomePage', () => {
	beforeEach(jest.clearAllMocks);

	describe('scenarios', () => {
		Object.keys(scenarios).forEach((scene) =>
			describe(scene, () => {
				const wrapper = page.find(Wrapper);
				const content = wrapper.find(Content);
				const error = content.find('[data-tag="error"]');
				const Hero = wrapper.find(Hero);
				const listings = content.find(Listings);
				const mounted = mountScenario(scenarios[scene]);
				const page = mounted.find(HomePage);
				const props = page.props();

				it(`should mount a HomePage component`, () => {
					expect(page.length).toBe(1);
				});
				it(`should mount a Wrapper component`, () => {
					expect(wrapper.length).toBe(1);
				});
				it(`should mount a Hero component`, () => {
					expect(Hero.length).toBe(1);
				});
				it(`should mount a Content component`, () => {
					expect(content.length).toBe(1);
				});
				if (props.locationError) {
					it(`should mount an error element`, () => {
						expect(error.length).toBe(1);
					});
					it(`should mount an error element containing locationError message`, () => {
						expect(error.text()).toEqual(props.locationError.message);
					});
				} else if (props.listingsError) {
					it(`should mount an error element`, () => {
						expect(error.length).toBe(1);
					});
					it(`should mount an error element containing listingsError message`, () => {
						expect(error.text()).toEqual(props.listingsError.message);
					});
				} else {
					it(`should not mount an error element`, () => {
						expect(error.length).toBe(0);
					});
				}
				if (props.listingsLocation && props.listingsRegions) {
					it(`should mount a Listings component`, () => {
						expect(listings.length).toBe(1);
					});
				} else {
					it(`should not mount a Listings component`, () => {
						expect(listings.length).toBe(0);
					});
				}
			})
		);
	});
});
