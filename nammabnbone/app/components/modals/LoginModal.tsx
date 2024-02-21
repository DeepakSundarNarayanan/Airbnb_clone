// Import necessary dependencies and components
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

// Import custom hooks
import useRegisterModal from '../hooks/UseRegisterModel';
import useLoginModal from '../hooks/UseLoginModel';

// Import UI components
import Modal from './Modal';
import Input from '../inputs/Input';
import Heading from '../Heading';
import Button from '../Button';

// Import enums for better code readability
import {
	RegisterModalContentField,
	AccountField,
	AccountProvider,
	AccountProviderLabel,
} from '@/app/enum/login-register.enum';

import { ToastMessage } from '@/app/enum/toast-message.enum';

// Define the LoginModal component
const LoginModal = () => {
	// Access the Next.js router
	const router = useRouter();
	
	// Custom hooks to manage the state of login and register modals
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();
	
	// State to manage loading state during form submission
	const [isLoading, setIsLoading] = useState(false);

	// Form handling using react-hook-form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	// Function to handle login form submission
	const loginHandler: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		// Sign in using next-auth credentials provider
		signIn('credentials', {
			...data,
			redirect: false,
		}).then((callback) => {
			setIsLoading(false);

			// Handle successful login
			if (callback?.ok) {
				toast.success(ToastMessage.LOGGED_IN);
				router.refresh(); // Refresh the page after successful login
				loginModal.onClose(); // Close the login modal
			}

			// Handle login errors
			if (callback?.error) {
				toast.error(callback.error);
			}
		});
	};

	// Toggle between login and register modals
	const onToggle = useCallback(() => {
		loginModal.onClose();
		registerModal.onOpen();
	}, [loginModal, registerModal]);

	// JSX for the modal body
	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading
				title={RegisterModalContentField.TITLE}
				subtitle={RegisterModalContentField.SUBTITLE}
			/>
			<Input
				id={AccountField.EMAIL}
				label='Email'
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

	// JSX for the modal footer
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
      text-neutral-500 text-center mt-4 font-light'>
				<p>
					First time using Airbnb?
					<span
						onClick={onToggle}
						className='
              text-neutral-800
              cursor-pointer 
              hover:underline
            '>
						Create an account
					</span>
				</p>
			</div>
		</div>
	);

	// Render the Modal component with the defined content
	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title='Login'
			actionLabel='Continue'
			onClose={loginModal.onClose}
			onSubmit={handleSubmit(loginHandler)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

// Export the LoginModal component as the default export
export default LoginModal;
