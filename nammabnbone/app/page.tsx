import EmptyState from '@/app/components/EmptyState';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getListings, { IListingsParams } from '@/app/actions/getListings';
import { ListingContainer } from '@/app/components/listing-container/listing-container';
import ClientOnly from './components/ClientOnly';

interface HomeProps {
	searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
	const listings = await getListings(searchParams);

	if (listings.length === 0) {
		return (
			<ClientOnly>
				<EmptyState showReset />
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<ListingContainer listings={listings} />
		</ClientOnly>
	);
};

export default Home;
