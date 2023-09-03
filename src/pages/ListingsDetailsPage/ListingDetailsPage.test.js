import { mountScenario } from '../../__test__/utils';
import ListingDetailsPage from './ListingDetailsPage';
import { scenarios } from './ListingDetailsPage.story';

import {
  Wrapper,
  Content,
} from './styles';

import ListingDetails from '../../components/listing_details';

describe('pages/listing_details_page', () => {

  beforeEach(jest.clearAllMocks);

  describe('scenarios', () => {
    Object.keys(scenarios).forEach(scene => describe(scene, () => {
      const mounted = mountScenario(scenarios[scene]);
      const page = mounted.find(ListingDetailsPage);
      const props = page.props();
      const wrapper = page.find(Wrapper);
      const content = wrapper.find(Content);
      const listingDetails = content.find(ListingDetails);
      it(`should mount a ListingDetailsPage component`, () => {
        expect(page.length).toBe(1);
      });
      it(`should mount a Wrapper component`, () => {
        expect(wrapper.length).toBe(1);
      });
      it(`should mount a Content component`, () => {
        expect(content.length).toBe(1);
      });
      if (props.listing) {
        it(`should mount a ListingDetails component`, () => {
          expect(listingDetails.length).toBe(1);
        });
      } else {
        it(`should not mount a ListingDetails component`, () => {
          expect(listingDetails.length).toBe(0);
        });
      }
    }));
  });
});
