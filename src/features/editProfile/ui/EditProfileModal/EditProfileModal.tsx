import clsx from 'clsx'
import { Modal } from '@/shared/ui/Modal/Modal'
import cls from './EditProfileModal.module.scss'
import { EditProfileForm } from '../EditProfileForm/EditProfileForm'


interface EditProfileModalProps {
    className?: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void
}

export const EditProfileModal: React.FC<EditProfileModalProps> = (props) => {
	const { className, isOpen, setIsOpen } = props

	const onCloseHandler = () => {
		setIsOpen(false)
	}

	return (
		<Modal
			className={clsx(cls.editProfileModal, {}, [ className ])}
			isOpen={isOpen}
			onClose={onCloseHandler}
		>
			<EditProfileForm onCancel={() => setIsOpen(false)} />
		</Modal>
	)
}
