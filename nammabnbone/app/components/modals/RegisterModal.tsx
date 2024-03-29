// Import necessary dependencies and components
'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Modal from './Modal';
import Input from '../inputs/Input';
import Heading from '../Heading';
import Button from '../Button';
import useRegisterModal from '../hooks/UseRegisterModel';
import useLoginModal from '../hooks/UseLoginModel';
import {
	AccountField,
	AccountProvider,
	AccountProviderLabel,
} from '@/app/enum/login-register.enum';
import { ToastMessage } from '@/app/enum/toast-message.enum';

// Define the RegisterModal component
const RegisterModal = () => {
	// Initialize necessary hooks and state
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);

	// Form handling using react-hook-form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	// Form submission logic
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		// Send a POST request to register a new user
		axios
			.post('/api/register', data)
			.then(() => {
				toast.success(ToastMessage.REGISTERED);
				registerModal.onClose();
				loginModal.onOpen();
			})
			.catch((error) => {
				toast.error(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// Toggle between register and login modals
	const onToggle = useCallback(() => {
		registerModal.onClose();
		loginModal.onOpen();
	}, [registerModal, loginModal]);

	// Define the content of the modal body
	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading title='Welcome to Nammabnb' subtitle='Create an account!' />
			<Input
				id={AccountField.EMAIL}
				label='Email'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id={AccountField.NAME}
				label='Name'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id={AccountField.PASSWORD}
				label='Password'
				type='password'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	// Define the content of the modal footer
	const footerContent = (
		<div className='flex flex-col gap-4 mt-3'>
			<hr />
			<Button
				outline
				label={AccountProviderLabel.GOOGLE}
				icon={FcGoogle}
				onClick={() => signIn(AccountProvider.GOOGLE)}
			/>
			<Button
				outline
				label={AccountProviderLabel.GITHUB}
				icon={AiFillGithub}
				onClick={() => signIn(AccountProvider.GITHUB)}
			/>
			<div
				className='
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        '>
				<p>
					Already have an account?
					<span
						onClick={onToggle}
						className='
              text-neutral-800
              cursor-pointer 
              hover:underline
            '>
						{' '}
						Log in
					</span>
				</p>
			</div>
		</div>
	);

	// Render the entire RegisterModal component
	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title='Register'
			actionLabel='Continue'
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

// Export the RegisterModal component as the default export
export default RegisterModal;
