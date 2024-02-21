'use client';

import { TickIcon } from '@/app/assets/tick-icon';
import Button from '@/app/components/Button';
import Loader from '@/app/components/Loader';
import { ToastMessage } from '@/app/enum/toast-message.enum';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

let renderCount = 0;

const PaymentConfirmation = () => {
	const router = useRouter();
	const queryParams = useSearchParams();
	const startDate = queryParams?.get('startDate') || '';
	const endDate = queryParams?.get('endDate') || '';
	const listingId = queryParams?.get('listingId') || '';
	const price = queryParams?.get('totalPrice') || '';
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!startDate || !endDate || !listingId || !price || renderCount > 0) {
			return;
		}

		setIsLoading(true);
		const totalPrice = Number(price);
		axios
			.post('/api/reservations', {
				totalPrice,
				startDate,
				endDate,
				listingId,
			})
			.then(() => {
				toast.success(ToastMessage.LISTING_RESERVED);
			})
			.catch(() => {
				toast.error(ToastMessage.SOMETHING_WENT_WRONG);
			})
			.finally(() => {
				setIsLoading(false);
			});
		renderCount++;
	}, [price, startDate, endDate, listingId, queryParams]);

	const redirectToReservationPage = () => {
		router.push('/trips');
	};

	if (isLoading) {
		return (
			<div className='flex justify-center flex-col items-center'>
				<Loader />
				<p className='text-lg'>
					Please wait while we are processing your payment.
				</p>
			</div>
		);
	} else {
		return (
			<div className='flex justify-center flex-col gap-6 items-center'>
				<TickIcon />
				<div className='text-center'>
					<h1 className='text-lg font-semibold mb-2'>
						Thanks you for the payment.
					</h1>
					<p className='text-md'>
						Your trip has been successfully booked.
					</p>
				</div>
				<div className='w-40'>
					<Button
						label='Manage trips'
						onClick={redirectToReservationPage}
					/>
				</div>
			</div>
		);
	}
};

export default PaymentConfirmation;